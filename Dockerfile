FROM node:22-alpine

WORKDIR /myapp

EXPOSE  8080

#Copies all at once. .dockerignore file contains the folders and files that should be ignored. 
COPY . .

#node is built-in none root user. added two run command in one line to avoid multiple layers which will increase the size of the images. 
RUN addgroup -g 1001 -S appgroup && \
 adduser -u 1001 -S appuser -G appgroup \
&& npm install && chown -R appuser:appgroup /myapp
USER appuser

CMD [ "npm","start" ]