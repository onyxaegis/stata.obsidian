# Stata Syntax Highlighting Plugin for Obsidian

Provides syntax highlighting for Stata code blocks (```stata ... ```) in Obsidian using CodeMirror 6. Supports standard Stata commands, functions, and comment styles.


## Installation
Through the community plugins within Obsidian.

### Manual Installation
https://github.com/onyxaegis/stata.obsidian
1. Download the latest release files (`main.js`, `styles.css`, `manifest.json`)
2. Create a folder named `stata-syntax-highlighting` in your vault's `.obsidian/plugins/` directory
3. Copy the downloaded files into this folder
4. Restart Obsidian
5. Go to Settings → Community plugins
6. Find "Stata Syntax Highlighting" and toggle it on

## Configuration

Customising colours with CSS Snippets.

If you'd like to override the default Stata highlighting colours used by this plugin, you can use CSS snippets.

Step 1: Enable the "CSS Snippets" plugin
In Obsidian, go to Settings → Appearance
Scroll down to the "CSS snippets" section

If the option is not visible, ensure the "Custom CSS" plugin is turned on:
- Go to Settings → Community plugins
- Enable "Custom CSS"
- Return to Settings → Appearance → CSS snippets
- Click "Open snippets folder"

If the folder doesn’t exist, Obsidian will create it for you.

Step 2: Create your custom CSS file
In the .obsidian/snippets/ folder, and create a new blank text file.
Example filename: stata-custom.css (changing the extenstion will update the file to that file type. Yes these instructions may be obvious to some, but to a statistics postgrad, they weren't, so I'm passing on some tips that may help)

Paste the following code into that blank css file:

/* Custom Stata highlighting (My preferred colours used with dark mode just as an example, you can delete these comments) */

/* Commands (keywords) */
.stata-keyword, .cm-keyword {
	color: #ADD8E6; /* Light blue */
	font-weight: bold;
}

/* Strings */
.stata-string, .cm-string {
	color: #800080; /* Purple */
}

/* Comments */
.stata-comment, .cm-comment {
	color: #228B22; /* Forest green */
	font-style: normal;
}

/* Numbers */
.stata-number, .cm-number {
	color: #FF69B4; /* Bright pink */
}

/* Operators */
.stata-operator, .cm-operator {
	color: #7FFFD4; /* Aquamarine */
	font-weight: bold;
}



## Contributing

For major errors, please open a GitHub issue to discuss what needs to change. Adding features may be beyond my capabilities but you're welcome to:

1. Fork the repository https://github.com/onyxaegis/stata.obsidian
2. Clone your fork to your local machine
3. Install dependencies: `npm install`
4. Make your changes
5. Build and test: `npm run build`
6. Submit a pull request


### Acknowledgments
- https://docs.obsidian.md/Plugins/Getting+started/Build+a+plugin got me started using https://github.com/obsidianmd/obsidian-sample-plugin
- Built by a PhD candidate with limited experience writting TypeScript and CSS. ChatGPT helped a lot. 
- Inspired by a VS Code syntax highlighting extension https://marketplace.visualstudio.com/items?itemName=VesperHastie.stata-mata-language