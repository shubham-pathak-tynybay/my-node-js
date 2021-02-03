var buffer1=new Buffer("My name is shubham pathak");
var buffer2=new Buffer("I am a software engineer");
var buffer3=Buffer.concat([buffer1,buffer2]);

console.log(buffer3,"utf8")