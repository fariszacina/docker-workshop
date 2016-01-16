# Welcome to docker workshop Task No.2 - Dockerfile and Docker run

- Copy the previous node app in a new /project folder
- Remove the node_modules directory
- Create a Dockerfile in the root dir (/task-2)

The following commands are all in the dockerfile (they are run by docker)

You can find all needed commands here:
https://docs.docker.com/engine/reference/builder/

- Use debian:jessie as the base Operating System in the Dockerfile
- Run `docker build` to verify everything is good so far (use the parameter to specify the docker image name, so docker does not build an image without a name)
- Set the /project dir as the working dir in the container
- Copy the /project folder to the workdir (.) dir in the container
- Run `docker build` to verify everything is good so far (use the parameter to specify the docker image name, so docker does not build an image without a name)
- Add the following command in the Dockerfile to install NPM, Node:

`RUN apt-get update -y && apt-get install -y curl && curl -sL https://deb.nodesource.com/setup_5.x | bash - && apt-get install -y nodejs`

- Run npm install in the docker container to install all dependencies
- Expose port 8087 on the host
- Set the entrypoint app as NPM and the command as start
- Run `docker build` to verify everything is good so far (use the parameter to specify the docker image name, so docker does not build an image without a name)

Now you should be done with the build process (if there are no errors)

- List the built docker images with `docker images`. You should see the image you have built on the list (unless you have not specified a name in the `docker build`)
- Run the docker container with the `docker run` command (specify the correct docker image name and map port 8070 in the docker container to 8070 on the host)
- If the docker container is running node.js try to hit the docker-machine IP adress and port 8087 in a browser
- The browser should just spin, since an error occurred in Node. verify the console is throwing an error like:

```
Unhandled rejection SequelizeConnectionRefusedError: connect ECONNREFUSED 127.0.0.1:5432
    at /project/node_modules/sequelize/lib/dialects/postgres/connection-manager.js:89:20
    at null.<anonymous> (/project/node_modules/pg/lib/client.js:176:5)
    at emitOne (events.js:77:13)
    at emit (events.js:169:7)
    at Socket.<anonymous> (/project/node_modules/pg/lib/connection.js:59:10)
    at emitOne (events.js:77:13)
    at Socket.emit (events.js:169:7)
    at emitErrorNT (net.js:1255:8)
    at nextTickCallbackWith2Args (node.js:474:9)
    at process._tickCallback (node.js:388:17)
```
