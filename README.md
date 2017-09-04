# Studying Code

<p align="center"><a href="https://vuejs.org" target="_blank"><img width="100"src="https://vuejs.org/images/logo.png"></a></p>
<p align="center"><a href="" target="_blank"><img width="100"src="https://image.slidesharecdn.com/merged4-150325174453-conversion-gate01/95/ecmascript-6-5-638.jpg?cb=1427323594"></a></p>
<p align="center"><a href="" target="_blank"><img width="100"src="https://frontendmasters.com/assets/functional-js.png"></a></p>
<p align="center"><a href="" target="_blank"><img width="100"src="http://v2.wp-api.org/assets/images/banner.jpg"></a></p>

# Resources

- Video
  - Fun Fun Function: https://www.youtube.com/watch?v=CQqwU2Ixu-U&feature=youtu.be&t=26s

- Books
  - You Don't Know JS: https://github.com/getify/You-Dont-Know-JS

- Articles
  - https://deliciousbrains.com/creating-a-wordpress-theme-using-the-rest-api-and-vue-js/


# Notes

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
