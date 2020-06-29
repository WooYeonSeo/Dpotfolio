FROM node:10
MAINTAINER WooYeonSeo <vantovan7414@gmail.com>

RUN apt-get update 
RUN apt-get install -y git

WORKDIR /app
RUN git clone https://github.com/WooYeonSeo/Dpotfolio.git /app
WORKDIR /app/Dpotfolio

RUN npm install
RUN npm run-script build

# EXPOSE 5000
CMD ["npm", "start","/bin/bash"]