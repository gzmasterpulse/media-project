# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

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

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# Media Manager Project Structure

This project use bootstrap framework.

````
.
├── README.md
├── jsconfig.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.js
│   ├── assets
│   │   ├── background.png
│   │   ├── image.jpg
│   │   ├── logo.png
│   │   ├── password-icon.png
│   │   ├── user-icon.png
│   │   └── username-icon.png
│   ├── components
│   │   ├── Nav.js
│   │   ├── login
│   │   │   └── Index.js
│   │   └── route
│   │       └── Index.js
│   ├── hooks
│   │   ├── FetchAction.js
│   │   └── UserAction.js
│   ├── index.js
│   ├── pages
│   │   ├── LoginPage.js
│   │   └── MainPage.js
│   ├── reportWebVitals.js
│   ├── route
│   │   └── Router.js
│   ├── scss
│   │   ├── app.scss
│   │   ├── framework
│   │   │   ├── _alert.scss
│   │   │   ├── _badge.scss
│   │   │   ├── _breadcrumb.scss
│   │   │   ├── _button-group.scss
│   │   │   ├── _buttons.scss
│   │   │   ├── _card.scss
│   │   │   ├── _carousel.scss
│   │   │   ├── _close.scss
│   │   │   ├── _code.scss
│   │   │   ├── _custom-forms.scss
│   │   │   ├── _dropdown.scss
│   │   │   ├── _forms.scss
│   │   │   ├── _functions.scss
│   │   │   ├── _grid.scss
│   │   │   ├── _images.scss
│   │   │   ├── _input-group.scss
│   │   │   ├── _jumbotron.scss
│   │   │   ├── _list-group.scss
│   │   │   ├── _media.scss
│   │   │   ├── _mixins.scss
│   │   │   ├── _modal.scss
│   │   │   ├── _nav.scss
│   │   │   ├── _navbar.scss
│   │   │   ├── _pagination.scss
│   │   │   ├── _popover.scss
│   │   │   ├── _print.scss
│   │   │   ├── _progress.scss
│   │   │   ├── _reboot.scss
│   │   │   ├── _root.scss
│   │   │   ├── _spinners.scss
│   │   │   ├── _tables.scss
│   │   │   ├── _toasts.scss
│   │   │   ├── _tooltip.scss
│   │   │   ├── _transitions.scss
│   │   │   ├── _type.scss
│   │   │   ├── _utilities.scss
│   │   │   ├── _variables.scss
│   │   │   ├── bootstrap-grid.scss
│   │   │   ├── bootstrap-reboot.scss
│   │   │   ├── bootstrap.scss
│   │   │   ├── mixins
│   │   │   │   ├── _alert.scss
│   │   │   │   ├── _background-variant.scss
│   │   │   │   ├── _badge.scss
│   │   │   │   ├── _border-radius.scss
│   │   │   │   ├── _box-shadow.scss
│   │   │   │   ├── _breakpoints.scss
│   │   │   │   ├── _buttons.scss
│   │   │   │   ├── _caret.scss
│   │   │   │   ├── _clearfix.scss
│   │   │   │   ├── _deprecate.scss
│   │   │   │   ├── _float.scss
│   │   │   │   ├── _forms.scss
│   │   │   │   ├── _gradients.scss
│   │   │   │   ├── _grid-framework.scss
│   │   │   │   ├── _grid.scss
│   │   │   │   ├── _hover.scss
│   │   │   │   ├── _image.scss
│   │   │   │   ├── _list-group.scss
│   │   │   │   ├── _lists.scss
│   │   │   │   ├── _nav-divider.scss
│   │   │   │   ├── _pagination.scss
│   │   │   │   ├── _reset-text.scss
│   │   │   │   ├── _resize.scss
│   │   │   │   ├── _screen-reader.scss
│   │   │   │   ├── _size.scss
│   │   │   │   ├── _table-row.scss
│   │   │   │   ├── _text-emphasis.scss
│   │   │   │   ├── _text-hide.scss
│   │   │   │   ├── _text-truncate.scss
│   │   │   │   ├── _transition.scss
│   │   │   │   └── _visibility.scss
│   │   │   ├── utilities
│   │   │   │   ├── _align.scss
│   │   │   │   ├── _background.scss
│   │   │   │   ├── _borders.scss
│   │   │   │   ├── _clearfix.scss
│   │   │   │   ├── _display.scss
│   │   │   │   ├── _embed.scss
│   │   │   │   ├── _flex.scss
│   │   │   │   ├── _float.scss
│   │   │   │   ├── _interactions.scss
│   │   │   │   ├── _overflow.scss
│   │   │   │   ├── _position.scss
│   │   │   │   ├── _screenreaders.scss
│   │   │   │   ├── _shadows.scss
│   │   │   │   ├── _sizing.scss
│   │   │   │   ├── _spacing.scss
│   │   │   │   ├── _stretched-link.scss
│   │   │   │   ├── _text.scss
│   │   │   │   └── _visibility.scss
│   │   │   └── vendor
│   │   │       └── _rfs.scss
│   │   ├── login.scss
│   │   ├── main.scss
│   │   ├── mixin.scss
│   │   └── vars
│   │       └── vars.scss
│   └── state
│       └── Auth.js
└── yarn.lock

