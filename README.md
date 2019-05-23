# rapid_shazam

Rapid shazam is an app which is able to search for the song information with title. 
It will display album image, artist name, youtube video, lyrics and so on. 
You can also check love compatibility! Have fun with this app.


Search page
![Imgur Image](https://i.imgur.com/xUAgMaT.png)

Result page
![Imgur Image](https://i.imgur.com/2f7qk9d.png)

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```
### Run production server with hot-reloads
```
yarn devstart
```
### Compiles and minifies for production
```
yarn run build
```
### Lints and fixes files
```
yarn run lint
```
### Extra work to build the app
#### create API account
If you want to build this app on your laptop, you should create [Rakuten Rapid API](https://api.rakuten.net/) account.


#### create .evn file in root directory
```
//.env file

MUSIC_GRAPH_KEY=
MUSIC_GRAPH_ID=
X_RAPIDAPI_KEY=
TICKET_MASTER_API=
```
Please get the three first keys and ID from 
Rakuten Rapid API. Use the API called Music Graph.

You will also have to [get a API from TicketMaster](https://developer.ticketmaster.com/products-and-docs/apis/getting-started/). Please visit their developer page for a free key.
