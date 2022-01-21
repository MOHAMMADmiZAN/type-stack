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
let ho = document.getElementsByClassName('ho');
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
    let box = document.getElementById('box_c');
    let width = box.style.width.split('%');
    if (parseInt(width[0]) < 100) {
        setTimeout(() => {
            box.style.width = String(parseInt(width[0]) + 5) + '%';
            return increment();
        }, 1000);
    }
    else {
        let reset = document.createElement('button');
        reset.style.cssText = `
         padding: 10px 15px;
         margin-left: 10px;
         background-color: gray;
         outline: none;
         border-radius: 5px;
         border:none;
         cursor: pointer;
         `;
        reset.innerText = "Reset";
        btn.after(reset);
        reset.addEventListener('click', () => {
            box.style.width = '5%';
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN0QixDQUFDLEVBQUMsSUFBSSxDQUFDO0tBQ1Q7U0FBSTtRQUNELElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQzVDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHOzs7Ozs7OztVQVFyQjtRQUNELEtBQUssQ0FBQyxTQUFTLEdBQUcsT0FBTztRQUN6QixHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNoQixLQUFLLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFDLEdBQUUsRUFBRTtZQUMvQixHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJO1lBQ3RCLEdBQUcsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFFO1lBQ2hDLEtBQUssQ0FBQyxNQUFNLEVBQUU7UUFFbEIsQ0FBQyxDQUFDO0tBRUw7QUFHTCxDQUFDO0FBR0YsR0FBRyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUM7SUFDckMsQ0FBQyxDQUFDLGNBQWMsRUFBRTtJQUNsQixTQUFTLEVBQUU7SUFDWCxHQUFHLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUM7QUFDeEMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzLnRzIiwid2VicGFjazovLy8uL3NyYy9pbnRlcmZhY2UudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y05hbWUsIFBlcnNvbn0gZnJvbSBcIi4vaW50ZXJmYWNlXCI7XHJcblxyXG5cclxuZXhwb3J0ICAgY2xhc3MgUGxheWVyIGltcGxlbWVudHMgUGVyc29uPG51bWJlcj57XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyBhZ2U6IG51bWJlciwgcHJpdmF0ZSByZWFkb25seSBjb3VudHJ5OmNOYW1lID0gY05hbWUuQkQpIHtcclxuXHJcbiAgICB9XHJcbiAgICBnZXRDb3VudHJ5KCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY291bnRyeSA7XHJcblxyXG59XHJcblxyXG4gIHB1YmxpYyBjYWxsKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5uYW1lfSBpcyBhICAke3RoaXMuYWdlfSBZZWFycyBPbGQgRnJvbSAke3RoaXMuY291bnRyeX0gTmF0aW9uYWwgQ3JpY2tldCBUZWFtIGApXHJcbiB9XHJcblxyXG5cclxufVxyXG5cclxuIiwiIGV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VPcHRpb24ge1xyXG4gICAgd2VpZ2h0OnN0cmluZyxcclxuICAgIGhlaWdodDpzdHJpbmcsXHJcbiAgICBzcmM6c3RyaW5nLFxyXG4gICAgYWx0OnN0cmluZ1xyXG59XHJcbi8vIGludGVyZmFjZSB3aXRoIEdlbmVyaWNzXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGVyc29uPFQgZXh0ZW5kcyBudW1iZXI+IHtcclxuICAgIG5hbWU6IHN0cmluZ1xyXG4gICAgYWdlOiBUXHJcbiAgICBjYWxsKCk6IHZvaWRcclxuICAgIGdldENvdW50cnkoKTogc3RyaW5nXHJcbn1cclxuLy8gZW51bVxyXG4gZXhwb3J0IGVudW0gY05hbWUge1xyXG4gICAgQkQgPSBcIkJhbmdsYWRlc2hcIlxyXG59XHJcbiB0eXBlIENvdW50ZXJVcD0oc3RyaW5nIHwgSFRNTENvbGxlY3Rpb24pXHJcbiBleHBvcnQgaW50ZXJmYWNlIENvdW50ZXJVcE9wdGlvbnN7XHJcbiAgICBjOkNvdW50ZXJVcCxcclxuICAgIHQ6bnVtYmVyXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7UGxheWVyfSBmcm9tIFwiLi9jbGFzc1wiO1xyXG5cclxuaW1wb3J0IHtDb3VudGVyVXBPcHRpb25zLCBJbWFnZU9wdGlvbn0gZnJvbSBcIi4vaW50ZXJmYWNlXCI7XHJcblxyXG5sZXQgUGxheWVyT25lID0gbmV3IFBsYXllcignU2FraWInLCAyNSlcclxuXHJcbmNvbnN0IFBsYXllclR3byA9IG5ldyBQbGF5ZXIoJ1RhbWltJywgMjgpXHJcblxyXG5QbGF5ZXJPbmUuY2FsbCgpXHJcblBsYXllclR3by5jYWxsKClcclxuXHJcblxyXG5sZXQgaG8gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdobycpXHJcblxyXG5sZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG5cclxuXHJcbmZ1bmN0aW9uIGltYWdlKG9wdGlvbnM6IEltYWdlT3B0aW9uKSB7XHJcbiAgICBjb25zdCBpbWdWYXJpYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICBpbWdWYXJpYWJsZS5zdHlsZS53aWR0aCA9IG9wdGlvbnMud2VpZ2h0XHJcbiAgICBpbWdWYXJpYWJsZS5zdHlsZS5oZWlnaHQgPSBvcHRpb25zLmhlaWdodFxyXG4gICAgaW1nVmFyaWFibGUuc3JjID0gb3B0aW9ucy5zcmNcclxuICAgIGltZ1ZhcmlhYmxlLmFsdCA9IG9wdGlvbnMuYWx0XHJcblxyXG4gICAgcmV0dXJuIGltZ1ZhcmlhYmxlXHJcblxyXG59XHJcblxyXG5sZXQgaW1nID0gaW1hZ2Uoe1xyXG4gICAgd2VpZ2h0OiBcIjYwMHB4XCIsXHJcbiAgICBoZWlnaHQ6IFwiMzAwcHhcIixcclxuICAgIHNyYzogXCJodHRwczovL21pcm8ubWVkaXVtLmNvbS9tYXgvMTIwMC8wKlJibWZOeWh1QmI4RzNMV2gucG5nXCIsXHJcbiAgICBhbHQ6IFwiaHR0cHM6Ly9taXJvLm1lZGl1bS5jb20vbWF4LzEyMDAvMCpSYm1mTnlodUJiOEczTFdoLnBuZ1wiXHJcbn0pXHJcblxyXG4vLyBjb3VudGVyLXVwIHBsdWdpbiBtYWRlIGluIFR5cGVzY3JpcHRcclxubGV0IGNvdW50ZXJVcDogRnVuY3Rpb25cclxuLy8gcmVjdXJzaXZlIHdheVxyXG5jb3VudGVyVXAgPSAob3B0aW9uczpDb3VudGVyVXBPcHRpb25zKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5jID09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuYyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUob3B0aW9ucy5jKVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCB2IG9mIG9wdGlvbnMuYykge1xyXG4gICAgICAgICAgICBsZXQgbiA9IHBhcnNlSW50KHYuaW5uZXJIVE1MKVxyXG4gICAgICAgICAgICBsZXQgaSA9IDBcclxuICAgICAgICAgICAgZnVuY3Rpb24gY2FsKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPD0gbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LmlubmVySFRNTCA9IGkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpKytcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbCgpXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgb3B0aW9ucy50KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhbCgpXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cobmV3IEVycm9yKCdFcnJvciBpbiBjb3VudGVyIEZ1bmN0aW9uJykpXHJcbiAgICB9XHJcbn1cclxubGV0IHBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaG8nKVxyXG5cclxuY291bnRlclVwKHtjOidoMScsdDoxMDAwfSlcclxuY291bnRlclVwKHtjOnBzLHQ6NTAwfSlcclxuXHJcblxyXG5cclxubGV0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4nKVxyXG5cclxuXHJcbiAvLyByZWN1cnNpdmUgd2F5XHJcbiBmdW5jdGlvbiBpbmNyZW1lbnQoKSB7XHJcbiAgICAgbGV0IGJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3hfYycpXHJcbiAgICAgbGV0IHdpZHRoPSBib3guc3R5bGUud2lkdGguc3BsaXQoJyUnKVxyXG4gICAgIGlmIChwYXJzZUludCh3aWR0aFswXSk8MTAwKXtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xyXG4gICAgICAgICAgICBib3guc3R5bGUud2lkdGggPSBTdHJpbmcocGFyc2VJbnQod2lkdGhbMF0pKzUpKyclJ1xyXG4gICAgICAgICAgICByZXR1cm4gaW5jcmVtZW50KClcclxuICAgICAgICB9LDEwMDApXHJcbiAgICAgfWVsc2V7XHJcbiAgICAgICAgIGxldCByZXNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgIHJlc2V0LnN0eWxlLmNzc1RleHQgPSBgXHJcbiAgICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgYFxyXG4gICAgICAgICByZXNldC5pbm5lclRleHQgPSBcIlJlc2V0XCJcclxuICAgICAgICAgYnRuLmFmdGVyKHJlc2V0KVxyXG4gICAgICAgICByZXNldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgICAgICAgIGJveC5zdHlsZS53aWR0aCA9ICc1JSdcclxuICAgICAgICAgICAgIGJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJywpXHJcbiAgICAgICAgICAgICByZXNldC5yZW1vdmUoKVxyXG5cclxuICAgICAgICAgfSlcclxuXHJcbiAgICAgfVxyXG5cclxuXHJcbiB9XHJcblxyXG5cclxuYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgaW5jcmVtZW50KClcclxuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ3RydWUnKVxyXG59KVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=