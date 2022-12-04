/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Teachers.ts":
/*!*************************!*\
  !*** ./src/Teachers.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSETeacher": () => (/* binding */ CSETeacher)
/* harmony export */ });
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class */ "./src/class.ts");

class CSETeacher extends _class__WEBPACK_IMPORTED_MODULE_0__.Teacher {
    constructor(name, age, subject) {
        super(name, age, subject);
        this.subject = subject;
    }
}


/***/ }),

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
/* harmony export */   "Vehicle": () => (/* binding */ Vehicle),
/* harmony export */   "Teacher": () => (/* binding */ Teacher)
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
// Create a Teacher class and a subclass “CSETeacher”. Call Functions of “Teacher” class using object of “CSETeacher” class.
class Teacher {
    constructor(name, age, subject) {
        this.name = name;
        this.age = age;
        this.subject = subject;
    }
    print() {
        console.log(`My name is ${this.name}, I am ${this.age} years old and I teach ${this.subject}`);
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
/* harmony import */ var _Teachers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Teachers */ "./src/Teachers.ts");



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
let sakib2 = new _Teachers__WEBPACK_IMPORTED_MODULE_2__.CSETeacher("Sakib", 35, "CSE");
sakib2.print();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNEO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0Esc0JBQXNCO1dBQ3RCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7Ozs7O1dDckVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL1RlYWNoZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9WZWhpY2xlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9pbnRlcmZhY2UudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvYXN5bmMgbW9kdWxlIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VGVhY2hlcn0gZnJvbSBcIi4vY2xhc3NcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ1NFVGVhY2hlciBleHRlbmRzIFRlYWNoZXIge1xyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBhZ2U6IG51bWJlciwgcHVibGljIHN1YmplY3Q6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKG5hbWUsIGFnZSxzdWJqZWN0KTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiXHJcbi8vIFR3byBjbGFzcyBCaWN5Y2xlIGFuZCBDYXIgaW5oZXJpdCB0aGUgcHJvcGVydGllcyBvZiBWZWhpY2xlIGFuZCBoYXZlIGV4dHJhIHR3byBpbnN0YW5jZSB2YXJpYWJsZSBuYW1lIGFuZCBnZWFyLiBUaGVpciBjb25zdHJ1Y3RvciB3aWxsIHRha2UgdGhlIG5hbWUgYW5kIGdlYXIgdmFsdWUgYXMgaW5wdXQuIERlc2lnbiB0aGUgY2xhc3MgYW5kIHNob3cgdGhlIHN0YXR1cyBvZiB0aGUgdmVoaWNsZSBuYW1lLCBzcGVlZCBhbmQgZ2Vhci5cclxuXHJcbmltcG9ydCB7VmVoaWNsZX0gZnJvbSBcIi4vY2xhc3NcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDYXIgZXh0ZW5kcyBWZWhpY2xlIHtcclxuICAgIGdlYXI6IG51bWJlcjtcclxuICAgIGNvbnN0cnVjdG9yKHNwZWVkOiBudW1iZXIsIHB1YmxpYyBuYW1lOiBzdHJpbmcsIGdlYXI6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKHNwZWVkKTtcclxuICAgICAgICB0aGlzLmdlYXIgPSBnZWFyO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUdlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5nZWFyKys7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpbnRTdGF0dXMoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYE5hbWU6ICR7dGhpcy5uYW1lfSwgU3BlZWQ6ICR7dGhpcy5zcGVlZH0sIEdlYXI6ICR7dGhpcy5nZWFyfWApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEJpY3ljbGUgZXh0ZW5kcyBWZWhpY2xlIHtcclxuICAgIGdlYXI6IG51bWJlcjtcclxuICAgIGNvbnN0cnVjdG9yKHNwZWVkOiBudW1iZXIsIHB1YmxpYyBuYW1lOiBzdHJpbmcsIGdlYXI6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKHNwZWVkKTtcclxuICAgICAgICB0aGlzLmdlYXIgPSBnZWFyO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUdlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5nZWFyKys7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpbnRTdGF0dXMoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYE5hbWU6ICR7dGhpcy5uYW1lfSwgU3BlZWQ6ICR7dGhpcy5zcGVlZH0sIEdlYXI6ICR7dGhpcy5nZWFyfWApO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQge2NOYW1lLCBQZXJzb259IGZyb20gXCIuL2ludGVyZmFjZVwiO1xyXG5cclxuXHJcbmV4cG9ydCAgIGNsYXNzIFBsYXllciBpbXBsZW1lbnRzIFBlcnNvbjxudW1iZXI+e1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgYWdlOiBudW1iZXIsIHByaXZhdGUgcmVhZG9ubHkgY291bnRyeTpjTmFtZSA9IGNOYW1lLkJEKSB7XHJcblxyXG4gICAgfVxyXG4gICAgZ2V0Q291bnRyeSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvdW50cnkgO1xyXG5cclxufVxyXG5cclxuICBwdWJsaWMgY2FsbCgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMubmFtZX0gaXMgYSAgJHt0aGlzLmFnZX0gWWVhcnMgT2xkIEZyb20gJHt0aGlzLmNvdW50cnl9IE5hdGlvbmFsIENyaWNrZXQgVGVhbSBgKVxyXG4gfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuLy9DcmVhdGUgYSBjbGFzcyBWZWhpY2xlIGhhdmluZyBpbnN0YW5jZSB2YXJpYWJsZXMgc3BlZWQsIGFuZCB0d28gbWV0aG9kcyBhcHBseWJyZWFrKCkgYW5kIHNwZWVkdXAoKS4gQ3JlYXRlIGEgY2xhc3MgQ2FyIHdoaWNoIGluaGVyaXRzIHRoZSBWZWhpY2xlIGNsYXNzLiBUaGUgQ2FyIGNsYXNzIGhhcyBhbiBpbnN0YW5jZSB2YXJpYWJsZSBnZWFyLiBUaGUgY2xhc3MgaGFzIHR3byBtZXRob2RzIGNhbGxlZCBjaGFuZ2VHZWFyKCkgYW5kIHByaW50U3RhdGVzKCkuIFRoZSBjaGFuZ2VHZWFyKCkgc2V0cyB0aGUgdmFsdWUgb2YgZ2VhciB0byB0aGUgcGFzc2VkIGFyZ3VtZW50LiBUaGUgcHJpbnRTdGF0ZXMoKSBwcmludHMgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGNhci4gVGhlIHByaW50U3RhdGVzKCkgbWV0aG9kIHRvIGJlIGNhbGxlZCBmcm9tIG1haW4gbWV0aG9kLiBUaGUgY29uc3RydWN0b3Igb2YgVmVoaWNsZSB0YWtlcyBhbiBpbnRlZ2VyIHZhbHVlcyBhbmQgYXNzaWduIGl0IHRvIHNwZWVkIHZhbHVlLiBDYWxsaW5nIGFwcGx5YnJlYWsoKSB3aWxsIGRlY3JlYXNlIHRoZSBzcGVlZCB3aGljaCBpcyBhcHBsaWVkIGFuZCBzcGVlZHVwKCkgd2lsbCBpbmNyZWFzZSB0aGUgc3BlZWQuXHJcblxyXG5leHBvcnQgY2xhc3MgVmVoaWNsZSB7XHJcbiAgICBzcGVlZDogbnVtYmVyO1xyXG4gICAgY29uc3RydWN0b3Ioc3BlZWQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcclxuICAgIH1cclxuXHJcbiAgICBhcHBseUJyZWFrKCkge1xyXG4gICAgICAgIHRoaXMuc3BlZWQgLT0gNTtcclxuICAgIH1cclxuXHJcbiAgICBzcGVlZFVwKCkge1xyXG4gICAgICAgIHRoaXMuc3BlZWQgKz0gNTtcclxuICAgIH1cclxufVxyXG4vLyBUd28gY2xhc3MgQmljeWNsZSBhbmQgQ2FyIGluaGVyaXQgdGhlIHByb3BlcnRpZXMgb2YgVmVoaWNsZSBhbmQgaGF2ZSBleHRyYSB0d28gaW5zdGFuY2UgdmFyaWFibGUgbmFtZSBhbmQgZ2Vhci4gVGhlaXIgY29uc3RydWN0b3Igd2lsbCB0YWtlIHRoZSBuYW1lIGFuZCBnZWFyIHZhbHVlIGFzIGlucHV0LiBEZXNpZ24gdGhlIGNsYXNzIGFuZCBzaG93IHRoZSBzdGF0dXMgb2YgdGhlIHZlaGljbGUgbmFtZSwgc3BlZWQgYW5kIGdlYXIuXHJcblxyXG5jbGFzcyBDYXIgZXh0ZW5kcyBWZWhpY2xlIHtcclxuICAgIGdlYXI6IG51bWJlcjtcclxuICAgIGNvbnN0cnVjdG9yKHNwZWVkOiBudW1iZXIsIHB1YmxpYyBuYW1lOiBzdHJpbmcsIGdlYXI6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKHNwZWVkKTtcclxuICAgICAgICB0aGlzLmdlYXIgPSBnZWFyO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUdlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5nZWFyKys7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpbnRTdGF0dXMoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYE5hbWU6ICR7dGhpcy5uYW1lfSwgU3BlZWQ6ICR7dGhpcy5zcGVlZH0sIEdlYXI6ICR7dGhpcy5nZWFyfWApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBDcmVhdGUgYSBUZWFjaGVyIGNsYXNzIGFuZCBhIHN1YmNsYXNzIOKAnENTRVRlYWNoZXLigJ0uIENhbGwgRnVuY3Rpb25zIG9mIOKAnFRlYWNoZXLigJ0gY2xhc3MgdXNpbmcgb2JqZWN0IG9mIOKAnENTRVRlYWNoZXLigJ0gY2xhc3MuXHJcblxyXG5leHBvcnQgY2xhc3MgVGVhY2hlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgYWdlOiBudW1iZXIsIHB1YmxpYyBzdWJqZWN0OiBzdHJpbmcpIHt9XHJcblxyXG4gICAgcHJpbnQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYE15IG5hbWUgaXMgJHt0aGlzLm5hbWV9LCBJIGFtICR7dGhpcy5hZ2V9IHllYXJzIG9sZCBhbmQgSSB0ZWFjaCAke3RoaXMuc3ViamVjdH1gKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiIsImltcG9ydCB7UGxheWVyfSBmcm9tIFwiLi9jbGFzc1wiO1xyXG5pbXBvcnQge0JpY3ljbGUsIENhcn0gZnJvbSBcIi4vVmVoaWNsZXNcIjtcclxuaW1wb3J0IHtDU0VUZWFjaGVyfSBmcm9tIFwiLi9UZWFjaGVyc1wiO1xyXG5cclxuY29uc3Qgc2FraWIgPSBuZXcgUGxheWVyKFwiU2FraWJcIiwgMzUpO1xyXG5zYWtpYi5jYWxsKCk7XHJcblxyXG4vLyBnZW5lcmljc1xyXG4gY29uc3QgIG9ialRlbXAgPSAgPFQ+KG9iajogVCk9PntcclxuICAgIC8vIGdlbmFyYXRlIHJhbmRvbSBpZFxyXG4gICAgY29uc3QgaWQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE2KTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaWQsXHJcbiAgICAgICAgLi4ub2JqXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG9iajIgPSBvYmpUZW1wPHN0cmluZz4oXCJIZWxsbyBXb3JsZFwiKTtcclxuY29uc3Qgb2JqMyA9IG9ialRlbXA8bnVtYmVyPigxKTtcclxuXHJcbmNvbnNvbGUubG9nKG9iajIpO1xyXG5cclxuIC8vIGNyZWF0ZSAgdXNlciBpbnRlcmZhY2UgYW5kIGdldCB1c2VycyBmcm9tIGFwaVxyXG4gaW50ZXJmYWNlICBVc2VyIHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgcGhvbmU6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgZ2V0VXNlcnMgPSBhc3luYyAoKTogUHJvbWlzZTxVc2VyW10+ID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gIGF3YWl0ICBmZXRjaChcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vyc1wiKTtcclxuICAgIHJldHVybiAgYXdhaXQgIHJlc3BvbnNlLmpzb24oKTtcclxufVxyXG5cclxuLy8gY3JlYXRlIGEgZnVuY3Rpb24gZm9yIGdldCB1c2VycyBhbmQgcHJpbnQgdGhlbVxyXG5cclxuICAgIGNvbnN0IHVzZXJzID0gIGF3YWl0ICBnZXRVc2VycygpO1xyXG4gICAgdXNlcnMuZm9yRWFjaCh1c2VyID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyLm5hbWUpO1xyXG4gICAgfVxyXG4gICAgKVxyXG5cclxuXHJcbiAvLyBjcmVhdGUgbmV3IGNhclxyXG5cclxubGV0IGJtdyA9IG5ldyBDYXIoMTAwLCBcIkJNV1wiLCA1KTtcclxubGV0IGR1cm9udG8gPSBuZXcgQmljeWNsZSgxMDAsIFwiRHVyb250b1wiLCA1KTtcclxuXHJcbmJtdy5wcmludFN0YXR1cygpO1xyXG5kdXJvbnRvLnByaW50U3RhdHVzKCk7XHJcbmxldCBzYWtpYjIgPSBuZXcgQ1NFVGVhY2hlcihcIlNha2liXCIsIDM1LCBcIkNTRVwiKTtcclxuc2FraWIyLnByaW50KCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiZXhwb3J0IGludGVyZmFjZSBJbWFnZU9wdGlvbiB7XHJcbiAgICB3ZWlnaHQ6IHN0cmluZyxcclxuICAgIGhlaWdodDogc3RyaW5nLFxyXG4gICAgc3JjOiBzdHJpbmcsXHJcbiAgICBhbHQ6IHN0cmluZ1xyXG59XHJcblxyXG4vLyBpbnRlcmZhY2Ugd2l0aCBHZW5lcmljc1xyXG5leHBvcnQgaW50ZXJmYWNlIFBlcnNvbjxUIGV4dGVuZHMgbnVtYmVyPiB7XHJcbiAgICBuYW1lOiBzdHJpbmdcclxuICAgIGFnZTogVFxyXG5cclxuICAgIGNhbGwoKTogdm9pZFxyXG5cclxuICAgIGdldENvdW50cnkoKTogc3RyaW5nXHJcbn1cclxuXHJcbi8vIGVudW1cclxuZXhwb3J0IGVudW0gY05hbWUge1xyXG4gICAgQkQgPSBcIkJhbmdsYWRlc2hcIixcclxuICAgIElOID0gXCJJbmRpYW5cIixcclxuICAgIFBLID0gXCJQYWtpc3RhblwiXHJcbn1cclxuXHJcbnR5cGUgQ291bnRlclVwID0gKHN0cmluZyB8IEhUTUxDb2xsZWN0aW9uKVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb3VudGVyVXBPcHRpb25zIHtcclxuICAgIGM6IENvdW50ZXJVcCxcclxuICAgIHQ6IG51bWJlclxyXG59XHJcblxyXG50eXBlIE51bWJlciA9ICggbnVtYmVyIHwgYmlnaW50KVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBvYmplY3RBY2N1bXVsYXRpb24ge1xyXG4gICAgW2N1cnI6IHN0cmluZ106IE51bWJlciA7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgYXJyYXlBY2N1bXVsYXRpb24gZXh0ZW5kcyBBcnJheTxzdHJpbmc+IHtcclxufVxyXG5cclxuIC8vY3JldGUgYSBmdW5jdGlvbiBpbnRlcmZhY2VcclxuZXhwb3J0IGludGVyZmFjZSBtYXBDYWxsQmFjayB7XHJcbiAgICAodjogYW55LCBpOiBudW1iZXIsYXJyOmFueVtdKTogYW55fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBhcnJheU9mT2JqZWN0IGV4dGVuZHMgQXJyYXk8e1tjdXJyOnN0cmluZ106YW55fT4ge1xyXG5cclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIG9iamVjdE9mT2JqZWN0IGV4dGVuZHMgT2JqZWN0IHtcclxuICAgIFtjdXJyOiBzdHJpbmddOiBhbnlcclxuXHJcbiB9XHJcblxyXG5cclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJ2YXIgd2VicGFja1RoZW4gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIHRoZW5cIikgOiBcIl9fd2VicGFja190aGVuX19cIjtcbnZhciB3ZWJwYWNrRXhwb3J0cyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbChcIndlYnBhY2sgZXhwb3J0c1wiKSA6IFwiX193ZWJwYWNrX2V4cG9ydHNfX1wiO1xudmFyIGNvbXBsZXRlUXVldWUgPSAocXVldWUpID0+IHtcblx0aWYocXVldWUpIHtcblx0XHRxdWV1ZS5mb3JFYWNoKChmbikgPT4gKGZuLnItLSkpO1xuXHRcdHF1ZXVlLmZvckVhY2goKGZuKSA9PiAoZm4uci0tID8gZm4ucisrIDogZm4oKSkpO1xuXHR9XG59XG52YXIgY29tcGxldGVGdW5jdGlvbiA9IChmbikgPT4gKCEtLWZuLnIgJiYgZm4oKSk7XG52YXIgcXVldWVGdW5jdGlvbiA9IChxdWV1ZSwgZm4pID0+IChxdWV1ZSA/IHF1ZXVlLnB1c2goZm4pIDogY29tcGxldGVGdW5jdGlvbihmbikpO1xudmFyIHdyYXBEZXBzID0gKGRlcHMpID0+IChkZXBzLm1hcCgoZGVwKSA9PiB7XG5cdGlmKGRlcCAhPT0gbnVsbCAmJiB0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKSB7XG5cdFx0aWYoZGVwW3dlYnBhY2tUaGVuXSkgcmV0dXJuIGRlcDtcblx0XHRpZihkZXAudGhlbikge1xuXHRcdFx0dmFyIHF1ZXVlID0gW107XG5cdFx0XHRkZXAudGhlbigocikgPT4ge1xuXHRcdFx0XHRvYmpbd2VicGFja0V4cG9ydHNdID0gcjtcblx0XHRcdFx0Y29tcGxldGVRdWV1ZShxdWV1ZSk7XG5cdFx0XHRcdHF1ZXVlID0gMDtcblx0XHRcdH0pO1xuXHRcdFx0dmFyIG9iaiA9IHt9O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRvYmpbd2VicGFja1RoZW5dID0gKGZuLCByZWplY3QpID0+IChxdWV1ZUZ1bmN0aW9uKHF1ZXVlLCBmbiksIGRlcFsnY2F0Y2gnXShyZWplY3QpKTtcblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fVxuXHR9XG5cdHZhciByZXQgPSB7fTtcblx0XHRcdFx0XHRcdHJldFt3ZWJwYWNrVGhlbl0gPSAoZm4pID0+IChjb21wbGV0ZUZ1bmN0aW9uKGZuKSk7XG5cdFx0XHRcdFx0XHRyZXRbd2VicGFja0V4cG9ydHNdID0gZGVwO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHJldDtcbn0pKTtcbl9fd2VicGFja19yZXF1aXJlX18uYSA9IChtb2R1bGUsIGJvZHksIGhhc0F3YWl0KSA9PiB7XG5cdHZhciBxdWV1ZSA9IGhhc0F3YWl0ICYmIFtdO1xuXHR2YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzO1xuXHR2YXIgY3VycmVudERlcHM7XG5cdHZhciBvdXRlclJlc29sdmU7XG5cdHZhciByZWplY3Q7XG5cdHZhciBpc0V2YWx1YXRpbmcgPSB0cnVlO1xuXHR2YXIgbmVzdGVkID0gZmFsc2U7XG5cdHZhciB3aGVuQWxsID0gKGRlcHMsIG9uUmVzb2x2ZSwgb25SZWplY3QpID0+IHtcblx0XHRpZiAobmVzdGVkKSByZXR1cm47XG5cdFx0bmVzdGVkID0gdHJ1ZTtcblx0XHRvblJlc29sdmUuciArPSBkZXBzLmxlbmd0aDtcblx0XHRkZXBzLm1hcCgoZGVwLCBpKSA9PiAoZGVwW3dlYnBhY2tUaGVuXShvblJlc29sdmUsIG9uUmVqZWN0KSkpO1xuXHRcdG5lc3RlZCA9IGZhbHNlO1xuXHR9O1xuXHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWopID0+IHtcblx0XHRyZWplY3QgPSByZWo7XG5cdFx0b3V0ZXJSZXNvbHZlID0gKCkgPT4gKHJlc29sdmUoZXhwb3J0cyksIGNvbXBsZXRlUXVldWUocXVldWUpLCBxdWV1ZSA9IDApO1xuXHR9KTtcblx0cHJvbWlzZVt3ZWJwYWNrRXhwb3J0c10gPSBleHBvcnRzO1xuXHRwcm9taXNlW3dlYnBhY2tUaGVuXSA9IChmbiwgcmVqZWN0Rm4pID0+IHtcblx0XHRpZiAoaXNFdmFsdWF0aW5nKSB7IHJldHVybiBjb21wbGV0ZUZ1bmN0aW9uKGZuKTsgfVxuXHRcdGlmIChjdXJyZW50RGVwcykgd2hlbkFsbChjdXJyZW50RGVwcywgZm4sIHJlamVjdEZuKTtcblx0XHRxdWV1ZUZ1bmN0aW9uKHF1ZXVlLCBmbik7XG5cdFx0cHJvbWlzZVsnY2F0Y2gnXShyZWplY3RGbik7XG5cdH07XG5cdG1vZHVsZS5leHBvcnRzID0gcHJvbWlzZTtcblx0Ym9keSgoZGVwcykgPT4ge1xuXHRcdGlmKCFkZXBzKSByZXR1cm4gb3V0ZXJSZXNvbHZlKCk7XG5cdFx0Y3VycmVudERlcHMgPSB3cmFwRGVwcyhkZXBzKTtcblx0XHR2YXIgZm4sIHJlc3VsdDtcblx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdGZuID0gKCkgPT4gKHJlc29sdmUocmVzdWx0ID0gY3VycmVudERlcHMubWFwKChkKSA9PiAoZFt3ZWJwYWNrRXhwb3J0c10pKSkpO1xuXHRcdFx0Zm4uciA9IDA7XG5cdFx0XHR3aGVuQWxsKGN1cnJlbnREZXBzLCBmbiwgcmVqZWN0KTtcblx0XHR9KTtcblx0XHRyZXR1cm4gZm4uciA/IHByb21pc2UgOiByZXN1bHQ7XG5cdH0pLnRoZW4ob3V0ZXJSZXNvbHZlLCByZWplY3QpO1xuXHRpc0V2YWx1YXRpbmcgPSBmYWxzZTtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnbW9kdWxlJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==