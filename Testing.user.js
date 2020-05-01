// ==UserScript==
// @name         Testing
// @version      1.0
// @homepage     https://github.com/Cybo1927/Userscripts/
// @description  
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
	
const a = document.querySelectorAll('script[src*="googlesyndication.com"]');
a.forEach(item => item.removeAttribute('src'));



}
