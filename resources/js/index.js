"use strict";

var anchor = document.querySelector('a[href="#dest"]')
var target = document.getElementById('dest')
anchor.addEventListener('click', function (e) {
  if (window.scrollTo) {
    e.preventDefault()
    window.scrollTo({'behavior': 'smooth', 'top': target.offsetTop})
  }
})