# Frontend Mentor - NFT preview card component solution


## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)



## Overview

### The challenge

This is a challenge for the JavaScript language. The dice should change randomly with each refresh and the result of the match should be shown in the header.

## My process

### Built with

-  HTML5 markup
- CSS custom properties
- javaScript


### What I learned

- how change a property of Pseudo-elements: for doing this because we can't chang it directly we in css set the property with a css variable and we change the value of that. 


```css
  h1::after{
  display: var(--show2);
```

```js
  document.querySelector("h1").style.setProperty('--show2','inline-block');
```

