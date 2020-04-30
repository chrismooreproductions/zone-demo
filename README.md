This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Thanks for checking my code! Obviously to run just `yarn install` and then `yarn start` to get up and running.

## Interesting things

The app is animated (well, it's actually an animated transformation) using the ~~withFade HOC~~ Fade component in ./src/animated.
The Sidebar components then the movies are transitioned in using transition delay to give a rather fetching swoosh effect
when the page loads :).

I used CSS grid to style the layout, switching to flexbox at 600px screen width for mobile and smaller screen widths.

The app state is held in 2 custom hooks which are useMovies and useGenres. These are responsible for fetching the now playing movies
and all genres from the TMDb API. There is a hard stop in the useEffect hooks of these custom hooks to prevent the API
from being called if there is any data stored in the state, this ensures the APIs are called only once as per the spec.

There is a config file in ./src/config that contains the API keys and URL roots etc.

The movies are automatically returned in order of popularity from the API (highest to lowest).

Movies are filtered in 2 steps:

1. By the user's selected genres (if there are any genres selected in the sidebar!)
2. By the popularity of these filtered movies

Sorry there are no tests, I didn't have much time to work on this. I did use the PropTypes package, though I generally
prefer typescript these days!

For more (with tests!!) please see:
https://github.com/chrismooreproductions/routefinder
https://github.com/chrismooreproductions/shopping-cart-demo

I also have a vue / typescript demo if you would like to see that.

Thanks :)

Chris

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
