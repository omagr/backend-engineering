// ! npm -> node packages manager - global command - comes with nodeJS

// ? why we use it
// - 1 re-use our own code in other porjects
// - 2 use code written by other devs
// - 3 share own solution to other devs
// - 4 provides utility functions to full bloom libraries/framworks
// - 5 packages == modules == dependency

// # commands
// @ to know the version of nodeJS
// - npm --version

// @ local dependency - use it only in this project!
// - npm install <package>

// @ local dependency - --save is prucation to make sure that the packahe is listed in packabge.json, now the this issue is foxed!
// - npm install <package> --save

// @ global dependency - use it in any project!
// - npm install -g <package>
// - npx <package/tool>

// @ to download all the dependency from package.json
// - npm install

// @ dev dependency, when we need some packages only in development but not in production we use this, ex-nodemon
// - npm install <package> -D / npm install <package> --save-dev

// @ delete package,
// - 1: manual approach
// -> npm uninstall <package>
// - 2: nuclear approach
// -> delte node_modules dir and packages.lock.json file & remove that dependency from package.json

// ? what is package.json
// # The file is menifest file & the heart of any Node project. It records important metadata about a project which is required before publishing to NPM, and also defines functional attributes of a project that npm uses to install dependencies, run scripts, and identify the entry point to our package.
// - manual approch first create package.josn in root dir and then create propertise
// - npm init (step by step, press enter to skip)
// - npm init -y (everything setop to default)

// ! some dependecy needs other packages as well, so it will automatically download! ex-bootstrap

// !  some scripts accept shortcuts some dont
// - "start": "nodemon app.js",     npm start / npm run start
// - "run":   "node app.js"         npm run dev

// ! some dependecy needs other packages as well, so The package-lock. json is a lockfile that holds information on all that oher dependency maybe using, the dependencies or packages installed for a node. js project, including their exact version numbers. Purpose.

//@ "lodash": "^4.17.20"
// * it have thre value which is a contract between user and creator
// - 4 -> major changes
// - 17 -> minor changes
// - 20 -> patch changes/bug fixes
