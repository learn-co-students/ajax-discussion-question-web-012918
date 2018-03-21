



// console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  const phone = document.getElementById("phone");
  const fullname = document.getElementById("fullname");
  const email = document.getElementById("email");
  const street = document.getElementById("street");
  const city = document.getElementById("city");
  const state = document.getElementById("state");
  const postcode =document.getElementById("postcode");
  const button = document.getElementById('btn');
  const cell = document.getElementById("cell");
  const date_of_birth = document.getElementById("date_of_birth");

  button.addEventListener("click", function(event){
      var data = fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(json=> fillJson(json["results"][0]))

      function fillJson(data) {
        phone.innerText = data["phone"]
        fullname.innerText = data["name"].first + " " + data["name"].last
        email.innerText = data["email"]
        street.innerText = data["location"]["street"]
        city.innerText = data["location"]["city"]
        state.innerText = data["location"]["state"]
        postcode.innerText  = data["location"]["postcode"]
        cell.innerText = data["cell"]
        date_of_birth.innerText = data["dob"]

    }

  });



});
