# Welcome to docker workshop Task No.1 - Project Creation

- Create a folder called /project
- Initialize a node app inside of it (npm init)
- Create an Express web server running on port 8087
- Add a single GET endpoint called /health
- Connect to the local postgres with the psql command line tool and run the following command: CREATE DATABASE "db"
- Import the sequelize NPM module and initialize the postgres connection in index.js
- in the /health GET operation use the following code:

```
var User = sequelize.define('User', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
});

sequelize.sync().then(function() {
  return User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  });
}).then(function(jane) {
  res.send(jane.get({
    plain: true
  }));
});

```

- Run the app with NPM
- Check that when you open your browser @ localhost:8087 that the insert in the DB using sequelize passes and you get something like

```
{"id":4,"username":"janedoe","birthday":"1980-07-19T23:00:00.000Z","updatedAt":"2016-01-15T20:16:12.349Z","createdAt":"2016-01-15T20:16:12.349Z"}
```
