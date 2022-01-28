/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/class.ts":
/*!**********************!*\
  !*** ./src/class.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface */ "./src/interface.ts");

class Player {
    constructor(name, age, country = _interface__WEBPACK_IMPORTED_MODULE_0__.cName.BD) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    getCountry() {
        return this.country;
    }
    call() {
        console.log(`${this.name} is a  ${this.age} Years Old From ${this.country} National Cricket Team `);
    }
}


/***/ }),

/***/ "./src/interface.ts":
/*!**************************!*\
  !*** ./src/interface.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cName": () => (/* binding */ cName)
/* harmony export */ });
// enum
var cName;
(function (cName) {
    cName["BD"] = "Bangladesh";
})(cName || (cName = {}));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class */ "./src/class.ts");

let PlayerOne = new _class__WEBPACK_IMPORTED_MODULE_0__.Player('Sakib', 25);
const PlayerTwo = new _class__WEBPACK_IMPORTED_MODULE_0__.Player('Tamim', 28);
PlayerOne.call();
PlayerTwo.call();
// counter-up plugin made in Typescript
let counterUp;
// recursive way
counterUp = (options) => {
    try {
        if (typeof options.c == 'string') {
            options.c = document.getElementsByClassName(options.c);
        }
        for (let v of options.c) {
            let n = parseInt(v.innerHTML);
            let i = 0;
            function cal() {
                if (i <= n) {
                    setTimeout(() => {
                        v.innerHTML = i.toString();
                        i++;
                        return cal();
                    }, options.t);
                }
            }
            cal();
        }
    }
    catch (e) {
        console.log(new Error('Error in counter Function'));
    }
};
let ps = document.getElementsByClassName('ho');
counterUp({ c: 'h1', t: 1000 });
counterUp({ c: ps, t: 500 });
let btn = document.getElementById('btn');
// recursive way
function increment() {
    function getRandomColor() {
        const hexLetters = 'abcdef1234567890';
        let hex = '#';
        for (let i = 1; i <= 6; i++) {
            hex += hexLetters[Math.floor(Math.random() * hexLetters.length)];
        }
        return hex;
    }
    let box = document.getElementById('box_c');
    let width = box.style.width.split('%');
    if (parseInt(width[0]) < 100) {
        setTimeout(() => {
            box.style.width = String(parseInt(width[0]) + 5) + '%';
            box.innerHTML = String(parseInt(width[0]) + 5) + '%';
            box.style.background = getRandomColor();
            return increment();
        }, 300);
    }
    else {
        let reset = document.createElement('button');
        reset.style.cssText = `
         padding: 10px 15px;
         margin-left: 10px;
         outline: none;
         border-radius: 5px;
         border:none;
         cursor: pointer;
         border: 1px solid darkred;
         color: red;
         `;
        reset.innerText = "Reset";
        btn.after(reset);
        reset.addEventListener('click', () => {
            box.style.width = '5%';
            box.innerHTML = '5%';
            btn.removeAttribute('disabled');
            reset.remove();
        });
    }
}
btn.addEventListener('click', function (e) {
    e.preventDefault();
    increment();
    btn.setAttribute('disabled', 'true');
});
console.log(window.location.origin);
let obj = {
    1: "f",
    2: "c",
    5: "d",
    3: "a",
    7: "l",
};
// objet value iterate //
function objectValue(v, t) {
    let val = Object.entries(v);
    let len = val.length;
    if (len > 0) {
        setTimeout(() => {
            console.log(val[0][1]);
            val = val.slice(1);
            v = Object.fromEntries(val);
            return objectValue(v, t);
        }, t);
    }
}
objectValue(obj, 1000);
// object index iterate //
function objectIndex(v, t) {
    let val = Object.entries(v);
    let len = val.length;
    if (len > 0) {
        setTimeout(() => {
            console.log(val[0][0]);
            val = val.slice(1);
            v = Object.fromEntries(val);
            return objectIndex(v, t);
        }, t);
    }
}
objectIndex(obj, 1000);
let arr = [2, 3, 4, 9];
let obj2 = {};
let str = "bangladesh";
function isIterable(v) {
    if (v[Symbol.iterator]) {
        console.log(`congratulation You are iterable`);
    }
    else {
        console.log(`Sorry You are  Not iterable`);
    }
}
isIterable(arr);
isIterable(obj2);
isIterable(str);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGlDQUFpQyxDQUFDO0tBQ2pEO1NBQ0c7UUFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDO0tBQzdDO0FBQ0wsQ0FBQztBQUVELFVBQVUsQ0FBQyxHQUFHLENBQUM7QUFDZixVQUFVLENBQUMsSUFBSSxDQUFDO0FBQ2hCLFVBQVUsQ0FBQyxHQUFHLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVyZmFjZS50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjTmFtZSwgUGVyc29ufSBmcm9tIFwiLi9pbnRlcmZhY2VcIjtcclxuXHJcblxyXG5leHBvcnQgICBjbGFzcyBQbGF5ZXIgaW1wbGVtZW50cyBQZXJzb248bnVtYmVyPntcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIGFnZTogbnVtYmVyLCBwcml2YXRlIHJlYWRvbmx5IGNvdW50cnk6Y05hbWUgPSBjTmFtZS5CRCkge1xyXG5cclxuICAgIH1cclxuICAgIGdldENvdW50cnkoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb3VudHJ5IDtcclxuXHJcbn1cclxuXHJcbiAgcHVibGljIGNhbGwoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLm5hbWV9IGlzIGEgICR7dGhpcy5hZ2V9IFllYXJzIE9sZCBGcm9tICR7dGhpcy5jb3VudHJ5fSBOYXRpb25hbCBDcmlja2V0IFRlYW0gYClcclxuIH1cclxuXHJcblxyXG59XHJcblxyXG4iLCIgZXhwb3J0IGludGVyZmFjZSBJbWFnZU9wdGlvbiB7XHJcbiAgICB3ZWlnaHQ6c3RyaW5nLFxyXG4gICAgaGVpZ2h0OnN0cmluZyxcclxuICAgIHNyYzpzdHJpbmcsXHJcbiAgICBhbHQ6c3RyaW5nXHJcbn1cclxuLy8gaW50ZXJmYWNlIHdpdGggR2VuZXJpY3NcclxuZXhwb3J0IGludGVyZmFjZSBQZXJzb248VCBleHRlbmRzIG51bWJlcj4ge1xyXG4gICAgbmFtZTogc3RyaW5nXHJcbiAgICBhZ2U6IFRcclxuICAgIGNhbGwoKTogdm9pZFxyXG4gICAgZ2V0Q291bnRyeSgpOiBzdHJpbmdcclxufVxyXG4vLyBlbnVtXHJcbiBleHBvcnQgZW51bSBjTmFtZSB7XHJcbiAgICBCRCA9IFwiQmFuZ2xhZGVzaFwiXHJcbn1cclxuIHR5cGUgQ291bnRlclVwPShzdHJpbmcgfCBIVE1MQ29sbGVjdGlvbilcclxuIGV4cG9ydCBpbnRlcmZhY2UgQ291bnRlclVwT3B0aW9uc3tcclxuICAgIGM6Q291bnRlclVwLFxyXG4gICAgdDpudW1iZXJcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtQbGF5ZXJ9IGZyb20gXCIuL2NsYXNzXCI7XHJcblxyXG5pbXBvcnQge0NvdW50ZXJVcE9wdGlvbnN9IGZyb20gXCIuL2ludGVyZmFjZVwiO1xyXG5cclxubGV0IFBsYXllck9uZSA9IG5ldyBQbGF5ZXIoJ1Nha2liJywgMjUpXHJcblxyXG5jb25zdCBQbGF5ZXJUd28gPSBuZXcgUGxheWVyKCdUYW1pbScsIDI4KVxyXG5cclxuUGxheWVyT25lLmNhbGwoKVxyXG5QbGF5ZXJUd28uY2FsbCgpXHJcblxyXG5cclxuLy8gY291bnRlci11cCBwbHVnaW4gbWFkZSBpbiBUeXBlc2NyaXB0XHJcbmxldCBjb3VudGVyVXA6IEZ1bmN0aW9uXHJcbi8vIHJlY3Vyc2l2ZSB3YXlcclxuY291bnRlclVwID0gKG9wdGlvbnM6Q291bnRlclVwT3B0aW9ucykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuYyA9PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICBvcHRpb25zLmMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKG9wdGlvbnMuYylcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgdiBvZiBvcHRpb25zLmMpIHtcclxuICAgICAgICAgICAgbGV0IG4gPSBwYXJzZUludCh2LmlubmVySFRNTClcclxuICAgICAgICAgICAgbGV0IGkgPSAwXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNhbCgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpIDw9IG4pIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi5pbm5lckhUTUwgPSBpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgaSsrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWwoKVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIG9wdGlvbnMudClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYWwoKVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5ldyBFcnJvcignRXJyb3IgaW4gY291bnRlciBGdW5jdGlvbicpKVxyXG4gICAgfVxyXG59XHJcbmxldCBwcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hvJylcclxuXHJcbmNvdW50ZXJVcCh7YzonaDEnLHQ6MTAwMH0pXHJcbmNvdW50ZXJVcCh7Yzpwcyx0OjUwMH0pXHJcblxyXG5cclxuXHJcbmxldCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuJylcclxuXHJcblxyXG4gLy8gcmVjdXJzaXZlIHdheVxyXG4gZnVuY3Rpb24gaW5jcmVtZW50KCkge1xyXG4gICAgIGZ1bmN0aW9uIGdldFJhbmRvbUNvbG9yKCkge1xyXG4gICAgICAgICBjb25zdCBoZXhMZXR0ZXJzID0gJ2FiY2RlZjEyMzQ1Njc4OTAnO1xyXG4gICAgICAgICBsZXQgaGV4ID0gJyMnO1xyXG4gICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA2OyBpKyspIHtcclxuICAgICAgICAgICAgIGhleCArPSBoZXhMZXR0ZXJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGhleExldHRlcnMubGVuZ3RoKV07XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgcmV0dXJuIGhleDtcclxuICAgICB9XHJcbiAgICAgbGV0IGJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3hfYycpXHJcbiAgICAgbGV0IHdpZHRoPSBib3guc3R5bGUud2lkdGguc3BsaXQoJyUnKVxyXG4gICAgIGlmIChwYXJzZUludCh3aWR0aFswXSk8MTAwKXtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xyXG4gICAgICAgICAgICBib3guc3R5bGUud2lkdGggPSBTdHJpbmcocGFyc2VJbnQod2lkdGhbMF0pKzUpKyclJ1xyXG4gICAgICAgICAgICBib3guaW5uZXJIVE1MPSBTdHJpbmcocGFyc2VJbnQod2lkdGhbMF0pKzUpKyclJ1xyXG4gICAgICAgICAgICBib3guc3R5bGUuYmFja2dyb3VuZCA9IGdldFJhbmRvbUNvbG9yKClcclxuICAgICAgICAgICAgcmV0dXJuIGluY3JlbWVudCgpXHJcbiAgICAgICAgfSwzMDApXHJcbiAgICAgfWVsc2V7XHJcbiAgICAgICAgIGxldCByZXNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgIHJlc2V0LnN0eWxlLmNzc1RleHQgPSBgXHJcbiAgICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZGFya3JlZDtcclxuICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgYFxyXG4gICAgICAgICByZXNldC5pbm5lclRleHQgPSBcIlJlc2V0XCJcclxuICAgICAgICAgYnRuLmFmdGVyKHJlc2V0KVxyXG4gICAgICAgICByZXNldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgICAgICAgIGJveC5zdHlsZS53aWR0aCA9ICc1JSdcclxuICAgICAgICAgICAgIGJveC5pbm5lckhUTUwgPSAnNSUnXHJcbiAgICAgICAgICAgICBidG4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcsKVxyXG4gICAgICAgICAgICAgcmVzZXQucmVtb3ZlKClcclxuXHJcbiAgICAgICAgIH0pXHJcblxyXG4gICAgIH1cclxuXHJcblxyXG4gfVxyXG5cclxuXHJcbmJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGluY3JlbWVudCgpXHJcbiAgICBidG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICd0cnVlJylcclxufSlcclxuY29uc29sZS5sb2cod2luZG93LmxvY2F0aW9uLm9yaWdpbilcclxuIGxldCBvYmogPSB7XHJcbiAgICAxOlwiZlwiLFxyXG4gICAgMjpcImNcIixcclxuICAgIDU6XCJkXCIsXHJcbiAgICAzOlwiYVwiLFxyXG4gICAgNzpcImxcIixcclxuIH1cclxuXHJcblxyXG5cclxuLy8gb2JqZXQgdmFsdWUgaXRlcmF0ZSAvL1xyXG5cclxuZnVuY3Rpb24gb2JqZWN0VmFsdWUodjpvYmplY3QsdD86bnVtYmVyKSB7XHJcbiAgICBsZXQgdmFsID0gT2JqZWN0LmVudHJpZXModilcclxuICAgIGxldCBsZW4gPSB2YWwubGVuZ3RoXHJcbiAgICBpZiAobGVuID4wKXtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codmFsWzBdWzFdKVxyXG4gICAgICAgICAgICAgIHZhbCA9IHZhbC5zbGljZSgxKVxyXG4gICAgICAgICAgICB2ID0gT2JqZWN0LmZyb21FbnRyaWVzKHZhbClcclxuICAgICAgICAgICAgcmV0dXJuIG9iamVjdFZhbHVlKHYsdClcclxuICAgICAgICB9LHQpXHJcbiAgICB9XHJcblxyXG59XHJcbm9iamVjdFZhbHVlKG9iaiwxMDAwKVxyXG4gLy8gb2JqZWN0IGluZGV4IGl0ZXJhdGUgLy9cclxuZnVuY3Rpb24gb2JqZWN0SW5kZXgodjpvYmplY3QsdD86bnVtYmVyKSB7XHJcbiAgICBsZXQgdmFsID0gT2JqZWN0LmVudHJpZXModilcclxuICAgIGxldCBsZW4gPSB2YWwubGVuZ3RoXHJcbiAgICBpZiAobGVuID4wKXtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codmFsWzBdWzBdKVxyXG4gICAgICAgICAgICB2YWwgPSB2YWwuc2xpY2UoMSlcclxuICAgICAgICAgICAgdiA9IE9iamVjdC5mcm9tRW50cmllcyh2YWwpXHJcbiAgICAgICAgICAgIHJldHVybiBvYmplY3RJbmRleCh2LHQpXHJcbiAgICAgICAgfSx0KVxyXG4gICAgfVxyXG5cclxufVxyXG5vYmplY3RJbmRleChvYmosMTAwMClcclxuXHJcblxyXG4gbGV0IGFycjogbnVtYmVyW10gPSBbMiwzLDQsOV1cclxuIGxldCBvYmoyID0ge31cclxubGV0IHN0ciA9IFwiYmFuZ2xhZGVzaFwiXHJcblxyXG5mdW5jdGlvbiBpc0l0ZXJhYmxlKHY6YW55KSB7XHJcbiAgICBpZiAodltTeW1ib2wuaXRlcmF0b3JdKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhgY29uZ3JhdHVsYXRpb24gWW91IGFyZSBpdGVyYWJsZWApXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBTb3JyeSBZb3UgYXJlICBOb3QgaXRlcmFibGVgKVxyXG4gICAgfVxyXG59XHJcblxyXG5pc0l0ZXJhYmxlKGFycilcclxuaXNJdGVyYWJsZShvYmoyKVxyXG5pc0l0ZXJhYmxlKHN0cilcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9