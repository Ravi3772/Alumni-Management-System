window.addEventListener('DOMContentLoaded', () => {
  const isLoggedIn = localStorage.getItem('loggedIn');
  const navList = document.getElementById('nav-list');
  const loginTab = document.getElementById('loginTab');

  if (isLoggedIn && loginTab) {
    // Replace Login tab with Profile tab on all pages
    const profileTab = document.createElement('li');
    profileTab.innerHTML = '<a href="profile.html"><i class="fa fa-user"></i> Profile</a>';
    navList.replaceChild(profileTab, loginTab);
  }
});
