# Node ESLint Config

This is the Chiedo Labs eslint configuration file for Node.JS projects. Currently it's based on the Airbnb eslint config.

## Installation

Install this eslint config on npm by running

	  yarn add --dev eslint eslint-config-chiedo-labs-node eslint-config-airbnb-base eslint-plugin-import eslint-plugin-mocha

Add to your project by creating an <code>.eslintrc</code> file and then setting the contents to the following.

	  {
	    "extends": "eslint-config-chiedo-labs-node"
	  }

## Development

1. Make a change
2. Commit your changes to git and push your changes to a branch on Github.
3. Submit a pull request


## Deployment (For those with access)

1. run <code>npm login</code> in the terminal
2. run <code>npm version patch</code>
3. run <code>npm publish</code>
