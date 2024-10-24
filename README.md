# **Express.js with TypeScript Demo**

This repository contains incremental code demos on Express.js using TypeScript. Each region contains an incremental topic that builds upon the previous, providing a step-by-step guide to understanding Express.js fundamentals.

## **Table of Contents**
1. [Setting up Express.js](#1-setting-up-expressjs)
2. [Creating First Application in Express.js](#2-creating-first-application-in-expressjs)
3. [Creating and Using Middlewares](#3-creating-and-using-middlewares)
4. [Routing in Express.js](#4-routing-in-expressjs)
5. [Handling Requests and Responses](#5-handling-requests-and-responses)
6. [Creating and Using Custom Error Handlers](#6-creating-and-using-custom-error-handlers)

## **Prerequisites**
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- Basic knowledge of JavaScript/TypeScript

## **Setup Instructions**

1. Clone the repository:
    ```bash
    git clone https://github.com/sukalskar98/ExpressJSDemo.git
    ```

2. Navigate to the root folder.

3. Install the required dependencies:
    ```bash
    npm install
    ```

4. Run the application:
    ```bash
    npm run dev
    ```

> **Note:** `nodemon` is configured for hot-reloading when files are modified.

---

## **1. Setting up Express.js**

This demo shows how to set up an Express.js server using TypeScript.

- File: `index.ts`
- Region: `01-setup-express`
- Key Concepts:
  - Initializing an Express project
  - Setting up TypeScript configuration (`tsconfig.json`)
  - Creating a basic Express server

---

## **2. Creating First Application in Express.js**

This demo introduces how to create a basic Express.js application with a simple "Hello, World!" route.

- File: `index.ts`
- Region: `02-first-app`
- Key Concepts:
  - Adding basic routes to the Express application
  - Handling GET requests

---

## **3. Creating and Using Middlewares**

This demo introduces the concept of middlewares in Express.js, including both application-level and route-specific middlewares.

- File: `index.ts`
- Region: `03-middlewares`
- Key Concepts:
  - Creating custom middlewares
  - Using application-level and route-specific middlewares
  - Implementing a simple authentication middleware

---

## **4. Routing in Express.js**

This demo expands the routing capabilities by introducing route parameters and using separate routing modules.

- File: `index.ts`
- Region: `04-routing`
- Key Concepts:
  - Defining routes with parameters
  - Creating a separate `routes` file to organize routes
  - Using `Router` in Express.js

---

## **5. Handling Requests and Responses**

This demo demonstrates handling various request types such as query parameters and POST requests, and responding with JSON.

- File: `index.ts`
- Region: `05-request-response`
- Key Concepts:
  - Handling query parameters in GET requests
  - Handling POST requests with JSON bodies
  - Sending responses in JSON format

---

## **6. Creating and Using Custom Error Handlers**

This demo covers how to create custom error classes and handle specific errors using custom error handlers.

- File: `index.ts`
- Region: `06-custom-error-handlers`
- Key Concepts:
  - Creating a custom error class
  - Handling specific error types in Express.js
  - Differentiating between application errors and system errors

---

## **How to Use Nodemon for Auto-Restart**

This project has `nodemon` configured to monitor file changes and restart the server automatically. To start the server with `nodemon`, simply run:

```bash
npm run dev
