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
let num = 12;
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
isIterable(num);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7UUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQztLQUNqRDtTQUNHO1FBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQztLQUM3QztBQUNMLENBQUM7QUFFRCxVQUFVLENBQUMsR0FBRyxDQUFDO0FBQ2YsVUFBVSxDQUFDLElBQUksQ0FBQztBQUNoQixVQUFVLENBQUMsR0FBRyxDQUFDO0FBQ2YsVUFBVSxDQUFDLEdBQUcsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jbGFzcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW50ZXJmYWNlLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NOYW1lLCBQZXJzb259IGZyb20gXCIuL2ludGVyZmFjZVwiO1xyXG5cclxuXHJcbmV4cG9ydCAgIGNsYXNzIFBsYXllciBpbXBsZW1lbnRzIFBlcnNvbjxudW1iZXI+e1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgYWdlOiBudW1iZXIsIHByaXZhdGUgcmVhZG9ubHkgY291bnRyeTpjTmFtZSA9IGNOYW1lLkJEKSB7XHJcblxyXG4gICAgfVxyXG4gICAgZ2V0Q291bnRyeSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvdW50cnkgO1xyXG5cclxufVxyXG5cclxuICBwdWJsaWMgY2FsbCgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMubmFtZX0gaXMgYSAgJHt0aGlzLmFnZX0gWWVhcnMgT2xkIEZyb20gJHt0aGlzLmNvdW50cnl9IE5hdGlvbmFsIENyaWNrZXQgVGVhbSBgKVxyXG4gfVxyXG5cclxuXHJcbn1cclxuXHJcbiIsIiBleHBvcnQgaW50ZXJmYWNlIEltYWdlT3B0aW9uIHtcclxuICAgIHdlaWdodDpzdHJpbmcsXHJcbiAgICBoZWlnaHQ6c3RyaW5nLFxyXG4gICAgc3JjOnN0cmluZyxcclxuICAgIGFsdDpzdHJpbmdcclxufVxyXG4vLyBpbnRlcmZhY2Ugd2l0aCBHZW5lcmljc1xyXG5leHBvcnQgaW50ZXJmYWNlIFBlcnNvbjxUIGV4dGVuZHMgbnVtYmVyPiB7XHJcbiAgICBuYW1lOiBzdHJpbmdcclxuICAgIGFnZTogVFxyXG4gICAgY2FsbCgpOiB2b2lkXHJcbiAgICBnZXRDb3VudHJ5KCk6IHN0cmluZ1xyXG59XHJcbi8vIGVudW1cclxuIGV4cG9ydCBlbnVtIGNOYW1lIHtcclxuICAgIEJEID0gXCJCYW5nbGFkZXNoXCJcclxufVxyXG4gdHlwZSBDb3VudGVyVXA9KHN0cmluZyB8IEhUTUxDb2xsZWN0aW9uKVxyXG4gZXhwb3J0IGludGVyZmFjZSBDb3VudGVyVXBPcHRpb25ze1xyXG4gICAgYzpDb3VudGVyVXAsXHJcbiAgICB0Om51bWJlclxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1BsYXllcn0gZnJvbSBcIi4vY2xhc3NcIjtcclxuXHJcbmltcG9ydCB7Q291bnRlclVwT3B0aW9uc30gZnJvbSBcIi4vaW50ZXJmYWNlXCI7XHJcblxyXG5sZXQgUGxheWVyT25lID0gbmV3IFBsYXllcignU2FraWInLCAyNSlcclxuXHJcbmNvbnN0IFBsYXllclR3byA9IG5ldyBQbGF5ZXIoJ1RhbWltJywgMjgpXHJcblxyXG5QbGF5ZXJPbmUuY2FsbCgpXHJcblBsYXllclR3by5jYWxsKClcclxuXHJcblxyXG4vLyBjb3VudGVyLXVwIHBsdWdpbiBtYWRlIGluIFR5cGVzY3JpcHRcclxubGV0IGNvdW50ZXJVcDogRnVuY3Rpb25cclxuLy8gcmVjdXJzaXZlIHdheVxyXG5jb3VudGVyVXAgPSAob3B0aW9uczpDb3VudGVyVXBPcHRpb25zKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5jID09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuYyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUob3B0aW9ucy5jKVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCB2IG9mIG9wdGlvbnMuYykge1xyXG4gICAgICAgICAgICBsZXQgbiA9IHBhcnNlSW50KHYuaW5uZXJIVE1MKVxyXG4gICAgICAgICAgICBsZXQgaSA9IDBcclxuICAgICAgICAgICAgZnVuY3Rpb24gY2FsKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPD0gbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LmlubmVySFRNTCA9IGkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpKytcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbCgpXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgb3B0aW9ucy50KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhbCgpXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cobmV3IEVycm9yKCdFcnJvciBpbiBjb3VudGVyIEZ1bmN0aW9uJykpXHJcbiAgICB9XHJcbn1cclxubGV0IHBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaG8nKVxyXG5cclxuY291bnRlclVwKHtjOidoMScsdDoxMDAwfSlcclxuY291bnRlclVwKHtjOnBzLHQ6NTAwfSlcclxuXHJcblxyXG5cclxubGV0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4nKVxyXG5cclxuXHJcbiAvLyByZWN1cnNpdmUgd2F5XHJcbiBmdW5jdGlvbiBpbmNyZW1lbnQoKSB7XHJcbiAgICAgZnVuY3Rpb24gZ2V0UmFuZG9tQ29sb3IoKSB7XHJcbiAgICAgICAgIGNvbnN0IGhleExldHRlcnMgPSAnYWJjZGVmMTIzNDU2Nzg5MCc7XHJcbiAgICAgICAgIGxldCBoZXggPSAnIyc7XHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDY7IGkrKykge1xyXG4gICAgICAgICAgICAgaGV4ICs9IGhleExldHRlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaGV4TGV0dGVycy5sZW5ndGgpXTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICByZXR1cm4gaGV4O1xyXG4gICAgIH1cclxuICAgICBsZXQgYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JveF9jJylcclxuICAgICBsZXQgd2lkdGg9IGJveC5zdHlsZS53aWR0aC5zcGxpdCgnJScpXHJcbiAgICAgaWYgKHBhcnNlSW50KHdpZHRoWzBdKTwxMDApe1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT57XHJcbiAgICAgICAgICAgIGJveC5zdHlsZS53aWR0aCA9IFN0cmluZyhwYXJzZUludCh3aWR0aFswXSkrNSkrJyUnXHJcbiAgICAgICAgICAgIGJveC5pbm5lckhUTUw9IFN0cmluZyhwYXJzZUludCh3aWR0aFswXSkrNSkrJyUnXHJcbiAgICAgICAgICAgIGJveC5zdHlsZS5iYWNrZ3JvdW5kID0gZ2V0UmFuZG9tQ29sb3IoKVxyXG4gICAgICAgICAgICByZXR1cm4gaW5jcmVtZW50KClcclxuICAgICAgICB9LDMwMClcclxuICAgICB9ZWxzZXtcclxuICAgICAgICAgbGV0IHJlc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICAgcmVzZXQuc3R5bGUuY3NzVGV4dCA9IGBcclxuICAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICBib3JkZXI6bm9uZTtcclxuICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrcmVkO1xyXG4gICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICBgXHJcbiAgICAgICAgIHJlc2V0LmlubmVyVGV4dCA9IFwiUmVzZXRcIlxyXG4gICAgICAgICBidG4uYWZ0ZXIocmVzZXQpXHJcbiAgICAgICAgIHJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICAgICAgICAgYm94LnN0eWxlLndpZHRoID0gJzUlJ1xyXG4gICAgICAgICAgICAgYm94LmlubmVySFRNTCA9ICc1JSdcclxuICAgICAgICAgICAgIGJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJywpXHJcbiAgICAgICAgICAgICByZXNldC5yZW1vdmUoKVxyXG5cclxuICAgICAgICAgfSlcclxuXHJcbiAgICAgfVxyXG5cclxuXHJcbiB9XHJcblxyXG5cclxuYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgaW5jcmVtZW50KClcclxuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ3RydWUnKVxyXG59KVxyXG5jb25zb2xlLmxvZyh3aW5kb3cubG9jYXRpb24ub3JpZ2luKVxyXG4gbGV0IG9iaiA9IHtcclxuICAgIDE6XCJmXCIsXHJcbiAgICAyOlwiY1wiLFxyXG4gICAgNTpcImRcIixcclxuICAgIDM6XCJhXCIsXHJcbiAgICA3OlwibFwiLFxyXG4gfVxyXG5cclxuXHJcblxyXG4vLyBvYmpldCB2YWx1ZSBpdGVyYXRlIC8vXHJcblxyXG5mdW5jdGlvbiBvYmplY3RWYWx1ZSh2Om9iamVjdCx0PzpudW1iZXIpIHtcclxuICAgIGxldCB2YWwgPSBPYmplY3QuZW50cmllcyh2KVxyXG4gICAgbGV0IGxlbiA9IHZhbC5sZW5ndGhcclxuICAgIGlmIChsZW4gPjApe1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2YWxbMF1bMV0pXHJcbiAgICAgICAgICAgICAgdmFsID0gdmFsLnNsaWNlKDEpXHJcbiAgICAgICAgICAgIHYgPSBPYmplY3QuZnJvbUVudHJpZXModmFsKVxyXG4gICAgICAgICAgICByZXR1cm4gb2JqZWN0VmFsdWUodix0KVxyXG4gICAgICAgIH0sdClcclxuICAgIH1cclxuXHJcbn1cclxub2JqZWN0VmFsdWUob2JqLDEwMDApXHJcbiAvLyBvYmplY3QgaW5kZXggaXRlcmF0ZSAvL1xyXG5mdW5jdGlvbiBvYmplY3RJbmRleCh2Om9iamVjdCx0PzpudW1iZXIpIHtcclxuICAgIGxldCB2YWwgPSBPYmplY3QuZW50cmllcyh2KVxyXG4gICAgbGV0IGxlbiA9IHZhbC5sZW5ndGhcclxuICAgIGlmIChsZW4gPjApe1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2YWxbMF1bMF0pXHJcbiAgICAgICAgICAgIHZhbCA9IHZhbC5zbGljZSgxKVxyXG4gICAgICAgICAgICB2ID0gT2JqZWN0LmZyb21FbnRyaWVzKHZhbClcclxuICAgICAgICAgICAgcmV0dXJuIG9iamVjdEluZGV4KHYsdClcclxuICAgICAgICB9LHQpXHJcbiAgICB9XHJcblxyXG59XHJcbm9iamVjdEluZGV4KG9iaiwxMDAwKVxyXG5cclxuXHJcbiBsZXQgYXJyOiAoc3RyaW5nfG51bWJlcilbXSA9IFsyLDMsNCw5XVxyXG4gbGV0IG9iajI6b2JqZWN0ID0ge31cclxubGV0IHN0cjpzdHJpbmcgPSBcImJhbmdsYWRlc2hcIlxyXG5sZXQgbnVtIDpudW1iZXIgPSAxMlxyXG5cclxuZnVuY3Rpb24gaXNJdGVyYWJsZSh2OmFueSkge1xyXG4gICAgaWYgKHZbU3ltYm9sLml0ZXJhdG9yXSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coYGNvbmdyYXR1bGF0aW9uIFlvdSBhcmUgaXRlcmFibGVgKVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgICBjb25zb2xlLmxvZyhgU29ycnkgWW91IGFyZSAgTm90IGl0ZXJhYmxlYClcclxuICAgIH1cclxufVxyXG5cclxuaXNJdGVyYWJsZShhcnIpXHJcbmlzSXRlcmFibGUob2JqMilcclxuaXNJdGVyYWJsZShzdHIpXHJcbmlzSXRlcmFibGUobnVtKVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==