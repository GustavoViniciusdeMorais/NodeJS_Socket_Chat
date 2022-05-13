# NodeJS Socket Chat Example

```
docker-compose up -d --build # start the nodejs container
sudo docker exec -it socketnode_node_1 sh

npm i typescript ts-node ts-node-dev @types/node --save-dev

npm i socket.io@4.0.0
npm i @types/socket.io@2.1.13

#npm start 0.0.0.0 8080

npm run dev

http://localhost
http://localhost/msg?msg=gustavo # access this endpoint at another tab
```