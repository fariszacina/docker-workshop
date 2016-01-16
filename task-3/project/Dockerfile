FROM debian:jessie

RUN apt-get update -y && apt-get install -y curl && curl -sL https://deb.nodesource.com/setup_5.x | bash - && apt-get install -y nodejs

WORKDIR /project

COPY . .

RUN npm install

EXPOSE 8087

CMD ["start"]
ENTRYPOINT ["npm"]
