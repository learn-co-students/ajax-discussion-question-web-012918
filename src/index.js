const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  function fetchData() {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(json => console.log(json))
    //.then( json => render(json['results'][0]))
  }


  //fetchData needs a function to render


  let button = document.querySelector('.btn.btn-primary')
  console.log(button)

  button.addEventListener('click', function(){
    fetchData()
  })
});
