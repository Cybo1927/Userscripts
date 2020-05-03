// ==UserScript==
// @name         Lessen Clutter
// @version      1.0
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
  
const aboutblank = document.querySelectorAll('iframe[src*="about:blank"]');
aboutblank.forEach(item => item.remove());

}
