What is Node.js?

Node.js is an open-source, cross-platform, JavaScript runtime environment that allows developers to run JavaScript code on the server side.

Created by: Ryan Dahl (in 2009)

Built on: Google Chrome’s V8 JavaScript Engine

Model: Single-threaded, Event-driven, Non-blocking I/O

⚙️ Features & Advantages

✅ Asynchronous & Non-blocking – Can handle multiple requests at the same time efficiently.
✅ Fast Execution – Uses V8 engine to convert JS code into machine code.
✅ Highly Scalable – Suitable for real-time and data-heavy applications.
✅ Easy to Learn – Based on JavaScript, which is familiar to most web developers.

🚫 Node.js is NOT

❌ A web framework (like Express or Django)
❌ Multi-threaded (works on single thread but handles concurrency)
❌ Suitable for every project (not ideal for CPU-intensive apps)

💼 Real-World Uses

Scalable Network Apps – LinkedIn, Uber, Netflix

Real-time Applications – Chat apps, Online games

API Development – RESTful APIs, Microservices

IoT Applications – Smart devices, sensors, etc.

📦 Modules in Node.js

Modules are reusable pieces of code. You can import or export them between files.

🔹 Built-in Modules
Module	Description
fs	File System operations
path	Deals with file and folder paths
http	Creates HTTP servers
url	Parses web URLs
querystring	Works with URL query strings
📦 NPM – Node Package Manager

Comes built-in with Node.js

Used to install, share and manage external packages

🔹 Common Commands
npm -v                   # check npm version
npm init                 # create package.json
npm init -y              # auto accept defaults
npm install <pkg> --save # install locally
npm install <pkg> -g     # install globally
npm uninstall <pkg>      # remove package
npm update <pkg>         # update package
npm list                 # view installed packages

🔹 Dependency Types

Dependencies: Used in production (runtime packages).

DevDependencies: Used only in development (--save-dev).

🧠 Node Package Management Tools
Tool	Use
npm	Package manager for Node.js
npx	Runs Node commands or executables
nodemon	Automatically restarts the server when files change
live-server	Runs a live development server

Example in package.json:

"scripts": {
  "start": "node index.js",
  "serve": "live-server"
}

🧩 Streams

Streams are used for reading or writing large data piece by piece instead of loading all at once.

Types:

Readable

Writable

Duplex (both read/write)

Transform (modify data in-between)

Important Events:
data, end, error, finish, drain

🌐 HTTP Module

Used to create web servers and handle requests/responses.

Common HTTP Status Codes:

Code	Meaning
100	Request received and being processed
200	Success
300	Redirection
400	Client Error (e.g., Not Found)
500	Server Error
🚀 Express.js

Express.js is a lightweight Node.js framework used to build REST APIs and web servers quickly.

Main Components:

Request & Response

Middleware

Error Handling

Templates

Database connection

Common HTTP Methods:
GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD

🗄️ MongoDB & Mongoose

MongoDB: A NoSQL database that stores data in JSON-like format.

Mongoose: A Node.js library (ODM) used to interact with MongoDB easily.

⚙️ Environment Variables

Access using: process.env

Used for storing secret data (like API keys, DB passwords).

Install dotenv:

npm install dotenv


Usage:

require('dotenv').config();
console.log(process.env.PORT);

💻 CLI (Command Line Interface) Applications

Node can take input from terminal using process.stdin and process.stdout.

Use libraries like Inquirer.js or Prompts for interactive inputs.

Example:

const { stdin, stdout } = require('node:process');
stdin.pipe(stdout);

🧠 Miscellaneous

Anonymous Functions: Functions without a name.

Cluster Module: Used to utilize multiple CPU cores.

XML / JSONP: Used for data sharing between different domains.

🇮🇳 Quick Summary
Topic	Description
Creator	Ryan Dahl
Year	2009
Engine	Chrome V8
Language	JavaScript
Type	Runtime Environment
Modules	fs, path, http, url
Database	MongoDB with Mongoose
Framework	Express.js
Manager	npm / npx
CLI Input	process.stdin, process.stdout

