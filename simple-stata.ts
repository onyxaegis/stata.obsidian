/**
 * Simple test version of Stata syntax highlighting
 * This version uses basic highlighting to ensure core functionality works
 */

import { LanguageSupport, StreamLanguage } from '@codemirror/language';
import { EditorView } from '@codemirror/view';

/**
 * Create simple Stata language support for testing
 */
export function createSimpleStataLanguageSupport(): LanguageSupport {
    const stataStreamLanguage = StreamLanguage.define({
        name: 'stata',
        
        startState() {
            return {
                inComment: false,
                inString: false,
                stringDelimiter: null
            };
        },
        
        token(stream: any, state: any): string | null {
            // Handle whitespace
            if (stream.eatSpace()) {
                return null;
            }
            
            // Handle comments - line comments
            if (stream.match(/\/\/.*$/)) {
                return 'comment';
            }
            
            // Handle comments - start of block comment
            if (stream.match('/*')) {
                state.inComment = true;
                return 'comment';
            }
            
            // Handle inside block comment
            if (state.inComment) {
                if (stream.match('*/')) {
                    state.inComment = false;
                }
                stream.next();
                return 'comment';
            }
            
            // Handle line comments starting with *
            if (stream.sol() && stream.match(/^\s*\*.*$/)) {
                return 'comment';
            }
            
            // Handle strings
            if (!state.inString && (stream.peek() === '"' || stream.peek() === "'")) {
                state.inString = true;
                state.stringDelimiter = stream.peek();
                stream.next();
                return 'string';
            }
            
            // Handle inside strings
            if (state.inString) {
                if (stream.peek() === state.stringDelimiter) {
                    state.inString = false;
                    state.stringDelimiter = null;
                    stream.next();
                    return 'string';
                }
                stream.next();
                return 'string';
            }
            
            // Handle numbers
            if (stream.match(/^[+-]?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?/)) {
                return 'number';
            }
            
            // Handle Stata functions
            if (stream.match(/^(ln|log|log10|exp|exp10|sqrt|abs|round|floor|ceil|int|sign|mod|max|min|sum|mean|sd|var|count|range|iqr|skewness|kurtosis|normal|invnormal|uniform|runiform|chi2|invchi2|t|invt|F|invF|binomial|poisson|gamma|invgamma|beta|invbeta|sin|cos|tan|asin|acos|atan|atan2|sinh|cosh|tanh|asinh|acosh|atanh|substr|subinstr|subinword|length|strlen|upper|lower|proper|ltrim|rtrim|trim|word|wordcount|real|string|strofreal|strtoname|abbrev|plural|autocode|recode|irecode|missing|cond|inlist|inrange|between|clip|year|month|day|quarter|week|dow|doy|date|mdy|dmy|ymd|daily|weekly|monthly|quarterly|yearly|halfyearly|cofd|dofq|dofw|dofm|dofy|dofh|hofd|mofd|qofd|wofd|yofd|clock|mdyhms|dhms|hms|msofhours|msofminutes|msofseconds|hours|minutes|seconds|tc|td|tw|tm|tq|th|ty|bofd|cofc|Cdhms|Chms|Clock|cofC|dhms|dofC|hms|hoursC|minutesC|msofhoursC|msofminutesC|msofseconds|secondsC|tC|_n|_N|_pi|_rc|c|e|r)\s*\(/)) {
                return 'builtin';
            }
            
            // Handle Stata keywords - comprehensive list
            if (stream.match(/^(use|save|clear|regress|summarize|sum|gen|generate|replace|if|in|by|bysort|sort|merge|append|drop|keep|rename|label|browse|list|describe|desc|codebook|count|tabulate|tab|correlate|corr|egen|collapse|reshape|destring|tostring|encode|decode|notes|compress|format|order|gsort|duplicates|missing|mvdecode|mvencode|preserve|restore|tempfile|tempvar|tempname|quietly|noisily|capture|set|local|global|macro|program|end|return|exit|continue|break|display|disp|log|cmdlog|translate|which|findfile|ssc|ado|update|net|search|help|about|creturn|ereturn|sreturn|scalar|matrix|mata|version|syntax|args|confirm|unab|levelsof|distinct|unique|save13|use13|saveold|more|pause|query|sysdir|adopath|type|copy|erase|mkdir|rmdir|shell|pwd|ls|dir|infile|outfile|insheet|outsheet|export|import|cd|file|foreach|forvalues|while|else|predict|margins|test|testparm|estat|estimates|esttab|outreg|outreg2|logout|tabstat|centile|xtile|pctile|_pctile|binscatter|twoway|scatter|line|bar|histogram|kdensity|graph|gr|combine|anova|ttest|ranksum|signrank|kwallis|spearman|pwcorr|factor|pca|cluster|mds|ca|correspondence|logit|logistic|probit|ologit|oprobit|mlogit|clogit|cloglog|poisson|nbreg|zinb|zip|tobit|cnreg|intreg|truncreg|heckman|ml|nlcom|lincom|contrast|margins|marginsplot|bootstrap|jackknife|permute|simulate|postestimation|predict|residuals|fitted|dfbeta|leverage|cooksd|rstudent|rstandard|hettest|imtest|ovtest|linktest|lrtest|hausman|xtset|xtreg|xtivreg|xtlogit|xtprobit|xtpoisson|xtnbreg|xttobit|xtgls|xtregar|xtpcse|xtgee|xtdpd|xtdpdsys|xtabond|xthausman|xttest0|xttest1|xttest2|xttest3|xtcsd|xtunitroot|tsset|tsline|tsfill|tsreport|tsrevar|lag|lead|difference|seasonal|arch|garch|var|svar|vec|vecrank|irf|fcast|rolling|bysort|statsby|xi|dummies|i\.|c\.|o\.|#|##|ibn\.|ibn|co\.|co)\b/i)) {
                return 'keyword';
            }
            
            // Handle operators
            if (stream.match(/^(==|!=|<=|>=|<|>|&|\||\+|\-|\*|\/|\^|!|~|=)/)) {
                return 'operator';
            }
            
            // Handle punctuation
            if (stream.match(/^[(){}\[\];,.]/)) {
                return 'punctuation';
            }
            
            // Handle variable names and identifiers
            if (stream.match(/^[a-zA-Z_][a-zA-Z0-9_]*/)) {
                return 'variable';
            }
            
            // Default: consume character
            stream.next();
            return null;
        }
    });
    
    return new LanguageSupport(stataStreamLanguage, [
        EditorView.theme({
            '.cm-keyword': { 
                color: '#0000ff', 
                fontWeight: 'bold' 
            },
            '.cm-builtin': { 
                color: '#ff6600', 
                fontWeight: 'bold' 
            },
            '.cm-comment': { 
                color: '#008000', 
                fontStyle: 'italic' 
            },
            '.cm-string': { 
                color: '#ff0000' 
            },
            '.cm-number': { 
                color: '#800080' 
            },
            '.cm-operator': { 
                color: '#000080', 
                fontWeight: 'bold' 
            },
            '.cm-variable': { 
                color: '#000000' 
            },
            '.cm-punctuation': { 
                color: '#666666' 
            }
        })
    ]);
}
