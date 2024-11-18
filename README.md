# react-app-template
A template for React apps.

## Instructions
01. fork this repo
02. clone this repo
03. open a terminal to the root of the repo
04. execute `npm init`
05. fill out the requested info
06. execute `npm install --save` to install the dependencies for your app
07. open `src/index.html`
08. change the title and add any content that must be loaded before the React app loads
09. save the file
10. open `src/index.js`
11. edit the routes and add any content needed to define your routes such as additional imports
12. save the file
13. open `src/reducer.js`
14. edit the initial state and add additional logic to your reducer
15. save the file
16. open `src/App.js`
17. edit your app component as needed and add any additional content
18. save the file
19. open `src/styles.css`
20. add additional styles as needed
21. save the file
22. execute `npm run build`
23. execute `npm start`
24. visit http://localhost:8000/ in your web browser

Note: For better organization, place the root component for each route in their own file inside the `src/routes` folder. Place all other components in their own file inside the `src/components` folder.

## Deploying
1. execute `npm run deploy` to create a production build
2. serve the contents of the `public` folder with the web server of your choice
