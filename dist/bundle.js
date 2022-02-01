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

const PlayerOne = new _class__WEBPACK_IMPORTED_MODULE_0__.Player('Sakib', 25);
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
function getRandomColor() {
    const hexLetters = 'abcdef1234567890';
    let hex = '#';
    for (let i = 1; i <= 6; i++) {
        hex += hexLetters[Math.floor(Math.random() * hexLetters.length)];
    }
    return hex;
}
// recursive way
function increment() {
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
    'a': "f",
    'b': "c",
    'c': "d",
    'd': "a",
    'e': "l",
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
// objectValue(obj, 1000)
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
// objectIndex(obj,1000)
const text = `Hello World`;
let textArray = text.split('');
console.log(typeof textArray);
for (let [v, i] of text) {
    const p = document.createElement('p');
    p.setAttribute('id', v + Math.floor(Math.random() * 1000).toString());
    p.innerHTML = v;
    p.style.cssText = `background-color:${getRandomColor()};
    color:${getRandomColor()}
    `;
    btn.before(p);
}
const review = [5, 5, 5, 5, 5, 5, 5, 4, 3, 2, 5, 6, 5];
let sum = review.reduce(function (acc, curr, index) {
    acc += curr;
    return acc;
});
console.log(sum);
let avg = review.reduce(function (acc, curr) {
    acc += curr / review.length;
    return acc;
}, 0);
console.log(avg);
let names = [
    "java",
    "javascript",
    "java",
    "php",
    "php",
    "php"
];
const acc = {};
const setArray = [];
let rate = names.reduce(function (acc, curr) {
    acc[curr] ? acc[curr]++ : acc[curr] = 1;
    return acc;
}, acc);
console.log(rate);
let set = names.reduce(function (acc, curr) {
    if (acc.includes(curr)) {
        acc.push(curr + Math.floor(Math.random() * 100).toString());
    }
    else {
        acc.push(curr);
    }
    return acc;
}, setArray);
console.log(set); /// set unique
// make object

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sQ0FBQyxVQUFVLEdBQUcsRUFBQyxJQUFJO0lBRXRDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxJQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNuQyxPQUFPLEdBQUc7QUFDYixDQUFDLEVBQUMsR0FBRyxDQUFDO0FBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7QUFFakIsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsRUFBQyxJQUFJO0lBQ3JDLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBQztRQUNuQixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUMxRDtTQUFLO1FBQ0YsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7S0FDakI7SUFDRCxPQUFPLEdBQUc7QUFDZCxDQUFDLEVBQUMsUUFBUSxDQUFDO0FBRVgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBQyxjQUFjO0FBQy9CLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVyZmFjZS50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjTmFtZSwgUGVyc29ufSBmcm9tIFwiLi9pbnRlcmZhY2VcIjtcclxuXHJcblxyXG5leHBvcnQgICBjbGFzcyBQbGF5ZXIgaW1wbGVtZW50cyBQZXJzb248bnVtYmVyPntcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIGFnZTogbnVtYmVyLCBwcml2YXRlIHJlYWRvbmx5IGNvdW50cnk6Y05hbWUgPSBjTmFtZS5CRCkge1xyXG5cclxuICAgIH1cclxuICAgIGdldENvdW50cnkoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb3VudHJ5IDtcclxuXHJcbn1cclxuXHJcbiAgcHVibGljIGNhbGwoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLm5hbWV9IGlzIGEgICR7dGhpcy5hZ2V9IFllYXJzIE9sZCBGcm9tICR7dGhpcy5jb3VudHJ5fSBOYXRpb25hbCBDcmlja2V0IFRlYW0gYClcclxuIH1cclxuXHJcblxyXG59XHJcblxyXG4iLCJleHBvcnQgaW50ZXJmYWNlIEltYWdlT3B0aW9uIHtcclxuICAgIHdlaWdodDogc3RyaW5nLFxyXG4gICAgaGVpZ2h0OiBzdHJpbmcsXHJcbiAgICBzcmM6IHN0cmluZyxcclxuICAgIGFsdDogc3RyaW5nXHJcbn1cclxuXHJcbi8vIGludGVyZmFjZSB3aXRoIEdlbmVyaWNzXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGVyc29uPFQgZXh0ZW5kcyBudW1iZXI+IHtcclxuICAgIG5hbWU6IHN0cmluZ1xyXG4gICAgYWdlOiBUXHJcblxyXG4gICAgY2FsbCgpOiB2b2lkXHJcblxyXG4gICAgZ2V0Q291bnRyeSgpOiBzdHJpbmdcclxufVxyXG5cclxuLy8gZW51bVxyXG5leHBvcnQgZW51bSBjTmFtZSB7XHJcbiAgICBCRCA9IFwiQmFuZ2xhZGVzaFwiXHJcbn1cclxuXHJcbnR5cGUgQ291bnRlclVwID0gKHN0cmluZyB8IEhUTUxDb2xsZWN0aW9uKVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb3VudGVyVXBPcHRpb25zIHtcclxuICAgIGM6IENvdW50ZXJVcCxcclxuICAgIHQ6IG51bWJlclxyXG59XHJcblxyXG50eXBlIE51bWJlciA9ICggbnVtYmVyIHwgYmlnaW50KVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBvYmplY3RBY2N1bXVsYXRpb24ge1xyXG4gICAgW2N1cnI6IHN0cmluZ106IE51bWJlciA7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgYXJyYXlBY2N1bXVsYXRpb24gZXh0ZW5kcyBBcnJheTxzdHJpbmc+IHtcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtQbGF5ZXJ9IGZyb20gXCIuL2NsYXNzXCI7XHJcblxyXG5pbXBvcnQge2FycmF5QWNjdW11bGF0aW9uLCBDb3VudGVyVXBPcHRpb25zLCBvYmplY3RBY2N1bXVsYXRpb259IGZyb20gXCIuL2ludGVyZmFjZVwiO1xyXG5cclxuY29uc3QgUGxheWVyT25lID0gbmV3IFBsYXllcignU2FraWInLCAyNSlcclxuXHJcbmNvbnN0IFBsYXllclR3byA9IG5ldyBQbGF5ZXIoJ1RhbWltJywgMjgpXHJcblxyXG5QbGF5ZXJPbmUuY2FsbCgpXHJcblBsYXllclR3by5jYWxsKClcclxuXHJcblxyXG4vLyBjb3VudGVyLXVwIHBsdWdpbiBtYWRlIGluIFR5cGVzY3JpcHRcclxubGV0IGNvdW50ZXJVcDogRnVuY3Rpb25cclxuLy8gcmVjdXJzaXZlIHdheVxyXG5jb3VudGVyVXAgPSAob3B0aW9uczogQ291bnRlclVwT3B0aW9ucykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuYyA9PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICBvcHRpb25zLmMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKG9wdGlvbnMuYylcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgdiBvZiBvcHRpb25zLmMpIHtcclxuICAgICAgICAgICAgbGV0IG4gPSBwYXJzZUludCh2LmlubmVySFRNTClcclxuICAgICAgICAgICAgbGV0IGkgPSAwXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBjYWwoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA8PSBuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYuaW5uZXJIVE1MID0gaS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGkrK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsKClcclxuICAgICAgICAgICAgICAgICAgICB9LCBvcHRpb25zLnQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhbCgpXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cobmV3IEVycm9yKCdFcnJvciBpbiBjb3VudGVyIEZ1bmN0aW9uJykpXHJcbiAgICB9XHJcbn1cclxubGV0IHBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaG8nKVxyXG5cclxuY291bnRlclVwKHtjOiAnaDEnLCB0OiAxMDAwfSlcclxuY291bnRlclVwKHtjOiBwcywgdDogNTAwfSlcclxuXHJcblxyXG5cclxubGV0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4nKVxyXG5cclxuZnVuY3Rpb24gZ2V0UmFuZG9tQ29sb3IoKSB7XHJcbiAgICBjb25zdCBoZXhMZXR0ZXJzID0gJ2FiY2RlZjEyMzQ1Njc4OTAnO1xyXG4gICAgbGV0IGhleCA9ICcjJztcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDY7IGkrKykge1xyXG4gICAgICAgIGhleCArPSBoZXhMZXR0ZXJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGhleExldHRlcnMubGVuZ3RoKV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaGV4O1xyXG59XHJcbi8vIHJlY3Vyc2l2ZSB3YXlcclxuZnVuY3Rpb24gaW5jcmVtZW50KCkge1xyXG5cclxuXHJcbiAgICBsZXQgYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JveF9jJylcclxuICAgIGxldCB3aWR0aCA9IGJveC5zdHlsZS53aWR0aC5zcGxpdCgnJScpXHJcbiAgICBpZiAocGFyc2VJbnQod2lkdGhbMF0pIDwgMTAwKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGJveC5zdHlsZS53aWR0aCA9IFN0cmluZyhwYXJzZUludCh3aWR0aFswXSkgKyA1KSArICclJ1xyXG4gICAgICAgICAgICBib3guaW5uZXJIVE1MID0gU3RyaW5nKHBhcnNlSW50KHdpZHRoWzBdKSArIDUpICsgJyUnXHJcbiAgICAgICAgICAgIGJveC5zdHlsZS5iYWNrZ3JvdW5kID0gZ2V0UmFuZG9tQ29sb3IoKVxyXG4gICAgICAgICAgICByZXR1cm4gaW5jcmVtZW50KClcclxuICAgICAgICB9LCAzMDApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCByZXNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgcmVzZXQuc3R5bGUuY3NzVGV4dCA9IGBcclxuICAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICBib3JkZXI6bm9uZTtcclxuICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrcmVkO1xyXG4gICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICBgXHJcbiAgICAgICAgcmVzZXQuaW5uZXJUZXh0ID0gXCJSZXNldFwiXHJcbiAgICAgICAgYnRuLmFmdGVyKHJlc2V0KVxyXG4gICAgICAgIHJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBib3guc3R5bGUud2lkdGggPSAnNSUnXHJcbiAgICAgICAgICAgIGJveC5pbm5lckhUTUwgPSAnNSUnXHJcbiAgICAgICAgICAgIGJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJywpXHJcbiAgICAgICAgICAgIHJlc2V0LnJlbW92ZSgpXHJcblxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBpbmNyZW1lbnQoKVxyXG4gICAgYnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAndHJ1ZScpXHJcbn0pXHJcbmNvbnNvbGUubG9nKHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pXHJcbmxldCBvYmogPSB7XHJcbiAgICAnYSc6IFwiZlwiLFxyXG4gICAgJ2InOiBcImNcIixcclxuICAgICdjJzogXCJkXCIsXHJcbiAgICAnZCc6IFwiYVwiLFxyXG4gICAgJ2UnOiBcImxcIixcclxufVxyXG5cclxuXHJcbi8vIG9iamV0IHZhbHVlIGl0ZXJhdGUgLy9cclxuXHJcbmZ1bmN0aW9uIG9iamVjdFZhbHVlKHY6IG9iamVjdCwgdD86IG51bWJlcikge1xyXG4gICAgbGV0IHZhbCA9IE9iamVjdC5lbnRyaWVzKHYpXHJcbiAgICBsZXQgbGVuID0gdmFsLmxlbmd0aFxyXG4gICAgaWYgKGxlbiA+IDApIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codmFsWzBdWzFdKVxyXG4gICAgICAgICAgICB2YWwgPSB2YWwuc2xpY2UoMSlcclxuICAgICAgICAgICAgdiA9IE9iamVjdC5mcm9tRW50cmllcyh2YWwpXHJcbiAgICAgICAgICAgIHJldHVybiBvYmplY3RWYWx1ZSh2LCB0KVxyXG4gICAgICAgIH0sIHQpXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vLyBvYmplY3RWYWx1ZShvYmosIDEwMDApXHJcblxyXG4vLyBvYmplY3QgaW5kZXggaXRlcmF0ZSAvL1xyXG5mdW5jdGlvbiBvYmplY3RJbmRleCh2OiBvYmplY3QsIHQ/OiBudW1iZXIpIHtcclxuICAgIGxldCB2YWwgPSBPYmplY3QuZW50cmllcyh2KVxyXG4gICAgbGV0IGxlbiA9IHZhbC5sZW5ndGhcclxuXHJcbiAgICBpZiAobGVuID4gMCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2YWxbMF1bMF0pXHJcbiAgICAgICAgICAgIHZhbCA9IHZhbC5zbGljZSgxKVxyXG4gICAgICAgICAgICB2ID0gT2JqZWN0LmZyb21FbnRyaWVzKHZhbClcclxuICAgICAgICAgICAgcmV0dXJuIG9iamVjdEluZGV4KHYsIHQpXHJcbiAgICAgICAgfSwgdClcclxuICAgIH1cclxuXHJcbn1cclxuLy8gb2JqZWN0SW5kZXgob2JqLDEwMDApXHJcblxyXG5jb25zdCB0ZXh0OnN0cmluZyA9IGBIZWxsbyBXb3JsZGBcclxuIGxldCB0ZXh0QXJyYXkgOiBzdHJpbmdbXSA9IHRleHQuc3BsaXQoJycpXHJcblxyXG5cclxuXHJcbmNvbnNvbGUubG9nKCB0eXBlb2YgdGV4dEFycmF5KVxyXG5mb3IgKGxldCBbdixpXSBvZiB0ZXh0KXtcclxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIHAuc2V0QXR0cmlidXRlKCdpZCcsIHYrTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwMDApLnRvU3RyaW5nKCkpXHJcbiAgIHAuaW5uZXJIVE1MID0gdlxyXG4gICAgcC5zdHlsZS5jc3NUZXh0ID0gYGJhY2tncm91bmQtY29sb3I6JHtnZXRSYW5kb21Db2xvcigpfTtcclxuICAgIGNvbG9yOiR7Z2V0UmFuZG9tQ29sb3IoKX1cclxuICAgIGBcclxuICAgIGJ0bi5iZWZvcmUocClcclxuXHJcbn1cclxuIGNvbnN0IHJldmlldyA6bnVtYmVyW109IFs1LDUsNSw1LDUsNSw1LDQsMywyLDUsNiw1XVxyXG5cclxuXHJcblxyXG4gbGV0IHN1bSA9IHJldmlldy5yZWR1Y2UoZnVuY3Rpb24gKGFjYyxjdXJyLGluZGV4KSB7XHJcbiAgICAgYWNjICs9IGN1cnJcclxuICAgICByZXR1cm4gYWNjXHJcbiB9KVxyXG5jb25zb2xlLmxvZyhzdW0pXHJcbmxldCBhdmcgPSByZXZpZXcucmVkdWNlKGZ1bmN0aW9uIChhY2MsY3VyciwpIHtcclxuICAgICBhY2MrPWN1cnIvcmV2aWV3Lmxlbmd0aFxyXG4gICAgcmV0dXJuIGFjY1xyXG59LDApXHJcbmNvbnNvbGUubG9nKGF2ZylcclxuXHJcblxyXG5cclxubGV0IG5hbWVzOnN0cmluZ1tdID0gW1xyXG4gICAgXCJqYXZhXCIsXHJcbiAgICBcImphdmFzY3JpcHRcIixcclxuICAgIFwiamF2YVwiLFxyXG4gICAgXCJwaHBcIixcclxuICAgIFwicGhwXCIsXHJcbiAgICBcInBocFwiXHJcbl1cclxuY29uc3QgYWNjOiBvYmplY3RBY2N1bXVsYXRpb24gPSB7fTtcclxuY29uc3Qgc2V0QXJyYXk6YXJyYXlBY2N1bXVsYXRpb24gPSBbXVxyXG5cclxubGV0IHJhdGUgPSBuYW1lcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYyxjdXJyKSB7XHJcblxyXG4gICAgYWNjW2N1cnJdP2FjY1tjdXJyXSsrOmFjY1tjdXJyXSA9IDFcclxuICAgIHJldHVybiBhY2NcclxuIH0sYWNjKVxyXG5jb25zb2xlLmxvZyhyYXRlKVxyXG5cclxubGV0IHNldCA9IG5hbWVzLnJlZHVjZShmdW5jdGlvbiAoYWNjLGN1cnIpe1xyXG4gICAgaWYgKGFjYy5pbmNsdWRlcyhjdXJyKSl7XHJcbiAgICAgICAgYWNjLnB1c2goY3VycitNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTAwKS50b1N0cmluZygpKVxyXG4gICAgfWVsc2Uge1xyXG4gICAgICAgIGFjYy5wdXNoKGN1cnIpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gYWNjXHJcbn0sc2V0QXJyYXkpXHJcblxyXG5jb25zb2xlLmxvZyhzZXQpIC8vLyBzZXQgdW5pcXVlXHJcbi8vIG1ha2Ugb2JqZWN0XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=