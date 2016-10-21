# Installing and using Express with Mocha unit testing

## Using this app as a template

* Install the packages with npm install
* Get server running with ``` set DEBUG=myapp:* & npm start ```
* Use Mocha unit testing with ``` mocha ```
* Also possible to use ``` mocha -R nyan ```

## Express installation guide

* Install Express template generator with
  ``` npm install express-generator -g ```
* Create project template with ``` express ExpressDaemi ```
* Navigate to created folder ``` cd ExpressDaemi ```
* You now have a starter template for a site using the Express framework.
  Notice that it already has a package.json file and thus does not require
  you to run npm init since it is already taken care of.
* However, the package.json file comes with some packages that are (probably)
  not installed on your machine. Use ``` npm install to install these ```
  dependencies.
* To start the server, run ``` set DEBUG=myapp:* & npm start ```
* The files are now being served on http://http://localhost:3000/ using Express
* The page being displayed is created from both the index.jade and layout.jade
  templates with information sent through the index.js script. Once you change
  these, refresh the page to see the changes.
* The templating engine (Jade) is being deprecated so let's update the
  templating engine to Pug (the new version of jade). Cancel the current
  operation serving the files and run ``` npm install pug --save ```
* Now go into app.js in the root and change app.set('view engine', 'jade');
  to app.set('view engine', 'pug'); to use the new templating engine.
* Go into the views folder and change the ending from .jade to .pug
  for all files
* Now run set DEBUG=myapp:* & npm start again. Now you are serving a site using
  Express as a framework and pug as your templating engine. To read more about
  how pug is used, see the following: https://pugjs.org/api/getting-started.html

## Mocha installation guide

* I recommend using both ``` npm install --global mocha ``` and ```
  install --save-dev mocha ```
* Create a directory for Mocha to test using ``` mkdir test ```
* Create a javascript file (you can name it whatever you want) in the newly
  created test folder and use the code provided in testing.js
* Now we want to run the tests defined in our test folder. Run
  ``` mocha -R nyan ```
* Nyan cat is not pleased. This is unacceptable. Check out the testing.js file
  and fix it so the tests pass.
* Once you believe you have fixed the tests, run ``` mocha -R nyan ```
* If everything is fixed, nyancat should be happy now
* To see more on what Mocha can do, refer to: https://mochajs.org/
* To read more about what type of assertions can be used,
  refer to: https://nodejs.org/api/assert.html
