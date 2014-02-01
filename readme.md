# Wintersmith / Grunt.js / gh-pages

This is a demo set up to show a possible workflow for using the [Wintersmith](http://wintersmith.io) static site generator, along with [Grunt.js](http://gruntjs.com/) to handle processing SASS and deploying to Github pages.

Deployed example page: [hop.ie/wintersmith](http://hop.ie/wintersmith)

## Getting started

### Node.js and Grunt

Before setting up, you will need Node.js, and Grunt available. Install [Node.js](http://nodejs.org/) according to the instructions for your system.

Node.js includes the npm package manager. You can then install the Grunt command line interface, run the following:

	npm install -g grunt-cli

### Clone the repo

To set up a local version of the tools, clone this repo into a working directory:

	git clone git@github.com:donovanh/wintersmith.git learnsome-wintersmith

This will download the contents into a folder called `learnsome-wintersmith`. You'll need to download the various modules used by Grunt.js. If you've not done so, move to the `learnsome-wintersmith` directory and run:

	npm install

This will install any dependencies.

You can then run the project using the command:

	grunt

The site should now be visible at `http://localhost:8080`.

## Deploying

After updating the content, the site can be deployed to Github Pages. Before deploying, edit the `Gruntfile.js` file, replacing this line with the location of your repo:

	repo: 'git@github.com:donovanh/wintersmith.git'

It should be in the form:

	repo: 'git@github.com:your_username/your_repo.git'

If you have keys set up with Github, you can then deploy to your repo's `gh-pages` branch by running:

	grunt deploy

## Pull requests and questions

All pull requests welcome, please also send an email to donovan@learnsome.co if you have any questions. I am on Twitter also as [@donovanh](http://twitter.com/donovanh).

## License

MIT applies. Feel free to use this for experimentation or beginning your own projects.

