const http= require("http");
const fs =require("fs");
const args =require('minimist')(process.argv.slice(2));

let homeContent="";
let projectContent= "";
let registrationContent="";
fs.readFile("home.html",(err,home)=>{
    if(err){
        throw err;
    }
    homeContent=home.toString();
    
});
fs.readFile("project.html",(err,project)=>{
    if(err){
     throw err;
    }
    projectContent=project.toString();
});
fs.readFile("registration.html",(err,registration)=>{
    if(err){
     throw err;
    }
    registrationContent=registration.toString();
});
   http.createServer((request,response)=>{
    let url=request.url;
        response.writeHead(200,{"content-type": "text/html"});
        switch(url){
          case"/project":
          response.write(projectContent); 
          response.end();
          break;

          case"/registration":
          response.write(registrationContent);
          response.end();
          break;
          case "/script.js":
            response.write(registrationScript);
            response.end();
            break;

  default:
    response.write(homeContent);
    response.end();
    break;
        }

    }).listen(args.port);