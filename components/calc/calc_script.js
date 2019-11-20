"use strict"
function output() {
  let a = document.form.a.value,
   b = document.form.b.value,
   c = document.form.c.value,
   d = +a + +b + +c;
   var elem = document.getElementById('hide');
  alert(a + b + c);
  document.form.view.value = d;
  elem.style.display = 'none';
}
