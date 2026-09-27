// Ch03-NodeExample.js
const name = process.argv[2];
const dob = process.argv[3]; // YYYY-MM-DD

if (!name || !dob) {
    console.log("Usage: node hello.js <name> <YYYY-MM-DD>");
    process.exit(1);
}

const birthDate = new Date(dob);
const today = new Date();

let age = today.getFullYear() - birthDate.getFullYear();
if (
    today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
) {
    age--;
}

console.log(`Hello ${name}, you are ${age} years old.`);
