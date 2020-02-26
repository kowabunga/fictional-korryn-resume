window.addEventListener('hashchange', function() {
  scrollBy(0, -89);
});

// get year for copyright
document.getElementById('year').innerHTML = new Date().getFullYear();

const menubtn = document.getElementById('menubtn')
// menu toggle
menubtn.addEventListener('click', navDropdown);
function navDropdown() {
  const navBar = document.querySelector('.navbar');
  navBar.classList.toggle('responsive');
}
