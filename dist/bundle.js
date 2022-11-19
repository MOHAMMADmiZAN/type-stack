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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class */ "./src/class.ts");

const sakib = new _class__WEBPACK_IMPORTED_MODULE_0__.Player("Sakib", 35);
sakib.call();
// generics
const objTemp = (obj) => {
    // genarate random id
    const id = Math.random().toString(16);
    return Object.assign({ id }, obj);
};
const obj2 = objTemp("Hello World");
const obj3 = objTemp(1);
console.log(obj2);
const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return await response.json();
};
// create a function for get users and print them
const users = await getUsers();
users.forEach(user => {
    console.log(user.name);
});

__webpack_handle_async_dependencies__();
}, 1);

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
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackThen = typeof Symbol === "function" ? Symbol("webpack then") : "__webpack_then__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var completeQueue = (queue) => {
/******/ 			if(queue) {
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var completeFunction = (fn) => (!--fn.r && fn());
/******/ 		var queueFunction = (queue, fn) => (queue ? queue.push(fn) : completeFunction(fn));
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackThen]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						completeQueue(queue);
/******/ 						queue = 0;
/******/ 					});
/******/ 					var obj = {};
/******/ 												obj[webpackThen] = (fn, reject) => (queueFunction(queue, fn), dep['catch'](reject));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 								ret[webpackThen] = (fn) => (completeFunction(fn));
/******/ 								ret[webpackExports] = dep;
/******/ 								return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue = hasAwait && [];
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var isEvaluating = true;
/******/ 			var nested = false;
/******/ 			var whenAll = (deps, onResolve, onReject) => {
/******/ 				if (nested) return;
/******/ 				nested = true;
/******/ 				onResolve.r += deps.length;
/******/ 				deps.map((dep, i) => (dep[webpackThen](onResolve, onReject)));
/******/ 				nested = false;
/******/ 			};
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = () => (resolve(exports), completeQueue(queue), queue = 0);
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackThen] = (fn, rejectFn) => {
/******/ 				if (isEvaluating) { return completeFunction(fn); }
/******/ 				if (currentDeps) whenAll(currentDeps, fn, rejectFn);
/******/ 				queueFunction(queue, fn);
/******/ 				promise['catch'](rejectFn);
/******/ 			};
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				if(!deps) return outerResolve();
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn, result;
/******/ 				var promise = new Promise((resolve, reject) => {
/******/ 					fn = () => (resolve(result = currentDeps.map((d) => (d[webpackExports]))));
/******/ 					fn.r = 0;
/******/ 					whenAll(currentDeps, fn, reject);
/******/ 				});
/******/ 				return fn.r ? promise : result;
/******/ 			}).then(outerResolve, reject);
/******/ 			isEvaluating = false;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9pbnRlcmZhY2UudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvYXN5bmMgbW9kdWxlIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y05hbWUsIFBlcnNvbn0gZnJvbSBcIi4vaW50ZXJmYWNlXCI7XHJcblxyXG5cclxuZXhwb3J0ICAgY2xhc3MgUGxheWVyIGltcGxlbWVudHMgUGVyc29uPG51bWJlcj57XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyBhZ2U6IG51bWJlciwgcHJpdmF0ZSByZWFkb25seSBjb3VudHJ5OmNOYW1lID0gY05hbWUuQkQpIHtcclxuXHJcbiAgICB9XHJcbiAgICBnZXRDb3VudHJ5KCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY291bnRyeSA7XHJcblxyXG59XHJcblxyXG4gIHB1YmxpYyBjYWxsKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5uYW1lfSBpcyBhICAke3RoaXMuYWdlfSBZZWFycyBPbGQgRnJvbSAke3RoaXMuY291bnRyeX0gTmF0aW9uYWwgQ3JpY2tldCBUZWFtIGApXHJcbiB9XHJcblxyXG5cclxuXHJcblxyXG5cclxufVxyXG5cclxuIiwiaW1wb3J0IHtQbGF5ZXJ9IGZyb20gXCIuL2NsYXNzXCI7XHJcblxyXG5jb25zdCBzYWtpYiA9IG5ldyBQbGF5ZXIoXCJTYWtpYlwiLCAzNSk7XHJcbnNha2liLmNhbGwoKTtcclxuXHJcbi8vIGdlbmVyaWNzXHJcbiBjb25zdCAgb2JqVGVtcCA9ICA8VD4ob2JqOiBUKT0+e1xyXG4gICAgLy8gZ2VuYXJhdGUgcmFuZG9tIGlkXHJcbiAgICBjb25zdCBpZCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpZCxcclxuICAgICAgICAuLi5vYmpcclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgb2JqMiA9IG9ialRlbXA8c3RyaW5nPihcIkhlbGxvIFdvcmxkXCIpO1xyXG5jb25zdCBvYmozID0gb2JqVGVtcDxudW1iZXI+KDEpO1xyXG5cclxuY29uc29sZS5sb2cob2JqMik7XHJcblxyXG4gLy8gY3JlYXRlICB1c2VyIGludGVyZmFjZSBhbmQgZ2V0IHVzZXJzIGZyb20gYXBpXHJcbiBpbnRlcmZhY2UgIFVzZXIge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGVtYWlsOiBzdHJpbmc7XHJcbiAgICBwaG9uZTogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBnZXRVc2VycyA9IGFzeW5jICgpOiBQcm9taXNlPFVzZXJbXT4gPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSAgYXdhaXQgIGZldGNoKFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzXCIpO1xyXG4gICAgcmV0dXJuICBhd2FpdCAgcmVzcG9uc2UuanNvbigpO1xyXG59XHJcblxyXG4vLyBjcmVhdGUgYSBmdW5jdGlvbiBmb3IgZ2V0IHVzZXJzIGFuZCBwcmludCB0aGVtXHJcblxyXG4gICAgY29uc3QgdXNlcnMgPSAgYXdhaXQgIGdldFVzZXJzKCk7XHJcbiAgICB1c2Vycy5mb3JFYWNoKHVzZXIgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXIubmFtZSk7XHJcbiAgICB9XHJcbiAgICApXHJcblxyXG5cclxuXHJcbiIsImV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VPcHRpb24ge1xyXG4gICAgd2VpZ2h0OiBzdHJpbmcsXHJcbiAgICBoZWlnaHQ6IHN0cmluZyxcclxuICAgIHNyYzogc3RyaW5nLFxyXG4gICAgYWx0OiBzdHJpbmdcclxufVxyXG5cclxuLy8gaW50ZXJmYWNlIHdpdGggR2VuZXJpY3NcclxuZXhwb3J0IGludGVyZmFjZSBQZXJzb248VCBleHRlbmRzIG51bWJlcj4ge1xyXG4gICAgbmFtZTogc3RyaW5nXHJcbiAgICBhZ2U6IFRcclxuXHJcbiAgICBjYWxsKCk6IHZvaWRcclxuXHJcbiAgICBnZXRDb3VudHJ5KCk6IHN0cmluZ1xyXG59XHJcblxyXG4vLyBlbnVtXHJcbmV4cG9ydCBlbnVtIGNOYW1lIHtcclxuICAgIEJEID0gXCJCYW5nbGFkZXNoXCIsXHJcbiAgICBJTiA9IFwiSW5kaWFuXCIsXHJcbiAgICBQSyA9IFwiUGFraXN0YW5cIlxyXG59XHJcblxyXG50eXBlIENvdW50ZXJVcCA9IChzdHJpbmcgfCBIVE1MQ29sbGVjdGlvbilcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ291bnRlclVwT3B0aW9ucyB7XHJcbiAgICBjOiBDb3VudGVyVXAsXHJcbiAgICB0OiBudW1iZXJcclxufVxyXG5cclxudHlwZSBOdW1iZXIgPSAoIG51bWJlciB8IGJpZ2ludClcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2Ugb2JqZWN0QWNjdW11bGF0aW9uIHtcclxuICAgIFtjdXJyOiBzdHJpbmddOiBOdW1iZXIgO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGFycmF5QWNjdW11bGF0aW9uIGV4dGVuZHMgQXJyYXk8c3RyaW5nPiB7XHJcbn1cclxuXHJcbiAvL2NyZXRlIGEgZnVuY3Rpb24gaW50ZXJmYWNlXHJcbmV4cG9ydCBpbnRlcmZhY2UgbWFwQ2FsbEJhY2sge1xyXG4gICAgKHY6IGFueSwgaTogbnVtYmVyLGFycjphbnlbXSk6IGFueX1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgYXJyYXlPZk9iamVjdCBleHRlbmRzIEFycmF5PHtbY3VycjpzdHJpbmddOmFueX0+IHtcclxuXHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBvYmplY3RPZk9iamVjdCBleHRlbmRzIE9iamVjdCB7XHJcbiAgICBbY3Vycjogc3RyaW5nXTogYW55XHJcblxyXG4gfVxyXG5cclxuXHJcblxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwidmFyIHdlYnBhY2tUaGVuID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayB0aGVuXCIpIDogXCJfX3dlYnBhY2tfdGhlbl9fXCI7XG52YXIgd2VicGFja0V4cG9ydHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIGV4cG9ydHNcIikgOiBcIl9fd2VicGFja19leHBvcnRzX19cIjtcbnZhciBjb21wbGV0ZVF1ZXVlID0gKHF1ZXVlKSA9PiB7XG5cdGlmKHF1ZXVlKSB7XG5cdFx0cXVldWUuZm9yRWFjaCgoZm4pID0+IChmbi5yLS0pKTtcblx0XHRxdWV1ZS5mb3JFYWNoKChmbikgPT4gKGZuLnItLSA/IGZuLnIrKyA6IGZuKCkpKTtcblx0fVxufVxudmFyIGNvbXBsZXRlRnVuY3Rpb24gPSAoZm4pID0+ICghLS1mbi5yICYmIGZuKCkpO1xudmFyIHF1ZXVlRnVuY3Rpb24gPSAocXVldWUsIGZuKSA9PiAocXVldWUgPyBxdWV1ZS5wdXNoKGZuKSA6IGNvbXBsZXRlRnVuY3Rpb24oZm4pKTtcbnZhciB3cmFwRGVwcyA9IChkZXBzKSA9PiAoZGVwcy5tYXAoKGRlcCkgPT4ge1xuXHRpZihkZXAgIT09IG51bGwgJiYgdHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIikge1xuXHRcdGlmKGRlcFt3ZWJwYWNrVGhlbl0pIHJldHVybiBkZXA7XG5cdFx0aWYoZGVwLnRoZW4pIHtcblx0XHRcdHZhciBxdWV1ZSA9IFtdO1xuXHRcdFx0ZGVwLnRoZW4oKHIpID0+IHtcblx0XHRcdFx0b2JqW3dlYnBhY2tFeHBvcnRzXSA9IHI7XG5cdFx0XHRcdGNvbXBsZXRlUXVldWUocXVldWUpO1xuXHRcdFx0XHRxdWV1ZSA9IDA7XG5cdFx0XHR9KTtcblx0XHRcdHZhciBvYmogPSB7fTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0b2JqW3dlYnBhY2tUaGVuXSA9IChmbiwgcmVqZWN0KSA9PiAocXVldWVGdW5jdGlvbihxdWV1ZSwgZm4pLCBkZXBbJ2NhdGNoJ10ocmVqZWN0KSk7XG5cdFx0XHRyZXR1cm4gb2JqO1xuXHRcdH1cblx0fVxuXHR2YXIgcmV0ID0ge307XG5cdFx0XHRcdFx0XHRyZXRbd2VicGFja1RoZW5dID0gKGZuKSA9PiAoY29tcGxldGVGdW5jdGlvbihmbikpO1xuXHRcdFx0XHRcdFx0cmV0W3dlYnBhY2tFeHBvcnRzXSA9IGRlcDtcblx0XHRcdFx0XHRcdHJldHVybiByZXQ7XG59KSk7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmEgPSAobW9kdWxlLCBib2R5LCBoYXNBd2FpdCkgPT4ge1xuXHR2YXIgcXVldWUgPSBoYXNBd2FpdCAmJiBbXTtcblx0dmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cztcblx0dmFyIGN1cnJlbnREZXBzO1xuXHR2YXIgb3V0ZXJSZXNvbHZlO1xuXHR2YXIgcmVqZWN0O1xuXHR2YXIgaXNFdmFsdWF0aW5nID0gdHJ1ZTtcblx0dmFyIG5lc3RlZCA9IGZhbHNlO1xuXHR2YXIgd2hlbkFsbCA9IChkZXBzLCBvblJlc29sdmUsIG9uUmVqZWN0KSA9PiB7XG5cdFx0aWYgKG5lc3RlZCkgcmV0dXJuO1xuXHRcdG5lc3RlZCA9IHRydWU7XG5cdFx0b25SZXNvbHZlLnIgKz0gZGVwcy5sZW5ndGg7XG5cdFx0ZGVwcy5tYXAoKGRlcCwgaSkgPT4gKGRlcFt3ZWJwYWNrVGhlbl0ob25SZXNvbHZlLCBvblJlamVjdCkpKTtcblx0XHRuZXN0ZWQgPSBmYWxzZTtcblx0fTtcblx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqKSA9PiB7XG5cdFx0cmVqZWN0ID0gcmVqO1xuXHRcdG91dGVyUmVzb2x2ZSA9ICgpID0+IChyZXNvbHZlKGV4cG9ydHMpLCBjb21wbGV0ZVF1ZXVlKHF1ZXVlKSwgcXVldWUgPSAwKTtcblx0fSk7XG5cdHByb21pc2Vbd2VicGFja0V4cG9ydHNdID0gZXhwb3J0cztcblx0cHJvbWlzZVt3ZWJwYWNrVGhlbl0gPSAoZm4sIHJlamVjdEZuKSA9PiB7XG5cdFx0aWYgKGlzRXZhbHVhdGluZykgeyByZXR1cm4gY29tcGxldGVGdW5jdGlvbihmbik7IH1cblx0XHRpZiAoY3VycmVudERlcHMpIHdoZW5BbGwoY3VycmVudERlcHMsIGZuLCByZWplY3RGbik7XG5cdFx0cXVldWVGdW5jdGlvbihxdWV1ZSwgZm4pO1xuXHRcdHByb21pc2VbJ2NhdGNoJ10ocmVqZWN0Rm4pO1xuXHR9O1xuXHRtb2R1bGUuZXhwb3J0cyA9IHByb21pc2U7XG5cdGJvZHkoKGRlcHMpID0+IHtcblx0XHRpZighZGVwcykgcmV0dXJuIG91dGVyUmVzb2x2ZSgpO1xuXHRcdGN1cnJlbnREZXBzID0gd3JhcERlcHMoZGVwcyk7XG5cdFx0dmFyIGZuLCByZXN1bHQ7XG5cdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRmbiA9ICgpID0+IChyZXNvbHZlKHJlc3VsdCA9IGN1cnJlbnREZXBzLm1hcCgoZCkgPT4gKGRbd2VicGFja0V4cG9ydHNdKSkpKTtcblx0XHRcdGZuLnIgPSAwO1xuXHRcdFx0d2hlbkFsbChjdXJyZW50RGVwcywgZm4sIHJlamVjdCk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIGZuLnIgPyBwcm9taXNlIDogcmVzdWx0O1xuXHR9KS50aGVuKG91dGVyUmVzb2x2ZSwgcmVqZWN0KTtcblx0aXNFdmFsdWF0aW5nID0gZmFsc2U7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ21vZHVsZScgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=