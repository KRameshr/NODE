// XML P
// JSONP  P IS PADDING
// ======
// crossdomain.XML

// res.writeHead("Access-Control-Origin", "*"); any body can and access
// res.writeHead("Access-Control-Origin", "http://localhost:portNumber");

// clustor is data base in form hardware



Node.js 
Node.js is an open-source cross-platform runtime environment that allows you to use JavaScript to develop server-side applications.

Node.js uses the single-threaded, non-blocking, and event-driven execution model, which is similar to the execution model of JavaScript in the web browser.
Node.js is good for prototyping and agile development, allowing you to build fast and highly scalable applications.


Advantages
 Ease to learn as it based on js
 
Asynchronous
Node js is Asynchronous 


How it works
V8 jsEs5/Es NExt
Commands c++
Hooks  assembly languages bases on AI-32 x86-64 ARM Mips etc
Execute machineCode
Invented by Ryan Dhal in 2009
 

Used in

Fastfile updates
App date 
Ads server application
Multiplayer games
Websocket applications

NodeJs is not

A web framework
Multi threaded
For everyone
For every project


real-world applications:
Scalable network applications: Node.js is used by big companies like LinkedIn, Uber, and Netflix to develop scalable applications.
Real-time applications – Since Node.js uses an event-driven, non-blocking I/O model, it is ideal for real-time applications including chat and online gaming.
API and Microservices – Node.js is commonly used to develop Restful APIs and microservices.
IoT devices: Node.js powers various Internet of Things (IoT) applications.
……………………………………………………………………………………………………………………………………………..

Node js is a asynchronous in nature  improve the performance
Node has a NPM module built in package Manager which container other developer code also..
Module in node is  used to encapsulate single or multiple code file into a single file that accomplished one thing  
          ex  data manipulation
Module  are used to separate code into smaller parts are used to manipulate the your code
nodeJS is break into large code into small peace code 

Built in packages 
Path : -del with different file path 
Fs  : filesystem
Http : create a small server
Url : deal with web address 
query string : pares and work with url query string

NPM is built in packagemanager in node  use shared code 
NPM is central repository to share the package 

Dependencies

You can use NPM to install packages. These packages are called Dependencies.
Type of Dependencies.

Npm commands 

Local module   it will install folder
 npm  -v
npm - help
 npm init
Npm init -yes

Npm config set init -author-name “ ”
Npm config  get init -author-name “ ”
Npm config delete init -author-name “ ”

Npm install module-name - - save
 It will add in that using folder
Npm install module-name@4.21.3 - - save          version 
                                                ^4.21.3 last major 
                                               ~4.21.3 minor version
                                                  4.21.3 normal version
                                               
Npm update module-name
Npm remove/uninstall module-name  - - save  
Normal  Dependencies used to  project runtime , project without cannot deploy them.
It's used to production


Dev Dependencies  are used by developers to develop application projects without deploying  them.
It's used to development
Npm install module-name  - - save - - dev
Npm remove/uninstall module-name  - - save - - dev

 
 Globally module   it will install local computer
 The package want to  used in globally in your system need to run npm in
  Npm-install-g module-name 
  Npm root -g  location  of module in computer
  Npm package-name
  Npm list ( to check the module in file)
       Npm uninstall-g module-name  
        globally package are available in project, it can used in other project

        Npm-install package-name locally 
       Locally package are available in project, it cannot used in other project

Best  module 
  Nodemon
Npm i nodemon 
Node index.js or Node index
 
  live -sever
"scripts": {
    "start": "node index.js",
    "serve": "liver-sever"
  },





Fs 
__dirname
__filename

fs.readFileSync( )
fs.readFile( )

Stat
    fs.stat(“path of the file/dir”, ( )  )
           Uid
           Gid
            Size
Atime
birth time

Event-driven programming
 East to understand

Stream 
 Is the data small  or large…


Type of streams
    Writable
    Readable
    Duple
   Transform
 

Streams events 
Data
End
Drain
Finish

Http model
 Hypertext transfer protocal
Http is enable  additional B/w server and client  information   in form key : value
Http status codes are in 3 digit b/w 
100 = indicates the request received and process
200 = success or accepts
300  = future process 
400  = page found are invalid
500  =  server was failed
Request  two 
 Get 
Post
 
Six import query string  methord
Encode
Decode
Escape
parse
Stringify
unescape


 ExpressJS components
Request
Response
Middleware
Error handling
Template
database
  
Http request methods
     Get
     Post
     Put
     Patch
     Delete
     Options
     Head

mongoDB
Mongoose

Testing 


Command Line Applications CLI (Command Line Interface)

   The process.env is a global object used to access all the environment variables of the environment your application is running. That means that it is accessible everywhere in our application

process.env
   The process.env is a global variable injected at runtime by your Node.js application to depict the state of the environment your app is in at the time of initiation and utilize the same at runtime

   The process.env is a global object used to access all the environment variables of the environment your application is running. That means that it is accessible everywhere in our application
    node 
      process.env
      
Installing Environment Variables
Node.js natively does not load .env files, so we must utilize the dotenv package to load the file and expose the values via process.env.       
      


taking input
  The process.stdin is a standard Readable 
  stream which listens for user input and is
  accessible via the process module. It uses on() 
  function to listen for input events.
  const { stdin, stdout } = require('node:process');
  stdin.pipe(stdout);
  
  
Inquirer
  Inquirer.js is a collection 
  of common interactive command line interfaces 
  for taking inputs from user. 
  It is promise based and supports 
  chaining series of prompt questions together, 
  receiving text input, checkboxes, 
  lists of choices and much more.  

Prompts
  Prompts is a higher level and user friendly 
  interface built on top of Node.js’s inbuilt
  Readline module. It supports different type 
  of prompts such as text, password, autocomplete, 
  date, etc. It is an interactive module and comes 
  with inbuilt validation support



Anonymous functions are functions defined without having a name on the top of the function definition line.


Commands
   node -v    

   node
    Ctr +c

  Node file name 
 Node index.js  
   


Express and http are  model build in node model
  Express js   another  meteor js



Node is runtime enviroment     
Npm is package manager
Npx is command Manager 



