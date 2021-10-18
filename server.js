// import path from 'path';
// import * as grpc from '@grpc/grpc-js';
// import * as protoLoader from '@grpc/proto-loader';

const path = require("path");
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const PORT = 3032;
const PROTO_FILE = "./proto/random.proto";
const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE));
const grpcObject = grpc.loadPackageDefinition(packageDef);
const randomPackage = grpcObject.randomPackage;
const todoList = [];
const userListByUserName = new Map();
function main() {
  const server = getServer();
  server.bindAsync(
    `0.0.0.0:${PORT}`,
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
      if (err) {
        console.log(error);
        return;
      }
      console.log(`grpc server is started on port ${port}`);
      server.start();
    }
  );
}
const RandomNumberService = (call) => {
  const { maxVal } = call.request;
  let runCount = 0;
  const id = setInterval(() => {
    runCount++;
    console.log(maxVal);
    call.write({ num: Math.floor(Math.random() * maxVal) });
    if (runCount > 10) {
      clearInterval(id);
      call.end();
    }
  }, 500);
};
const TodoListService = (call, callback) => {
  call.on("data", (chunk) => {
    todoList.push(chunk);
    console.log(chunk);
  });
  call.on("end", () => {
    callback(null, { todos: todoList });
  });
};

const ChatService = (call) => {
  call.on("data", (req) => {
      console.log('in chat service',call.metadata)
    const userName = call.metadata.get("username")[0];
    const message = req.message;
    console.log(message)

    for (let [user, usersCall] of userListByUserName) {
      if (userName !== user) {
        usersCall.write({
          userName: userName,
          message: message,
        });
      }
    }
    if (userListByUserName.get(userName) === undefined) {
      userListByUserName.set(userName, call);
    }
  });
  call.on("end", () => {
    const userName = call.metadata.get("username")[0];
    userListByUserName.delete(userName);
    call.write({
      userName: "Server",
      message: `See you later ${userName}`,
    });
    call.end();
  });
};
function getServer() {
  const server = new grpc.Server();
  server.addService(randomPackage.Random.service, {
    PingPong: (req, res) => {
      console.log(req.request);
      res(null, { message: "Pong" });
    },
    RandomNumbers: RandomNumberService,
    TodoList: TodoListService,
    Chat: ChatService,
  });
  return server;
}
main();
