import re

numbers = ['zero', 'wun', 'two', 'tree', 'fower',
           'fife', 'six', 'seven', 'ait', 'niner']

alphas  = ['alpha', 'bravo', 'charlie', 'delta', 'echo',
           'foxtrot', 'golf', 'hotel', 'india', 'juliet',
           'kilo' ,'lima', 'mike', 'november', 'oscar', 'papa',
           'quebec', 'romeo', 'sierra', 'tango', 'uniform',
           'victor', 'whisky', 'xray', 'yankee', 'zulu']

codes = {str(i):name for i, name in enumerate(numbers)}    
codes.update({name[0].upper():name for name in alphas})
reg = 'WG07 OKD'

result = re.sub(r'(\w)', lambda m: codes[m.groups()[0]]+' ', reg)

print (result)