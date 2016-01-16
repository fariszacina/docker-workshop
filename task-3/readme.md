# Welcome to docker workshop Task No.3 - Multicontainer apps

Stage-1

- Copy the previous node app in a new /project folder
- Copy the dockerfile in the /project folder (instead in root)
- Adjust the dockerfile Copy command to have the right paths
- Create a docker-compose.yml file in the root of task-3 folder

Stage-2

The following tasks are related to the docker compose file. Reference:
https://docs.docker.com/compose/compose-file/

- Add a docker compose service called "server"
- In the docker compose service definition for "server" add a build parameter pointing to "project" folder
- Add a port mapping from port 8087 to port 8087 on the host
- Verify everything builds correctly with `docker-compose build`
- Verify the app runs properly by running `docker-compose up` (foreground mode)
- If up fails because the port is allocated run `docker ps`, find the container ID running on the port, and then run `docker kill {id}` to kill the running container and run the command above again.
- Verify you are getting the same sequelize error as in the previous task-3

Stage-3

The Following tasks are related to adding an additional container with a DB, so node can connect to the correct endpoint. It is all docker-compose configuration.

- Add a "database" service to docker-compose with a definition pointing directly to a "postgres" image
- Add a link from the "server" service (container) to the "database" container in the "database" service definition
- Verify `docker-compose build` does not throw errors
- Run `docker-compose up` to initiate postgres and node (do not exit this process. Just proceed to the next stuff)
- If you try to access the app via the browser (using the docker-machine IP) you will notice that it throws the sequelize error

Stage-4

Now the containers are visible from a virtual-network level (because of the docker-compose link). However, we need to modify Node to use the right ENV variable to discover where is the database host on the virtual network that docker is using.

- To discover the right ENV variable you need to connect to the running docker container "server" and see the available env variables
- Open a new docker quick terminal (in addition to the existing running one)
- Run `docker ps` to see the running containers and find the "server" container ID
- Run `docker exec -it {id} /bin/bash` to connect to the container with a BASH terminal
- When connected, List the environment variables in the container and find the postgres IP in the virtual network and the port. Copy the environment variables.
- Modify Node.js index.js to use the correct ENV variables to connect to the right host.
- Run `docker-compose build` and `docker-compose up`, but you will see it connects to postgres, but it cant find the DB in postgres.
- Modify index.js to create the "db" in the docker container using this code:

Note: Substitute PUT_POSTGRES_ENV_HERE with the correct ENV variable.

```
// connect to postgres db
pg.connect('postgres://postgres:postgres@' + process.env.PUT_POSTGRES_ENV_HERE || '127.0.0.1' + '/postgres', function(err, client, done) {
    // create the db and ignore any errors, for example if it already exists.
    client.query('CREATE DATABASE db', function(err) {
      client.end(); // close the connection
    });
});
```

- Run `docker-compose build` and `docker-compose up` and access the app via the docker-machine IP and port 8070 and verify it works!
