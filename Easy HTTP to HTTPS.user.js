// ==UserScript==
// @name         Easy HTTP to HTTPS
// @version      1.4
// @homepage     https://github.com/Cybo1927/Userscripts/blob/master/Easy%20HTTP%20to%20HTTPS.user.js
// @description  Redirect HTTP to HTTPS
// @author       Cybo1927
// @run-at       document-start
// @include      *://*/*
// @exclude      http://127.0.0.1/*
// @exclude      http://192.168.*/*
// @grant        none
// ==/UserScript==

if (location.protocol !== 'https:') {
window.location.protocol = 'https:';
}
