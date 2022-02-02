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
    cName["IN"] = "Indian";
    cName["PK"] = "Pakistan";
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
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interface */ "./src/interface.ts");


const PlayerOne = new _class__WEBPACK_IMPORTED_MODULE_0__.Player('Sachin', 40, _interface__WEBPACK_IMPORTED_MODULE_1__.cName.IN);
const PlayerTwo = new _class__WEBPACK_IMPORTED_MODULE_0__.Player('Tamim', 28);
const PlayerThree = new _class__WEBPACK_IMPORTED_MODULE_0__.Player('Afradi', 40, _interface__WEBPACK_IMPORTED_MODULE_1__.cName.PK);
PlayerOne.call();
PlayerTwo.call();
PlayerThree.call();
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
        }, 100);
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
    if (val.length > 0) {
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
    if (val.length > 0) {
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
let textArray = Array.from(text);
let t = textArray.filter(v => v != text.charAt(5));
console.log(`result:`, t);
for (let [v, i] of text) {
    const p = document.createElement('p');
    p.setAttribute('id', v + Math.floor(Math.random() * 1000).toString());
    p.innerHTML = v;
    p.style.cssText = `background-color:${getRandomColor()};
    color:${getRandomColor()}
    `;
    btn.before(p);
}
const review = [5, 5, 5, 5, 5, 5, 5, 4, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 3, 2, 5, 5, 5];
const map = new Map(Object.entries(obj));
console.log(map);
let sum = review.reduce(function (acc, curr) {
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
let unique = names.reduce(function (acc, curr) {
    if (!acc.includes(curr)) {
        acc.push(curr);
    }
    return acc;
}, setArray);
console.log(unique);
// My Reduce Function //
const myReducer = (arr, callback, ac) => {
    let acc = ac;
    let start = 0;
    if (!acc) {
        acc = arr[0];
        start = 1;
    }
    for (let i = start; i < arr.length; i++) {
        acc = callback(acc, arr[i], i, arr);
    }
    return acc;
};
let p = myReducer(review, function (acc, curr) {
    return acc += curr;
});
console.log(p);
/*
 * @forEach
 */
function myForeach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}
let u = myReducer(names, function (acc, curr) {
    if (!acc.includes(curr)) {
        acc.push(curr);
    }
    return acc;
}, setArray);
console.log(u);
//  map
function myMap(arr, callback) {
    let a = [];
    for (let i = 0; i < arr.length; i++) {
        a.push(callback(arr[i], i, arr));
    }
    return a;
}
let o = myMap(names, function (v, i) {
    return new Map([["id", i], ["value", v]]);
});
console.dir(o);
let opj = new Map();
console.dir(opj);
// find average rating in 5 star
function findAverageRating(arr) {
    let sum = arr.reduce(function (acc, curr) {
        acc += curr;
        return acc;
    }, 0);
    return sum / arr.length;
}
// my array reduce function
function myReduce(arr, cb, ac) {
    let acc = ac;
    let start = 0;
    if (!acc) {
        acc = arr[0];
        start = 1;
    }
    for (let i = start; i < arr.length; i++) {
        acc = cb(acc, arr[i], i, arr);
    }
    return acc;
}
let r = findAverageRating(review);
console.log(r.toPrecision(2));
// create a function that takes a string and returns a string with the first letter of each word capitalized
function capitalize(str) {
    let arr = str.split(' ');
    let newArr = arr.map(function (v) {
        return v.charAt(0).toUpperCase() + v.slice(1);
    });
    return newArr.join(' ');
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RyxHQUFHLENBQUMsTUFBTTtBQUMzQixDQUFDO0FBR0QsMkJBQTJCO0FBQzNCLFNBQVMsUUFBUSxDQUFDLEdBQWEsRUFBRSxFQUFtRSxFQUFFLEVBQVc7SUFDN0csSUFBSSxHQUFHLEdBQUcsRUFBRTtJQUNaLElBQUksS0FBSyxHQUFHLENBQUM7SUFDYixJQUFJLENBQUMsR0FBRyxFQUFFO1FBQ04sR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDWixLQUFLLEdBQUcsQ0FBQztLQUNaO0lBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDckMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7S0FDaEM7SUFDRCxPQUFPLEdBQUc7QUFDZCxDQUFDO0FBRUQsSUFBSSxDQUFDLEdBQUcsaUJBQWlCLENBQUMsTUFBTSxDQUFDO0FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUU1Qiw0R0FBNEc7QUFDN0csU0FBUyxVQUFVLENBQUMsR0FBVztJQUMzQixJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN4QixJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQztRQUM1QixPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQyxDQUFDO0lBQ0YsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUMzQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzLnRzIiwid2VicGFjazovLy8uL3NyYy9pbnRlcmZhY2UudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y05hbWUsIFBlcnNvbn0gZnJvbSBcIi4vaW50ZXJmYWNlXCI7XHJcblxyXG5cclxuZXhwb3J0ICAgY2xhc3MgUGxheWVyIGltcGxlbWVudHMgUGVyc29uPG51bWJlcj57XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyBhZ2U6IG51bWJlciwgcHJpdmF0ZSByZWFkb25seSBjb3VudHJ5OmNOYW1lID0gY05hbWUuQkQpIHtcclxuXHJcbiAgICB9XHJcbiAgICBnZXRDb3VudHJ5KCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY291bnRyeSA7XHJcblxyXG59XHJcblxyXG4gIHB1YmxpYyBjYWxsKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5uYW1lfSBpcyBhICAke3RoaXMuYWdlfSBZZWFycyBPbGQgRnJvbSAke3RoaXMuY291bnRyeX0gTmF0aW9uYWwgQ3JpY2tldCBUZWFtIGApXHJcbiB9XHJcblxyXG5cclxufVxyXG5cclxuIiwiZXhwb3J0IGludGVyZmFjZSBJbWFnZU9wdGlvbiB7XHJcbiAgICB3ZWlnaHQ6IHN0cmluZyxcclxuICAgIGhlaWdodDogc3RyaW5nLFxyXG4gICAgc3JjOiBzdHJpbmcsXHJcbiAgICBhbHQ6IHN0cmluZ1xyXG59XHJcblxyXG4vLyBpbnRlcmZhY2Ugd2l0aCBHZW5lcmljc1xyXG5leHBvcnQgaW50ZXJmYWNlIFBlcnNvbjxUIGV4dGVuZHMgbnVtYmVyPiB7XHJcbiAgICBuYW1lOiBzdHJpbmdcclxuICAgIGFnZTogVFxyXG5cclxuICAgIGNhbGwoKTogdm9pZFxyXG5cclxuICAgIGdldENvdW50cnkoKTogc3RyaW5nXHJcbn1cclxuXHJcbi8vIGVudW1cclxuZXhwb3J0IGVudW0gY05hbWUge1xyXG4gICAgQkQgPSBcIkJhbmdsYWRlc2hcIixcclxuICAgIElOID0gXCJJbmRpYW5cIixcclxuICAgIFBLID0gXCJQYWtpc3RhblwiXHJcbn1cclxuXHJcbnR5cGUgQ291bnRlclVwID0gKHN0cmluZyB8IEhUTUxDb2xsZWN0aW9uKVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb3VudGVyVXBPcHRpb25zIHtcclxuICAgIGM6IENvdW50ZXJVcCxcclxuICAgIHQ6IG51bWJlclxyXG59XHJcblxyXG50eXBlIE51bWJlciA9ICggbnVtYmVyIHwgYmlnaW50KVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBvYmplY3RBY2N1bXVsYXRpb24ge1xyXG4gICAgW2N1cnI6IHN0cmluZ106IE51bWJlciA7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgYXJyYXlBY2N1bXVsYXRpb24gZXh0ZW5kcyBBcnJheTxzdHJpbmc+IHtcclxufVxyXG5cclxuIC8vY3JldGUgYSBmdW5jdGlvbiBpbnRlcmZhY2VcclxuZXhwb3J0IGludGVyZmFjZSBtYXBDYWxsQmFjayB7XHJcbiAgICAodjogYW55LCBpOiBudW1iZXIsYXJyOmFueVtdKTogYW55fVxyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1BsYXllcn0gZnJvbSBcIi4vY2xhc3NcIjtcclxuXHJcbmltcG9ydCB7YXJyYXlBY2N1bXVsYXRpb24sIGNOYW1lLCBDb3VudGVyVXBPcHRpb25zLCBtYXBDYWxsQmFjaywgb2JqZWN0QWNjdW11bGF0aW9ufSBmcm9tIFwiLi9pbnRlcmZhY2VcIjtcclxuXHJcbmNvbnN0IFBsYXllck9uZSA9IG5ldyBQbGF5ZXIoJ1NhY2hpbicsIDQwLCBjTmFtZS5JTilcclxuXHJcbmNvbnN0IFBsYXllclR3byA9IG5ldyBQbGF5ZXIoJ1RhbWltJywgMjgpXHJcbmNvbnN0IFBsYXllclRocmVlID0gbmV3IFBsYXllcignQWZyYWRpJywgNDAsIGNOYW1lLlBLKVxyXG5cclxuUGxheWVyT25lLmNhbGwoKVxyXG5QbGF5ZXJUd28uY2FsbCgpXHJcblBsYXllclRocmVlLmNhbGwoKVxyXG5cclxuXHJcbi8vIGNvdW50ZXItdXAgcGx1Z2luIG1hZGUgaW4gVHlwZXNjcmlwdFxyXG5sZXQgY291bnRlclVwOiBGdW5jdGlvblxyXG4vLyByZWN1cnNpdmUgd2F5XHJcbmNvdW50ZXJVcCA9IChvcHRpb25zOiBDb3VudGVyVXBPcHRpb25zKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5jID09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuYyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUob3B0aW9ucy5jKVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCB2IG9mIG9wdGlvbnMuYykge1xyXG4gICAgICAgICAgICBsZXQgbiA9IHBhcnNlSW50KHYuaW5uZXJIVE1MKVxyXG4gICAgICAgICAgICBsZXQgaSA9IDBcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNhbCgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpIDw9IG4pIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi5pbm5lckhUTUwgPSBpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgaSsrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWwoKVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIG9wdGlvbnMudClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FsKClcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhuZXcgRXJyb3IoJ0Vycm9yIGluIGNvdW50ZXIgRnVuY3Rpb24nKSlcclxuICAgIH1cclxufVxyXG5sZXQgcHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdobycpXHJcblxyXG5jb3VudGVyVXAoe2M6ICdoMScsIHQ6IDEwMDB9KVxyXG5jb3VudGVyVXAoe2M6IHBzLCB0OiA1MDB9KVxyXG5cclxuXHJcbmxldCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuJylcclxuXHJcbmZ1bmN0aW9uIGdldFJhbmRvbUNvbG9yKCk6c3RyaW5nIHtcclxuICAgIGNvbnN0IGhleExldHRlcnMgPSAnYWJjZGVmMTIzNDU2Nzg5MCc7XHJcbiAgICBsZXQgaGV4ID0gJyMnO1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNjsgaSsrKSB7XHJcbiAgICAgICAgaGV4ICs9IGhleExldHRlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaGV4TGV0dGVycy5sZW5ndGgpXTtcclxuICAgIH1cclxuICAgIHJldHVybiBoZXg7XHJcbn1cclxuXHJcbi8vIHJlY3Vyc2l2ZSB3YXlcclxuZnVuY3Rpb24gaW5jcmVtZW50KCkge1xyXG5cclxuXHJcbiAgICBsZXQgYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JveF9jJylcclxuICAgIGxldCB3aWR0aCA9IGJveC5zdHlsZS53aWR0aC5zcGxpdCgnJScpXHJcbiAgICBpZiAocGFyc2VJbnQod2lkdGhbMF0pIDwgMTAwKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGJveC5zdHlsZS53aWR0aCA9IFN0cmluZyhwYXJzZUludCh3aWR0aFswXSkgKyA1KSArICclJ1xyXG4gICAgICAgICAgICBib3guaW5uZXJIVE1MID0gU3RyaW5nKHBhcnNlSW50KHdpZHRoWzBdKSArIDUpICsgJyUnXHJcbiAgICAgICAgICAgIGJveC5zdHlsZS5iYWNrZ3JvdW5kID0gZ2V0UmFuZG9tQ29sb3IoKVxyXG4gICAgICAgICAgICByZXR1cm4gaW5jcmVtZW50KClcclxuICAgICAgICB9LCAxMDApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCByZXNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgcmVzZXQuc3R5bGUuY3NzVGV4dCA9IGBcclxuICAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICBib3JkZXI6bm9uZTtcclxuICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrcmVkO1xyXG4gICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICBgXHJcbiAgICAgICAgcmVzZXQuaW5uZXJUZXh0ID0gXCJSZXNldFwiXHJcbiAgICAgICAgYnRuLmFmdGVyKHJlc2V0KVxyXG4gICAgICAgIHJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBib3guc3R5bGUud2lkdGggPSAnNSUnXHJcbiAgICAgICAgICAgIGJveC5pbm5lckhUTUwgPSAnNSUnXHJcbiAgICAgICAgICAgIGJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJywpXHJcbiAgICAgICAgICAgIHJlc2V0LnJlbW92ZSgpXHJcblxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBpbmNyZW1lbnQoKVxyXG4gICAgYnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAndHJ1ZScpXHJcbn0pXHJcbmNvbnNvbGUubG9nKHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pXHJcbmxldCBvYmogPSB7XHJcbiAgICAnYSc6IFwiZlwiLFxyXG4gICAgJ2InOiBcImNcIixcclxuICAgICdjJzogXCJkXCIsXHJcbiAgICAnZCc6IFwiYVwiLFxyXG4gICAgJ2UnOiBcImxcIixcclxufVxyXG5cclxuXHJcbi8vIG9iamV0IHZhbHVlIGl0ZXJhdGUgLy9cclxuXHJcbmZ1bmN0aW9uIG9iamVjdFZhbHVlKHY6IG9iamVjdCwgdD86IG51bWJlcikge1xyXG4gICAgbGV0IHZhbCA9IE9iamVjdC5lbnRyaWVzKHYpXHJcbiAgICBpZiAodmFsLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codmFsWzBdWzFdKVxyXG4gICAgICAgICAgICB2YWwgPSB2YWwuc2xpY2UoMSlcclxuICAgICAgICAgICAgdiA9IE9iamVjdC5mcm9tRW50cmllcyh2YWwpXHJcbiAgICAgICAgICAgIHJldHVybiBvYmplY3RWYWx1ZSh2LCB0KVxyXG4gICAgICAgIH0sIHQpXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vLyBvYmplY3RWYWx1ZShvYmosIDEwMDApXHJcblxyXG4vLyBvYmplY3QgaW5kZXggaXRlcmF0ZSAvL1xyXG5mdW5jdGlvbiBvYmplY3RJbmRleCh2OiBvYmplY3QsIHQ/OiBudW1iZXIpIHtcclxuICAgIGxldCB2YWwgPSBPYmplY3QuZW50cmllcyh2KVxyXG4gICAgaWYgKHZhbC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbFswXVswXSlcclxuICAgICAgICAgICAgdmFsID0gdmFsLnNsaWNlKDEpXHJcbiAgICAgICAgICAgIHYgPSBPYmplY3QuZnJvbUVudHJpZXModmFsKVxyXG4gICAgICAgICAgICByZXR1cm4gb2JqZWN0SW5kZXgodiwgdClcclxuICAgICAgICB9LCB0KVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLy8gb2JqZWN0SW5kZXgob2JqLDEwMDApXHJcblxyXG5jb25zdCB0ZXh0OiBzdHJpbmcgPSBgSGVsbG8gV29ybGRgXHJcbmxldCB0ZXh0QXJyYXk6IHN0cmluZ1tdID0gQXJyYXkuZnJvbSh0ZXh0KVxyXG5cclxubGV0IHQgPSB0ZXh0QXJyYXkuZmlsdGVyKHYgPT4gdiAhPSB0ZXh0LmNoYXJBdCg1KSlcclxuXHJcbmNvbnNvbGUubG9nKGByZXN1bHQ6YCwgdClcclxuZm9yIChsZXQgW3YsIGldIG9mIHRleHQpIHtcclxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIHAuc2V0QXR0cmlidXRlKCdpZCcsIHYgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKS50b1N0cmluZygpKVxyXG4gICAgcC5pbm5lckhUTUwgPSB2XHJcbiAgICBwLnN0eWxlLmNzc1RleHQgPSBgYmFja2dyb3VuZC1jb2xvcjoke2dldFJhbmRvbUNvbG9yKCl9O1xyXG4gICAgY29sb3I6JHtnZXRSYW5kb21Db2xvcigpfVxyXG4gICAgYFxyXG4gICAgYnRuLmJlZm9yZShwKVxyXG5cclxufVxyXG5jb25zdCByZXZpZXc6IG51bWJlcltdID0gWzUsIDUsIDUsIDUsIDUsIDUsIDUsIDQsIDMsIDIsIDUsIDUsIDUsNSwgNSwgNSwgNSwgNSwgNSwgNSwgNCwgMywgMiwgNSwgNSwgNSw1LCA1LCA1LCA1LCA1LCA1LCA1LCA0LCAzLCAyLCA1LCA1LCA1XVxyXG5cclxuY29uc3QgbWFwID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oT2JqZWN0LmVudHJpZXMob2JqKSlcclxuXHJcblxyXG5jb25zb2xlLmxvZyhtYXApXHJcblxyXG5sZXQgc3VtID0gcmV2aWV3LnJlZHVjZShmdW5jdGlvbiAoYWNjLCBjdXJyKSB7XHJcbiAgICBhY2MgKz0gY3VyclxyXG4gICAgcmV0dXJuIGFjY1xyXG59KVxyXG5jb25zb2xlLmxvZyhzdW0pXHJcbmxldCBhdmcgPSByZXZpZXcucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGN1cnIsKSB7XHJcbiAgICBhY2MgKz0gY3VyciAvIHJldmlldy5sZW5ndGhcclxuICAgIHJldHVybiBhY2NcclxufSwgMClcclxuY29uc29sZS5sb2coYXZnKVxyXG5cclxuXHJcbmxldCBuYW1lczogc3RyaW5nW10gPSBbXHJcbiAgICBcImphdmFcIixcclxuICAgIFwiamF2YXNjcmlwdFwiLFxyXG4gICAgXCJqYXZhXCIsXHJcbiAgICBcInBocFwiLFxyXG4gICAgXCJwaHBcIixcclxuICAgIFwicGhwXCJcclxuXVxyXG5jb25zdCBhY2M6IG9iamVjdEFjY3VtdWxhdGlvbiA9IHt9O1xyXG5jb25zdCBzZXRBcnJheTogYXJyYXlBY2N1bXVsYXRpb24gPSBbXVxyXG5cclxubGV0IHJhdGUgPSBuYW1lcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY3Vycikge1xyXG4gICAgYWNjW2N1cnJdID8gYWNjW2N1cnJdKysgOiBhY2NbY3Vycl0gPSAxXHJcbiAgICByZXR1cm4gYWNjXHJcbn0sIGFjYylcclxuY29uc29sZS5sb2cocmF0ZSlcclxuXHJcbmxldCB1bmlxdWUgPSBuYW1lcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY3Vycikge1xyXG4gICAgaWYgKCFhY2MuaW5jbHVkZXMoY3VycikpIHtcclxuICAgICAgICBhY2MucHVzaChjdXJyKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFjY1xyXG59LCBzZXRBcnJheSlcclxuXHJcbmNvbnNvbGUubG9nKHVuaXF1ZSlcclxuXHJcblxyXG4vLyBNeSBSZWR1Y2UgRnVuY3Rpb24gLy9cclxuY29uc3QgbXlSZWR1Y2VyID0gKGFycjogYW55W10sIGNhbGxiYWNrOiAoYWNjOmFueSxjdXJyOmFueSxpOm51bWJlcixhcnI6YW55W10pPT5hbnksIGFjPzogYW55KSA9PiB7XHJcbiAgICBsZXQgYWNjID0gYWNcclxuICAgIGxldCBzdGFydCA9IDBcclxuICAgIGlmICghYWNjKSB7XHJcbiAgICAgICAgYWNjID0gYXJyWzBdXHJcbiAgICAgICAgc3RhcnQgPSAxXHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBhY2MgPSBjYWxsYmFjayhhY2MsIGFycltpXSwgaSwgYXJyKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhY2NcclxuXHJcblxyXG59XHJcbmxldCBwID0gbXlSZWR1Y2VyKHJldmlldywgZnVuY3Rpb24gKGFjYywgY3Vycikge1xyXG5cclxuICAgIHJldHVybiBhY2MgKz0gY3VyclxyXG5cclxufSlcclxuY29uc29sZS5sb2cocClcclxuXHJcbi8qXHJcbiAqIEBmb3JFYWNoXHJcbiAqL1xyXG5mdW5jdGlvbiBteUZvcmVhY2goYXJyOiBhbnlbXSxjYWxsYmFjazoodjpzdHJpbmcsaTpudW1iZXIsYXJyOmFueVtdKT0+KHN0cmluZ3xudW1iZXJ8dm9pZCkpIHtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNhbGxiYWNrKGFycltpXSwgaSxhcnIpXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcbmxldCB1ID0gbXlSZWR1Y2VyKG5hbWVzLGZ1bmN0aW9uIChhY2M6YW55LCBjdXJyOmFueSkge1xyXG4gICAgaWYgKCFhY2MuaW5jbHVkZXMoY3VycikpIHtcclxuICAgICAgICBhY2MucHVzaChjdXJyKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhY2NcclxuXHJcbn0sc2V0QXJyYXkpXHJcblxyXG5jb25zb2xlLmxvZyh1KVxyXG5cclxuXHJcbiAvLyAgbWFwXHJcbiBmdW5jdGlvbiBteU1hcChhcnI6IGFueVtdLCBjYWxsYmFjazptYXBDYWxsQmFjaykge1xyXG4gICAgbGV0IGEgPSBbXVxyXG4gICAgIGZvciAobGV0IGkgPSAwOyBpIDxhcnIubGVuZ3RoIDsgaSsrKSB7XHJcbiAgICAgICAgYS5wdXNoKCBjYWxsYmFjayhhcnJbaV0saSxhcnIpKVxyXG4gICAgIH1cclxuICAgICByZXR1cm4gYVxyXG4gfVxyXG5cclxubGV0IG8gPSBteU1hcChuYW1lcyxmdW5jdGlvbiAodixpKSB7XHJcbiAgICByZXR1cm4gbmV3IE1hcDxzdHJpbmcsIChzdHJpbmcgfCBudW1iZXIpPihbW1wiaWRcIiwgaV0sIFtcInZhbHVlXCIsIHZdXSlcclxuIH0pXHJcblxyXG5cclxuY29uc29sZS5kaXIobylcclxuXHJcbmxldCBvcGogPSBuZXcgTWFwKClcclxuXHJcbmNvbnNvbGUuZGlyKG9wailcclxuLy8gZmluZCBhdmVyYWdlIHJhdGluZyBpbiA1IHN0YXJcclxuZnVuY3Rpb24gZmluZEF2ZXJhZ2VSYXRpbmcoYXJyOiBudW1iZXJbXSkge1xyXG4gICAgbGV0IHN1bSA9IGFyci5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY3Vycikge1xyXG4gICAgICAgIGFjYyArPSBjdXJyXHJcbiAgICAgICAgcmV0dXJuIGFjY1xyXG4gICAgfSwgMClcclxuICAgIHJldHVybiBzdW0gLyBhcnIubGVuZ3RoXHJcbn1cclxuXHJcblxyXG4vLyBteSBhcnJheSByZWR1Y2UgZnVuY3Rpb25cclxuZnVuY3Rpb24gbXlSZWR1Y2UoYXJyOiBudW1iZXJbXSwgY2I6IChhY2M6IG51bWJlciwgY3VycjogbnVtYmVyLCBpOiBudW1iZXIsIGFycjogbnVtYmVyW10pID0+IG51bWJlciwgYWM/OiBudW1iZXIpIHtcclxuICAgIGxldCBhY2MgPSBhY1xyXG4gICAgbGV0IHN0YXJ0ID0gMFxyXG4gICAgaWYgKCFhY2MpIHtcclxuICAgICAgICBhY2MgPSBhcnJbMF1cclxuICAgICAgICBzdGFydCA9IDFcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGFjYyA9IGNiKGFjYywgYXJyW2ldLCBpLCBhcnIpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gYWNjXHJcbn1cclxuXHJcbmxldCByID0gZmluZEF2ZXJhZ2VSYXRpbmcocmV2aWV3KVxyXG5jb25zb2xlLmxvZyhyLnRvUHJlY2lzaW9uKDIpKVxyXG5cclxuIC8vIGNyZWF0ZSBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSBzdHJpbmcgYW5kIHJldHVybnMgYSBzdHJpbmcgd2l0aCB0aGUgZmlyc3QgbGV0dGVyIG9mIGVhY2ggd29yZCBjYXBpdGFsaXplZFxyXG5mdW5jdGlvbiBjYXBpdGFsaXplKHN0cjogc3RyaW5nKSB7XHJcbiAgICBsZXQgYXJyID0gc3RyLnNwbGl0KCcgJylcclxuICAgIGxldCBuZXdBcnIgPSBhcnIubWFwKGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgcmV0dXJuIHYuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB2LnNsaWNlKDEpXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIG5ld0Fyci5qb2luKCcgJylcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==