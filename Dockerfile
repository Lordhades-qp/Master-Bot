FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  npm i pm2 -g && \
  rm -rf /var/lib/apt/lists/*
  
COPY package.json .
  
RUN gitclone https://github.com/lordhades-qp/Master-Bot

RUN yarn install 

COPY . .

EXPOSE 3000

CMD ["npm","start" ]
