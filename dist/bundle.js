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
        console.log(`${this.name} is a ${this.country} age of ${this.age}`);
    }
}


/***/ }),

/***/ "./src/hope.ts":
/*!*********************!*\
  !*** ./src/hope.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Name": () => (/* binding */ Name),
/* harmony export */   "Age": () => (/* binding */ Age)
/* harmony export */ });
let Name = "Whats Is Your Name";
let Age = 28;


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
/* harmony import */ var _hope__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hope */ "./src/hope.ts");


let PlayerOne = new _class__WEBPACK_IMPORTED_MODULE_0__.Player('Sakib', 25);
const PlayerTwo = new _class__WEBPACK_IMPORTED_MODULE_0__.Player('Tamim', 28);
PlayerOne.call();
PlayerTwo.call();
let h1 = document.getElementById('tag');
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
    weight: "200px",
    height: "200px",
    src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    alt: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
});
p.innerHTML = `${_hope__WEBPACK_IMPORTED_MODULE_1__.Name} is ${_hope__WEBPACK_IMPORTED_MODULE_1__.Age} Years Old`;
h1.after(p);
p.after(img);
p.addEventListener('click', () => {
    setTimeout(() => img.remove(), 1000);
});
h1.style.color = 'Green';

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jbGFzcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9wZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW50ZXJmYWNlLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NOYW1lLCBQZXJzb259IGZyb20gXCIuL2ludGVyZmFjZVwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIgaW1wbGVtZW50cyBQZXJzb248bnVtYmVyPntcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIGFnZTogbnVtYmVyLCBwcml2YXRlIHJlYWRvbmx5IGNvdW50cnk6Y05hbWUgPWNOYW1lLkJEKSB7XHJcblxyXG4gICAgfVxyXG4gICAgZ2V0Q291bnRyeSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvdW50cnkgO1xyXG5cclxufVxyXG5cclxuICBwdWJsaWMgY2FsbCgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMubmFtZX0gaXMgYSAke3RoaXMuY291bnRyeX0gYWdlIG9mICR7dGhpcy5hZ2V9YClcclxuIH1cclxuXHJcblxyXG59XHJcblxyXG4iLCIgIGV4cG9ydCBsZXQgTmFtZTpzdHJpbmcgPSBcIldoYXRzIElzIFlvdXIgTmFtZVwiXHJcbiBleHBvcnQgbGV0IEFnZSA6bnVtYmVyID0gMjg7IiwiIGV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VPcHRpb24ge1xyXG4gICAgd2VpZ2h0OnN0cmluZyxcclxuICAgIGhlaWdodDpzdHJpbmcsXHJcbiAgICBzcmM6c3RyaW5nLFxyXG4gICAgYWx0OnN0cmluZ1xyXG59XHJcbi8vIGludGVyZmFjZSB3aXRoIEdlbmVyaWNzXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGVyc29uPFQgZXh0ZW5kcyBudW1iZXI+IHtcclxuICAgIG5hbWU6IHN0cmluZ1xyXG4gICAgYWdlOiBUXHJcbiAgICBjYWxsKCk6IHZvaWRcclxuICAgIGdldENvdW50cnkoKTogc3RyaW5nXHJcbn1cclxuLy8gZW51bVxyXG4gZXhwb3J0IGVudW0gY05hbWUge1xyXG4gICAgQkQgPSBcIkJhbmdsYWRlc2hcIlxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1BsYXllcn0gZnJvbSBcIi4vY2xhc3NcIjtcclxuaW1wb3J0IHtBZ2UsIE5hbWV9IGZyb20gXCIuL2hvcGVcIjtcclxuaW1wb3J0IHtJbWFnZU9wdGlvbn0gZnJvbSBcIi4vaW50ZXJmYWNlXCI7XHJcblxyXG5sZXQgUGxheWVyT25lID0gbmV3IFBsYXllcignU2FraWInLDI1KVxyXG5cclxuY29uc3QgUGxheWVyVHdvID0gbmV3IFBsYXllcignVGFtaW0nLDI4KVxyXG5cclxuUGxheWVyT25lLmNhbGwoKVxyXG5QbGF5ZXJUd28uY2FsbCgpXHJcblxyXG5cclxubGV0IGgxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhZycpIGFzIEhUTUxFbGVtZW50XHJcbmxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGltYWdlKG9wdGlvbnM6SW1hZ2VPcHRpb24pIHtcclxuICAgIGNvbnN0IGltZ1ZhcmlhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgIGltZ1ZhcmlhYmxlLnN0eWxlLndpZHRoID1vcHRpb25zLndlaWdodFxyXG4gICAgaW1nVmFyaWFibGUuc3R5bGUuaGVpZ2h0ID1vcHRpb25zLmhlaWdodFxyXG4gICAgaW1nVmFyaWFibGUuc3JjID1vcHRpb25zLnNyY1xyXG4gICAgaW1nVmFyaWFibGUuYWx0ID0gb3B0aW9ucy5hbHRcclxuXHJcbiAgICByZXR1cm4gaW1nVmFyaWFibGVcclxuXHJcbn1cclxuXHJcblxyXG5sZXQgaW1nID0gaW1hZ2Uoe1xyXG4gICAgd2VpZ2h0OlwiMjAwcHhcIixcclxuICAgIGhlaWdodDpcIjIwMHB4XCIsXHJcbiAgICBzcmM6IFwiaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxNS8wNC8yMy8yMi8wMC90cmVlLTczNjg4NV9fNDgwLmpwZ1wiLFxyXG4gICAgYWx0OlwiaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxNS8wNC8yMy8yMi8wMC90cmVlLTczNjg4NV9fNDgwLmpwZ1wiXHJcbn0pXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbnAuaW5uZXJIVE1MID0gYCR7TmFtZX0gaXMgJHtBZ2V9IFllYXJzIE9sZGBcclxuaDEuYWZ0ZXIocClcclxucC5hZnRlcihpbWcpXHJcblxyXG5wLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgc2V0VGltZW91dCgoKT0+aW1nLnJlbW92ZSgpLDEwMDApXHJcbn0pXHJcblxyXG5oMS5zdHlsZS5jb2xvciA9ICdHcmVlbic7XHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9