# Etherium get balance API

# Configuration
Create .env file and fill with your API key and Ether network(etherscan.io)

ETHER_NETWORK = "homestead"<br>
ETHER_API_KEY = "xxxxxxxxxxxxxxxxxxxxxxxx"


# Start the service
`npm start` or `npm run dev`

# For testing
`npm test`


# getBalance

| Route           | HTTP Verb	 | POST body	 | Description	                                            |
|-----------------| --- | --- |---------------------------------------------------------|
| /api/getBalance | `POST` | ["0x3ad166A56aed667b1332d16c617d17929Dc7AF93","0x4e4a47cAC6A28A62dcC20990ed2cdA9BC659469F","0xb66487e15e60134f6b39937d3f122e3c472f9e20","0xdac17f958d2ee523a2206206994597c13d831ec7","sefwmfwope","0x930fb1A219CE5AC4A5078826a1be0F8aDfe98c19","0x930fb1A219CE5AC4A5078t26a1be0F8aDfe98c19"] | Check all addresses and get balance if address is valid |
