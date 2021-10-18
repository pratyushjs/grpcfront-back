
const path= require('path');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader')
const readline = require('readline');
const PORT=3032;
const PROTO_FILE='./proto/random.proto'
const packageDef= protoLoader.loadSync(path.resolve(__dirname,PROTO_FILE))//protoLoader.loadSync(path.resolve(__dirname,PROTO_FILE));
const grpcObject= grpc.loadPackageDefinition(packageDef)//grpc.loadPackageDefinition(packageDef)
// const client=new grpcObject.randomPackage.Random(`0.0.0.0:${PORT}`,grpc.ServerCredentials.createInsecure());
const client = new grpcObject.randomPackage.Random(`0.0.0.0:${PORT}`,grpc.credentials.createInsecure());
const readLine=readline.createInterface({input:process.stdin,output:process.stdout}) 
const deadline = new Date();
deadline.setSeconds(deadline.getSeconds()+5);
client.waitForReady(deadline,(err)=>{
    if(err){
        console.log(err)
        return
    }
    onClientReady()
})
const PingPongStream=()=>{
    client.PingPong({message:'Ping'},(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        console.log(result);
    })
    const stream= client.RandomNumbers({maxVal:85})
    stream.on("data",(chunk)=>{
        console.log(chunk)
    })
    stream.on('end',()=>{
        console.log('transmission end')
    })
}
const TodoStream=()=>{
   const stream= client.TodoList((err,result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
    })
    stream.write({todo:'no more coding1',status:'Never'})
    stream.write({todo:'no more coding2',status:'Never'})
    stream.write({todo:'no more coding3',status:'Never'})
    stream.write({todo:'no more coding4',status:'Never'})
    stream.write({todo:'no more coding5',status:'Never'})
    stream.write({todo:'no more coding6',status:'Never'})
    stream.end()
}
const ChatStream=()=>{
    const userName=process.argv[2];
    console.log(userName)
    if(!userName){
        console.log('no username cant join the chat');
        process.exit()
    }
    const metaData= new grpc.Metadata()
    metaData.set('username',userName);
    console.log(metaData);
    const call = client.Chat(metaData);
    call.write({
        message:'register'
    })
    call.on("data",(chunk)=>{
        console.log(`${chunk.userName}=> ${chunk.message}`)
    })
    readLine.on('line', (line=>{
        if(line==='quit'){
            call.end()
        }else{
            call.write({
                message:line
            })
        }
    }))
}
function onClientReady(){
//    PingPongStream()
//    TodoStream()
      ChatStream()
}
