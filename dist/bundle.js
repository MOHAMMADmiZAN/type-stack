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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFnQztBQUd6QixNQUFNLFVBQVcsU0FBUSwyQ0FBTztJQUNuQyxZQUFZLElBQVksRUFBRSxHQUFXLEVBQVMsT0FBZTtRQUN6RCxLQUFLLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBQyxPQUFPLENBQUMsQ0FBQztRQURpQixZQUFPLEdBQVAsT0FBTyxDQUFRO0lBRTdELENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNORCwwUEFBMFA7QUFFMU47QUFFekIsTUFBTSxHQUFJLFNBQVEsMkNBQU87SUFFNUIsWUFBWSxLQUFhLEVBQVMsSUFBWSxFQUFFLElBQVk7UUFDeEQsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRGlCLFNBQUksR0FBSixJQUFJLENBQVE7UUFFMUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVELFVBQVU7UUFDTixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELFdBQVc7UUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksWUFBWSxJQUFJLENBQUMsS0FBSyxXQUFXLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7Q0FDSjtBQUdNLE1BQU0sT0FBUSxTQUFRLDJDQUFPO0lBRWhDLFlBQVksS0FBYSxFQUFTLElBQVksRUFBRSxJQUFZO1FBQ3hELEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQURpQixTQUFJLEdBQUosSUFBSSxDQUFRO1FBRTFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxVQUFVO1FBQ04sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxXQUFXO1FBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLFlBQVksSUFBSSxDQUFDLEtBQUssV0FBVyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNoRixDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDeUM7QUFHbkMsTUFBUSxNQUFNO0lBR2pCLFlBQW1CLElBQVksRUFBUyxHQUFXLEVBQW1CLFVBQWdCLGdEQUFRO1FBQTNFLFNBQUksR0FBSixJQUFJLENBQVE7UUFBUyxRQUFHLEdBQUgsR0FBRyxDQUFRO1FBQW1CLFlBQU8sR0FBUCxPQUFPLENBQWlCO0lBRTlGLENBQUM7SUFDRCxVQUFVO1FBQ04sT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFFO0lBRTdCLENBQUM7SUFFUSxJQUFJO1FBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLFVBQVUsSUFBSSxDQUFDLEdBQUcsbUJBQW1CLElBQUksQ0FBQyxPQUFPLHlCQUF5QixDQUFDO0lBQzFHLENBQUM7Q0FFRDtBQUtELDZtQkFBNm1CO0FBRXRtQixNQUFNLE9BQU87SUFFaEIsWUFBWSxLQUFhO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxVQUFVO1FBQ04sSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVELE9BQU87UUFDSCxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztJQUNwQixDQUFDO0NBQ0o7QUFDRCw0SEFBNEg7QUFFckgsTUFBTSxPQUFPO0lBQ2hCLFlBQW1CLElBQVksRUFBUyxHQUFXLEVBQVMsT0FBZTtRQUF4RCxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVMsUUFBRyxHQUFILEdBQUcsQ0FBUTtRQUFTLFlBQU8sR0FBUCxPQUFPLENBQVE7SUFBRyxDQUFDO0lBRS9FLEtBQUs7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsSUFBSSxDQUFDLElBQUksVUFBVSxJQUFJLENBQUMsR0FBRywwQkFBMEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDbkcsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0M4QjtBQUNTO0FBQ0Y7QUFFdEMsTUFBTSxLQUFLLEdBQUcsSUFBSSwwQ0FBTSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN0QyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7QUFFYixXQUFXO0FBQ1YsTUFBTyxPQUFPLEdBQUksQ0FBSSxHQUFNLEVBQUMsRUFBRTtJQUM1QixxQkFBcUI7SUFDckIsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN0Qyx1QkFDSSxFQUFFLElBQ0MsR0FBRyxFQUNUO0FBQ0wsQ0FBQztBQUVELE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBUyxhQUFhLENBQUMsQ0FBQztBQUM1QyxNQUFNLElBQUksR0FBRyxPQUFPLENBQVMsQ0FBQyxDQUFDLENBQUM7QUFFaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQVVsQixNQUFNLFFBQVEsR0FBRyxLQUFLLElBQXFCLEVBQUU7SUFDekMsTUFBTSxRQUFRLEdBQUksTUFBTyxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQztJQUM3RSxPQUFRLE1BQU8sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ25DLENBQUM7QUFFRCxpREFBaUQ7QUFFN0MsTUFBTSxLQUFLLEdBQUksTUFBTyxRQUFRLEVBQUUsQ0FBQztBQUNqQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO0lBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzNCLENBQUMsQ0FDQTtBQUdKLGlCQUFpQjtBQUVsQixJQUFJLEdBQUcsR0FBRyxJQUFJLDBDQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNqQyxJQUFJLE9BQU8sR0FBRyxJQUFJLDhDQUFPLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUU3QyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDbEIsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ3RCLElBQUksTUFBTSxHQUFHLElBQUksaURBQVUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2hELE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ2YsT0FBTztBQUNQLElBQVksS0FJWDtBQUpELFdBQVksS0FBSztJQUNiLDBCQUFpQjtJQUNqQixzQkFBYTtJQUNiLHdCQUFlO0FBQ25CLENBQUMsRUFKVyxLQUFLLEtBQUwsS0FBSyxRQUloQjs7Ozs7OztVQ3RCRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLElBQUk7V0FDSjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxDQUFDO1dBQ0Q7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQSxzQkFBc0I7V0FDdEI7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQSxFQUFFO1dBQ0Y7V0FDQTs7Ozs7V0NyRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvVGVhY2hlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1ZlaGljbGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVyZmFjZS50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9hc3luYyBtb2R1bGUiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUZWFjaGVyfSBmcm9tIFwiLi9jbGFzc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDU0VUZWFjaGVyIGV4dGVuZHMgVGVhY2hlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGFnZTogbnVtYmVyLCBwdWJsaWMgc3ViamVjdDogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSwgYWdlLHN1YmplY3QpO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJcclxuLy8gVHdvIGNsYXNzIEJpY3ljbGUgYW5kIENhciBpbmhlcml0IHRoZSBwcm9wZXJ0aWVzIG9mIFZlaGljbGUgYW5kIGhhdmUgZXh0cmEgdHdvIGluc3RhbmNlIHZhcmlhYmxlIG5hbWUgYW5kIGdlYXIuIFRoZWlyIGNvbnN0cnVjdG9yIHdpbGwgdGFrZSB0aGUgbmFtZSBhbmQgZ2VhciB2YWx1ZSBhcyBpbnB1dC4gRGVzaWduIHRoZSBjbGFzcyBhbmQgc2hvdyB0aGUgc3RhdHVzIG9mIHRoZSB2ZWhpY2xlIG5hbWUsIHNwZWVkIGFuZCBnZWFyLlxyXG5cclxuaW1wb3J0IHtWZWhpY2xlfSBmcm9tIFwiLi9jbGFzc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhciBleHRlbmRzIFZlaGljbGUge1xyXG4gICAgZ2VhcjogbnVtYmVyO1xyXG4gICAgY29uc3RydWN0b3Ioc3BlZWQ6IG51bWJlciwgcHVibGljIG5hbWU6IHN0cmluZywgZ2VhcjogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoc3BlZWQpO1xyXG4gICAgICAgIHRoaXMuZ2VhciA9IGdlYXI7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlR2VhcigpIHtcclxuICAgICAgICB0aGlzLmdlYXIrKztcclxuICAgIH1cclxuXHJcbiAgICBwcmludFN0YXR1cygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgTmFtZTogJHt0aGlzLm5hbWV9LCBTcGVlZDogJHt0aGlzLnNwZWVkfSwgR2VhcjogJHt0aGlzLmdlYXJ9YCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQmljeWNsZSBleHRlbmRzIFZlaGljbGUge1xyXG4gICAgZ2VhcjogbnVtYmVyO1xyXG4gICAgY29uc3RydWN0b3Ioc3BlZWQ6IG51bWJlciwgcHVibGljIG5hbWU6IHN0cmluZywgZ2VhcjogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoc3BlZWQpO1xyXG4gICAgICAgIHRoaXMuZ2VhciA9IGdlYXI7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlR2VhcigpIHtcclxuICAgICAgICB0aGlzLmdlYXIrKztcclxuICAgIH1cclxuXHJcbiAgICBwcmludFN0YXR1cygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgTmFtZTogJHt0aGlzLm5hbWV9LCBTcGVlZDogJHt0aGlzLnNwZWVkfSwgR2VhcjogJHt0aGlzLmdlYXJ9YCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7Y05hbWUsIFBlcnNvbn0gZnJvbSBcIi4vaW50ZXJmYWNlXCI7XHJcblxyXG5cclxuZXhwb3J0ICAgY2xhc3MgUGxheWVyIGltcGxlbWVudHMgUGVyc29uPG51bWJlcj57XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyBhZ2U6IG51bWJlciwgcHJpdmF0ZSByZWFkb25seSBjb3VudHJ5OmNOYW1lID0gY05hbWUuQkQpIHtcclxuXHJcbiAgICB9XHJcbiAgICBnZXRDb3VudHJ5KCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY291bnRyeSA7XHJcblxyXG59XHJcblxyXG4gIHB1YmxpYyBjYWxsKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5uYW1lfSBpcyBhICAke3RoaXMuYWdlfSBZZWFycyBPbGQgRnJvbSAke3RoaXMuY291bnRyeX0gTmF0aW9uYWwgQ3JpY2tldCBUZWFtIGApXHJcbiB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG4vL0NyZWF0ZSBhIGNsYXNzIFZlaGljbGUgaGF2aW5nIGluc3RhbmNlIHZhcmlhYmxlcyBzcGVlZCwgYW5kIHR3byBtZXRob2RzIGFwcGx5YnJlYWsoKSBhbmQgc3BlZWR1cCgpLiBDcmVhdGUgYSBjbGFzcyBDYXIgd2hpY2ggaW5oZXJpdHMgdGhlIFZlaGljbGUgY2xhc3MuIFRoZSBDYXIgY2xhc3MgaGFzIGFuIGluc3RhbmNlIHZhcmlhYmxlIGdlYXIuIFRoZSBjbGFzcyBoYXMgdHdvIG1ldGhvZHMgY2FsbGVkIGNoYW5nZUdlYXIoKSBhbmQgcHJpbnRTdGF0ZXMoKS4gVGhlIGNoYW5nZUdlYXIoKSBzZXRzIHRoZSB2YWx1ZSBvZiBnZWFyIHRvIHRoZSBwYXNzZWQgYXJndW1lbnQuIFRoZSBwcmludFN0YXRlcygpIHByaW50cyB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgY2FyLiBUaGUgcHJpbnRTdGF0ZXMoKSBtZXRob2QgdG8gYmUgY2FsbGVkIGZyb20gbWFpbiBtZXRob2QuIFRoZSBjb25zdHJ1Y3RvciBvZiBWZWhpY2xlIHRha2VzIGFuIGludGVnZXIgdmFsdWVzIGFuZCBhc3NpZ24gaXQgdG8gc3BlZWQgdmFsdWUuIENhbGxpbmcgYXBwbHlicmVhaygpIHdpbGwgZGVjcmVhc2UgdGhlIHNwZWVkIHdoaWNoIGlzIGFwcGxpZWQgYW5kIHNwZWVkdXAoKSB3aWxsIGluY3JlYXNlIHRoZSBzcGVlZC5cclxuXHJcbmV4cG9ydCBjbGFzcyBWZWhpY2xlIHtcclxuICAgIHNwZWVkOiBudW1iZXI7XHJcbiAgICBjb25zdHJ1Y3RvcihzcGVlZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xyXG4gICAgfVxyXG5cclxuICAgIGFwcGx5QnJlYWsoKSB7XHJcbiAgICAgICAgdGhpcy5zcGVlZCAtPSA1O1xyXG4gICAgfVxyXG5cclxuICAgIHNwZWVkVXAoKSB7XHJcbiAgICAgICAgdGhpcy5zcGVlZCArPSA1O1xyXG4gICAgfVxyXG59XHJcbi8vIENyZWF0ZSBhIFRlYWNoZXIgY2xhc3MgYW5kIGEgc3ViY2xhc3Mg4oCcQ1NFVGVhY2hlcuKAnS4gQ2FsbCBGdW5jdGlvbnMgb2Yg4oCcVGVhY2hlcuKAnSBjbGFzcyB1c2luZyBvYmplY3Qgb2Yg4oCcQ1NFVGVhY2hlcuKAnSBjbGFzcy5cclxuXHJcbmV4cG9ydCBjbGFzcyBUZWFjaGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyBhZ2U6IG51bWJlciwgcHVibGljIHN1YmplY3Q6IHN0cmluZykge31cclxuXHJcbiAgICBwcmludCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgTXkgbmFtZSBpcyAke3RoaXMubmFtZX0sIEkgYW0gJHt0aGlzLmFnZX0geWVhcnMgb2xkIGFuZCBJIHRlYWNoICR7dGhpcy5zdWJqZWN0fWApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IHtQbGF5ZXJ9IGZyb20gXCIuL2NsYXNzXCI7XHJcbmltcG9ydCB7QmljeWNsZSwgQ2FyfSBmcm9tIFwiLi9WZWhpY2xlc1wiO1xyXG5pbXBvcnQge0NTRVRlYWNoZXJ9IGZyb20gXCIuL1RlYWNoZXJzXCI7XHJcblxyXG5jb25zdCBzYWtpYiA9IG5ldyBQbGF5ZXIoXCJTYWtpYlwiLCAzNSk7XHJcbnNha2liLmNhbGwoKTtcclxuXHJcbi8vIGdlbmVyaWNzXHJcbiBjb25zdCAgb2JqVGVtcCA9ICA8VD4ob2JqOiBUKT0+e1xyXG4gICAgLy8gZ2VuYXJhdGUgcmFuZG9tIGlkXHJcbiAgICBjb25zdCBpZCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpZCxcclxuICAgICAgICAuLi5vYmpcclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgb2JqMiA9IG9ialRlbXA8c3RyaW5nPihcIkhlbGxvIFdvcmxkXCIpO1xyXG5jb25zdCBvYmozID0gb2JqVGVtcDxudW1iZXI+KDEpO1xyXG5cclxuY29uc29sZS5sb2cob2JqMik7XHJcblxyXG4gLy8gY3JlYXRlICB1c2VyIGludGVyZmFjZSBhbmQgZ2V0IHVzZXJzIGZyb20gYXBpXHJcbiBpbnRlcmZhY2UgIFVzZXIge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGVtYWlsOiBzdHJpbmc7XHJcbiAgICBwaG9uZTogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBnZXRVc2VycyA9IGFzeW5jICgpOiBQcm9taXNlPFVzZXJbXT4gPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSAgYXdhaXQgIGZldGNoKFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzXCIpO1xyXG4gICAgcmV0dXJuICBhd2FpdCAgcmVzcG9uc2UuanNvbigpO1xyXG59XHJcblxyXG4vLyBjcmVhdGUgYSBmdW5jdGlvbiBmb3IgZ2V0IHVzZXJzIGFuZCBwcmludCB0aGVtXHJcblxyXG4gICAgY29uc3QgdXNlcnMgPSAgYXdhaXQgIGdldFVzZXJzKCk7XHJcbiAgICB1c2Vycy5mb3JFYWNoKHVzZXIgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXIubmFtZSk7XHJcbiAgICB9XHJcbiAgICApXHJcblxyXG5cclxuIC8vIGNyZWF0ZSBuZXcgY2FyXHJcblxyXG5sZXQgYm13ID0gbmV3IENhcigxMDAsIFwiQk1XXCIsIDUpO1xyXG5sZXQgZHVyb250byA9IG5ldyBCaWN5Y2xlKDEwMCwgXCJEdXJvbnRvXCIsIDUpO1xyXG5cclxuYm13LnByaW50U3RhdHVzKCk7XHJcbmR1cm9udG8ucHJpbnRTdGF0dXMoKTtcclxubGV0IHNha2liMiA9IG5ldyBDU0VUZWFjaGVyKFwiU2FraWJcIiwgMzUsIFwiQ1NFXCIpO1xyXG5zYWtpYjIucHJpbnQoKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJleHBvcnQgaW50ZXJmYWNlIEltYWdlT3B0aW9uIHtcclxuICAgIHdlaWdodDogc3RyaW5nLFxyXG4gICAgaGVpZ2h0OiBzdHJpbmcsXHJcbiAgICBzcmM6IHN0cmluZyxcclxuICAgIGFsdDogc3RyaW5nXHJcbn1cclxuXHJcbi8vIGludGVyZmFjZSB3aXRoIEdlbmVyaWNzXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGVyc29uPFQgZXh0ZW5kcyBudW1iZXI+IHtcclxuICAgIG5hbWU6IHN0cmluZ1xyXG4gICAgYWdlOiBUXHJcblxyXG4gICAgY2FsbCgpOiB2b2lkXHJcblxyXG4gICAgZ2V0Q291bnRyeSgpOiBzdHJpbmdcclxufVxyXG5cclxuLy8gZW51bVxyXG5leHBvcnQgZW51bSBjTmFtZSB7XHJcbiAgICBCRCA9IFwiQmFuZ2xhZGVzaFwiLFxyXG4gICAgSU4gPSBcIkluZGlhblwiLFxyXG4gICAgUEsgPSBcIlBha2lzdGFuXCJcclxufVxyXG5cclxudHlwZSBDb3VudGVyVXAgPSAoc3RyaW5nIHwgSFRNTENvbGxlY3Rpb24pXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvdW50ZXJVcE9wdGlvbnMge1xyXG4gICAgYzogQ291bnRlclVwLFxyXG4gICAgdDogbnVtYmVyXHJcbn1cclxuXHJcbnR5cGUgTnVtYmVyID0gKCBudW1iZXIgfCBiaWdpbnQpXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIG9iamVjdEFjY3VtdWxhdGlvbiB7XHJcbiAgICBbY3Vycjogc3RyaW5nXTogTnVtYmVyIDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBhcnJheUFjY3VtdWxhdGlvbiBleHRlbmRzIEFycmF5PHN0cmluZz4ge1xyXG59XHJcblxyXG4gLy9jcmV0ZSBhIGZ1bmN0aW9uIGludGVyZmFjZVxyXG5leHBvcnQgaW50ZXJmYWNlIG1hcENhbGxCYWNrIHtcclxuICAgICh2OiBhbnksIGk6IG51bWJlcixhcnI6YW55W10pOiBhbnl9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGFycmF5T2ZPYmplY3QgZXh0ZW5kcyBBcnJheTx7W2N1cnI6c3RyaW5nXTphbnl9PiB7XHJcblxyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2Ugb2JqZWN0T2ZPYmplY3QgZXh0ZW5kcyBPYmplY3Qge1xyXG4gICAgW2N1cnI6IHN0cmluZ106IGFueVxyXG5cclxuIH1cclxuXHJcblxyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsInZhciB3ZWJwYWNrVGhlbiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbChcIndlYnBhY2sgdGhlblwiKSA6IFwiX193ZWJwYWNrX3RoZW5fX1wiO1xudmFyIHdlYnBhY2tFeHBvcnRzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayBleHBvcnRzXCIpIDogXCJfX3dlYnBhY2tfZXhwb3J0c19fXCI7XG52YXIgY29tcGxldGVRdWV1ZSA9IChxdWV1ZSkgPT4ge1xuXHRpZihxdWV1ZSkge1xuXHRcdHF1ZXVlLmZvckVhY2goKGZuKSA9PiAoZm4uci0tKSk7XG5cdFx0cXVldWUuZm9yRWFjaCgoZm4pID0+IChmbi5yLS0gPyBmbi5yKysgOiBmbigpKSk7XG5cdH1cbn1cbnZhciBjb21wbGV0ZUZ1bmN0aW9uID0gKGZuKSA9PiAoIS0tZm4uciAmJiBmbigpKTtcbnZhciBxdWV1ZUZ1bmN0aW9uID0gKHF1ZXVlLCBmbikgPT4gKHF1ZXVlID8gcXVldWUucHVzaChmbikgOiBjb21wbGV0ZUZ1bmN0aW9uKGZuKSk7XG52YXIgd3JhcERlcHMgPSAoZGVwcykgPT4gKGRlcHMubWFwKChkZXApID0+IHtcblx0aWYoZGVwICE9PSBudWxsICYmIHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpIHtcblx0XHRpZihkZXBbd2VicGFja1RoZW5dKSByZXR1cm4gZGVwO1xuXHRcdGlmKGRlcC50aGVuKSB7XG5cdFx0XHR2YXIgcXVldWUgPSBbXTtcblx0XHRcdGRlcC50aGVuKChyKSA9PiB7XG5cdFx0XHRcdG9ialt3ZWJwYWNrRXhwb3J0c10gPSByO1xuXHRcdFx0XHRjb21wbGV0ZVF1ZXVlKHF1ZXVlKTtcblx0XHRcdFx0cXVldWUgPSAwO1xuXHRcdFx0fSk7XG5cdFx0XHR2YXIgb2JqID0ge307XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9ialt3ZWJwYWNrVGhlbl0gPSAoZm4sIHJlamVjdCkgPT4gKHF1ZXVlRnVuY3Rpb24ocXVldWUsIGZuKSwgZGVwWydjYXRjaCddKHJlamVjdCkpO1xuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9XG5cdH1cblx0dmFyIHJldCA9IHt9O1xuXHRcdFx0XHRcdFx0cmV0W3dlYnBhY2tUaGVuXSA9IChmbikgPT4gKGNvbXBsZXRlRnVuY3Rpb24oZm4pKTtcblx0XHRcdFx0XHRcdHJldFt3ZWJwYWNrRXhwb3J0c10gPSBkZXA7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcmV0O1xufSkpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5hID0gKG1vZHVsZSwgYm9keSwgaGFzQXdhaXQpID0+IHtcblx0dmFyIHF1ZXVlID0gaGFzQXdhaXQgJiYgW107XG5cdHZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHM7XG5cdHZhciBjdXJyZW50RGVwcztcblx0dmFyIG91dGVyUmVzb2x2ZTtcblx0dmFyIHJlamVjdDtcblx0dmFyIGlzRXZhbHVhdGluZyA9IHRydWU7XG5cdHZhciBuZXN0ZWQgPSBmYWxzZTtcblx0dmFyIHdoZW5BbGwgPSAoZGVwcywgb25SZXNvbHZlLCBvblJlamVjdCkgPT4ge1xuXHRcdGlmIChuZXN0ZWQpIHJldHVybjtcblx0XHRuZXN0ZWQgPSB0cnVlO1xuXHRcdG9uUmVzb2x2ZS5yICs9IGRlcHMubGVuZ3RoO1xuXHRcdGRlcHMubWFwKChkZXAsIGkpID0+IChkZXBbd2VicGFja1RoZW5dKG9uUmVzb2x2ZSwgb25SZWplY3QpKSk7XG5cdFx0bmVzdGVkID0gZmFsc2U7XG5cdH07XG5cdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlaikgPT4ge1xuXHRcdHJlamVjdCA9IHJlajtcblx0XHRvdXRlclJlc29sdmUgPSAoKSA9PiAocmVzb2x2ZShleHBvcnRzKSwgY29tcGxldGVRdWV1ZShxdWV1ZSksIHF1ZXVlID0gMCk7XG5cdH0pO1xuXHRwcm9taXNlW3dlYnBhY2tFeHBvcnRzXSA9IGV4cG9ydHM7XG5cdHByb21pc2Vbd2VicGFja1RoZW5dID0gKGZuLCByZWplY3RGbikgPT4ge1xuXHRcdGlmIChpc0V2YWx1YXRpbmcpIHsgcmV0dXJuIGNvbXBsZXRlRnVuY3Rpb24oZm4pOyB9XG5cdFx0aWYgKGN1cnJlbnREZXBzKSB3aGVuQWxsKGN1cnJlbnREZXBzLCBmbiwgcmVqZWN0Rm4pO1xuXHRcdHF1ZXVlRnVuY3Rpb24ocXVldWUsIGZuKTtcblx0XHRwcm9taXNlWydjYXRjaCddKHJlamVjdEZuKTtcblx0fTtcblx0bW9kdWxlLmV4cG9ydHMgPSBwcm9taXNlO1xuXHRib2R5KChkZXBzKSA9PiB7XG5cdFx0aWYoIWRlcHMpIHJldHVybiBvdXRlclJlc29sdmUoKTtcblx0XHRjdXJyZW50RGVwcyA9IHdyYXBEZXBzKGRlcHMpO1xuXHRcdHZhciBmbiwgcmVzdWx0O1xuXHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0Zm4gPSAoKSA9PiAocmVzb2x2ZShyZXN1bHQgPSBjdXJyZW50RGVwcy5tYXAoKGQpID0+IChkW3dlYnBhY2tFeHBvcnRzXSkpKSk7XG5cdFx0XHRmbi5yID0gMDtcblx0XHRcdHdoZW5BbGwoY3VycmVudERlcHMsIGZuLCByZWplY3QpO1xuXHRcdH0pO1xuXHRcdHJldHVybiBmbi5yID8gcHJvbWlzZSA6IHJlc3VsdDtcblx0fSkudGhlbihvdXRlclJlc29sdmUsIHJlamVjdCk7XG5cdGlzRXZhbHVhdGluZyA9IGZhbHNlO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdtb2R1bGUnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9