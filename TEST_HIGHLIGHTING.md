# Test Stata Syntax Highlighting

This is a test file to verify that the Stata syntax highlighting plugin works correctly.

## Basic Stata Code Block

```stata
* This is a Stata comment
// This is also a comment

use "/path/to/data.dta", clear
summarize age income education
generate log_income = ln(income)
replace age = . if age < 0

regress income age education
save "output.dta", replace
```

## More Complex Example

```stata
* Load and clean data
use "survey_data.dta", clear
drop if age < 18 | age > 65
generate female = (gender == 2)
label define sexlbl 0 "Male" 1 "Female"
label values female sexlbl

* Descriptive statistics
summarize income age education
tabulate education female, chi2

* Regression analysis
regress log_income age i.education female
test age education
```

Let's see if this renders correctly with syntax highlighting!
