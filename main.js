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
const sigininText = document.getElementById("signinTxt");
const containerIntro = document.getElementById("container-intro");
const examContainer = document.getElementById("exam-container");
const signinwelcome = examContainer[sigininwel];
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
      if (sigininpass == element[i].password) {
        containerIntro.hidden;
        //signinwelcome.innerHTML = `welcome back to landlordDirect ${element[i].firstName} ${Element[i].lastName}`;

      } else {
        sigininText.innerHTML =
          "invalid Email or password address in the database";
      }
    } else {
      sigininText.innerHTML = "invalid Email address in the database";
      
    }
  }
})