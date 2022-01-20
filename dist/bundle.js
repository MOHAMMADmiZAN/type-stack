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
let h1 = document.getElementsByClassName('h1');
let p = document.createElement('p');
function image(options) {
    const imgVariable = document.createElement('img');
    imgVariable.style.width = options.weight;
    imgVariable.style.height = options.height;
    imgVariable.src = options.src;
    imgVariable.alt = options.alt;
    return imgVariable;
}
let img = image({
    weight: "600px",
    height: "300px",
    src: "https://miro.medium.com/max/1200/0*RbmfNyhuBb8G3LWh.png",
    alt: "https://miro.medium.com/max/1200/0*RbmfNyhuBb8G3LWh.png"
});
// counter up plugin
let counterUp;
counterUp = (c, t) => {
    for (let v of c) {
        let n = parseInt(v.innerHTML);
        let i = 0;
        setInterval(() => {
            if (i <= n) {
                v.innerHTML = i.toString();
                i++;
            }
        }, t);
    }
};
counterUp(h1, 1000);
// p.innerHTML =
console.log(h1);
p.after(img);
p.addEventListener('click', () => {
    setTimeout(() => img.remove(), 1000);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVMsQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDO0FBSWxCLGdCQUFnQjtBQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztBQUNmLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0FBRVosQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBQyxHQUFFLEVBQUU7SUFDM0IsVUFBVSxDQUFDLEdBQUUsRUFBRSxJQUFHLENBQUMsTUFBTSxFQUFFLEVBQUMsSUFBSSxDQUFDO0FBQ3JDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jbGFzcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW50ZXJmYWNlLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NOYW1lLCBQZXJzb259IGZyb20gXCIuL2ludGVyZmFjZVwiO1xyXG5cclxuXHJcbmV4cG9ydCAgIGNsYXNzIFBsYXllciBpbXBsZW1lbnRzIFBlcnNvbjxudW1iZXI+e1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgYWdlOiBudW1iZXIsIHByaXZhdGUgcmVhZG9ubHkgY291bnRyeTpjTmFtZSA9IGNOYW1lLkJEKSB7XHJcblxyXG4gICAgfVxyXG4gICAgZ2V0Q291bnRyeSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvdW50cnkgO1xyXG5cclxufVxyXG5cclxuICBwdWJsaWMgY2FsbCgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMubmFtZX0gaXMgYSAgJHt0aGlzLmFnZX0gWWVhcnMgT2xkIEZyb20gJHt0aGlzLmNvdW50cnl9IE5hdGlvbmFsIENyaWNrZXQgVGVhbSBgKVxyXG4gfVxyXG5cclxuXHJcbn1cclxuXHJcbiIsIiBleHBvcnQgaW50ZXJmYWNlIEltYWdlT3B0aW9uIHtcclxuICAgIHdlaWdodDpzdHJpbmcsXHJcbiAgICBoZWlnaHQ6c3RyaW5nLFxyXG4gICAgc3JjOnN0cmluZyxcclxuICAgIGFsdDpzdHJpbmdcclxufVxyXG4vLyBpbnRlcmZhY2Ugd2l0aCBHZW5lcmljc1xyXG5leHBvcnQgaW50ZXJmYWNlIFBlcnNvbjxUIGV4dGVuZHMgbnVtYmVyPiB7XHJcbiAgICBuYW1lOiBzdHJpbmdcclxuICAgIGFnZTogVFxyXG4gICAgY2FsbCgpOiB2b2lkXHJcbiAgICBnZXRDb3VudHJ5KCk6IHN0cmluZ1xyXG59XHJcbi8vIGVudW1cclxuIGV4cG9ydCBlbnVtIGNOYW1lIHtcclxuICAgIEJEID0gXCJCYW5nbGFkZXNoXCJcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtQbGF5ZXJ9IGZyb20gXCIuL2NsYXNzXCI7XHJcbmltcG9ydCB7QWdlLCBOYW1lfSBmcm9tIFwiLi9ob3BlXCI7XHJcbmltcG9ydCB7SW1hZ2VPcHRpb259IGZyb20gXCIuL2ludGVyZmFjZVwiO1xyXG5cclxubGV0IFBsYXllck9uZSA9IG5ldyBQbGF5ZXIoJ1Nha2liJywyNSlcclxuXHJcbmNvbnN0IFBsYXllclR3byA9IG5ldyBQbGF5ZXIoJ1RhbWltJywyOClcclxuXHJcblBsYXllck9uZS5jYWxsKClcclxuUGxheWVyVHdvLmNhbGwoKVxyXG5cclxuXHJcblxyXG5sZXQgaDEgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoMScpXHJcblxyXG5sZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG5cclxuXHJcbmZ1bmN0aW9uIGltYWdlKG9wdGlvbnM6SW1hZ2VPcHRpb24pIHtcclxuICAgIGNvbnN0IGltZ1ZhcmlhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgIGltZ1ZhcmlhYmxlLnN0eWxlLndpZHRoID1vcHRpb25zLndlaWdodFxyXG4gICAgaW1nVmFyaWFibGUuc3R5bGUuaGVpZ2h0ID1vcHRpb25zLmhlaWdodFxyXG4gICAgaW1nVmFyaWFibGUuc3JjID1vcHRpb25zLnNyY1xyXG4gICAgaW1nVmFyaWFibGUuYWx0ID0gb3B0aW9ucy5hbHRcclxuXHJcbiAgICByZXR1cm4gaW1nVmFyaWFibGVcclxuXHJcbn1cclxubGV0IGltZyA9IGltYWdlKHtcclxuICAgIHdlaWdodDpcIjYwMHB4XCIsXHJcbiAgICBoZWlnaHQ6XCIzMDBweFwiLFxyXG4gICAgc3JjOiBcImh0dHBzOi8vbWlyby5tZWRpdW0uY29tL21heC8xMjAwLzAqUmJtZk55aHVCYjhHM0xXaC5wbmdcIixcclxuICAgIGFsdDpcImh0dHBzOi8vbWlyby5tZWRpdW0uY29tL21heC8xMjAwLzAqUmJtZk55aHVCYjhHM0xXaC5wbmdcIlxyXG59KVxyXG5cclxuLy8gY291bnRlciB1cCBwbHVnaW5cclxubGV0IGNvdW50ZXJVcCA6IEZ1bmN0aW9uXHJcblxyXG5jb3VudGVyVXAgPSAoYzpIVE1MQ29sbGVjdGlvbix0Om51bWJlcikgPT4ge1xyXG5cclxuXHJcblxyXG4gICAgZm9yICggbGV0IHYgb2YgYyl7XHJcbiAgICAgIGxldCBuID0gcGFyc2VJbnQodi5pbm5lckhUTUwpXHJcbiAgICAgICAgbGV0IGkgPSAwXHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCk9PntcclxuICAgICAgICAgICAgaWYgKGk8PW4pe1xyXG4gICAgICAgICAgICB2LmlubmVySFRNTCA9IGkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgaSsrXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB9LHQpXHJcbiAgIH1cclxufVxyXG5cclxuY291bnRlclVwKGgxLDEwMDApXHJcblxyXG5cclxuXHJcbi8vIHAuaW5uZXJIVE1MID1cclxuY29uc29sZS5sb2coaDEpXHJcbnAuYWZ0ZXIoaW1nKVxyXG5cclxucC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgIHNldFRpbWVvdXQoKCk9PmltZy5yZW1vdmUoKSwxMDAwKVxyXG59KVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=