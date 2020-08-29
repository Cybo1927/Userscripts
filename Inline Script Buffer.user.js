// ==UserScript==
// @name         Inline Script Buffer
// @version      1.1
// @homepage     https://github.com/Cybo1927/Userscripts/
// @description  Let inline scripts load but then remove them to prevent them from making changes to the site after they've loaded. A lot of adult sites seem to use these inline scripts to make it so when you click anywhere an ad pops up
// @author       Cybo1927
// @run-at       document-idle
// @include      *://*porn*.*/*
// @include      *://*.*/*porn*
// @include      *://*hentai*.*/*
// @include      *://*.*/*hentai*
// @include      *://*sex*.*/*
// @include      *://*.*/*sex*
// @include      *://*xxx*.*/*
// @include      *://*xvideo*.*/*
// @include      *://*.xxx/*
// @include      *://*.adult/*
// @grant        none
// ==/UserScript==

document.addEventListener('DOMContentLoaded', function(){
    link();
});

link();

function link(){
  
const script = document.querySelectorAll('script');
script.forEach(item => item.remove());
  
const noscript = document.querySelectorAll('noscript');
noscript.forEach(item => item.remove());
  
}
