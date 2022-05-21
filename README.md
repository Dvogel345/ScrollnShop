# Shop n Scroll

A destination to find all of your shopping needs or a nice browse.

### Website

### What I used to create SnS
    - HTML5 and CSS3: Semantic Elements, CSS Grid, Flexbox
    - React: Components, Props, Events, Hooks, Router, Axios
    - Context API: Store, Reducers, Actions
    - Node & Express: Web API, Body Parser, File Upload, JWT
    - MongoDB: Mongoose
    - Development: ESLint, Babel, Git, Github
    - Deployment: Heroku

## Dependcenies
### Frontend
    [autoprefixer](https://autoprefixer.github.io/)
    [axios](https://axios-http.com/docs/intro)
    [bootstrap](https://getbootstrap.com/)
    [react](https://reactjs.org/)
    [react-bootstrap](https://react-bootstrap.github.io/)
    [react-dom](https://reactjs.org/docs/react-dom.html)
    [react-helmet-async](https://www.npmjs.com/package/react-helmet-async)
    [react-router-bootstrap](https://www.npmjs.com/package/react-router-bootstrap)
    [react-router-dom](https://v5.reactrouter.com/web/guides/quick-start)
    [react-scripts](https://www.npmjs.com/package/react-scripts)
    [use-reducer-logger](npmjs.com/package/use-reducer-logger)
    [web-vitals](https://web.dev/vitals/)

### Backend
    [bcryptjs](https://www.npmjs.com/package/bcryptjs)
    [dotenv](https://www.npmjs.com/package/dotenv)
    [express](https://www.react.express/)
    [express-async-handler](https://www.npmjs.com/package/express-async-handler)
    [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
    [mongoose](https://www.mongodb.com/atlas/database)

## Run Locally Yourself

### 1. Clone repo

```
$ git clone https://github.com/Dvogel345/ScrollnShop.git
$ cd sns
```

### 2. Create .env File

```
JWT_SECRET=something_secret
MONGODB_URI=mongodb+srv://project_name:app_name@cluster._.mongodb.net/project_name?retryWrites=true&w=majority
```

### 3. Setup MongoDB

- Local MongoDB
  - Install it from [here](https://www.mongodb.com/try/download/community)
  - In .env file update MONGODB_URI=mongodb://localhost/sns
- OR Atlas Cloud MongoDB
  - Create database at [https://cloud.mongodb.com](https://cloud.mongodb.com)
  - In .env file update MONGODB_URI=mongodb+srv://your-db-connection

### 4. Run Backend

```
$ cd backend
$ npm install
$ npm start
```

### 5. Run Frontend

```
# open new terminal
$ cd frontend
$ npm install
$ npm start
```

### 6. Seed Users and Products

- Run this on browser: http://localhost:5000/api/seed
- It returns admin email and password and 2 sample products

