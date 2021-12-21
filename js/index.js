// // localStorage.setItem("test", "Test");

// // let localS = localStorage.getItem("test");

// // localStorage.setItem("test", "Test-2");
// // localStorage.removeItem("test");
// // console.log(localS);

// let obj = {
//   name: "Muha",
//   surname: "Mikayilov",
//   age: 21,
// };

// // localStorage.setItem("obj", JSON.stringify(obj));

// // let objL = JSON.parse(localStorage.getItem("obj"));

// // console.log(objL);
// // localStorage.removeItem("obj");

// sessionStorage.setItem("test", JSON.stringify(obj));

// let getStorage = JSON.parse(sessionStorage.getItem("test"));

// console.log(getStorage);

// // document.cookie = "username=John Doe";
// // document.cookie = "username=Muha";

// document.cookie = "username=John Doe; expires=Thu, 18 Dec 2022 12:00:00 UTC";
// document.cookie = "username2=Muha Doe; expires=Thu, 18 Dec 2022 12:00:00 UTC";
// document.cookie = `username3=${JSON.stringify(
//   obj
// )}; expires=Thu, 18 Dec 2022 12:00:00 UTC`;

// let a = document.cookie;

// console.log(a);

let username = document.querySelector("#username");
let pass = document.querySelector("#pass");
let btn = document.querySelector("button");
let welcome = document.querySelector(".div");
let welcomeH = document.querySelector(".div h1");
let form = document.querySelector(".form");
let logout = document.querySelector(".logout");

let localUser = JSON.parse(localStorage.getItem("login"));

const user = {
  username: "MM",
  pass: "12",
};

if (localUser !== null) {
  welcome.style.display = "block";
  form.style.display = "none";
  welcomeH.innerText += " " + localUser.username;
} else {
  welcome.style.display = "none";
  form.style.display = "block";
}

console.log(localUser);
let userName;
let passW;

username.addEventListener("change", function (e) {
  const { value: userVal } = e.target;
  userName = userVal;
});
pass.addEventListener("change", function (e) {
  const { value: userPass } = e.target;
  passW = userPass;
});

btn.addEventListener("click", function (e) {
  const { username: myName, pass: userPassword } = user;
  if (userName === myName && passW === userPassword) {
    localStorage.setItem("login", JSON.stringify(user));
    location.reload();
  }
});

logout.addEventListener("click", function (e) {
  e.preventDefault();
  localStorage.removeItem("login");
  location.reload();
});
