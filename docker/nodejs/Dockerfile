#alpine as the smallest and safest distribution (libs & tools) for docker images
#FROM node-7.8.0-alpine
#full version with all the tools and libs
FROM node

# Exposed port
EXPOSE 1881 1882

# User data directory, contains configs.
RUN mkdir /data
# create app directory and use it as working dir
RUN mkdir -p /usr/src/app
# adding folders assets (where bower dependencies will be installed)
RUN mkdir -p /urs/src/app/public/
RUN mkdir -p /urs/src/app/public/assets

# copy all files from /configs
## package.json contains node NPM module and node dependencies
COPY ./configs/. /usr/src/app

WORKDIR /usr/src/app
#install bower for UI dev
#RUN npm install -g grunt
#install express or other dependencies (ALREADY DONE IN PACKAGE.JSON)
#RUN npm init -y && \
#RUN npm install express --save --save-exact

# run script to install all the dependencies (npm and bower)
RUN npm run setup

#CMD ["npm", "start", "--", "--userDir", "/data"]
CMD ["npm", "start"]