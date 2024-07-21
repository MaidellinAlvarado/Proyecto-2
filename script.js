function setPhoneStyles() {
  const navUl = document.querySelector('nav ul');
  navUl.style.flexDirection = 'column';
  navUl.style.alignItems = 'center';
  navUl.style.padding = '10px 0'; 
  document.querySelectorAll('nav ul li').forEach(li => {
      li.style.display = 'block';
      li.style.margin = '10px 0';
      li.style.textAlign = 'center'; 
  });
}

function setTabletStyles() {
  const navUl = document.querySelector('nav ul');
  navUl.style.flexDirection = 'row';
  navUl.style.alignItems = 'center';
  navUl.style.padding = '0'; 
  document.querySelectorAll('nav ul li').forEach(li => {
      li.style.display = 'inline-block';
      li.style.margin = '0 10px';
      li.style.textAlign = 'left'; 
  });
}

function setDesktopStyles() {
  const navUl = document.querySelector('nav ul');
  navUl.style.flexDirection = 'row';
  navUl.style.alignItems = 'center';
  navUl.style.padding = '0'; 
  document.querySelectorAll('nav ul li').forEach(li => {
      li.style.display = 'inline-block';
      li.style.margin = '0 20px'; 
      li.style.textAlign = 'left'; 
  });
}
