const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  let fetchRandom = () => {
    // debugger
    var data = fetch('https://randomuser.me/api/')
      .then( res => res.json() )
      .then( json => render(json))
  }

  function render(json) {
    // debugger
    console.log(json)
    let res = json.results[0]
    $('#fullname').text(`${res.name.title} ${res.name.first} ${res.name.last}`)
    $('#email').text(`${res.email}`)
    $('#street').text(`${res.location.street}`)
    $('#city').text(`${res.location.city}`)
    $('#state').text(`${res.location.state}`)
    $('#postcode').text(`${res.location.postcode}`)
    $('#phone').text(`${res.phone}`)
    $('#cell').text(`${res.cell}`)
    $('#date_of_birth').text(`${res.dob}`)
  }

  $('button')[0].addEventListener('click', function() {
    fetchRandom()
  })

  // $('button')[0].click(function() {
  //   fetchRandom()
  // })

  // Write out the request and response cycle. What is its purpose? How does it work?

  // fetch('url') //request
  // "response" // response
  // .then(response => response) // action on the response
});
