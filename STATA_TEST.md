# Stata Plugin Test

This file is for testing the Stata syntax highlighting plugin with comprehensive coverage.

## Basic Stata Code Block

```stata
// This is a Stata program example
use mydata.dta, clear

// Data exploration commands
summarize age income education
describe 
tabulate gender region
correlate age income education

// Variable creation and functions
gen age_squared = age^2
gen log_income = ln(income)
gen sqrt_age = sqrt(age)
gen income_z = (income - mean(income)) / sd(income)

// Regression analysis
regress income age education age_squared
predict predicted_income
margins, dydx(*)

// Save results
save analysis_results.dta, replace

/* This is a block comment
   spanning multiple lines */
   
// Programming constructs
foreach var of varlist age income education {
    display "Processing: `var'"
    quietly summarize `var'
    local mean_`var' = r(mean)
}

forvalues i = 1/10 {
    gen dummy_`i' = (group == `i')
}

// String operations and functions
gen name_upper = upper("john doe")
gen id_string = "ID_" + string(id)
gen name_length = strlen(name)
gen first_word = word(name, 1)

// Conditional statements
replace income = . if income < 0
gen high_income = (income > 50000)
```

## Community Commands Test

```stata
// Popular community-written commands
reghdfe wage age education, absorb(state year) cluster(state)
estout using results.tex, replace

// Data management with community tools  
distinct id
winsor2 income, cuts(1 99) replace
fsum age income education

// Advanced econometrics
ivreg2 wage (education = father_education) age
xtivreg2 wage education age, fe i(id) j(year)
xtabond2 wage L.wage education age, gmm(L.wage) iv(education age) robust

// Causal inference
reghdfe outcome treatment age education, absorb(state year) cluster(state)
did_multiplegt outcome id time treatment, robust_dynamic dynamic(5)
```

## Advanced Statistical Functions

```stata
// Statistical distribution functions
gen normal_prob = normal(z_score)
gen chi2_prob = chi2tail(df, chi2_stat)
gen t_critical = invttail(df, 0.025)

// Random number generation
set seed 12345
gen random_normal = rnormal()
gen random_uniform = runiform()
gen random_poisson = rpoisson(lambda)

// Date and time functions
gen birthday_date = mdy(birth_month, birth_day, birth_year)
gen age_in_days = today() - birthday_date
gen year_from_date = year(date_var)

// Matrix functions
matrix A = (1,2\3,4)
matrix B = inv(A)
local det_A = det(A)
matrix C = cholesky(A'*A)
```

## Inline Code Tests

This is some `stata` inline code that should be highlighted.

Here are examples testing various command categories:
- **Data management**: `use mydata.dta, clear` and `merge 1:1 id using other.dta`
- **Variable creation**: `gen age_squared = age^2` and `egen mean_income = mean(income), by(group)`
- **Statistical analysis**: `regress income age education` and `margins, dydx(*)`
- **Community commands**: `reghdfe wage age, absorb(state)` and `estout using results.tex`
- **Functions**: `gen log_var = ln(variable)` and `gen normal_p = normal(z_score)`
- **String functions**: `gen clean_name = trim(name)` and `gen name_len = strlen(name)`
- **Programming**: `foreach var in age income { quietly sum `var' }`

### Macro Tests
- Local macros: `local myvar = "income"` then use ``myvar''
- Global macros: `global controls "age education"` then use `$controls`
- Extended macros: `local varlist : list varlist | controls`

### Function Tests with Parentheses
- Math functions: `generate result = sqrt(abs(variable))`
- String functions: `generate clean = trim(upper(name))`
- Statistical functions: `generate p_value = 2*ttail(df, abs(t_stat))`
- Date functions: `generate date_var = mdy(month, day, year)`

And some non-Stata inline code that should NOT be highlighted:
- `console.log("hello")` (JavaScript)
- `print("hello")` (Python)  
- `echo "hello"` (Bash)
- `SELECT * FROM table` (SQL)

## Advanced Syntax Features

```stata
// Complex macro usage
local controls "age education experience"
local outcomes "wage income"

foreach outcome of local outcomes {
    foreach control of local controls {
        quietly regress `outcome' `control'
        display "R-squared for `outcome' on `control': " e(r2)
    }
}

// Global macros and compound strings
global data_path "/Users/data"
global output_path "/Users/output" 
use "${data_path}/survey.dta", clear
save "${output_path}/cleaned_data.dta", replace

// String manipulation with compound delimiters
gen message = `"This is a "complex" string with quotes"'
gen path = `"${data_path}/file with spaces.dta"'

// Advanced programming with tempfiles and tempvars
tempfile temp_data
tempvar temp_income temp_age

// Matrix operations
matrix input A = (1,2,3\4,5,6\7,8,9)
matrix B = A'
matrix C = A * B
matrix list C

// Postfile for simulations
tempname simulation
postfile `simulation' trial beta se using simulation_results, replace

forvalues i = 1/1000 {
    // Simulation code here
    post `simulation' (`i') (uniform()) (0.1)
}
postclose `simulation'
```

## Data Types and Storage

```stata
// Different data types
gen byte_var = byte_variable
gen int_var = int_variable  
gen long_var = long_variable
gen float_var = float_variable
gen double_var = double_variable

// String variables
gen str20 name_var = "John Doe"
gen strL long_text = "This is a very long string..."

// Date and time variables
gen daily_date = daily("2023-01-01", "YMD")
gen monthly_date = monthly("2023m1", "YM")
gen quarterly_date = quarterly("2023q1", "YQ")
```

## Numbers, Operators, and Edge Cases

```stata
// Various number formats
set obs 1000
gen x = _n
gen pi = 3.14159
gen scientific = 1.23e-5
gen negative = -999.99

// All operators
gen addition = x + 5
gen subtraction = x - 3  
gen multiplication = x * 2
gen division = x / 4
gen exponentiation = x^2
gen modulo = mod(x, 7)

// Logical operators  
gen flag1 = (x >= 10) & (x <= 100)
gen flag2 = (x < 5) | (x > 95)
gen flag3 = !(x == 50)
gen flag4 = x ~= 50  // Not equal

// Comparison operators
gen equal = (x == 50)
gen not_equal = (x != 50) 
gen less_than = (x < 25)
gen less_equal = (x <= 25)
gen greater_than = (x > 75)
gen greater_equal = (x >= 75)

// Assignment operators
replace x = x + 1 if x < 10
gen y = cond(x > 50, 1, 0)
```

## Unicode and Extended String Functions  

```stata
// Unicode string functions (Stata 14+)
gen unicode_len = ustrlen("Hello 世界")
gen unicode_upper = ustrupper("hello world")
gen unicode_word = ustrword("hello world", 1)
gen unicode_pos = ustrpos("hello world", "world")

// Regular expressions
gen has_digit = regexm(string_var, "[0-9]")
gen cleaned = regexr(string_var, "[^a-zA-Z]", "")
gen extracted = regexs(1) // After running regexm with groups

// Advanced string manipulation
gen reversed = strreverse(name)
gen soundex_code = soundex(name)
gen proper_case = strproper(lower(name))
```

## Testing Edge Cases

```stata
// Comments in various positions
summarize income // End of line comment
/* Inline comment */ generate new_var = old_var
* Traditional Stata comment at start of line

// Mixed quotes and macros
local path `"C:\Users\Name With Spaces\Data"'
local message "The path is: `path'"
display `"`message'"'

// Function calls with complex arguments
gen complex_result = sqrt(abs(ln(max(income, 1))))
gen nested_string = substr(trim(upper(name)), 1, 10)

// Macro expansion in function calls
local varname "income"
gen log_var = ln(`varname')
gen summary_stats = mean(`varname') + sd(`varname')
```

This comprehensive test file demonstrates all the syntax elements that should be properly highlighted by the enhanced Stata plugin, including keywords, functions, operators, strings, macros, and community commands.
