// ==UserScript==
// @name         Tracking Attribute Remover
// @version      1.1
// @homepage     https://github.com/Cybo1927/Userscripts/
// @description  Block tracking attributes on links - this is how companies like Google track you via their analytics service even if you use a content/ad blocker to block the server
// @author       Cybo1927
// @run-at       document-start
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

const e = document.querySelectorAll('a[data-beacon-url]');
e.forEach(item => item.removeAttribute('data-beacon-url'));

const f = document.querySelectorAll('a[data-google-query-id]');
f.forEach(item => item.removeAttribute('data-google-query-id'));

const g = document.querySelectorAll('a[data-obtrack]');
g.forEach(item => item.removeAttribute('[data-obtrack]'));

const h = document.querySelectorAll('a[data-oburl]');
h.forEach(item => item.removeAttribute('[data-oburl]'));
    
const i = document.querySelectorAll('link[rel*="preconnect"]');
i.forEach(item => item.removeAttribute('[data-oburl]'));
    
const j = document.querySelectorAll('link[rel*="dns-prefetch"]');
j.forEach(item => item.removeAttribute('[data-oburl]'));

}
