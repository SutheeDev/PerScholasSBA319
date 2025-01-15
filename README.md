# Per Scholas SBA319

Welcome to SBA318, a Node.js, Express, and MongoDB CRUD API project developed as part of a Per Scholas assignment to demonstrate multiple key objectives, including:

1. Create a server application with Node.js, Express, and MongoDB.
2. Implement a CRUD API using Express and MongoDB.
3. Utilize MongoDB indexes for efficient querying.
4. Enforce data consistency with MongoDB validation rules.

<br>

## Features

- **Three collections**: Example collections include Users, Restaurants, and Reviews.
- **GET Routes**: Retrieve data using efficient query commands.
- **POST Routes**: Add new documents to the database.
- **PATCH/PUT Routes**: Update existing documents.
- **DELETE Routes**: Remove documents from the database.
- **Validation Rules**: Ensure data consistency using MongoDB validation.

<br>

## API Endpoints

### Users Collection

- **GET** `/api/users` - Retrieve all users.
- **GET** `/api/users/:id` - Retrieve user by id.
- **POST** `/api/users` - Create a new user.
- **DELETE** `/api/users/:id` - Delete a user.

### Restaurants Collection

- **GET** `/api/restaurants` - Retrieve all restaurants.
- **GET** `/api/restaurants/:id` - Retrieve restaurant by id.
- **POST** `/api/restaurants/search` - Search for restaurants.

### Reviews Collection

- **GET** `/api/reviews` - Retrieve all reviews.
- **GET** `/api/reviews/user/:userId` - Retrieve reviews by user id.
- **GET** `/api/reviews/restaurant/:restaurantId` - Retrieve reviews by restaurant id.
- **POST** `/api/reviews/:id` - Create a new review.
- **PATCH** `/api/reviews/:userId/:reviewId` - Update a review.
- **DELETE** `/api/reviews/:userId/:reviewId` - Delete a review.

<br>

## Validation Rules

MongoDB validation ensures data consistency at the database level:

- **Users**: Username, Email, and Password are required.
- **Restaurants**: Name is required and Rating is limit to 1 - 5.
- **Reviews**: UserId, RestaurantId, and Comment are required.

<br>

## Sample Data

### Users Collection

```json
[
  {
    "_id": "6785cf454ecd8e8e9c01ab47",
    "username": "suthee",
    "email": "suthee@example.com",
    "password": "1234",
    "favorite": [],
    "__v": 0
  }
]
```

### Restaurants Collection

```json
[
  {
    "_id": "6785bc0210bf47aeadffc907",
    "name": "Golden Wok Dynasty",
    "cuisine": "Chinese",
    "location": "Fujinomiya",
    "reviews": [],
    "__v": 0
  }
]
```

### Reviews Collection

```json
[
  {
    "_id": "67872e4edf6995e1242429fb",
    "userId": "6785cf454ecd8e8e9c01ab47",
    "restaurantId": "6785bc0210bf47aeadffc8f9",
    "comment": "The sevice was amazing",
    "date": "2025-01-15T03:41:02.584Z",
    "__v": 0
  }
]
```

<br>

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **API**: RESTful API for interacting with users, restaurants, and reviews

<br>

## Feedback

Feedback to improve this project is welcome. If you have any suggestions or would like to collaborate, please get in touch with me on [GitHub](https://github.com/SutheeDev). Thanks!
