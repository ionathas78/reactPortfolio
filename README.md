# reactPortfolio - 
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> Reactive Portfolio-ing

When we finished the React segment in class, I knew I had to have a portfolio
kitted out with React methodologies. The modular component aesthetic, the just-
in-time rendering processing, the next-generation ES6 programming principles.
It was all tres chic, and I wanted to show it off in my toolkit.


## User Story

```
AS A Web Developer 
I WANT to show off my React skills
SO THAT I can exhibit my work
```

```
GIVEN THAT I have a portfolio
WHEN I navigate through the links
THEN I find a single-page web app
WHEN I look at the page structure
THEN I find just-in-time React rendering
WHEN I look at the program structure
THEN I find discrete React components
```
            


## Graphic
![Project Image 0](./build/images/ReactPort_AboutMe.jpg)

## Table of Contents
* [Technologies](#Technologies)
* [Getting Started](#Getting)
* [Usage](#Usage)
* [Project Status](#Project)
* [Frequently Asked Questions](#FAQ)
* [Questions](#Additional)
* [Contributing](#Contributing)
* [License](#License)
## Technologies
Node.js\
React\
react-router-dom

## Getting Started
```
npm install
```
This is a react app, so it keeps the source files in the ./src folder and creates an optimized app folder in the ./build directory.
If you want to build the app for deployment, use the following script:
```
npm run deploy
```
As a side note, in deploying this React page to GitHub-pages, I had to change all image paths from "../../images" to "./images" to reflect the deployed directory structure. To avoid breaking the desktop version of the site, I made these changes directly to the main-x.js build file in the ./build/static/js directory; however, that means I have to fix it again every time I rebuild the project. Kind of a pain... I'm wondering if I need to just put the image files into the same folder as the React component in the future to avoid this problem...
To clarify, this wasn't an issue of the relative paths not working because I had them in a JSON config file. The image link on the AboutMe page was broken in the same way, so it was just a matter of the paths not adjusting properly when the project built.
Also, in case I need to find this again later, I'll make one more note here. I was having issues getting the landing page for my single-page BrowserRouter React app to render properly on gh-pages. In order to deploy it, I had to add the following attribute to the BrowserRouter component in my _App.js_ file: **basename={process.env.PUBLIC_URL}**, thusly:
```
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <header className="App-header"> 
          <NavBar>
            ...
```
Adding this attribute resolved the broken-route issue neatly.

## Usage
```
npm start
```
Running this app locally starts up a server on localhost:3000, which you can hit directly for the main (AboutMe) page. The links in the Galleria page are external, so you won't be able to navigate them without an active web connection.

![Project Usage Image 0](./build/images/ReactPort_Gallery.jpg)
![Project Usage Image 1](./build/images/ReactPort_Links.jpg)

## Project Status
Current


## Additional Questions
Email or DM me.

## Contributing
Contact us for guidelines on submitting contributions.

## License
This project is licensed under the The MIT License.

![User Avatar Picture](https://avatars1.githubusercontent.com/u/61706660?v=4)
### ionathas78

This file generated on 5/31/2020 by goodReadMeGenerator, copyright 2020 Jonathan Andrews

