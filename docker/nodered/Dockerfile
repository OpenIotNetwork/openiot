#FROM node-7.8.0
FROM node

# Home directory for Node-RED application type code.
RUN mkdir -p /usr/src/node-red

# User data directory, contains flows, config and nodes.
RUN mkdir /data

WORKDIR /usr/src/node-red

#!!!!!!removing new user as root is needed to access volumes

# Add node-red user so we aren't running as root.
#RUN useradd --home-dir /usr/src/node-red --no-create-home node-red \
#    && chown -R node-red:node-red /data \
#    && chown -R node-red:node-red /usr/src/node-red
#
#USER node-red

# package.json contains Node-RED NPM module and node dependencies
COPY package.json /usr/src/node-red/

RUN npm install

# User configuration directory volume
EXPOSE 1880

# Environment variable holding file path for flows configuration
ENV FLOWS=flows.json

CMD ["npm", "start", "--", "--userDir", "/data"]