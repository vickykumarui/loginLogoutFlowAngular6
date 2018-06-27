# IonProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


Initially generated as angular 5 but upgraded it to angular 6
I have used css3 and bootstrap 4 for styling and page responsiveness
I have used ngbootstrap to integrated bootstrap component 


## Project work flow

Start project using 'ng serve'
unit test using 'ng test'

As the page loads 
User will be navigated to welcome page
where user will get option to login

On click of login user will be navigated to login page

##Login page
##This pgae user can enter user name and password

valid username and password object

{
       'abhi':"123",
       'vicky':"123456",
       'kumar':"k654321"
   }
   
   Where key is username and value is password
   
   1. user name 'abhi', password "123"
   2. user name 'vicky', password "123456"
   3. user name 'kumar', password "k654321"
   
 Both the fields has validation implemented where following specail characters are not allowed
 
 \ : backslash
/ : slash
, : comma
. : dot
^ : care

If user enter invalid value or emmpty field submit button will be disabled it will be enabled only on valid entry

User also has option to go back to welcome page by clicking on anchor tag

Note
If user refresh page in login he/she will be redirected at welcome page 

On click of submit button we will make a call to service (service documentation is at end) till the time we get response from service loading wheel will be shown and user cant perform any 
other operation

If user name and password is incorrect or internet connection is not there user will get error banner at top of login page

If user name and password is correct user will be navigated to landing page

## Landing page
 In this page user will be shown with list of books 
 And in the header logout button 
 if user refresh page here he/she will continue to stay in same page
 On click of logout button user will get a pop up saying if he wants to login on click of ok, we will take the user name wich is stored in session and make a call to logout service on successfule logout user will be redirected to welcome page
 
## Common header
 Throught out application we have common header present at top which indicates in which page user is curently present and in landing page there is extra logout button to help user to logout from application
 
 ## bootstrap component used
	1. crousel in welcome page
	2. Modal on click of logout
	
	
## Service

For writting api i have used amazon web services(AWS)

I have one lambda function each for login and logout and exposed Api for 

 ## Login
 URL: https://93uyekkry0.execute-api.us-east-1.amazonaws.com/loginApidevStage
 Sample Valid request
  {
  "userName": "vicky",
  "password": "123456"
}

Response
 {
  "success": true,
  "token": "HARDCODEDTOKEN"
}

Sample invalid request


{
  "userName": "vicky",
  "password": 123
}

Response:

{
  "success": false,
  "errorMessage": "Login error: Invalid username or password"
}


## Logout
URL: https://jdposr6fy4.execute-api.us-east-1.amazonaws.com/logoutDevApi

## Sample valid request

{
  "userName": "vicky"
}

Response: 
{
  "success": true,
  "message": "Logged out successfully"
}
## Sample invalid request 

{
  "userName": "incorretUser"
}

{
  "success": false,
  "errorMessage": "Invalid user"
}

## Ui code can also be downloaded from my github account
https://github.com/vickykumarui/loginLogoutFlowAngular6


I will separately attach lambda Function file for login and logout

