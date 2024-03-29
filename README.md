# HuskyPal

# Project Description 
Huskypal is an application that allows students to explore and experience UW’s various activities and programs through an interactive and rewarding system. The HuskyPal application will include a virtual pet that allows users to further explore a variety of interests through their “Trait Track”, and users can pick a trait for their HuskyPal to be given a customized set of challenges and rewards that relate to their respective trait, which can also be shared with other HuskyPal users.

HuskyPal aims to transform the UW student experience by making campus exploration more interactive, rewarding, and fun. It's about creating a sense of community, enhancing personal growth, and encouraging active participation in campus life through a digital-physical hybrid experience.Stay tuned for updates as we bring HuskyPal to life, and get ready to embark on your very own UW adventure with your new Husky companion!

# Team Member & Role

| Team Member    | Role                | Responsibilities                                               |
|----------------|---------------------|----------------------------------------------------------------|
| Fana Hagos     | Frontend/Backend + Design  | - Develop track selection, homepage, and challenge suggestion pages<br>- Testing<br>- Some backend|
| Ramla Abdi     | Backend/Frontend   | - Implement level system for user challenges<br>- Backend and frontend tasks related to challenge tracking |
| Kianna Bolante | Frontend Design    | - Design frontend interfaces<br>- Work on closet pages          |
| Fatuma Meshalla| Backend/Frontend   | - Implement login and registration and social connect,  pages<br>- Database setup<br>- Testing<br>- GitHub setup |


# Developer's Guide
 ## Setup 
 1. [Download Visual Studio Code](https://code.visualstudio.com/Download)
 2. Clone the repository `git clone` https://github.com/kiannabolante/huskypal.git

 ## Frontend 
 1. Open a terminal under the root directory(i.e huskypal)
 2. Run `cd client`
 3. Run `npm install` to make sure all packages are ready for frontend
 5. Run `npm run start`

 ## Backend
 1. [Download MongoDB Compass (https://www.mongodb.com/docs/compass/current/install/)
 2. When signing in for compass use path: (mongodb://127.0.0.1:27017/husky_db)
 3. Install an extension on VS Code: Thunder client
 4. Open a terminal under the root directory(i.e huskypal)
 5. Run `rm -rf node_modules`
 6. Run `rm package-lock.json`
 7. Run `cd server`
 8. Run `npm init -y`
 9. Run `npm install`
 10. Run `npm i express mongoose`
 11. Run `npm install bcrypt jsonwebtoken`
 12. Run `npm install cor`
 13. Run `nodemon server.js`

# Testing (Continuous Integration (CI))
We use GitHub Actions to automatically run our tests every time we make changes to our code on GitHub. 
This way, we catch any issues quickly before they become a problem.

- [GitHub Actions Tutorial](https://youtu.be/ylEy4eLdhFs?feature=shared)

 ## Setup
 1. Signup and login into github.com
 2. In repo, create a folder .github/workflows
    - Actions tab, click ‘set up a workflow yourself’
    - Can name the yaml file anything
 4. In the folder, create a YAML file with a .yml extension
 5. In YAML, syntax and spacing is very important so be careful of any copy/paste
    - Look up ‘yaml formatter’ on google for help
    - Yaml formatter: https://codebeautify.org/yaml-beautifier
 6. Add the content of the workflow in the file
 7. Commit and push the changes
 8. Got to the repo main page and click the ‘Actions’ tab
 9. Select the workflow from left sidebar and check the logs and results

 ### Demo
 [GitHub Actions workflow file](https://github.com/kiannabolante/huskypal/blob/main/.github/workflows/huskypal2.yml)

# Development Tools
- **Visual Studio Code**: Integrated Development Environment (IDE)
- **Git, GitHub**: Version control system and hosting platform for repositories
- **npm**: Package manager for JavaScript
- **ThunderClient**: API testing tool
- **Chrome**: Web browser for testing
- **Node.js**: JavaScript runtime environment
- **Mongodb Express**: Web application framework for Node.js
- **CORS (Cross-Origin Resource Sharing)**: Mechanism that allows restricted resources on a web page to be requested from another domain
- **MongoDB Compass**: GUI for MongoDB

## Frontend
### React
- **Component-based architecture**: Divides the UI into reusable components
- **Virtual DOM for performance**: Improves efficiency by updating only changed components
- **Reusable and maintainable code**

### Styling
- **CSS**: Cascading Style Sheets
- **Bootstrap**: Front-end framework for designing websites and web applications
- **Google Fonts**: Library of free licensed font families

### Frontend Validation Testing
- **Unit Testing with Jest**
- **Component Testing with React Testing Library**: For testing React components
- **Frontend validation**
  
## Backend

- **Node.js (Express - if applicable)**: Server-side JavaScript framework
- **JavaScript**: Programming language
- **Database: MongoDB**: NoSQL, document-oriented database
  - **Flexible schema, scalability**

### Backend Validation Testing
- **Unit Testing with Jest**
- **Mocha**: JavaScript testing framework
- **Backend Validation Tests**
- **MongoDB Data Validation**








