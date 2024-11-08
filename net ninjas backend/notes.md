## why const app = express();
### express() is a function that returns an Express application object. This object represents your entire app and provides methods to define routes, middleware, and handle HTTP requests (like GET, POST, etc.).

### app is now an object that represents the application. You can call various methods on this app object to configure the behavior of your server.

## how ejs is processed
### the ejs code is passed to ejs engine which computes all the code and converts it into pure html and this whole process happens in server side.

## why we use react if we have ejs
### EJS is for server-side rendering, good for static or simple sites. It generates HTML on the server, with each update requiring a page reload.
### React is for client-side rendering, ideal for dynamic and interactive applications. It uses a component-based structure and allows updates in the browser without reloading the page.
### Combined Use: Use EJS for initial server-rendered content and React for interactive components, giving both performance and interactivity in full-stack apps.

### app.get methods combined just work like if else statement once a route is matched then code execution stops there.

### The next function in Express is used to pass control from one middleware or route handler to the next, but the next object itself does not "contain" any data. It is a function, not an object, that is provided by Express for this purpose.

### node uses common js by default hence we use require in node js by default while in react we use import as vite react is by default esm