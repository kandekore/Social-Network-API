# Social Network API using MongoDB

![GPL License](https://img.shields.io/badge/license-GPL-blue)

## Table of Contents

- [Description](#description)
- [Motivation](#motivation)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Error Handling](#error-handling)
- [Future Enhancements](#future-enhancements)
- [Contributors](#contributors)
- [Questions](#questions)
- [License](#license)

## Description

This project is an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. Built using Express.js for routing, a MongoDB database, and the Mongoose ODM, it serves as a robust backend for managing a social media platform.

## Motivation

The primary motivation behind building this application was to learn how to build associations between data in MongoDB and to provide a foundation for a full-fledged social media app. This project serves as a demonstration of proficiency in handling NoSQL databases and creating complex server-side applications.

## Features

- User account creation, update, and deletion.
- Posting, updating, and deleting thoughts.
- Adding and removing reactions to thoughts.
- Creating and managing a user's friend list.
- Real-time updates to user thoughts and reactions.

## Installation

To install and run this project locally:

1. Clone the repository:

   git clone https://github.com/kandekore/Social-Network-API.git

2. Navigate to the project directory:

   cd Social-Network-API

3. Install dependencies:

   npm install

4. Start the server:

   npm start

## Usage

For a detailed guide on how to use the application, please follow [this link to the video demonstration](https://drive.google.com/file/d/1u0canbA_QqDC9y41EIlnAMExOdwI73T7/view).

### Basic Commands:

- **Create a User**: `POST /api/users`
- **Post a Thought**: `POST /api/thoughts`

## API Endpoints

- `GET /api/users`: Get all users
- `POST /api/users`: Create a new user
- `GET /api/users/:userId`: Get a single user
- `PUT /api/users/:userId`: Update a user
- `DELETE /api/users/:userId`: Delete a user
- `POST /api/thoughts`: Create a new thought
- `GET /api/thoughts`: Get all thoughts
- `GET /api/thoughts/:thoughtId`: Get a single thought
- `PUT /api/thoughts/:thoughtId`: Update a thought
- `DELETE /api/thoughts/:thoughtId`: Delete a thought

## Database Schema

The database consists of three main models: `User`, `Thought`, and `Reaction`. The `User` model references the `Thought` and `Reaction` models to associate users with their thoughts and reactions.

- **User**: Stores user information and links to their thoughts and friend list.
- **Thought**: Represents a thought posted by a user, with fields for content, creation date, and associated reactions.
- **Reaction**: Captures users' reactions to thoughts.

A detailed schema visualization can be added here.

## Error Handling

The API provides comprehensive error handling and input validation to ensure data integrity and provide meaningful error messages to the client.

## Future Enhancements

- Integration with a front-end framework like React.
- Implementing real-time updates using WebSockets.
- Enhanced security features like OAuth for user authentication.

## Contributors

- [Darren Kandekore](https://github.com/kandekore)

## Questions

If you have any questions or suggestions, feel free to reach out:

- GitHub: [kandekore](https://github.com/kandekore)
- Email: [darren@kandekore.net](mailto:darren@kandekore.net)

## License

This project is licensed under the GNU GPL License. For more information, please refer to the LICENSE file in the repository.


