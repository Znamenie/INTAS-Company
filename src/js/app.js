function openNav() {
  document.getElementById('mySidebar').style.width = '100%';
  document.getElementById('content').style.gridTemplateColumns = '200px 1fr';
  document.getElementById('openbtn').style.display = 'none';
  document.getElementById('closebtn').style.display = 'block';
  document.getElementById('nav-title').style.display = 'block';
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById('mySidebar').style.width = '0px';
  document.getElementById('content').style.gridTemplateColumns = '50px 1fr';
  document.getElementById('openbtn').style.display = 'block';
  document.getElementById('closebtn').style.display = 'none';
  document.getElementById('nav-title').style.display = 'none';
}

// Открытие описания тестов
function displayDescOne(numId) {
  var textOne = [
    'Test1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper volutpat tristique. Fusce et nunc porttitor, pretium urna at, sagittis purus. Nullam sagittis congue sapien non sodales. Aliquam vel condimentum lacus, sit amet feugiat velit. Suspendisse congue imperdiet dui, sit amet cursus mi viverra sed. Nam porttitor venenatis vehicula. Vestibulum sed arcu vel lorem venenatis tempor.',
  ];
  var textTwo = [
    'Test2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper volutpat tristique. Fusce et nunc porttitor, pretium urna at, sagittis purus. Nullam sagittis congue sapien non sodales. Aliquam vel condimentum lacus, sit amet feugiat velit. Suspendisse congue imperdiet dui, sit amet cursus mi viverra sed. Nam porttitor venenatis vehicula. Vestibulum sed arcu vel lorem venenatis tempor.',
  ];
  var textThree = [
    'Test3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper volutpat tristique. Fusce et nunc porttitor, pretium urna at, sagittis purus. Nullam sagittis congue sapien non sodales. Aliquam vel condimentum lacus, sit amet feugiat velit. Suspendisse congue imperdiet dui, sit amet cursus mi viverra sed. Nam porttitor venenatis vehicula. Vestibulum sed arcu vel lorem venenatis tempor.',
  ];
  var textFour = [
    'Test4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper volutpat tristique. Fusce et nunc porttitor, pretium urna at, sagittis purus. Nullam sagittis congue sapien non sodales. Aliquam vel condimentum lacus, sit amet feugiat velit. Suspendisse congue imperdiet dui, sit amet cursus mi viverra sed. Nam porttitor venenatis vehicula. Vestibulum sed arcu vel lorem venenatis tempor.',
  ];
  var textFive = [
    'Test5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper volutpat tristique. Fusce et nunc porttitor, pretium urna at, sagittis purus. Nullam sagittis congue sapien non sodales. Aliquam vel condimentum lacus, sit amet feugiat velit. Suspendisse congue imperdiet dui, sit amet cursus mi viverra sed. Nam porttitor venenatis vehicula. Vestibulum sed arcu vel lorem venenatis tempor.',
  ];

  if (numId == 'sidebar-item-one') {
    document.getElementById('module-description-text').innerHTML = '';
    document.getElementById('module-description-text').innerHTML = textOne;
  } else if (numId == 'sidebar-item-two') {
    document.getElementById('module-description-text').innerHTML = '';
    document.getElementById('module-description-text').innerHTML = textTwo;
  } else if (numId == 'sidebar-item-three') {
    document.getElementById('module-description-text').innerHTML = '';
    document.getElementById('module-description-text').innerHTML = textThree;
  } else {
    document.getElementById('module-description-text').innerHTML = '';
    document.getElementById('module-description-text').innerHTML = textFour;
  }

  document.getElementById('module-start').style.display = 'none';
  document.getElementById('module-description').style.display = 'block';
  document.getElementById('module-employment').style.display = 'none';
}

function hideDescOne() {
  document.getElementById('module-description-text').innerHTML = '';
  document.getElementById('module-start').style.display = 'flex';
  document.getElementById('module-description').style.display = 'none';
  document.getElementById('module-employment').style.display = 'none';
}
