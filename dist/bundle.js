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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"press-start\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nbody {\n  background-color: #121212;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nh1 {\n  font-family: \"press-start\", sans-serif;\n  padding: 5px;\n  text-align: center;\n  width: 95%;\n  background-color: rgb(255, 255, 255, 0.05);\n  border-radius: 5px;\n  box-shadow: 0px 15px 30px rgb(0 0 0 / 15%);\n}\n\n.input-modal {\n  width: 95%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: rgb(255, 255, 255, 0.05);\n  padding: 5px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  border-radius: 5px;\n  gap: 5px;\n}\n\nh2 {\n  width: 95%;\n  font-family: \"press-start\", sans-serif;\n  background-color: rgb(255, 255, 255, 0.07);\n  border-radius: 5px;\n  text-align: center;\n  padding: 5px;\n}\n\nh3 {\n  width: 95%;\n  text-align: center;\n  padding: 5px;\n  font-size: 25px;\n  animation: place-ship-message-blink 2s infinite ease-in alternate;\n}\n\n@keyframes place-ship-message-blink {\n  from {\n    opacity: 1;\n    color: #e1bee7;\n  }\n  to {\n    opacity: 0.3;\n    color: white;\n  }\n}\n\n.input-modal .ready,\n.input-modal .rotate {\n  width: 35%;\n  border-radius: 5px;\n  font-size: 20px;\n  text-align: center;\n  border: 2px solid black;\n}\n\n.ready {\n  pointer-events: none;\n  opacity: 0.5;\n  background-color: #ffebee;\n  color: black;\n}\n\n.ready.active {\n  pointer-events: auto;\n  opacity: 1;\n  animation: ready-button 2s infinite;\n  animation-direction: alternate;\n  animation-timing-function: linear;\n  font-weight: bold;\n}\n\n.ready.active:hover {\n  cursor: pointer;\n}\n\n@keyframes ready-button {\n  0% {\n    background-color: #784682;\n  }\n  20% {\n    background-color: #834c89;\n  }\n  80% {\n    background-color: #c09cc4;\n  }\n  100% {\n    background-color: #efe7f0;\n  }\n}\n\n.rotate {\n  background-color: rgb(0, 131, 143);\n  color: black;\n}\n\n.input-modal .hover {\n  background-color: rgb(128, 128, 128, 0.6);\n}\n\n.input-modal .ship {\n  background-color: gray;\n}\n\n.input-modal .red,\n.input-modal .red.ship {\n  background-color: #ef5350;\n}\n\n.inputs-gameboard {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.gameboards {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1vw;\n  width: 95%;\n}\n\n.player-section {\n  margin-bottom: 20px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.player-header {\n  color: black;\n  margin-bottom: 10px;\n  width: 95%;\n  text-align: center;\n  padding: 5px;\n  font-size: 25px;\n  background-color: rgb(237, 231, 246, 0.5);\n}\n\n.player-one-message,\n.player-two-message {\n  width: 95%;\n  font-size: 18px;\n  background-color: rgb(237, 231, 246, 0.1);\n  text-align: center;\n  margin-bottom: 10px;\n  border-radius: 5px;\n}\n\n.player-one-message.miss,\n.player-two-message.miss {\n  color: #a7ffeb;\n  padding: 5px;\n}\n\n.player-one-message.hit,\n.player-two-message.hit {\n  color: #ce93d8;\n  padding: 5px;\n}\n\n.gameboards .player-one-gameboard,\n.gameboards .player-two-gameboard,\n.inputs-gameboard {\n  width: 95%;\n  aspect-ratio: 1;\n  display: flex;\n  row-gap: 2px;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.player-one-gameboard .rows,\n.player-two-gameboard .rows,\n.inputs-gameboard .rows {\n  flex: 1;\n  gap: 4px;\n  display: flex;\n  width: 100%;\n  height: fit-content;\n}\n\n.player-one-gameboard .columns,\n.player-two-gameboard .columns {\n  flex: 1;\n  border: 1px solid #d1c4e9;\n  background-color: rgb(243, 229, 245, 0.1);\n}\n\n.inputs-gameboard .columns {\n  flex: 1;\n  border: 1px solid rgb(255, 255, 255, 0.5);\n}\n\n.player-one-gameboard .rows .columns.ship {\n  background-color: black;\n}\n\n.player-one-gameboard .rows .columns.ship.hit,\n.player-two-gameboard .rows .columns.ship.hit {\n  background: #5e35b1;\n}\n\n.player-one-gameboard .rows .columns.hit,\n.player-two-gameboard .rows .columns.hit {\n  background: #a7ffeb;\n  border: 1px solid black;\n  opacity: 0.7;\n  pointer-events: none;\n}\n\n.game-end-modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n  justify-content: center;\n  align-items: center;\n}\n\n.game-end-modal-content {\n  background-color: rgb(0, 0, 0, 0.9);\n  margin: 15% auto;\n  padding: 20px;\n  border-radius: 5px;\n  border: 1px solid #888;\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\n.game-end-modal-content .restart {\n  background-color: rgb(0, 131, 143);\n  font-size: 25px;\n  color: black;\n  padding: 5px;\n  border-radius: 5px;\n  text-align: center;\n  border: 1px solid black;\n  font-size: 20px;\n}\n\n.close {\n  color: #aaa;\n  float: right;\n  font-size: 40px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: \"press-start\";\n  src: url(../fonts/PressStart2P-Regular.ttf);\n}\n\nbody {\n  background-color: #121212;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nh1 {\n  font-family: \"press-start\", sans-serif;\n  padding: 5px;\n  text-align: center;\n  width: 95%;\n  background-color: rgb(255, 255, 255, 0.05);\n  border-radius: 5px;\n  box-shadow: 0px 15px 30px rgb(0 0 0 / 15%);\n}\n\n.input-modal {\n  width: 95%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: rgb(255, 255, 255, 0.05);\n  padding: 5px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  border-radius: 5px;\n  gap: 5px;\n}\n\nh2 {\n  width: 95%;\n  font-family: \"press-start\", sans-serif;\n  background-color: rgb(255, 255, 255, 0.07);\n  border-radius: 5px;\n  text-align: center;\n  padding: 5px;\n}\n\nh3 {\n  width: 95%;\n  text-align: center;\n  padding: 5px;\n  font-size: 25px;\n  animation: place-ship-message-blink 2s infinite ease-in alternate;\n}\n\n@keyframes place-ship-message-blink {\n  from {\n    opacity: 1;\n    color: #e1bee7;\n  }\n  to {\n    opacity: 0.3;\n    color: white;\n  }\n}\n\n.input-modal .ready,\n.input-modal .rotate {\n  width: 35%;\n  border-radius: 5px;\n  font-size: 20px;\n  text-align: center;\n  border: 2px solid black;\n}\n\n.ready {\n  pointer-events: none;\n  opacity: 0.5;\n  background-color: #ffebee;\n  color: black;\n}\n\n.ready.active {\n  pointer-events: auto;\n  opacity: 1;\n  animation: ready-button 2s infinite;\n  animation-direction: alternate;\n  animation-timing-function: linear;\n  font-weight: bold;\n}\n\n.ready.active:hover {\n  cursor: pointer;\n}\n\n@keyframes ready-button {\n  0% {\n    background-color: #784682;\n  }\n  20% {\n    background-color: #834c89;\n  }\n  80% {\n    background-color: #c09cc4;\n  }\n  100% {\n    background-color: #efe7f0;\n  }\n}\n\n.rotate {\n  background-color: rgb(0, 131, 143);\n  color: black;\n}\n\n.input-modal .hover {\n  background-color: rgb(128, 128, 128, 0.6);\n}\n\n.input-modal .ship {\n  background-color: gray;\n}\n\n.input-modal .red,\n.input-modal .red.ship {\n  background-color: #ef5350;\n}\n\n.inputs-gameboard {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.gameboards {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1vw;\n  width: 95%;\n}\n\n.player-section {\n  margin-bottom: 20px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.player-header {\n  color: black;\n  margin-bottom: 10px;\n  width: 95%;\n  text-align: center;\n  padding: 5px;\n  font-size: 25px;\n  background-color: rgb(237, 231, 246, 0.5);\n}\n\n.player-one-message,\n.player-two-message {\n  width: 95%;\n  font-size: 18px;\n  background-color: rgb(237, 231, 246, 0.1);\n  text-align: center;\n  margin-bottom: 10px;\n  border-radius: 5px;\n}\n\n.player-one-message.miss,\n.player-two-message.miss {\n  color: #a7ffeb;\n  padding: 5px;\n}\n\n.player-one-message.hit,\n.player-two-message.hit {\n  color: #ce93d8;\n  padding: 5px;\n}\n\n.gameboards .player-one-gameboard,\n.gameboards .player-two-gameboard,\n.inputs-gameboard {\n  width: 95%;\n  aspect-ratio: 1;\n  display: flex;\n  row-gap: 2px;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.player-one-gameboard .rows,\n.player-two-gameboard .rows,\n.inputs-gameboard .rows {\n  flex: 1;\n  gap: 4px;\n  display: flex;\n  width: 100%;\n  height: fit-content;\n}\n\n.player-one-gameboard .columns,\n.player-two-gameboard .columns {\n  flex: 1;\n  border: 1px solid #d1c4e9;\n  background-color: rgb(243, 229, 245, 0.1);\n}\n\n.inputs-gameboard .columns {\n  flex: 1;\n  border: 1px solid rgb(255, 255, 255, 0.5);\n}\n\n.player-one-gameboard .rows .columns.ship {\n  background-color: black;\n}\n\n.player-one-gameboard .rows .columns.ship.hit,\n.player-two-gameboard .rows .columns.ship.hit {\n  background: #5e35b1;\n}\n\n.player-one-gameboard .rows .columns.hit,\n.player-two-gameboard .rows .columns.hit {\n  background: #a7ffeb;\n  border: 1px solid black;\n  opacity: 0.7;\n  pointer-events: none;\n}\n\n.game-end-modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n  justify-content: center;\n  align-items: center;\n}\n\n.game-end-modal-content {\n  background-color: rgb(0, 0, 0, 0.9);\n  margin: 15% auto;\n  padding: 20px;\n  border-radius: 5px;\n  border: 1px solid #888;\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\n.game-end-modal-content .restart {\n  background-color: rgb(0, 131, 143);\n  font-size: 25px;\n  color: black;\n  padding: 5px;\n  border-radius: 5px;\n  text-align: center;\n  border: 1px solid black;\n  font-size: 20px;\n}\n\n.close {\n  color: #aaa;\n  float: right;\n  font-size: 40px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _modules_Game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Game */ "./src/modules/Game.js");
/* harmony import */ var _modules_DOM__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/DOM */ "./src/modules/DOM.js");





_modules_DOM__WEBPACK_IMPORTED_MODULE_4__["default"].execute();
_modules_Game__WEBPACK_IMPORTED_MODULE_3__["default"].execute();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQVYsNERBQUE7QUFDQXdCLDZEQUFBLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvRE9NLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9ET01GYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9HYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL1BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvUHVic3ViLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9TaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvcmVzZXQuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvbm9ybWFsaXplLmNzcz80M2Y0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3Jlc2V0LmNzcz80Y2ZiIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBET01GYWN0b3J5IGZyb20gXCIuL0RPTUZhY3RvcnlcIjtcbmltcG9ydCBwdWJzdWIgZnJvbSBcIi4vUHVic3ViXCI7XG5cbmNvbnN0IHJlY2VpdmVDb21wdXRlckF0dGFjayA9IChbeCwgeV0pID0+IHtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1vbmUtZ2FtZWJvYXJkXCIpO1xuICBjb25zdCByb3cgPSBwbGF5ZXJCb2FyZC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3dzPVwiJHt4fVwiXWApO1xuICBjb25zdCBjb2x1bW4gPSByb3cucXVlcnlTZWxlY3RvcihgW2RhdGEtY29sdW1ucz1cIiR7eX1cIl1gKTtcbiAgY29sdW1uLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG59O1xuXG5jb25zdCBzZW5kUGxheWVyQXR0YWNrID0gKGV2ZW50KSA9PiB7XG4gIGlmICghZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNvbHVtbnNcIikpIHJldHVybjtcbiAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gIGNvbnN0IHggPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXJvd3NcIik7XG4gIGNvbnN0IHkgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW5zXCIpO1xuICBwdWJzdWIucHVibGlzaChcInBsYXllci1hdHRhY2stc2hpcFwiLCBbeCwgeV0pO1xufTtcblxuY29uc3QgY3JlYXRlR2FtZWJvYXJkID0gKG5hbWUsIGJvYXJkKSA9PiB7XG4gIGNvbnN0IGdyaWQgPSBET01GYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBuYW1lIH0pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICBjb25zdCByb3cgPSBET01GYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInJvd3NcIiwgXCJkYXRhLXJvd3NcIjogaSB9KTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgIGNvbnN0IGNvbHVtbiA9IERPTUZhY3RvcnkoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiY29sdW1uc1wiLFxuICAgICAgICBcImRhdGEtY29sdW1uc1wiOiBqLFxuICAgICAgfSk7XG4gICAgICBpZiAoYm9hcmQubGVuZ3RoICE9PSAwICYmIHR5cGVvZiBib2FyZFtpXVtqXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBjb2x1bW4uY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICB9XG4gICAgICByb3cuYXBwZW5kKGNvbHVtbik7XG4gICAgfVxuICAgIGdyaWQuYXBwZW5kKHJvdyk7XG4gIH1cbiAgaWYgKG5hbWUgPT09IFwicGxheWVyLXR3by1nYW1lYm9hcmRcIikge1xuICAgIGdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlbmRQbGF5ZXJBdHRhY2spO1xuICB9XG4gIHJldHVybiBncmlkO1xufTtcblxuY29uc3QgYXBwZW5kR2FtZWJvYXJkcyA9IChbcGxheWVyQm9hcmQsIGNvbXB1dGVyQm9hcmRdKSA9PiB7XG4gIGNvbnN0IGdhbWVib2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVib2FyZHNcIik7XG4gIGNvbnN0IHBsYXllck9uZVNlY3Rpb24gPSBET01GYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInBsYXllci1zZWN0aW9uXCIgfSk7XG4gIGNvbnN0IHBsYXllck9uZUhlYWRlciA9IERPTUZhY3RvcnkoXCJoMlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcInBsYXllci1oZWFkZXJcIixcbiAgICB0ZXh0Q29udGVudDogXCJZb3VcIixcbiAgfSk7XG4gIGNvbnN0IHBsYXllck9uZU1lc3NhZ2UgPSBET01GYWN0b3J5KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwicGxheWVyLW9uZS1tZXNzYWdlXCIsXG4gIH0pO1xuICBjb25zdCBwbGF5ZXJUd29TZWN0aW9uID0gRE9NRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJwbGF5ZXItc2VjdGlvblwiIH0pO1xuICBjb25zdCBwbGF5ZXJUd29IZWFkZXIgPSBET01GYWN0b3J5KFwiaDJcIiwge1xuICAgIGNsYXNzTmFtZTogXCJwbGF5ZXItaGVhZGVyXCIsXG4gICAgdGV4dENvbnRlbnQ6IFwiQ29tcHV0ZXJcIixcbiAgfSk7XG4gIGNvbnN0IHBsYXllclR3b01lc3NhZ2UgPSBET01GYWN0b3J5KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwicGxheWVyLXR3by1tZXNzYWdlXCIsXG4gIH0pO1xuICBwbGF5ZXJPbmVTZWN0aW9uLmFwcGVuZChcbiAgICBwbGF5ZXJPbmVIZWFkZXIsXG4gICAgcGxheWVyT25lTWVzc2FnZSxcbiAgICBjcmVhdGVHYW1lYm9hcmQoXCJwbGF5ZXItb25lLWdhbWVib2FyZFwiLCBwbGF5ZXJCb2FyZCksXG4gICk7XG4gIHBsYXllclR3b1NlY3Rpb24uYXBwZW5kKFxuICAgIHBsYXllclR3b0hlYWRlcixcbiAgICBwbGF5ZXJUd29NZXNzYWdlLFxuICAgIGNyZWF0ZUdhbWVib2FyZChcInBsYXllci10d28tZ2FtZWJvYXJkXCIsIGNvbXB1dGVyQm9hcmQpLFxuICApO1xuICBnYW1lYm9hcmRzLmFwcGVuZChwbGF5ZXJPbmVTZWN0aW9uKTtcbiAgZ2FtZWJvYXJkcy5hcHBlbmQocGxheWVyVHdvU2VjdGlvbik7XG59O1xuXG5jb25zdCByZW5kZXJJbnB1dE1vZGFsID0gKCkgPT4ge1xuICBjb25zdCBpbnB1dE1vZGFsRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dC1tb2RhbFwiKTtcbiAgY29uc3QgaW5wdXRHcmlkID0gY3JlYXRlR2FtZWJvYXJkKFwiaW5wdXRzLWdhbWVib2FyZFwiLCBbXSk7XG4gIGlucHV0TW9kYWxEaXYuaW5zZXJ0QmVmb3JlKGlucHV0R3JpZCwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZWFkeVwiKSk7XG59O1xuXG5jb25zdCBpbnB1dFNoaXBzID0gKCkgPT4ge1xuICBjb25zdCBpbnB1dEdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0cy1nYW1lYm9hcmRcIik7XG4gIGNvbnN0IGNvbHVtbnMgPSBbLi4uaW5wdXRHcmlkLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29sdW1uc1wiKV07XG4gIGNvbnN0IHJvdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucm90YXRlXCIpO1xuICBsZXQgaG9yaXpvbnRhbCA9IHRydWU7XG4gIGxldCBzaGlwcyA9IFtcbiAgICB7IG5hbWU6IFwiY2FycmllclwiLCBsZW5ndGg6IDUsIGFkZGVkOiBmYWxzZSB9LFxuICAgIHsgbmFtZTogXCJkZXN0cm95ZXJcIiwgbGVuZ3RoOiA0LCBhZGRlZDogZmFsc2UgfSxcbiAgICB7IG5hbWU6IFwiY3J1aXNlclwiLCBsZW5ndGg6IDMsIGFkZGVkOiBmYWxzZSB9LFxuICAgIHsgbmFtZTogXCJzdWJtYXJpbmVcIiwgbGVuZ3RoOiAzLCBhZGRlZDogZmFsc2UgfSxcbiAgICB7IG5hbWU6IFwicGF0cm9sXCIsIGxlbmd0aDogMiwgYWRkZWQ6IGZhbHNlIH0sXG4gICAgeyBuYW1lOiBcInNjb3V0XCIsIGxlbmd0aDogMSwgYWRkZWQ6IGZhbHNlIH0sXG4gIF07XG5cbiAgY29uc3QgbW91c2VlbnRlckNhbGxiYWNrSG9yaXpvbnRhbCA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGNvbHVtbiA9IE51bWJlcihldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW5zXCIpKTtcbiAgICBjb25zdCBjZWxscyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnQuY3VycmVudFRhcmdldC5zaGlwTGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGNvbCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGBbZGF0YS1jb2x1bW5zPVwiJHtjb2x1bW4gKyBpfVwiXWAsXG4gICAgICApO1xuICAgICAgY2VsbHMucHVzaChjb2wpO1xuICAgIH1cbiAgICBpZiAoY2VsbHMuc29tZSgoaXRlbSkgPT4gaXRlbSA9PT0gbnVsbCkpIHtcbiAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwicmVkXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoY2VsbHMuc29tZSgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJzaGlwXCIpKSkge1xuICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJyZWRcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNlbGxzLmZvckVhY2goKGl0ZW0pID0+XG4gICAgICBpdGVtLnNldEF0dHJpYnV0ZShcImRhdGEtb3JpZW50YXRpb25cIiwgXCJob3Jpem9udGFsXCIpLFxuICAgICk7XG4gICAgY2VsbHMuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QuYWRkKFwiaG92ZXJcIikpO1xuICB9O1xuXG4gIGNvbnN0IG1vdXNlZW50ZXJDYWxsYmFja1ZlcnRpY2FsID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgY29sdW1uID0gTnVtYmVyKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtbnNcIikpO1xuICAgIGNvbnN0IHJvdyA9IE51bWJlcihldmVudC50YXJnZXQucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXJvd3NcIikpO1xuICAgIGNvbnN0IGdyaWQgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIGNvbnN0IGNlbGxzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudC5jdXJyZW50VGFyZ2V0LnNoaXBMZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgZm9jdXNSb3cgPSBncmlkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvd3M9XCIke3JvdyArIGl9XCJdYCk7XG4gICAgICBpZiAoIWZvY3VzUm93KSBicmVhaztcbiAgICAgIGNlbGxzLnB1c2goZm9jdXNSb3cucXVlcnlTZWxlY3RvcihgW2RhdGEtY29sdW1ucz1cIiR7Y29sdW1ufVwiXWApKTtcbiAgICB9XG4gICAgaWYgKGNlbGxzLmxlbmd0aCA8IGV2ZW50LmN1cnJlbnRUYXJnZXQuc2hpcExlbmd0aCkge1xuICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJyZWRcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChjZWxscy5zb21lKChpdGVtKSA9PiBpdGVtLmNsYXNzTGlzdC5jb250YWlucyhcInNoaXBcIikpKSB7XG4gICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZChcInJlZFwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2VsbHMuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLW9yaWVudGF0aW9uXCIsIFwidmVydGljYWxcIikpO1xuICAgIGNlbGxzLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LmFkZChcImhvdmVyXCIpKTtcbiAgfTtcblxuICBjb25zdCBtb3VzZWxlYXZlQ2FsbGJhY2sgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcInJlZFwiKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29sdW1uc1wiKVxuICAgICAgLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImhvdmVyXCIpKTtcbiAgfTtcblxuICBjb25zdCBzaGlwc1Jlc2V0ID0gKCkgPT4ge1xuICAgIHNoaXBzID0gW1xuICAgICAgeyBuYW1lOiBcImNhcnJpZXJcIiwgbGVuZ3RoOiA1LCBhZGRlZDogZmFsc2UgfSxcbiAgICAgIHsgbmFtZTogXCJkZXN0cm95ZXJcIiwgbGVuZ3RoOiA0LCBhZGRlZDogZmFsc2UgfSxcbiAgICAgIHsgbmFtZTogXCJjcnVpc2VyXCIsIGxlbmd0aDogMywgYWRkZWQ6IGZhbHNlIH0sXG4gICAgICB7IG5hbWU6IFwic3VibWFyaW5lXCIsIGxlbmd0aDogMywgYWRkZWQ6IGZhbHNlIH0sXG4gICAgICB7IG5hbWU6IFwicGF0cm9sXCIsIGxlbmd0aDogMiwgYWRkZWQ6IGZhbHNlIH0sXG4gICAgICB7IG5hbWU6IFwic2NvdXRcIiwgbGVuZ3RoOiAxLCBhZGRlZDogZmFsc2UgfSxcbiAgICBdO1xuICB9O1xuXG4gIGNvbnN0IGhpZGVJbnB1dE1vZGFsID0gKCkgPT4ge1xuICAgIGlmIChzaGlwc1swXS54ID09PSB1bmRlZmluZWQpIHJldHVybjsgLy8gcmV0dXJuIHdoZW4gbm8gc2hpcHMgZW50ZXJlZFxuICAgIGNvbnN0IGlucHV0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LW1vZGFsXCIpO1xuICAgIGlucHV0R3JpZC5yZW1vdmUoKTtcbiAgICBpbnB1dE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBwdWJzdWIucHVibGlzaChcImlucHV0LXNoaXBzXCIsIHNoaXBzKTtcbiAgICBzaGlwc1Jlc2V0KCk7XG4gIH07XG5cbiAgY29uc3QgYWN0aXZhdGVSZWFkeURpdiA9ICgpID0+IHtcbiAgICBjb25zdCByZWFkeURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVhZHlcIik7XG4gICAgcmVhZHlEaXYuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICByZWFkeURpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZUlucHV0TW9kYWwpO1xuICB9O1xuXG4gIGNvbnN0IGNsaWNrQ2FsbGJhY2sgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoIWV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJjb2x1bW5zXCIpKSByZXR1cm47XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJyZWRcIikpIHJldHVybjtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInNoaXBcIikpIHJldHVybjtcbiAgICBjb25zdCBzaGlwVG9BZGQgPSBzaGlwcy5maW5kKChzaGlwKSA9PiAhc2hpcC5hZGRlZCk7XG4gICAgaWYgKCFzaGlwVG9BZGQpIHJldHVybjtcbiAgICBpZiAoc2hpcFRvQWRkLmxlbmd0aCA9PT0gMSkge1xuICAgICAgY29sdW1ucy5mb3JFYWNoKChjZWxsKSA9PlxuICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIG1vdXNlZW50ZXJDYWxsYmFja0hvcml6b250YWwpLFxuICAgICAgKTtcbiAgICAgIGNvbHVtbnMuZm9yRWFjaCgoY2VsbCkgPT5cbiAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBtb3VzZWVudGVyQ2FsbGJhY2tWZXJ0aWNhbCksXG4gICAgICApO1xuICAgICAgYWN0aXZhdGVSZWFkeURpdigpO1xuICAgIH1cbiAgICBjb25zdCBzaGlwVG9BZGRJbmRleCA9IHNoaXBzLmluZGV4T2Yoc2hpcFRvQWRkKTtcbiAgICBzaGlwVG9BZGQuYWRkZWQgPSB0cnVlO1xuICAgIHNoaXBUb0FkZC54ID0gTnVtYmVyKGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcImRhdGEtcm93c1wiKSk7XG4gICAgc2hpcFRvQWRkLnkgPSBOdW1iZXIoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uc1wiKSk7XG4gICAgc2hpcFRvQWRkLm9yaWVudGF0aW9uID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtb3JpZW50YXRpb25cIik7XG4gICAgY29uc3QgcmVxdWlyZWQgPSBpbnB1dEdyaWQucXVlcnlTZWxlY3RvckFsbChcIi5jb2x1bW5zLmhvdmVyXCIpO1xuICAgIHJlcXVpcmVkLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LmFkZChcInNoaXBcIikpO1xuICAgIHJlcXVpcmVkLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LmFkZChzaGlwVG9BZGQubmFtZSkpO1xuICAgIGNvbnN0IHBsYWNlU2hpcE1lc3NhZ2VEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYWNlLXNoaXAtbWVzc2FnZVwiKTtcbiAgICBpZiAoc2hpcFRvQWRkLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcGxhY2VTaGlwTWVzc2FnZURpdi50ZXh0Q29udGVudCA9XG4gICAgICAgIFwiQWxsIHNoaXBzIHBsYWNlZCwgbW92ZSB0byBiYXR0bGVncm91bmQhXCI7XG4gICAgfVxuICAgIGlmICghc2hpcHNbc2hpcFRvQWRkSW5kZXggKyAxXSkgcmV0dXJuO1xuICAgIHBsYWNlU2hpcE1lc3NhZ2VEaXYudGV4dENvbnRlbnQgPSBgUGxhY2UgeW91ciAke1xuICAgICAgc2hpcHNbc2hpcFRvQWRkSW5kZXggKyAxXS5uYW1lXG4gICAgfSFgO1xuICAgIGNvbHVtbnMuZm9yRWFjaChcbiAgICAgIChjZWxsKSA9PiAoY2VsbC5zaGlwTGVuZ3RoID0gc2hpcHNbc2hpcFRvQWRkSW5kZXggKyAxXS5sZW5ndGgpLFxuICAgICk7XG4gIH07XG5cbiAgY29sdW1ucy5mb3JFYWNoKChjZWxsKSA9PiAoY2VsbC5zaGlwTGVuZ3RoID0gNSkpO1xuXG4gIGNvbHVtbnMuZm9yRWFjaCgoY2VsbCkgPT5cbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIG1vdXNlZW50ZXJDYWxsYmFja0hvcml6b250YWwpLFxuICApO1xuXG4gIGNvbHVtbnMuZm9yRWFjaCgoY2VsbCkgPT5cbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIG1vdXNlbGVhdmVDYWxsYmFjayksXG4gICk7XG5cbiAgaW5wdXRHcmlkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0NhbGxiYWNrKTtcblxuICByb3RhdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgY29sdW1ucy5mb3JFYWNoKChjZWxsKSA9PlxuICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIG1vdXNlZW50ZXJDYWxsYmFja0hvcml6b250YWwpLFxuICAgICAgKTtcbiAgICAgIGNvbHVtbnMuZm9yRWFjaCgoY2VsbCkgPT5cbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBtb3VzZWVudGVyQ2FsbGJhY2tWZXJ0aWNhbCksXG4gICAgICApO1xuICAgICAgaG9yaXpvbnRhbCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb2x1bW5zLmZvckVhY2goKGNlbGwpID0+XG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgbW91c2VlbnRlckNhbGxiYWNrSG9yaXpvbnRhbCksXG4gICAgICApO1xuICAgICAgY29sdW1ucy5mb3JFYWNoKChjZWxsKSA9PlxuICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIG1vdXNlZW50ZXJDYWxsYmFja1ZlcnRpY2FsKSxcbiAgICAgICk7XG4gICAgICBob3Jpem9udGFsID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgcmVtb3ZlUGxheWVyU2VjdGlvbnMgPSAoKSA9PiB7XG4gIGNvbnN0IHBsYXllclNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5ZXItc2VjdGlvblwiKTtcbiAgcGxheWVyU2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4gc2VjdGlvbi5yZW1vdmUoKSk7XG59O1xuXG5jb25zdCByZXN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgcmVtb3ZlUGxheWVyU2VjdGlvbnMoKTtcbiAgY29uc3QgZ2FtZUVuZE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLWVuZC1tb2RhbFwiKTtcbiAgZ2FtZUVuZE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgY29uc3QgaW5wdXRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXQtbW9kYWxcIik7XG4gIGlucHV0TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICByZW5kZXJJbnB1dE1vZGFsKCk7XG4gIGlucHV0U2hpcHMoKTtcbiAgY29uc3QgcGxhY2VTaGlwTWVzc2FnZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxhY2Utc2hpcC1tZXNzYWdlXCIpO1xuICBwbGFjZVNoaXBNZXNzYWdlRGl2LnRleHRDb250ZW50ID0gXCJQbGFjZSB5b3VyIGNhcnJpZXIhXCI7XG4gIHB1YnN1Yi5wdWJsaXNoKFwicmVzdGFydC1nYW1lXCIpO1xufTtcblxuY29uc3Qgb3BlbkdhbWVFbmRNb2RhbCA9ICh2aWN0b3IpID0+IHtcbiAgY29uc3QgZ2FtZUVuZE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLWVuZC1tb2RhbFwiKTtcbiAgZ2FtZUVuZE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtZW5kLW1vZGFsIC50ZXh0XCIpO1xuICB0ZXh0LnRleHRDb250ZW50ID0gYCR7dmljdG9yfSB3b24hYDtcbiAgY29uc3QgcmVzdGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1lbmQtbW9kYWwgLnJlc3RhcnRcIik7XG4gIHJlc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlc3RhcnRHYW1lKTtcbiAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtZW5kLW1vZGFsIC5jbG9zZVwiKTtcbiAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBnYW1lRW5kTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9KTtcbn07XG5cbmNvbnN0IHNob3dBbGVydCA9ICh2aWN0b3IpID0+IHtcbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItdHdvLWdhbWVib2FyZFwiKVxuICAgIC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VuZFBsYXllckF0dGFjayk7XG4gIG9wZW5HYW1lRW5kTW9kYWwodmljdG9yKTtcbn07XG5cbmNvbnN0IHJlbmRlckF0dGFja01lc3NhZ2UgPSAoeyByZWNpcGllbnQsIG1lc3NhZ2UgfSkgPT4ge1xuICBjb25zdCBtZXNzYWdlR2VuZXJhdG9yID0gKHBsYXllciwgbXNnKSA9PiB7XG4gICAgaWYgKG1zZyA9PT0gXCJzdWNjZXNzL2hpdFwiKSB7XG4gICAgICBpZiAocGxheWVyID09PSBcInBsYXllclwiKSB7XG4gICAgICAgIHJldHVybiBcIkNvbXB1dGVyIGhpdCB5b3VyIGZsZWV0IVwiO1xuICAgICAgfVxuICAgICAgaWYgKHBsYXllciA9PT0gXCJjb21wdXRlclwiKSB7XG4gICAgICAgIHJldHVybiBcIllvdSBzdWNjZXNzZnVsbHkgaGl0IGEgY29tcHV0ZXIgc2hpcCFcIjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG1zZyA9PT0gXCJzdWNjZXNzL21pc3NcIikge1xuICAgICAgaWYgKHBsYXllciA9PT0gXCJwbGF5ZXJcIikge1xuICAgICAgICByZXR1cm4gXCJDb21wdXRlcidzIGF0dGFjayBtaXNzZWQhXCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gXCJZb3VyIGF0dGFjayBtaXNzZWQhXCI7XG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xuICB9O1xuICBpZiAocmVjaXBpZW50ID09PSBcInBsYXllclwiKSB7XG4gICAgY29uc3QgbWVzc2FnZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLW9uZS1tZXNzYWdlXCIpO1xuICAgIG1lc3NhZ2VEaXYudGV4dENvbnRlbnQgPSBtZXNzYWdlR2VuZXJhdG9yKFwicGxheWVyXCIsIG1lc3NhZ2UpO1xuICAgIGlmIChtZXNzYWdlID09PSBcInN1Y2Nlc3MvaGl0XCIpIHtcbiAgICAgIG1lc3NhZ2VEaXYuY2xhc3NMaXN0LnJlbW92ZShcIm1pc3NcIik7XG4gICAgICBtZXNzYWdlRGl2LmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlID09PSBcInN1Y2Nlc3MvbWlzc1wiKSB7XG4gICAgICBtZXNzYWdlRGl2LmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xuICAgICAgbWVzc2FnZURpdi5jbGFzc0xpc3QucmVtb3ZlKFwiaGl0XCIpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChyZWNpcGllbnQgPT09IFwiY29tcHV0ZXJcIikge1xuICAgIGNvbnN0IG1lc3NhZ2VEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci10d28tbWVzc2FnZVwiKTtcbiAgICBtZXNzYWdlRGl2LnRleHRDb250ZW50ID0gbWVzc2FnZUdlbmVyYXRvcihcImNvbXB1dGVyXCIsIG1lc3NhZ2UpO1xuICAgIGlmIChtZXNzYWdlID09PSBcInN1Y2Nlc3MvaGl0XCIpIHtcbiAgICAgIG1lc3NhZ2VEaXYuY2xhc3NMaXN0LnJlbW92ZShcIm1pc3NcIik7XG4gICAgICBtZXNzYWdlRGl2LmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlID09PSBcInN1Y2Nlc3MvbWlzc1wiKSB7XG4gICAgICBtZXNzYWdlRGl2LmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xuICAgICAgbWVzc2FnZURpdi5jbGFzc0xpc3QucmVtb3ZlKFwiaGl0XCIpO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgRE9NTW9kdWxlT2JqZWN0ID0ge1xuICBleGVjdXRlKCkge1xuICAgIHJlbmRlcklucHV0TW9kYWwoKTtcbiAgICBpbnB1dFNoaXBzKCk7XG4gICAgcHVic3ViLnN1YnNjcmliZShcImZsZWV0cy1pbml0aWFsaXplZFwiLCBhcHBlbmRHYW1lYm9hcmRzKTtcbiAgICBwdWJzdWIuc3Vic2NyaWJlKFwiY29tcHV0ZXItYXR0YWNrLXNoaXBcIiwgcmVjZWl2ZUNvbXB1dGVyQXR0YWNrKTtcbiAgICBwdWJzdWIuc3Vic2NyaWJlKFwiYXR0YWNrLW1lc3NhZ2VcIiwgcmVuZGVyQXR0YWNrTWVzc2FnZSk7XG4gICAgcHVic3ViLnN1YnNjcmliZShcImdhbWUtZW5kXCIsIHNob3dBbGVydCk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBET01Nb2R1bGVPYmplY3Q7XG4iLCJjb25zdCBET01GYWN0b3J5ID0gKGVsZW1lbnQsIGF0dHJpYnV0ZXMpID0+IHtcbiAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gIGZvciAoY29uc3QgYXR0cmlidXRlIGluIGF0dHJpYnV0ZXMpIHtcbiAgICBpZiAoIW5ld0VsZW1lbnRbYXR0cmlidXRlXSkge1xuICAgICAgaWYgKGF0dHJpYnV0ZS50b1N0cmluZygpLmluY2x1ZGVzKFwiZGF0YVwiKSkge1xuICAgICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUudG9TdHJpbmcoKSwgYXR0cmlidXRlc1thdHRyaWJ1dGVdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld0VsZW1lbnRbYXR0cmlidXRlXSA9IGF0dHJpYnV0ZXNbYXR0cmlidXRlXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBET01GYWN0b3J5O1xuIiwiaW1wb3J0IFNoaXAgZnJvbSBcIi4vU2hpcFwiO1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9HYW1lYm9hcmRcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vUGxheWVyXCI7XG5pbXBvcnQgcHVic3ViIGZyb20gXCIuL1B1YnN1YlwiO1xuXG5sZXQgcGxheWVyID0gUGxheWVyKFwicGxheWVyXCIsIEdhbWVib2FyZCgpKTtcbmxldCBjb21wdXRlciA9IFBsYXllcihcImNvbXB1dGVyXCIsIEdhbWVib2FyZCgpKTtcblxuY29uc3QgYWRkU2hpcHMgPSAoc2hpcHMpID0+IHtcbiAgZm9yIChjb25zdCBzaGlwIG9mIHNoaXBzKSB7XG4gICAgcGxheWVyLmZsZWV0XG4gICAgICAuYXQoc2hpcC54LCBzaGlwLnkpXG4gICAgICAuYWRkKFNoaXAoc2hpcC5uYW1lLCBzaGlwLmxlbmd0aCksIHNoaXAub3JpZW50YXRpb24pO1xuICAgIGNvbXB1dGVyLmF1dG9BZGQoU2hpcChzaGlwLm5hbWUsIHNoaXAubGVuZ3RoKSk7XG4gIH1cbiAgcHVic3ViLnB1Ymxpc2goXCJmbGVldHMtaW5pdGlhbGl6ZWRcIiwgW1xuICAgIHBsYXllci5mbGVldC5ib2FyZCxcbiAgICBjb21wdXRlci5mbGVldC5ib2FyZCxcbiAgXSk7XG59O1xuXG5jb25zdCBjb21wdXRlckF0dGFja1NoaXAgPSAoKSA9PiB7XG4gIGNvbnN0IFt4LCB5XSA9IGNvbXB1dGVyLmF0dGFjayhwbGF5ZXIpLmF1dG8oKTtcbiAgcHVic3ViLnB1Ymxpc2goXCJjb21wdXRlci1hdHRhY2stc2hpcFwiLCBbeCwgeV0pO1xuICBpZiAocGxheWVyLmZsZWV0LmFyZUFsbFNoaXBzU3VuaygpKSB7XG4gICAgcHVic3ViLnB1Ymxpc2goXCJnYW1lLWVuZFwiLCBcIkNvbXB1dGVyXCIpO1xuICB9XG4gIHB1YnN1Yi5wdWJsaXNoKFwiYXR0YWNrLW1lc3NhZ2VcIiwge1xuICAgIHJlY2lwaWVudDogXCJwbGF5ZXJcIixcbiAgICBtZXNzYWdlOiBwbGF5ZXIuZmxlZXQubGF0ZXN0QXR0YWNrU3RhdHVzLFxuICB9KTtcbn07XG5cbmNvbnN0IHBsYXllckF0dGFja1NoaXAgPSAoW3gsIHldKSA9PiB7XG4gIHBsYXllci5hdHRhY2soY29tcHV0ZXIpLmF0KHgsIHkpO1xuICBpZiAoY29tcHV0ZXIuZmxlZXQuYXJlQWxsU2hpcHNTdW5rKCkpIHtcbiAgICBwdWJzdWIucHVibGlzaChcImdhbWUtZW5kXCIsIFwiWW91XCIpO1xuICB9XG4gIHB1YnN1Yi5wdWJsaXNoKFwiYXR0YWNrLW1lc3NhZ2VcIiwge1xuICAgIHJlY2lwaWVudDogXCJjb21wdXRlclwiLFxuICAgIG1lc3NhZ2U6IGNvbXB1dGVyLmZsZWV0LmxhdGVzdEF0dGFja1N0YXR1cyxcbiAgfSk7XG4gIGNvbXB1dGVyQXR0YWNrU2hpcCgpO1xufTtcblxuY29uc3QgcmVzdGFydEdhbWUgPSAoKSA9PiB7XG4gIHBsYXllciA9IG51bGw7XG4gIGNvbXB1dGVyID0gbnVsbDtcbiAgcGxheWVyID0gUGxheWVyKFwicGxheWVyXCIsIEdhbWVib2FyZCgpKTtcbiAgY29tcHV0ZXIgPSBQbGF5ZXIoXCJjb21wdXRlclwiLCBHYW1lYm9hcmQoKSk7XG59O1xuXG5jb25zdCBnYW1lTW9kdWxlT2JqZWN0ID0ge1xuICBleGVjdXRlKCkge1xuICAgIHB1YnN1Yi5zdWJzY3JpYmUoXCJpbnB1dC1zaGlwc1wiLCBhZGRTaGlwcyk7XG4gICAgcHVic3ViLnN1YnNjcmliZShcInBsYXllci1hdHRhY2stc2hpcFwiLCBwbGF5ZXJBdHRhY2tTaGlwKTtcbiAgICBwdWJzdWIuc3Vic2NyaWJlKFwicmVzdGFydC1nYW1lXCIsIHJlc3RhcnRHYW1lKTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWVNb2R1bGVPYmplY3Q7XG4iLCJjb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gQXJyYXkoMTApXG4gICAgLmZpbGwoXCJcIilcbiAgICAubWFwKChlbGVtZW50KSA9PiBBcnJheSgxMCkuZmlsbChlbGVtZW50KSk7XG5cbiAgY29uc3Qgc2hpcHNBcnJheSA9IFtdO1xuXG4gIGxldCBsYXRlc3RBdHRhY2tTdGF0dXMgPSBcIlwiO1xuXG4gIGNvbnN0IGNoZWNrSWZTaGlwQ2FuQmVBZGRlZCA9ICh4LCB5LCBvcmllbnRhdGlvbiwgc2hpcExlbmd0aCkgPT4ge1xuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIGNvbnN0IHJlcXVpcmVkU3BhY2UgPSBbLi4uYm9hcmRdW3hdLnNsaWNlKHksIHkgKyBzaGlwTGVuZ3RoKTtcbiAgICAgIGlmIChyZXF1aXJlZFNwYWNlLmxlbmd0aCAhPT0gc2hpcExlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIHJlcXVpcmVkU3BhY2UuZXZlcnkoKGVsZW1lbnQpID0+IGVsZW1lbnQgPT09IFwiXCIpO1xuICAgIH1cbiAgICBpZiAob3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgY29uc3QgcmVxdWlyZWRTcGFjZSA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gOSAtIHg7IGkgKz0gMSkge1xuICAgICAgICByZXF1aXJlZFNwYWNlLnB1c2goYm9hcmRbeCArIGldW3ldKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZXF1aXJlZFNwYWNlLmxlbmd0aCA8IHNoaXBMZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiByZXF1aXJlZFNwYWNlLmV2ZXJ5KChlbGVtZW50KSA9PiBlbGVtZW50ID09PSBcIlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIFwiXCI7XG4gIH07XG5cbiAgY29uc3QgYWRkU2hpcEluQXJyYXkgPSAoc2hpcCkgPT4ge1xuICAgIHNoaXBzQXJyYXkucHVzaChzaGlwKTtcbiAgfTtcblxuICBjb25zdCBhZGRTaGlwT25Cb2FyZCA9ICh4LCB5LCBvcmllbnRhdGlvbiwgc2hpcCkgPT4ge1xuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIGJvYXJkW3hdLmZpbGwoc2hpcCwgeSwgeSArIHNoaXAubGVuZ3RoKTtcbiAgICB9XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIGZvciAobGV0IGkgPSB4OyBpIDwgc2hpcC5sZW5ndGggKyB4OyBpICs9IDEpIHtcbiAgICAgICAgYm9hcmRbaV1beV0gPSBzaGlwO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBhdHRhY2tTaGlwID0gKHgsIHkpID0+IHtcbiAgICBjb25zdCBzaGlwID0gYm9hcmRbeF1beV07XG4gICAgbGV0IGhpdFBvc2l0aW9uID0gMDtcbiAgICAvLyBnZXQgbGVmdCBvZiBnYW1lYm9hcmQgZnJvbSBoaXQgcG9zaXRpb25cbiAgICBjb25zdCB0YXJnZXRBcmVhSG9yaXpvbnRhbCA9IGJvYXJkW3hdLnNsaWNlKDAsIHkpO1xuICAgIC8vIGZpbHRlciB0byBnZXQgbGVmdCBvZiBzaGlwIGZyb20gaGl0IHBvc2l0aW9uXG4gICAgY29uc3Qgc2hpcExlZnRTaWRlID0gdGFyZ2V0QXJlYUhvcml6b250YWwuZmlsdGVyKFxuICAgICAgKGVsZW1lbnQpID0+IGVsZW1lbnQubmFtZSA9PT0gc2hpcC5uYW1lLFxuICAgICk7XG4gICAgY29uc3QgdGFyZ2V0QXJlYVZlcnRpY2FsID0gW107XG4gICAgLy8gZ2V0IHVwcGVyIG9mIGdhbWVib2FyZCBmcm9tIGhpdCBwb3NpdGlvblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgeDsgaSArPSAxKSB7XG4gICAgICB0YXJnZXRBcmVhVmVydGljYWwucHVzaChib2FyZFtpXVt5XSk7XG4gICAgfVxuICAgIC8vIGZpbHRlciB0byBnZXQgdXBwZXIgb2Ygc2hpcCBmcm9tIGhpdCBwb3NpdGlvblxuICAgIGNvbnN0IHNoaXBVcHBlclNpZGUgPSB0YXJnZXRBcmVhVmVydGljYWwuZmlsdGVyKFxuICAgICAgKGVsZW1lbnQpID0+IGVsZW1lbnQubmFtZSA9PT0gc2hpcC5uYW1lLFxuICAgICk7XG5cbiAgICBoaXRQb3NpdGlvbiA9ICgoKSA9PiB7XG4gICAgICBpZiAoc2hpcExlZnRTaWRlLmxlbmd0aCA9PT0gMCAmJiBzaGlwVXBwZXJTaWRlLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDA7XG4gICAgICBpZiAoc2hpcExlZnRTaWRlLmxlbmd0aCA9PT0gMCAmJiBzaGlwVXBwZXJTaWRlLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICByZXR1cm4gc2hpcFVwcGVyU2lkZS5sZW5ndGg7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2hpcExlZnRTaWRlLmxlbmd0aDtcbiAgICB9KSgpO1xuXG4gICAgaWYgKHNoaXAuaXNIaXRBdChoaXRQb3NpdGlvbikpIHtcbiAgICAgIGxhdGVzdEF0dGFja1N0YXR1cyA9IFwiaWxsZWdhbFwiO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNoaXAuaGl0KGhpdFBvc2l0aW9uKTtcbiAgICBsYXRlc3RBdHRhY2tTdGF0dXMgPSBcInN1Y2Nlc3MvaGl0XCI7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgYm9hcmQoKSB7XG4gICAgICByZXR1cm4gWy4uLmJvYXJkXTtcbiAgICB9LFxuICAgIGdldCBzaGlwc0FycmF5KCkge1xuICAgICAgcmV0dXJuIFsuLi5zaGlwc0FycmF5XTtcbiAgICB9LFxuICAgIGdldCBsYXRlc3RBdHRhY2tTdGF0dXMoKSB7XG4gICAgICByZXR1cm4gbGF0ZXN0QXR0YWNrU3RhdHVzO1xuICAgIH0sXG4gICAgYXQoeCwgeSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYWRkKHNoaXAsIG9yaWVudGF0aW9uKSB7XG4gICAgICAgICAgaWYgKGNoZWNrSWZTaGlwQ2FuQmVBZGRlZCh4LCB5LCBvcmllbnRhdGlvbiwgc2hpcC5sZW5ndGgpKSB7XG4gICAgICAgICAgICBhZGRTaGlwSW5BcnJheShzaGlwKTtcbiAgICAgICAgICAgIGFkZFNoaXBPbkJvYXJkKHgsIHksIG9yaWVudGF0aW9uLCBzaGlwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlY2VpdmVBdHRhY2soKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZFt4XVt5XSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgYXR0YWNrU2hpcCh4LCB5KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGJvYXJkW3hdW3ldID09PSBcIlhcIikge1xuICAgICAgICAgICAgbGF0ZXN0QXR0YWNrU3RhdHVzID0gXCJpbGxlZ2FsXCI7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGJvYXJkW3hdW3ldID0gXCJYXCI7XG4gICAgICAgICAgbGF0ZXN0QXR0YWNrU3RhdHVzID0gXCJzdWNjZXNzL21pc3NcIjtcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSxcbiAgICBhcmVBbGxTaGlwc1N1bmsoKSB7XG4gICAgICByZXR1cm4gWy4uLnNoaXBzQXJyYXldLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKTtcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiY29uc3QgUGxheWVyID0gKG5hbWUsIGZsZWV0KSA9PiB7XG4gIGNvbnN0IGhpdFBvc2l0aW9uID0geyB4OiB1bmRlZmluZWQsIHk6IHVuZGVmaW5lZCB9O1xuICBsZXQgdGFyZ2V0QXJlYSA9IFtdO1xuXG4gIGNvbnN0IHVzZVRhcmdldEFyZWEgPSAodGFyZ2V0KSA9PiB7XG4gICAgaWYgKHRhcmdldC5sZW5ndGggPT09IDApIHtcbiAgICAgIGhpdFBvc2l0aW9uLnggPSB1bmRlZmluZWQ7XG4gICAgICBoaXRQb3NpdGlvbi55ID0gdW5kZWZpbmVkO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBoaXRQb3NpdGlvbi54ID0gdGFyZ2V0WzBdLng7XG4gICAgaGl0UG9zaXRpb24ueSA9IHRhcmdldFswXS55O1xuICAgIHRhcmdldEFyZWEuc3BsaWNlKDAsIDEpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICByZXR1cm4gbmFtZTtcbiAgICB9LFxuICAgIGdldCBmbGVldCgpIHtcbiAgICAgIHJldHVybiBmbGVldDtcbiAgICB9LFxuICAgIGF0dGFjayhlbmVteSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYXQoeCwgeSkge1xuICAgICAgICAgIGVuZW15LmZsZWV0LmF0KHgsIHkpLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgICAgIH0sXG4gICAgICAgIGF1dG8oKSB7XG4gICAgICAgICAgdXNlVGFyZ2V0QXJlYSh0YXJnZXRBcmVhKTtcblxuICAgICAgICAgIGNvbnN0IHggPSAoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGhpdFBvc2l0aW9uLnggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGhpdFBvc2l0aW9uLng7XG4gICAgICAgICAgfSkoKTtcbiAgICAgICAgICBjb25zdCB5ID0gKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChoaXRQb3NpdGlvbi55ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBoaXRQb3NpdGlvbi55O1xuICAgICAgICAgIH0pKCk7XG5cbiAgICAgICAgICBlbmVteS5mbGVldC5hdCh4LCB5KS5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuXG4gICAgICAgICAgaWYgKGVuZW15LmZsZWV0LmxhdGVzdEF0dGFja1N0YXR1cyA9PT0gXCJpbGxlZ2FsXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmF1dG8oKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZW5lbXkuZmxlZXQubGF0ZXN0QXR0YWNrU3RhdHVzID09PSBcInN1Y2Nlc3MvaGl0XCIpIHtcbiAgICAgICAgICAgIHRhcmdldEFyZWEgPSBbXTtcbiAgICAgICAgICAgIGlmICh5ICsgMSA8PSA5KSB7XG4gICAgICAgICAgICAgIHRhcmdldEFyZWEucHVzaCh7IHgsIHk6IHkgKyAxIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHkgLSAxID49IDApIHtcbiAgICAgICAgICAgICAgdGFyZ2V0QXJlYS5wdXNoKHsgeCwgeTogeSAtIDEgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoeCArIDEgPD0gOSkge1xuICAgICAgICAgICAgICB0YXJnZXRBcmVhLnB1c2goeyB4OiB4ICsgMSwgeSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh4IC0gMSA+PSAwKSB7XG4gICAgICAgICAgICAgIHRhcmdldEFyZWEucHVzaCh7IHg6IHggLSAxLCB5IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBbeCwgeV07XG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0sXG4gICAgYXV0b0FkZChzaGlwKSB7XG4gICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIGNvbnN0IG9yaWVudGF0aW9ucyA9IFtcImhvcml6b250YWxcIiwgXCJ2ZXJ0aWNhbFwiXTtcbiAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gb3JpZW50YXRpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpXTtcblxuICAgICAgZmxlZXQuYXQoeCwgeSkuYWRkKHNoaXAsIG9yaWVudGF0aW9uKTtcblxuICAgICAgaWYgKCFmbGVldC5zaGlwc0FycmF5LmluY2x1ZGVzKHNoaXApKSB7XG4gICAgICAgIHRoaXMuYXV0b0FkZChzaGlwKTtcbiAgICAgIH1cbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIiwiY29uc3QgcHVic3ViID0ge1xuICBldmVudHM6IHt9LFxuICBwdWJsaXNoKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgIGlmIChwdWJzdWIuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIHB1YnN1Yi5ldmVudHNbZXZlbnROYW1lXS5mb3JFYWNoKChjYWxsYmFjaykgPT4gY2FsbGJhY2soZGF0YSkpO1xuICAgIH1cbiAgfSxcbiAgc3Vic2NyaWJlKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocHVic3ViLmV2ZW50c1tldmVudE5hbWVdKSkge1xuICAgICAgcHVic3ViLmV2ZW50c1tldmVudE5hbWVdID0gW107XG4gICAgfVxuICAgIHB1YnN1Yi5ldmVudHNbZXZlbnROYW1lXS5wdXNoKGNhbGxiYWNrKTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHB1YnN1YjtcbiIsImNvbnN0IFNoaXAgPSAobmFtZSwgbGVuZ3RoKSA9PiB7XG4gIGxldCBzaGlwQXJyYXkgPSBBcnJheShsZW5ndGgpLmZpbGwoXCJcIik7XG5cbiAgY29uc3QgaGl0ID0gKHBvc2l0aW9uKSA9PiB7XG4gICAgc2hpcEFycmF5ID0gWy4uLnNoaXBBcnJheV0ubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIGluZGV4ID09PSBwb3NpdGlvbiA/IFwiaGl0XCIgOiBlbGVtZW50O1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGlzSGl0QXQgPSAocG9zaXRpb24pID0+IHtcbiAgICByZXR1cm4gWy4uLnNoaXBBcnJheV1bcG9zaXRpb25dID09PSBcImhpdFwiO1xuICB9O1xuXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICByZXR1cm4gWy4uLnNoaXBBcnJheV0uZXZlcnkoKGVsZW1lbnQpID0+IGVsZW1lbnQgPT09IFwiaGl0XCIpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICByZXR1cm4gbmFtZTtcbiAgICB9LFxuICAgIGdldCBsZW5ndGgoKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH0sXG4gICAgZ2V0IHNoaXBBcnJheSgpIHtcbiAgICAgIHJldHVybiBbLi4uc2hpcEFycmF5XTtcbiAgICB9LFxuICAgIGhpdCxcbiAgICBpc0hpdEF0LFxuICAgIGlzU3VuayxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICAgKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICAgICAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gICAgICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICAgICAqL1xcblxcbm1haW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAgICAgKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICAgICAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICAgICAqL1xcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAgICAgKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gICAgICovXFxuXFxuaHIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgICAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gICAgICovXFxuXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAgICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAgICAgKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gICAgICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gICAgICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gICAgICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gICAgICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICAgICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgICAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gICAgICovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAgICovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAgICAgKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gICAgICogYWxsIGJyb3dzZXJzLlxcbiAgICAgKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICAgKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAgICAgKi9cXG5cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICAgKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gICAgICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAgICAgKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgICAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAgICAgKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAgICAgKi9cXG5cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAgICAgKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gICAgICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAgICAgKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gIC8qIDEgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gICAgICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gICAgICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAgICAgKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAgICAgKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gICAgICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAgICAgKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcbiAgICAgKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICAgICAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICAgICAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICAgICAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gICAgICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAgICAgKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gICAgICovXFxuXFxubGVnZW5kIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxufVxcblxcbi8qKlxcbiAgICAgKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAgICAgKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbiAgICAgKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gICAgICovXFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAgICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gICAgICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcbiAgICAgKi9cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICAgKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICAgICAqL1xcblxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gICAgICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICAgICAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAgICAgKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICAgKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICAgICAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAgICAgKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAgICAgKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICAgICAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAgICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAgICAgKi9cXG5cXG5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAgICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgICAqL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBNaXNjXFxuICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gICAgICovXFxuXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICAgICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAgICAgKi9cXG5cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL25vcm1hbGl6ZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMkVBQTJFOztBQUUzRTsrRUFDK0U7O0FBRS9FOzs7RUFHRTs7QUFFRjtFQUNFLGlCQUFpQixFQUFFLE1BQU07RUFDekIsOEJBQThCLEVBQUUsTUFBTTtBQUN4Qzs7QUFFQTttRkFDbUY7O0FBRW5GOztNQUVNOztBQUVOO0VBQ0UsU0FBUztBQUNYOztBQUVBOztNQUVNOztBQUVOO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7O01BR007O0FBRU47RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO21GQUNtRjs7QUFFbkY7OztNQUdNOztBQUVOO0VBQ0UsdUJBQXVCLEVBQUUsTUFBTTtFQUMvQixTQUFTLEVBQUUsTUFBTTtFQUNqQixpQkFBaUIsRUFBRSxNQUFNO0FBQzNCOztBQUVBOzs7TUFHTTs7QUFFTjtFQUNFLGlDQUFpQyxFQUFFLE1BQU07RUFDekMsY0FBYyxFQUFFLE1BQU07QUFDeEI7O0FBRUE7bUZBQ21GOztBQUVuRjs7TUFFTTs7QUFFTjtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTs7O01BR007O0FBRU47RUFDRSxtQkFBbUIsRUFBRSxNQUFNO0VBQzNCLDBCQUEwQixFQUFFLE1BQU07RUFDbEMsaUNBQWlDLEVBQUUsTUFBTTtBQUMzQzs7QUFFQTs7TUFFTTs7QUFFTjs7RUFFRSxtQkFBbUI7QUFDckI7O0FBRUE7OztNQUdNOztBQUVOOzs7RUFHRSxpQ0FBaUMsRUFBRSxNQUFNO0VBQ3pDLGNBQWMsRUFBRSxNQUFNO0FBQ3hCOztBQUVBOztNQUVNOztBQUVOO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7O01BR007O0FBRU47O0VBRUUsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTttRkFDbUY7O0FBRW5GOztNQUVNOztBQUVOO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO21GQUNtRjs7QUFFbkY7OztNQUdNOztBQUVOOzs7OztFQUtFLG9CQUFvQixFQUFFLE1BQU07RUFDNUIsZUFBZSxFQUFFLE1BQU07RUFDdkIsaUJBQWlCLEVBQUUsTUFBTTtFQUN6QixTQUFTLEVBQUUsTUFBTTtBQUNuQjs7QUFFQTs7O01BR007O0FBRU47O0VBRUUsTUFBTTtFQUNOLGlCQUFpQjtBQUNuQjs7QUFFQTs7O01BR007O0FBRU47O0VBRUUsTUFBTTtFQUNOLG9CQUFvQjtBQUN0Qjs7QUFFQTs7TUFFTTs7QUFFTjs7OztFQUlFLDBCQUEwQjtBQUM1Qjs7QUFFQTs7TUFFTTs7QUFFTjs7OztFQUlFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7O01BRU07O0FBRU47Ozs7RUFJRSw4QkFBOEI7QUFDaEM7O0FBRUE7O01BRU07O0FBRU47RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7Ozs7O01BS007O0FBRU47RUFDRSxzQkFBc0IsRUFBRSxNQUFNO0VBQzlCLGNBQWMsRUFBRSxNQUFNO0VBQ3RCLGNBQWMsRUFBRSxNQUFNO0VBQ3RCLGVBQWUsRUFBRSxNQUFNO0VBQ3ZCLFVBQVUsRUFBRSxNQUFNO0VBQ2xCLG1CQUFtQixFQUFFLE1BQU07QUFDN0I7O0FBRUE7O01BRU07O0FBRU47RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7O01BRU07O0FBRU47RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7TUFHTTs7QUFFTjs7RUFFRSxzQkFBc0IsRUFBRSxNQUFNO0VBQzlCLFVBQVUsRUFBRSxNQUFNO0FBQ3BCOztBQUVBOztNQUVNOztBQUVOOztFQUVFLFlBQVk7QUFDZDs7QUFFQTs7O01BR007O0FBRU47RUFDRSw2QkFBNkIsRUFBRSxNQUFNO0VBQ3JDLG9CQUFvQixFQUFFLE1BQU07QUFDOUI7O0FBRUE7O01BRU07O0FBRU47RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7OztNQUdNOztBQUVOO0VBQ0UsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyxhQUFhLEVBQUUsTUFBTTtBQUN2Qjs7QUFFQTttRkFDbUY7O0FBRW5GOztNQUVNOztBQUVOO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7TUFFTTs7QUFFTjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTttRkFDbUY7O0FBRW5GOztNQUVNOztBQUVOO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztNQUVNOztBQUVOO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICAgKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICAgICAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gICAgICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICAgICAqL1xcblxcbm1haW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAgICAgKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICAgICAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICAgICAqL1xcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAgICAgKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gICAgICovXFxuXFxuaHIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgICAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gICAgICovXFxuXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAgICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAgICAgKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gICAgICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gICAgICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gICAgICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gICAgICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICAgICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgICAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gICAgICovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAgICovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAgICAgKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gICAgICogYWxsIGJyb3dzZXJzLlxcbiAgICAgKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICAgKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAgICAgKi9cXG5cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICAgKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gICAgICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAgICAgKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgICAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAgICAgKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAgICAgKi9cXG5cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAgICAgKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gICAgICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAgICAgKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gIC8qIDEgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gICAgICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gICAgICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAgICAgKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAgICAgKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gICAgICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAgICAgKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcbiAgICAgKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICAgICAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICAgICAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICAgICAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gICAgICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAgICAgKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gICAgICovXFxuXFxubGVnZW5kIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxufVxcblxcbi8qKlxcbiAgICAgKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAgICAgKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbiAgICAgKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gICAgICovXFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAgICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gICAgICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcbiAgICAgKi9cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICAgKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICAgICAqL1xcblxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gICAgICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICAgICAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAgICAgKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICAgKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICAgICAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAgICAgKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAgICAgKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICAgICAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAgICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAgICAgKi9cXG5cXG5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAgICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgICAqL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBNaXNjXFxuICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gICAgICovXFxuXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICAgICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAgICAgKi9cXG5cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBCb3ggc2l6aW5nIHJ1bGVzICovXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luICovXFxuYm9keSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5wLFxcbmZpZ3VyZSxcXG5ibG9ja3F1b3RlLFxcbmRsLFxcbmRkIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyogUmVtb3ZlIGxpc3Qgc3R5bGVzIG9uIHVsLCBvbCBlbGVtZW50cyB3aXRoIGEgbGlzdCByb2xlLCB3aGljaCBzdWdnZXN0cyBkZWZhdWx0IHN0eWxpbmcgd2lsbCBiZSByZW1vdmVkICovXFxudWxbcm9sZT1cXFwibGlzdFxcXCJdLFxcbm9sW3JvbGU9XFxcImxpc3RcXFwiXSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBTZXQgY29yZSByb290IGRlZmF1bHRzICovXFxuaHRtbDpmb2N1cy13aXRoaW4ge1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbi8qIFNldCBjb3JlIGJvZHkgZGVmYXVsdHMgKi9cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG4vKiBBIGVsZW1lbnRzIHRoYXQgZG9uJ3QgaGF2ZSBhIGNsYXNzIGdldCBkZWZhdWx0IHN0eWxlcyAqL1xcbmE6bm90KFtjbGFzc10pIHtcXG4gIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcXG59XFxuXFxuLyogTWFrZSBpbWFnZXMgZWFzaWVyIHRvIHdvcmsgd2l0aCAqL1xcbmltZyxcXG5waWN0dXJlIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBJbmhlcml0IGZvbnRzIGZvciBpbnB1dHMgYW5kIGJ1dHRvbnMgKi9cXG5pbnB1dCxcXG5idXR0b24sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbi8qIFJlbW92ZSBhbGwgYW5pbWF0aW9ucywgdHJhbnNpdGlvbnMgYW5kIHNtb290aCBzY3JvbGwgZm9yIHBlb3BsZSB0aGF0IHByZWZlciBub3QgdG8gc2VlIHRoZW0gKi9cXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xcbiAgaHRtbDpmb2N1cy13aXRoaW4ge1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG87XFxuICB9XFxuXFxuICAqLFxcbiAgKjo6YmVmb3JlLFxcbiAgKjo6YWZ0ZXIge1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9yZXNldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEscUJBQXFCO0FBQ3JCOzs7RUFHRSxzQkFBc0I7QUFDeEI7O0FBRUEsMEJBQTBCO0FBQzFCOzs7Ozs7Ozs7O0VBVUUsU0FBUztBQUNYOztBQUVBLDJHQUEyRztBQUMzRzs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBLDJCQUEyQjtBQUMzQjtFQUNFLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0FBQ2xCOztBQUVBLDBEQUEwRDtBQUMxRDtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQSxvQ0FBb0M7QUFDcEM7O0VBRUUsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUEseUNBQXlDO0FBQ3pDOzs7O0VBSUUsYUFBYTtBQUNmOztBQUVBLGdHQUFnRztBQUNoRztFQUNFO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBOzs7SUFHRSxxQ0FBcUM7SUFDckMsdUNBQXVDO0lBQ3ZDLHNDQUFzQztJQUN0QyxnQ0FBZ0M7RUFDbEM7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBCb3ggc2l6aW5nIHJ1bGVzICovXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luICovXFxuYm9keSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5wLFxcbmZpZ3VyZSxcXG5ibG9ja3F1b3RlLFxcbmRsLFxcbmRkIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyogUmVtb3ZlIGxpc3Qgc3R5bGVzIG9uIHVsLCBvbCBlbGVtZW50cyB3aXRoIGEgbGlzdCByb2xlLCB3aGljaCBzdWdnZXN0cyBkZWZhdWx0IHN0eWxpbmcgd2lsbCBiZSByZW1vdmVkICovXFxudWxbcm9sZT1cXFwibGlzdFxcXCJdLFxcbm9sW3JvbGU9XFxcImxpc3RcXFwiXSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBTZXQgY29yZSByb290IGRlZmF1bHRzICovXFxuaHRtbDpmb2N1cy13aXRoaW4ge1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbi8qIFNldCBjb3JlIGJvZHkgZGVmYXVsdHMgKi9cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG4vKiBBIGVsZW1lbnRzIHRoYXQgZG9uJ3QgaGF2ZSBhIGNsYXNzIGdldCBkZWZhdWx0IHN0eWxlcyAqL1xcbmE6bm90KFtjbGFzc10pIHtcXG4gIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcXG59XFxuXFxuLyogTWFrZSBpbWFnZXMgZWFzaWVyIHRvIHdvcmsgd2l0aCAqL1xcbmltZyxcXG5waWN0dXJlIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBJbmhlcml0IGZvbnRzIGZvciBpbnB1dHMgYW5kIGJ1dHRvbnMgKi9cXG5pbnB1dCxcXG5idXR0b24sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbi8qIFJlbW92ZSBhbGwgYW5pbWF0aW9ucywgdHJhbnNpdGlvbnMgYW5kIHNtb290aCBzY3JvbGwgZm9yIHBlb3BsZSB0aGF0IHByZWZlciBub3QgdG8gc2VlIHRoZW0gKi9cXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xcbiAgaHRtbDpmb2N1cy13aXRoaW4ge1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG87XFxuICB9XFxuXFxuICAqLFxcbiAgKjo6YmVmb3JlLFxcbiAgKjo6YWZ0ZXIge1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9QcmVzc1N0YXJ0MlAtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwicHJlc3Mtc3RhcnRcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwicHJlc3Mtc3RhcnRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDk1JTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAwLjA1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDBweCAxNXB4IDMwcHggcmdiKDAgMCAwIC8gMTUlKTtcXG59XFxuXFxuLmlucHV0LW1vZGFsIHtcXG4gIHdpZHRoOiA5NSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbmgyIHtcXG4gIHdpZHRoOiA5NSU7XFxuICBmb250LWZhbWlseTogXFxcInByZXNzLXN0YXJ0XFxcIiwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAwLjA3KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuaDMge1xcbiAgd2lkdGg6IDk1JTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGFuaW1hdGlvbjogcGxhY2Utc2hpcC1tZXNzYWdlLWJsaW5rIDJzIGluZmluaXRlIGVhc2UtaW4gYWx0ZXJuYXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHBsYWNlLXNoaXAtbWVzc2FnZS1ibGluayB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgY29sb3I6ICNlMWJlZTc7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDAuMztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgfVxcbn1cXG5cXG4uaW5wdXQtbW9kYWwgLnJlYWR5LFxcbi5pbnB1dC1tb2RhbCAucm90YXRlIHtcXG4gIHdpZHRoOiAzNSU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnJlYWR5IHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgb3BhY2l0eTogMC41O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWJlZTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLnJlYWR5LmFjdGl2ZSB7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gIG9wYWNpdHk6IDE7XFxuICBhbmltYXRpb246IHJlYWR5LWJ1dHRvbiAycyBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucmVhZHkuYWN0aXZlOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuQGtleWZyYW1lcyByZWFkeS1idXR0b24ge1xcbiAgMCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzg0NjgyO1xcbiAgfVxcbiAgMjAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgzNGM4OTtcXG4gIH1cXG4gIDgwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMDljYzQ7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZTdmMDtcXG4gIH1cXG59XFxuXFxuLnJvdGF0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTMxLCAxNDMpO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uaW5wdXQtbW9kYWwgLmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjgsIDEyOCwgMTI4LCAwLjYpO1xcbn1cXG5cXG4uaW5wdXQtbW9kYWwgLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXFxuLmlucHV0LW1vZGFsIC5yZWQsXFxuLmlucHV0LW1vZGFsIC5yZWQuc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY1MzUwO1xcbn1cXG5cXG4uaW5wdXRzLWdhbWVib2FyZCB7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5nYW1lYm9hcmRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXZ3O1xcbiAgd2lkdGg6IDk1JTtcXG59XFxuXFxuLnBsYXllci1zZWN0aW9uIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBsYXllci1oZWFkZXIge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIHdpZHRoOiA5NSU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM3LCAyMzEsIDI0NiwgMC41KTtcXG59XFxuXFxuLnBsYXllci1vbmUtbWVzc2FnZSxcXG4ucGxheWVyLXR3by1tZXNzYWdlIHtcXG4gIHdpZHRoOiA5NSU7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM3LCAyMzEsIDI0NiwgMC4xKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5wbGF5ZXItb25lLW1lc3NhZ2UubWlzcyxcXG4ucGxheWVyLXR3by1tZXNzYWdlLm1pc3Mge1xcbiAgY29sb3I6ICNhN2ZmZWI7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5wbGF5ZXItb25lLW1lc3NhZ2UuaGl0LFxcbi5wbGF5ZXItdHdvLW1lc3NhZ2UuaGl0IHtcXG4gIGNvbG9yOiAjY2U5M2Q4O1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uZ2FtZWJvYXJkcyAucGxheWVyLW9uZS1nYW1lYm9hcmQsXFxuLmdhbWVib2FyZHMgLnBsYXllci10d28tZ2FtZWJvYXJkLFxcbi5pbnB1dHMtZ2FtZWJvYXJkIHtcXG4gIHdpZHRoOiA5NSU7XFxuICBhc3BlY3QtcmF0aW86IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcm93LWdhcDogMnB4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ucGxheWVyLW9uZS1nYW1lYm9hcmQgLnJvd3MsXFxuLnBsYXllci10d28tZ2FtZWJvYXJkIC5yb3dzLFxcbi5pbnB1dHMtZ2FtZWJvYXJkIC5yb3dzIHtcXG4gIGZsZXg6IDE7XFxuICBnYXA6IDRweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi5wbGF5ZXItb25lLWdhbWVib2FyZCAuY29sdW1ucyxcXG4ucGxheWVyLXR3by1nYW1lYm9hcmQgLmNvbHVtbnMge1xcbiAgZmxleDogMTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMWM0ZTk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzLCAyMjksIDI0NSwgMC4xKTtcXG59XFxuXFxuLmlucHV0cy1nYW1lYm9hcmQgLmNvbHVtbnMge1xcbiAgZmxleDogMTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbn1cXG5cXG4ucGxheWVyLW9uZS1nYW1lYm9hcmQgLnJvd3MgLmNvbHVtbnMuc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIC5yb3dzIC5jb2x1bW5zLnNoaXAuaGl0LFxcbi5wbGF5ZXItdHdvLWdhbWVib2FyZCAucm93cyAuY29sdW1ucy5zaGlwLmhpdCB7XFxuICBiYWNrZ3JvdW5kOiAjNWUzNWIxO1xcbn1cXG5cXG4ucGxheWVyLW9uZS1nYW1lYm9hcmQgLnJvd3MgLmNvbHVtbnMuaGl0LFxcbi5wbGF5ZXItdHdvLWdhbWVib2FyZCAucm93cyAuY29sdW1ucy5oaXQge1xcbiAgYmFja2dyb3VuZDogI2E3ZmZlYjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgb3BhY2l0eTogMC43O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5nYW1lLWVuZC1tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZS1lbmQtbW9kYWwtY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC45KTtcXG4gIG1hcmdpbjogMTUlIGF1dG87XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gIHdpZHRoOiA4MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5nYW1lLWVuZC1tb2RhbC1jb250ZW50IC5yZXN0YXJ0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMzEsIDE0Myk7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBjb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLmNsb3NlIHtcXG4gIGNvbG9yOiAjYWFhO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jbG9zZTpob3ZlcixcXG4uY2xvc2U6Zm9jdXMge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDBCQUEwQjtFQUMxQiw0Q0FBMkM7QUFDN0M7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLDBDQUEwQztFQUMxQyxrQkFBa0I7RUFDbEIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDBDQUEwQztFQUMxQyxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHNDQUFzQztFQUN0QywwQ0FBMEM7RUFDMUMsa0JBQWtCO0VBQ2xCLGtCQUFrQjtF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LFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwicHJlc3Mtc3RhcnRcXFwiO1xcbiAgc3JjOiB1cmwoLi4vZm9udHMvUHJlc3NTdGFydDJQLVJlZ3VsYXIudHRmKTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LWZhbWlseTogXFxcInByZXNzLXN0YXJ0XFxcIiwgc2Fucy1zZXJpZjtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiA5NSU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiAwcHggMTVweCAzMHB4IHJnYigwIDAgMCAvIDE1JSk7XFxufVxcblxcbi5pbnB1dC1tb2RhbCB7XFxuICB3aWR0aDogOTUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG5oMiB7XFxuICB3aWR0aDogOTUlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJwcmVzcy1zdGFydFxcXCIsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC4wNyk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbmgzIHtcXG4gIHdpZHRoOiA5NSU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBhbmltYXRpb246IHBsYWNlLXNoaXAtbWVzc2FnZS1ibGluayAycyBpbmZpbml0ZSBlYXNlLWluIGFsdGVybmF0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBwbGFjZS1zaGlwLW1lc3NhZ2UtYmxpbmsge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGNvbG9yOiAjZTFiZWU3O1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwLjM7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gIH1cXG59XFxuXFxuLmlucHV0LW1vZGFsIC5yZWFkeSxcXG4uaW5wdXQtbW9kYWwgLnJvdGF0ZSB7XFxuICB3aWR0aDogMzUlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5yZWFkeSB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmViZWU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5yZWFkeS5hY3RpdmUge1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICBvcGFjaXR5OiAxO1xcbiAgYW5pbWF0aW9uOiByZWFkeS1idXR0b24gMnMgaW5maW5pdGU7XFxuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnJlYWR5LmFjdGl2ZTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbkBrZXlmcmFtZXMgcmVhZHktYnV0dG9uIHtcXG4gIDAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc4NDY4MjtcXG4gIH1cXG4gIDIwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MzRjODk7XFxuICB9XFxuICA4MCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzA5Y2M0O1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmU3ZjA7XFxuICB9XFxufVxcblxcbi5yb3RhdGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDEzMSwgMTQzKTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmlucHV0LW1vZGFsIC5ob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI4LCAxMjgsIDEyOCwgMC42KTtcXG59XFxuXFxuLmlucHV0LW1vZGFsIC5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbi5pbnB1dC1tb2RhbCAucmVkLFxcbi5pbnB1dC1tb2RhbCAucmVkLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmNTM1MDtcXG59XFxuXFxuLmlucHV0cy1nYW1lYm9hcmQge1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4uZ2FtZWJvYXJkcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDF2dztcXG4gIHdpZHRoOiA5NSU7XFxufVxcblxcbi5wbGF5ZXItc2VjdGlvbiB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wbGF5ZXItaGVhZGVyIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICB3aWR0aDogOTUlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNywgMjMxLCAyNDYsIDAuNSk7XFxufVxcblxcbi5wbGF5ZXItb25lLW1lc3NhZ2UsXFxuLnBsYXllci10d28tbWVzc2FnZSB7XFxuICB3aWR0aDogOTUlO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNywgMjMxLCAyNDYsIDAuMSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ucGxheWVyLW9uZS1tZXNzYWdlLm1pc3MsXFxuLnBsYXllci10d28tbWVzc2FnZS5taXNzIHtcXG4gIGNvbG9yOiAjYTdmZmViO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4ucGxheWVyLW9uZS1tZXNzYWdlLmhpdCxcXG4ucGxheWVyLXR3by1tZXNzYWdlLmhpdCB7XFxuICBjb2xvcjogI2NlOTNkODtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmdhbWVib2FyZHMgLnBsYXllci1vbmUtZ2FtZWJvYXJkLFxcbi5nYW1lYm9hcmRzIC5wbGF5ZXItdHdvLWdhbWVib2FyZCxcXG4uaW5wdXRzLWdhbWVib2FyZCB7XFxuICB3aWR0aDogOTUlO1xcbiAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHJvdy1nYXA6IDJweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIC5yb3dzLFxcbi5wbGF5ZXItdHdvLWdhbWVib2FyZCAucm93cyxcXG4uaW5wdXRzLWdhbWVib2FyZCAucm93cyB7XFxuICBmbGV4OiAxO1xcbiAgZ2FwOiA0cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4ucGxheWVyLW9uZS1nYW1lYm9hcmQgLmNvbHVtbnMsXFxuLnBsYXllci10d28tZ2FtZWJvYXJkIC5jb2x1bW5zIHtcXG4gIGZsZXg6IDE7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDFjNGU5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMjI5LCAyNDUsIDAuMSk7XFxufVxcblxcbi5pbnB1dHMtZ2FtZWJvYXJkIC5jb2x1bW5zIHtcXG4gIGZsZXg6IDE7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG59XFxuXFxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIC5yb3dzIC5jb2x1bW5zLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5wbGF5ZXItb25lLWdhbWVib2FyZCAucm93cyAuY29sdW1ucy5zaGlwLmhpdCxcXG4ucGxheWVyLXR3by1nYW1lYm9hcmQgLnJvd3MgLmNvbHVtbnMuc2hpcC5oaXQge1xcbiAgYmFja2dyb3VuZDogIzVlMzViMTtcXG59XFxuXFxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIC5yb3dzIC5jb2x1bW5zLmhpdCxcXG4ucGxheWVyLXR3by1nYW1lYm9hcmQgLnJvd3MgLmNvbHVtbnMuaGl0IHtcXG4gIGJhY2tncm91bmQ6ICNhN2ZmZWI7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIG9wYWNpdHk6IDAuNztcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uZ2FtZS1lbmQtbW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDE7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmdhbWUtZW5kLW1vZGFsLWNvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuOSk7XFxuICBtYXJnaW46IDE1JSBhdXRvO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICB3aWR0aDogODAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZ2FtZS1lbmQtbW9kYWwtY29udGVudCAucmVzdGFydCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTMxLCAxNDMpO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5jbG9zZSB7XFxuICBjb2xvcjogI2FhYTtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY2xvc2U6aG92ZXIsXFxuLmNsb3NlOmZvY3VzIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNbX2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgbW9kdWxlcy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pMl0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9ybWFsaXplLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9ybWFsaXplLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCBcIi4vc3R5bGVzL3Jlc2V0LmNzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMvbm9ybWFsaXplLmNzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMvc3R5bGUuY3NzXCI7XG5pbXBvcnQgZ2FtZU1vZHVsZU9iamVjdCBmcm9tIFwiLi9tb2R1bGVzL0dhbWVcIjtcbmltcG9ydCBET01Nb2R1bGVPYmplY3QgZnJvbSBcIi4vbW9kdWxlcy9ET01cIjtcblxuRE9NTW9kdWxlT2JqZWN0LmV4ZWN1dGUoKTtcbmdhbWVNb2R1bGVPYmplY3QuZXhlY3V0ZSgpO1xuIl0sIm5hbWVzIjpbIkRPTUZhY3RvcnkiLCJwdWJzdWIiLCJyZWNlaXZlQ29tcHV0ZXJBdHRhY2siLCJ4IiwieSIsInBsYXllckJvYXJkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicm93IiwiY29sdW1uIiwiY2xhc3NMaXN0IiwiYWRkIiwic2VuZFBsYXllckF0dGFjayIsImV2ZW50IiwidGFyZ2V0IiwiY29udGFpbnMiLCJwYXJlbnROb2RlIiwiZ2V0QXR0cmlidXRlIiwicHVibGlzaCIsImNyZWF0ZUdhbWVib2FyZCIsIm5hbWUiLCJib2FyZCIsImdyaWQiLCJjbGFzc05hbWUiLCJpIiwiaiIsImxlbmd0aCIsImFwcGVuZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhcHBlbmRHYW1lYm9hcmRzIiwiY29tcHV0ZXJCb2FyZCIsImdhbWVib2FyZHMiLCJwbGF5ZXJPbmVTZWN0aW9uIiwicGxheWVyT25lSGVhZGVyIiwidGV4dENvbnRlbnQiLCJwbGF5ZXJPbmVNZXNzYWdlIiwicGxheWVyVHdvU2VjdGlvbiIsInBsYXllclR3b0hlYWRlciIsInBsYXllclR3b01lc3NhZ2UiLCJyZW5kZXJJbnB1dE1vZGFsIiwiaW5wdXRNb2RhbERpdiIsImlucHV0R3JpZCIsImluc2VydEJlZm9yZSIsImlucHV0U2hpcHMiLCJjb2x1bW5zIiwicXVlcnlTZWxlY3RvckFsbCIsInJvdGF0ZSIsImhvcml6b250YWwiLCJzaGlwcyIsImFkZGVkIiwibW91c2VlbnRlckNhbGxiYWNrSG9yaXpvbnRhbCIsIk51bWJlciIsImNlbGxzIiwiY3VycmVudFRhcmdldCIsInNoaXBMZW5ndGgiLCJjb2wiLCJwdXNoIiwic29tZSIsIml0ZW0iLCJmb3JFYWNoIiwic2V0QXR0cmlidXRlIiwibW91c2VlbnRlckNhbGxiYWNrVmVydGljYWwiLCJmb2N1c1JvdyIsIm1vdXNlbGVhdmVDYWxsYmFjayIsInJlbW92ZSIsInNoaXBzUmVzZXQiLCJoaWRlSW5wdXRNb2RhbCIsInVuZGVmaW5lZCIsImlucHV0TW9kYWwiLCJzdHlsZSIsImRpc3BsYXkiLCJhY3RpdmF0ZVJlYWR5RGl2IiwicmVhZHlEaXYiLCJjbGlja0NhbGxiYWNrIiwic2hpcFRvQWRkIiwiZmluZCIsInNoaXAiLCJjZWxsIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNoaXBUb0FkZEluZGV4IiwiaW5kZXhPZiIsIm9yaWVudGF0aW9uIiwicmVxdWlyZWQiLCJwbGFjZVNoaXBNZXNzYWdlRGl2IiwicmVtb3ZlUGxheWVyU2VjdGlvbnMiLCJwbGF5ZXJTZWN0aW9ucyIsInNlY3Rpb24iLCJyZXN0YXJ0R2FtZSIsImdhbWVFbmRNb2RhbCIsIm9wZW5HYW1lRW5kTW9kYWwiLCJ2aWN0b3IiLCJ0ZXh0IiwicmVzdGFydCIsImNsb3NlIiwic2hvd0FsZXJ0IiwicmVuZGVyQXR0YWNrTWVzc2FnZSIsInJlY2lwaWVudCIsIm1lc3NhZ2UiLCJtZXNzYWdlR2VuZXJhdG9yIiwicGxheWVyIiwibXNnIiwibWVzc2FnZURpdiIsIkRPTU1vZHVsZU9iamVjdCIsImV4ZWN1dGUiLCJzdWJzY3JpYmUiLCJlbGVtZW50IiwiYXR0cmlidXRlcyIsIm5ld0VsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYXR0cmlidXRlIiwidG9TdHJpbmciLCJpbmNsdWRlcyIsIlNoaXAiLCJHYW1lYm9hcmQiLCJQbGF5ZXIiLCJjb21wdXRlciIsImFkZFNoaXBzIiwiZmxlZXQiLCJhdCIsImF1dG9BZGQiLCJjb21wdXRlckF0dGFja1NoaXAiLCJhdHRhY2siLCJhdXRvIiwiYXJlQWxsU2hpcHNTdW5rIiwibGF0ZXN0QXR0YWNrU3RhdHVzIiwicGxheWVyQXR0YWNrU2hpcCIsImdhbWVNb2R1bGVPYmplY3QiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJzaGlwc0FycmF5IiwiY2hlY2tJZlNoaXBDYW5CZUFkZGVkIiwicmVxdWlyZWRTcGFjZSIsInNsaWNlIiwiZXZlcnkiLCJhZGRTaGlwSW5BcnJheSIsImFkZFNoaXBPbkJvYXJkIiwiYXR0YWNrU2hpcCIsImhpdFBvc2l0aW9uIiwidGFyZ2V0QXJlYUhvcml6b250YWwiLCJzaGlwTGVmdFNpZGUiLCJmaWx0ZXIiLCJ0YXJnZXRBcmVhVmVydGljYWwiLCJzaGlwVXBwZXJTaWRlIiwiaXNIaXRBdCIsImhpdCIsInJlY2VpdmVBdHRhY2siLCJpc1N1bmsiLCJ0YXJnZXRBcmVhIiwidXNlVGFyZ2V0QXJlYSIsInNwbGljZSIsImVuZW15IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwib3JpZW50YXRpb25zIiwiZXZlbnRzIiwiZXZlbnROYW1lIiwiZGF0YSIsImNhbGxiYWNrIiwiaXNBcnJheSIsInNoaXBBcnJheSIsInBvc2l0aW9uIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9