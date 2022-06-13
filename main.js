const signform = document.querySelector("form");
const select = document.querySelector("select");
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const mail = document.getElementById("Email");
const phoneNum = document.getElementById("phoneNo");
const password = document.getElementById("pwd");
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
