#!/bin/sh

# build docker image locally
echo "--------------------> build docker image locally"
sudo docker build . -t bbb-backend

# tag docker image
echo "--------------------> tag docker image"
sudo docker tag bbb-backend tobiask95/bbb-backend

# push to remote repository (make sure to docker login first)
echo "--------------------> push to remote repository"
sudo docker push tobiask95/bbb-backend

# connect to remote droplet and run docker image
echo "--------------------> connect to droplet and deploy" 
ssh -i ~/.ssh/id_rsa root@207.154.243.130 'sh deploy.sh'
