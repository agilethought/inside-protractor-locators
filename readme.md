# Inside Protractor Locators

by @amad410 and @mbcooper


## Project Setup
  This is the same setup as [https://github.com/mbcooper/ProtractorExample](https://github.com/mbcooper/ProtractorExample "our Protractor Introduction")

1. Clone this repo.
1. Install Node.js® if you haven't already. See more on [official Node.js® website](http://nodejs.org/).
    
    On OS X you can install Node.js® just by typing
    
    ```
    brew update
    brew install node
    ```
    
    Don't have Homebrew on OS X? 
    
    ```
    ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    ```
    
    More on official [Homebrew website](http://brew.sh/).
    
1. Install node global dependencies 
	
	```
	npm install -g gulp-cli
	npm install -g bower
	npm install -g jscs
	npm install -g protractor
	```
	
1. In the directory where you placed the project, install all project's dependencies

	```
	npm install
	bower install
	```

1. You need to update selenium webdrivers

	```
	webdriver-manager update
	```

1. Finally, run project by typing

    ```
    gulp
    ```

## Understanding Locators
Locators are functions that will help protractor grab the specific element that you want from an applications DOM.  Every protractor locator is formatted as (by.*), where * is the locator you have chosen to locate the element. Here is a list of the most common locators:

* **_by.binding("{{status}}")_**
* **_by.model("{{ng-model parameter}}")_**
* **_by.css("{{css locator}}")_**
* **_by.buttonText("{{button text}}")_**
* **_by.repeater("{{repeating lists}}")_**
* **_by.id("{{element ID}}")_**
* **_by.linkText("{{link text}}")_**
* **_by.name("{{repeating lists}}")_**
* **_by.tagName("{{element tagname}}")_**
* **_by.xPath("{{xpath}}")_**

#### Binding
  This locator will find an element by its text binding. Any element bound to variables containing the text or having an _ng-bind_ description will be returned.  Check out the **div** and the **span** tags below.  It shows two ways in which a binding description is applied to an element.  
  ```
  <div>{{name}}</div>
  <span ng-bind="person.email"></span>
  ```
  Using the _binding_ locator, it will locate the element based on description and return the **div** and/or **span** for you.  
  ```
  by.binding('name');
  by.binding('person.email');
  ```
#### Model
  This locator will find an e

## Good Versus Bad Locators
After developing tests using Protractor for AngularJS webapps, I have found that best protractor locators are:

## Examples
