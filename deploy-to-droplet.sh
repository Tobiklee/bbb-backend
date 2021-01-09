#!/bin/sh

# connect to remote droplet and deploy
echo "--------------> connect to droplet and deploy" 
ssh -i ~/.ssh/id_rsa root@207.154.243.130 'sh deploy.sh'
