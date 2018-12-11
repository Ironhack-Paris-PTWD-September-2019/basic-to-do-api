FROM node:10-alpine

ENV USERNAME node
ENV HOME /home/$USERNAME
ENV APP_PATH $HOME/app

#

WORKDIR $APP_PATH

# node_modules (see: http://bitjudo.com/blog/2014/03/13/building-efficient-dockerfiles-node-dot-js/)
COPY package*.json /tmp/
RUN sh -c "cd /tmp && npm install" \
  && mkdir -p /tmp/node_modules && mv /tmp/node_modules $APP_PATH/node_modules \
  && npm cache clean --force

# NB: local `node_modules` folder wont overwrite our previously created `node_modules` in the previous layer since it is excluded by `.dockerignore` and thus wont be copied
COPY . $APP_PATH

EXPOSE 5000

CMD ["npm", "start"]