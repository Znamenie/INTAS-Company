// Выбор тестов и кнопка "Начать"
let currentBtn;
let btns = document.querySelectorAll('button[data-type="def"]');
let startBtn = document.querySelector('button[data-type="start"]');
btns.forEach((e) => {
  e.addEventListener('click', function() {
    currentBtn = this;
  });
});

startBtn.addEventListener('click', function() {
  window[currentBtn.getAttribute('data-func')]();
});

function func1() {
  document.getElementById('module-start').style.display = 'none';
  document.getElementById('module-description').style.display = 'none';
  document.getElementById('module-employment').style.display = 'flex';
}

function func2() {
  alert('2 func');
}

function func3() {
  alert('3 func');
}

function func4() {
  alert('4 func');
}

// Открытие-закрытие меню
function openNav() {
  document.getElementById('mySidebar').style.width = '100%';
  document.getElementById('content').style.gridTemplateColumns = '200px 1fr';
  document.getElementById('openbtn').style.display = 'none';
  document.getElementById('closebtn').style.display = 'block';
  document.getElementById('nav-title').style.display = 'block';
}

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

  var startTests = document.getElementById('start-test');

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
  document.getElementById('module-results').style.display = 'none';
  var elements = document.getElementsByClassName('answers'); // get all elements
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.color = '#263238';
  }
}

// Закрытие описания тестов кнопка "Отмена"
function hideDescOne() {
  document.getElementById('module-description-text').innerHTML = '';
  document.getElementById('module-start').style.display = 'flex';
  document.getElementById('module-description').style.display = 'none';
  document.getElementById('module-employment').style.display = 'none';
}

// Выход из теста, кнопка "Выход"
var modal = document.getElementById('my_modal');
var btn = document.getElementById('btn_modal_window');
var span = document.getElementsByClassName('close_modal_window')[0];

btn.onclick = function() {
  modal.style.display = 'block';
};

span.onclick = function() {
  modal.style.display = 'none';
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

// Сбросить все ответы
function resetAnswers() {
  $('input[type=radio]').prop('checked', false);
}

//Выход из теста
function exitTest() {
  document.getElementById('module-description-text').innerHTML = '';
  document.getElementById('module-start').style.display = 'flex';
  document.getElementById('module-description').style.display = 'none';
  document.getElementById('module-employment').style.display = 'none';
  document.getElementById('my_modal').style.display = 'none';
}

//Конец теста
function endTest() {
  document.getElementById('module-start').style.display = 'flex';
  document.getElementById('module-description').style.display = 'none';
  document.getElementById('module-employment').style.display = 'none';
  document.getElementById('module-results').style.display = 'none';
  $('input[type=radio]').prop('checked', false);
  var elements = document.getElementsByClassName('answers'); // get all elements
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.color = '#263238';
  }
}

//Открытие результатов
function openResults() {
  document.getElementById('module-start').style.display = 'none';
  document.getElementById('module-description').style.display = 'none';
  document.getElementById('module-employment').style.display = 'none';
  document.getElementById('module-results').style.display = 'block';
}
