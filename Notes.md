# Studying Code

<p align="center"><a href="https://vuejs.org" target="_blank"><img width="100"src="https://vuejs.org/images/logo.png"></a></p>
<p align="center"><a href="" target="_blank"><img width="100"src="https://image.slidesharecdn.com/merged4-150325174453-conversion-gate01/95/ecmascript-6-5-638.jpg?cb=1427323594"></a></p>
<p align="center"><a href="" target="_blank"><img width="100"src="https://frontendmasters.com/assets/functional-js.png"></a></p>
<p align="center"><a href="" target="_blank"><img width="100"src="http://v2.wp-api.org/assets/images/banner.jpg"></a></p>

SDFGHJK

# To Do In Coding

- Practice WP + WP REST api
- Integrate Browsersync in webpack for hot reloading on network  https://forum.vuejs.org/t/how-do-i-add-browsersync-to-a-default-vue-cli-webpack-template/8447/2

# Resources

- Video
  - Fun Fun Function: https://www.youtube.com/watch?v=CQqwU2Ixu-U&feature=youtu.be&t=26s

- Books
  - **javascript**
    - You Don't Know JS: https://github.com/getify/You-Dont-Know-JS

- Articles
  - **wordpress**
    - https://deliciousbrains.com/creating-a-wordpress-theme-using-the-rest-api-and-vue-js/
    - https://www.sitepoint.com/wp-api/


# Notes

## why???

### passing variables around versus doing it all more clean and dynamically

STATUS: Question

While trying to implement this piece of seemingly simple code into a Vue project. I came across the problem of passing a variable in this scope system of JS in vue.  

    var imgs = document.images,
        len = imgs.length,
        counter = 0;

    [].forEach.call( imgs, function( img ) {
        img.addEventListener( 'load', incrementCounter, false );
    } );

    function incrementCounter() {
        counter++;
        if ( counter === len ) {
            console.log( 'All images loaded!' );
        }
    }

Ok, so I got as far as understanding it might be best to add a listener for each image to load. This search for an answer also re- reminded me that I should up my knowledge of basic JS. Probably by re-doing some work.

Also I saw very refined programming from Rasmus' side in the setContent function of Bini Abidi

## Global

### Parsing

Parsing is the process of taking elements and splitting them up in parts.
HTML parsing is basically: taking in HTML code and extracting relevant information

[Parsing explanation on Stackoverflow](https://stackoverflow.com/questions/20421316/what-does-html-parsing-mean)

## Node

### Node `process.argv`

Prints the command line arguments passed to node in an array

    print process.argv
    process.argv.forEach((val, index, array) => {
      console.log(index + ':' + val)
    })

## Things to try

For asynchronous functions, try this

    let requests = [1,2,3].map((item) => {
        return new Promise((resolve) => {
        asyncFunction(item, resolve);
      });
    })
    Promise.all(requests).then(() => console.log('done'));


## Router

When the route is changed, content is GET’ed and SET’ed into the page with GET_WORKS and then SET_WORKS. How do you GET a specific post without rendering (displaying)?

Answer: You have the JSON data available. It is a JS task to load this into the page. In the case of images it is possible to dynamically create an image object and assign it a source.

    let img = new Image()
    img.src = 'http://http://bringoutthegimp.com/wp-content/uploads/2016/02/gimp-10.jpg'

TL;DR: Setting the src loads the image.

Vue Problem: Not sure how to commit a mutation without setting the content

## WP REST api


## JS

### Coercion

There is a difference between implicit and explicit coercion. Coercion is the conversion of one type of variable to the other.

    let a = 10
    console.log(a)  // 10     Implicit coercion to print to console
    a = String(a)   //        Explicit coercion to a string
    console.log(a)  // "10"

### `number.toFixed(n)`

Function on the `number` object. Converts to a string with n decimals


### forEach.call() method

https://stackoverflow.com/questions/16053357/what-does-foreach-call-do-in-javascript

### Rest Parameter  `…`

as in `…mapActions([])`

https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/rest_parameters
https://rainsoft.io/how-three-dots-changed-javascript/


## arrow function expression `() =>`

what is: `() =>`

shorter syntax, no binding of `this`

https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions

## constant variables

`let` and `const`

Both: block scope rather than function scope

const
	not constant, but one-time assignment

### Constants

  Constants are typed in uppercase with an underscore between words:

      const TAX_RATE = 0.19

https://blog.mariusschulz.com/2015/12/31/constant-variables-in-javascript-or-when-const-isnt-constant


## Import / Export `import defaultmember from "module-name"`

How is it possible you sometimes write the import functions without their extension?

	 import api from '../../api/wp'

Answer: It is a solution offered by the compiler. (the software that bundles code for production. In this case Babel)

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
https://developer.mozilla.org/en/docs/web/javascript/reference/statements/export

Why wrap each function in an export default?

Bigger picture

The upside to all of this extra learning and abstraction levels, is the fact I will be able to write code which is condensed, clean and flexible.
