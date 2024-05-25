# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



----------------------------------------------------------------------------------


Step1: Used Bootstrap Navbar to build the Navbar. Navbar has following items:
   > logo Text/icon

   > Search component

   > Cart button


How to build re-usable components? why do we need to give preference to them?

- Re-usable components :
             - When you have similar functionality of UI. instead of duplicating code.
             - when building large-scale apps, re-usable promote consistency, using same component across different parts of app.
             - Instead of re-inventing the wheel everytime, can use existing components to speed up the development process and focus on more practical critical aspects of our app.

- Creating re-usable components:
            1. one advantage of creating a re-usable input component is that you maintain the appearance of the input in various parts of your app.
              - You can determine what type of input by passing a props.
            
            2. For a functional component to be re-usable, it has to take  in data or datasets(via props) and return an output (usually through a function passed via props).
            It is recommended that mutable state should be kept in the state property of a component to ensure they work correctly.

            FormInput component - receives inputType - type of input element to render.
                                - it also takes in a method onChange() to receive the value sent back out from the input.
                                - the component manages its value locally and only returns the updated state value to the component it is called from.

            Button component - type of button.
                             - onclick function.
                             - children to display the content of the button.

            Searhbar component - a searchbar component can be used in various parts of a web app where a search functionality is required.
                        Examples: - navigation headers.
                                  - sidebars.
                                  - filters.
                                  - data tables.
                                  - and more
                           
                           - onChange method - pass e.target.value and inside function call props function and pass a e.target.value.


- In React,
         - Functional components are pure Javascript functions that accept an argument known as props
           and output  a React Element(JSX).

- Hooks in React,

         - state Hooks (useState).
         - Effect hooks (useEffect).
         - context hooks (useContext).
         - ref hooks (useRef).
         - Performance hooks(useMemo, useCallback).
      


-React Bootstrap components used.
     - Card
     - Navbar
     - Dropdown menu
     - Button