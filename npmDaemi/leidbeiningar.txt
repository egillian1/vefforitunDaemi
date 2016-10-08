# NodeJS and Node Package Manager (npm)

## Start

* Install nodeJS through whatever you want 
  https://nodejs.org/en/download/
* Create folder for project (root folder)
* Navigate to folder for project in cmd and use 
  following command: 
  ```npm init```
* Follow prompts in cmd window to create 
  dependencies (package.json)
* All dependencies should now be kept in package.json

## Add dependencies for Bootstrap

* Find package that you want to use 
  via https://www.npmjs.com/
* For this example we will use 
  Bootstrap https://www.npmjs.com/package/bootstrap
* This is a package our end-product will use so we use 
  the following command: 
  ```npm install bootstrap --save```
* Check if any errors came up while installing and 
  deal with them
* Check in your project root folder. It should now 
  contain a folder called node_modules where 
  Bootstrap is installed
* Bootstrap also requires JQuery so we will download
  that as well using: 
  ```npm install jquery --save```
* Handle anny errors, you should now have JQuery in 
  node_modules as well
* Get the starter template from the Bootstrap 
  website http://getbootstrap.com/getting-started/#template
* Change the paths in the template to correspond to
  your node_modules paths
* You now have a site with Bootstrap and Jquery

## Add dependencies for Browsersync

* Browsersync is a package for developers, not for the
  end product. In this case, we use the following command:
  ```npm install -g browser-sync --save-dev```
  This makes browsersync available on a global scope (shell
  access) and saves it as a development tool in your packages
* You now have browsersync installed and can use it when 
  writing code. Use the following command:
  ```browser-sync start --server --files "*"```
  This command tells browsersync to watch all the files in
  your project. Once a change is made, the browser automatically
  reloads to the newest version

## Loading dependencies from a NodeJS project

* When receiving a project from another party, it will 
  usually not have a node_modules folder, just the package.json
  file
* The trick here is to navigate to the folder in a shell and
  use the following command:
  ```npm install```
* Now npm installs the packages for you and you can use the
  program
  