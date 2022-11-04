'use strict'
import {animation} from "./optionsObjects.js";


document.addEventListener('DOMContentLoaded', onReady)

function onReady(){
    (() => {
        window.onload = () => {
            setTimeout(() => {
                requestAnimationFrame(animation.draw);
            }, 1000 / 60);
        }
    })()
}

