## React: -
###		React is used for projects where UI is complex.
### 	React is a library which offers more flexibility than framework.(framwork has more strict rules.)
### for web we need react dom library and for app dev we need react native library.

# Installing react
### slow method - npx create-react-app 01basicreact -> takes more time
### fast method - npm create vite@latest 01vitereact ->because it has less dependancies
## for creating a react app first see package.json and required packages in it.

### devDependencies in package.json are only useful while development processs and while running the app we only require the dependencies
### we do npm i which installs the dependencies stated in package.json in a folder called node_modules
### the process of loading of javascripts on webpage after loading of UI is called hydration

## React fibers lecture: - 
### react fibers and reconciliation notes - https://github.com/acdlite/react-fiber-architecture
### Reconciliation: The what — the process of figuring out what parts of the UI need to be updated.
### React Fiber: The how — the engine that executes reconciliation, enabling better performance, task prioritization, and smoother updates.

## tailwind css and props lecture: -
### npm install -D tailwindcss postcss autoprefixer
### What This Command Does:
### Installs Tailwind CSS: It adds Tailwind to your project so you can use its utility classes.
### Sets Up PostCSS: PostCSS will process your Tailwind CSS, transforming it into usable CSS.
### Enables Autoprefixer: Autoprefixer will ensure your CSS is compatible with older browsers by adding vendor prefixes where necessary.


### The content array specifies the paths to all the files where Tailwind CSS should look for class names. This includes:

###    ./index.html: The main HTML file.
###  	./src/**/*.{js,ts,jsx,tsx}: All JavaScript, TypeScript, JSX, and TSX files in the src directory and its subdirectories. The **/* syntax means it includes all nested folders.

# Context API's - 
### Context api's are a convinient way to pass the data across different components, which needs to be dynamically changed. First you need to create a contexts file (there can be mutliple context files in a project.) then give the functionalities using ContextProvider tag and import those functionalities in components by importing the context.

# Redux Toolkit -
### Store is the place where all data i.e. to be managed is stored and each store can contain multiple set of data called slices.

## Difference between actions and reducers: -
### Actions are like notes that say, "This is what I want to happen."
### Reducers are like the people who read those notes and carry out the actions.