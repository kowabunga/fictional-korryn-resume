window.addEventListener('hashchange', function() {
  scrollBy(0, -89);
});

// get year for copyright
document.getElementById('year').innerHTML = new Date().getFullYear();

// menu toggle
menubtn.addEventListener('click', navDropdown);
function navDropdown() {
  var navBar = document.querySelector('.navbar');
  navBar.classList.toggle('responsive');
}
