/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/DOM.js":
/*!****************************!*\
  !*** ./src/modules/DOM.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOMFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMFactory */ "./src/modules/DOMFactory.js");
/* harmony import */ var _Pubsub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pubsub */ "./src/modules/Pubsub.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var receiveComputerAttack = function receiveComputerAttack(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      x = _ref2[0],
      y = _ref2[1];

  var playerBoard = document.querySelector(".player-one-gameboard");
  var row = playerBoard.querySelector("[data-rows=\"".concat(x, "\"]"));
  var column = row.querySelector("[data-columns=\"".concat(y, "\"]"));
  column.classList.add("hit");
};

var sendPlayerAttack = function sendPlayerAttack(event) {
  if (!event.target.classList.contains("columns")) return;
  event.target.classList.add("hit");
  var x = event.target.parentNode.getAttribute("data-rows");
  var y = event.target.getAttribute("data-columns");
  _Pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].publish("player-attack-ship", [x, y]);
};

var createGameboard = function createGameboard(name, board) {
  var grid = (0,_DOMFactory__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
    className: name
  });

  for (var i = 0; i < 10; i += 1) {
    var row = (0,_DOMFactory__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
      className: "rows",
      "data-rows": i
    });

    for (var j = 0; j < 10; j += 1) {
      var column = (0,_DOMFactory__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
        className: "columns",
        "data-columns": j
      });

      if (board.length !== 0 && _typeof(board[i][j]) === "object") {
        column.classList.add("ship");
      }

      row.append(column);
    }

    grid.append(row);
  }

  if (name === "player-two-gameboard") {
    grid.addEventListener("click", sendPlayerAttack);
  }

  return grid;
};

var appendGameboards = function appendGameboards(_ref3) {
  var _ref4 = _slicedToArray(_ref3, 2),
      playerBoard = _ref4[0],
      computerBoard = _ref4[1];

  var gameboards = document.querySelector(".gameboards");
  var playerOneSection = (0,_DOMFactory__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
    className: "player-section"
  });
  var playerOneHeader = (0,_DOMFactory__WEBPACK_IMPORTED_MODULE_0__["default"])("h2", {
    className: "player-header",
    textContent: "You"
  });
  var playerTwoSection = (0,_DOMFactory__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
    className: "player-section"
  });
  var playerTwoHeader = (0,_DOMFactory__WEBPACK_IMPORTED_MODULE_0__["default"])("h2", {
    className: "player-header",
    textContent: "Computer"
  });
  playerOneSection.append(playerOneHeader, createGameboard("player-one-gameboard", playerBoard));
  playerTwoSection.append(playerTwoHeader, createGameboard("player-two-gameboard", computerBoard));
  gameboards.append(playerOneSection);
  gameboards.append(playerTwoSection);
};

var renderInputModal = function renderInputModal() {
  var inputModalDiv = document.querySelector(".input-modal");
  var inputGrid = createGameboard("inputs-gameboard", []);
  inputModalDiv.insertBefore(inputGrid, document.querySelector(".ready"));
};

var inputShips = function inputShips() {
  var inputGrid = document.querySelector(".inputs-gameboard");

  var columns = _toConsumableArray(inputGrid.querySelectorAll(".columns"));

  var rotate = document.querySelector(".rotate");
  var horizontal = true;
  var ships = [{
    name: "carrier",
    length: 5,
    added: false
  }, {
    name: "destroyer",
    length: 4,
    added: false
  }, {
    name: "cruiser",
    length: 3,
    added: false
  }, {
    name: "submarine",
    length: 3,
    added: false
  }, {
    name: "patrol",
    length: 2,
    added: false
  }, {
    name: "scout",
    length: 1,
    added: false
  }];

  var mouseenterCallbackHorizontal = function mouseenterCallbackHorizontal(event) {
    var column = Number(event.target.getAttribute("data-columns"));
    var cells = [];

    for (var i = 0; i < event.currentTarget.shipLength; i += 1) {
      var col = event.target.parentNode.querySelector("[data-columns=\"".concat(column + i, "\"]"));
      cells.push(col);
    }

    if (cells.some(function (item) {
      return item === null;
    })) {
      event.target.classList.add("red");
      return;
    }

    if (cells.some(function (item) {
      return item.classList.contains("ship");
    })) {
      event.target.classList.add("red");
      return;
    }

    cells.forEach(function (item) {
      return item.setAttribute("data-orientation", "horizontal");
    });
    cells.forEach(function (item) {
      return item.classList.add("hover");
    });
  };

  var mouseenterCallbackVertical = function mouseenterCallbackVertical(event) {
    var column = Number(event.target.getAttribute("data-columns"));
    var row = Number(event.target.parentNode.getAttribute("data-rows"));
    var grid = event.target.parentNode.parentNode;
    var cells = [];

    for (var i = 0; i < event.currentTarget.shipLength; i += 1) {
      var focusRow = grid.querySelector("[data-rows=\"".concat(row + i, "\"]"));
      if (!focusRow) break;
      cells.push(focusRow.querySelector("[data-columns=\"".concat(column, "\"]")));
    }

    if (cells.length < event.currentTarget.shipLength) {
      event.target.classList.add("red");
      return;
    }

    if (cells.some(function (item) {
      return item.classList.contains("ship");
    })) {
      event.target.classList.add("red");
      return;
    }

    cells.forEach(function (item) {
      return item.setAttribute("data-orientation", "vertical");
    });
    cells.forEach(function (item) {
      return item.classList.add("hover");
    });
  };

  var mouseleaveCallback = function mouseleaveCallback(event) {
    event.target.classList.remove("red");
    document.querySelectorAll(".columns").forEach(function (item) {
      return item.classList.remove("hover");
    });
  };

  var shipsReset = function shipsReset() {
    ships = [{
      name: "carrier",
      length: 5,
      added: false
    }, {
      name: "destroyer",
      length: 4,
      added: false
    }, {
      name: "cruiser",
      length: 3,
      added: false
    }, {
      name: "submarine",
      length: 3,
      added: false
    }, {
      name: "patrol",
      length: 2,
      added: false
    }, {
      name: "scout",
      length: 1,
      added: false
    }];
  };

  var hideInputModal = function hideInputModal() {
    if (ships[0].x === undefined) return; // return when no ships entered

    var inputModal = document.querySelector(".input-modal");
    inputGrid.remove();
    inputModal.style.display = "none";
    _Pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].publish("input-ships", ships);
    shipsReset();
  };

  var activateReadyDiv = function activateReadyDiv() {
    var readyDiv = document.querySelector(".ready");
    readyDiv.classList.add("active");
    readyDiv.addEventListener("click", hideInputModal);
  };

  var clickCallback = function clickCallback(event) {
    if (!event.target.classList.contains("columns")) return;
    if (event.target.classList.contains("red")) return;
    if (event.target.classList.contains("ship")) return;
    var shipToAdd = ships.find(function (ship) {
      return !ship.added;
    });
    if (!shipToAdd) return;

    if (shipToAdd.length === 1) {
      columns.forEach(function (cell) {
        return cell.removeEventListener("mouseenter", mouseenterCallbackHorizontal);
      });
      columns.forEach(function (cell) {
        return cell.removeEventListener("mouseenter", mouseenterCallbackVertical);
      });
      activateReadyDiv();
    }

    var shipToAddIndex = ships.indexOf(shipToAdd);
    shipToAdd.added = true;
    shipToAdd.x = Number(event.target.parentNode.getAttribute("data-rows"));
    shipToAdd.y = Number(event.target.getAttribute("data-columns"));
    shipToAdd.orientation = event.target.getAttribute("data-orientation");
    var required = inputGrid.querySelectorAll(".columns.hover");
    required.forEach(function (item) {
      return item.classList.add("ship");
    });
    required.forEach(function (item) {
      return item.classList.add(shipToAdd.name);
    });
    var placeShipMessageDiv = document.querySelector(".place-ship-message");

    if (shipToAdd.length === 1) {
      placeShipMessageDiv.textContent = "All ships placed, move to battleground!";
    }

    if (!ships[shipToAddIndex + 1]) return;
    placeShipMessageDiv.textContent = "Place your ".concat(ships[shipToAddIndex + 1].name, "!");
    columns.forEach(function (cell) {
      return cell.shipLength = ships[shipToAddIndex + 1].length;
    });
  };

  columns.forEach(function (cell) {
    return cell.shipLength = 5;
  });
  columns.forEach(function (cell) {
    return cell.addEventListener("mouseenter", mouseenterCallbackHorizontal);
  });
  columns.forEach(function (cell) {
    return cell.addEventListener("mouseleave", mouseleaveCallback);
  });
  inputGrid.addEventListener("click", clickCallback);
  rotate.addEventListener("click", function () {
    if (horizontal) {
      columns.forEach(function (cell) {
        return cell.removeEventListener("mouseenter", mouseenterCallbackHorizontal);
      });
      columns.forEach(function (cell) {
        return cell.addEventListener("mouseenter", mouseenterCallbackVertical);
      });
      horizontal = false;
    } else {
      columns.forEach(function (cell) {
        return cell.addEventListener("mouseenter", mouseenterCallbackHorizontal);
      });
      columns.forEach(function (cell) {
        return cell.removeEventListener("mouseenter", mouseenterCallbackVertical);
      });
      horizontal = true;
    }
  });
};

var removePlayerSections = function removePlayerSections() {
  var playerSections = document.querySelectorAll(".player-section");
  playerSections.forEach(function (section) {
    return section.remove();
  });
};

var restartGame = function restartGame() {
  removePlayerSections();
  var gameEndModal = document.querySelector(".game-end-modal");
  gameEndModal.style.display = "none";
  var inputModal = document.querySelector(".input-modal");
  inputModal.style.display = "flex";
  renderInputModal();
  inputShips();
  var placeShipMessageDiv = document.querySelector(".place-ship-message");
  placeShipMessageDiv.textContent = "Place your carrier!";
  _Pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].publish("restart-game");
};

var openGameEndModal = function openGameEndModal(victor) {
  var gameEndModal = document.querySelector(".game-end-modal");
  gameEndModal.style.display = "block";
  var text = document.querySelector(".game-end-modal .text");
  text.textContent = "".concat(victor, " won!");
  var restart = document.querySelector(".game-end-modal .restart");
  restart.addEventListener("click", restartGame);
  var close = document.querySelector(".game-end-modal .close");
  close.addEventListener("click", function () {
    gameEndModal.style.display = "none";
  });
};

var showAlert = function showAlert(victor) {
  document.querySelector(".player-two-gameboard").removeEventListener("click", sendPlayerAttack);
  openGameEndModal(victor);
};

var DOMModuleObject = {
  execute: function execute() {
    renderInputModal();
    inputShips();
    _Pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe("fleets-initialized", appendGameboards);
    _Pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe("computer-attack-ship", receiveComputerAttack);
    _Pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe("game-end", showAlert);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMModuleObject);

/***/ }),

/***/ "./src/modules/DOMFactory.js":
/*!***********************************!*\
  !*** ./src/modules/DOMFactory.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var DOMFactory = function DOMFactory(element, attributes) {
  var newElement = document.createElement(element);

  for (var attribute in attributes) {
    if (!newElement[attribute]) {
      if (attribute.toString().includes("data")) {
        newElement.setAttribute(attribute.toString(), attributes[attribute]);
      } else {
        newElement[attribute] = attributes[attribute];
      }
    }
  }

  return newElement;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMFactory);

/***/ }),

/***/ "./src/modules/Game.js":
/*!*****************************!*\
  !*** ./src/modules/Game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ "./src/modules/Ship.js");
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gameboard */ "./src/modules/Gameboard.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Player */ "./src/modules/Player.js");
/* harmony import */ var _Pubsub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pubsub */ "./src/modules/Pubsub.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





var player = (0,_Player__WEBPACK_IMPORTED_MODULE_2__["default"])("player", (0,_Gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])());
var computer = (0,_Player__WEBPACK_IMPORTED_MODULE_2__["default"])("computer", (0,_Gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])());

var addShips = function addShips(ships) {
  var _iterator = _createForOfIteratorHelper(ships),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var ship = _step.value;
      player.fleet.at(ship.x, ship.y).add((0,_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])(ship.name, ship.length), ship.orientation);
      computer.autoAdd((0,_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])(ship.name, ship.length));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  _Pubsub__WEBPACK_IMPORTED_MODULE_3__["default"].publish("fleets-initialized", [player.fleet.board, computer.fleet.board]);
};

var computerAttackShip = function computerAttackShip() {
  var _computer$attack$auto = computer.attack(player).auto(),
      _computer$attack$auto2 = _slicedToArray(_computer$attack$auto, 2),
      x = _computer$attack$auto2[0],
      y = _computer$attack$auto2[1];

  _Pubsub__WEBPACK_IMPORTED_MODULE_3__["default"].publish("computer-attack-ship", [x, y]);

  if (player.fleet.areAllShipsSunk()) {
    _Pubsub__WEBPACK_IMPORTED_MODULE_3__["default"].publish("game-end", "Computer");
  }
};

var playerAttackShip = function playerAttackShip(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      x = _ref2[0],
      y = _ref2[1];

  player.attack(computer).at(x, y);

  if (computer.fleet.areAllShipsSunk()) {
    _Pubsub__WEBPACK_IMPORTED_MODULE_3__["default"].publish("game-end", "You");
  }

  computerAttackShip();
};

var restartGame = function restartGame() {
  player = null;
  computer = null;
  player = (0,_Player__WEBPACK_IMPORTED_MODULE_2__["default"])("player", (0,_Gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])());
  computer = (0,_Player__WEBPACK_IMPORTED_MODULE_2__["default"])("computer", (0,_Gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])());
};

var gameModuleObject = {
  execute: function execute() {
    _Pubsub__WEBPACK_IMPORTED_MODULE_3__["default"].subscribe("input-ships", addShips);
    _Pubsub__WEBPACK_IMPORTED_MODULE_3__["default"].subscribe("player-attack-ship", playerAttackShip);
    _Pubsub__WEBPACK_IMPORTED_MODULE_3__["default"].subscribe("restart-game", restartGame);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameModuleObject);

/***/ }),

/***/ "./src/modules/Gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/Gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var Gameboard = function Gameboard() {
  var board = Array(10).fill("").map(function (element) {
    return Array(10).fill(element);
  });
  var shipsArray = [];
  var latestAttackStatus = "";

  var checkIfShipCanBeAdded = function checkIfShipCanBeAdded(x, y, orientation, shipLength) {
    if (orientation === "horizontal") {
      var requiredSpace = _toConsumableArray(board)[x].slice(y, y + shipLength);

      if (requiredSpace.length !== shipLength) return false;
      return requiredSpace.every(function (element) {
        return element === "";
      });
    }

    if (orientation === "vertical") {
      var _requiredSpace = [];

      for (var i = 0; i <= 9 - x; i += 1) {
        _requiredSpace.push(board[x + i][y]);
      }

      if (_requiredSpace.length < shipLength) return false;
      return _requiredSpace.every(function (element) {
        return element === "";
      });
    }

    return "";
  };

  var addShipInArray = function addShipInArray(ship) {
    shipsArray.push(ship);
  };

  var addShipOnBoard = function addShipOnBoard(x, y, orientation, ship) {
    if (orientation === "horizontal") {
      board[x].fill(ship, y, y + ship.length);
    }

    if (orientation === "vertical") {
      for (var i = x; i < ship.length + x; i += 1) {
        board[i][y] = ship;
      }
    }
  };

  var attackShip = function attackShip(x, y) {
    var ship = board[x][y];
    var hitPosition = 0; // get left of gameboard from hit position

    var targetAreaHorizontal = board[x].slice(0, y); // filter to get left of ship from hit position

    var shipLeftSide = targetAreaHorizontal.filter(function (element) {
      return element.name === ship.name;
    });
    var targetAreaVertical = []; // get upper of gameboard from hit position

    for (var i = 0; i < x; i += 1) {
      targetAreaVertical.push(board[i][y]);
    } // filter to get upper of ship from hit position


    var shipUpperSide = targetAreaVertical.filter(function (element) {
      return element.name === ship.name;
    });

    hitPosition = function () {
      if (shipLeftSide.length === 0 && shipUpperSide.length === 0) return 0;

      if (shipLeftSide.length === 0 && shipUpperSide.length !== 0) {
        return shipUpperSide.length;
      }

      return shipLeftSide.length;
    }();

    if (ship.isHitAt(hitPosition)) {
      latestAttackStatus = "illegal";
      return;
    }

    ship.hit(hitPosition);
    latestAttackStatus = "success/hit";
  };

  return {
    get board() {
      return _toConsumableArray(board);
    },

    get shipsArray() {
      return [].concat(shipsArray);
    },

    get latestAttackStatus() {
      return latestAttackStatus;
    },

    at: function at(x, y) {
      return {
        add: function add(ship, orientation) {
          if (checkIfShipCanBeAdded(x, y, orientation, ship.length)) {
            addShipInArray(ship);
            addShipOnBoard(x, y, orientation, ship);
          }
        },
        receiveAttack: function receiveAttack() {
          if (_typeof(board[x][y]) === "object") {
            attackShip(x, y);
            return;
          }

          if (board[x][y] === "X") {
            latestAttackStatus = "illegal";
            return;
          }

          board[x][y] = "X";
          latestAttackStatus = "success/miss";
        }
      };
    },
    areAllShipsSunk: function areAllShipsSunk() {
      return [].concat(shipsArray).every(function (ship) {
        return ship.isSunk();
      });
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);

/***/ }),

/***/ "./src/modules/Player.js":
/*!*******************************!*\
  !*** ./src/modules/Player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Player = function Player(name, fleet) {
  var hitPosition = {
    x: undefined,
    y: undefined
  };
  var targetArea = [];

  var useTargetArea = function useTargetArea(target) {
    if (target.length === 0) {
      hitPosition.x = undefined;
      hitPosition.y = undefined;
      return;
    }

    hitPosition.x = target[0].x;
    hitPosition.y = target[0].y;
    targetArea.splice(0, 1);
  };

  return {
    get name() {
      return name;
    },

    get fleet() {
      return fleet;
    },

    attack: function attack(enemy) {
      return {
        at: function at(x, y) {
          enemy.fleet.at(x, y).receiveAttack(x, y);
        },
        auto: function auto() {
          useTargetArea(targetArea);

          var x = function () {
            if (hitPosition.x === undefined) {
              return Math.floor(Math.random() * 10);
            }

            return hitPosition.x;
          }();

          var y = function () {
            if (hitPosition.y === undefined) {
              return Math.floor(Math.random() * 10);
            }

            return hitPosition.y;
          }();

          enemy.fleet.at(x, y).receiveAttack(x, y);

          if (enemy.fleet.latestAttackStatus === "illegal") {
            return this.auto();
          }

          if (enemy.fleet.latestAttackStatus === "success/hit") {
            targetArea = [];

            if (y + 1 <= 9) {
              targetArea.push({
                x: x,
                y: y + 1
              });
            }

            if (y - 1 >= 0) {
              targetArea.push({
                x: x,
                y: y - 1
              });
            }

            if (x + 1 <= 9) {
              targetArea.push({
                x: x + 1,
                y: y
              });
            }

            if (x - 1 >= 0) {
              targetArea.push({
                x: x - 1,
                y: y
              });
            }
          }

          return [x, y];
        }
      };
    },
    autoAdd: function autoAdd(ship) {
      var x = Math.floor(Math.random() * 10);
      var y = Math.floor(Math.random() * 10);
      var orientations = ["horizontal", "vertical"];
      var orientation = orientations[Math.floor(Math.random() * 2)];
      fleet.at(x, y).add(ship, orientation);

      if (!fleet.shipsArray.includes(ship)) {
        this.autoAdd(ship);
      }
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);

/***/ }),

/***/ "./src/modules/Pubsub.js":
/*!*******************************!*\
  !*** ./src/modules/Pubsub.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var pubsub = {
  events: {},
  publish: function publish(eventName, data) {
    if (pubsub.events[eventName]) {
      pubsub.events[eventName].forEach(function (callback) {
        return callback(data);
      });
    }
  },
  subscribe: function subscribe(eventName, callback) {
    if (!Array.isArray(pubsub.events[eventName])) {
      pubsub.events[eventName] = [];
    }

    pubsub.events[eventName].push(callback);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pubsub);

/***/ }),

/***/ "./src/modules/Ship.js":
/*!*****************************!*\
  !*** ./src/modules/Ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var Ship = function Ship(name, length) {
  var shipArray = Array(length).fill("");

  var hit = function hit(position) {
    shipArray = _toConsumableArray(shipArray).map(function (element, index) {
      return index === position ? "hit" : element;
    });
  };

  var isHitAt = function isHitAt(position) {
    return _toConsumableArray(shipArray)[position] === "hit";
  };

  var isSunk = function isSunk() {
    return _toConsumableArray(shipArray).every(function (element) {
      return element === "hit";
    });
  };

  return {
    get name() {
      return name;
    },

    get length() {
      return length;
    },

    get shipArray() {
      return _toConsumableArray(shipArray);
    },

    hit: hit,
    isHitAt: isHitAt,
    isSunk: isSunk
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/normalize.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/normalize.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n       ========================================================================== */\n\n/**\n     * Remove the margin in all browsers.\n     */\n\nbody {\n  margin: 0;\n}\n\n/**\n     * Render the `main` element consistently in IE.\n     */\n\nmain {\n  display: block;\n}\n\n/**\n     * Correct the font size and margin on `h1` elements within `section` and\n     * `article` contexts in Chrome, Firefox, and Safari.\n     */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n       ========================================================================== */\n\n/**\n     * 1. Add the correct box sizing in Firefox.\n     * 2. Show the overflow in Edge and IE.\n     */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n     * 1. Correct the inheritance and scaling of font size in all browsers.\n     * 2. Correct the odd `em` font sizing in all browsers.\n     */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n       ========================================================================== */\n\n/**\n     * Remove the gray background on active links in IE 10.\n     */\n\na {\n  background-color: transparent;\n}\n\n/**\n     * 1. Remove the bottom border in Chrome 57-\n     * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n     */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n     * Add the correct font weight in Chrome, Edge, and Safari.\n     */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n     * 1. Correct the inheritance and scaling of font size in all browsers.\n     * 2. Correct the odd `em` font sizing in all browsers.\n     */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n     * Add the correct font size in all browsers.\n     */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n     * Prevent `sub` and `sup` elements from affecting the line height in\n     * all browsers.\n     */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n       ========================================================================== */\n\n/**\n     * Remove the border on images inside links in IE 10.\n     */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n       ========================================================================== */\n\n/**\n     * 1. Change the font styles in all browsers.\n     * 2. Remove the margin in Firefox and Safari.\n     */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n     * Show the overflow in IE.\n     * 1. Show the overflow in Edge.\n     */\n\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n     * Remove the inheritance of text transform in Edge, Firefox, and IE.\n     * 1. Remove the inheritance of text transform in Firefox.\n     */\n\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n     * Correct the inability to style clickable types in iOS and Safari.\n     */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n     * Remove the inner border and padding in Firefox.\n     */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n     * Restore the focus styles unset by the previous rule.\n     */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n     * Correct the padding in Firefox.\n     */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n     * 1. Correct the text wrapping in Edge and IE.\n     * 2. Correct the color inheritance from `fieldset` elements in IE.\n     * 3. Remove the padding so developers are not caught out when they zero out\n     *    `fieldset` elements in all browsers.\n     */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n     * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n     */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n     * Remove the default vertical scrollbar in IE 10+.\n     */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n     * 1. Add the correct box sizing in IE 10.\n     * 2. Remove the padding in IE 10.\n     */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n     * Correct the cursor style of increment and decrement buttons in Chrome.\n     */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n     * 1. Correct the odd appearance in Chrome and Safari.\n     * 2. Correct the outline style in Safari.\n     */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n     * Remove the inner padding in Chrome and Safari on macOS.\n     */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n     * 1. Correct the inability to style clickable types in iOS and Safari.\n     * 2. Change font properties to `inherit` in Safari.\n     */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n       ========================================================================== */\n\n/*\n     * Add the correct display in Edge, IE 10+, and Firefox.\n     */\n\ndetails {\n  display: block;\n}\n\n/*\n     * Add the correct display in all browsers.\n     */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n       ========================================================================== */\n\n/**\n     * Add the correct display in IE 10+.\n     */\n\ntemplate {\n  display: none;\n}\n\n/**\n     * Add the correct display in IE 10.\n     */\n\n[hidden] {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;mFACmF;;AAEnF;;MAEM;;AAEN;EACE,SAAS;AACX;;AAEA;;MAEM;;AAEN;EACE,cAAc;AAChB;;AAEA;;;MAGM;;AAEN;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;mFACmF;;AAEnF;;;MAGM;;AAEN;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;MAGM;;AAEN;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;mFACmF;;AAEnF;;MAEM;;AAEN;EACE,6BAA6B;AAC/B;;AAEA;;;MAGM;;AAEN;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;MAEM;;AAEN;;EAEE,mBAAmB;AACrB;;AAEA;;;MAGM;;AAEN;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;MAEM;;AAEN;EACE,cAAc;AAChB;;AAEA;;;MAGM;;AAEN;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;mFACmF;;AAEnF;;MAEM;;AAEN;EACE,kBAAkB;AACpB;;AAEA;mFACmF;;AAEnF;;;MAGM;;AAEN;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;MAGM;;AAEN;;EAEE,MAAM;EACN,iBAAiB;AACnB;;AAEA;;;MAGM;;AAEN;;EAEE,MAAM;EACN,oBAAoB;AACtB;;AAEA;;MAEM;;AAEN;;;;EAIE,0BAA0B;AAC5B;;AAEA;;MAEM;;AAEN;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;MAEM;;AAEN;;;;EAIE,8BAA8B;AAChC;;AAEA;;MAEM;;AAEN;EACE,8BAA8B;AAChC;;AAEA;;;;;MAKM;;AAEN;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;MAEM;;AAEN;EACE,wBAAwB;AAC1B;;AAEA;;MAEM;;AAEN;EACE,cAAc;AAChB;;AAEA;;;MAGM;;AAEN;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;MAEM;;AAEN;;EAEE,YAAY;AACd;;AAEA;;;MAGM;;AAEN;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;MAEM;;AAEN;EACE,wBAAwB;AAC1B;;AAEA;;;MAGM;;AAEN;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;mFACmF;;AAEnF;;MAEM;;AAEN;EACE,cAAc;AAChB;;AAEA;;MAEM;;AAEN;EACE,kBAAkB;AACpB;;AAEA;mFACmF;;AAEnF;;MAEM;;AAEN;EACE,aAAa;AACf;;AAEA;;MAEM;;AAEN;EACE,aAAa;AACf","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n       ========================================================================== */\n\n/**\n     * Remove the margin in all browsers.\n     */\n\nbody {\n  margin: 0;\n}\n\n/**\n     * Render the `main` element consistently in IE.\n     */\n\nmain {\n  display: block;\n}\n\n/**\n     * Correct the font size and margin on `h1` elements within `section` and\n     * `article` contexts in Chrome, Firefox, and Safari.\n     */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n       ========================================================================== */\n\n/**\n     * 1. Add the correct box sizing in Firefox.\n     * 2. Show the overflow in Edge and IE.\n     */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n     * 1. Correct the inheritance and scaling of font size in all browsers.\n     * 2. Correct the odd `em` font sizing in all browsers.\n     */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n       ========================================================================== */\n\n/**\n     * Remove the gray background on active links in IE 10.\n     */\n\na {\n  background-color: transparent;\n}\n\n/**\n     * 1. Remove the bottom border in Chrome 57-\n     * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n     */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n     * Add the correct font weight in Chrome, Edge, and Safari.\n     */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n     * 1. Correct the inheritance and scaling of font size in all browsers.\n     * 2. Correct the odd `em` font sizing in all browsers.\n     */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n     * Add the correct font size in all browsers.\n     */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n     * Prevent `sub` and `sup` elements from affecting the line height in\n     * all browsers.\n     */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n       ========================================================================== */\n\n/**\n     * Remove the border on images inside links in IE 10.\n     */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n       ========================================================================== */\n\n/**\n     * 1. Change the font styles in all browsers.\n     * 2. Remove the margin in Firefox and Safari.\n     */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n     * Show the overflow in IE.\n     * 1. Show the overflow in Edge.\n     */\n\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n     * Remove the inheritance of text transform in Edge, Firefox, and IE.\n     * 1. Remove the inheritance of text transform in Firefox.\n     */\n\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n     * Correct the inability to style clickable types in iOS and Safari.\n     */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n     * Remove the inner border and padding in Firefox.\n     */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n     * Restore the focus styles unset by the previous rule.\n     */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n     * Correct the padding in Firefox.\n     */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n     * 1. Correct the text wrapping in Edge and IE.\n     * 2. Correct the color inheritance from `fieldset` elements in IE.\n     * 3. Remove the padding so developers are not caught out when they zero out\n     *    `fieldset` elements in all browsers.\n     */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n     * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n     */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n     * Remove the default vertical scrollbar in IE 10+.\n     */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n     * 1. Add the correct box sizing in IE 10.\n     * 2. Remove the padding in IE 10.\n     */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n     * Correct the cursor style of increment and decrement buttons in Chrome.\n     */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n     * 1. Correct the odd appearance in Chrome and Safari.\n     * 2. Correct the outline style in Safari.\n     */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n     * Remove the inner padding in Chrome and Safari on macOS.\n     */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n     * 1. Correct the inability to style clickable types in iOS and Safari.\n     * 2. Change font properties to `inherit` in Safari.\n     */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n       ========================================================================== */\n\n/*\n     * Add the correct display in Edge, IE 10+, and Firefox.\n     */\n\ndetails {\n  display: block;\n}\n\n/*\n     * Add the correct display in all browsers.\n     */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n       ========================================================================== */\n\n/**\n     * Add the correct display in IE 10+.\n     */\n\ntemplate {\n  display: none;\n}\n\n/**\n     * Add the correct display in IE 10.\n     */\n\n[hidden] {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nfigure,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role=\"list\"],\nol[role=\"list\"] {\n  list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n    scroll-behavior: auto;\n  }\n\n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles/reset.css"],"names":[],"mappings":"AAAA,qBAAqB;AACrB;;;EAGE,sBAAsB;AACxB;;AAEA,0BAA0B;AAC1B;;;;;;;;;;EAUE,SAAS;AACX;;AAEA,2GAA2G;AAC3G;;EAEE,gBAAgB;AAClB;;AAEA,2BAA2B;AAC3B;EACE,uBAAuB;AACzB;;AAEA,2BAA2B;AAC3B;EACE,iBAAiB;EACjB,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA,0DAA0D;AAC1D;EACE,8BAA8B;AAChC;;AAEA,oCAAoC;AACpC;;EAEE,eAAe;EACf,cAAc;AAChB;;AAEA,yCAAyC;AACzC;;;;EAIE,aAAa;AACf;;AAEA,gGAAgG;AAChG;EACE;IACE,qBAAqB;EACvB;;EAEA;;;IAGE,qCAAqC;IACrC,uCAAuC;IACvC,sCAAsC;IACtC,gCAAgC;EAClC;AACF","sourcesContent":["/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nfigure,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role=\"list\"],\nol[role=\"list\"] {\n  list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n    scroll-behavior: auto;\n  }\n\n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-color: #121212;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nh1 {\n  text-align: center;\n  width: 95%;\n  background-color: rgb(255, 255, 255, 0.05);\n  border-radius: 5px;\n  box-shadow: 0px 15px 30px rgb(0 0 0 / 15%);\n}\n\n.input-modal {\n  width: 95%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: rgb(255, 255, 255, 0.05);\n  padding: 5px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  border-radius: 5px;\n  gap: 5px;\n}\n\nh2 {\n  width: 95%;\n  background-color: rgb(255, 255, 255, 0.07);\n  border-radius: 5px;\n  text-align: center;\n  padding: 5px;\n}\n\nh3 {\n  width: 95%;\n  text-align: center;\n  padding: 5px;\n  font-size: 25px;\n  animation: place-ship-message-blink 2s infinite ease-in alternate;\n}\n\n@keyframes place-ship-message-blink {\n  from {\n    opacity: 1;\n    color: #e1bee7;\n  }\n  to {\n    opacity: 0.3;\n    color: white;\n  }\n}\n\n.input-modal .ready,\n.input-modal .rotate {\n  width: 35%;\n  border-radius: 5px;\n  font-size: 20px;\n  text-align: center;\n  border: 2px solid black;\n}\n\n.ready {\n  pointer-events: none;\n  opacity: 0.5;\n  background-color: #ffebee;\n  color: black;\n}\n\n.ready.active {\n  pointer-events: auto;\n  opacity: 1;\n  animation: ready-button 2s infinite;\n  animation-direction: alternate;\n  animation-timing-function: linear;\n  font-weight: bold;\n}\n\n.ready.active:hover {\n  cursor: pointer;\n}\n\n@keyframes ready-button {\n  0% {\n    background-color: #784682;\n  }\n  20% {\n    background-color: #834c89;\n  }\n  80% {\n    background-color: #c09cc4;\n  }\n  100% {\n    background-color: #efe7f0;\n  }\n}\n\n.rotate {\n  background-color: rgb(0, 131, 143);\n  color: black;\n}\n\n.input-modal .hover {\n  background-color: rgb(128, 128, 128, 0.6);\n}\n\n.input-modal .ship {\n  background-color: gray;\n}\n\n.input-modal .red,\n.input-modal .red.ship {\n  background-color: #ef5350;\n}\n\n.inputs-gameboard {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.gameboards {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1vw;\n  width: 95%;\n}\n\n.player-section {\n  margin-bottom: 20px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.player-header {\n  color: black;\n  margin-bottom: 10px;\n  width: 95%;\n  text-align: center;\n  padding: 5px;\n  font-size: 25px;\n  background-color: rgb(237, 231, 246, 0.5);\n}\n\n.gameboards .player-one-gameboard,\n.gameboards .player-two-gameboard,\n.inputs-gameboard {\n  width: 95%;\n  aspect-ratio: 1;\n  display: flex;\n  row-gap: 2px;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.player-one-gameboard .rows,\n.player-two-gameboard .rows,\n.inputs-gameboard .rows {\n  flex: 1;\n  gap: 4px;\n  display: flex;\n  width: 100%;\n  height: fit-content;\n}\n\n.player-one-gameboard .columns,\n.player-two-gameboard .columns {\n  flex: 1;\n  border: 1px solid #d1c4e9;\n  background-color: rgb(243, 229, 245, 0.1);\n}\n\n.inputs-gameboard .columns {\n  flex: 1;\n  border: 1px solid rgb(255, 255, 255, 0.5);\n}\n\n.player-one-gameboard .rows .columns.ship {\n  background-color: black;\n}\n\n.player-one-gameboard .rows .columns.ship.hit,\n.player-two-gameboard .rows .columns.ship.hit {\n  background: #5e35b1;\n}\n\n.player-one-gameboard .rows .columns.hit,\n.player-two-gameboard .rows .columns.hit {\n  background: #a7ffeb;\n  border: 1px solid black;\n  opacity: 0.7;\n  pointer-events: none;\n}\n\n.game-end-modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n  justify-content: center;\n  align-items: center;\n}\n\n.game-end-modal-content {\n  background-color: rgb(0, 0, 0, 0.9);\n  margin: 15% auto;\n  padding: 20px;\n  border-radius: 5px;\n  border: 1px solid #888;\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\n.game-end-modal-content .restart {\n  background-color: rgb(0, 131, 143);\n  font-size: 25px;\n  color: black;\n  padding: 5px;\n  border-radius: 5px;\n  text-align: center;\n  border: 1px solid black;\n  font-size: 20px;\n}\n\n.close {\n  color: #aaa;\n  float: right;\n  font-size: 40px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n  background-color: #121212;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nh1 {\n  text-align: center;\n  width: 95%;\n  background-color: rgb(255, 255, 255, 0.05);\n  border-radius: 5px;\n  box-shadow: 0px 15px 30px rgb(0 0 0 / 15%);\n}\n\n.input-modal {\n  width: 95%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: rgb(255, 255, 255, 0.05);\n  padding: 5px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  border-radius: 5px;\n  gap: 5px;\n}\n\nh2 {\n  width: 95%;\n  background-color: rgb(255, 255, 255, 0.07);\n  border-radius: 5px;\n  text-align: center;\n  padding: 5px;\n}\n\nh3 {\n  width: 95%;\n  text-align: center;\n  padding: 5px;\n  font-size: 25px;\n  animation: place-ship-message-blink 2s infinite ease-in alternate;\n}\n\n@keyframes place-ship-message-blink {\n  from {\n    opacity: 1;\n    color: #e1bee7;\n  }\n  to {\n    opacity: 0.3;\n    color: white;\n  }\n}\n\n.input-modal .ready,\n.input-modal .rotate {\n  width: 35%;\n  border-radius: 5px;\n  font-size: 20px;\n  text-align: center;\n  border: 2px solid black;\n}\n\n.ready {\n  pointer-events: none;\n  opacity: 0.5;\n  background-color: #ffebee;\n  color: black;\n}\n\n.ready.active {\n  pointer-events: auto;\n  opacity: 1;\n  animation: ready-button 2s infinite;\n  animation-direction: alternate;\n  animation-timing-function: linear;\n  font-weight: bold;\n}\n\n.ready.active:hover {\n  cursor: pointer;\n}\n\n@keyframes ready-button {\n  0% {\n    background-color: #784682;\n  }\n  20% {\n    background-color: #834c89;\n  }\n  80% {\n    background-color: #c09cc4;\n  }\n  100% {\n    background-color: #efe7f0;\n  }\n}\n\n.rotate {\n  background-color: rgb(0, 131, 143);\n  color: black;\n}\n\n.input-modal .hover {\n  background-color: rgb(128, 128, 128, 0.6);\n}\n\n.input-modal .ship {\n  background-color: gray;\n}\n\n.input-modal .red,\n.input-modal .red.ship {\n  background-color: #ef5350;\n}\n\n.inputs-gameboard {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.gameboards {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1vw;\n  width: 95%;\n}\n\n.player-section {\n  margin-bottom: 20px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.player-header {\n  color: black;\n  margin-bottom: 10px;\n  width: 95%;\n  text-align: center;\n  padding: 5px;\n  font-size: 25px;\n  background-color: rgb(237, 231, 246, 0.5);\n}\n\n.gameboards .player-one-gameboard,\n.gameboards .player-two-gameboard,\n.inputs-gameboard {\n  width: 95%;\n  aspect-ratio: 1;\n  display: flex;\n  row-gap: 2px;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.player-one-gameboard .rows,\n.player-two-gameboard .rows,\n.inputs-gameboard .rows {\n  flex: 1;\n  gap: 4px;\n  display: flex;\n  width: 100%;\n  height: fit-content;\n}\n\n.player-one-gameboard .columns,\n.player-two-gameboard .columns {\n  flex: 1;\n  border: 1px solid #d1c4e9;\n  background-color: rgb(243, 229, 245, 0.1);\n}\n\n.inputs-gameboard .columns {\n  flex: 1;\n  border: 1px solid rgb(255, 255, 255, 0.5);\n}\n\n.player-one-gameboard .rows .columns.ship {\n  background-color: black;\n}\n\n.player-one-gameboard .rows .columns.ship.hit,\n.player-two-gameboard .rows .columns.ship.hit {\n  background: #5e35b1;\n}\n\n.player-one-gameboard .rows .columns.hit,\n.player-two-gameboard .rows .columns.hit {\n  background: #a7ffeb;\n  border: 1px solid black;\n  opacity: 0.7;\n  pointer-events: none;\n}\n\n.game-end-modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n  justify-content: center;\n  align-items: center;\n}\n\n.game-end-modal-content {\n  background-color: rgb(0, 0, 0, 0.9);\n  margin: 15% auto;\n  padding: 20px;\n  border-radius: 5px;\n  border: 1px solid #888;\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\n.game-end-modal-content .restart {\n  background-color: rgb(0, 131, 143);\n  font-size: 25px;\n  color: black;\n  padding: 5px;\n  border-radius: 5px;\n  text-align: center;\n  border: 1px solid black;\n  font-size: 20px;\n}\n\n.close {\n  color: #aaa;\n  float: right;\n  font-size: 40px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/normalize.css":
/*!**********************************!*\
  !*** ./src/styles/normalize.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/normalize.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/reset.css":
/*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/reset.css */ "./src/styles/reset.css");
/* harmony import */ var _styles_normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/normalize.css */ "./src/styles/normalize.css");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _modules_Game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Game */ "./src/modules/Game.js");
/* harmony import */ var _modules_DOM__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/DOM */ "./src/modules/DOM.js");





_modules_DOM__WEBPACK_IMPORTED_MODULE_4__["default"].execute();
_modules_Game__WEBPACK_IMPORTED_MODULE_3__["default"].execute();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLE1BQU0sTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sT0FBTyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sT0FBTyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLGdDQUFnQyw4QkFBOEIs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UEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFWLDREQUFBO0FBQ0F3Qiw2REFBQSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL0RPTS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvRE9NRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvR2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL1B1YnN1Yi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvU2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9ub3JtYWxpemUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL25vcm1hbGl6ZS5jc3M/NDNmNCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9yZXNldC5jc3M/NGNmYiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERPTUZhY3RvcnkgZnJvbSBcIi4vRE9NRmFjdG9yeVwiO1xuaW1wb3J0IHB1YnN1YiBmcm9tIFwiLi9QdWJzdWJcIjtcblxuY29uc3QgcmVjZWl2ZUNvbXB1dGVyQXR0YWNrID0gKFt4LCB5XSkgPT4ge1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLW9uZS1nYW1lYm9hcmRcIik7XG4gIGNvbnN0IHJvdyA9IHBsYXllckJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvd3M9XCIke3h9XCJdYCk7XG4gIGNvbnN0IGNvbHVtbiA9IHJvdy5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb2x1bW5zPVwiJHt5fVwiXWApO1xuICBjb2x1bW4uY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbn07XG5cbmNvbnN0IHNlbmRQbGF5ZXJBdHRhY2sgPSAoZXZlbnQpID0+IHtcbiAgaWYgKCFldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY29sdW1uc1wiKSkgcmV0dXJuO1xuICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgY29uc3QgeCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcImRhdGEtcm93c1wiKTtcbiAgY29uc3QgeSA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtbnNcIik7XG4gIHB1YnN1Yi5wdWJsaXNoKFwicGxheWVyLWF0dGFjay1zaGlwXCIsIFt4LCB5XSk7XG59O1xuXG5jb25zdCBjcmVhdGVHYW1lYm9hcmQgPSAobmFtZSwgYm9hcmQpID0+IHtcbiAgY29uc3QgZ3JpZCA9IERPTUZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc05hbWU6IG5hbWUgfSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgIGNvbnN0IHJvdyA9IERPTUZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwicm93c1wiLCBcImRhdGEtcm93c1wiOiBpIH0pO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgY29uc3QgY29sdW1uID0gRE9NRmFjdG9yeShcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJjb2x1bW5zXCIsXG4gICAgICAgIFwiZGF0YS1jb2x1bW5zXCI6IGosXG4gICAgICB9KTtcbiAgICAgIGlmIChib2FyZC5sZW5ndGggIT09IDAgJiYgdHlwZW9mIGJvYXJkW2ldW2pdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGNvbHVtbi5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgIH1cbiAgICAgIHJvdy5hcHBlbmQoY29sdW1uKTtcbiAgICB9XG4gICAgZ3JpZC5hcHBlbmQocm93KTtcbiAgfVxuICBpZiAobmFtZSA9PT0gXCJwbGF5ZXItdHdvLWdhbWVib2FyZFwiKSB7XG4gICAgZ3JpZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VuZFBsYXllckF0dGFjayk7XG4gIH1cbiAgcmV0dXJuIGdyaWQ7XG59O1xuXG5jb25zdCBhcHBlbmRHYW1lYm9hcmRzID0gKFtwbGF5ZXJCb2FyZCwgY29tcHV0ZXJCb2FyZF0pID0+IHtcbiAgY29uc3QgZ2FtZWJvYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZWJvYXJkc1wiKTtcbiAgY29uc3QgcGxheWVyT25lU2VjdGlvbiA9IERPTUZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwicGxheWVyLXNlY3Rpb25cIiB9KTtcbiAgY29uc3QgcGxheWVyT25lSGVhZGVyID0gRE9NRmFjdG9yeShcImgyXCIsIHtcbiAgICBjbGFzc05hbWU6IFwicGxheWVyLWhlYWRlclwiLFxuICAgIHRleHRDb250ZW50OiBcIllvdVwiLFxuICB9KTtcbiAgY29uc3QgcGxheWVyVHdvU2VjdGlvbiA9IERPTUZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwicGxheWVyLXNlY3Rpb25cIiB9KTtcbiAgY29uc3QgcGxheWVyVHdvSGVhZGVyID0gRE9NRmFjdG9yeShcImgyXCIsIHtcbiAgICBjbGFzc05hbWU6IFwicGxheWVyLWhlYWRlclwiLFxuICAgIHRleHRDb250ZW50OiBcIkNvbXB1dGVyXCIsXG4gIH0pO1xuICBwbGF5ZXJPbmVTZWN0aW9uLmFwcGVuZChcbiAgICBwbGF5ZXJPbmVIZWFkZXIsXG4gICAgY3JlYXRlR2FtZWJvYXJkKFwicGxheWVyLW9uZS1nYW1lYm9hcmRcIiwgcGxheWVyQm9hcmQpLFxuICApO1xuICBwbGF5ZXJUd29TZWN0aW9uLmFwcGVuZChcbiAgICBwbGF5ZXJUd29IZWFkZXIsXG4gICAgY3JlYXRlR2FtZWJvYXJkKFwicGxheWVyLXR3by1nYW1lYm9hcmRcIiwgY29tcHV0ZXJCb2FyZCksXG4gICk7XG4gIGdhbWVib2FyZHMuYXBwZW5kKHBsYXllck9uZVNlY3Rpb24pO1xuICBnYW1lYm9hcmRzLmFwcGVuZChwbGF5ZXJUd29TZWN0aW9uKTtcbn07XG5cbmNvbnN0IHJlbmRlcklucHV0TW9kYWwgPSAoKSA9PiB7XG4gIGNvbnN0IGlucHV0TW9kYWxEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LW1vZGFsXCIpO1xuICBjb25zdCBpbnB1dEdyaWQgPSBjcmVhdGVHYW1lYm9hcmQoXCJpbnB1dHMtZ2FtZWJvYXJkXCIsIFtdKTtcbiAgaW5wdXRNb2RhbERpdi5pbnNlcnRCZWZvcmUoaW5wdXRHcmlkLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlYWR5XCIpKTtcbn07XG5cbmNvbnN0IGlucHV0U2hpcHMgPSAoKSA9PiB7XG4gIGNvbnN0IGlucHV0R3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXRzLWdhbWVib2FyZFwiKTtcbiAgY29uc3QgY29sdW1ucyA9IFsuLi5pbnB1dEdyaWQucXVlcnlTZWxlY3RvckFsbChcIi5jb2x1bW5zXCIpXTtcbiAgY29uc3Qgcm90YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yb3RhdGVcIik7XG4gIGxldCBob3Jpem9udGFsID0gdHJ1ZTtcbiAgbGV0IHNoaXBzID0gW1xuICAgIHsgbmFtZTogXCJjYXJyaWVyXCIsIGxlbmd0aDogNSwgYWRkZWQ6IGZhbHNlIH0sXG4gICAgeyBuYW1lOiBcImRlc3Ryb3llclwiLCBsZW5ndGg6IDQsIGFkZGVkOiBmYWxzZSB9LFxuICAgIHsgbmFtZTogXCJjcnVpc2VyXCIsIGxlbmd0aDogMywgYWRkZWQ6IGZhbHNlIH0sXG4gICAgeyBuYW1lOiBcInN1Ym1hcmluZVwiLCBsZW5ndGg6IDMsIGFkZGVkOiBmYWxzZSB9LFxuICAgIHsgbmFtZTogXCJwYXRyb2xcIiwgbGVuZ3RoOiAyLCBhZGRlZDogZmFsc2UgfSxcbiAgICB7IG5hbWU6IFwic2NvdXRcIiwgbGVuZ3RoOiAxLCBhZGRlZDogZmFsc2UgfSxcbiAgXTtcblxuICBjb25zdCBtb3VzZWVudGVyQ2FsbGJhY2tIb3Jpem9udGFsID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgY29sdW1uID0gTnVtYmVyKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtbnNcIikpO1xuICAgIGNvbnN0IGNlbGxzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudC5jdXJyZW50VGFyZ2V0LnNoaXBMZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgY29sID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYFtkYXRhLWNvbHVtbnM9XCIke2NvbHVtbiArIGl9XCJdYCxcbiAgICAgICk7XG4gICAgICBjZWxscy5wdXNoKGNvbCk7XG4gICAgfVxuICAgIGlmIChjZWxscy5zb21lKChpdGVtKSA9PiBpdGVtID09PSBudWxsKSkge1xuICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJyZWRcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChjZWxscy5zb21lKChpdGVtKSA9PiBpdGVtLmNsYXNzTGlzdC5jb250YWlucyhcInNoaXBcIikpKSB7XG4gICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZChcInJlZFwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2VsbHMuZm9yRWFjaCgoaXRlbSkgPT5cbiAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS1vcmllbnRhdGlvblwiLCBcImhvcml6b250YWxcIiksXG4gICAgKTtcbiAgICBjZWxscy5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoXCJob3ZlclwiKSk7XG4gIH07XG5cbiAgY29uc3QgbW91c2VlbnRlckNhbGxiYWNrVmVydGljYWwgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBjb2x1bW4gPSBOdW1iZXIoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uc1wiKSk7XG4gICAgY29uc3Qgcm93ID0gTnVtYmVyKGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcImRhdGEtcm93c1wiKSk7XG4gICAgY29uc3QgZ3JpZCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgY29uc3QgY2VsbHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50LmN1cnJlbnRUYXJnZXQuc2hpcExlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBmb2N1c1JvdyA9IGdyaWQucXVlcnlTZWxlY3RvcihgW2RhdGEtcm93cz1cIiR7cm93ICsgaX1cIl1gKTtcbiAgICAgIGlmICghZm9jdXNSb3cpIGJyZWFrO1xuICAgICAgY2VsbHMucHVzaChmb2N1c1Jvdy5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb2x1bW5zPVwiJHtjb2x1bW59XCJdYCkpO1xuICAgIH1cbiAgICBpZiAoY2VsbHMubGVuZ3RoIDwgZXZlbnQuY3VycmVudFRhcmdldC5zaGlwTGVuZ3RoKSB7XG4gICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZChcInJlZFwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNlbGxzLnNvbWUoKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hpcFwiKSkpIHtcbiAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwicmVkXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjZWxscy5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLnNldEF0dHJpYnV0ZShcImRhdGEtb3JpZW50YXRpb25cIiwgXCJ2ZXJ0aWNhbFwiKSk7XG4gICAgY2VsbHMuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QuYWRkKFwiaG92ZXJcIikpO1xuICB9O1xuXG4gIGNvbnN0IG1vdXNlbGVhdmVDYWxsYmFjayA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwicmVkXCIpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5jb2x1bW5zXCIpXG4gICAgICAuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiaG92ZXJcIikpO1xuICB9O1xuXG4gIGNvbnN0IHNoaXBzUmVzZXQgPSAoKSA9PiB7XG4gICAgc2hpcHMgPSBbXG4gICAgICB7IG5hbWU6IFwiY2FycmllclwiLCBsZW5ndGg6IDUsIGFkZGVkOiBmYWxzZSB9LFxuICAgICAgeyBuYW1lOiBcImRlc3Ryb3llclwiLCBsZW5ndGg6IDQsIGFkZGVkOiBmYWxzZSB9LFxuICAgICAgeyBuYW1lOiBcImNydWlzZXJcIiwgbGVuZ3RoOiAzLCBhZGRlZDogZmFsc2UgfSxcbiAgICAgIHsgbmFtZTogXCJzdWJtYXJpbmVcIiwgbGVuZ3RoOiAzLCBhZGRlZDogZmFsc2UgfSxcbiAgICAgIHsgbmFtZTogXCJwYXRyb2xcIiwgbGVuZ3RoOiAyLCBhZGRlZDogZmFsc2UgfSxcbiAgICAgIHsgbmFtZTogXCJzY291dFwiLCBsZW5ndGg6IDEsIGFkZGVkOiBmYWxzZSB9LFxuICAgIF07XG4gIH07XG5cbiAgY29uc3QgaGlkZUlucHV0TW9kYWwgPSAoKSA9PiB7XG4gICAgaWYgKHNoaXBzWzBdLnggPT09IHVuZGVmaW5lZCkgcmV0dXJuOyAvLyByZXR1cm4gd2hlbiBubyBzaGlwcyBlbnRlcmVkXG4gICAgY29uc3QgaW5wdXRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXQtbW9kYWxcIik7XG4gICAgaW5wdXRHcmlkLnJlbW92ZSgpO1xuICAgIGlucHV0TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIHB1YnN1Yi5wdWJsaXNoKFwiaW5wdXQtc2hpcHNcIiwgc2hpcHMpO1xuICAgIHNoaXBzUmVzZXQoKTtcbiAgfTtcblxuICBjb25zdCBhY3RpdmF0ZVJlYWR5RGl2ID0gKCkgPT4ge1xuICAgIGNvbnN0IHJlYWR5RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZWFkeVwiKTtcbiAgICByZWFkeURpdi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIHJlYWR5RGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoaWRlSW5wdXRNb2RhbCk7XG4gIH07XG5cbiAgY29uc3QgY2xpY2tDYWxsYmFjayA9IChldmVudCkgPT4ge1xuICAgIGlmICghZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNvbHVtbnNcIikpIHJldHVybjtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInJlZFwiKSkgcmV0dXJuO1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hpcFwiKSkgcmV0dXJuO1xuICAgIGNvbnN0IHNoaXBUb0FkZCA9IHNoaXBzLmZpbmQoKHNoaXApID0+ICFzaGlwLmFkZGVkKTtcbiAgICBpZiAoIXNoaXBUb0FkZCkgcmV0dXJuO1xuICAgIGlmIChzaGlwVG9BZGQubGVuZ3RoID09PSAxKSB7XG4gICAgICBjb2x1bW5zLmZvckVhY2goKGNlbGwpID0+XG4gICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgbW91c2VlbnRlckNhbGxiYWNrSG9yaXpvbnRhbCksXG4gICAgICApO1xuICAgICAgY29sdW1ucy5mb3JFYWNoKChjZWxsKSA9PlxuICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIG1vdXNlZW50ZXJDYWxsYmFja1ZlcnRpY2FsKSxcbiAgICAgICk7XG4gICAgICBhY3RpdmF0ZVJlYWR5RGl2KCk7XG4gICAgfVxuICAgIGNvbnN0IHNoaXBUb0FkZEluZGV4ID0gc2hpcHMuaW5kZXhPZihzaGlwVG9BZGQpO1xuICAgIHNoaXBUb0FkZC5hZGRlZCA9IHRydWU7XG4gICAgc2hpcFRvQWRkLnggPSBOdW1iZXIoZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1yb3dzXCIpKTtcbiAgICBzaGlwVG9BZGQueSA9IE51bWJlcihldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW5zXCIpKTtcbiAgICBzaGlwVG9BZGQub3JpZW50YXRpb24gPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1vcmllbnRhdGlvblwiKTtcbiAgICBjb25zdCByZXF1aXJlZCA9IGlucHV0R3JpZC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbHVtbnMuaG92ZXJcIik7XG4gICAgcmVxdWlyZWQuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKSk7XG4gICAgcmVxdWlyZWQuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QuYWRkKHNoaXBUb0FkZC5uYW1lKSk7XG4gICAgY29uc3QgcGxhY2VTaGlwTWVzc2FnZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxhY2Utc2hpcC1tZXNzYWdlXCIpO1xuICAgIGlmIChzaGlwVG9BZGQubGVuZ3RoID09PSAxKSB7XG4gICAgICBwbGFjZVNoaXBNZXNzYWdlRGl2LnRleHRDb250ZW50ID1cbiAgICAgICAgXCJBbGwgc2hpcHMgcGxhY2VkLCBtb3ZlIHRvIGJhdHRsZWdyb3VuZCFcIjtcbiAgICB9XG4gICAgaWYgKCFzaGlwc1tzaGlwVG9BZGRJbmRleCArIDFdKSByZXR1cm47XG4gICAgcGxhY2VTaGlwTWVzc2FnZURpdi50ZXh0Q29udGVudCA9IGBQbGFjZSB5b3VyICR7XG4gICAgICBzaGlwc1tzaGlwVG9BZGRJbmRleCArIDFdLm5hbWVcbiAgICB9IWA7XG4gICAgY29sdW1ucy5mb3JFYWNoKFxuICAgICAgKGNlbGwpID0+IChjZWxsLnNoaXBMZW5ndGggPSBzaGlwc1tzaGlwVG9BZGRJbmRleCArIDFdLmxlbmd0aCksXG4gICAgKTtcbiAgfTtcblxuICBjb2x1bW5zLmZvckVhY2goKGNlbGwpID0+IChjZWxsLnNoaXBMZW5ndGggPSA1KSk7XG5cbiAgY29sdW1ucy5mb3JFYWNoKChjZWxsKSA9PlxuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgbW91c2VlbnRlckNhbGxiYWNrSG9yaXpvbnRhbCksXG4gICk7XG5cbiAgY29sdW1ucy5mb3JFYWNoKChjZWxsKSA9PlxuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgbW91c2VsZWF2ZUNhbGxiYWNrKSxcbiAgKTtcblxuICBpbnB1dEdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrQ2FsbGJhY2spO1xuXG4gIHJvdGF0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICBjb2x1bW5zLmZvckVhY2goKGNlbGwpID0+XG4gICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgbW91c2VlbnRlckNhbGxiYWNrSG9yaXpvbnRhbCksXG4gICAgICApO1xuICAgICAgY29sdW1ucy5mb3JFYWNoKChjZWxsKSA9PlxuICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIG1vdXNlZW50ZXJDYWxsYmFja1ZlcnRpY2FsKSxcbiAgICAgICk7XG4gICAgICBob3Jpem9udGFsID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbHVtbnMuZm9yRWFjaCgoY2VsbCkgPT5cbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBtb3VzZWVudGVyQ2FsbGJhY2tIb3Jpem9udGFsKSxcbiAgICAgICk7XG4gICAgICBjb2x1bW5zLmZvckVhY2goKGNlbGwpID0+XG4gICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgbW91c2VlbnRlckNhbGxiYWNrVmVydGljYWwpLFxuICAgICAgKTtcbiAgICAgIGhvcml6b250YWwgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCByZW1vdmVQbGF5ZXJTZWN0aW9ucyA9ICgpID0+IHtcbiAgY29uc3QgcGxheWVyU2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXllci1zZWN0aW9uXCIpO1xuICBwbGF5ZXJTZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiBzZWN0aW9uLnJlbW92ZSgpKTtcbn07XG5cbmNvbnN0IHJlc3RhcnRHYW1lID0gKCkgPT4ge1xuICByZW1vdmVQbGF5ZXJTZWN0aW9ucygpO1xuICBjb25zdCBnYW1lRW5kTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtZW5kLW1vZGFsXCIpO1xuICBnYW1lRW5kTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBjb25zdCBpbnB1dE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dC1tb2RhbFwiKTtcbiAgaW5wdXRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gIHJlbmRlcklucHV0TW9kYWwoKTtcbiAgaW5wdXRTaGlwcygpO1xuICBjb25zdCBwbGFjZVNoaXBNZXNzYWdlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGFjZS1zaGlwLW1lc3NhZ2VcIik7XG4gIHBsYWNlU2hpcE1lc3NhZ2VEaXYudGV4dENvbnRlbnQgPSBcIlBsYWNlIHlvdXIgY2FycmllciFcIjtcbiAgcHVic3ViLnB1Ymxpc2goXCJyZXN0YXJ0LWdhbWVcIik7XG59O1xuXG5jb25zdCBvcGVuR2FtZUVuZE1vZGFsID0gKHZpY3RvcikgPT4ge1xuICBjb25zdCBnYW1lRW5kTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtZW5kLW1vZGFsXCIpO1xuICBnYW1lRW5kTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1lbmQtbW9kYWwgLnRleHRcIik7XG4gIHRleHQudGV4dENvbnRlbnQgPSBgJHt2aWN0b3J9IHdvbiFgO1xuICBjb25zdCByZXN0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLWVuZC1tb2RhbCAucmVzdGFydFwiKTtcbiAgcmVzdGFydC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVzdGFydEdhbWUpO1xuICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1lbmQtbW9kYWwgLmNsb3NlXCIpO1xuICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGdhbWVFbmRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH0pO1xufTtcblxuY29uc3Qgc2hvd0FsZXJ0ID0gKHZpY3RvcikgPT4ge1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci10d28tZ2FtZWJvYXJkXCIpXG4gICAgLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZW5kUGxheWVyQXR0YWNrKTtcbiAgb3BlbkdhbWVFbmRNb2RhbCh2aWN0b3IpO1xufTtcblxuY29uc3QgRE9NTW9kdWxlT2JqZWN0ID0ge1xuICBleGVjdXRlKCkge1xuICAgIHJlbmRlcklucHV0TW9kYWwoKTtcbiAgICBpbnB1dFNoaXBzKCk7XG4gICAgcHVic3ViLnN1YnNjcmliZShcImZsZWV0cy1pbml0aWFsaXplZFwiLCBhcHBlbmRHYW1lYm9hcmRzKTtcbiAgICBwdWJzdWIuc3Vic2NyaWJlKFwiY29tcHV0ZXItYXR0YWNrLXNoaXBcIiwgcmVjZWl2ZUNvbXB1dGVyQXR0YWNrKTtcbiAgICBwdWJzdWIuc3Vic2NyaWJlKFwiZ2FtZS1lbmRcIiwgc2hvd0FsZXJ0KTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERPTU1vZHVsZU9iamVjdDtcbiIsImNvbnN0IERPTUZhY3RvcnkgPSAoZWxlbWVudCwgYXR0cmlidXRlcykgPT4ge1xuICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgZm9yIChjb25zdCBhdHRyaWJ1dGUgaW4gYXR0cmlidXRlcykge1xuICAgIGlmICghbmV3RWxlbWVudFthdHRyaWJ1dGVdKSB7XG4gICAgICBpZiAoYXR0cmlidXRlLnRvU3RyaW5nKCkuaW5jbHVkZXMoXCJkYXRhXCIpKSB7XG4gICAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZS50b1N0cmluZygpLCBhdHRyaWJ1dGVzW2F0dHJpYnV0ZV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3RWxlbWVudFthdHRyaWJ1dGVdID0gYXR0cmlidXRlc1thdHRyaWJ1dGVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbmV3RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERPTUZhY3Rvcnk7XG4iLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9TaGlwXCI7XG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL0dhbWVib2FyZFwiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9QbGF5ZXJcIjtcbmltcG9ydCBwdWJzdWIgZnJvbSBcIi4vUHVic3ViXCI7XG5cbmxldCBwbGF5ZXIgPSBQbGF5ZXIoXCJwbGF5ZXJcIiwgR2FtZWJvYXJkKCkpO1xubGV0IGNvbXB1dGVyID0gUGxheWVyKFwiY29tcHV0ZXJcIiwgR2FtZWJvYXJkKCkpO1xuXG5jb25zdCBhZGRTaGlwcyA9IChzaGlwcykgPT4ge1xuICBmb3IgKGNvbnN0IHNoaXAgb2Ygc2hpcHMpIHtcbiAgICBwbGF5ZXIuZmxlZXRcbiAgICAgIC5hdChzaGlwLngsIHNoaXAueSlcbiAgICAgIC5hZGQoU2hpcChzaGlwLm5hbWUsIHNoaXAubGVuZ3RoKSwgc2hpcC5vcmllbnRhdGlvbik7XG4gICAgY29tcHV0ZXIuYXV0b0FkZChTaGlwKHNoaXAubmFtZSwgc2hpcC5sZW5ndGgpKTtcbiAgfVxuICBwdWJzdWIucHVibGlzaChcImZsZWV0cy1pbml0aWFsaXplZFwiLCBbXG4gICAgcGxheWVyLmZsZWV0LmJvYXJkLFxuICAgIGNvbXB1dGVyLmZsZWV0LmJvYXJkLFxuICBdKTtcbn07XG5cbmNvbnN0IGNvbXB1dGVyQXR0YWNrU2hpcCA9ICgpID0+IHtcbiAgY29uc3QgW3gsIHldID0gY29tcHV0ZXIuYXR0YWNrKHBsYXllcikuYXV0bygpO1xuICBwdWJzdWIucHVibGlzaChcImNvbXB1dGVyLWF0dGFjay1zaGlwXCIsIFt4LCB5XSk7XG4gIGlmIChwbGF5ZXIuZmxlZXQuYXJlQWxsU2hpcHNTdW5rKCkpIHtcbiAgICBwdWJzdWIucHVibGlzaChcImdhbWUtZW5kXCIsIFwiQ29tcHV0ZXJcIik7XG4gIH1cbn07XG5cbmNvbnN0IHBsYXllckF0dGFja1NoaXAgPSAoW3gsIHldKSA9PiB7XG4gIHBsYXllci5hdHRhY2soY29tcHV0ZXIpLmF0KHgsIHkpO1xuICBpZiAoY29tcHV0ZXIuZmxlZXQuYXJlQWxsU2hpcHNTdW5rKCkpIHtcbiAgICBwdWJzdWIucHVibGlzaChcImdhbWUtZW5kXCIsIFwiWW91XCIpO1xuICB9XG4gIGNvbXB1dGVyQXR0YWNrU2hpcCgpO1xufTtcblxuY29uc3QgcmVzdGFydEdhbWUgPSAoKSA9PiB7XG4gIHBsYXllciA9IG51bGw7XG4gIGNvbXB1dGVyID0gbnVsbDtcbiAgcGxheWVyID0gUGxheWVyKFwicGxheWVyXCIsIEdhbWVib2FyZCgpKTtcbiAgY29tcHV0ZXIgPSBQbGF5ZXIoXCJjb21wdXRlclwiLCBHYW1lYm9hcmQoKSk7XG59O1xuXG5jb25zdCBnYW1lTW9kdWxlT2JqZWN0ID0ge1xuICBleGVjdXRlKCkge1xuICAgIHB1YnN1Yi5zdWJzY3JpYmUoXCJpbnB1dC1zaGlwc1wiLCBhZGRTaGlwcyk7XG4gICAgcHVic3ViLnN1YnNjcmliZShcInBsYXllci1hdHRhY2stc2hpcFwiLCBwbGF5ZXJBdHRhY2tTaGlwKTtcbiAgICBwdWJzdWIuc3Vic2NyaWJlKFwicmVzdGFydC1nYW1lXCIsIHJlc3RhcnRHYW1lKTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWVNb2R1bGVPYmplY3Q7XG4iLCJjb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gQXJyYXkoMTApXG4gICAgLmZpbGwoXCJcIilcbiAgICAubWFwKChlbGVtZW50KSA9PiBBcnJheSgxMCkuZmlsbChlbGVtZW50KSk7XG5cbiAgY29uc3Qgc2hpcHNBcnJheSA9IFtdO1xuXG4gIGxldCBsYXRlc3RBdHRhY2tTdGF0dXMgPSBcIlwiO1xuXG4gIGNvbnN0IGNoZWNrSWZTaGlwQ2FuQmVBZGRlZCA9ICh4LCB5LCBvcmllbnRhdGlvbiwgc2hpcExlbmd0aCkgPT4ge1xuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIGNvbnN0IHJlcXVpcmVkU3BhY2UgPSBbLi4uYm9hcmRdW3hdLnNsaWNlKHksIHkgKyBzaGlwTGVuZ3RoKTtcbiAgICAgIGlmIChyZXF1aXJlZFNwYWNlLmxlbmd0aCAhPT0gc2hpcExlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIHJlcXVpcmVkU3BhY2UuZXZlcnkoKGVsZW1lbnQpID0+IGVsZW1lbnQgPT09IFwiXCIpO1xuICAgIH1cbiAgICBpZiAob3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgY29uc3QgcmVxdWlyZWRTcGFjZSA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gOSAtIHg7IGkgKz0gMSkge1xuICAgICAgICByZXF1aXJlZFNwYWNlLnB1c2goYm9hcmRbeCArIGldW3ldKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZXF1aXJlZFNwYWNlLmxlbmd0aCA8IHNoaXBMZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiByZXF1aXJlZFNwYWNlLmV2ZXJ5KChlbGVtZW50KSA9PiBlbGVtZW50ID09PSBcIlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIFwiXCI7XG4gIH07XG5cbiAgY29uc3QgYWRkU2hpcEluQXJyYXkgPSAoc2hpcCkgPT4ge1xuICAgIHNoaXBzQXJyYXkucHVzaChzaGlwKTtcbiAgfTtcblxuICBjb25zdCBhZGRTaGlwT25Cb2FyZCA9ICh4LCB5LCBvcmllbnRhdGlvbiwgc2hpcCkgPT4ge1xuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIGJvYXJkW3hdLmZpbGwoc2hpcCwgeSwgeSArIHNoaXAubGVuZ3RoKTtcbiAgICB9XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIGZvciAobGV0IGkgPSB4OyBpIDwgc2hpcC5sZW5ndGggKyB4OyBpICs9IDEpIHtcbiAgICAgICAgYm9hcmRbaV1beV0gPSBzaGlwO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBhdHRhY2tTaGlwID0gKHgsIHkpID0+IHtcbiAgICBjb25zdCBzaGlwID0gYm9hcmRbeF1beV07XG4gICAgbGV0IGhpdFBvc2l0aW9uID0gMDtcbiAgICAvLyBnZXQgbGVmdCBvZiBnYW1lYm9hcmQgZnJvbSBoaXQgcG9zaXRpb25cbiAgICBjb25zdCB0YXJnZXRBcmVhSG9yaXpvbnRhbCA9IGJvYXJkW3hdLnNsaWNlKDAsIHkpO1xuICAgIC8vIGZpbHRlciB0byBnZXQgbGVmdCBvZiBzaGlwIGZyb20gaGl0IHBvc2l0aW9uXG4gICAgY29uc3Qgc2hpcExlZnRTaWRlID0gdGFyZ2V0QXJlYUhvcml6b250YWwuZmlsdGVyKFxuICAgICAgKGVsZW1lbnQpID0+IGVsZW1lbnQubmFtZSA9PT0gc2hpcC5uYW1lLFxuICAgICk7XG4gICAgY29uc3QgdGFyZ2V0QXJlYVZlcnRpY2FsID0gW107XG4gICAgLy8gZ2V0IHVwcGVyIG9mIGdhbWVib2FyZCBmcm9tIGhpdCBwb3NpdGlvblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgeDsgaSArPSAxKSB7XG4gICAgICB0YXJnZXRBcmVhVmVydGljYWwucHVzaChib2FyZFtpXVt5XSk7XG4gICAgfVxuICAgIC8vIGZpbHRlciB0byBnZXQgdXBwZXIgb2Ygc2hpcCBmcm9tIGhpdCBwb3NpdGlvblxuICAgIGNvbnN0IHNoaXBVcHBlclNpZGUgPSB0YXJnZXRBcmVhVmVydGljYWwuZmlsdGVyKFxuICAgICAgKGVsZW1lbnQpID0+IGVsZW1lbnQubmFtZSA9PT0gc2hpcC5uYW1lLFxuICAgICk7XG5cbiAgICBoaXRQb3NpdGlvbiA9ICgoKSA9PiB7XG4gICAgICBpZiAoc2hpcExlZnRTaWRlLmxlbmd0aCA9PT0gMCAmJiBzaGlwVXBwZXJTaWRlLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDA7XG4gICAgICBpZiAoc2hpcExlZnRTaWRlLmxlbmd0aCA9PT0gMCAmJiBzaGlwVXBwZXJTaWRlLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICByZXR1cm4gc2hpcFVwcGVyU2lkZS5sZW5ndGg7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2hpcExlZnRTaWRlLmxlbmd0aDtcbiAgICB9KSgpO1xuXG4gICAgaWYgKHNoaXAuaXNIaXRBdChoaXRQb3NpdGlvbikpIHtcbiAgICAgIGxhdGVzdEF0dGFja1N0YXR1cyA9IFwiaWxsZWdhbFwiO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNoaXAuaGl0KGhpdFBvc2l0aW9uKTtcbiAgICBsYXRlc3RBdHRhY2tTdGF0dXMgPSBcInN1Y2Nlc3MvaGl0XCI7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgYm9hcmQoKSB7XG4gICAgICByZXR1cm4gWy4uLmJvYXJkXTtcbiAgICB9LFxuICAgIGdldCBzaGlwc0FycmF5KCkge1xuICAgICAgcmV0dXJuIFsuLi5zaGlwc0FycmF5XTtcbiAgICB9LFxuICAgIGdldCBsYXRlc3RBdHRhY2tTdGF0dXMoKSB7XG4gICAgICByZXR1cm4gbGF0ZXN0QXR0YWNrU3RhdHVzO1xuICAgIH0sXG4gICAgYXQoeCwgeSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYWRkKHNoaXAsIG9yaWVudGF0aW9uKSB7XG4gICAgICAgICAgaWYgKGNoZWNrSWZTaGlwQ2FuQmVBZGRlZCh4LCB5LCBvcmllbnRhdGlvbiwgc2hpcC5sZW5ndGgpKSB7XG4gICAgICAgICAgICBhZGRTaGlwSW5BcnJheShzaGlwKTtcbiAgICAgICAgICAgIGFkZFNoaXBPbkJvYXJkKHgsIHksIG9yaWVudGF0aW9uLCBzaGlwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlY2VpdmVBdHRhY2soKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZFt4XVt5XSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgYXR0YWNrU2hpcCh4LCB5KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGJvYXJkW3hdW3ldID09PSBcIlhcIikge1xuICAgICAgICAgICAgbGF0ZXN0QXR0YWNrU3RhdHVzID0gXCJpbGxlZ2FsXCI7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGJvYXJkW3hdW3ldID0gXCJYXCI7XG4gICAgICAgICAgbGF0ZXN0QXR0YWNrU3RhdHVzID0gXCJzdWNjZXNzL21pc3NcIjtcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSxcbiAgICBhcmVBbGxTaGlwc1N1bmsoKSB7XG4gICAgICByZXR1cm4gWy4uLnNoaXBzQXJyYXldLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKTtcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiY29uc3QgUGxheWVyID0gKG5hbWUsIGZsZWV0KSA9PiB7XG4gIGNvbnN0IGhpdFBvc2l0aW9uID0geyB4OiB1bmRlZmluZWQsIHk6IHVuZGVmaW5lZCB9O1xuICBsZXQgdGFyZ2V0QXJlYSA9IFtdO1xuXG4gIGNvbnN0IHVzZVRhcmdldEFyZWEgPSAodGFyZ2V0KSA9PiB7XG4gICAgaWYgKHRhcmdldC5sZW5ndGggPT09IDApIHtcbiAgICAgIGhpdFBvc2l0aW9uLnggPSB1bmRlZmluZWQ7XG4gICAgICBoaXRQb3NpdGlvbi55ID0gdW5kZWZpbmVkO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBoaXRQb3NpdGlvbi54ID0gdGFyZ2V0WzBdLng7XG4gICAgaGl0UG9zaXRpb24ueSA9IHRhcmdldFswXS55O1xuICAgIHRhcmdldEFyZWEuc3BsaWNlKDAsIDEpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICByZXR1cm4gbmFtZTtcbiAgICB9LFxuICAgIGdldCBmbGVldCgpIHtcbiAgICAgIHJldHVybiBmbGVldDtcbiAgICB9LFxuICAgIGF0dGFjayhlbmVteSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYXQoeCwgeSkge1xuICAgICAgICAgIGVuZW15LmZsZWV0LmF0KHgsIHkpLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgICAgIH0sXG4gICAgICAgIGF1dG8oKSB7XG4gICAgICAgICAgdXNlVGFyZ2V0QXJlYSh0YXJnZXRBcmVhKTtcblxuICAgICAgICAgIGNvbnN0IHggPSAoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGhpdFBvc2l0aW9uLnggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGhpdFBvc2l0aW9uLng7XG4gICAgICAgICAgfSkoKTtcbiAgICAgICAgICBjb25zdCB5ID0gKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChoaXRQb3NpdGlvbi55ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBoaXRQb3NpdGlvbi55O1xuICAgICAgICAgIH0pKCk7XG5cbiAgICAgICAgICBlbmVteS5mbGVldC5hdCh4LCB5KS5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuXG4gICAgICAgICAgaWYgKGVuZW15LmZsZWV0LmxhdGVzdEF0dGFja1N0YXR1cyA9PT0gXCJpbGxlZ2FsXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmF1dG8oKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZW5lbXkuZmxlZXQubGF0ZXN0QXR0YWNrU3RhdHVzID09PSBcInN1Y2Nlc3MvaGl0XCIpIHtcbiAgICAgICAgICAgIHRhcmdldEFyZWEgPSBbXTtcbiAgICAgICAgICAgIGlmICh5ICsgMSA8PSA5KSB7XG4gICAgICAgICAgICAgIHRhcmdldEFyZWEucHVzaCh7IHgsIHk6IHkgKyAxIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHkgLSAxID49IDApIHtcbiAgICAgICAgICAgICAgdGFyZ2V0QXJlYS5wdXNoKHsgeCwgeTogeSAtIDEgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoeCArIDEgPD0gOSkge1xuICAgICAgICAgICAgICB0YXJnZXRBcmVhLnB1c2goeyB4OiB4ICsgMSwgeSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh4IC0gMSA+PSAwKSB7XG4gICAgICAgICAgICAgIHRhcmdldEFyZWEucHVzaCh7IHg6IHggLSAxLCB5IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBbeCwgeV07XG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0sXG4gICAgYXV0b0FkZChzaGlwKSB7XG4gICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIGNvbnN0IG9yaWVudGF0aW9ucyA9IFtcImhvcml6b250YWxcIiwgXCJ2ZXJ0aWNhbFwiXTtcbiAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gb3JpZW50YXRpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpXTtcblxuICAgICAgZmxlZXQuYXQoeCwgeSkuYWRkKHNoaXAsIG9yaWVudGF0aW9uKTtcblxuICAgICAgaWYgKCFmbGVldC5zaGlwc0FycmF5LmluY2x1ZGVzKHNoaXApKSB7XG4gICAgICAgIHRoaXMuYXV0b0FkZChzaGlwKTtcbiAgICAgIH1cbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIiwiY29uc3QgcHVic3ViID0ge1xuICBldmVudHM6IHt9LFxuICBwdWJsaXNoKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgIGlmIChwdWJzdWIuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIHB1YnN1Yi5ldmVudHNbZXZlbnROYW1lXS5mb3JFYWNoKChjYWxsYmFjaykgPT4gY2FsbGJhY2soZGF0YSkpO1xuICAgIH1cbiAgfSxcbiAgc3Vic2NyaWJlKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocHVic3ViLmV2ZW50c1tldmVudE5hbWVdKSkge1xuICAgICAgcHVic3ViLmV2ZW50c1tldmVudE5hbWVdID0gW107XG4gICAgfVxuICAgIHB1YnN1Yi5ldmVudHNbZXZlbnROYW1lXS5wdXNoKGNhbGxiYWNrKTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHB1YnN1YjtcbiIsImNvbnN0IFNoaXAgPSAobmFtZSwgbGVuZ3RoKSA9PiB7XG4gIGxldCBzaGlwQXJyYXkgPSBBcnJheShsZW5ndGgpLmZpbGwoXCJcIik7XG5cbiAgY29uc3QgaGl0ID0gKHBvc2l0aW9uKSA9PiB7XG4gICAgc2hpcEFycmF5ID0gWy4uLnNoaXBBcnJheV0ubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIGluZGV4ID09PSBwb3NpdGlvbiA/IFwiaGl0XCIgOiBlbGVtZW50O1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGlzSGl0QXQgPSAocG9zaXRpb24pID0+IHtcbiAgICByZXR1cm4gWy4uLnNoaXBBcnJheV1bcG9zaXRpb25dID09PSBcImhpdFwiO1xuICB9O1xuXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICByZXR1cm4gWy4uLnNoaXBBcnJheV0uZXZlcnkoKGVsZW1lbnQpID0+IGVsZW1lbnQgPT09IFwiaGl0XCIpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICByZXR1cm4gbmFtZTtcbiAgICB9LFxuICAgIGdldCBsZW5ndGgoKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH0sXG4gICAgZ2V0IHNoaXBBcnJheSgpIHtcbiAgICAgIHJldHVybiBbLi4uc2hpcEFycmF5XTtcbiAgICB9LFxuICAgIGhpdCxcbiAgICBpc0hpdEF0LFxuICAgIGlzU3VuayxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICAgKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICAgICAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gICAgICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICAgICAqL1xcblxcbm1haW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAgICAgKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICAgICAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICAgICAqL1xcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAgICAgKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gICAgICovXFxuXFxuaHIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgICAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gICAgICovXFxuXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAgICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAgICAgKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gICAgICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gICAgICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gICAgICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gICAgICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICAgICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgICAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gICAgICovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAgICovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAgICAgKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gICAgICogYWxsIGJyb3dzZXJzLlxcbiAgICAgKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICAgKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAgICAgKi9cXG5cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICAgKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gICAgICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAgICAgKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgICAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAgICAgKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAgICAgKi9cXG5cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAgICAgKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gICAgICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAgICAgKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gIC8qIDEgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gICAgICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gICAgICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAgICAgKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAgICAgKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gICAgICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAgICAgKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcbiAgICAgKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICAgICAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICAgICAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICAgICAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gICAgICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAgICAgKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gICAgICovXFxuXFxubGVnZW5kIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxufVxcblxcbi8qKlxcbiAgICAgKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAgICAgKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbiAgICAgKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gICAgICovXFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAgICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gICAgICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcbiAgICAgKi9cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICAgKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICAgICAqL1xcblxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gICAgICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICAgICAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAgICAgKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICAgKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICAgICAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAgICAgKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAgICAgKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICAgICAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAgICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAgICAgKi9cXG5cXG5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAgICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgICAqL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBNaXNjXFxuICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gICAgICovXFxuXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICAgICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAgICAgKi9cXG5cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL25vcm1hbGl6ZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMkVBQTJFOztBQUUzRTsrRUFDK0U7O0FBRS9FOzs7RUFHRTs7QUFFRjtFQUNFLGlCQUFpQixFQUFFLE1BQU07RUFDekIsOEJBQThCLEVBQUUsTUFBTTtBQUN4Qzs7QUFFQTttRkFDbUY7O0FBRW5GOztNQUVNOztBQUVOO0VBQ0UsU0FBUztBQUNYOztBQUVBOztNQUVNOztBQUVOO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7O01BR007O0FBRU47RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO21GQUNtRjs7QUFFbkY7OztNQUdNOztBQUVOO0VBQ0UsdUJBQXVCLEVBQUUsTUFBTTtFQUMvQixTQUFTLEVBQUUsTUFBTTtFQUNqQixpQkFBaUIsRUFBRSxNQUFNO0FBQzNCOztBQUVBOzs7TUFHTTs7QUFFTjtFQUNFLGlDQUFpQyxFQUFFLE1BQU07RUFDekMsY0FBYyxFQUFFLE1BQU07QUFDeEI7O0FBRUE7bUZBQ21GOztBQUVuRjs7TUFFTTs7QUFFTjtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTs7O01BR007O0FBRU47RUFDRSxtQkFBbUIsRUFBRSxNQUFNO0VBQzNCLDBCQUEwQixFQUFFLE1BQU07RUFDbEMsaUNBQWlDLEVBQUUsTUFBTTtBQUMzQzs7QUFFQTs7TUFFTTs7QUFFTjs7RUFFRSxtQkFBbUI7QUFDckI7O0FBRUE7OztNQUdNOztBQUVOOzs7RUFHRSxpQ0FBaUMsRUFBRSxNQUFNO0VBQ3pDLGNBQWMsRUFBRSxNQUFNO0FBQ3hCOztBQUVBOztNQUVNOztBQUVOO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7O01BR007O0FBRU47O0VBRUUsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTttRkFDbUY7O0FBRW5GOztNQUVNOztBQUVOO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO21GQUNtRjs7QUFFbkY7OztNQUdNOztBQUVOOzs7OztFQUtFLG9CQUFvQixFQUFFLE1BQU07RUFDNUIsZUFBZSxFQUFFLE1BQU07RUFDdkIsaUJBQWlCLEVBQUUsTUFBTTtFQUN6QixTQUFTLEVBQUUsTUFBTTtBQUNuQjs7QUFFQTs7O01BR007O0FBRU47O0VBRUUsTUFBTTtFQUNOLGlCQUFpQjtBQUNuQjs7QUFFQTs7O01BR007O0FBRU47O0VBRUUsTUFBTTtFQUNOLG9CQUFvQjtBQUN0Qjs7QUFFQTs7TUFFTTs7QUFFTjs7OztFQUlFLDBCQUEwQjtBQUM1Qjs7QUFFQTs7TUFFTTs7QUFFTjs7OztFQUlFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7O01BRU07O0FBRU47Ozs7RUFJRSw4QkFBOEI7QUFDaEM7O0FBRUE7O01BRU07O0FBRU47RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7Ozs7O01BS007O0FBRU47RUFDRSxzQkFBc0IsRUFBRSxNQUFNO0VBQzlCLGNBQWMsRUFBRSxNQUFNO0VBQ3RCLGNBQWMsRUFBRSxNQUFNO0VBQ3RCLGVBQWUsRUFBRSxNQUFNO0VBQ3ZCLFVBQVUsRUFBRSxNQUFNO0VBQ2xCLG1CQUFtQixFQUFFLE1BQU07QUFDN0I7O0FBRUE7O01BRU07O0FBRU47RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7O01BRU07O0FBRU47RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7TUFHTTs7QUFFTjs7RUFFRSxzQkFBc0IsRUFBRSxNQUFNO0VBQzlCLFVBQVUsRUFBRSxNQUFNO0FBQ3BCOztBQUVBOztNQUVNOztBQUVOOztFQUVFLFlBQVk7QUFDZDs7QUFFQTs7O01BR007O0FBRU47RUFDRSw2QkFBNkIsRUFBRSxNQUFNO0VBQ3JDLG9CQUFvQixFQUFFLE1BQU07QUFDOUI7O0FBRUE7O01BRU07O0FBRU47RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7OztNQUdNOztBQUVOO0VBQ0UsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyxhQUFhLEVBQUUsTUFBTTtBQUN2Qjs7QUFFQTttRkFDbUY7O0FBRW5GOztNQUVNOztBQUVOO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7TUFFTTs7QUFFTjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTttRkFDbUY7O0FBRW5GOztNQUVNOztBQUVOO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztNQUVNOztBQUVOO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICAgKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICAgICAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gICAgICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICAgICAqL1xcblxcbm1haW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAgICAgKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICAgICAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICAgICAqL1xcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAgICAgKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gICAgICovXFxuXFxuaHIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgICAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gICAgICovXFxuXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAgICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAgICAgKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gICAgICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gICAgICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gICAgICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gICAgICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICAgICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgICAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gICAgICovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAgICovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAgICAgKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gICAgICogYWxsIGJyb3dzZXJzLlxcbiAgICAgKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICAgKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAgICAgKi9cXG5cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICAgKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gICAgICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAgICAgKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgICAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAgICAgKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAgICAgKi9cXG5cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAgICAgKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gICAgICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAgICAgKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gIC8qIDEgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gICAgICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gICAgICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAgICAgKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAgICAgKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gICAgICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAgICAgKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcbiAgICAgKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICAgICAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICAgICAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICAgICAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gICAgICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAgICAgKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gICAgICovXFxuXFxubGVnZW5kIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxufVxcblxcbi8qKlxcbiAgICAgKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAgICAgKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbiAgICAgKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gICAgICovXFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAgICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gICAgICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcbiAgICAgKi9cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICAgKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICAgICAqL1xcblxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gICAgICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICAgICAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAgICAgKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICAgKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICAgICAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAgICAgKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAgICAgKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICAgICAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAgICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAgICAgKi9cXG5cXG5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAgICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgICAqL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBNaXNjXFxuICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gICAgICovXFxuXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICAgICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAgICAgKi9cXG5cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBCb3ggc2l6aW5nIHJ1bGVzICovXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luICovXFxuYm9keSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5wLFxcbmZpZ3VyZSxcXG5ibG9ja3F1b3RlLFxcbmRsLFxcbmRkIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyogUmVtb3ZlIGxpc3Qgc3R5bGVzIG9uIHVsLCBvbCBlbGVtZW50cyB3aXRoIGEgbGlzdCByb2xlLCB3aGljaCBzdWdnZXN0cyBkZWZhdWx0IHN0eWxpbmcgd2lsbCBiZSByZW1vdmVkICovXFxudWxbcm9sZT1cXFwibGlzdFxcXCJdLFxcbm9sW3JvbGU9XFxcImxpc3RcXFwiXSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBTZXQgY29yZSByb290IGRlZmF1bHRzICovXFxuaHRtbDpmb2N1cy13aXRoaW4ge1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbi8qIFNldCBjb3JlIGJvZHkgZGVmYXVsdHMgKi9cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG4vKiBBIGVsZW1lbnRzIHRoYXQgZG9uJ3QgaGF2ZSBhIGNsYXNzIGdldCBkZWZhdWx0IHN0eWxlcyAqL1xcbmE6bm90KFtjbGFzc10pIHtcXG4gIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcXG59XFxuXFxuLyogTWFrZSBpbWFnZXMgZWFzaWVyIHRvIHdvcmsgd2l0aCAqL1xcbmltZyxcXG5waWN0dXJlIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBJbmhlcml0IGZvbnRzIGZvciBpbnB1dHMgYW5kIGJ1dHRvbnMgKi9cXG5pbnB1dCxcXG5idXR0b24sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbi8qIFJlbW92ZSBhbGwgYW5pbWF0aW9ucywgdHJhbnNpdGlvbnMgYW5kIHNtb290aCBzY3JvbGwgZm9yIHBlb3BsZSB0aGF0IHByZWZlciBub3QgdG8gc2VlIHRoZW0gKi9cXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xcbiAgaHRtbDpmb2N1cy13aXRoaW4ge1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG87XFxuICB9XFxuXFxuICAqLFxcbiAgKjo6YmVmb3JlLFxcbiAgKjo6YWZ0ZXIge1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9yZXNldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEscUJBQXFCO0FBQ3JCOzs7RUFHRSxzQkFBc0I7QUFDeEI7O0FBRUEsMEJBQTBCO0FBQzFCOzs7Ozs7Ozs7O0VBVUUsU0FBUztBQUNYOztBQUVBLDJHQUEyRztBQUMzRzs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBLDJCQUEyQjtBQUMzQjtFQUNFLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0FBQ2xCOztBQUVBLDBEQUEwRDtBQUMxRDtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQSxvQ0FBb0M7QUFDcEM7O0VBRUUsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUEseUNBQXlDO0FBQ3pDOzs7O0VBSUUsYUFBYTtBQUNmOztBQUVBLGdHQUFnRztBQUNoRztFQUNFO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBOzs7SUFHRSxxQ0FBcUM7SUFDckMsdUNBQXVDO0lBQ3ZDLHNDQUFzQztJQUN0QyxnQ0FBZ0M7RUFDbEM7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBCb3ggc2l6aW5nIHJ1bGVzICovXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luICovXFxuYm9keSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5wLFxcbmZpZ3VyZSxcXG5ibG9ja3F1b3RlLFxcbmRsLFxcbmRkIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyogUmVtb3ZlIGxpc3Qgc3R5bGVzIG9uIHVsLCBvbCBlbGVtZW50cyB3aXRoIGEgbGlzdCByb2xlLCB3aGljaCBzdWdnZXN0cyBkZWZhdWx0IHN0eWxpbmcgd2lsbCBiZSByZW1vdmVkICovXFxudWxbcm9sZT1cXFwibGlzdFxcXCJdLFxcbm9sW3JvbGU9XFxcImxpc3RcXFwiXSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBTZXQgY29yZSByb290IGRlZmF1bHRzICovXFxuaHRtbDpmb2N1cy13aXRoaW4ge1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbi8qIFNldCBjb3JlIGJvZHkgZGVmYXVsdHMgKi9cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG4vKiBBIGVsZW1lbnRzIHRoYXQgZG9uJ3QgaGF2ZSBhIGNsYXNzIGdldCBkZWZhdWx0IHN0eWxlcyAqL1xcbmE6bm90KFtjbGFzc10pIHtcXG4gIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcXG59XFxuXFxuLyogTWFrZSBpbWFnZXMgZWFzaWVyIHRvIHdvcmsgd2l0aCAqL1xcbmltZyxcXG5waWN0dXJlIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBJbmhlcml0IGZvbnRzIGZvciBpbnB1dHMgYW5kIGJ1dHRvbnMgKi9cXG5pbnB1dCxcXG5idXR0b24sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbi8qIFJlbW92ZSBhbGwgYW5pbWF0aW9ucywgdHJhbnNpdGlvbnMgYW5kIHNtb290aCBzY3JvbGwgZm9yIHBlb3BsZSB0aGF0IHByZWZlciBub3QgdG8gc2VlIHRoZW0gKi9cXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xcbiAgaHRtbDpmb2N1cy13aXRoaW4ge1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG87XFxuICB9XFxuXFxuICAqLFxcbiAgKjo6YmVmb3JlLFxcbiAgKjo6YWZ0ZXIge1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oMSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogOTUlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDE1cHggMzBweCByZ2IoMCAwIDAgLyAxNSUpO1xcbn1cXG5cXG4uaW5wdXQtbW9kYWwge1xcbiAgd2lkdGg6IDk1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAwLjA1KTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuaDIge1xcbiAgd2lkdGg6IDk1JTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAwLjA3KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuaDMge1xcbiAgd2lkdGg6IDk1JTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGFuaW1hdGlvbjogcGxhY2Utc2hpcC1tZXNzYWdlLWJsaW5rIDJzIGluZmluaXRlIGVhc2UtaW4gYWx0ZXJuYXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHBsYWNlLXNoaXAtbWVzc2FnZS1ibGluayB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgY29sb3I6ICNlMWJlZTc7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDAuMztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgfVxcbn1cXG5cXG4uaW5wdXQtbW9kYWwgLnJlYWR5LFxcbi5pbnB1dC1tb2RhbCAucm90YXRlIHtcXG4gIHdpZHRoOiAzNSU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnJlYWR5IHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgb3BhY2l0eTogMC41O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWJlZTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLnJlYWR5LmFjdGl2ZSB7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gIG9wYWNpdHk6IDE7XFxuICBhbmltYXRpb246IHJlYWR5LWJ1dHRvbiAycyBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucmVhZHkuYWN0aXZlOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuQGtleWZyYW1lcyByZWFkeS1idXR0b24ge1xcbiAgMCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzg0NjgyO1xcbiAgfVxcbiAgMjAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgzNGM4OTtcXG4gIH1cXG4gIDgwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMDljYzQ7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZTdmMDtcXG4gIH1cXG59XFxuXFxuLnJvdGF0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTMxLCAxNDMpO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uaW5wdXQtbW9kYWwgLmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjgsIDEyOCwgMTI4LCAwLjYpO1xcbn1cXG5cXG4uaW5wdXQtbW9kYWwgLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXFxuLmlucHV0LW1vZGFsIC5yZWQsXFxuLmlucHV0LW1vZGFsIC5yZWQuc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY1MzUwO1xcbn1cXG5cXG4uaW5wdXRzLWdhbWVib2FyZCB7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5nYW1lYm9hcmRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXZ3O1xcbiAgd2lkdGg6IDk1JTtcXG59XFxuXFxuLnBsYXllci1zZWN0aW9uIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBsYXllci1oZWFkZXIge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIHdpZHRoOiA5NSU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM3LCAyMzEsIDI0NiwgMC41KTtcXG59XFxuXFxuLmdhbWVib2FyZHMgLnBsYXllci1vbmUtZ2FtZWJvYXJkLFxcbi5nYW1lYm9hcmRzIC5wbGF5ZXItdHdvLWdhbWVib2FyZCxcXG4uaW5wdXRzLWdhbWVib2FyZCB7XFxuICB3aWR0aDogOTUlO1xcbiAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHJvdy1nYXA6IDJweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIC5yb3dzLFxcbi5wbGF5ZXItdHdvLWdhbWVib2FyZCAucm93cyxcXG4uaW5wdXRzLWdhbWVib2FyZCAucm93cyB7XFxuICBmbGV4OiAxO1xcbiAgZ2FwOiA0cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4ucGxheWVyLW9uZS1nYW1lYm9hcmQgLmNvbHVtbnMsXFxuLnBsYXllci10d28tZ2FtZWJvYXJkIC5jb2x1bW5zIHtcXG4gIGZsZXg6IDE7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDFjNGU5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMjI5LCAyNDUsIDAuMSk7XFxufVxcblxcbi5pbnB1dHMtZ2FtZWJvYXJkIC5jb2x1bW5zIHtcXG4gIGZsZXg6IDE7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG59XFxuXFxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIC5yb3dzIC5jb2x1bW5zLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5wbGF5ZXItb25lLWdhbWVib2FyZCAucm93cyAuY29sdW1ucy5zaGlwLmhpdCxcXG4ucGxheWVyLXR3by1nYW1lYm9hcmQgLnJvd3MgLmNvbHVtbnMuc2hpcC5oaXQge1xcbiAgYmFja2dyb3VuZDogIzVlMzViMTtcXG59XFxuXFxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIC5yb3dzIC5jb2x1bW5zLmhpdCxcXG4ucGxheWVyLXR3by1nYW1lYm9hcmQgLnJvd3MgLmNvbHVtbnMuaGl0IHtcXG4gIGJhY2tncm91bmQ6ICNhN2ZmZWI7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIG9wYWNpdHk6IDAuNztcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uZ2FtZS1lbmQtbW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDE7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmdhbWUtZW5kLW1vZGFsLWNvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuOSk7XFxuICBtYXJnaW46IDE1JSBhdXRvO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICB3aWR0aDogODAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZ2FtZS1lbmQtbW9kYWwtY29udGVudCAucmVzdGFydCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTMxLCAxNDMpO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5jbG9zZSB7XFxuICBjb2xvcjogI2FhYTtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY2xvc2U6aG92ZXIsXFxuLmNsb3NlOmZvY3VzIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FB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QUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaDEge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDk1JTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAwLjA1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDBweCAxNXB4IDMwcHggcmdiKDAgMCAwIC8gMTUlKTtcXG59XFxuXFxuLmlucHV0LW1vZGFsIHtcXG4gIHdpZHRoOiA5NSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbmgyIHtcXG4gIHdpZHRoOiA5NSU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC4wNyk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbmgzIHtcXG4gIHdpZHRoOiA5NSU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBhbmltYXRpb246IHBsYWNlLXNoaXAtbWVzc2FnZS1ibGluayAycyBpbmZpbml0ZSBlYXNlLWluIGFsdGVybmF0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBwbGFjZS1zaGlwLW1lc3NhZ2UtYmxpbmsge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGNvbG9yOiAjZTFiZWU3O1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwLjM7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gIH1cXG59XFxuXFxuLmlucHV0LW1vZGFsIC5yZWFkeSxcXG4uaW5wdXQtbW9kYWwgLnJvdGF0ZSB7XFxuICB3aWR0aDogMzUlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5yZWFkeSB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmViZWU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5yZWFkeS5hY3RpdmUge1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICBvcGFjaXR5OiAxO1xcbiAgYW5pbWF0aW9uOiByZWFkeS1idXR0b24gMnMgaW5maW5pdGU7XFxuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnJlYWR5LmFjdGl2ZTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbkBrZXlmcmFtZXMgcmVhZHktYnV0dG9uIHtcXG4gIDAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc4NDY4MjtcXG4gIH1cXG4gIDIwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MzRjODk7XFxuICB9XFxuICA4MCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzA5Y2M0O1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmU3ZjA7XFxuICB9XFxufVxcblxcbi5yb3RhdGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDEzMSwgMTQzKTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmlucHV0LW1vZGFsIC5ob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI4LCAxMjgsIDEyOCwgMC42KTtcXG59XFxuXFxuLmlucHV0LW1vZGFsIC5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbi5pbnB1dC1tb2RhbCAucmVkLFxcbi5pbnB1dC1tb2RhbCAucmVkLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmNTM1MDtcXG59XFxuXFxuLmlucHV0cy1nYW1lYm9hcmQge1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4uZ2FtZWJvYXJkcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDF2dztcXG4gIHdpZHRoOiA5NSU7XFxufVxcblxcbi5wbGF5ZXItc2VjdGlvbiB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wbGF5ZXItaGVhZGVyIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICB3aWR0aDogOTUlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNywgMjMxLCAyNDYsIDAuNSk7XFxufVxcblxcbi5nYW1lYm9hcmRzIC5wbGF5ZXItb25lLWdhbWVib2FyZCxcXG4uZ2FtZWJvYXJkcyAucGxheWVyLXR3by1nYW1lYm9hcmQsXFxuLmlucHV0cy1nYW1lYm9hcmQge1xcbiAgd2lkdGg6IDk1JTtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICByb3ctZ2FwOiAycHg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5wbGF5ZXItb25lLWdhbWVib2FyZCAucm93cyxcXG4ucGxheWVyLXR3by1nYW1lYm9hcmQgLnJvd3MsXFxuLmlucHV0cy1nYW1lYm9hcmQgLnJvd3Mge1xcbiAgZmxleDogMTtcXG4gIGdhcDogNHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuXFxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIC5jb2x1bW5zLFxcbi5wbGF5ZXItdHdvLWdhbWVib2FyZCAuY29sdW1ucyB7XFxuICBmbGV4OiAxO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2QxYzRlOTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDIyOSwgMjQ1LCAwLjEpO1xcbn1cXG5cXG4uaW5wdXRzLWdhbWVib2FyZCAuY29sdW1ucyB7XFxuICBmbGV4OiAxO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxufVxcblxcbi5wbGF5ZXItb25lLWdhbWVib2FyZCAucm93cyAuY29sdW1ucy5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ucGxheWVyLW9uZS1nYW1lYm9hcmQgLnJvd3MgLmNvbHVtbnMuc2hpcC5oaXQsXFxuLnBsYXllci10d28tZ2FtZWJvYXJkIC5yb3dzIC5jb2x1bW5zLnNoaXAuaGl0IHtcXG4gIGJhY2tncm91bmQ6ICM1ZTM1YjE7XFxufVxcblxcbi5wbGF5ZXItb25lLWdhbWVib2FyZCAucm93cyAuY29sdW1ucy5oaXQsXFxuLnBsYXllci10d28tZ2FtZWJvYXJkIC5yb3dzIC5jb2x1bW5zLmhpdCB7XFxuICBiYWNrZ3JvdW5kOiAjYTdmZmViO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBvcGFjaXR5OiAwLjc7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmdhbWUtZW5kLW1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5nYW1lLWVuZC1tb2RhbC1jb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjkpO1xcbiAgbWFyZ2luOiAxNSUgYXV0bztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgd2lkdGg6IDgwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmdhbWUtZW5kLW1vZGFsLWNvbnRlbnQgLnJlc3RhcnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDEzMSwgMTQzKTtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uY2xvc2Uge1xcbiAgY29sb3I6ICNhYWE7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNsb3NlOmhvdmVyLFxcbi5jbG9zZTpmb2N1cyB7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlcy9yZXNldC5jc3NcIjtcbmltcG9ydCBcIi4vc3R5bGVzL25vcm1hbGl6ZS5jc3NcIjtcbmltcG9ydCBcIi4vc3R5bGVzL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGdhbWVNb2R1bGVPYmplY3QgZnJvbSBcIi4vbW9kdWxlcy9HYW1lXCI7XG5pbXBvcnQgRE9NTW9kdWxlT2JqZWN0IGZyb20gXCIuL21vZHVsZXMvRE9NXCI7XG5cbkRPTU1vZHVsZU9iamVjdC5leGVjdXRlKCk7XG5nYW1lTW9kdWxlT2JqZWN0LmV4ZWN1dGUoKTtcbiJdLCJuYW1lcyI6WyJET01GYWN0b3J5IiwicHVic3ViIiwicmVjZWl2ZUNvbXB1dGVyQXR0YWNrIiwieCIsInkiLCJwbGF5ZXJCb2FyZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInJvdyIsImNvbHVtbiIsImNsYXNzTGlzdCIsImFkZCIsInNlbmRQbGF5ZXJBdHRhY2siLCJldmVudCIsInRhcmdldCIsImNvbnRhaW5zIiwicGFyZW50Tm9kZSIsImdldEF0dHJpYnV0ZSIsInB1Ymxpc2giLCJjcmVhdGVHYW1lYm9hcmQiLCJuYW1lIiwiYm9hcmQiLCJncmlkIiwiY2xhc3NOYW1lIiwiaSIsImoiLCJsZW5ndGgiLCJhcHBlbmQiLCJhZGRFdmVudExpc3RlbmVyIiwiYXBwZW5kR2FtZWJvYXJkcyIsImNvbXB1dGVyQm9hcmQiLCJnYW1lYm9hcmRzIiwicGxheWVyT25lU2VjdGlvbiIsInBsYXllck9uZUhlYWRlciIsInRleHRDb250ZW50IiwicGxheWVyVHdvU2VjdGlvbiIsInBsYXllclR3b0hlYWRlciIsInJlbmRlcklucHV0TW9kYWwiLCJpbnB1dE1vZGFsRGl2IiwiaW5wdXRHcmlkIiwiaW5zZXJ0QmVmb3JlIiwiaW5wdXRTaGlwcyIsImNvbHVtbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwicm90YXRlIiwiaG9yaXpvbnRhbCIsInNoaXBzIiwiYWRkZWQiLCJtb3VzZWVudGVyQ2FsbGJhY2tIb3Jpem9udGFsIiwiTnVtYmVyIiwiY2VsbHMiLCJjdXJyZW50VGFyZ2V0Iiwic2hpcExlbmd0aCIsImNvbCIsInB1c2giLCJzb21lIiwiaXRlbSIsImZvckVhY2giLCJzZXRBdHRyaWJ1dGUiLCJtb3VzZWVudGVyQ2FsbGJhY2tWZXJ0aWNhbCIsImZvY3VzUm93IiwibW91c2VsZWF2ZUNhbGxiYWNrIiwicmVtb3ZlIiwic2hpcHNSZXNldCIsImhpZGVJbnB1dE1vZGFsIiwidW5kZWZpbmVkIiwiaW5wdXRNb2RhbCIsInN0eWxlIiwiZGlzcGxheSIsImFjdGl2YXRlUmVhZHlEaXYiLCJyZWFkeURpdiIsImNsaWNrQ2FsbGJhY2siLCJzaGlwVG9BZGQiLCJmaW5kIiwic2hpcCIsImNlbGwiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2hpcFRvQWRkSW5kZXgiLCJpbmRleE9mIiwib3JpZW50YXRpb24iLCJyZXF1aXJlZCIsInBsYWNlU2hpcE1lc3NhZ2VEaXYiLCJyZW1vdmVQbGF5ZXJTZWN0aW9ucyIsInBsYXllclNlY3Rpb25zIiwic2VjdGlvbiIsInJlc3RhcnRHYW1lIiwiZ2FtZUVuZE1vZGFsIiwib3BlbkdhbWVFbmRNb2RhbCIsInZpY3RvciIsInRleHQiLCJyZXN0YXJ0IiwiY2xvc2UiLCJzaG93QWxlcnQiLCJET01Nb2R1bGVPYmplY3QiLCJleGVjdXRlIiwic3Vic2NyaWJlIiwiZWxlbWVudCIsImF0dHJpYnV0ZXMiLCJuZXdFbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImF0dHJpYnV0ZSIsInRvU3RyaW5nIiwiaW5jbHVkZXMiLCJTaGlwIiwiR2FtZWJvYXJkIiwiUGxheWVyIiwicGxheWVyIiwiY29tcHV0ZXIiLCJhZGRTaGlwcyIsImZsZWV0IiwiYXQiLCJhdXRvQWRkIiwiY29tcHV0ZXJBdHRhY2tTaGlwIiwiYXR0YWNrIiwiYXV0byIsImFyZUFsbFNoaXBzU3VuayIsInBsYXllckF0dGFja1NoaXAiLCJnYW1lTW9kdWxlT2JqZWN0IiwiQXJyYXkiLCJmaWxsIiwibWFwIiwic2hpcHNBcnJheSIsImxhdGVzdEF0dGFja1N0YXR1cyIsImNoZWNrSWZTaGlwQ2FuQmVBZGRlZCIsInJlcXVpcmVkU3BhY2UiLCJzbGljZSIsImV2ZXJ5IiwiYWRkU2hpcEluQXJyYXkiLCJhZGRTaGlwT25Cb2FyZCIsImF0dGFja1NoaXAiLCJoaXRQb3NpdGlvbiIsInRhcmdldEFyZWFIb3Jpem9udGFsIiwic2hpcExlZnRTaWRlIiwiZmlsdGVyIiwidGFyZ2V0QXJlYVZlcnRpY2FsIiwic2hpcFVwcGVyU2lkZSIsImlzSGl0QXQiLCJoaXQiLCJyZWNlaXZlQXR0YWNrIiwiaXNTdW5rIiwidGFyZ2V0QXJlYSIsInVzZVRhcmdldEFyZWEiLCJzcGxpY2UiLCJlbmVteSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm9yaWVudGF0aW9ucyIsImV2ZW50cyIsImV2ZW50TmFtZSIsImRhdGEiLCJjYWxsYmFjayIsImlzQXJyYXkiLCJzaGlwQXJyYXkiLCJwb3NpdGlvbiIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==