# Test tower

This project use Angular version 19.1.8 and Node 20
It's a monorepo construct with pnpm a structure of a repository is 

    apps    
      | backend (Nodejs)
      | frontend (Angular)

## First install
On a root of project launch
```bash
pnpm install
```

## Development server
On a root of project launch
```bash
pnpm all:dev
```

A database is automatically create with table


## API
All request of api as with prefix /api, you can find all routes in a folder router

By default, a port of the api is 5000, but you can change that with a node env param process.env.PORT 
(WARNING if you change that you need change a port also in config of Angular, environment folder).

### Incidents
    {baseUrl}/api/incidents
You can GET, POST, PUT, DELETE

GET:

    {baseUrl}/api/incidents => all
    {baseUrl}/api/incidents/:id => just One

POST params :
```json
{
	"description": "My incident verry hight is verry specific because...",
	"requesterDetails": "President",
	"status": "open",
	"title": "My incident verry high"
}
```

PUT params :

{baseUrl}/api/incidents/:id
```json
{
	"description": "My incident verry hight is verry specific because...",
	"requesterDetails": "President",
	"status": "closed"
}
```

DELETE:

{baseUrl}/api/incidents/:id

### Statistics
    {baseUrl}/api/statistics

You can GET all statistics

    {baseUrl}/api/statistics/total-open
    {baseUrl}/api/statistics/total-closed
    {baseUrl}/api/statistics/total-daily

    
