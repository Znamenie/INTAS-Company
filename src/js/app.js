/**
 * Инициализация функции маски для поля телефона
 * Документация: https://imask.js.org/guide.html
 */
function initPhoneMask() {
  $('input[type=tel]').each(function(index, element) {
    var mask = IMask(element, {
      mask: [
        {
          mask: '+7 (000) 000-00-00',
          startsWith: '+7',
          country: 'Russia',
        },
        {
          mask: '+7 (000) 000-00-00',
          startsWith: '7',
          country: 'Russia',
        },
        {
          mask: '0 (000) 000-00-00',
          startsWith: '8',
          country: 'Russia',
        },
        {
          mask: '+7 (000) 000-00-00',
          startsWith: '',
          country: 'unknown',
        },
      ],
      dispatch: function(appended, dynamicMasked) {
        var number = (dynamicMasked.value + appended).replace(/\D/g, '');
        return dynamicMasked.compiledMasks.find(function(m) {
          return number.indexOf(m.startsWith) === 0;
        });
      },
    });
    $(this).blur(function() {
      var maskValue = mask.unmaskedValue;
      var startWith = 10;
      if (maskValue.charAt(0) === '8') {
        startWith = 11;
      }
      if (maskValue.length < startWith) {
        mask.value = '';
      }
    });
  });
}

$(function() {
  objectFitImages();
  initPhoneMask();
});

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
