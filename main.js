const signform = document.querySelector("form");
const select = document.querySelector("select");
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const mail = document.getElementById("Email");
const phoneNum = document.getElementById("phoneNo");
const password = document.getElementById("pwd");
const sigininEmail = document.getElementById("sigininEmail");
const sigininpass = document.getElementById("sigininPassword");
const sigininbutton = document.getElementById("sigininButton");
console.log(select.value);
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
  console.log(select.value);
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
sigininbutton.addEventListener("click", function () {
  for (let i = 0; i < database.length; i++) {
    let element = JSON.parse(localStorage.getItem("data")) || [];
    if (sigininEmail == element[i].email) {
       
    } else {

    }
    
    if (sigininpass == element[i].password) {
    } else {
    }
  }
})