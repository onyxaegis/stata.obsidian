import { Plugin, MarkdownView, MarkdownPostProcessorContext } from 'obsidian';
import { createSimpleStataLanguageSupport } from './simple-stata';

export default class StataPlugin extends Plugin {

    async onload() {
        console.log('Loading Stata Syntax Highlighting Plugin - Simple Test Version');
        
        // Register simple Stata language support
        this.registerEditorExtension(createSimpleStataLanguageSupport());
        
        // Register code block processor for preview mode
        this.registerMarkdownCodeBlockProcessor('stata', this.processStataCodeBlock.bind(this));
    }

    onunload() {
        console.log('Unloading Stata Syntax Highlighting Plugin');
    }

    /**
     * Process Stata code blocks in preview mode
     */
    processStataCodeBlock(source: string, el: HTMLElement, ctx: MarkdownPostProcessorContext) {
        // Clear any existing content
        el.empty();
        
        // Create a pre element with proper classes
        const pre = el.createEl('pre', { cls: 'stata-code' });
        const code = pre.createEl('code', { cls: 'language-stata' });
        
        // Apply basic class-based highlighting
        this.applyBasicClassHighlighting(source, code);
    }
    
    /**
     * Apply basic class-based highlighting to Stata code
     */
    private applyBasicClassHighlighting(source: string, container: HTMLElement) {
        const lines = source.split('\n');
        
        lines.forEach((line, index) => {
            if (index > 0) {
                container.appendText('\n');
            }
            
            // Simple tokenization
            this.tokenizeLine(line, container);
        });
    }
    
    /**
     * Simple line tokenizer for basic highlighting
     */
    private tokenizeLine(line: string, container: HTMLElement) {
        // Handle line comments
        if (line.trim().startsWith('*') || line.includes('//')) {
            const span = container.createSpan({ cls: 'stata-comment' });
            span.textContent = line;
            return;
        }
        
        // Simple word-by-word processing
        const words = line.split(/(\s+)/);
        
        for (const word of words) {
            if (!word) continue;
            
            if (/^\s+$/.test(word)) {
                // Whitespace
                container.appendText(word);
            } else if (this.isStataKeyword(word)) {
                const span = container.createSpan({ cls: 'stata-keyword' });
                span.textContent = word;
            } else if (this.isStataFunction(word)) {
                const span = container.createSpan({ cls: 'stata-function' });
                span.textContent = word;
            } else if (/^".*"$/.test(word) || /^'.*'$/.test(word)) {
                // String
                const span = container.createSpan({ cls: 'stata-string' });
                span.textContent = word;
            } else if (/^[+-]?\d+\.?\d*$/.test(word)) {
                // Number
                const span = container.createSpan({ cls: 'stata-number' });
                span.textContent = word;
            } else {
                // Regular text
                container.appendText(word);
            }
        }
    }
    
    /**
     * Check if a word is a Stata keyword
     */
    private isStataKeyword(word: string): boolean {
        const keywords = [
            // Data management
            'use', 'save', 'clear', 'drop', 'keep', 'sort', 'merge', 'append', 'gen', 'generate', 
            'replace', 'rename', 'label', 'browse', 'list', 'describe', 'desc', 'codebook', 'count',
            'order', 'gsort', 'duplicates', 'missing', 'mvdecode', 'mvencode', 'preserve', 'restore',
            'compress', 'format', 'destring', 'tostring', 'encode', 'decode', 'notes',
            
            // Statistical analysis
            'summarize', 'sum', 'tabulate', 'tab', 'correlate', 'corr', 'regress', 'reg', 
            'logit', 'logistic', 'probit', 'ologit', 'oprobit', 'mlogit', 'clogit', 'poisson', 
            'nbreg', 'tobit', 'anova', 'ttest', 'ranksum', 'signrank', 'kwallis',
            
            // Data transformation
            'egen', 'collapse', 'reshape', 'bysort', 'by', 'foreach', 'forvalues', 'while',
            'tempfile', 'tempvar', 'tempname', 'quietly', 'noisily', 'capture',
            
            // Programming and control
            'if', 'in', 'else', 'program', 'end', 'return', 'exit', 'continue', 'break',
            'local', 'global', 'macro', 'scalar', 'matrix', 'mata', 'set', 'display', 'disp',
            
            // File operations
            'cd', 'pwd', 'dir', 'ls', 'infile', 'outfile', 'insheet', 'outsheet', 'export', 'import',
            'log', 'cmdlog', 'translate', 'copy', 'erase', 'mkdir', 'rmdir', 'shell', 'type',
            
            // Graphics
            'graph', 'gr', 'twoway', 'scatter', 'line', 'bar', 'histogram', 'kdensity', 'combine',
            
            // Panel data
            'xtset', 'xtreg', 'xtlogit', 'xtprobit', 'xtpoisson', 'xtnbreg', 'xttobit', 'xtgls',
            
            // Time series
            'tsset', 'tsline', 'tsfill', 'arch', 'garch', 'var', 'svar', 'vec',
            
            // Post-estimation
            'predict', 'margins', 'test', 'testparm', 'estat', 'estimates', 'lincom', 'nlcom',
            
            // Help and utilities
            'help', 'search', 'which', 'findfile', 'ssc', 'ado', 'update', 'net', 'about'
        ];
        return keywords.includes(word.toLowerCase());
    }
    
    /**
     * Check if a word is a Stata function
     */
    private isStataFunction(word: string): boolean {
        const functions = [
            'ln', 'log', 'log10', 'exp', 'exp10', 'sqrt', 'abs', 'round', 'floor', 'ceil', 'int', 
            'sign', 'mod', 'max', 'min', 'sum', 'mean', 'sd', 'var', 'count', 'range', 'iqr',
            'normal', 'invnormal', 'uniform', 'runiform', 'chi2', 'invchi2', 't', 'invt',
            'substr', 'subinstr', 'length', 'strlen', 'upper', 'lower', 'proper', 'trim',
            'year', 'month', 'day', 'quarter', 'week', 'date', 'mdy', 'dmy', 'ymd',
            'missing', 'cond', 'inlist', 'inrange'
        ];
        // Remove parentheses if present for function detection
        const cleanWord = word.replace(/\($/, '');
        return functions.includes(cleanWord.toLowerCase());
    }
}
