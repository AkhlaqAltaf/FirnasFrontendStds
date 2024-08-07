
// npm i prompt-sync
var registeration_number = 3;
const name = "Akhlaq";
var phone = 1234567;
var cgpa = 3.4;

const prompt = require('prompt-sync')();


let dev;


function add(a,b){

     dev = (a,b)=>{

        d = a/b;
    
        console.log(d);
    
    }

    sum = a+b;
    console.log("SUM : ",sum);


}


// add(2,3);
// dev(4,2);




function loops(){


    for(var i=0;i<5;i++){

        console.log(i);
    }

}

function lists(){
    // List iteration
var list1 = [];

for(i=0;i<5;i++){

list1[i] = prompt("Enter Your Name");

}


console.log(list1);

}


var users = [{'username':"Akhlaq",'password':'1234'},{'username':'Waleed','password':'345'}];



function login(username , password){
message  = "";

 users.forEach(function(user){

    if (user.username==username && user.password==password) {
        
        message ="OK You Loged in";
    }
    else{
    message = "No Matched";
    return;
    }

    console.log(message);




 });

}




function signup(username , password){

    users.push({"username":username,'password':password});

}



function iterate(){

    users.forEach(function(user){
        console.log(user);
    })
}

iterate();
console.log("SIGNUP")
signup("Ali",'123456');

iterate();

login('Ali','123456');

