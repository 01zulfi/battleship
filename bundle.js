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
  var playerOneMessage = (0,_DOMFactory__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
    className: "player-one-message"
  });
  var playerTwoSection = (0,_DOMFactory__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
    className: "player-section"
  });
  var playerTwoHeader = (0,_DOMFactory__WEBPACK_IMPORTED_MODULE_0__["default"])("h2", {
    className: "player-header",
    textContent: "Computer"
  });
  var playerTwoMessage = (0,_DOMFactory__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
    className: "player-two-message"
  });
  playerOneSection.append(playerOneHeader, playerOneMessage, createGameboard("player-one-gameboard", playerBoard));
  playerTwoSection.append(playerTwoHeader, playerTwoMessage, createGameboard("player-two-gameboard", computerBoard));
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

var renderAttackMessage = function renderAttackMessage(_ref5) {
  var recipient = _ref5.recipient,
      message = _ref5.message;

  var messageGenerator = function messageGenerator(player, msg) {
    if (msg === "success/hit") {
      if (player === "player") {
        return "Computer hit your fleet!";
      }

      if (player === "computer") {
        return "You successfully hit a computer ship!";
      }
    }

    if (msg === "success/miss") {
      if (player === "player") {
        return "Computer's attack missed!";
      }

      return "Your attack missed!";
    }

    return "";
  };

  if (recipient === "player") {
    var messageDiv = document.querySelector(".player-one-message");
    messageDiv.textContent = messageGenerator("player", message);

    if (message === "success/hit") {
      messageDiv.classList.remove("miss");
      messageDiv.classList.add("hit");
    } else if (message === "success/miss") {
      messageDiv.classList.add("miss");
      messageDiv.classList.remove("hit");
    }
  } else if (recipient === "computer") {
    var _messageDiv = document.querySelector(".player-two-message");

    _messageDiv.textContent = messageGenerator("computer", message);

    if (message === "success/hit") {
      _messageDiv.classList.remove("miss");

      _messageDiv.classList.add("hit");
    } else if (message === "success/miss") {
      _messageDiv.classList.add("miss");

      _messageDiv.classList.remove("hit");
    }
  }
};

var DOMModuleObject = {
  execute: function execute() {
    renderInputModal();
    inputShips();
    _Pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe("fleets-initialized", appendGameboards);
    _Pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe("computer-attack-ship", receiveComputerAttack);
    _Pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe("attack-message", renderAttackMessage);
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

  _Pubsub__WEBPACK_IMPORTED_MODULE_3__["default"].publish("attack-message", {
    recipient: "player",
    message: player.fleet.latestAttackStatus
  });
};

var playerAttackShip = function playerAttackShip(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      x = _ref2[0],
      y = _ref2[1];

  player.attack(computer).at(x, y);

  if (computer.fleet.areAllShipsSunk()) {
    _Pubsub__WEBPACK_IMPORTED_MODULE_3__["default"].publish("game-end", "You");
  }

  _Pubsub__WEBPACK_IMPORTED_MODULE_3__["default"].publish("attack-message", {
    recipient: "computer",
    message: computer.fleet.latestAttackStatus
  });
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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/PressStart2P-Regular.ttf */ "./src/fonts/PressStart2P-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"press-start\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nbody {\n  background-color: #121212;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nh1 {\n  font-family: \"press-start\", sans-serif;\n  padding: 5px;\n  text-align: center;\n  width: 95%;\n  background-color: rgb(255, 255, 255, 0.05);\n  border-radius: 5px;\n  box-shadow: 0px 15px 30px rgb(0 0 0 / 15%);\n}\n\n.input-modal {\n  width: 95%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: rgb(255, 255, 255, 0.05);\n  padding: 5px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  border-radius: 5px;\n  gap: 5px;\n  margin-bottom: 25px;\n}\n\nh2 {\n  width: 95%;\n  font-family: \"press-start\", sans-serif;\n  background-color: rgb(255, 255, 255, 0.07);\n  border-radius: 5px;\n  text-align: center;\n  padding: 5px;\n}\n\nh3 {\n  width: 95%;\n  text-align: center;\n  padding: 5px;\n  font-size: 25px;\n  animation: place-ship-message-blink 2s infinite ease-in alternate;\n}\n\n@keyframes place-ship-message-blink {\n  from {\n    opacity: 1;\n    color: #e1bee7;\n  }\n  to {\n    opacity: 0.3;\n    color: white;\n  }\n}\n\n.input-modal .ready,\n.input-modal .rotate {\n  width: 35%;\n  border-radius: 5px;\n  font-size: 20px;\n  text-align: center;\n  border: 2px solid black;\n}\n\n.ready {\n  pointer-events: none;\n  opacity: 0.5;\n  background-color: #ffebee;\n  color: black;\n}\n\n.ready.active {\n  pointer-events: auto;\n  opacity: 1;\n  animation: ready-button 2s infinite;\n  animation-direction: alternate;\n  animation-timing-function: linear;\n  font-weight: bold;\n}\n\n.ready.active:hover {\n  cursor: pointer;\n}\n\n@keyframes ready-button {\n  0% {\n    background-color: #784682;\n  }\n  20% {\n    background-color: #834c89;\n  }\n  80% {\n    background-color: #c09cc4;\n  }\n  100% {\n    background-color: #efe7f0;\n  }\n}\n\n.rotate {\n  background-color: rgb(0, 131, 143);\n  color: black;\n}\n\n.input-modal .hover {\n  background-color: rgb(128, 128, 128, 0.6);\n}\n\n.input-modal .ship {\n  background-color: gray;\n}\n\n.input-modal .red,\n.input-modal .red.ship {\n  background-color: #ef5350;\n}\n\n.inputs-gameboard {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.gameboards {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1vw;\n  width: 95%;\n}\n\n.player-section {\n  margin-bottom: 20px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.player-header {\n  color: black;\n  margin-bottom: 10px;\n  width: 95%;\n  text-align: center;\n  padding: 5px;\n  font-size: 25px;\n  background-color: rgb(237, 231, 246, 0.5);\n}\n\n.player-one-message,\n.player-two-message {\n  width: 95%;\n  font-size: 18px;\n  background-color: rgb(237, 231, 246, 0.1);\n  text-align: center;\n  margin-bottom: 10px;\n  border-radius: 5px;\n}\n\n.player-one-message.miss,\n.player-two-message.miss {\n  color: #a7ffeb;\n  padding: 5px;\n}\n\n.player-one-message.hit,\n.player-two-message.hit {\n  color: #ce93d8;\n  padding: 5px;\n}\n\n.gameboards .player-one-gameboard,\n.gameboards .player-two-gameboard,\n.inputs-gameboard {\n  width: 95%;\n  aspect-ratio: 1;\n  display: flex;\n  row-gap: 2px;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.player-one-gameboard .rows,\n.player-two-gameboard .rows,\n.inputs-gameboard .rows {\n  flex: 1;\n  gap: 4px;\n  display: flex;\n  width: 100%;\n  height: fit-content;\n}\n\n.player-one-gameboard .columns,\n.player-two-gameboard .columns {\n  flex: 1;\n  border: 1px solid #d1c4e9;\n  background-color: rgb(243, 229, 245, 0.1);\n}\n\n.inputs-gameboard .columns {\n  flex: 1;\n  border: 1px solid rgb(255, 255, 255, 0.5);\n}\n\n.player-one-gameboard .rows .columns.ship {\n  background-color: white;\n}\n\n.player-one-gameboard .rows .columns.ship.hit,\n.player-two-gameboard .rows .columns.ship.hit {\n  background: #5e35b1;\n}\n\n.player-one-gameboard .rows .columns.hit,\n.player-two-gameboard .rows .columns.hit {\n  background: #a7ffeb;\n  border: 1px solid black;\n  opacity: 0.7;\n  pointer-events: none;\n}\n\n.game-end-modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n  justify-content: center;\n  align-items: center;\n}\n\n.game-end-modal-content {\n  background-color: rgb(0, 0, 0, 0.9);\n  margin: 15% auto;\n  padding: 20px;\n  border-radius: 5px;\n  border: 1px solid #888;\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\n.game-end-modal-content .restart {\n  background-color: rgb(0, 131, 143);\n  font-size: 25px;\n  color: black;\n  padding: 5px;\n  border-radius: 5px;\n  text-align: center;\n  border: 1px solid black;\n  font-size: 20px;\n}\n\n.close {\n  color: #aaa;\n  float: right;\n  font-size: 40px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: white;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n@media screen and (min-width: 768px) {\n  h1 {\n    padding: 10px;\n  }\n  .input-modal {\n    width: 35%;\n    box-shadow: 0px 15px 30px rgb(0 0 0 / 15%);\n  }\n  .rotate:hover {\n    background-color: #80cbc4;\n    border: 2px solid white;\n    cursor: pointer;\n  }\n  .gameboards {\n    flex-direction: row;\n    justify-content: center;\n    width: 70%;\n  }\n  .player-section {\n    width: 45%;\n  }\n  .game-end-modal-content {\n    gap: 20px;\n  }\n  .game-end-modal-content .text {\n    padding: 10px;\n  }\n  .game-end-modal-content .restart {\n    padding: 9px;\n  }\n  .game-end-modal-content .restart:hover {\n    background-color: #4db6ac;\n  }\n}\n\n::-webkit-scrollbar {\n  background-color: rgb(245, 245, 245, 0.1);\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: rgb(0, 131, 143);\n}\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: \"press-start\";\n  src: url(../fonts/PressStart2P-Regular.ttf);\n}\n\nbody {\n  background-color: #121212;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nh1 {\n  font-family: \"press-start\", sans-serif;\n  padding: 5px;\n  text-align: center;\n  width: 95%;\n  background-color: rgb(255, 255, 255, 0.05);\n  border-radius: 5px;\n  box-shadow: 0px 15px 30px rgb(0 0 0 / 15%);\n}\n\n.input-modal {\n  width: 95%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: rgb(255, 255, 255, 0.05);\n  padding: 5px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  border-radius: 5px;\n  gap: 5px;\n  margin-bottom: 25px;\n}\n\nh2 {\n  width: 95%;\n  font-family: \"press-start\", sans-serif;\n  background-color: rgb(255, 255, 255, 0.07);\n  border-radius: 5px;\n  text-align: center;\n  padding: 5px;\n}\n\nh3 {\n  width: 95%;\n  text-align: center;\n  padding: 5px;\n  font-size: 25px;\n  animation: place-ship-message-blink 2s infinite ease-in alternate;\n}\n\n@keyframes place-ship-message-blink {\n  from {\n    opacity: 1;\n    color: #e1bee7;\n  }\n  to {\n    opacity: 0.3;\n    color: white;\n  }\n}\n\n.input-modal .ready,\n.input-modal .rotate {\n  width: 35%;\n  border-radius: 5px;\n  font-size: 20px;\n  text-align: center;\n  border: 2px solid black;\n}\n\n.ready {\n  pointer-events: none;\n  opacity: 0.5;\n  background-color: #ffebee;\n  color: black;\n}\n\n.ready.active {\n  pointer-events: auto;\n  opacity: 1;\n  animation: ready-button 2s infinite;\n  animation-direction: alternate;\n  animation-timing-function: linear;\n  font-weight: bold;\n}\n\n.ready.active:hover {\n  cursor: pointer;\n}\n\n@keyframes ready-button {\n  0% {\n    background-color: #784682;\n  }\n  20% {\n    background-color: #834c89;\n  }\n  80% {\n    background-color: #c09cc4;\n  }\n  100% {\n    background-color: #efe7f0;\n  }\n}\n\n.rotate {\n  background-color: rgb(0, 131, 143);\n  color: black;\n}\n\n.input-modal .hover {\n  background-color: rgb(128, 128, 128, 0.6);\n}\n\n.input-modal .ship {\n  background-color: gray;\n}\n\n.input-modal .red,\n.input-modal .red.ship {\n  background-color: #ef5350;\n}\n\n.inputs-gameboard {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.gameboards {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1vw;\n  width: 95%;\n}\n\n.player-section {\n  margin-bottom: 20px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.player-header {\n  color: black;\n  margin-bottom: 10px;\n  width: 95%;\n  text-align: center;\n  padding: 5px;\n  font-size: 25px;\n  background-color: rgb(237, 231, 246, 0.5);\n}\n\n.player-one-message,\n.player-two-message {\n  width: 95%;\n  font-size: 18px;\n  background-color: rgb(237, 231, 246, 0.1);\n  text-align: center;\n  margin-bottom: 10px;\n  border-radius: 5px;\n}\n\n.player-one-message.miss,\n.player-two-message.miss {\n  color: #a7ffeb;\n  padding: 5px;\n}\n\n.player-one-message.hit,\n.player-two-message.hit {\n  color: #ce93d8;\n  padding: 5px;\n}\n\n.gameboards .player-one-gameboard,\n.gameboards .player-two-gameboard,\n.inputs-gameboard {\n  width: 95%;\n  aspect-ratio: 1;\n  display: flex;\n  row-gap: 2px;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.player-one-gameboard .rows,\n.player-two-gameboard .rows,\n.inputs-gameboard .rows {\n  flex: 1;\n  gap: 4px;\n  display: flex;\n  width: 100%;\n  height: fit-content;\n}\n\n.player-one-gameboard .columns,\n.player-two-gameboard .columns {\n  flex: 1;\n  border: 1px solid #d1c4e9;\n  background-color: rgb(243, 229, 245, 0.1);\n}\n\n.inputs-gameboard .columns {\n  flex: 1;\n  border: 1px solid rgb(255, 255, 255, 0.5);\n}\n\n.player-one-gameboard .rows .columns.ship {\n  background-color: white;\n}\n\n.player-one-gameboard .rows .columns.ship.hit,\n.player-two-gameboard .rows .columns.ship.hit {\n  background: #5e35b1;\n}\n\n.player-one-gameboard .rows .columns.hit,\n.player-two-gameboard .rows .columns.hit {\n  background: #a7ffeb;\n  border: 1px solid black;\n  opacity: 0.7;\n  pointer-events: none;\n}\n\n.game-end-modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n  justify-content: center;\n  align-items: center;\n}\n\n.game-end-modal-content {\n  background-color: rgb(0, 0, 0, 0.9);\n  margin: 15% auto;\n  padding: 20px;\n  border-radius: 5px;\n  border: 1px solid #888;\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\n.game-end-modal-content .restart {\n  background-color: rgb(0, 131, 143);\n  font-size: 25px;\n  color: black;\n  padding: 5px;\n  border-radius: 5px;\n  text-align: center;\n  border: 1px solid black;\n  font-size: 20px;\n}\n\n.close {\n  color: #aaa;\n  float: right;\n  font-size: 40px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: white;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n@media screen and (min-width: 768px) {\n  h1 {\n    padding: 10px;\n  }\n  .input-modal {\n    width: 35%;\n    box-shadow: 0px 15px 30px rgb(0 0 0 / 15%);\n  }\n  .rotate:hover {\n    background-color: #80cbc4;\n    border: 2px solid white;\n    cursor: pointer;\n  }\n  .gameboards {\n    flex-direction: row;\n    justify-content: center;\n    width: 70%;\n  }\n  .player-section {\n    width: 45%;\n  }\n  .game-end-modal-content {\n    gap: 20px;\n  }\n  .game-end-modal-content .text {\n    padding: 10px;\n  }\n  .game-end-modal-content .restart {\n    padding: 9px;\n  }\n  .game-end-modal-content .restart:hover {\n    background-color: #4db6ac;\n  }\n}\n\n::-webkit-scrollbar {\n  background-color: rgb(245, 245, 245, 0.1);\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: rgb(0, 131, 143);\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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

/***/ }),

/***/ "./src/fonts/PressStart2P-Regular.ttf":
/*!********************************************!*\
  !*** ./src/fonts/PressStart2P-Regular.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5f45b52192a301cb8ccd.ttf";

/***/ }),

/***/ "./src/icons/boat-icon.png":
/*!*********************************!*\
  !*** ./src/icons/boat-icon.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d7ecb1748ee428a0caf5.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _icons_boat_icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/boat-icon.png */ "./src/icons/boat-icon.png");
/* harmony import */ var _modules_Game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/Game */ "./src/modules/Game.js");
/* harmony import */ var _modules_DOM__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/DOM */ "./src/modules/DOM.js");






_modules_DOM__WEBPACK_IMPORTED_MODULE_5__["default"].execute();
_modules_Game__WEBPACK_IMPORTED_MODULE_4__["default"].execute();

(function () {
  var head = document.querySelector("head");
  var link = document.createElement("link");
  link.href = _icons_boat_icon_png__WEBPACK_IMPORTED_MODULE_3__;
  link.type = "image/png";
  link.rel = "icon";
  head.append(link);
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxPQUFPLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxzQ0FBc0MsaUNBQWlD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RUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBViw0REFBQTtBQUNBd0IsNkRBQUE7O0FBRUEsQ0FBQyxZQUFNO0FBQ0wsTUFBTXVDLElBQUksR0FBRy9KLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiO0FBQ0EsTUFBTStKLElBQUksR0FBR2hLLFFBQVEsQ0FBQ3NHLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUNBMEQsRUFBQUEsSUFBSSxDQUFDQyxJQUFMLEdBQVlILGlEQUFaO0FBQ0FFLEVBQUFBLElBQUksQ0FBQ0UsSUFBTCxHQUFZLFdBQVo7QUFDQUYsRUFBQUEsSUFBSSxDQUFDRyxHQUFMLEdBQVcsTUFBWDtBQUNBSixFQUFBQSxJQUFJLENBQUMxSSxNQUFMLENBQVkySSxJQUFaO0FBQ0QsQ0FQRCxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL0RPTS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvRE9NRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvR2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL1B1YnN1Yi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvU2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9ub3JtYWxpemUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL25vcm1hbGl6ZS5jc3M/NDNmNCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9yZXNldC5jc3M/NGNmYiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRE9NRmFjdG9yeSBmcm9tIFwiLi9ET01GYWN0b3J5XCI7XG5pbXBvcnQgcHVic3ViIGZyb20gXCIuL1B1YnN1YlwiO1xuXG5jb25zdCByZWNlaXZlQ29tcHV0ZXJBdHRhY2sgPSAoW3gsIHldKSA9PiB7XG4gIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItb25lLWdhbWVib2FyZFwiKTtcbiAgY29uc3Qgcm93ID0gcGxheWVyQm9hcmQucXVlcnlTZWxlY3RvcihgW2RhdGEtcm93cz1cIiR7eH1cIl1gKTtcbiAgY29uc3QgY29sdW1uID0gcm93LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbHVtbnM9XCIke3l9XCJdYCk7XG4gIGNvbHVtbi5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xufTtcblxuY29uc3Qgc2VuZFBsYXllckF0dGFjayA9IChldmVudCkgPT4ge1xuICBpZiAoIWV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJjb2x1bW5zXCIpKSByZXR1cm47XG4gIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICBjb25zdCB4ID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1yb3dzXCIpO1xuICBjb25zdCB5ID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uc1wiKTtcbiAgcHVic3ViLnB1Ymxpc2goXCJwbGF5ZXItYXR0YWNrLXNoaXBcIiwgW3gsIHldKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUdhbWVib2FyZCA9IChuYW1lLCBib2FyZCkgPT4ge1xuICBjb25zdCBncmlkID0gRE9NRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTmFtZTogbmFtZSB9KTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgY29uc3Qgcm93ID0gRE9NRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJyb3dzXCIsIFwiZGF0YS1yb3dzXCI6IGkgfSk7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICBjb25zdCBjb2x1bW4gPSBET01GYWN0b3J5KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcImNvbHVtbnNcIixcbiAgICAgICAgXCJkYXRhLWNvbHVtbnNcIjogaixcbiAgICAgIH0pO1xuICAgICAgaWYgKGJvYXJkLmxlbmd0aCAhPT0gMCAmJiB0eXBlb2YgYm9hcmRbaV1bal0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgY29sdW1uLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgfVxuICAgICAgcm93LmFwcGVuZChjb2x1bW4pO1xuICAgIH1cbiAgICBncmlkLmFwcGVuZChyb3cpO1xuICB9XG4gIGlmIChuYW1lID09PSBcInBsYXllci10d28tZ2FtZWJvYXJkXCIpIHtcbiAgICBncmlkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZW5kUGxheWVyQXR0YWNrKTtcbiAgfVxuICByZXR1cm4gZ3JpZDtcbn07XG5cbmNvbnN0IGFwcGVuZEdhbWVib2FyZHMgPSAoW3BsYXllckJvYXJkLCBjb21wdXRlckJvYXJkXSkgPT4ge1xuICBjb25zdCBnYW1lYm9hcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lYm9hcmRzXCIpO1xuICBjb25zdCBwbGF5ZXJPbmVTZWN0aW9uID0gRE9NRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJwbGF5ZXItc2VjdGlvblwiIH0pO1xuICBjb25zdCBwbGF5ZXJPbmVIZWFkZXIgPSBET01GYWN0b3J5KFwiaDJcIiwge1xuICAgIGNsYXNzTmFtZTogXCJwbGF5ZXItaGVhZGVyXCIsXG4gICAgdGV4dENvbnRlbnQ6IFwiWW91XCIsXG4gIH0pO1xuICBjb25zdCBwbGF5ZXJPbmVNZXNzYWdlID0gRE9NRmFjdG9yeShcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcInBsYXllci1vbmUtbWVzc2FnZVwiLFxuICB9KTtcbiAgY29uc3QgcGxheWVyVHdvU2VjdGlvbiA9IERPTUZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwicGxheWVyLXNlY3Rpb25cIiB9KTtcbiAgY29uc3QgcGxheWVyVHdvSGVhZGVyID0gRE9NRmFjdG9yeShcImgyXCIsIHtcbiAgICBjbGFzc05hbWU6IFwicGxheWVyLWhlYWRlclwiLFxuICAgIHRleHRDb250ZW50OiBcIkNvbXB1dGVyXCIsXG4gIH0pO1xuICBjb25zdCBwbGF5ZXJUd29NZXNzYWdlID0gRE9NRmFjdG9yeShcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcInBsYXllci10d28tbWVzc2FnZVwiLFxuICB9KTtcbiAgcGxheWVyT25lU2VjdGlvbi5hcHBlbmQoXG4gICAgcGxheWVyT25lSGVhZGVyLFxuICAgIHBsYXllck9uZU1lc3NhZ2UsXG4gICAgY3JlYXRlR2FtZWJvYXJkKFwicGxheWVyLW9uZS1nYW1lYm9hcmRcIiwgcGxheWVyQm9hcmQpLFxuICApO1xuICBwbGF5ZXJUd29TZWN0aW9uLmFwcGVuZChcbiAgICBwbGF5ZXJUd29IZWFkZXIsXG4gICAgcGxheWVyVHdvTWVzc2FnZSxcbiAgICBjcmVhdGVHYW1lYm9hcmQoXCJwbGF5ZXItdHdvLWdhbWVib2FyZFwiLCBjb21wdXRlckJvYXJkKSxcbiAgKTtcbiAgZ2FtZWJvYXJkcy5hcHBlbmQocGxheWVyT25lU2VjdGlvbik7XG4gIGdhbWVib2FyZHMuYXBwZW5kKHBsYXllclR3b1NlY3Rpb24pO1xufTtcblxuY29uc3QgcmVuZGVySW5wdXRNb2RhbCA9ICgpID0+IHtcbiAgY29uc3QgaW5wdXRNb2RhbERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXQtbW9kYWxcIik7XG4gIGNvbnN0IGlucHV0R3JpZCA9IGNyZWF0ZUdhbWVib2FyZChcImlucHV0cy1nYW1lYm9hcmRcIiwgW10pO1xuICBpbnB1dE1vZGFsRGl2Lmluc2VydEJlZm9yZShpbnB1dEdyaWQsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVhZHlcIikpO1xufTtcblxuY29uc3QgaW5wdXRTaGlwcyA9ICgpID0+IHtcbiAgY29uc3QgaW5wdXRHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dHMtZ2FtZWJvYXJkXCIpO1xuICBjb25zdCBjb2x1bW5zID0gWy4uLmlucHV0R3JpZC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbHVtbnNcIildO1xuICBjb25zdCByb3RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJvdGF0ZVwiKTtcbiAgbGV0IGhvcml6b250YWwgPSB0cnVlO1xuICBsZXQgc2hpcHMgPSBbXG4gICAgeyBuYW1lOiBcImNhcnJpZXJcIiwgbGVuZ3RoOiA1LCBhZGRlZDogZmFsc2UgfSxcbiAgICB7IG5hbWU6IFwiZGVzdHJveWVyXCIsIGxlbmd0aDogNCwgYWRkZWQ6IGZhbHNlIH0sXG4gICAgeyBuYW1lOiBcImNydWlzZXJcIiwgbGVuZ3RoOiAzLCBhZGRlZDogZmFsc2UgfSxcbiAgICB7IG5hbWU6IFwic3VibWFyaW5lXCIsIGxlbmd0aDogMywgYWRkZWQ6IGZhbHNlIH0sXG4gICAgeyBuYW1lOiBcInBhdHJvbFwiLCBsZW5ndGg6IDIsIGFkZGVkOiBmYWxzZSB9LFxuICAgIHsgbmFtZTogXCJzY291dFwiLCBsZW5ndGg6IDEsIGFkZGVkOiBmYWxzZSB9LFxuICBdO1xuXG4gIGNvbnN0IG1vdXNlZW50ZXJDYWxsYmFja0hvcml6b250YWwgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBjb2x1bW4gPSBOdW1iZXIoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uc1wiKSk7XG4gICAgY29uc3QgY2VsbHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50LmN1cnJlbnRUYXJnZXQuc2hpcExlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBjb2wgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgW2RhdGEtY29sdW1ucz1cIiR7Y29sdW1uICsgaX1cIl1gLFxuICAgICAgKTtcbiAgICAgIGNlbGxzLnB1c2goY29sKTtcbiAgICB9XG4gICAgaWYgKGNlbGxzLnNvbWUoKGl0ZW0pID0+IGl0ZW0gPT09IG51bGwpKSB7XG4gICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZChcInJlZFwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNlbGxzLnNvbWUoKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hpcFwiKSkpIHtcbiAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwicmVkXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjZWxscy5mb3JFYWNoKChpdGVtKSA9PlxuICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLW9yaWVudGF0aW9uXCIsIFwiaG9yaXpvbnRhbFwiKSxcbiAgICApO1xuICAgIGNlbGxzLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LmFkZChcImhvdmVyXCIpKTtcbiAgfTtcblxuICBjb25zdCBtb3VzZWVudGVyQ2FsbGJhY2tWZXJ0aWNhbCA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGNvbHVtbiA9IE51bWJlcihldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW5zXCIpKTtcbiAgICBjb25zdCByb3cgPSBOdW1iZXIoZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1yb3dzXCIpKTtcbiAgICBjb25zdCBncmlkID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICBjb25zdCBjZWxscyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnQuY3VycmVudFRhcmdldC5zaGlwTGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGZvY3VzUm93ID0gZ3JpZC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3dzPVwiJHtyb3cgKyBpfVwiXWApO1xuICAgICAgaWYgKCFmb2N1c1JvdykgYnJlYWs7XG4gICAgICBjZWxscy5wdXNoKGZvY3VzUm93LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbHVtbnM9XCIke2NvbHVtbn1cIl1gKSk7XG4gICAgfVxuICAgIGlmIChjZWxscy5sZW5ndGggPCBldmVudC5jdXJyZW50VGFyZ2V0LnNoaXBMZW5ndGgpIHtcbiAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwicmVkXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoY2VsbHMuc29tZSgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJzaGlwXCIpKSkge1xuICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJyZWRcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNlbGxzLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS1vcmllbnRhdGlvblwiLCBcInZlcnRpY2FsXCIpKTtcbiAgICBjZWxscy5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoXCJob3ZlclwiKSk7XG4gIH07XG5cbiAgY29uc3QgbW91c2VsZWF2ZUNhbGxiYWNrID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJyZWRcIik7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbHVtbnNcIilcbiAgICAgIC5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJob3ZlclwiKSk7XG4gIH07XG5cbiAgY29uc3Qgc2hpcHNSZXNldCA9ICgpID0+IHtcbiAgICBzaGlwcyA9IFtcbiAgICAgIHsgbmFtZTogXCJjYXJyaWVyXCIsIGxlbmd0aDogNSwgYWRkZWQ6IGZhbHNlIH0sXG4gICAgICB7IG5hbWU6IFwiZGVzdHJveWVyXCIsIGxlbmd0aDogNCwgYWRkZWQ6IGZhbHNlIH0sXG4gICAgICB7IG5hbWU6IFwiY3J1aXNlclwiLCBsZW5ndGg6IDMsIGFkZGVkOiBmYWxzZSB9LFxuICAgICAgeyBuYW1lOiBcInN1Ym1hcmluZVwiLCBsZW5ndGg6IDMsIGFkZGVkOiBmYWxzZSB9LFxuICAgICAgeyBuYW1lOiBcInBhdHJvbFwiLCBsZW5ndGg6IDIsIGFkZGVkOiBmYWxzZSB9LFxuICAgICAgeyBuYW1lOiBcInNjb3V0XCIsIGxlbmd0aDogMSwgYWRkZWQ6IGZhbHNlIH0sXG4gICAgXTtcbiAgfTtcblxuICBjb25zdCBoaWRlSW5wdXRNb2RhbCA9ICgpID0+IHtcbiAgICBpZiAoc2hpcHNbMF0ueCA9PT0gdW5kZWZpbmVkKSByZXR1cm47IC8vIHJldHVybiB3aGVuIG5vIHNoaXBzIGVudGVyZWRcbiAgICBjb25zdCBpbnB1dE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dC1tb2RhbFwiKTtcbiAgICBpbnB1dEdyaWQucmVtb3ZlKCk7XG4gICAgaW5wdXRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgcHVic3ViLnB1Ymxpc2goXCJpbnB1dC1zaGlwc1wiLCBzaGlwcyk7XG4gICAgc2hpcHNSZXNldCgpO1xuICB9O1xuXG4gIGNvbnN0IGFjdGl2YXRlUmVhZHlEaXYgPSAoKSA9PiB7XG4gICAgY29uc3QgcmVhZHlEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlYWR5XCIpO1xuICAgIHJlYWR5RGl2LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgcmVhZHlEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVJbnB1dE1vZGFsKTtcbiAgfTtcblxuICBjb25zdCBjbGlja0NhbGxiYWNrID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKCFldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY29sdW1uc1wiKSkgcmV0dXJuO1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicmVkXCIpKSByZXR1cm47XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzaGlwXCIpKSByZXR1cm47XG4gICAgY29uc3Qgc2hpcFRvQWRkID0gc2hpcHMuZmluZCgoc2hpcCkgPT4gIXNoaXAuYWRkZWQpO1xuICAgIGlmICghc2hpcFRvQWRkKSByZXR1cm47XG4gICAgaWYgKHNoaXBUb0FkZC5sZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbHVtbnMuZm9yRWFjaCgoY2VsbCkgPT5cbiAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBtb3VzZWVudGVyQ2FsbGJhY2tIb3Jpem9udGFsKSxcbiAgICAgICk7XG4gICAgICBjb2x1bW5zLmZvckVhY2goKGNlbGwpID0+XG4gICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgbW91c2VlbnRlckNhbGxiYWNrVmVydGljYWwpLFxuICAgICAgKTtcbiAgICAgIGFjdGl2YXRlUmVhZHlEaXYoKTtcbiAgICB9XG4gICAgY29uc3Qgc2hpcFRvQWRkSW5kZXggPSBzaGlwcy5pbmRleE9mKHNoaXBUb0FkZCk7XG4gICAgc2hpcFRvQWRkLmFkZGVkID0gdHJ1ZTtcbiAgICBzaGlwVG9BZGQueCA9IE51bWJlcihldmVudC50YXJnZXQucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXJvd3NcIikpO1xuICAgIHNoaXBUb0FkZC55ID0gTnVtYmVyKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtbnNcIikpO1xuICAgIHNoaXBUb0FkZC5vcmllbnRhdGlvbiA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW9yaWVudGF0aW9uXCIpO1xuICAgIGNvbnN0IHJlcXVpcmVkID0gaW5wdXRHcmlkLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29sdW1ucy5ob3ZlclwiKTtcbiAgICByZXF1aXJlZC5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpKTtcbiAgICByZXF1aXJlZC5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoc2hpcFRvQWRkLm5hbWUpKTtcbiAgICBjb25zdCBwbGFjZVNoaXBNZXNzYWdlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGFjZS1zaGlwLW1lc3NhZ2VcIik7XG4gICAgaWYgKHNoaXBUb0FkZC5sZW5ndGggPT09IDEpIHtcbiAgICAgIHBsYWNlU2hpcE1lc3NhZ2VEaXYudGV4dENvbnRlbnQgPVxuICAgICAgICBcIkFsbCBzaGlwcyBwbGFjZWQsIG1vdmUgdG8gYmF0dGxlZ3JvdW5kIVwiO1xuICAgIH1cbiAgICBpZiAoIXNoaXBzW3NoaXBUb0FkZEluZGV4ICsgMV0pIHJldHVybjtcbiAgICBwbGFjZVNoaXBNZXNzYWdlRGl2LnRleHRDb250ZW50ID0gYFBsYWNlIHlvdXIgJHtcbiAgICAgIHNoaXBzW3NoaXBUb0FkZEluZGV4ICsgMV0ubmFtZVxuICAgIH0hYDtcbiAgICBjb2x1bW5zLmZvckVhY2goXG4gICAgICAoY2VsbCkgPT4gKGNlbGwuc2hpcExlbmd0aCA9IHNoaXBzW3NoaXBUb0FkZEluZGV4ICsgMV0ubGVuZ3RoKSxcbiAgICApO1xuICB9O1xuXG4gIGNvbHVtbnMuZm9yRWFjaCgoY2VsbCkgPT4gKGNlbGwuc2hpcExlbmd0aCA9IDUpKTtcblxuICBjb2x1bW5zLmZvckVhY2goKGNlbGwpID0+XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBtb3VzZWVudGVyQ2FsbGJhY2tIb3Jpem9udGFsKSxcbiAgKTtcblxuICBjb2x1bW5zLmZvckVhY2goKGNlbGwpID0+XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBtb3VzZWxlYXZlQ2FsbGJhY2spLFxuICApO1xuXG4gIGlucHV0R3JpZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tDYWxsYmFjayk7XG5cbiAgcm90YXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKGhvcml6b250YWwpIHtcbiAgICAgIGNvbHVtbnMuZm9yRWFjaCgoY2VsbCkgPT5cbiAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBtb3VzZWVudGVyQ2FsbGJhY2tIb3Jpem9udGFsKSxcbiAgICAgICk7XG4gICAgICBjb2x1bW5zLmZvckVhY2goKGNlbGwpID0+XG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgbW91c2VlbnRlckNhbGxiYWNrVmVydGljYWwpLFxuICAgICAgKTtcbiAgICAgIGhvcml6b250YWwgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29sdW1ucy5mb3JFYWNoKChjZWxsKSA9PlxuICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIG1vdXNlZW50ZXJDYWxsYmFja0hvcml6b250YWwpLFxuICAgICAgKTtcbiAgICAgIGNvbHVtbnMuZm9yRWFjaCgoY2VsbCkgPT5cbiAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBtb3VzZWVudGVyQ2FsbGJhY2tWZXJ0aWNhbCksXG4gICAgICApO1xuICAgICAgaG9yaXpvbnRhbCA9IHRydWU7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IHJlbW92ZVBsYXllclNlY3Rpb25zID0gKCkgPT4ge1xuICBjb25zdCBwbGF5ZXJTZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxheWVyLXNlY3Rpb25cIik7XG4gIHBsYXllclNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24pID0+IHNlY3Rpb24ucmVtb3ZlKCkpO1xufTtcblxuY29uc3QgcmVzdGFydEdhbWUgPSAoKSA9PiB7XG4gIHJlbW92ZVBsYXllclNlY3Rpb25zKCk7XG4gIGNvbnN0IGdhbWVFbmRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1lbmQtbW9kYWxcIik7XG4gIGdhbWVFbmRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGNvbnN0IGlucHV0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LW1vZGFsXCIpO1xuICBpbnB1dE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgcmVuZGVySW5wdXRNb2RhbCgpO1xuICBpbnB1dFNoaXBzKCk7XG4gIGNvbnN0IHBsYWNlU2hpcE1lc3NhZ2VEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYWNlLXNoaXAtbWVzc2FnZVwiKTtcbiAgcGxhY2VTaGlwTWVzc2FnZURpdi50ZXh0Q29udGVudCA9IFwiUGxhY2UgeW91ciBjYXJyaWVyIVwiO1xuICBwdWJzdWIucHVibGlzaChcInJlc3RhcnQtZ2FtZVwiKTtcbn07XG5cbmNvbnN0IG9wZW5HYW1lRW5kTW9kYWwgPSAodmljdG9yKSA9PiB7XG4gIGNvbnN0IGdhbWVFbmRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1lbmQtbW9kYWxcIik7XG4gIGdhbWVFbmRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLWVuZC1tb2RhbCAudGV4dFwiKTtcbiAgdGV4dC50ZXh0Q29udGVudCA9IGAke3ZpY3Rvcn0gd29uIWA7XG4gIGNvbnN0IHJlc3RhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtZW5kLW1vZGFsIC5yZXN0YXJ0XCIpO1xuICByZXN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXN0YXJ0R2FtZSk7XG4gIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLWVuZC1tb2RhbCAuY2xvc2VcIik7XG4gIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZ2FtZUVuZE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfSk7XG59O1xuXG5jb25zdCBzaG93QWxlcnQgPSAodmljdG9yKSA9PiB7XG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLXR3by1nYW1lYm9hcmRcIilcbiAgICAucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlbmRQbGF5ZXJBdHRhY2spO1xuICBvcGVuR2FtZUVuZE1vZGFsKHZpY3Rvcik7XG59O1xuXG5jb25zdCByZW5kZXJBdHRhY2tNZXNzYWdlID0gKHsgcmVjaXBpZW50LCBtZXNzYWdlIH0pID0+IHtcbiAgY29uc3QgbWVzc2FnZUdlbmVyYXRvciA9IChwbGF5ZXIsIG1zZykgPT4ge1xuICAgIGlmIChtc2cgPT09IFwic3VjY2Vzcy9oaXRcIikge1xuICAgICAgaWYgKHBsYXllciA9PT0gXCJwbGF5ZXJcIikge1xuICAgICAgICByZXR1cm4gXCJDb21wdXRlciBoaXQgeW91ciBmbGVldCFcIjtcbiAgICAgIH1cbiAgICAgIGlmIChwbGF5ZXIgPT09IFwiY29tcHV0ZXJcIikge1xuICAgICAgICByZXR1cm4gXCJZb3Ugc3VjY2Vzc2Z1bGx5IGhpdCBhIGNvbXB1dGVyIHNoaXAhXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChtc2cgPT09IFwic3VjY2Vzcy9taXNzXCIpIHtcbiAgICAgIGlmIChwbGF5ZXIgPT09IFwicGxheWVyXCIpIHtcbiAgICAgICAgcmV0dXJuIFwiQ29tcHV0ZXIncyBhdHRhY2sgbWlzc2VkIVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFwiWW91ciBhdHRhY2sgbWlzc2VkIVwiO1xuICAgIH1cbiAgICByZXR1cm4gXCJcIjtcbiAgfTtcbiAgaWYgKHJlY2lwaWVudCA9PT0gXCJwbGF5ZXJcIikge1xuICAgIGNvbnN0IG1lc3NhZ2VEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1vbmUtbWVzc2FnZVwiKTtcbiAgICBtZXNzYWdlRGl2LnRleHRDb250ZW50ID0gbWVzc2FnZUdlbmVyYXRvcihcInBsYXllclwiLCBtZXNzYWdlKTtcbiAgICBpZiAobWVzc2FnZSA9PT0gXCJzdWNjZXNzL2hpdFwiKSB7XG4gICAgICBtZXNzYWdlRGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJtaXNzXCIpO1xuICAgICAgbWVzc2FnZURpdi5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICAgIH0gZWxzZSBpZiAobWVzc2FnZSA9PT0gXCJzdWNjZXNzL21pc3NcIikge1xuICAgICAgbWVzc2FnZURpdi5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcbiAgICAgIG1lc3NhZ2VEaXYuY2xhc3NMaXN0LnJlbW92ZShcImhpdFwiKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAocmVjaXBpZW50ID09PSBcImNvbXB1dGVyXCIpIHtcbiAgICBjb25zdCBtZXNzYWdlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItdHdvLW1lc3NhZ2VcIik7XG4gICAgbWVzc2FnZURpdi50ZXh0Q29udGVudCA9IG1lc3NhZ2VHZW5lcmF0b3IoXCJjb21wdXRlclwiLCBtZXNzYWdlKTtcbiAgICBpZiAobWVzc2FnZSA9PT0gXCJzdWNjZXNzL2hpdFwiKSB7XG4gICAgICBtZXNzYWdlRGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJtaXNzXCIpO1xuICAgICAgbWVzc2FnZURpdi5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICAgIH0gZWxzZSBpZiAobWVzc2FnZSA9PT0gXCJzdWNjZXNzL21pc3NcIikge1xuICAgICAgbWVzc2FnZURpdi5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcbiAgICAgIG1lc3NhZ2VEaXYuY2xhc3NMaXN0LnJlbW92ZShcImhpdFwiKTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IERPTU1vZHVsZU9iamVjdCA9IHtcbiAgZXhlY3V0ZSgpIHtcbiAgICByZW5kZXJJbnB1dE1vZGFsKCk7XG4gICAgaW5wdXRTaGlwcygpO1xuICAgIHB1YnN1Yi5zdWJzY3JpYmUoXCJmbGVldHMtaW5pdGlhbGl6ZWRcIiwgYXBwZW5kR2FtZWJvYXJkcyk7XG4gICAgcHVic3ViLnN1YnNjcmliZShcImNvbXB1dGVyLWF0dGFjay1zaGlwXCIsIHJlY2VpdmVDb21wdXRlckF0dGFjayk7XG4gICAgcHVic3ViLnN1YnNjcmliZShcImF0dGFjay1tZXNzYWdlXCIsIHJlbmRlckF0dGFja01lc3NhZ2UpO1xuICAgIHB1YnN1Yi5zdWJzY3JpYmUoXCJnYW1lLWVuZFwiLCBzaG93QWxlcnQpO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRE9NTW9kdWxlT2JqZWN0O1xuIiwiY29uc3QgRE9NRmFjdG9yeSA9IChlbGVtZW50LCBhdHRyaWJ1dGVzKSA9PiB7XG4gIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICBmb3IgKGNvbnN0IGF0dHJpYnV0ZSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgaWYgKCFuZXdFbGVtZW50W2F0dHJpYnV0ZV0pIHtcbiAgICAgIGlmIChhdHRyaWJ1dGUudG9TdHJpbmcoKS5pbmNsdWRlcyhcImRhdGFcIikpIHtcbiAgICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLnRvU3RyaW5nKCksIGF0dHJpYnV0ZXNbYXR0cmlidXRlXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdFbGVtZW50W2F0dHJpYnV0ZV0gPSBhdHRyaWJ1dGVzW2F0dHJpYnV0ZV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBuZXdFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRE9NRmFjdG9yeTtcbiIsImltcG9ydCBTaGlwIGZyb20gXCIuL1NoaXBcIjtcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vR2FtZWJvYXJkXCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL1BsYXllclwiO1xuaW1wb3J0IHB1YnN1YiBmcm9tIFwiLi9QdWJzdWJcIjtcblxubGV0IHBsYXllciA9IFBsYXllcihcInBsYXllclwiLCBHYW1lYm9hcmQoKSk7XG5sZXQgY29tcHV0ZXIgPSBQbGF5ZXIoXCJjb21wdXRlclwiLCBHYW1lYm9hcmQoKSk7XG5cbmNvbnN0IGFkZFNoaXBzID0gKHNoaXBzKSA9PiB7XG4gIGZvciAoY29uc3Qgc2hpcCBvZiBzaGlwcykge1xuICAgIHBsYXllci5mbGVldFxuICAgICAgLmF0KHNoaXAueCwgc2hpcC55KVxuICAgICAgLmFkZChTaGlwKHNoaXAubmFtZSwgc2hpcC5sZW5ndGgpLCBzaGlwLm9yaWVudGF0aW9uKTtcbiAgICBjb21wdXRlci5hdXRvQWRkKFNoaXAoc2hpcC5uYW1lLCBzaGlwLmxlbmd0aCkpO1xuICB9XG4gIHB1YnN1Yi5wdWJsaXNoKFwiZmxlZXRzLWluaXRpYWxpemVkXCIsIFtcbiAgICBwbGF5ZXIuZmxlZXQuYm9hcmQsXG4gICAgY29tcHV0ZXIuZmxlZXQuYm9hcmQsXG4gIF0pO1xufTtcblxuY29uc3QgY29tcHV0ZXJBdHRhY2tTaGlwID0gKCkgPT4ge1xuICBjb25zdCBbeCwgeV0gPSBjb21wdXRlci5hdHRhY2socGxheWVyKS5hdXRvKCk7XG4gIHB1YnN1Yi5wdWJsaXNoKFwiY29tcHV0ZXItYXR0YWNrLXNoaXBcIiwgW3gsIHldKTtcbiAgaWYgKHBsYXllci5mbGVldC5hcmVBbGxTaGlwc1N1bmsoKSkge1xuICAgIHB1YnN1Yi5wdWJsaXNoKFwiZ2FtZS1lbmRcIiwgXCJDb21wdXRlclwiKTtcbiAgfVxuICBwdWJzdWIucHVibGlzaChcImF0dGFjay1tZXNzYWdlXCIsIHtcbiAgICByZWNpcGllbnQ6IFwicGxheWVyXCIsXG4gICAgbWVzc2FnZTogcGxheWVyLmZsZWV0LmxhdGVzdEF0dGFja1N0YXR1cyxcbiAgfSk7XG59O1xuXG5jb25zdCBwbGF5ZXJBdHRhY2tTaGlwID0gKFt4LCB5XSkgPT4ge1xuICBwbGF5ZXIuYXR0YWNrKGNvbXB1dGVyKS5hdCh4LCB5KTtcbiAgaWYgKGNvbXB1dGVyLmZsZWV0LmFyZUFsbFNoaXBzU3VuaygpKSB7XG4gICAgcHVic3ViLnB1Ymxpc2goXCJnYW1lLWVuZFwiLCBcIllvdVwiKTtcbiAgfVxuICBwdWJzdWIucHVibGlzaChcImF0dGFjay1tZXNzYWdlXCIsIHtcbiAgICByZWNpcGllbnQ6IFwiY29tcHV0ZXJcIixcbiAgICBtZXNzYWdlOiBjb21wdXRlci5mbGVldC5sYXRlc3RBdHRhY2tTdGF0dXMsXG4gIH0pO1xuICBjb21wdXRlckF0dGFja1NoaXAoKTtcbn07XG5cbmNvbnN0IHJlc3RhcnRHYW1lID0gKCkgPT4ge1xuICBwbGF5ZXIgPSBudWxsO1xuICBjb21wdXRlciA9IG51bGw7XG4gIHBsYXllciA9IFBsYXllcihcInBsYXllclwiLCBHYW1lYm9hcmQoKSk7XG4gIGNvbXB1dGVyID0gUGxheWVyKFwiY29tcHV0ZXJcIiwgR2FtZWJvYXJkKCkpO1xufTtcblxuY29uc3QgZ2FtZU1vZHVsZU9iamVjdCA9IHtcbiAgZXhlY3V0ZSgpIHtcbiAgICBwdWJzdWIuc3Vic2NyaWJlKFwiaW5wdXQtc2hpcHNcIiwgYWRkU2hpcHMpO1xuICAgIHB1YnN1Yi5zdWJzY3JpYmUoXCJwbGF5ZXItYXR0YWNrLXNoaXBcIiwgcGxheWVyQXR0YWNrU2hpcCk7XG4gICAgcHVic3ViLnN1YnNjcmliZShcInJlc3RhcnQtZ2FtZVwiLCByZXN0YXJ0R2FtZSk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBnYW1lTW9kdWxlT2JqZWN0O1xuIiwiY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBib2FyZCA9IEFycmF5KDEwKVxuICAgIC5maWxsKFwiXCIpXG4gICAgLm1hcCgoZWxlbWVudCkgPT4gQXJyYXkoMTApLmZpbGwoZWxlbWVudCkpO1xuXG4gIGNvbnN0IHNoaXBzQXJyYXkgPSBbXTtcblxuICBsZXQgbGF0ZXN0QXR0YWNrU3RhdHVzID0gXCJcIjtcblxuICBjb25zdCBjaGVja0lmU2hpcENhbkJlQWRkZWQgPSAoeCwgeSwgb3JpZW50YXRpb24sIHNoaXBMZW5ndGgpID0+IHtcbiAgICBpZiAob3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBjb25zdCByZXF1aXJlZFNwYWNlID0gWy4uLmJvYXJkXVt4XS5zbGljZSh5LCB5ICsgc2hpcExlbmd0aCk7XG4gICAgICBpZiAocmVxdWlyZWRTcGFjZS5sZW5ndGggIT09IHNoaXBMZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiByZXF1aXJlZFNwYWNlLmV2ZXJ5KChlbGVtZW50KSA9PiBlbGVtZW50ID09PSBcIlwiKTtcbiAgICB9XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIGNvbnN0IHJlcXVpcmVkU3BhY2UgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDkgLSB4OyBpICs9IDEpIHtcbiAgICAgICAgcmVxdWlyZWRTcGFjZS5wdXNoKGJvYXJkW3ggKyBpXVt5XSk7XG4gICAgICB9XG4gICAgICBpZiAocmVxdWlyZWRTcGFjZS5sZW5ndGggPCBzaGlwTGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gcmVxdWlyZWRTcGFjZS5ldmVyeSgoZWxlbWVudCkgPT4gZWxlbWVudCA9PT0gXCJcIik7XG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xuICB9O1xuXG4gIGNvbnN0IGFkZFNoaXBJbkFycmF5ID0gKHNoaXApID0+IHtcbiAgICBzaGlwc0FycmF5LnB1c2goc2hpcCk7XG4gIH07XG5cbiAgY29uc3QgYWRkU2hpcE9uQm9hcmQgPSAoeCwgeSwgb3JpZW50YXRpb24sIHNoaXApID0+IHtcbiAgICBpZiAob3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBib2FyZFt4XS5maWxsKHNoaXAsIHksIHkgKyBzaGlwLmxlbmd0aCk7XG4gICAgfVxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBmb3IgKGxldCBpID0geDsgaSA8IHNoaXAubGVuZ3RoICsgeDsgaSArPSAxKSB7XG4gICAgICAgIGJvYXJkW2ldW3ldID0gc2hpcDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYXR0YWNrU2hpcCA9ICh4LCB5KSA9PiB7XG4gICAgY29uc3Qgc2hpcCA9IGJvYXJkW3hdW3ldO1xuICAgIGxldCBoaXRQb3NpdGlvbiA9IDA7XG4gICAgLy8gZ2V0IGxlZnQgb2YgZ2FtZWJvYXJkIGZyb20gaGl0IHBvc2l0aW9uXG4gICAgY29uc3QgdGFyZ2V0QXJlYUhvcml6b250YWwgPSBib2FyZFt4XS5zbGljZSgwLCB5KTtcbiAgICAvLyBmaWx0ZXIgdG8gZ2V0IGxlZnQgb2Ygc2hpcCBmcm9tIGhpdCBwb3NpdGlvblxuICAgIGNvbnN0IHNoaXBMZWZ0U2lkZSA9IHRhcmdldEFyZWFIb3Jpem9udGFsLmZpbHRlcihcbiAgICAgIChlbGVtZW50KSA9PiBlbGVtZW50Lm5hbWUgPT09IHNoaXAubmFtZSxcbiAgICApO1xuICAgIGNvbnN0IHRhcmdldEFyZWFWZXJ0aWNhbCA9IFtdO1xuICAgIC8vIGdldCB1cHBlciBvZiBnYW1lYm9hcmQgZnJvbSBoaXQgcG9zaXRpb25cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHg7IGkgKz0gMSkge1xuICAgICAgdGFyZ2V0QXJlYVZlcnRpY2FsLnB1c2goYm9hcmRbaV1beV0pO1xuICAgIH1cbiAgICAvLyBmaWx0ZXIgdG8gZ2V0IHVwcGVyIG9mIHNoaXAgZnJvbSBoaXQgcG9zaXRpb25cbiAgICBjb25zdCBzaGlwVXBwZXJTaWRlID0gdGFyZ2V0QXJlYVZlcnRpY2FsLmZpbHRlcihcbiAgICAgIChlbGVtZW50KSA9PiBlbGVtZW50Lm5hbWUgPT09IHNoaXAubmFtZSxcbiAgICApO1xuXG4gICAgaGl0UG9zaXRpb24gPSAoKCkgPT4ge1xuICAgICAgaWYgKHNoaXBMZWZ0U2lkZS5sZW5ndGggPT09IDAgJiYgc2hpcFVwcGVyU2lkZS5sZW5ndGggPT09IDApIHJldHVybiAwO1xuICAgICAgaWYgKHNoaXBMZWZ0U2lkZS5sZW5ndGggPT09IDAgJiYgc2hpcFVwcGVyU2lkZS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgcmV0dXJuIHNoaXBVcHBlclNpZGUubGVuZ3RoO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNoaXBMZWZ0U2lkZS5sZW5ndGg7XG4gICAgfSkoKTtcblxuICAgIGlmIChzaGlwLmlzSGl0QXQoaGl0UG9zaXRpb24pKSB7XG4gICAgICBsYXRlc3RBdHRhY2tTdGF0dXMgPSBcImlsbGVnYWxcIjtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzaGlwLmhpdChoaXRQb3NpdGlvbik7XG4gICAgbGF0ZXN0QXR0YWNrU3RhdHVzID0gXCJzdWNjZXNzL2hpdFwiO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0IGJvYXJkKCkge1xuICAgICAgcmV0dXJuIFsuLi5ib2FyZF07XG4gICAgfSxcbiAgICBnZXQgc2hpcHNBcnJheSgpIHtcbiAgICAgIHJldHVybiBbLi4uc2hpcHNBcnJheV07XG4gICAgfSxcbiAgICBnZXQgbGF0ZXN0QXR0YWNrU3RhdHVzKCkge1xuICAgICAgcmV0dXJuIGxhdGVzdEF0dGFja1N0YXR1cztcbiAgICB9LFxuICAgIGF0KHgsIHkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFkZChzaGlwLCBvcmllbnRhdGlvbikge1xuICAgICAgICAgIGlmIChjaGVja0lmU2hpcENhbkJlQWRkZWQoeCwgeSwgb3JpZW50YXRpb24sIHNoaXAubGVuZ3RoKSkge1xuICAgICAgICAgICAgYWRkU2hpcEluQXJyYXkoc2hpcCk7XG4gICAgICAgICAgICBhZGRTaGlwT25Cb2FyZCh4LCB5LCBvcmllbnRhdGlvbiwgc2hpcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZWNlaXZlQXR0YWNrKCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmRbeF1beV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGF0dGFja1NoaXAoeCwgeSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChib2FyZFt4XVt5XSA9PT0gXCJYXCIpIHtcbiAgICAgICAgICAgIGxhdGVzdEF0dGFja1N0YXR1cyA9IFwiaWxsZWdhbFwiO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBib2FyZFt4XVt5XSA9IFwiWFwiO1xuICAgICAgICAgIGxhdGVzdEF0dGFja1N0YXR1cyA9IFwic3VjY2Vzcy9taXNzXCI7XG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0sXG4gICAgYXJlQWxsU2hpcHNTdW5rKCkge1xuICAgICAgcmV0dXJuIFsuLi5zaGlwc0FycmF5XS5ldmVyeSgoc2hpcCkgPT4gc2hpcC5pc1N1bmsoKSk7XG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsImNvbnN0IFBsYXllciA9IChuYW1lLCBmbGVldCkgPT4ge1xuICBjb25zdCBoaXRQb3NpdGlvbiA9IHsgeDogdW5kZWZpbmVkLCB5OiB1bmRlZmluZWQgfTtcbiAgbGV0IHRhcmdldEFyZWEgPSBbXTtcblxuICBjb25zdCB1c2VUYXJnZXRBcmVhID0gKHRhcmdldCkgPT4ge1xuICAgIGlmICh0YXJnZXQubGVuZ3RoID09PSAwKSB7XG4gICAgICBoaXRQb3NpdGlvbi54ID0gdW5kZWZpbmVkO1xuICAgICAgaGl0UG9zaXRpb24ueSA9IHVuZGVmaW5lZDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaGl0UG9zaXRpb24ueCA9IHRhcmdldFswXS54O1xuICAgIGhpdFBvc2l0aW9uLnkgPSB0YXJnZXRbMF0ueTtcbiAgICB0YXJnZXRBcmVhLnNwbGljZSgwLCAxKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldCBuYW1lKCkge1xuICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfSxcbiAgICBnZXQgZmxlZXQoKSB7XG4gICAgICByZXR1cm4gZmxlZXQ7XG4gICAgfSxcbiAgICBhdHRhY2soZW5lbXkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGF0KHgsIHkpIHtcbiAgICAgICAgICBlbmVteS5mbGVldC5hdCh4LCB5KS5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgICAgICB9LFxuICAgICAgICBhdXRvKCkge1xuICAgICAgICAgIHVzZVRhcmdldEFyZWEodGFyZ2V0QXJlYSk7XG5cbiAgICAgICAgICBjb25zdCB4ID0gKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChoaXRQb3NpdGlvbi54ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBoaXRQb3NpdGlvbi54O1xuICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgY29uc3QgeSA9ICgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoaGl0UG9zaXRpb24ueSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaGl0UG9zaXRpb24ueTtcbiAgICAgICAgICB9KSgpO1xuXG4gICAgICAgICAgZW5lbXkuZmxlZXQuYXQoeCwgeSkucmVjZWl2ZUF0dGFjayh4LCB5KTtcblxuICAgICAgICAgIGlmIChlbmVteS5mbGVldC5sYXRlc3RBdHRhY2tTdGF0dXMgPT09IFwiaWxsZWdhbFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hdXRvKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGVuZW15LmZsZWV0LmxhdGVzdEF0dGFja1N0YXR1cyA9PT0gXCJzdWNjZXNzL2hpdFwiKSB7XG4gICAgICAgICAgICB0YXJnZXRBcmVhID0gW107XG4gICAgICAgICAgICBpZiAoeSArIDEgPD0gOSkge1xuICAgICAgICAgICAgICB0YXJnZXRBcmVhLnB1c2goeyB4LCB5OiB5ICsgMSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh5IC0gMSA+PSAwKSB7XG4gICAgICAgICAgICAgIHRhcmdldEFyZWEucHVzaCh7IHgsIHk6IHkgLSAxIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHggKyAxIDw9IDkpIHtcbiAgICAgICAgICAgICAgdGFyZ2V0QXJlYS5wdXNoKHsgeDogeCArIDEsIHkgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoeCAtIDEgPj0gMCkge1xuICAgICAgICAgICAgICB0YXJnZXRBcmVhLnB1c2goeyB4OiB4IC0gMSwgeSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gW3gsIHldO1xuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9LFxuICAgIGF1dG9BZGQoc2hpcCkge1xuICAgICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICBjb25zdCBvcmllbnRhdGlvbnMgPSBbXCJob3Jpem9udGFsXCIsIFwidmVydGljYWxcIl07XG4gICAgICBjb25zdCBvcmllbnRhdGlvbiA9IG9yaWVudGF0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKV07XG5cbiAgICAgIGZsZWV0LmF0KHgsIHkpLmFkZChzaGlwLCBvcmllbnRhdGlvbik7XG5cbiAgICAgIGlmICghZmxlZXQuc2hpcHNBcnJheS5pbmNsdWRlcyhzaGlwKSkge1xuICAgICAgICB0aGlzLmF1dG9BZGQoc2hpcCk7XG4gICAgICB9XG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsImNvbnN0IHB1YnN1YiA9IHtcbiAgZXZlbnRzOiB7fSxcbiAgcHVibGlzaChldmVudE5hbWUsIGRhdGEpIHtcbiAgICBpZiAocHVic3ViLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICBwdWJzdWIuZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaCgoY2FsbGJhY2spID0+IGNhbGxiYWNrKGRhdGEpKTtcbiAgICB9XG4gIH0sXG4gIHN1YnNjcmliZShldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHB1YnN1Yi5ldmVudHNbZXZlbnROYW1lXSkpIHtcbiAgICAgIHB1YnN1Yi5ldmVudHNbZXZlbnROYW1lXSA9IFtdO1xuICAgIH1cbiAgICBwdWJzdWIuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChjYWxsYmFjayk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBwdWJzdWI7XG4iLCJjb25zdCBTaGlwID0gKG5hbWUsIGxlbmd0aCkgPT4ge1xuICBsZXQgc2hpcEFycmF5ID0gQXJyYXkobGVuZ3RoKS5maWxsKFwiXCIpO1xuXG4gIGNvbnN0IGhpdCA9IChwb3NpdGlvbikgPT4ge1xuICAgIHNoaXBBcnJheSA9IFsuLi5zaGlwQXJyYXldLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiBpbmRleCA9PT0gcG9zaXRpb24gPyBcImhpdFwiIDogZWxlbWVudDtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBpc0hpdEF0ID0gKHBvc2l0aW9uKSA9PiB7XG4gICAgcmV0dXJuIFsuLi5zaGlwQXJyYXldW3Bvc2l0aW9uXSA9PT0gXCJoaXRcIjtcbiAgfTtcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgcmV0dXJuIFsuLi5zaGlwQXJyYXldLmV2ZXJ5KChlbGVtZW50KSA9PiBlbGVtZW50ID09PSBcImhpdFwiKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldCBuYW1lKCkge1xuICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfSxcbiAgICBnZXQgbGVuZ3RoKCkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9LFxuICAgIGdldCBzaGlwQXJyYXkoKSB7XG4gICAgICByZXR1cm4gWy4uLnNoaXBBcnJheV07XG4gICAgfSxcbiAgICBoaXQsXG4gICAgaXNIaXRBdCxcbiAgICBpc1N1bmssXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4gKi9cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAgICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAgICAgKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICAgICAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAgICAgKi9cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gICAgICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAgICAgKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAgICAgKi9cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gICAgICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICAgICAqL1xcblxcbmhyIHtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgICAqL1xcblxcbnByZSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgICAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gICAgICovXFxuXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyoqXFxuICAgICAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICAgICAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICAgICAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgICAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICAgICAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAgICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgICAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgICAqL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG4gICAgICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICAgICAqIGFsbCBicm93c2Vycy5cXG4gICAgICovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAgICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gICAgICovXFxuXFxuaW1nIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogRm9ybXNcXG4gICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAgICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgICAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gICAgICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICAgKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gICAgICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gICAgICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gIC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gICAgICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICAgICAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gICAgICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICAvKiAxICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICAgICAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICAgICAqL1xcblxcbmJ1dHRvbixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG4gICAgICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gICAgICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICAgICAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gICAgICovXFxuXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG4gICAgICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAgICAgKi9cXG5cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxufVxcblxcbi8qKlxcbiAgICAgKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAgICAgKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICAgICAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gICAgICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgICAqL1xcblxcbmxlZ2VuZCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gICAgICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gICAgICovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKipcXG4gICAgICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICAgICAqL1xcblxcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gICAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxuICAgICAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gICAgICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAgICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAgICAgKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICAgICAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAgICAgKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gICAgICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAgICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAgICAgKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gICAgICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gICAgICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAgICAgKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gICAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gICAgICovXFxuXFxuZGV0YWlscyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLypcXG4gICAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICAgKi9cXG5cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogTWlzY1xcbiAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICAgICAqL1xcblxcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAgICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXG4gICAgICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9ub3JtYWxpemUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDJFQUEyRTs7QUFFM0U7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7RUFDRSxpQkFBaUIsRUFBRSxNQUFNO0VBQ3pCLDhCQUE4QixFQUFFLE1BQU07QUFDeEM7O0FBRUE7bUZBQ21GOztBQUVuRjs7TUFFTTs7QUFFTjtFQUNFLFNBQVM7QUFDWDs7QUFFQTs7TUFFTTs7QUFFTjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7OztNQUdNOztBQUVOO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTttRkFDbUY7O0FBRW5GOzs7TUFHTTs7QUFFTjtFQUNFLHVCQUF1QixFQUFFLE1BQU07RUFDL0IsU0FBUyxFQUFFLE1BQU07RUFDakIsaUJBQWlCLEVBQUUsTUFBTTtBQUMzQjs7QUFFQTs7O01BR007O0FBRU47RUFDRSxpQ0FBaUMsRUFBRSxNQUFNO0VBQ3pDLGNBQWMsRUFBRSxNQUFNO0FBQ3hCOztBQUVBO21GQUNtRjs7QUFFbkY7O01BRU07O0FBRU47RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7OztNQUdNOztBQUVOO0VBQ0UsbUJBQW1CLEVBQUUsTUFBTTtFQUMzQiwwQkFBMEIsRUFBRSxNQUFNO0VBQ2xDLGlDQUFpQyxFQUFFLE1BQU07QUFDM0M7O0FBRUE7O01BRU07O0FBRU47O0VBRUUsbUJBQW1CO0FBQ3JCOztBQUVBOzs7TUFHTTs7QUFFTjs7O0VBR0UsaUNBQWlDLEVBQUUsTUFBTTtFQUN6QyxjQUFjLEVBQUUsTUFBTTtBQUN4Qjs7QUFFQTs7TUFFTTs7QUFFTjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7OztNQUdNOztBQUVOOztFQUVFLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7bUZBQ21GOztBQUVuRjs7TUFFTTs7QUFFTjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTttRkFDbUY7O0FBRW5GOzs7TUFHTTs7QUFFTjs7Ozs7RUFLRSxvQkFBb0IsRUFBRSxNQUFNO0VBQzVCLGVBQWUsRUFBRSxNQUFNO0VBQ3ZCLGlCQUFpQixFQUFFLE1BQU07RUFDekIsU0FBUyxFQUFFLE1BQU07QUFDbkI7O0FBRUE7OztNQUdNOztBQUVOOztFQUVFLE1BQU07RUFDTixpQkFBaUI7QUFDbkI7O0FBRUE7OztNQUdNOztBQUVOOztFQUVFLE1BQU07RUFDTixvQkFBb0I7QUFDdEI7O0FBRUE7O01BRU07O0FBRU47Ozs7RUFJRSwwQkFBMEI7QUFDNUI7O0FBRUE7O01BRU07O0FBRU47Ozs7RUFJRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBOztNQUVNOztBQUVOOzs7O0VBSUUsOEJBQThCO0FBQ2hDOztBQUVBOztNQUVNOztBQUVOO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBOzs7OztNQUtNOztBQUVOO0VBQ0Usc0JBQXNCLEVBQUUsTUFBTTtFQUM5QixjQUFjLEVBQUUsTUFBTTtFQUN0QixjQUFjLEVBQUUsTUFBTTtFQUN0QixlQUFlLEVBQUUsTUFBTTtFQUN2QixVQUFVLEVBQUUsTUFBTTtFQUNsQixtQkFBbUIsRUFBRSxNQUFNO0FBQzdCOztBQUVBOztNQUVNOztBQUVOO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOztNQUVNOztBQUVOO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7O01BR007O0FBRU47O0VBRUUsc0JBQXNCLEVBQUUsTUFBTTtFQUM5QixVQUFVLEVBQUUsTUFBTTtBQUNwQjs7QUFFQTs7TUFFTTs7QUFFTjs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7OztNQUdNOztBQUVOO0VBQ0UsNkJBQTZCLEVBQUUsTUFBTTtFQUNyQyxvQkFBb0IsRUFBRSxNQUFNO0FBQzlCOztBQUVBOztNQUVNOztBQUVOO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOzs7TUFHTTs7QUFFTjtFQUNFLDBCQUEwQixFQUFFLE1BQU07RUFDbEMsYUFBYSxFQUFFLE1BQU07QUFDdkI7O0FBRUE7bUZBQ21GOztBQUVuRjs7TUFFTTs7QUFFTjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O01BRU07O0FBRU47RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7bUZBQ21GOztBQUVuRjs7TUFFTTs7QUFFTjtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7TUFFTTs7QUFFTjtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4gKi9cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAgICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAgICAgKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICAgICAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAgICAgKi9cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gICAgICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAgICAgKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAgICAgKi9cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gICAgICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICAgICAqL1xcblxcbmhyIHtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgICAqL1xcblxcbnByZSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgICAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gICAgICovXFxuXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyoqXFxuICAgICAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICAgICAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICAgICAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgICAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICAgICAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAgICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgICAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgICAqL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG4gICAgICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICAgICAqIGFsbCBicm93c2Vycy5cXG4gICAgICovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAgICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gICAgICovXFxuXFxuaW1nIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogRm9ybXNcXG4gICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAgICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgICAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gICAgICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICAgKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gICAgICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gICAgICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gIC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gICAgICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICAgICAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gICAgICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICAvKiAxICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICAgICAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICAgICAqL1xcblxcbmJ1dHRvbixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG4gICAgICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gICAgICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICAgICAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gICAgICovXFxuXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG4gICAgICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAgICAgKi9cXG5cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxufVxcblxcbi8qKlxcbiAgICAgKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAgICAgKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICAgICAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gICAgICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgICAqL1xcblxcbmxlZ2VuZCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gICAgICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gICAgICovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKipcXG4gICAgICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICAgICAqL1xcblxcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gICAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxuICAgICAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gICAgICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAgICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAgICAgKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICAgICAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAgICAgKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gICAgICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAgICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAgICAgKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gICAgICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gICAgICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAgICAgKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gICAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gICAgICovXFxuXFxuZGV0YWlscyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLypcXG4gICAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICAgKi9cXG5cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogTWlzY1xcbiAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICAgICAqL1xcblxcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAgICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXG4gICAgICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogQm94IHNpemluZyBydWxlcyAqL1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qIFJlbW92ZSBkZWZhdWx0IG1hcmdpbiAqL1xcbmJvZHksXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxucCxcXG5maWd1cmUsXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5kZCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qIFJlbW92ZSBsaXN0IHN0eWxlcyBvbiB1bCwgb2wgZWxlbWVudHMgd2l0aCBhIGxpc3Qgcm9sZSwgd2hpY2ggc3VnZ2VzdHMgZGVmYXVsdCBzdHlsaW5nIHdpbGwgYmUgcmVtb3ZlZCAqL1xcbnVsW3JvbGU9XFxcImxpc3RcXFwiXSxcXG5vbFtyb2xlPVxcXCJsaXN0XFxcIl0ge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogU2V0IGNvcmUgcm9vdCBkZWZhdWx0cyAqL1xcbmh0bWw6Zm9jdXMtd2l0aGluIHtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG4vKiBTZXQgY29yZSBib2R5IGRlZmF1bHRzICovXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZVNwZWVkO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuLyogQSBlbGVtZW50cyB0aGF0IGRvbid0IGhhdmUgYSBjbGFzcyBnZXQgZGVmYXVsdCBzdHlsZXMgKi9cXG5hOm5vdChbY2xhc3NdKSB7XFxuICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XFxufVxcblxcbi8qIE1ha2UgaW1hZ2VzIGVhc2llciB0byB3b3JrIHdpdGggKi9cXG5pbWcsXFxucGljdHVyZSB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogSW5oZXJpdCBmb250cyBmb3IgaW5wdXRzIGFuZCBidXR0b25zICovXFxuaW5wdXQsXFxuYnV0dG9uLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5cXG4vKiBSZW1vdmUgYWxsIGFuaW1hdGlvbnMsIHRyYW5zaXRpb25zIGFuZCBzbW9vdGggc2Nyb2xsIGZvciBwZW9wbGUgdGhhdCBwcmVmZXIgbm90IHRvIHNlZSB0aGVtICovXFxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcXG4gIGh0bWw6Zm9jdXMtd2l0aGluIHtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvO1xcbiAgfVxcblxcbiAgKixcXG4gICo6OmJlZm9yZSxcXG4gICo6OmFmdGVyIHtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHFCQUFxQjtBQUNyQjs7O0VBR0Usc0JBQXNCO0FBQ3hCOztBQUVBLDBCQUEwQjtBQUMxQjs7Ozs7Ozs7OztFQVVFLFNBQVM7QUFDWDs7QUFFQSwyR0FBMkc7QUFDM0c7O0VBRUUsZ0JBQWdCO0FBQ2xCOztBQUVBLDJCQUEyQjtBQUMzQjtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSxpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLGdCQUFnQjtBQUNsQjs7QUFFQSwwREFBMEQ7QUFDMUQ7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUEsb0NBQW9DO0FBQ3BDOztFQUVFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBLHlDQUF5QztBQUN6Qzs7OztFQUlFLGFBQWE7QUFDZjs7QUFFQSxnR0FBZ0c7QUFDaEc7RUFDRTtJQUNFLHFCQUFxQjtFQUN2Qjs7RUFFQTs7O0lBR0UscUNBQXFDO0lBQ3JDLHVDQUF1QztJQUN2QyxzQ0FBc0M7SUFDdEMsZ0NBQWdDO0VBQ2xDO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQm94IHNpemluZyBydWxlcyAqL1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qIFJlbW92ZSBkZWZhdWx0IG1hcmdpbiAqL1xcbmJvZHksXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxucCxcXG5maWd1cmUsXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5kZCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qIFJlbW92ZSBsaXN0IHN0eWxlcyBvbiB1bCwgb2wgZWxlbWVudHMgd2l0aCBhIGxpc3Qgcm9sZSwgd2hpY2ggc3VnZ2VzdHMgZGVmYXVsdCBzdHlsaW5nIHdpbGwgYmUgcmVtb3ZlZCAqL1xcbnVsW3JvbGU9XFxcImxpc3RcXFwiXSxcXG5vbFtyb2xlPVxcXCJsaXN0XFxcIl0ge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogU2V0IGNvcmUgcm9vdCBkZWZhdWx0cyAqL1xcbmh0bWw6Zm9jdXMtd2l0aGluIHtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG4vKiBTZXQgY29yZSBib2R5IGRlZmF1bHRzICovXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZVNwZWVkO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuLyogQSBlbGVtZW50cyB0aGF0IGRvbid0IGhhdmUgYSBjbGFzcyBnZXQgZGVmYXVsdCBzdHlsZXMgKi9cXG5hOm5vdChbY2xhc3NdKSB7XFxuICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XFxufVxcblxcbi8qIE1ha2UgaW1hZ2VzIGVhc2llciB0byB3b3JrIHdpdGggKi9cXG5pbWcsXFxucGljdHVyZSB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogSW5oZXJpdCBmb250cyBmb3IgaW5wdXRzIGFuZCBidXR0b25zICovXFxuaW5wdXQsXFxuYnV0dG9uLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5cXG4vKiBSZW1vdmUgYWxsIGFuaW1hdGlvbnMsIHRyYW5zaXRpb25zIGFuZCBzbW9vdGggc2Nyb2xsIGZvciBwZW9wbGUgdGhhdCBwcmVmZXIgbm90IHRvIHNlZSB0aGVtICovXFxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcXG4gIGh0bWw6Zm9jdXMtd2l0aGluIHtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvO1xcbiAgfVxcblxcbiAgKixcXG4gICo6OmJlZm9yZSxcXG4gICo6OmFmdGVyIHtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvUHJlc3NTdGFydDJQLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcInByZXNzLXN0YXJ0XFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LWZhbWlseTogXFxcInByZXNzLXN0YXJ0XFxcIiwgc2Fucy1zZXJpZjtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiA5NSU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiAwcHggMTVweCAzMHB4IHJnYigwIDAgMCAvIDE1JSk7XFxufVxcblxcbi5pbnB1dC1tb2RhbCB7XFxuICB3aWR0aDogOTUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGdhcDogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcXG59XFxuXFxuaDIge1xcbiAgd2lkdGg6IDk1JTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwicHJlc3Mtc3RhcnRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIDAuMDcpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG5oMyB7XFxuICB3aWR0aDogOTUlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgYW5pbWF0aW9uOiBwbGFjZS1zaGlwLW1lc3NhZ2UtYmxpbmsgMnMgaW5maW5pdGUgZWFzZS1pbiBhbHRlcm5hdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgcGxhY2Utc2hpcC1tZXNzYWdlLWJsaW5rIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBjb2xvcjogI2UxYmVlNztcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMC4zO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICB9XFxufVxcblxcbi5pbnB1dC1tb2RhbCAucmVhZHksXFxuLmlucHV0LW1vZGFsIC5yb3RhdGUge1xcbiAgd2lkdGg6IDM1JTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ucmVhZHkge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBvcGFjaXR5OiAwLjU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYmVlO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ucmVhZHkuYWN0aXZlIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbiAgb3BhY2l0eTogMTtcXG4gIGFuaW1hdGlvbjogcmVhZHktYnV0dG9uIDJzIGluZmluaXRlO1xcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5yZWFkeS5hY3RpdmU6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJlYWR5LWJ1dHRvbiB7XFxuICAwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3ODQ2ODI7XFxuICB9XFxuICAyMCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODM0Yzg5O1xcbiAgfVxcbiAgODAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MwOWNjNDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlN2YwO1xcbiAgfVxcbn1cXG5cXG4ucm90YXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMzEsIDE0Myk7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5pbnB1dC1tb2RhbCAuaG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyOCwgMTI4LCAxMjgsIDAuNik7XFxufVxcblxcbi5pbnB1dC1tb2RhbCAuc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4uaW5wdXQtbW9kYWwgLnJlZCxcXG4uaW5wdXQtbW9kYWwgLnJlZC5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjUzNTA7XFxufVxcblxcbi5pbnB1dHMtZ2FtZWJvYXJkIHtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLmdhbWVib2FyZHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxdnc7XFxuICB3aWR0aDogOTUlO1xcbn1cXG5cXG4ucGxheWVyLXNlY3Rpb24ge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucGxheWVyLWhlYWRlciB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgd2lkdGg6IDk1JTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzcsIDIzMSwgMjQ2LCAwLjUpO1xcbn1cXG5cXG4ucGxheWVyLW9uZS1tZXNzYWdlLFxcbi5wbGF5ZXItdHdvLW1lc3NhZ2Uge1xcbiAgd2lkdGg6IDk1JTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzcsIDIzMSwgMjQ2LCAwLjEpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnBsYXllci1vbmUtbWVzc2FnZS5taXNzLFxcbi5wbGF5ZXItdHdvLW1lc3NhZ2UubWlzcyB7XFxuICBjb2xvcjogI2E3ZmZlYjtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnBsYXllci1vbmUtbWVzc2FnZS5oaXQsXFxuLnBsYXllci10d28tbWVzc2FnZS5oaXQge1xcbiAgY29sb3I6ICNjZTkzZDg7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5nYW1lYm9hcmRzIC5wbGF5ZXItb25lLWdhbWVib2FyZCxcXG4uZ2FtZWJvYXJkcyAucGxheWVyLXR3by1nYW1lYm9hcmQsXFxuLmlucHV0cy1nYW1lYm9hcmQge1xcbiAgd2lkdGg6IDk1JTtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICByb3ctZ2FwOiAycHg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5wbGF5ZXItb25lLWdhbWVib2FyZCAucm93cyxcXG4ucGxheWVyLXR3by1nYW1lYm9hcmQgLnJvd3MsXFxuLmlucHV0cy1nYW1lYm9hcmQgLnJvd3Mge1xcbiAgZmxleDogMTtcXG4gIGdhcDogNHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuXFxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIC5jb2x1bW5zLFxcbi5wbGF5ZXItdHdvLWdhbWVib2FyZCAuY29sdW1ucyB7XFxuICBmbGV4OiAxO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2QxYzRlOTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDIyOSwgMjQ1LCAwLjEpO1xcbn1cXG5cXG4uaW5wdXRzLWdhbWVib2FyZCAuY29sdW1ucyB7XFxuICBmbGV4OiAxO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxufVxcblxcbi5wbGF5ZXItb25lLWdhbWVib2FyZCAucm93cyAuY29sdW1ucy5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucGxheWVyLW9uZS1nYW1lYm9hcmQgLnJvd3MgLmNvbHVtbnMuc2hpcC5oaXQsXFxuLnBsYXllci10d28tZ2FtZWJvYXJkIC5yb3dzIC5jb2x1bW5zLnNoaXAuaGl0IHtcXG4gIGJhY2tncm91bmQ6ICM1ZTM1YjE7XFxufVxcblxcbi5wbGF5ZXItb25lLWdhbWVib2FyZCAucm93cyAuY29sdW1ucy5oaXQsXFxuLnBsYXllci10d28tZ2FtZWJvYXJkIC5yb3dzIC5jb2x1bW5zLmhpdCB7XFxuICBiYWNrZ3JvdW5kOiAjYTdmZmViO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBvcGFjaXR5OiAwLjc7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmdhbWUtZW5kLW1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5nYW1lLWVuZC1tb2RhbC1jb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjkpO1xcbiAgbWFyZ2luOiAxNSUgYXV0bztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgd2lkdGg6IDgwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmdhbWUtZW5kLW1vZGFsLWNvbnRlbnQgLnJlc3RhcnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDEzMSwgMTQzKTtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uY2xvc2Uge1xcbiAgY29sb3I6ICNhYWE7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNsb3NlOmhvdmVyLFxcbi5jbG9zZTpmb2N1cyB7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICBoMSB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICB9XFxuICAuaW5wdXQtbW9kYWwge1xcbiAgICB3aWR0aDogMzUlO1xcbiAgICBib3gtc2hhZG93OiAwcHggMTVweCAzMHB4IHJnYigwIDAgMCAvIDE1JSk7XFxuICB9XFxuICAucm90YXRlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgwY2JjNDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG4gIC5nYW1lYm9hcmRzIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiA3MCU7XFxuICB9XFxuICAucGxheWVyLXNlY3Rpb24ge1xcbiAgICB3aWR0aDogNDUlO1xcbiAgfVxcbiAgLmdhbWUtZW5kLW1vZGFsLWNvbnRlbnQge1xcbiAgICBnYXA6IDIwcHg7XFxuICB9XFxuICAuZ2FtZS1lbmQtbW9kYWwtY29udGVudCAudGV4dCB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICB9XFxuICAuZ2FtZS1lbmQtbW9kYWwtY29udGVudCAucmVzdGFydCB7XFxuICAgIHBhZGRpbmc6IDlweDtcXG4gIH1cXG4gIC5nYW1lLWVuZC1tb2RhbC1jb250ZW50IC5yZXN0YXJ0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRkYjZhYztcXG4gIH1cXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSwgMC4xKTtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTMxLCAxNDMpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDBCQUEwQjtFQUMxQiw0Q0FBMkM7QUFDN0M7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLDBDQUEwQztFQUMxQyxrQkFBa0I7RUFDbEIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDBDQUEwQztFQUMxQyxZQUFZ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LFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsVUFBVTtJQUNWLDBDQUEwQztFQUM1QztFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxTQUFTO0VBQ1g7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwicHJlc3Mtc3RhcnRcXFwiO1xcbiAgc3JjOiB1cmwoLi4vZm9udHMvUHJlc3NTdGFydDJQLVJlZ3VsYXIudHRmKTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LWZhbWlseTogXFxcInByZXNzLXN0YXJ0XFxcIiwgc2Fucy1zZXJpZjtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiA5NSU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiAwcHggMTVweCAzMHB4IHJnYigwIDAgMCAvIDE1JSk7XFxufVxcblxcbi5pbnB1dC1tb2RhbCB7XFxuICB3aWR0aDogOTUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGdhcDogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcXG59XFxuXFxuaDIge1xcbiAgd2lkdGg6IDk1JTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwicHJlc3Mtc3RhcnRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIDAuMDcpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG5oMyB7XFxuICB3aWR0aDogOTUlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgYW5pbWF0aW9uOiBwbGFjZS1zaGlwLW1lc3NhZ2UtYmxpbmsgMnMgaW5maW5pdGUgZWFzZS1pbiBhbHRlcm5hdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgcGxhY2Utc2hpcC1tZXNzYWdlLWJsaW5rIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBjb2xvcjogI2UxYmVlNztcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMC4zO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICB9XFxufVxcblxcbi5pbnB1dC1tb2RhbCAucmVhZHksXFxuLmlucHV0LW1vZGFsIC5yb3RhdGUge1xcbiAgd2lkdGg6IDM1JTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ucmVhZHkge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBvcGFjaXR5OiAwLjU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYmVlO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ucmVhZHkuYWN0aXZlIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbiAgb3BhY2l0eTogMTtcXG4gIGFuaW1hdGlvbjogcmVhZHktYnV0dG9uIDJzIGluZmluaXRlO1xcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5yZWFkeS5hY3RpdmU6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJlYWR5LWJ1dHRvbiB7XFxuICAwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3ODQ2ODI7XFxuICB9XFxuICAyMCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODM0Yzg5O1xcbiAgfVxcbiAgODAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MwOWNjNDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlN2YwO1xcbiAgfVxcbn1cXG5cXG4ucm90YXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMzEsIDE0Myk7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5pbnB1dC1tb2RhbCAuaG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyOCwgMTI4LCAxMjgsIDAuNik7XFxufVxcblxcbi5pbnB1dC1tb2RhbCAuc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4uaW5wdXQtbW9kYWwgLnJlZCxcXG4uaW5wdXQtbW9kYWwgLnJlZC5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjUzNTA7XFxufVxcblxcbi5pbnB1dHMtZ2FtZWJvYXJkIHtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLmdhbWVib2FyZHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxdnc7XFxuICB3aWR0aDogOTUlO1xcbn1cXG5cXG4ucGxheWVyLXNlY3Rpb24ge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucGxheWVyLWhlYWRlciB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgd2lkdGg6IDk1JTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzcsIDIzMSwgMjQ2LCAwLjUpO1xcbn1cXG5cXG4ucGxheWVyLW9uZS1tZXNzYWdlLFxcbi5wbGF5ZXItdHdvLW1lc3NhZ2Uge1xcbiAgd2lkdGg6IDk1JTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzcsIDIzMSwgMjQ2LCAwLjEpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnBsYXllci1vbmUtbWVzc2FnZS5taXNzLFxcbi5wbGF5ZXItdHdvLW1lc3NhZ2UubWlzcyB7XFxuICBjb2xvcjogI2E3ZmZlYjtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnBsYXllci1vbmUtbWVzc2FnZS5oaXQsXFxuLnBsYXllci10d28tbWVzc2FnZS5oaXQge1xcbiAgY29sb3I6ICNjZTkzZDg7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5nYW1lYm9hcmRzIC5wbGF5ZXItb25lLWdhbWVib2FyZCxcXG4uZ2FtZWJvYXJkcyAucGxheWVyLXR3by1nYW1lYm9hcmQsXFxuLmlucHV0cy1nYW1lYm9hcmQge1xcbiAgd2lkdGg6IDk1JTtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICByb3ctZ2FwOiAycHg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5wbGF5ZXItb25lLWdhbWVib2FyZCAucm93cyxcXG4ucGxheWVyLXR3by1nYW1lYm9hcmQgLnJvd3MsXFxuLmlucHV0cy1nYW1lYm9hcmQgLnJvd3Mge1xcbiAgZmxleDogMTtcXG4gIGdhcDogNHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuXFxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIC5jb2x1bW5zLFxcbi5wbGF5ZXItdHdvLWdhbWVib2FyZCAuY29sdW1ucyB7XFxuICBmbGV4OiAxO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2QxYzRlOTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDIyOSwgMjQ1LCAwLjEpO1xcbn1cXG5cXG4uaW5wdXRzLWdhbWVib2FyZCAuY29sdW1ucyB7XFxuICBmbGV4OiAxO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxufVxcblxcbi5wbGF5ZXItb25lLWdhbWVib2FyZCAucm93cyAuY29sdW1ucy5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucGxheWVyLW9uZS1nYW1lYm9hcmQgLnJvd3MgLmNvbHVtbnMuc2hpcC5oaXQsXFxuLnBsYXllci10d28tZ2FtZWJvYXJkIC5yb3dzIC5jb2x1bW5zLnNoaXAuaGl0IHtcXG4gIGJhY2tncm91bmQ6ICM1ZTM1YjE7XFxufVxcblxcbi5wbGF5ZXItb25lLWdhbWVib2FyZCAucm93cyAuY29sdW1ucy5oaXQsXFxuLnBsYXllci10d28tZ2FtZWJvYXJkIC5yb3dzIC5jb2x1bW5zLmhpdCB7XFxuICBiYWNrZ3JvdW5kOiAjYTdmZmViO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBvcGFjaXR5OiAwLjc7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmdhbWUtZW5kLW1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5nYW1lLWVuZC1tb2RhbC1jb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjkpO1xcbiAgbWFyZ2luOiAxNSUgYXV0bztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgd2lkdGg6IDgwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmdhbWUtZW5kLW1vZGFsLWNvbnRlbnQgLnJlc3RhcnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDEzMSwgMTQzKTtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uY2xvc2Uge1xcbiAgY29sb3I6ICNhYWE7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNsb3NlOmhvdmVyLFxcbi5jbG9zZTpmb2N1cyB7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICBoMSB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICB9XFxuICAuaW5wdXQtbW9kYWwge1xcbiAgICB3aWR0aDogMzUlO1xcbiAgICBib3gtc2hhZG93OiAwcHggMTVweCAzMHB4IHJnYigwIDAgMCAvIDE1JSk7XFxuICB9XFxuICAucm90YXRlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgwY2JjNDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG4gIC5nYW1lYm9hcmRzIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiA3MCU7XFxuICB9XFxuICAucGxheWVyLXNlY3Rpb24ge1xcbiAgICB3aWR0aDogNDUlO1xcbiAgfVxcbiAgLmdhbWUtZW5kLW1vZGFsLWNvbnRlbnQge1xcbiAgICBnYXA6IDIwcHg7XFxuICB9XFxuICAuZ2FtZS1lbmQtbW9kYWwtY29udGVudCAudGV4dCB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICB9XFxuICAuZ2FtZS1lbmQtbW9kYWwtY29udGVudCAucmVzdGFydCB7XFxuICAgIHBhZGRpbmc6IDlweDtcXG4gIH1cXG4gIC5nYW1lLWVuZC1tb2RhbC1jb250ZW50IC5yZXN0YXJ0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRkYjZhYztcXG4gIH1cXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSwgMC4xKTtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTMxLCAxNDMpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1tfaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBtb2R1bGVzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2kyXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0IFwiLi9zdHlsZXMvcmVzZXQuY3NzXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9ub3JtYWxpemUuY3NzXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9zdHlsZS5jc3NcIjtcbmltcG9ydCBib2F0SWNvbiBmcm9tIFwiLi9pY29ucy9ib2F0LWljb24ucG5nXCI7XG5pbXBvcnQgZ2FtZU1vZHVsZU9iamVjdCBmcm9tIFwiLi9tb2R1bGVzL0dhbWVcIjtcbmltcG9ydCBET01Nb2R1bGVPYmplY3QgZnJvbSBcIi4vbW9kdWxlcy9ET01cIjtcblxuRE9NTW9kdWxlT2JqZWN0LmV4ZWN1dGUoKTtcbmdhbWVNb2R1bGVPYmplY3QuZXhlY3V0ZSgpO1xuXG4oKCkgPT4ge1xuICBjb25zdCBoZWFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRcIik7XG4gIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbiAgbGluay5ocmVmID0gYm9hdEljb247XG4gIGxpbmsudHlwZSA9IFwiaW1hZ2UvcG5nXCI7XG4gIGxpbmsucmVsID0gXCJpY29uXCI7XG4gIGhlYWQuYXBwZW5kKGxpbmspO1xufSkoKTtcbiJdLCJuYW1lcyI6WyJET01GYWN0b3J5IiwicHVic3ViIiwicmVjZWl2ZUNvbXB1dGVyQXR0YWNrIiwieCIsInkiLCJwbGF5ZXJCb2FyZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInJvdyIsImNvbHVtbiIsImNsYXNzTGlzdCIsImFkZCIsInNlbmRQbGF5ZXJBdHRhY2siLCJldmVudCIsInRhcmdldCIsImNvbnRhaW5zIiwicGFyZW50Tm9kZSIsImdldEF0dHJpYnV0ZSIsInB1Ymxpc2giLCJjcmVhdGVHYW1lYm9hcmQiLCJuYW1lIiwiYm9hcmQiLCJncmlkIiwiY2xhc3NOYW1lIiwiaSIsImoiLCJsZW5ndGgiLCJhcHBlbmQiLCJhZGRFdmVudExpc3RlbmVyIiwiYXBwZW5kR2FtZWJvYXJkcyIsImNvbXB1dGVyQm9hcmQiLCJnYW1lYm9hcmRzIiwicGxheWVyT25lU2VjdGlvbiIsInBsYXllck9uZUhlYWRlciIsInRleHRDb250ZW50IiwicGxheWVyT25lTWVzc2FnZSIsInBsYXllclR3b1NlY3Rpb24iLCJwbGF5ZXJUd29IZWFkZXIiLCJwbGF5ZXJUd29NZXNzYWdlIiwicmVuZGVySW5wdXRNb2RhbCIsImlucHV0TW9kYWxEaXYiLCJpbnB1dEdyaWQiLCJpbnNlcnRCZWZvcmUiLCJpbnB1dFNoaXBzIiwiY29sdW1ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyb3RhdGUiLCJob3Jpem9udGFsIiwic2hpcHMiLCJhZGRlZCIsIm1vdXNlZW50ZXJDYWxsYmFja0hvcml6b250YWwiLCJOdW1iZXIiLCJjZWxscyIsImN1cnJlbnRUYXJnZXQiLCJzaGlwTGVuZ3RoIiwiY29sIiwicHVzaCIsInNvbWUiLCJpdGVtIiwiZm9yRWFjaCIsInNldEF0dHJpYnV0ZSIsIm1vdXNlZW50ZXJDYWxsYmFja1ZlcnRpY2FsIiwiZm9jdXNSb3ciLCJtb3VzZWxlYXZlQ2FsbGJhY2siLCJyZW1vdmUiLCJzaGlwc1Jlc2V0IiwiaGlkZUlucHV0TW9kYWwiLCJ1bmRlZmluZWQiLCJpbnB1dE1vZGFsIiwic3R5bGUiLCJkaXNwbGF5IiwiYWN0aXZhdGVSZWFkeURpdiIsInJlYWR5RGl2IiwiY2xpY2tDYWxsYmFjayIsInNoaXBUb0FkZCIsImZpbmQiLCJzaGlwIiwiY2VsbCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzaGlwVG9BZGRJbmRleCIsImluZGV4T2YiLCJvcmllbnRhdGlvbiIsInJlcXVpcmVkIiwicGxhY2VTaGlwTWVzc2FnZURpdiIsInJlbW92ZVBsYXllclNlY3Rpb25zIiwicGxheWVyU2VjdGlvbnMiLCJzZWN0aW9uIiwicmVzdGFydEdhbWUiLCJnYW1lRW5kTW9kYWwiLCJvcGVuR2FtZUVuZE1vZGFsIiwidmljdG9yIiwidGV4dCIsInJlc3RhcnQiLCJjbG9zZSIsInNob3dBbGVydCIsInJlbmRlckF0dGFja01lc3NhZ2UiLCJyZWNpcGllbnQiLCJtZXNzYWdlIiwibWVzc2FnZUdlbmVyYXRvciIsInBsYXllciIsIm1zZyIsIm1lc3NhZ2VEaXYiLCJET01Nb2R1bGVPYmplY3QiLCJleGVjdXRlIiwic3Vic2NyaWJlIiwiZWxlbWVudCIsImF0dHJpYnV0ZXMiLCJuZXdFbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImF0dHJpYnV0ZSIsInRvU3RyaW5nIiwiaW5jbHVkZXMiLCJTaGlwIiwiR2FtZWJvYXJkIiwiUGxheWVyIiwiY29tcHV0ZXIiLCJhZGRTaGlwcyIsImZsZWV0IiwiYXQiLCJhdXRvQWRkIiwiY29tcHV0ZXJBdHRhY2tTaGlwIiwiYXR0YWNrIiwiYXV0byIsImFyZUFsbFNoaXBzU3VuayIsImxhdGVzdEF0dGFja1N0YXR1cyIsInBsYXllckF0dGFja1NoaXAiLCJnYW1lTW9kdWxlT2JqZWN0IiwiQXJyYXkiLCJmaWxsIiwibWFwIiwic2hpcHNBcnJheSIsImNoZWNrSWZTaGlwQ2FuQmVBZGRlZCIsInJlcXVpcmVkU3BhY2UiLCJzbGljZSIsImV2ZXJ5IiwiYWRkU2hpcEluQXJyYXkiLCJhZGRTaGlwT25Cb2FyZCIsImF0dGFja1NoaXAiLCJoaXRQb3NpdGlvbiIsInRhcmdldEFyZWFIb3Jpem9udGFsIiwic2hpcExlZnRTaWRlIiwiZmlsdGVyIiwidGFyZ2V0QXJlYVZlcnRpY2FsIiwic2hpcFVwcGVyU2lkZSIsImlzSGl0QXQiLCJoaXQiLCJyZWNlaXZlQXR0YWNrIiwiaXNTdW5rIiwidGFyZ2V0QXJlYSIsInVzZVRhcmdldEFyZWEiLCJzcGxpY2UiLCJlbmVteSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm9yaWVudGF0aW9ucyIsImV2ZW50cyIsImV2ZW50TmFtZSIsImRhdGEiLCJjYWxsYmFjayIsImlzQXJyYXkiLCJzaGlwQXJyYXkiLCJwb3NpdGlvbiIsImluZGV4IiwiYm9hdEljb24iLCJoZWFkIiwibGluayIsImhyZWYiLCJ0eXBlIiwicmVsIl0sInNvdXJjZVJvb3QiOiIifQ==