---

title: "Install disqus api on gatsbyJs"
date: "2018-09-30"
author: "SeungJin YOUN"
thumbnail : "http://foreveryoungadult.com/_uploads/images-new/50197/disqustips__span.png" 
tags : [" reactjs " ," gatsbyjs ","겟츠비","리액트","개발자블로그","블로그","플랫폼","disqus","댓글","api","라이브러리"]

---

1. npm Installing


`$ npm install react-disqus-thread`

2. emerge below codes

```javascript
var React = require('react');
var ReactDisqusThread = require('react-disqus-thread');

var App = createClass({
	
	handleNewComment: function(comment) {
		console.log(comment.text);
	}

	render: function () {
		return (
			<ReactDisqusThread
				shortname="example"
				identifier="something-unique-12345"
				title="Example Thread"
				url="http://www.example.com/example-thread"
				category_id="123456"
				onNewComment={this.handleNewComment}/>
		);
	}
});

React.render(<App/>, document.getElementById('container'));
```


3. but error occured


4. so changed to another api in gatsby Plugin

the name is 

## [gatsby-plugin-talkyard](https://www.npmjs.com/package/@debiki/gatsby-plugin-talkyard)

1. 
```
npm install --save @debiki/gatsby-plugin-talkyard  # with npm
yarn add @debiki/gatsby-plugin-talkyard            # with Yarn
```

2. add plugins into gatsby-config.js

```javascript
plugins: [
    {
      resolve: `@debiki/gatsby-plugin-talkyard`,
      options: {
        talkyardServerUrl: 'https://comments-demo.talkyard.io'
      }
    },
]
```

3. import and add code into blog post template

```javascript
import TalkyardCommentsIframe from '@debiki/gatsby-plugin-talkyard';

// And where the comments shall appear:
<TalkyardCommentsIframe />
```

4. go to the formal site [https://www.talkyard.io/](https://www.talkyard.io/)

![Imgur](https://i.imgur.com/Xv1fDaA.png)

and create your community through the procedure.

5. modify gatsby-config.js's talkyard plugin's url

![Imgur](https://i.imgur.com/sbtHhVe.png)



## Again to Disqus from ed-comment

as the manager answered on my question, 'How to Content Security Policy header become 'self' from 'none''.

as he mentionned, 

![Imgur](https://i.imgur.com/yTQq46B.png)

this isn't working.

so I changed my head from ed-comment to Disqus.

Beside, Disqus offers unlimitted free from charge.

but ed-comment is not if you are not managing a server from ubuntu or git bash.

I am a javascript user so I've changed my head.


## then I met this error during following the suggested install this Disqus react.



```javascript
10:13  error  Parsing error: Unexpected token, expected ";"

   8 |     }
   9 |
> 10 |     render(){
     |             ^
```

but it's a grammar, when we create a `.js` within const, we do not need to use the `render(){}` but just `return()` that was the reason to happen that error.

## then I changed like below from suggested form.

![Imgur](https://i.imgur.com/yxXf9qs.png)


## but the proptype 'string' error occured.

`npm install --save prop-types`

but in research, I found this.

```javascript
Note:

React.PropTypes has moved into a different package since React v15.5. Please use the prop-types library instead.

We provide a codemod script to automate the conversion.
```

so I had to add them from seperate library.
but not sure it will gonna be working


## another trial to install on second date.

I've tried to install the disqus-react what is introduced through the gatsby plugins.

However, that was not working...

but the during my above trial time, my uploaded question on the ed-comment got an answer.

As it responded, I need to add the website address to `talkyard` setting get allowing my website to add `talkyard.net`.

but I added `localhost:8000` in the addition.

But now, I can upload the url as I succeded deploying this gatsby blog on github repository.





## Reference

https://js.coach/react-disqus-thread?search=disqus