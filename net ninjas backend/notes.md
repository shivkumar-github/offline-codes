## why const app = express();
express() is a function that returns an Express application object. This object represents your entire app and provides methods to define routes, middleware, and handle HTTP requests (like GET, POST, etc.).

app is now an object that represents the application. You can call various methods on this app object to configure the behavior of your server.

## express & status code
express itself sets the status codes for certain methods like res.sendFile, res.redirect etc.

## how ejs is processed
the ejs code is passed to ejs engine which computes all the code and converts it into pure html and this whole process happens in server side.

## why we use react if we have ejs
EJS is for server-side rendering, good for static or simple sites. It generates HTML on the server, with each update requiring a page reload.
React is for client-side rendering, ideal for dynamic and interactive applications. It uses a component-based structure and allows updates in the browser without reloading the page.
Combined Use: Use EJS for initial server-rendered content and React for interactive components, giving both performance and interactivity in full-stack apps.

app.get methods combined just work like if else statement once a route is matched then code execution stops there.

The next function in Express is used to pass control from one middleware or route handler to the next, but the next object itself does not "contain" any data. It is a function, not an object, that is provided by Express for this purpose.

 node uses common js by default hence we use require in node js by default while in react we use import as vite react is by default esm

## NoSQl vs SQL databases
sql databases use tables rows and columns to store data and noSql use collections and documents to store data.

## mongodb and mongoose 
Mongoose is a library built on top of MongoDB to provide additional features for schema definition, validation, and querying.
schemas defines the strucutre of a data/document.
Models allow us to cmmunicate with database collections.

## Connecting to database
mongodb+srv://shivkumar:<db_password>@nodetuts.fzbwa.mongodb.net/<database_name>?retryWrites=true&w=majority&appName=nodetuts
replace db password with your password and add data base name before the question mark.

## enable all ips to access our database
0.0.0.0/0 -> add this address to network tab
https://cloud.mongodb.com/v2/67063b0533f80568bc036f7c#/security/network/accessList

## body vs params
req.params is used for route parameters (like :id in /blogs/:idreq.params: Used to access route parameters in the URL path. For example, in a route like /blogs/:id, req.params.id will give you the id specified in the URL.

req.body: Used to access data sent in the body of a POST or PUT request (like form or JSON data). This requires body-parsing middleware like express.json() to work.

## sorting data retrived from database in mongodb
.sort() -> method in mongoose.
Syntax: .sort({ field: order })
    field: The name of the field you want to sort by.
    order: 1 for ascending order, -1 for descending order.

## express.Router()
It is like mini express app which we can define outside main file and use it then in main file.

## MVC 
-> stands for models, views and controllers.
-> It is syntactical sugar, improving readibility and reusability of code.