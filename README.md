# Stata Syntax Highlighting Plugin for Obsidian

A comprehensive Stata syntax highlighting plugin for Obsidian that provides professional-grade syntax highlighting for Stata code blocks. Built with modern TypeScript and CodeMirror 6, offering extensive support for Stata commands and functions.

## Features

This plugin provides comprehensive Stata syntax highlighting including:

### **Core Syntax Support**
- **100+ Stata commands** including statistical analysis, data management, and programming commands
- **50+ Stata functions** covering mathematical, statistical, string, and date/time operations
- **Multiple comment styles** - line comments (`*`, `//`) and block comments (`/* */`)
- **String handling** with proper quote recognition
- **Complete operator support** - arithmetic, logical, comparison operators
- **Number recognition** - integers, decimals, and negative numbers

### **Highlighting Categories**
- **Keywords** - Stata commands like `regress`, `summarize`, `merge`, `generate` (blue, bold)
- **Functions** - Functions like `ln()`, `mean()`, `substr()`, `year()` (orange, bold)
- **Comments** - All comment styles (green, italic)
- **Strings** - Quoted text (red)
- **Numbers** - Numeric literals (purple)
- **Operators** - Mathematical and logical operators (dark blue, bold)

### **Dual Mode Support**
- **Editor highlighting** - Real-time syntax highlighting while editing
- **Preview mode** - Syntax highlighting in rendered markdown code blocks
- **Theme compatibility** - Works with both light and dark Obsidian themes

## Usage

### Code Blocks
Use standard markdown code blocks with the `stata` language identifier:

````stata
```stata
* Load and explore data
use survey_data.dta, clear
describe
summarize age income education

* Data management
generate log_income = ln(income)
replace age = . if age < 0
sort id

* Statistical analysis
regress income age education
predict predicted_income
margins, dydx(*)

* Programming constructs
foreach var of varlist age education income {
    quietly summarize `var'
    display "Mean of `var': " r(mean)
}
```
````

## Installation

### Manual Installation

1. Download the latest release files (`main.js`, `styles.css`, `manifest.json`)
2. Create a folder named `stata-syntax-highlighting` in your vault's `.obsidian/plugins/` directory
3. Copy the downloaded files into this folder
4. Restart Obsidian
5. Go to Settings → Community plugins
6. Find "Stata Syntax Highlighting" and toggle it on

### Development Installation

1. Clone this repository into your vault's `.obsidian/plugins/` directory:
   ```bash
   cd /path/to/your/vault/.obsidian/plugins/
   git clone https://github.com/onyxaegis/stata.obsidian.git stata-syntax-highlighting
   ```
2. Install dependencies:
   ```bash
   cd stata-syntax-highlighting
   npm install
   ```
3. Build the plugin:
   ```bash
   npm run build
   ```
4. Restart Obsidian and enable the plugin

## Supported Commands & Functions

## Configuration

### Plugin Settings
Access the settings through `Settings > Community plugins > Stata Syntax Highlighting > Options`.

#### **Color Schemes**
Choose from predefined color schemes or create custom configurations:

- **Default**: Classic blue/green highlighting scheme
- **VS Code Dark**: Dark theme matching VS Code's syntax highlighting  
- **VS Code Light**: Light theme matching VS Code's appearance
- **Stata Classic**: Traditional Stata editor colors
- **Solarized Dark**: Popular dark color scheme with muted tones
- **GitHub Light**: Clean, modern light theme
- **Custom**: Personalized color configuration

#### **Individual Element Customization**
When using "Custom" scheme, you can customize each syntax element:

- **Color picker** for each element (keywords, functions, comments, etc.)
- **Bold toggle** for font weight control
- **Italic toggle** for font style control
- **Live preview** of changes in real-time

#### **Custom Theme Management**
- **Save schemes**: Convert custom configurations into named schemes
- **Theme switching**: One-click switching between schemes
- **Settings persistence**: All preferences saved automatically

### Compatibility with Obsidian Themes
The plugin is designed to work seamlessly with all Obsidian themes:
- **Theme inheritance**: Respects Obsidian's base styling
- **Non-intrusive**: Only affects Stata syntax elements
- **Customizable**: Override any conflicts through plugin settings

## Comprehensive Stata Support

### Statistical & Analysis Commands
- **Regression analysis**: `regress`, `logit`, `probit`, `anova`
- **Panel data**: `xtset`, `xtreg`, `xtlogit`, `xtprobit`
- **Descriptive statistics**: `summarize`, `tabulate`, `correlate`, `describe`, `codebook`
- **Hypothesis testing**: `ttest`, `ranksum`, `signrank`, `test`, `testparm`
- **Time series**: `tsset`, `tsline`, `arch`, `var`

### Data Management Commands  
- **Data operations**: `use`, `save`, `merge`, `append`, `reshape`, `collapse`
- **Variable operations**: `generate`, `replace`, `recode`, `encode`, `decode`, `rename`
- **Data cleaning**: `drop`, `keep`, `duplicates`, `missing`, `destring`
- **Sorting & ordering**: `sort`, `gsort`, `order`, `bysort`

### Programming & Control
- **Flow control**: `if`, `else`, `foreach`, `forvalues`, `while`
- **Program definition**: `program`, `end`, `return`, `exit`
- **Macros**: `local`, `global`, `macro`, `tempvar`, `tempfile`
- **Display & debugging**: `display`, `quietly`, `noisily`, `capture`

### Functions
- **Mathematical**: `ln()`, `log()`, `exp()`, `sqrt()`, `abs()`, `round()`
- **Statistical**: `normal()`, `invnormal()`, `chi2()`, `mean()`, `sd()`
- **String**: `substr()`, `length()`, `upper()`, `lower()`, `trim()`
- **Date/Time**: `date()`, `year()`, `month()`, `day()`, `mdy()`
- **Missing values**: `missing()`, `cond()`, `inlist()`, `inrange()`

## Compatibility

- **Obsidian versions**: 0.15.0+
- **CodeMirror**: 6.x
- **Theme support**: All Obsidian themes (automatic light/dark detection)
- **Platform**: Cross-platform (Windows, macOS, Linux)

## Color Scheme

The plugin uses a carefully chosen color scheme that works with both light and dark themes:

**Light Theme:**
- Keywords: Blue (#0000ff), bold
- Functions: Orange (#ff6600), bold  
- Comments: Green (#008000), italic
- Strings: Red (#ff0000)
- Numbers: Purple (#800080)
- Operators: Dark blue (#000080), bold

**Dark Theme:**
- Keywords: Light blue (#569cd6), bold
- Functions: Yellow (#dcdcaa), bold
- Comments: Light green (#6a9955), italic
- Strings: Orange (#ce9178)
- Numbers: Light green (#b5cea8)
- Operators: Light blue, bold

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Setup

1. Fork the repository
2. Clone your fork to your local machine
3. Install dependencies: `npm install`
4. Make your changes
5. Build and test: `npm run build`
6. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a detailed history of changes.

## Acknowledgments

- Built for the Obsidian community
- Inspired by TextMate grammars and VS Code syntax highlighting
- Uses CodeMirror 6 for editor integration
- Special thanks to the Stata user community for feedback and suggestions
