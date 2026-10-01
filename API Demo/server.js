const PORT = 3000;
const SQL_SERVER = "localhost";
const USER_NAME = "APIAccount";
const PASSWORD = "Strawberry123";

const express = require("express");
const sql = require("mssql");

const app = express();
app.use(express.json());

// SQL Server connection settings
const config = {
    server: SQL_SERVER,
    database: "Northwind",

    // Use these if using SQL Server authentication:
    user: USER_NAME,
    password: PASSWORD,

    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

// -------------------------------------------------------
// GET - return all customers
// -------------------------------------------------------
app.get("/api/customers", async (req, res) => {
    try {
        const pool = await sql.connect(config);

        const result = await pool.request().query(`
            SELECT CustomerID,
                   CompanyName,
                   ContactName,
                   ContactTitle,
                   Address,
                   City,
                   Region,
                   PostalCode,
                   Country,
                   Phone,
                   Fax
            FROM Customers
            ORDER BY CompanyName
        `);

        res.json(result.recordset);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// -------------------------------------------------------
// GET - return one customer
// -------------------------------------------------------
app.get("/api/customers/:id", async (req, res) => {
    try {
        const pool = await sql.connect(config);

        const result = await pool.request()
            .input("CustomerID", sql.NChar(5), req.params.id)
            .query(`
                SELECT *
                FROM Customers
                WHERE CustomerID = @CustomerID
            `);

        if (result.recordset.length === 0) {
            return res.status(404).json({
                message: "Customer not found"
            });
        }

        res.json(result.recordset[0]);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// -------------------------------------------------------
// POST - create a customer
// -------------------------------------------------------
app.post("/api/customers", async (req, res) => {
    try {
        const {
            CustomerID,
            CompanyName,
            ContactName,
            ContactTitle,
            Address,
            City,
            Region,
            PostalCode,
            Country,
            Phone,
            Fax
        } = req.body;

        const pool = await sql.connect(config);

        await pool.request()
            .input("CustomerID", sql.NChar(5), CustomerID)
            .input("CompanyName", sql.NVarChar(40), CompanyName)
            .input("ContactName", sql.NVarChar(30), ContactName)
            .input("ContactTitle", sql.NVarChar(30), ContactTitle)
            .input("Address", sql.NVarChar(60), Address)
            .input("City", sql.NVarChar(15), City)
            .input("Region", sql.NVarChar(15), Region)
            .input("PostalCode", sql.NVarChar(10), PostalCode)
            .input("Country", sql.NVarChar(15), Country)
            .input("Phone", sql.NVarChar(24), Phone)
            .input("Fax", sql.NVarChar(24), Fax)
            .query(`
                INSERT INTO Customers
                (
                    CustomerID,
                    CompanyName,
                    ContactName,
                    ContactTitle,
                    Address,
                    City,
                    Region,
                    PostalCode,
                    Country,
                    Phone,
                    Fax
                )
                VALUES
                (
                    @CustomerID,
                    @CompanyName,
                    @ContactName,
                    @ContactTitle,
                    @Address,
                    @City,
                    @Region,
                    @PostalCode,
                    @Country,
                    @Phone,
                    @Fax
                )
            `);

        res.status(201).json({
            message: "Customer created",
            CustomerID: CustomerID
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// -------------------------------------------------------
// PUT - update an existing customer
// -------------------------------------------------------
app.put("/api/customers/:id", async (req, res) => {
    try {
        const {
            CompanyName,
            ContactName,
            ContactTitle,
            Address,
            City,
            Region,
            PostalCode,
            Country,
            Phone,
            Fax
        } = req.body;

        const pool = await sql.connect(config);

        const result = await pool.request()
            .input("CustomerID", sql.NChar(5), req.params.id)
            .input("CompanyName", sql.NVarChar(40), CompanyName)
            .input("ContactName", sql.NVarChar(30), ContactName)
            .input("ContactTitle", sql.NVarChar(30), ContactTitle)
            .input("Address", sql.NVarChar(60), Address)
            .input("City", sql.NVarChar(15), City)
            .input("Region", sql.NVarChar(15), Region)
            .input("PostalCode", sql.NVarChar(10), PostalCode)
            .input("Country", sql.NVarChar(15), Country)
            .input("Phone", sql.NVarChar(24), Phone)
            .input("Fax", sql.NVarChar(24), Fax)
            .query(`
                UPDATE Customers
                SET CompanyName  = @CompanyName,
                    ContactName  = @ContactName,
                    ContactTitle = @ContactTitle,
                    Address      = @Address,
                    City         = @City,
                    Region       = @Region,
                    PostalCode   = @PostalCode,
                    Country      = @Country,
                    Phone        = @Phone,
                    Fax          = @Fax
                WHERE CustomerID = @CustomerID
            `);

        if (result.rowsAffected[0] === 0) {
            return res.status(404).json({
                message: "Customer not found"
            });
        }

        res.json({
            message: "Customer updated"
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// -------------------------------------------------------
// PATCH - update selected fields of an existing customer
// -------------------------------------------------------
app.patch("/api/customers/:id", async (req, res) => {
    try {
        const pool = await sql.connect(config);

        // Columns that the API permits the user to change
        const allowedFields = {
            CompanyName:  sql.NVarChar(40),
            ContactName:  sql.NVarChar(30),
            ContactTitle: sql.NVarChar(30),
            Address:      sql.NVarChar(60),
            City:         sql.NVarChar(15),
            Region:       sql.NVarChar(15),
            PostalCode:   sql.NVarChar(10),
            Country:      sql.NVarChar(15),
            Phone:        sql.NVarChar(24),
            Fax:          sql.NVarChar(24)
        };

        const request = pool.request()
            .input("CustomerID", sql.NChar(5), req.params.id);

        const changes = [];

        // Build the SET clause from the properties actually supplied
        for (const field in allowedFields) {
            if (Object.hasOwn(req.body, field)) {
                changes.push(`${field} = @${field}`);

                request.input(
                    field,
                    allowedFields[field],
                    req.body[field]
                );
            }
        }

        if (changes.length === 0) {
            return res.status(400).json({
                message: "No valid fields supplied"
            });
        }

        const result = await request.query(`
            UPDATE Customers
            SET ${changes.join(", ")}
            WHERE CustomerID = @CustomerID
        `);

        if (result.rowsAffected[0] === 0) {
            return res.status(404).json({
                message: "Customer not found"
            });
        }

        res.json({
            message: "Customer updated"
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// -------------------------------------------------------
// DELETE - delete a customer
// -------------------------------------------------------
app.delete("/api/customers/:id", async (req, res) => {
    try {
        const pool = await sql.connect(config);

        const result = await pool.request()
            .input("CustomerID", sql.NChar(5), req.params.id)
            .query(`
                DELETE FROM Customers
                WHERE CustomerID = @CustomerID
            `);

        if (result.rowsAffected[0] === 0) {
            return res.status(404).json({
                message: "Customer not found"
            });
        }

        res.json({
            message: "Customer deleted"
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// -------------------------------------------------------
// Start server
// -------------------------------------------------------

app.listen(PORT, () => {
    console.log(`Northwind API running on port ${PORT}`);
});