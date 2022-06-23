//const { Tooltip } = require("bootstrap");

const signform = document.querySelector("form");
const select = document.querySelector("select");
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const mail = document.getElementById("Email");
const phoneNum = document.getElementById("phoneNo");
const password = document.getElementById("pwd");
const signinButton = document.getElementById("signin-Button");
const signinEmail = document.getElementById("signin-Email");
const signpassword = document.getElementById("signin-Password");
const emailToolTip = document.querySelector(".email-Tooltip");
const passwordToolTip = document.querySelector(".password-Tooltip");
const tooltipContainer = document.querySelectorAll(".tooltip-ctn").hidden = true;
const tooltip1 = document.getElementById("tooltip1");
const tooltip2 = document.getElementById("tooltip2");
tooltip1.style.display = "none";
tooltip2.style.display = "none";
//console.log(select.value);
const database = [];
const addForm = (selectCh, firstName, lastName, email, phoneNum, password, ) => {
  database.push({
    selectCh,
    firstName,
    lastName,
    email,
    phoneNum,
    password,
  });


  localStorage.setItem("data", JSON.stringify(database))
  return { selectCh, firstName, lastName, email, phoneNum, password };
}
signform.onsubmit = e => {
  e .preventDefault();
  //console.log(select.value);
  const newform = addForm(
    select.value,
    firstName.value,
    lastName.value,
    mail.value,
    phoneNum.value,
    password.value
  )
  select.value = "";
  firstName.value = "";
  lastName.value = "";
  mail.value = "";
  phoneNum.value = "";
  password.value = '';
}
// login in functionality 
console.log("yes");
const dataStored = JSON.parse(localStorage.getItem("data")) || [];
signinButton.addEventListener("click", function (e) {
  e.preventDefault();
  for (i = 0; i < dataStored.length; i++) {
    if (signinEmail.value === dataStored[i].email) {
      if (signpassword.value === dataStored[i].password) {
        window.location.href = "../home page/index.html"
      } else {
        tooltip2.style.display = "flex";
      }

    } else {
      tooltip1.style.display = "flex";
    }
  }
  });
console.log(dataStored);
console.log("yes");