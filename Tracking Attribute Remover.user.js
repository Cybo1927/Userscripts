// ==UserScript==
// @name         Tracking Attribute Remover
// @version      1.4
// @homepage     https://github.com/Cybo1927/Userscripts/
// @description  Block tracking attributes on links
// @author       Cybo1927
// @run-at       document_idle
// @include      http://*/*
// @include      https://*/*
// @grant        none
// ==/UserScript==

// Special thanks to erosman on Stack Overflow
// https://stackoverflow.com/questions/58613958

document.addEventListener('DOMContentLoaded', function(){
    link();
});

link();

function link(){

const a = document.querySelectorAll('a[onclick*="ga"]');
a.forEach(item => item.removeAttribute('onclick'));

const b = document.querySelectorAll('a[onclick*="_gaq.push"]');
b.forEach(item => item.removeAttribute('onclick'));

const c = document.querySelectorAll('a[onclick*="_gap"]');
c.forEach(item => item.removeAttribute('onclick'));

const d = document.querySelectorAll('link[rel*="pingback"]');
d.forEach(item => item.removeAttribute('rel'));
    
const e = document.querySelectorAll('link[rel*="preconnect"]');
e.forEach(item => item.removeAttribute('[rel*="preconnect"]'));
    
const f = document.querySelectorAll('link[rel*="dns-prefetch"]');
f.forEach(item => item.removeAttribute('[rel*="dns-prefetch"]'));

const g = document.querySelectorAll('a[data-beacon-url]');
g.forEach(item => item.removeAttribute('data-beacon-url'));

const h = document.querySelectorAll('a[data-google-query-id]');
h.forEach(item => item.removeAttribute('data-google-query-id'));

const i = document.querySelectorAll('a[data-obtrack]');
i.forEach(item => item.removeAttribute('[data-obtrack]'));

const j = document.querySelectorAll('a[data-oburl]');
j.forEach(item => item.removeAttribute('[data-oburl]'));
   

}
