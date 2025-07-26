# Changelog

All notable changes to the Stata Syntax Highlighting Plugin will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-07-26

### Added
- **Comprehensive Stata syntax highlighting** with TextMate-inspired patterns
- **600+ Stata commands** including:
  - Statistical analysis commands (`regress`, `logit`, `probit`, `margins`, etc.)
  - Data management commands (`use`, `save`, `merge`, `generate`, `replace`, etc.)
  - Programming commands (`foreach`, `forvalues`, `if`, `macro`, `local`, `global`, etc.)
  - Panel data commands (`xtset`, `xtreg`, `xtlogit`, etc.)
  - Survey and complex analysis commands
- **200+ Stata functions** including:
  - Mathematical functions (`ln`, `exp`, `sqrt`, `abs`, `max`, `min`, etc.)
  - Statistical functions (`normal`, `invnormal`, `chi2tail`, `ttail`, etc.)
  - String functions (`substr`, `length`, `upper`, `trim`, `regexm`, etc.)
  - Date/time functions (`mdy`, `today`, `year`, `month`, `day`, etc.)
  - Random number functions (`runiform`, `rnormal`, `rbinomial`, etc.)
  - Matrix functions (`inv`, `det`, `trace`, `cholesky`, etc.)
- **Community package support** for popular packages:
  - Fixed effects: `reghdfe`, `ppmlhdfe`, `ivreghdfe`
  - Output tables: `estout`, `esttab`, `outreg2`, `asdoc`
  - Data tools: `distinct`, `winsor2`, `fsum`, `table1`
  - Causal inference: `did_multiplegt`, `csdid`, `rdrobust`, `synth`
  - Econometrics: `ivreg2`, `xtabond2`, `xtivreg2`, `boottest`
  - Graphics: `coefplot`, `binscatter`, `grc1leg`

### Language Features
- **Advanced macro support**: Local macros (`` `macro' ``) and global macros (`$macro`, `${macro}`)
- **Multiple comment styles**: Line comments (`//`), block comments (`/* */`), traditional Stata comments (`*`)
- **String handling**: Regular strings, compound strings (`` `"..."' ``), macro expansion within strings
- **Complete operator support**: Arithmetic, logical, comparison, and assignment operators
- **Number recognition**: Integers, decimals, scientific notation, negative numbers
- **Function detection**: Functions highlighted only when followed by parentheses

### Syntax Highlighting
- **Keywords** (blue, bold): Stata commands and reserved words
- **Functions** (blue, italic): Built-in and user-defined functions
- **Comments** (green, italic): All comment styles
- **Strings** (red): Quoted text and compound strings
- **Macros** (teal, bold): Local and global macro references
- **Numbers** (purple): Numeric literals
- **Operators** (dark blue, bold): Mathematical and logical operators
- **Punctuation** (gray): Brackets, parentheses, semicolons

### Technical Implementation
- **CodeMirror 6 StreamLanguage**: Modern, efficient syntax parsing
- **TypeScript implementation**: Full type safety and modern development practices
- **TextMate-inspired patterns**: Comprehensive regex-based recognition
- **State-aware parsing**: Proper context handling for strings, comments, and macros
- **Extensible architecture**: Easy addition of new commands and packages

### Development Tools
- **Comprehensive test suite**: `STATA_TEST.md` with extensive syntax examples
- **Build system**: ESBuild configuration for development and production
- **Development mode**: File watching with hot reload
- **TypeScript configuration**: Strict type checking and modern ES features

### Documentation
- **Comprehensive README**: Detailed usage examples and feature documentation
- **Installation guides**: Both manual and development installation instructions
- **Contributing guidelines**: Clear instructions for adding new commands and functions
- **Technical documentation**: Architecture and implementation details

### Compatibility
- **Obsidian API**: Compatible with Obsidian v0.15.0+
- **CodeMirror 6**: Uses modern editor framework
- **Cross-platform**: Works on desktop and mobile Obsidian installations
- **Plugin ecosystem**: Integrates seamlessly with other Obsidian plugins

This release represents a complete, professional-grade Stata syntax highlighting solution for Obsidian, with extensive coverage of the Stata language ecosystem including community packages and modern best practices.
