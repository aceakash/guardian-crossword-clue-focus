// ==UserScript==
// @name         Guardian Crossword Focus
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Only show the current clue in Guardian crosswords
// @author       Akash
// @match        https://www.theguardian.com/crosswords/quick/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.4.1.slim.min.js
// ==/UserScript==

(function() {
    'use strict';

    let interval = setInterval(function () {
        if (isReady()) {
           clearInterval(interval);
           init()
           return
        }
    }, 100)

    function isReady() {
        const el = document.querySelector('.crossword__clue__text')
        return el != null && el.textContent != null && el.textContent.length != null && el.textContent.length > 0
    }

    function init() {
        document.addEventListener('keyup', () => {
            doStuff()
        })

        document.addEventListener('click', () => {
            doStuff()
        })

        document.querySelector('.crossword__clue').click()
    }


    function doStuff() {
        console.log('doStuff')
        document.querySelectorAll('.crossword__clue:not(.crossword__clue--selected)').forEach(el => {
            el.style = 'display:none'
        })

        document.querySelector('.crossword__clue--selected').style = 'display:block'
    }
})();
