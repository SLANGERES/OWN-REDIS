# Custom Redis Server in Node.js

This is a custom Redis server implemented in Node.js. It mimics the basic functionality of Redis, such as storing and retrieving key-value pairs, supporting commands like `SET`, `GET`, `DEL`, and more. This project is designed for learning purposes, and it can be extended to support more Redis-like features.

## Features

- **In-memory storage** for fast data retrieval.
- Basic Redis commands: `SET`, `GET`
- Under devlopment adding new command as soon as posssible.
- Simple data persistence (optional, with periodic saving to disk).
- Pub/Sub message passing (basic implementation).
- Supports key expiration with TTL (time-to-live).

## Requirements

- **Node.js**: v14.x or later
- **npm**: v6.x or later

## Installation

### 1. Clone the repository

First, clone this repository to your local machine:

```bash
git clone https://github.com/SLANGERES/OWN-REDIS.git
cd custom-redis-server
