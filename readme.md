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
  This locator will find an element by its text binding. Any element bound to variables containing the text or having an **ng-bind** description will be returned.  Check out the _div_ and the _span_ tags below.  It shows two ways in which a binding description is applied to an element.  
  ```
  <div>{{name}}</div>
  <span ng-bind="person.email"></span>
  ```
  Using the _binding_ locator, it will locate the element based on description and return the _div_ and/or _span_ for you.  
  ```
  by.binding('name');
  by.binding('person.email')
  ```
#### Model
  This locator will find an element by its **ng-model** angular expression.  
   ```
  <input type="text" ng-model="person.name">
  ```
  Finding an element by its model is the most common locator.  Finding an element based on a decription that binds it to the data it represents is as easy as
   ```
  by.model('person.name')
  ```
#### CSS
  This locator will find an element using CSS selectors.
   ```
  <div class="primary.header">
  <input placeholder="Property Address">
  ```
  The _div_ specified above can be found using the css class selector, where the **.** used to find an element by its css class.  
   ```
  by.css('.primary')
  ```
  The _input_ element can be found by first identifying the HTML tag, and then following that up with its attribute enclosed in brackets and attribute value enclosed in quotes as specified below:
  ```
  by.css('input[placeholder="Property Address"]')
  ```
  I would like to mention there are many other variations of CSS selectors. I often use the _$_ as a shorthanded version of _element(by.css(''))_.  Using this variation of the locator, I can search for the same element by performing the following:
   ```
  $('input[placeholder="Property Address"]')
  ```
  or search for an element by its ID or class
   ```
  $('#someid');
  *('.class');
  ```
#### ButtonText
  This locator will find a button element based on its text.  
  ```
  <button>Save</button>
  ```
  As you can see above, the button has the text 'Save.'  We can find this element by performing the following:
   ```
  by.buttonText('Save')
  ```
#### Repeater
  This locator helps us find elements inside an **ng-repeat** angular expression.
  
  
  
  
  
## Good Versus Bad Locators
After developing tests using Protractor for AngularJS webapps, I have found that best protractor locators are:

## Applying This In Real World
