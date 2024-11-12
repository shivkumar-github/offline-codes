## Creating a separate package.json in the backend folder keeps backend dependencies and configurations isolated from the frontend, which helps:

    Separate Dependencies: Avoids conflicts between backend (e.g., express, mongoose) and frontend packages.
    Independent Configs: Allows unique scripts and settings for backend and frontend.
    Easier Deployment: Makes it easier to deploy backend and frontend independently.

## .env
Installed using npm i dotenv

The .config() function is used with the dotenv package to load environment variables from a .env file into the process.env object in Node.js. This allows you to easily access configuration settings and sensitive data in your code.

## res.json()
The res.json() method in Express.js is used to send a JSON response to the client. It takes an object or array as an argument, converts it to a JSON string, and sends it as the response. The Content-Type of the response is automatically set to application/json.

## app.use(express.json())
 When this middleware is applied, it ensures that the data in the request body is properly parsed and available as a JavaScript object in req.body

## mongoose is ODM library - object data modeling.

## models and schemas
schemas define structure of the document and model enforces on the document and allows us to interact with the documents.

## how import works 
When there is a request, Express does not actually bring the functions into this file. Instead, it executes the functions directly from the blogController file. Here’s how it works:

    1. File Import: When you import blogController at the top (const blogController = require('../controller/blogController')), you’re bringing in a reference to the functions from blogController, not their actual code.
    
    2. Reference to Functions: The router.get, router.post, etc., methods take references to those functions (like blogController.blog_index, blogController.blog_create_post), but they don't move the actual code to this file. Instead, the references act as pointers to the functions that live in blogController.

    3. Execution on Request: When a request hits a specific route, Express uses these references to execute the handler function directly from the blogController file. This means it doesn’t copy or import the actual code to this file. Instead, it just invokes the function where it’s defined.

## why we don't need to import mongoose in controller
When you create a model with Mongoose, it comes with all the functionality you need to interact with MongoDB, such as methods for creating, reading, updating, and deleting documents.

## why to do while converting response to js -> await response.json()
The response comes as a stream, and response.json() asynchronously parses this stream into a JavaScript object. You need to await it to ensure the parsing is complete before using the data in your app.

## while passing object as prop we need to use curley braces hence it treats object as literal string.

## you need to restart the server after changin package.json file

## useEffect and async in useEffect
We can not pass an async function to useEffect as it expects a function with no return and async function returns a promise