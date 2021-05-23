const lines = ['Reggel, amint fölkelek', 'o bella ciao bella ciao bella ciao ciao ciao', 'reggel amint felkelek', 'a rizsföldekre kell mennem.', 'És a rovarok és a szúnyogok között', 'o bella ciao bella ciao bella ciao ciao ciao', 'rovarok és a szúnyogok között', 'kemény munka vár rám.', 'A kápó ott áll a botjával', 'o bella ciao bella ciao bella ciao ciao ciao', ' a kápó ott áll a botjával', 'és a munkába görnyeszt minket.', 'Ó anyám, micsoda kín!', 'o bella ciao bella ciao bella ciao ciao ciao', ' ó anyám, micsoda kín', 'minden nap téged hívlak.', 'És minden órával amit itt töltünk', 'o bella ciao bella ciao bella ciao ciao ciao', ' és minden órával amit itt töltünk', 'a fiatalságunkat vesztegetjük el.', 'De eljön a nap, amikor mindannyian', 'o bella ciao bella ciao bella ciao ciao ciao', ' de eljön a nap, amikor mindannyian', 'szabadságban dolgozunk.']
const linesBoolean = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
let allLines = Array();
const container = document.querySelector("#text");

import {inputClick} from "/js/modules.js"

import {makeAllObject} from "/js/modules.js"
makeAllObject(lines,linesBoolean,allLines);


import {loadText} from "/js/modules.js"
loadText(allLines,container);

import {countAverage} from "/js/modules.js"

countAverage(linesBoolean);
import {restart} from "/js/modules.js"

document.querySelector("#restart-button").addEventListener('click', ()=>{restart(container,linesBoolean,allLines,lines)})

import {addEventForInput} from "/js/modules.js"
addEventForInput(allLines,linesBoolean)