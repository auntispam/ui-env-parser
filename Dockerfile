FROM node:12
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install --silent
RUN npm run build
CMD [ "/bin/bash" ]