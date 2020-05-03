// ==UserScript==
// @name         Lessen Clutter
// @version      1.1
// @homepage     https://github.com/Cybo1927/Userscripts/
// @description  Remove common tracking <script> tags that contain ads/trackers. This makes it a little easier to look through scripts on a page that might be trackers (less clutter)
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
	
const gsynd = document.querySelectorAll('script[src*="googlesyndication.com"]');
gsynd.forEach(item => item.remove());

const ganalytics = document.querySelectorAll('script[src*="google-analytics.com"]');
ganalytics.forEach(item => item.remove());
  
const dblclick = document.querySelectorAll('script[src*="doubleclick.net"]');
dblclick.forEach(item => item.remove());
	
const outbrain = document.querySelectorAll('script[src*="outbrain.com"]');
outbrain.forEach(item => item.remove());
	
const trcklks = document.querySelectorAll('script[src*="trcklks.com"]');
trcklks.forEach(item => item.remove());
	
const advertising = document.querySelectorAll('script[src*="advertising.com"]');
advertising.forEach(item => item.remove());
	
const carbonads = document.querySelectorAll('script[src*="carbonads.com"]');
carbonads.forEach(item => item.remove());
	
const buysellads = document.querySelectorAll('script[src*="buysellads.com"]');
buysellads.forEach(item => item.remove());
  
const aboutblank = document.querySelectorAll('iframe[src*="about:blank"]');
aboutblank.forEach(item => item.remove());

}

// AdGuard script syntax looks like
// com,net#%#document.addEventListener('DOMContentLoaded', function(){link();}); link(); function link(){const ganalytics = document.querySelectorAll('script[src*="google-analytics.com"]'); ganalytics.forEach(item => item.remove());}
