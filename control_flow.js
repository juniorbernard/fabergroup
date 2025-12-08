let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
  accessLevel = "full access granted";
} else if (userRole === "manager") {
  accessLevel = "limited access granted";
} else {
  accessLevel = "no access granted";
}

// console.log("accessLevel:", accessLevel);

let isLoggedIn = true;
let userMessage;

if(isLoggedIn){
    if(userRole === "admin"){
        userMessage = "Welcome back, Admin!";
    } else {
        userMessage = "Welcome back, User!";
    }
}else{
    userMessage = "Please log in to continue.";
}

// console.log("accessLevel:", accessLevel);
// console.log("userMessage:", userMessage);

let userType = "admin";
let userCategory;

switch(userType){
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
        break;
}

// console.log("accessLevel:", accessLevel);
// console.log("userMessage:", userMessage);
// console.log("userCategory:", userCategory);

let isAuthenticated = true;
let isAuthenticationStatus = isAuthenticated ? "Authenticated" : "not Authenticated";

console.log("accessLevel:", accessLevel);
console.log("userMessage:", userMessage);
console.log("userCategory:", userCategory);
console.log("isAuthenticationStatus:", isAuthenticationStatus);