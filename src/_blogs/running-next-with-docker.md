---
title: 'Running Next with Docker'
date: '2021-07-18T22:37:19Z'
author:
  twitter: 'botdev_'
  name: 'Ely Alamillo'
og:
  image: '/images/running-next-with-docker.png'
---

---

I've spent the last few days learning [Docker](https://www.docker.com/) and while it hasn't been all nice and dandy i've mainly had a good time. With all the new found knowlege I decided to "dockerize" a [Next](https://nextjs.org/) app.

 ***Disclaimer: This post will be more of a "my own notes" rather than a blog.***

### Dockerfile
The first thing we have to do is create a `Dockerfile` which will build our container. This setup will take advantage of [multi-stage builds](https://docs.docker.com/develop/develop-images/multistage-build/) which is a way of optimizing builds.
```yml
// Dockerfile
// takes advantage of multistage builds
// https://docs.docker.com/develop/develop-images/multistage-build/

FROM node:lts as dependencies

# STAGE 1: installs dependencies
WORKDIR /next-starter-template
COPY package.json package-lock.json ./
RUN npm ci

# STAGE 2: builds project
FROM node:lts as builder
WORKDIR /next-starter-template
COPY . .
COPY --from=dependencies /next-starter-template/node_modules ./node_modules
RUN npm run build

# STAGE 2: Copies assets from previous stage
FROM node:lts as runner
WORKDIR /next-starter-template
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
# COPY --from=builder /next-starter-template/next.config.js ./
COPY --from=builder /next-starter-template/public ./public
COPY --from=builder /next-starter-template/.next ./.next
COPY --from=builder /next-starter-template/node_modules ./node_modules
COPY --from=builder /next-starter-template/package.json ./package.json

# starts project
EXPOSE 3000
CMD ["npm", "start"]
```

### Docker-compose
For this setup I decided to use [docker-compose](https://docs.docker.com/compose/) which lets us run multi-container applications. This is not needed now since we only have one service defined but it will be useful when we want to add more services such as a server or database.

```yml
# docker-compose.yml

version: '3' 
services: 
  next_starter:
    container_name: 'next-starter'
    restart: unless-stopped
    image: node:lts
    command: npm run dev
    ports: 
      - '3000:3000'
    volumes:
      # bind current directory to /service/next_starter read/write
      # this allows hmr to happen
      - .:/service/next_starter:rw
    working_dir: /service/next_starter
    env_file:
      - .env
```
Now that we have a Dockerfile and a docker-compose we should be able to spin up our container by running `docker-compose -f docker-compose.yml up`.

### Conclusion
Learning a bit of Docker has been a fun experience and I hope to continue learning some more. Hope these notes are helpful!


