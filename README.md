# About this repo
- This is a NestJS stand alone application that designed to work with Docker Compose environment.
- It has the main script that will start to READ index.html file from env variable of "DIST_DIR". And replace the variables in header of index.html with ENV Variables that this service got from Docker Compose. Then the new index.html file will be written in folder of env variable "WWW_DIR".
- You should have basic understanding of howto use Docker, Docker Compose and be able to modify VueJS source code.

# How to use
- Please check [this blog for the instructions](https://medium.com/absoroute-io/passing-dynamic-environment-variables-to-vuejs-application-at-run-time-45918162bbaf?sk=1b00248c6867778867a3d5a3c883ef30).
- Modify "worker.service.ts" to Add/Remove your variables there. There are at Line 17,18 and 33,34.