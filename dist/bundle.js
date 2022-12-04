/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Vehicles.ts":
/*!*************************!*\
  !*** ./src/Vehicles.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Car": () => (/* binding */ Car),
/* harmony export */   "Bicycle": () => (/* binding */ Bicycle)
/* harmony export */ });
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class */ "./src/class.ts");
// Two class Bicycle and Car inherit the properties of Vehicle and have extra two instance variable name and gear. Their constructor will take the name and gear value as input. Design the class and show the status of the vehicle name, speed and gear.

class Car extends _class__WEBPACK_IMPORTED_MODULE_0__.Vehicle {
    constructor(speed, name, gear) {
        super(speed);
        this.name = name;
        this.gear = gear;
    }
    changeGear() {
        this.gear++;
    }
    printStatus() {
        console.log(`Name: ${this.name}, Speed: ${this.speed}, Gear: ${this.gear}`);
    }
}
class Bicycle extends _class__WEBPACK_IMPORTED_MODULE_0__.Vehicle {
    constructor(speed, name, gear) {
        super(speed);
        this.name = name;
        this.gear = gear;
    }
    changeGear() {
        this.gear++;
    }
    printStatus() {
        console.log(`Name: ${this.name}, Speed: ${this.speed}, Gear: ${this.gear}`);
    }
}


/***/ }),

/***/ "./src/class.ts":
/*!**********************!*\
  !*** ./src/class.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player),
/* harmony export */   "Vehicle": () => (/* binding */ Vehicle)
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
//Create a class Vehicle having instance variables speed, and two methods applybreak() and speedup(). Create a class Car which inherits the Vehicle class. The Car class has an instance variable gear. The class has two methods called changeGear() and printStates(). The changeGear() sets the value of gear to the passed argument. The printStates() prints the current state of the car. The printStates() method to be called from main method. The constructor of Vehicle takes an integer values and assign it to speed value. Calling applybreak() will decrease the speed which is applied and speedup() will increase the speed.
class Vehicle {
    constructor(speed) {
        this.speed = speed;
    }
    applyBreak() {
        this.speed -= 5;
    }
    speedUp() {
        this.speed += 5;
    }
}
// Two class Bicycle and Car inherit the properties of Vehicle and have extra two instance variable name and gear. Their constructor will take the name and gear value as input. Design the class and show the status of the vehicle name, speed and gear.
class Car extends Vehicle {
    constructor(speed, name, gear) {
        super(speed);
        this.name = name;
        this.gear = gear;
    }
    changeGear() {
        this.gear++;
    }
    printStatus() {
        console.log(`Name: ${this.name}, Speed: ${this.speed}, Gear: ${this.gear}`);
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
/* harmony import */ var _Vehicles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vehicles */ "./src/Vehicles.ts");


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
// create new car
let bmw = new _Vehicles__WEBPACK_IMPORTED_MODULE_1__.Car(100, "BMW", 5);
let duronto = new _Vehicles__WEBPACK_IMPORTED_MODULE_1__.Bicycle(100, "Duronto", 5);
bmw.printStatus();
duronto.printStatus();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2pCLHNCQUFhO0lBQ2Isd0JBQWU7QUFDbkIsQ0FBQyxFQUpXLEtBQUssS0FBTCxLQUFLLFFBSWhCOzs7Ozs7O1VDdEJEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsSUFBSTtXQUNKO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLENBQUM7V0FDRDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBLHNCQUFzQjtXQUN0QjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBLEVBQUU7V0FDRjtXQUNBOzs7OztXQ3JFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9WZWhpY2xlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9pbnRlcmZhY2UudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvYXN5bmMgbW9kdWxlIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyBUd28gY2xhc3MgQmljeWNsZSBhbmQgQ2FyIGluaGVyaXQgdGhlIHByb3BlcnRpZXMgb2YgVmVoaWNsZSBhbmQgaGF2ZSBleHRyYSB0d28gaW5zdGFuY2UgdmFyaWFibGUgbmFtZSBhbmQgZ2Vhci4gVGhlaXIgY29uc3RydWN0b3Igd2lsbCB0YWtlIHRoZSBuYW1lIGFuZCBnZWFyIHZhbHVlIGFzIGlucHV0LiBEZXNpZ24gdGhlIGNsYXNzIGFuZCBzaG93IHRoZSBzdGF0dXMgb2YgdGhlIHZlaGljbGUgbmFtZSwgc3BlZWQgYW5kIGdlYXIuXHJcblxyXG5pbXBvcnQge1ZlaGljbGV9IGZyb20gXCIuL2NsYXNzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FyIGV4dGVuZHMgVmVoaWNsZSB7XHJcbiAgICBnZWFyOiBudW1iZXI7XHJcbiAgICBjb25zdHJ1Y3RvcihzcGVlZDogbnVtYmVyLCBwdWJsaWMgbmFtZTogc3RyaW5nLCBnZWFyOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihzcGVlZCk7XHJcbiAgICAgICAgdGhpcy5nZWFyID0gZ2VhcjtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VHZWFyKCkge1xyXG4gICAgICAgIHRoaXMuZ2VhcisrO1xyXG4gICAgfVxyXG5cclxuICAgIHByaW50U3RhdHVzKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBOYW1lOiAke3RoaXMubmFtZX0sIFNwZWVkOiAke3RoaXMuc3BlZWR9LCBHZWFyOiAke3RoaXMuZ2Vhcn1gKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBCaWN5Y2xlIGV4dGVuZHMgVmVoaWNsZSB7XHJcbiAgICBnZWFyOiBudW1iZXI7XHJcbiAgICBjb25zdHJ1Y3RvcihzcGVlZDogbnVtYmVyLCBwdWJsaWMgbmFtZTogc3RyaW5nLCBnZWFyOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihzcGVlZCk7XHJcbiAgICAgICAgdGhpcy5nZWFyID0gZ2VhcjtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VHZWFyKCkge1xyXG4gICAgICAgIHRoaXMuZ2VhcisrO1xyXG4gICAgfVxyXG5cclxuICAgIHByaW50U3RhdHVzKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBOYW1lOiAke3RoaXMubmFtZX0sIFNwZWVkOiAke3RoaXMuc3BlZWR9LCBHZWFyOiAke3RoaXMuZ2Vhcn1gKTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHtjTmFtZSwgUGVyc29ufSBmcm9tIFwiLi9pbnRlcmZhY2VcIjtcclxuXHJcblxyXG5leHBvcnQgICBjbGFzcyBQbGF5ZXIgaW1wbGVtZW50cyBQZXJzb248bnVtYmVyPntcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIGFnZTogbnVtYmVyLCBwcml2YXRlIHJlYWRvbmx5IGNvdW50cnk6Y05hbWUgPSBjTmFtZS5CRCkge1xyXG5cclxuICAgIH1cclxuICAgIGdldENvdW50cnkoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb3VudHJ5IDtcclxuXHJcbn1cclxuXHJcbiAgcHVibGljIGNhbGwoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLm5hbWV9IGlzIGEgICR7dGhpcy5hZ2V9IFllYXJzIE9sZCBGcm9tICR7dGhpcy5jb3VudHJ5fSBOYXRpb25hbCBDcmlja2V0IFRlYW0gYClcclxuIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vQ3JlYXRlIGEgY2xhc3MgVmVoaWNsZSBoYXZpbmcgaW5zdGFuY2UgdmFyaWFibGVzIHNwZWVkLCBhbmQgdHdvIG1ldGhvZHMgYXBwbHlicmVhaygpIGFuZCBzcGVlZHVwKCkuIENyZWF0ZSBhIGNsYXNzIENhciB3aGljaCBpbmhlcml0cyB0aGUgVmVoaWNsZSBjbGFzcy4gVGhlIENhciBjbGFzcyBoYXMgYW4gaW5zdGFuY2UgdmFyaWFibGUgZ2Vhci4gVGhlIGNsYXNzIGhhcyB0d28gbWV0aG9kcyBjYWxsZWQgY2hhbmdlR2VhcigpIGFuZCBwcmludFN0YXRlcygpLiBUaGUgY2hhbmdlR2VhcigpIHNldHMgdGhlIHZhbHVlIG9mIGdlYXIgdG8gdGhlIHBhc3NlZCBhcmd1bWVudC4gVGhlIHByaW50U3RhdGVzKCkgcHJpbnRzIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBjYXIuIFRoZSBwcmludFN0YXRlcygpIG1ldGhvZCB0byBiZSBjYWxsZWQgZnJvbSBtYWluIG1ldGhvZC4gVGhlIGNvbnN0cnVjdG9yIG9mIFZlaGljbGUgdGFrZXMgYW4gaW50ZWdlciB2YWx1ZXMgYW5kIGFzc2lnbiBpdCB0byBzcGVlZCB2YWx1ZS4gQ2FsbGluZyBhcHBseWJyZWFrKCkgd2lsbCBkZWNyZWFzZSB0aGUgc3BlZWQgd2hpY2ggaXMgYXBwbGllZCBhbmQgc3BlZWR1cCgpIHdpbGwgaW5jcmVhc2UgdGhlIHNwZWVkLlxyXG5cclxuZXhwb3J0IGNsYXNzIFZlaGljbGUge1xyXG4gICAgc3BlZWQ6IG51bWJlcjtcclxuICAgIGNvbnN0cnVjdG9yKHNwZWVkOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgYXBwbHlCcmVhaygpIHtcclxuICAgICAgICB0aGlzLnNwZWVkIC09IDU7XHJcbiAgICB9XHJcblxyXG4gICAgc3BlZWRVcCgpIHtcclxuICAgICAgICB0aGlzLnNwZWVkICs9IDU7XHJcbiAgICB9XHJcbn1cclxuLy8gVHdvIGNsYXNzIEJpY3ljbGUgYW5kIENhciBpbmhlcml0IHRoZSBwcm9wZXJ0aWVzIG9mIFZlaGljbGUgYW5kIGhhdmUgZXh0cmEgdHdvIGluc3RhbmNlIHZhcmlhYmxlIG5hbWUgYW5kIGdlYXIuIFRoZWlyIGNvbnN0cnVjdG9yIHdpbGwgdGFrZSB0aGUgbmFtZSBhbmQgZ2VhciB2YWx1ZSBhcyBpbnB1dC4gRGVzaWduIHRoZSBjbGFzcyBhbmQgc2hvdyB0aGUgc3RhdHVzIG9mIHRoZSB2ZWhpY2xlIG5hbWUsIHNwZWVkIGFuZCBnZWFyLlxyXG5cclxuY2xhc3MgQ2FyIGV4dGVuZHMgVmVoaWNsZSB7XHJcbiAgICBnZWFyOiBudW1iZXI7XHJcbiAgICBjb25zdHJ1Y3RvcihzcGVlZDogbnVtYmVyLCBwdWJsaWMgbmFtZTogc3RyaW5nLCBnZWFyOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihzcGVlZCk7XHJcbiAgICAgICAgdGhpcy5nZWFyID0gZ2VhcjtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VHZWFyKCkge1xyXG4gICAgICAgIHRoaXMuZ2VhcisrO1xyXG4gICAgfVxyXG5cclxuICAgIHByaW50U3RhdHVzKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBOYW1lOiAke3RoaXMubmFtZX0sIFNwZWVkOiAke3RoaXMuc3BlZWR9LCBHZWFyOiAke3RoaXMuZ2Vhcn1gKTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHtQbGF5ZXJ9IGZyb20gXCIuL2NsYXNzXCI7XHJcbmltcG9ydCB7QmljeWNsZSwgQ2FyfSBmcm9tIFwiLi9WZWhpY2xlc1wiO1xyXG5cclxuY29uc3Qgc2FraWIgPSBuZXcgUGxheWVyKFwiU2FraWJcIiwgMzUpO1xyXG5zYWtpYi5jYWxsKCk7XHJcblxyXG4vLyBnZW5lcmljc1xyXG4gY29uc3QgIG9ialRlbXAgPSAgPFQ+KG9iajogVCk9PntcclxuICAgIC8vIGdlbmFyYXRlIHJhbmRvbSBpZFxyXG4gICAgY29uc3QgaWQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE2KTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaWQsXHJcbiAgICAgICAgLi4ub2JqXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG9iajIgPSBvYmpUZW1wPHN0cmluZz4oXCJIZWxsbyBXb3JsZFwiKTtcclxuY29uc3Qgb2JqMyA9IG9ialRlbXA8bnVtYmVyPigxKTtcclxuXHJcbmNvbnNvbGUubG9nKG9iajIpO1xyXG5cclxuIC8vIGNyZWF0ZSAgdXNlciBpbnRlcmZhY2UgYW5kIGdldCB1c2VycyBmcm9tIGFwaVxyXG4gaW50ZXJmYWNlICBVc2VyIHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgcGhvbmU6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgZ2V0VXNlcnMgPSBhc3luYyAoKTogUHJvbWlzZTxVc2VyW10+ID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gIGF3YWl0ICBmZXRjaChcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vyc1wiKTtcclxuICAgIHJldHVybiAgYXdhaXQgIHJlc3BvbnNlLmpzb24oKTtcclxufVxyXG5cclxuLy8gY3JlYXRlIGEgZnVuY3Rpb24gZm9yIGdldCB1c2VycyBhbmQgcHJpbnQgdGhlbVxyXG5cclxuICAgIGNvbnN0IHVzZXJzID0gIGF3YWl0ICBnZXRVc2VycygpO1xyXG4gICAgdXNlcnMuZm9yRWFjaCh1c2VyID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyLm5hbWUpO1xyXG4gICAgfVxyXG4gICAgKVxyXG5cclxuXHJcbiAvLyBjcmVhdGUgbmV3IGNhclxyXG5cclxubGV0IGJtdyA9IG5ldyBDYXIoMTAwLCBcIkJNV1wiLCA1KTtcclxubGV0IGR1cm9udG8gPSBuZXcgQmljeWNsZSgxMDAsIFwiRHVyb250b1wiLCA1KTtcclxuXHJcbmJtdy5wcmludFN0YXR1cygpO1xyXG5kdXJvbnRvLnByaW50U3RhdHVzKCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsImV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VPcHRpb24ge1xyXG4gICAgd2VpZ2h0OiBzdHJpbmcsXHJcbiAgICBoZWlnaHQ6IHN0cmluZyxcclxuICAgIHNyYzogc3RyaW5nLFxyXG4gICAgYWx0OiBzdHJpbmdcclxufVxyXG5cclxuLy8gaW50ZXJmYWNlIHdpdGggR2VuZXJpY3NcclxuZXhwb3J0IGludGVyZmFjZSBQZXJzb248VCBleHRlbmRzIG51bWJlcj4ge1xyXG4gICAgbmFtZTogc3RyaW5nXHJcbiAgICBhZ2U6IFRcclxuXHJcbiAgICBjYWxsKCk6IHZvaWRcclxuXHJcbiAgICBnZXRDb3VudHJ5KCk6IHN0cmluZ1xyXG59XHJcblxyXG4vLyBlbnVtXHJcbmV4cG9ydCBlbnVtIGNOYW1lIHtcclxuICAgIEJEID0gXCJCYW5nbGFkZXNoXCIsXHJcbiAgICBJTiA9IFwiSW5kaWFuXCIsXHJcbiAgICBQSyA9IFwiUGFraXN0YW5cIlxyXG59XHJcblxyXG50eXBlIENvdW50ZXJVcCA9IChzdHJpbmcgfCBIVE1MQ29sbGVjdGlvbilcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ291bnRlclVwT3B0aW9ucyB7XHJcbiAgICBjOiBDb3VudGVyVXAsXHJcbiAgICB0OiBudW1iZXJcclxufVxyXG5cclxudHlwZSBOdW1iZXIgPSAoIG51bWJlciB8IGJpZ2ludClcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2Ugb2JqZWN0QWNjdW11bGF0aW9uIHtcclxuICAgIFtjdXJyOiBzdHJpbmddOiBOdW1iZXIgO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGFycmF5QWNjdW11bGF0aW9uIGV4dGVuZHMgQXJyYXk8c3RyaW5nPiB7XHJcbn1cclxuXHJcbiAvL2NyZXRlIGEgZnVuY3Rpb24gaW50ZXJmYWNlXHJcbmV4cG9ydCBpbnRlcmZhY2UgbWFwQ2FsbEJhY2sge1xyXG4gICAgKHY6IGFueSwgaTogbnVtYmVyLGFycjphbnlbXSk6IGFueX1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgYXJyYXlPZk9iamVjdCBleHRlbmRzIEFycmF5PHtbY3VycjpzdHJpbmddOmFueX0+IHtcclxuXHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBvYmplY3RPZk9iamVjdCBleHRlbmRzIE9iamVjdCB7XHJcbiAgICBbY3Vycjogc3RyaW5nXTogYW55XHJcblxyXG4gfVxyXG5cclxuXHJcblxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwidmFyIHdlYnBhY2tUaGVuID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayB0aGVuXCIpIDogXCJfX3dlYnBhY2tfdGhlbl9fXCI7XG52YXIgd2VicGFja0V4cG9ydHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIGV4cG9ydHNcIikgOiBcIl9fd2VicGFja19leHBvcnRzX19cIjtcbnZhciBjb21wbGV0ZVF1ZXVlID0gKHF1ZXVlKSA9PiB7XG5cdGlmKHF1ZXVlKSB7XG5cdFx0cXVldWUuZm9yRWFjaCgoZm4pID0+IChmbi5yLS0pKTtcblx0XHRxdWV1ZS5mb3JFYWNoKChmbikgPT4gKGZuLnItLSA/IGZuLnIrKyA6IGZuKCkpKTtcblx0fVxufVxudmFyIGNvbXBsZXRlRnVuY3Rpb24gPSAoZm4pID0+ICghLS1mbi5yICYmIGZuKCkpO1xudmFyIHF1ZXVlRnVuY3Rpb24gPSAocXVldWUsIGZuKSA9PiAocXVldWUgPyBxdWV1ZS5wdXNoKGZuKSA6IGNvbXBsZXRlRnVuY3Rpb24oZm4pKTtcbnZhciB3cmFwRGVwcyA9IChkZXBzKSA9PiAoZGVwcy5tYXAoKGRlcCkgPT4ge1xuXHRpZihkZXAgIT09IG51bGwgJiYgdHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIikge1xuXHRcdGlmKGRlcFt3ZWJwYWNrVGhlbl0pIHJldHVybiBkZXA7XG5cdFx0aWYoZGVwLnRoZW4pIHtcblx0XHRcdHZhciBxdWV1ZSA9IFtdO1xuXHRcdFx0ZGVwLnRoZW4oKHIpID0+IHtcblx0XHRcdFx0b2JqW3dlYnBhY2tFeHBvcnRzXSA9IHI7XG5cdFx0XHRcdGNvbXBsZXRlUXVldWUocXVldWUpO1xuXHRcdFx0XHRxdWV1ZSA9IDA7XG5cdFx0XHR9KTtcblx0XHRcdHZhciBvYmogPSB7fTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0b2JqW3dlYnBhY2tUaGVuXSA9IChmbiwgcmVqZWN0KSA9PiAocXVldWVGdW5jdGlvbihxdWV1ZSwgZm4pLCBkZXBbJ2NhdGNoJ10ocmVqZWN0KSk7XG5cdFx0XHRyZXR1cm4gb2JqO1xuXHRcdH1cblx0fVxuXHR2YXIgcmV0ID0ge307XG5cdFx0XHRcdFx0XHRyZXRbd2VicGFja1RoZW5dID0gKGZuKSA9PiAoY29tcGxldGVGdW5jdGlvbihmbikpO1xuXHRcdFx0XHRcdFx0cmV0W3dlYnBhY2tFeHBvcnRzXSA9IGRlcDtcblx0XHRcdFx0XHRcdHJldHVybiByZXQ7XG59KSk7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmEgPSAobW9kdWxlLCBib2R5LCBoYXNBd2FpdCkgPT4ge1xuXHR2YXIgcXVldWUgPSBoYXNBd2FpdCAmJiBbXTtcblx0dmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cztcblx0dmFyIGN1cnJlbnREZXBzO1xuXHR2YXIgb3V0ZXJSZXNvbHZlO1xuXHR2YXIgcmVqZWN0O1xuXHR2YXIgaXNFdmFsdWF0aW5nID0gdHJ1ZTtcblx0dmFyIG5lc3RlZCA9IGZhbHNlO1xuXHR2YXIgd2hlbkFsbCA9IChkZXBzLCBvblJlc29sdmUsIG9uUmVqZWN0KSA9PiB7XG5cdFx0aWYgKG5lc3RlZCkgcmV0dXJuO1xuXHRcdG5lc3RlZCA9IHRydWU7XG5cdFx0b25SZXNvbHZlLnIgKz0gZGVwcy5sZW5ndGg7XG5cdFx0ZGVwcy5tYXAoKGRlcCwgaSkgPT4gKGRlcFt3ZWJwYWNrVGhlbl0ob25SZXNvbHZlLCBvblJlamVjdCkpKTtcblx0XHRuZXN0ZWQgPSBmYWxzZTtcblx0fTtcblx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqKSA9PiB7XG5cdFx0cmVqZWN0ID0gcmVqO1xuXHRcdG91dGVyUmVzb2x2ZSA9ICgpID0+IChyZXNvbHZlKGV4cG9ydHMpLCBjb21wbGV0ZVF1ZXVlKHF1ZXVlKSwgcXVldWUgPSAwKTtcblx0fSk7XG5cdHByb21pc2Vbd2VicGFja0V4cG9ydHNdID0gZXhwb3J0cztcblx0cHJvbWlzZVt3ZWJwYWNrVGhlbl0gPSAoZm4sIHJlamVjdEZuKSA9PiB7XG5cdFx0aWYgKGlzRXZhbHVhdGluZykgeyByZXR1cm4gY29tcGxldGVGdW5jdGlvbihmbik7IH1cblx0XHRpZiAoY3VycmVudERlcHMpIHdoZW5BbGwoY3VycmVudERlcHMsIGZuLCByZWplY3RGbik7XG5cdFx0cXVldWVGdW5jdGlvbihxdWV1ZSwgZm4pO1xuXHRcdHByb21pc2VbJ2NhdGNoJ10ocmVqZWN0Rm4pO1xuXHR9O1xuXHRtb2R1bGUuZXhwb3J0cyA9IHByb21pc2U7XG5cdGJvZHkoKGRlcHMpID0+IHtcblx0XHRpZighZGVwcykgcmV0dXJuIG91dGVyUmVzb2x2ZSgpO1xuXHRcdGN1cnJlbnREZXBzID0gd3JhcERlcHMoZGVwcyk7XG5cdFx0dmFyIGZuLCByZXN1bHQ7XG5cdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRmbiA9ICgpID0+IChyZXNvbHZlKHJlc3VsdCA9IGN1cnJlbnREZXBzLm1hcCgoZCkgPT4gKGRbd2VicGFja0V4cG9ydHNdKSkpKTtcblx0XHRcdGZuLnIgPSAwO1xuXHRcdFx0d2hlbkFsbChjdXJyZW50RGVwcywgZm4sIHJlamVjdCk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIGZuLnIgPyBwcm9taXNlIDogcmVzdWx0O1xuXHR9KS50aGVuKG91dGVyUmVzb2x2ZSwgcmVqZWN0KTtcblx0aXNFdmFsdWF0aW5nID0gZmFsc2U7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ21vZHVsZScgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=