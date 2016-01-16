# Welcome to docker workshop Task No.4 - EC2 deployment

- Push the code to a private or public repo in GIthub or Bitbucket

# AWS

- Create an EC2 ubuntu instance (name the instance firstname:webserver)
- Setup SSH so you can connect to the instance
- Setup a ELB in AWS to connect to the EC2 instance created

- Connect to the instance via SSH. Install GIT and do a git clone from the instance.
- Install docker and docker-compose
- Run `docker-compose build` and `docker-compose up` to run the app in the EC2 web server.
- Configure the ELB to point to the correct IP on the EC2 instance.
- Verify the app is accessible using the ELB public DNS address.
