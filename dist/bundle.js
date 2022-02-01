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
let unique = names.reduce(function (acc, curr) {
    if (!acc.includes(curr)) {
        acc.push(curr);
    }
    return acc;
}, setArray);
console.log(unique); /// set unique
// make object

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwQztBQUduQyxNQUFRLE1BQU07SUFHakIsWUFBbUIsSUFBWSxFQUFTLEdBQVcsRUFBbUIsVUFBZ0IsZ0RBQVE7UUFBM0UsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUFTLFFBQUcsR0FBSCxHQUFHLENBQVE7UUFBbUIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7SUFFOUYsQ0FBQztJQUNELFVBQVU7UUFDTixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUU7SUFFN0IsQ0FBQztJQUVRLElBQUk7UUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksVUFBVSxJQUFJLENBQUMsR0FBRyxtQkFBbUIsSUFBSSxDQUFDLE9BQU8seUJBQXlCLENBQUM7SUFDMUcsQ0FBQztDQUdEOzs7Ozs7Ozs7Ozs7Ozs7QUNGRCxPQUFPO0FBQ1AsSUFBWSxLQUlYO0FBSkQsV0FBWSxLQUFLO0lBQ2IsMEJBQWlCO0lBQ2pCLHNCQUFhO0lBQ2Isd0JBQWU7QUFDbkIsQ0FBQyxFQUpXLEtBQUssS0FBTCxLQUFLLFFBSWhCOzs7Ozs7O1VDdEJEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTitCO0FBRTREO0FBRTNGLE1BQU0sU0FBUyxHQUFHLElBQUksMENBQU0sQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFDLGdEQUFRLENBQUM7QUFFbkQsTUFBTSxTQUFTLEdBQUcsSUFBSSwwQ0FBTSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7QUFDekMsTUFBTSxXQUFXLEdBQUcsSUFBSSwwQ0FBTSxDQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsZ0RBQVEsQ0FBQztBQUVwRCxTQUFTLENBQUMsSUFBSSxFQUFFO0FBQ2hCLFNBQVMsQ0FBQyxJQUFJLEVBQUU7QUFDaEIsV0FBVyxDQUFDLElBQUksRUFBRTtBQUdsQix1Q0FBdUM7QUFDdkMsSUFBSSxTQUFtQjtBQUN2QixnQkFBZ0I7QUFDaEIsU0FBUyxHQUFHLENBQUMsT0FBeUIsRUFBRSxFQUFFO0lBQ3RDLElBQUk7UUFDQSxJQUFJLE9BQU8sT0FBTyxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUU7WUFDOUIsT0FBTyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUN6RDtRQUNELEtBQUssSUFBSSxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsRUFBRTtZQUNyQixJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUM3QixJQUFJLENBQUMsR0FBRyxDQUFDO1lBRVQsU0FBUyxHQUFHO2dCQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDUixVQUFVLENBQUMsR0FBRyxFQUFFO3dCQUNaLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRTt3QkFDMUIsQ0FBQyxFQUFFO3dCQUNILE9BQU8sR0FBRyxFQUFFO29CQUNoQixDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztpQkFDaEI7WUFDTCxDQUFDO1lBRUQsR0FBRyxFQUFFO1NBRVI7S0FFSjtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0tBQ3REO0FBQ0wsQ0FBQztBQUNELElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUM7QUFFOUMsU0FBUyxDQUFDLEVBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFDLENBQUM7QUFDN0IsU0FBUyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFDLENBQUM7QUFJMUIsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFFeEMsU0FBUyxjQUFjO0lBQ25CLE1BQU0sVUFBVSxHQUFHLGtCQUFrQixDQUFDO0lBQ3RDLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNkLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDekIsR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztLQUNwRTtJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2YsQ0FBQztBQUNELGdCQUFnQjtBQUNoQixTQUFTLFNBQVM7SUFHZCxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztJQUMxQyxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3RDLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRTtRQUMxQixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ1osR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHO1lBQ3RELEdBQUcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHO1lBQ3BELEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLGNBQWMsRUFBRTtZQUN2QyxPQUFPLFNBQVMsRUFBRTtRQUN0QixDQUFDLEVBQUUsR0FBRyxDQUFDO0tBQ1Y7U0FBTTtRQUNILElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQzVDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHOzs7Ozs7Ozs7VUFTcEI7UUFDRixLQUFLLENBQUMsU0FBUyxHQUFHLE9BQU87UUFDekIsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDaEIsS0FBSyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFDakMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSTtZQUN0QixHQUFHLENBQUMsU0FBUyxHQUFHLElBQUk7WUFDcEIsR0FBRyxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUU7WUFDaEMsS0FBSyxDQUFDLE1BQU0sRUFBRTtRQUVsQixDQUFDLENBQUM7S0FFTDtBQUdMLENBQUM7QUFHRCxHQUFHLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQztJQUNyQyxDQUFDLENBQUMsY0FBYyxFQUFFO0lBQ2xCLFNBQVMsRUFBRTtJQUNYLEdBQUcsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQztBQUN4QyxDQUFDLENBQUM7QUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO0FBQ25DLElBQUksR0FBRyxHQUFHO0lBQ04sR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztDQUNYO0FBR0QseUJBQXlCO0FBRXpCLFNBQVMsV0FBVyxDQUFDLENBQVMsRUFBRSxDQUFVO0lBQ3RDLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzNCLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNO0lBQ3BCLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRTtRQUNULFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QixHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDbEIsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDO1lBQzNCLE9BQU8sV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNSO0FBRUwsQ0FBQztBQUVELHlCQUF5QjtBQUV6QiwwQkFBMEI7QUFDMUIsU0FBUyxXQUFXLENBQUMsQ0FBUyxFQUFFLENBQVU7SUFDdEMsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDM0IsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU07SUFFcEIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFO1FBQ1QsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNsQixDQUFDLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7WUFDM0IsT0FBTyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM1QixDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ1I7QUFFTCxDQUFDO0FBQ0Qsd0JBQXdCO0FBRXhCLE1BQU0sSUFBSSxHQUFVLGFBQWE7QUFDaEMsSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7QUFJMUMsT0FBTyxDQUFDLEdBQUcsQ0FBRSxPQUFPLFNBQVMsQ0FBQztBQUM5QixLQUFLLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFDO0lBQ25CLE1BQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDO0lBQ3JDLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsRSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUM7SUFDZCxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxvQkFBb0IsY0FBYyxFQUFFO1lBQzlDLGNBQWMsRUFBRTtLQUN2QjtJQUNELEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0NBRWhCO0FBQ0EsTUFBTSxNQUFNLEdBQVksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7QUFJbkQsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsRUFBQyxJQUFJLEVBQUMsS0FBSztJQUM1QyxHQUFHLElBQUksSUFBSTtJQUNYLE9BQU8sR0FBRztBQUNkLENBQUMsQ0FBQztBQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO0FBQ2hCLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLEVBQUMsSUFBSTtJQUNyQyxHQUFHLElBQUUsSUFBSSxHQUFDLE1BQU0sQ0FBQyxNQUFNO0lBQ3hCLE9BQU8sR0FBRztBQUNkLENBQUMsRUFBQyxDQUFDLENBQUM7QUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztBQUloQixJQUFJLEtBQUssR0FBWTtJQUNqQixNQUFNO0lBQ04sWUFBWTtJQUNaLE1BQU07SUFDTixLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7Q0FDUjtBQUNELE1BQU0sR0FBRyxHQUF1QixFQUFFLENBQUM7QUFDbkMsTUFBTSxRQUFRLEdBQXFCLEVBQUU7QUFFckMsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsRUFBQyxJQUFJO0lBQ3RDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxJQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNuQyxPQUFPLEdBQUc7QUFDYixDQUFDLEVBQUMsR0FBRyxDQUFDO0FBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7QUFFakIsSUFBSSxNQUFNLEdBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsRUFBQyxJQUFJO0lBQ3pDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDO1FBQ3BCLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0tBQ2pCO0lBQ0QsT0FBTyxHQUFHO0FBQ2QsQ0FBQyxFQUFDLFFBQVEsQ0FBQztBQUVYLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUMsY0FBYztBQUNsQyxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzLnRzIiwid2VicGFjazovLy8uL3NyYy9pbnRlcmZhY2UudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y05hbWUsIFBlcnNvbn0gZnJvbSBcIi4vaW50ZXJmYWNlXCI7XHJcblxyXG5cclxuZXhwb3J0ICAgY2xhc3MgUGxheWVyIGltcGxlbWVudHMgUGVyc29uPG51bWJlcj57XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyBhZ2U6IG51bWJlciwgcHJpdmF0ZSByZWFkb25seSBjb3VudHJ5OmNOYW1lID0gY05hbWUuQkQpIHtcclxuXHJcbiAgICB9XHJcbiAgICBnZXRDb3VudHJ5KCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY291bnRyeSA7XHJcblxyXG59XHJcblxyXG4gIHB1YmxpYyBjYWxsKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5uYW1lfSBpcyBhICAke3RoaXMuYWdlfSBZZWFycyBPbGQgRnJvbSAke3RoaXMuY291bnRyeX0gTmF0aW9uYWwgQ3JpY2tldCBUZWFtIGApXHJcbiB9XHJcblxyXG5cclxufVxyXG5cclxuIiwiZXhwb3J0IGludGVyZmFjZSBJbWFnZU9wdGlvbiB7XHJcbiAgICB3ZWlnaHQ6IHN0cmluZyxcclxuICAgIGhlaWdodDogc3RyaW5nLFxyXG4gICAgc3JjOiBzdHJpbmcsXHJcbiAgICBhbHQ6IHN0cmluZ1xyXG59XHJcblxyXG4vLyBpbnRlcmZhY2Ugd2l0aCBHZW5lcmljc1xyXG5leHBvcnQgaW50ZXJmYWNlIFBlcnNvbjxUIGV4dGVuZHMgbnVtYmVyPiB7XHJcbiAgICBuYW1lOiBzdHJpbmdcclxuICAgIGFnZTogVFxyXG5cclxuICAgIGNhbGwoKTogdm9pZFxyXG5cclxuICAgIGdldENvdW50cnkoKTogc3RyaW5nXHJcbn1cclxuXHJcbi8vIGVudW1cclxuZXhwb3J0IGVudW0gY05hbWUge1xyXG4gICAgQkQgPSBcIkJhbmdsYWRlc2hcIixcclxuICAgIElOID0gXCJJbmRpYW5cIixcclxuICAgIFBLID0gXCJQYWtpc3RhblwiXHJcbn1cclxuXHJcbnR5cGUgQ291bnRlclVwID0gKHN0cmluZyB8IEhUTUxDb2xsZWN0aW9uKVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb3VudGVyVXBPcHRpb25zIHtcclxuICAgIGM6IENvdW50ZXJVcCxcclxuICAgIHQ6IG51bWJlclxyXG59XHJcblxyXG50eXBlIE51bWJlciA9ICggbnVtYmVyIHwgYmlnaW50KVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBvYmplY3RBY2N1bXVsYXRpb24ge1xyXG4gICAgW2N1cnI6IHN0cmluZ106IE51bWJlciA7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgYXJyYXlBY2N1bXVsYXRpb24gZXh0ZW5kcyBBcnJheTxzdHJpbmc+IHtcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtQbGF5ZXJ9IGZyb20gXCIuL2NsYXNzXCI7XHJcblxyXG5pbXBvcnQge2FycmF5QWNjdW11bGF0aW9uLCBjTmFtZSwgQ291bnRlclVwT3B0aW9ucywgb2JqZWN0QWNjdW11bGF0aW9ufSBmcm9tIFwiLi9pbnRlcmZhY2VcIjtcclxuXHJcbmNvbnN0IFBsYXllck9uZSA9IG5ldyBQbGF5ZXIoJ1NhY2hpbicsIDQwLGNOYW1lLklOKVxyXG5cclxuY29uc3QgUGxheWVyVHdvID0gbmV3IFBsYXllcignVGFtaW0nLCAyOClcclxuY29uc3QgUGxheWVyVGhyZWUgPSBuZXcgUGxheWVyKCdBZnJhZGknLDQwLGNOYW1lLlBLKVxyXG5cclxuUGxheWVyT25lLmNhbGwoKVxyXG5QbGF5ZXJUd28uY2FsbCgpXHJcblBsYXllclRocmVlLmNhbGwoKVxyXG5cclxuXHJcbi8vIGNvdW50ZXItdXAgcGx1Z2luIG1hZGUgaW4gVHlwZXNjcmlwdFxyXG5sZXQgY291bnRlclVwOiBGdW5jdGlvblxyXG4vLyByZWN1cnNpdmUgd2F5XHJcbmNvdW50ZXJVcCA9IChvcHRpb25zOiBDb3VudGVyVXBPcHRpb25zKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5jID09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuYyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUob3B0aW9ucy5jKVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCB2IG9mIG9wdGlvbnMuYykge1xyXG4gICAgICAgICAgICBsZXQgbiA9IHBhcnNlSW50KHYuaW5uZXJIVE1MKVxyXG4gICAgICAgICAgICBsZXQgaSA9IDBcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNhbCgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpIDw9IG4pIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi5pbm5lckhUTUwgPSBpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgaSsrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWwoKVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIG9wdGlvbnMudClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FsKClcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhuZXcgRXJyb3IoJ0Vycm9yIGluIGNvdW50ZXIgRnVuY3Rpb24nKSlcclxuICAgIH1cclxufVxyXG5sZXQgcHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdobycpXHJcblxyXG5jb3VudGVyVXAoe2M6ICdoMScsIHQ6IDEwMDB9KVxyXG5jb3VudGVyVXAoe2M6IHBzLCB0OiA1MDB9KVxyXG5cclxuXHJcblxyXG5sZXQgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bicpXHJcblxyXG5mdW5jdGlvbiBnZXRSYW5kb21Db2xvcigpIHtcclxuICAgIGNvbnN0IGhleExldHRlcnMgPSAnYWJjZGVmMTIzNDU2Nzg5MCc7XHJcbiAgICBsZXQgaGV4ID0gJyMnO1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNjsgaSsrKSB7XHJcbiAgICAgICAgaGV4ICs9IGhleExldHRlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaGV4TGV0dGVycy5sZW5ndGgpXTtcclxuICAgIH1cclxuICAgIHJldHVybiBoZXg7XHJcbn1cclxuLy8gcmVjdXJzaXZlIHdheVxyXG5mdW5jdGlvbiBpbmNyZW1lbnQoKSB7XHJcblxyXG5cclxuICAgIGxldCBib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm94X2MnKVxyXG4gICAgbGV0IHdpZHRoID0gYm94LnN0eWxlLndpZHRoLnNwbGl0KCclJylcclxuICAgIGlmIChwYXJzZUludCh3aWR0aFswXSkgPCAxMDApIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgYm94LnN0eWxlLndpZHRoID0gU3RyaW5nKHBhcnNlSW50KHdpZHRoWzBdKSArIDUpICsgJyUnXHJcbiAgICAgICAgICAgIGJveC5pbm5lckhUTUwgPSBTdHJpbmcocGFyc2VJbnQod2lkdGhbMF0pICsgNSkgKyAnJSdcclxuICAgICAgICAgICAgYm94LnN0eWxlLmJhY2tncm91bmQgPSBnZXRSYW5kb21Db2xvcigpXHJcbiAgICAgICAgICAgIHJldHVybiBpbmNyZW1lbnQoKVxyXG4gICAgICAgIH0sIDMwMClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IHJlc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICByZXNldC5zdHlsZS5jc3NUZXh0ID0gYFxyXG4gICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgIGJvcmRlcjpub25lO1xyXG4gICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtyZWQ7XHJcbiAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgIGBcclxuICAgICAgICByZXNldC5pbm5lclRleHQgPSBcIlJlc2V0XCJcclxuICAgICAgICBidG4uYWZ0ZXIocmVzZXQpXHJcbiAgICAgICAgcmVzZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGJveC5zdHlsZS53aWR0aCA9ICc1JSdcclxuICAgICAgICAgICAgYm94LmlubmVySFRNTCA9ICc1JSdcclxuICAgICAgICAgICAgYnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnLClcclxuICAgICAgICAgICAgcmVzZXQucmVtb3ZlKClcclxuXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuXHJcbmJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGluY3JlbWVudCgpXHJcbiAgICBidG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICd0cnVlJylcclxufSlcclxuY29uc29sZS5sb2cod2luZG93LmxvY2F0aW9uLm9yaWdpbilcclxubGV0IG9iaiA9IHtcclxuICAgICdhJzogXCJmXCIsXHJcbiAgICAnYic6IFwiY1wiLFxyXG4gICAgJ2MnOiBcImRcIixcclxuICAgICdkJzogXCJhXCIsXHJcbiAgICAnZSc6IFwibFwiLFxyXG59XHJcblxyXG5cclxuLy8gb2JqZXQgdmFsdWUgaXRlcmF0ZSAvL1xyXG5cclxuZnVuY3Rpb24gb2JqZWN0VmFsdWUodjogb2JqZWN0LCB0PzogbnVtYmVyKSB7XHJcbiAgICBsZXQgdmFsID0gT2JqZWN0LmVudHJpZXModilcclxuICAgIGxldCBsZW4gPSB2YWwubGVuZ3RoXHJcbiAgICBpZiAobGVuID4gMCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2YWxbMF1bMV0pXHJcbiAgICAgICAgICAgIHZhbCA9IHZhbC5zbGljZSgxKVxyXG4gICAgICAgICAgICB2ID0gT2JqZWN0LmZyb21FbnRyaWVzKHZhbClcclxuICAgICAgICAgICAgcmV0dXJuIG9iamVjdFZhbHVlKHYsIHQpXHJcbiAgICAgICAgfSwgdClcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8vIG9iamVjdFZhbHVlKG9iaiwgMTAwMClcclxuXHJcbi8vIG9iamVjdCBpbmRleCBpdGVyYXRlIC8vXHJcbmZ1bmN0aW9uIG9iamVjdEluZGV4KHY6IG9iamVjdCwgdD86IG51bWJlcikge1xyXG4gICAgbGV0IHZhbCA9IE9iamVjdC5lbnRyaWVzKHYpXHJcbiAgICBsZXQgbGVuID0gdmFsLmxlbmd0aFxyXG5cclxuICAgIGlmIChsZW4gPiAwKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbFswXVswXSlcclxuICAgICAgICAgICAgdmFsID0gdmFsLnNsaWNlKDEpXHJcbiAgICAgICAgICAgIHYgPSBPYmplY3QuZnJvbUVudHJpZXModmFsKVxyXG4gICAgICAgICAgICByZXR1cm4gb2JqZWN0SW5kZXgodiwgdClcclxuICAgICAgICB9LCB0KVxyXG4gICAgfVxyXG5cclxufVxyXG4vLyBvYmplY3RJbmRleChvYmosMTAwMClcclxuXHJcbmNvbnN0IHRleHQ6c3RyaW5nID0gYEhlbGxvIFdvcmxkYFxyXG4gbGV0IHRleHRBcnJheSA6IHN0cmluZ1tdID0gdGV4dC5zcGxpdCgnJylcclxuXHJcblxyXG5cclxuY29uc29sZS5sb2coIHR5cGVvZiB0ZXh0QXJyYXkpXHJcbmZvciAobGV0IFt2LGldIG9mIHRleHQpe1xyXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgcC5zZXRBdHRyaWJ1dGUoJ2lkJywgditNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTAwMCkudG9TdHJpbmcoKSlcclxuICAgcC5pbm5lckhUTUwgPSB2XHJcbiAgICBwLnN0eWxlLmNzc1RleHQgPSBgYmFja2dyb3VuZC1jb2xvcjoke2dldFJhbmRvbUNvbG9yKCl9O1xyXG4gICAgY29sb3I6JHtnZXRSYW5kb21Db2xvcigpfVxyXG4gICAgYFxyXG4gICAgYnRuLmJlZm9yZShwKVxyXG5cclxufVxyXG4gY29uc3QgcmV2aWV3IDpudW1iZXJbXT0gWzUsNSw1LDUsNSw1LDUsNCwzLDIsNSw2LDVdXHJcblxyXG5cclxuXHJcbiBsZXQgc3VtID0gcmV2aWV3LnJlZHVjZShmdW5jdGlvbiAoYWNjLGN1cnIsaW5kZXgpIHtcclxuICAgICBhY2MgKz0gY3VyclxyXG4gICAgIHJldHVybiBhY2NcclxuIH0pXHJcbmNvbnNvbGUubG9nKHN1bSlcclxubGV0IGF2ZyA9IHJldmlldy5yZWR1Y2UoZnVuY3Rpb24gKGFjYyxjdXJyLCkge1xyXG4gICAgIGFjYys9Y3Vyci9yZXZpZXcubGVuZ3RoXHJcbiAgICByZXR1cm4gYWNjXHJcbn0sMClcclxuY29uc29sZS5sb2coYXZnKVxyXG5cclxuXHJcblxyXG5sZXQgbmFtZXM6c3RyaW5nW10gPSBbXHJcbiAgICBcImphdmFcIixcclxuICAgIFwiamF2YXNjcmlwdFwiLFxyXG4gICAgXCJqYXZhXCIsXHJcbiAgICBcInBocFwiLFxyXG4gICAgXCJwaHBcIixcclxuICAgIFwicGhwXCJcclxuXVxyXG5jb25zdCBhY2M6IG9iamVjdEFjY3VtdWxhdGlvbiA9IHt9O1xyXG5jb25zdCBzZXRBcnJheTphcnJheUFjY3VtdWxhdGlvbiA9IFtdXHJcblxyXG5sZXQgcmF0ZSA9IG5hbWVzLnJlZHVjZShmdW5jdGlvbiAoYWNjLGN1cnIpIHtcclxuICAgIGFjY1tjdXJyXT9hY2NbY3Vycl0rKzphY2NbY3Vycl0gPSAxXHJcbiAgICByZXR1cm4gYWNjXHJcbiB9LGFjYylcclxuY29uc29sZS5sb2cocmF0ZSlcclxuXHJcbmxldCB1bmlxdWUgID0gbmFtZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsY3Vycil7XHJcbiAgICBpZiAoIWFjYy5pbmNsdWRlcyhjdXJyKSl7XHJcbiAgICAgICAgYWNjLnB1c2goY3VycilcclxuICAgIH1cclxuICAgIHJldHVybiBhY2NcclxufSxzZXRBcnJheSlcclxuXHJcbmNvbnNvbGUubG9nKHVuaXF1ZSkgLy8vIHNldCB1bmlxdWVcclxuLy8gbWFrZSBvYmplY3RcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==