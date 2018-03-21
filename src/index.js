// console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  const fullname = document.getElementById("fullname");
  const email = document.getElementById("email");
  const street = document.getElementById("street");
  const city = document.getElementById("city");
  const state = document.getElementById("state");
  const postcode = document.getElementById("street");
  const phone = document.getElementById("phone");
  const cell = document.getElementById("cell");
  const date_of_birth = document.getElementById("date_of_birth");
  console.log("CONTENT LOADED!", fullname);
  const button = document.getElementsByClassName('btn btn-primary')[0]
  button.addEventListener('click', getJSON)

});

function getJSON(){
  fetch('https://randomuser.me/api/').then(resp => resp.json()).then(json=>assignData(json.results[0]))
}

function assignData(data){
  fullname.innerText = data.name.first + " " + data.name.last
  email.innerText = data.email
  street.innerText = data.location.street
  city.innerText = data.location.city
  state.innerText = data.location.state
  postcode.innerText = data.location.postcode
  phone.innerText = data.phone
  cell.innerText = data.cell
  date_of_birth.innerText = data.dob
}
