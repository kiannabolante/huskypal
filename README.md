# HuskyPal

# Introduction + Goals:
The goal of the HuskyPal application is to allow students to explore and experience UW’s various activities and programs through an interactive and rewarding system. The HuskyPal application will include a virtual pet that allows users to further explore a variety of interests through their “Trait Track”, and users can pick a trait for their HuskyPal to be given a customized set of challenges and rewards that relate to their respective trait, which can also be shared with other HuskyPal users.

# Layout:

# client:
The "client" folder is where we work on the user interface, handle user interactions, and manage the client-side logic of our full-stack application. Properly structuring our code within this folder helps maintain a clean and organized codebase, making it easier to develop, maintain, and scale our frontend code as our project grows.
# public/:
This folder contains static assets and files that are served directly to the client's browser. Common contents include:
index.html: The main HTML file that serves as the entry point for our web application.
Images, fonts, and other static files that are used in our frontend and should be publicly accessible.

# src/:
The "src" (source) folder is where we keep the source code of our frontend application. It's the heart of our frontend codebase and often contains the following sub-folders:

# components/:
This folder is dedicated to organizing reusable UI components. Components are individual pieces of the user interface that can be used and re-used across various parts of our application.

# styles/:
CSS or styling files are stored in the "styles" folder. These files contain the styles and layout rules for our components and pages, helping we maintain a consistent visual design.

# App.js:
"App.js" is often the main application component and serves as the root component of our frontend.It defines the overall structure and layout of our application and may include routing configuration.

# index.js:
"index.js" is the entry point for our frontend application. It's where our typically set up the rendering of our app, connect it to the DOM, and configure any necessary middleware or providers.

# package.json:
This file lists the dependencies and scripts specific to the frontend part of our application. It includes libraries and tools required for building, running, and testing our frontend.

# sever:
This is where our backend code resides.It includes folders for controllers, models, routes, middleware, and configuration.Each of these sub-folders in the "server" directory helps organize and structure our backend codebase, making it more maintainable and scalable as our application grows. The roles and contents of these folders may vary depending on the framework or technology stack we're using, but this is a common organization pattern for backend development in full-stack applications.

# controllers/:
This folder often contains request handler functions. Controllers are responsible for processing incoming HTTP requests, executing the necessary business logic, and returning HTTP responses. Each controller corresponds to a specific route or endpoint.

# models/:
In this folder, we'll typically define our data models. These models represent the structure of our data, such as tables in a database. Models are used for interacting with the database, performing CRUD (Create, Read, Update, Delete) operations, and ensuring data integrity.

# routes/:
The "routes" folder is where we define API routes and their corresponding controllers. Each route maps to a specific URL endpoint and HTTP method (e.g., GET/users, POST/users, UPDATE/users, DELETE/user). Routes determine how incoming requests are routed to the appropriate controller for processing.

# middleware/:
Middleware acts as a bridge between incoming requests and our route handlers. It can perform tasks such as authentication, authorization, validation, logging, and more before or after request processing.

# config/:
These files contain settings and environment-specific configurations, including database connection parameters, API keys, and other application settings.

# server.js:
This is the main server file that initializes and configures our backend server. It sets up routes, middleware, and server-specific configurations. It's the entry point for starting our backend server.

# gitignore:
A Gitignore file to specify files and folders that should be ignored by version control.

# package.json:
Similar to the frontend, this file lists backend-specific dependencies and scripts for running and managing our server.




