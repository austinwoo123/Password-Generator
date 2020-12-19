# Password Generator
Our assignment was to create an application that would help the user generate a random password based on the accepted criteria. This app will run in the browser and adapts to multiple screen sizes. 
## Getting Started
1. Copy the repo from GitLab using your ssh key
2. Run Git bash
3. Type in "code ." to open Visual Studios Code
4. Open the index.html, script.js, and style.css file

## Technologies Used
- HTML -used to create elements on the DOM
- CSS- styles html elements on page
- Git- version control system to track changes to source code
- GitHub- hosts repository that can be deployed to GitHub Pages
- BootStrap CSS Framework- Quickly design and customize responsive mobile-first sites using front-end open source toolkit, featuring SASS variables and mixins, responsive grid system, and prebuilt components.
- JavaScript- Programming language that is used to prompt the user and generate a random password based on the user's inputs. 

## Code Snippet
```
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specials = "!@#$%^&*_?";
```
This code shows the possible strings that can be used to determine what will be in the generated password. 

```
for (var i = 0; i < passwordLength; i++) {
  var generateP = password1.charAt(Math.floor(Math.random() * password1.length));
  finalPassword = finalPassword.concat(generateP);
}

This code shows how I took the array and joined it with the strings and put it through a for loop. I used Math.Floor and math.random to generate a random new password.  
```
## Deployed Link

* [https://github.com/austinwoo123/Responsive-Portfolio]

## Authors
Austin Woo
- [Link to Portfolio Site](https://austinwoo123.github.io/Responsive-Portfolio/.)
- [Link to Github](https://github.com/austinwoo123)
- [Link to LinkedIn](https://www.linkedin.com/in/awoo95/)

## License

This project is licensed under the UC Berkeley Extension


