# StudySmith

## Summary 

An app to keep track of a user’s study progress.

## Features

- Ability to see upcoming tasks
- Add skills and comfort level with those skills
- Ability to log your progress

## Getting started

### 1. Clone this repo using the following command 

```
git clone https://github.com/Team-Squirtle-Fast/StudySmith.git
```

### 2. Create a .env file in the project's root level directory

- Create a `.env` file in the project's root-level directory.
```
root
  ├─ .env
  ├─ server
  └─ src
``` 
- In the `.env` file, add the following environment variable and add your Postrges URI. This is required.

```js

POSTGRES_URI=''
```
### 3. Run the following commands 

```
npm install
npm run build
npm start
```
## To contribute

- Fork this repo.
- Pull your fork down to your machine
- Create your own branch based off of dev branch with the following command

```
git checkout -b <yourBranchName> 
```

- Run the following commands 

```
npm install
npm run dev
```
- Push your changes up and create a PR to the StudySmith repo

### Built with

- [React](https://reactjs.org/)
- [Express](http://expressjs.com/)
- [PostgreSQL] (https://www.postgresql.org/)
