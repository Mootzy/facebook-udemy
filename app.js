// var database = [
//   //array of objects stored in database var
//   {
//     username: "tyler",
//     password: "wallace"
//   },
//   {
//     username: "sally",
//     password: "sally"
//   },
//   {
//     username: "sally",
//     password: "sally"
//   },
//   {
//     username: "sally",
//     password: "may"
//   }
// ];
// var newsfeed = [
//   //array of object stored in var newsfeed
//   {
//     user: "john",
//     timeline: "im so sleepy"
//   }
// ];
// var username = prompt("whats your username?"); //var username = whatever the person puts into the prompt
// var password = prompt("whats your password?"); //var password = wahtever the person puts into the prompt

// function isUserValid(username, password) {
//   //function with paramters username and password, could be anything, just for consistancy
//   for (var i = 0; i < database.length; i++) {
//     //i=0; i is less then database length, add one to i each time
//     if (
//       database[i].username === username && //go through each database index and text username === username var inputed from prompt
//       database[i].password === password //go through each database index and text password === password var inputed from prompt
//     ) {
//       return true; // if it is reutrn true
//     }
//   }
//   return false; //if it isn't return false
// }

// function signIn(username, password) {
//   //function with parameters username and password.
//   if (isUserValid(username, password)) {
//     //IF isUserValid function returns true, console.log the news feed
//     console.log(newsfeed);
//   } else {
//     alert("user not found"); //if isUserValid returns false, alert user not found
//   }
// }
// signIn(username, password); //execute run or invoke the function with the ****ARGUMENTS**** THESE ARE IMPORTANT *** (username, password)

// var usernamePrompt = prompt("whats your username?");
// var passwordPrompt = prompt("whats your password?");

// var database = [
//   { username: "tyler", password: "wallace" },
//   { username: "jane", password: "doe" }
// ];
// var newsfeed = [{ username: "john", timeline: "im so sleepy" }];

// function signIn(username, password) {
//   if (isUserValid(username, password)) {
//     console.log(newsfeed);
//   } else {
//     alert("username not found");
//   }
// }

// function isUserValid(username, password) {
//   for (i = 0; i < database.length; i++) {
//     if (
//       database[i].username === usernamePrompt &&
//       database[i].password === passwordPrompt
//     ) {
//       return true;
//     }
//   }
//   return false;
// }

// signIn(usernamePrompt, passwordPrompt);

var usernamePrompt = prompt("whats ur username");
var passwordPrompt = prompt("whats ur password");
var database = [
  {
    username: "tyler",
    password: "wallace"
  },
  {
    username: "sally",
    password: "jones"
  }
];
var newsfeed = [
  {
    user: "bob",
    status: "hey"
  }
];
function signIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(newsfeed);
  } else {
    alert("not found");
  }
}

function isUserValid(username, password) {
  for (var x = 0; x < database.length; x++) {
    if (
      database[x].username === usernamePrompt &&
      database[x].password === passwordPrompt
    ) {
      return true;
    }
  }
  return false;
}

signIn();
