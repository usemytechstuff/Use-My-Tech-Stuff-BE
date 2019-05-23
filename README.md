# Use-My-Tech-Stuff-BE

## Server

https://usemytechstuffapp.herokuapp.com

## Dependencies

    - "bcryptjs": "^2.4.3",
    - "cors": "^2.8.5",
    - "dotenv": "^8.0.0",
    - "email-validator": "^2.0.4",
    - "express": "^4.17.0",
    - "helmet": "^3.18.0",
    - "jsonwebtoken": "^8.5.1",
    - "knex": "^0.16.5",
    - "knex-cleaner": "^1.1.4",
    - "pg": "^7.11.0",
    - "sqlite3": "^4.0.8"

## devDependencies

    - "cross-env": "^5.2.0",
    - "jest": "^24.8.0",
    - "nodemon": "^1.19.0",
    - "supertest": "^4.0.2"

# Auth Routes
## Register /api/register (POST)
**User Table:**
- username <-- Required (string) (unique) (<32 char)
- password <-- Required (string) (>7 char)
- email (string)
- firstname (string)
- lastname (string)
- phone (string)
- address  (string)


#### 201 Created Responds with
Example of the following body with any of the non-required inputs
```
{
    "id": 11,
    "username": "JohnSmith123",
    "password": "$2a$10$V9ZkIkDMa0knA/I5l7BwoOmjJ3reCFNlASdhASHDdDDnAIQuzVBPrhuUyC",
    "email": null,
    "firstname": John,
    "lastname": Smith,
    "phone": null,
    "address": null
}
```

## Login /api/login (POST)

- username <-- Required
- password <-- Required

#### 200 Success Responds with
Example the following body
```
{
    "username": "JohnSmith123",
    "token": "eYsdasyfsAYDhyeyseyewyeYASDYYySYyefhFHEUWWEYyweyfYUEYYFYWEYWEYFweFYEYWEFWYwYWEYFHWEYFweYFYWEDHFHfdhhfdhfhewOEIOWOEIuu",
    "id": 11
}
```

# Item Routes
## Get Items /api/items (GET)
#### 200 Success Responds with
Example of an array of objects 
```
[
    {
        "id": 1,
        "owner": 1,
        "title": "For rent",
        "type": "Camera",
        "description": "local only",
        "price": 20,
        "availability": true,
        "brand": "Canon",
        "model": "EOS 200",
        "imgURL": null,
        "renter": null
    },
    {
        "id": 2,
        "owner": 1,
        "title": "New camera",
        "type": "Camera",
        "description": "takes awesome photos",
        "price": 50,
        "availability": true,
        "brand": "Nikon",
        "model": "D5300",
        "imgURL": "http://cdn-4.nikon-cdn.com/e/Q5NM96RZZo-YRYNeYvAi9beHK4x3L-8lV__2R-oGYSKeMMUpn__DSbsOX4QQI1MBxLX9BO6gD8NqzjK0CXEJ_g==/Views/1519_D5300_front.png",
        "renter": null
    },
]
```
## Get Specific Items /api/items/:id (GET)
#### 200 Success Responds with
Example of an object with body
```
{
    "id": 1,
    "owner": 1,
    "title": "For rent",
    "type": "Camera",
    "description": "local only",
    "price": 20,
    "availability": true,
    "brand": "Canon",
    "model": "EOS 200",
    "imgURL": null,
    "renter": null
}
```
## Add Item /api/items (POST)
#### Must be a registered user or logged in to add item
**Items Table**
- owner <-- Required (Foreign Key) (References user id)
- title <-- Required (string)
- description <-- Required (string)
- type <-- Required (string)
- description <-- Required (string)
- price <-- Required (integer)
- availibility <-- Required (boolean)
- brand (string)
- model (string)
- imgURL (string)
- renter (integer) (Foreign Key) (References user id)


#### 201 Success Responds with 
Message and example of body with any nonrequired inputs
```
{
    "message": "Item has been added",
    "item": {
        "id": 10,
        "owner": 1,
        "title": "like new TV",
        "type": "TV,
        "description": "great quality",
        "price": 99,
        "availability": true,
        "brand": "Sony",
        "model": null,
        "imgURL": null,
        "renter": null
    }
}
```

## Update Specific item (PUT)
#### Must be a registered user or logged in to update item
#### 202 Success Responds with
Message and example with updated values
```
{
    "message": "The following updates have been made:",
    "item": {
        "id": 10,
        "owner": 1,
        "title": "new 8K TV updated!",
        "type": "TV,
        "description": "great quality, clear picture. price reduced!",
        "price": 20,
        "availability": true,
        "brand": "Sony",
        "model": Z9G,
        "imgURL": null,
        "renter": null
    }
}
```
## Delete Specific item (DELETE)
#### Must be a registered user or logged in to delete item
#### 202 Success Responds with
Message with title of listing deleted
```
{
    "message": "The following item listing was removed:",
    "deleted": "new 8K TV updated!"
}
```
