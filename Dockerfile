FROM node:12.16.1-alpine3.11
WORKDIR /app

# Versions
RUN npm -v
RUN node -v

# Bundle app source
COPY . ./

# install and cache dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

ENV NODE_ENV development
#ENV PORT 3000
ENV PUBLIC_PATH "/"

EXPOSE 80

RUN npm run build
# start container
CMD ["npm", "start"]