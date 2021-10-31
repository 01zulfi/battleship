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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-color: #121212;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nh1 {\n  text-align: center;\n  width: 95%;\n  background-color: rgb(255, 255, 255, 0.05);\n  border-radius: 5px;\n  box-shadow: 0px 15px 30px rgb(0 0 0 / 15%);\n}\n\n.input-modal {\n  width: 95%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: rgb(255, 255, 255, 0.05);\n  padding: 5px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  border-radius: 5px;\n  gap: 5px;\n}\n\nh2 {\n  width: 95%;\n  background-color: rgb(255, 255, 255, 0.07);\n  border-radius: 5px;\n  text-align: center;\n  padding: 5px;\n}\n\nh3 {\n  width: 95%;\n  text-align: center;\n  padding: 5px;\n  font-size: 25px;\n  animation: place-ship-message-blink 2s infinite ease-in alternate;\n}\n\n@keyframes place-ship-message-blink {\n  from {\n    opacity: 1;\n    color: #e1bee7;\n  }\n  to {\n    opacity: 0.3;\n    color: white;\n  }\n}\n\n.input-modal .ready,\n.input-modal .rotate {\n  width: 35%;\n  border-radius: 5px;\n  font-size: 20px;\n  text-align: center;\n  border: 2px solid black;\n}\n\n.ready {\n  pointer-events: none;\n  opacity: 0.5;\n  background-color: #ffebee;\n  color: black;\n}\n\n.ready.active {\n  pointer-events: auto;\n  opacity: 1;\n  animation: ready-button 2s infinite;\n  animation-direction: alternate;\n  animation-timing-function: linear;\n  font-weight: bold;\n}\n\n.ready.active:hover {\n  cursor: pointer;\n}\n\n@keyframes ready-button {\n  0% {\n    background-color: #784682;\n  }\n  20% {\n    background-color: #834c89;\n  }\n  80% {\n    background-color: #c09cc4;\n  }\n  100% {\n    background-color: #efe7f0;\n  }\n}\n\n.rotate {\n  background-color: rgb(0, 131, 143);\n  color: black;\n}\n\n.input-modal .hover {\n  background-color: rgb(128, 128, 128, 0.6);\n}\n\n.input-modal .ship {\n  background-color: gray;\n}\n\n.input-modal .red,\n.input-modal .red.ship {\n  background-color: #ef5350;\n}\n\n.inputs-gameboard {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.gameboards {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1vw;\n  width: 95%;\n}\n\n.player-section {\n  margin-bottom: 20px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.player-header {\n  color: black;\n  margin-bottom: 10px;\n  width: 95%;\n  text-align: center;\n  padding: 5px;\n  font-size: 25px;\n  background-color: rgb(237, 231, 246, 0.5);\n}\n\n.player-one-message,\n.player-two-message {\n  width: 95%;\n  font-size: 18px;\n  background-color: rgb(237, 231, 246, 0.1);\n  text-align: center;\n  margin-bottom: 10px;\n  border-radius: 5px;\n  padding: 5px;\n}\n\n.player-one-message.miss,\n.player-two-message.miss {\n  color: #a7ffeb;\n}\n\n.player-one-message.hit,\n.player-two-message.hit {\n  color: #ce93d8;\n}\n\n.gameboards .player-one-gameboard,\n.gameboards .player-two-gameboard,\n.inputs-gameboard {\n  width: 95%;\n  aspect-ratio: 1;\n  display: flex;\n  row-gap: 2px;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.player-one-gameboard .rows,\n.player-two-gameboard .rows,\n.inputs-gameboard .rows {\n  flex: 1;\n  gap: 4px;\n  display: flex;\n  width: 100%;\n  height: fit-content;\n}\n\n.player-one-gameboard .columns,\n.player-two-gameboard .columns {\n  flex: 1;\n  border: 1px solid #d1c4e9;\n  background-color: rgb(243, 229, 245, 0.1);\n}\n\n.inputs-gameboard .columns {\n  flex: 1;\n  border: 1px solid rgb(255, 255, 255, 0.5);\n}\n\n.player-one-gameboard .rows .columns.ship {\n  background-color: black;\n}\n\n.player-one-gameboard .rows .columns.ship.hit,\n.player-two-gameboard .rows .columns.ship.hit {\n  background: #5e35b1;\n}\n\n.player-one-gameboard .rows .columns.hit,\n.player-two-gameboard .rows .columns.hit {\n  background: #a7ffeb;\n  border: 1px solid black;\n  opacity: 0.7;\n  pointer-events: none;\n}\n\n.game-end-modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n  justify-content: center;\n  align-items: center;\n}\n\n.game-end-modal-content {\n  background-color: rgb(0, 0, 0, 0.9);\n  margin: 15% auto;\n  padding: 20px;\n  border-radius: 5px;\n  border: 1px solid #888;\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\n.game-end-modal-content .restart {\n  background-color: rgb(0, 131, 143);\n  font-size: 25px;\n  color: black;\n  padding: 5px;\n  border-radius: 5px;\n  text-align: center;\n  border: 1px solid black;\n  font-size: 20px;\n}\n\n.close {\n  color: #aaa;\n  float: right;\n  font-size: 40px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n  background-color: #121212;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nh1 {\n  text-align: center;\n  width: 95%;\n  background-color: rgb(255, 255, 255, 0.05);\n  border-radius: 5px;\n  box-shadow: 0px 15px 30px rgb(0 0 0 / 15%);\n}\n\n.input-modal {\n  width: 95%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: rgb(255, 255, 255, 0.05);\n  padding: 5px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  border-radius: 5px;\n  gap: 5px;\n}\n\nh2 {\n  width: 95%;\n  background-color: rgb(255, 255, 255, 0.07);\n  border-radius: 5px;\n  text-align: center;\n  padding: 5px;\n}\n\nh3 {\n  width: 95%;\n  text-align: center;\n  padding: 5px;\n  font-size: 25px;\n  animation: place-ship-message-blink 2s infinite ease-in alternate;\n}\n\n@keyframes place-ship-message-blink {\n  from {\n    opacity: 1;\n    color: #e1bee7;\n  }\n  to {\n    opacity: 0.3;\n    color: white;\n  }\n}\n\n.input-modal .ready,\n.input-modal .rotate {\n  width: 35%;\n  border-radius: 5px;\n  font-size: 20px;\n  text-align: center;\n  border: 2px solid black;\n}\n\n.ready {\n  pointer-events: none;\n  opacity: 0.5;\n  background-color: #ffebee;\n  color: black;\n}\n\n.ready.active {\n  pointer-events: auto;\n  opacity: 1;\n  animation: ready-button 2s infinite;\n  animation-direction: alternate;\n  animation-timing-function: linear;\n  font-weight: bold;\n}\n\n.ready.active:hover {\n  cursor: pointer;\n}\n\n@keyframes ready-button {\n  0% {\n    background-color: #784682;\n  }\n  20% {\n    background-color: #834c89;\n  }\n  80% {\n    background-color: #c09cc4;\n  }\n  100% {\n    background-color: #efe7f0;\n  }\n}\n\n.rotate {\n  background-color: rgb(0, 131, 143);\n  color: black;\n}\n\n.input-modal .hover {\n  background-color: rgb(128, 128, 128, 0.6);\n}\n\n.input-modal .ship {\n  background-color: gray;\n}\n\n.input-modal .red,\n.input-modal .red.ship {\n  background-color: #ef5350;\n}\n\n.inputs-gameboard {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.gameboards {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1vw;\n  width: 95%;\n}\n\n.player-section {\n  margin-bottom: 20px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.player-header {\n  color: black;\n  margin-bottom: 10px;\n  width: 95%;\n  text-align: center;\n  padding: 5px;\n  font-size: 25px;\n  background-color: rgb(237, 231, 246, 0.5);\n}\n\n.player-one-message,\n.player-two-message {\n  width: 95%;\n  font-size: 18px;\n  background-color: rgb(237, 231, 246, 0.1);\n  text-align: center;\n  margin-bottom: 10px;\n  border-radius: 5px;\n  padding: 5px;\n}\n\n.player-one-message.miss,\n.player-two-message.miss {\n  color: #a7ffeb;\n}\n\n.player-one-message.hit,\n.player-two-message.hit {\n  color: #ce93d8;\n}\n\n.gameboards .player-one-gameboard,\n.gameboards .player-two-gameboard,\n.inputs-gameboard {\n  width: 95%;\n  aspect-ratio: 1;\n  display: flex;\n  row-gap: 2px;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.player-one-gameboard .rows,\n.player-two-gameboard .rows,\n.inputs-gameboard .rows {\n  flex: 1;\n  gap: 4px;\n  display: flex;\n  width: 100%;\n  height: fit-content;\n}\n\n.player-one-gameboard .columns,\n.player-two-gameboard .columns {\n  flex: 1;\n  border: 1px solid #d1c4e9;\n  background-color: rgb(243, 229, 245, 0.1);\n}\n\n.inputs-gameboard .columns {\n  flex: 1;\n  border: 1px solid rgb(255, 255, 255, 0.5);\n}\n\n.player-one-gameboard .rows .columns.ship {\n  background-color: black;\n}\n\n.player-one-gameboard .rows .columns.ship.hit,\n.player-two-gameboard .rows .columns.ship.hit {\n  background: #5e35b1;\n}\n\n.player-one-gameboard .rows .columns.hit,\n.player-two-gameboard .rows .columns.hit {\n  background: #a7ffeb;\n  border: 1px solid black;\n  opacity: 0.7;\n  pointer-events: none;\n}\n\n.game-end-modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n  justify-content: center;\n  align-items: center;\n}\n\n.game-end-modal-content {\n  background-color: rgb(0, 0, 0, 0.9);\n  margin: 15% auto;\n  padding: 20px;\n  border-radius: 5px;\n  border: 1px solid #888;\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\n.game-end-modal-content .restart {\n  background-color: rgb(0, 131, 143);\n  font-size: 25px;\n  color: black;\n  padding: 5px;\n  border-radius: 5px;\n  text-align: center;\n  border: 1px solid black;\n  font-size: 20px;\n}\n\n.close {\n  color: #aaa;\n  float: right;\n  font-size: 40px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNRSxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLE9BQVk7QUFBQTtBQUFBLE1BQVZDLENBQVU7QUFBQSxNQUFQQyxDQUFPOztBQUN4QyxNQUFNQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix1QkFBdkIsQ0FBcEI7QUFDQSxNQUFNQyxHQUFHLEdBQUdILFdBQVcsQ0FBQ0UsYUFBWix3QkFBeUNKLENBQXpDLFNBQVo7QUFDQSxNQUFNTSxNQUFNLEdBQUdELEdBQUcsQ0FBQ0QsYUFBSiwyQkFBb0NILENBQXBDLFNBQWY7QUFDQUssRUFBQUEsTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxHQUFqQixDQUFxQixLQUFyQjtBQUNELENBTEQ7O0FBT0EsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxLQUFELEVBQVc7QUFDbEMsTUFBSSxDQUFDQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUosU0FBYixDQUF1QkssUUFBdkIsQ0FBZ0MsU0FBaEMsQ0FBTCxFQUFpRDtBQUNqREYsRUFBQUEsS0FBSyxDQUFDQyxNQUFOLENBQWFKLFNBQWIsQ0FBdUJDLEdBQXZCLENBQTJCLEtBQTNCO0FBQ0EsTUFBTVIsQ0FBQyxHQUFHVSxLQUFLLENBQUNDLE1BQU4sQ0FBYUUsVUFBYixDQUF3QkMsWUFBeEIsQ0FBcUMsV0FBckMsQ0FBVjtBQUNBLE1BQU1iLENBQUMsR0FBR1MsS0FBSyxDQUFDQyxNQUFOLENBQWFHLFlBQWIsQ0FBMEIsY0FBMUIsQ0FBVjtBQUNBaEIsRUFBQUEsdURBQUEsQ0FBZSxvQkFBZixFQUFxQyxDQUFDRSxDQUFELEVBQUlDLENBQUosQ0FBckM7QUFDRCxDQU5EOztBQVFBLElBQU1lLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQ3ZDLE1BQU1DLElBQUksR0FBR3RCLHVEQUFVLENBQUMsS0FBRCxFQUFRO0FBQUV1QixJQUFBQSxTQUFTLEVBQUVIO0FBQWIsR0FBUixDQUF2Qjs7QUFDQSxPQUFLLElBQUlJLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsRUFBcEIsRUFBd0JBLENBQUMsSUFBSSxDQUE3QixFQUFnQztBQUM5QixRQUFNaEIsR0FBRyxHQUFHUix1REFBVSxDQUFDLEtBQUQsRUFBUTtBQUFFdUIsTUFBQUEsU0FBUyxFQUFFLE1BQWI7QUFBcUIsbUJBQWFDO0FBQWxDLEtBQVIsQ0FBdEI7O0FBQ0EsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEVBQXBCLEVBQXdCQSxDQUFDLElBQUksQ0FBN0IsRUFBZ0M7QUFDOUIsVUFBTWhCLE1BQU0sR0FBR1QsdURBQVUsQ0FBQyxLQUFELEVBQVE7QUFDL0J1QixRQUFBQSxTQUFTLEVBQUUsU0FEb0I7QUFFL0Isd0JBQWdCRTtBQUZlLE9BQVIsQ0FBekI7O0FBSUEsVUFBSUosS0FBSyxDQUFDSyxNQUFOLEtBQWlCLENBQWpCLElBQXNCLFFBQU9MLEtBQUssQ0FBQ0csQ0FBRCxDQUFMLENBQVNDLENBQVQsQ0FBUCxNQUF1QixRQUFqRCxFQUEyRDtBQUN6RGhCLFFBQUFBLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsTUFBckI7QUFDRDs7QUFDREgsTUFBQUEsR0FBRyxDQUFDbUIsTUFBSixDQUFXbEIsTUFBWDtBQUNEOztBQUNEYSxJQUFBQSxJQUFJLENBQUNLLE1BQUwsQ0FBWW5CLEdBQVo7QUFDRDs7QUFDRCxNQUFJWSxJQUFJLEtBQUssc0JBQWIsRUFBcUM7QUFDbkNFLElBQUFBLElBQUksQ0FBQ00sZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0JoQixnQkFBL0I7QUFDRDs7QUFDRCxTQUFPVSxJQUFQO0FBQ0QsQ0FwQkQ7O0FBc0JBLElBQU1PLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsUUFBa0M7QUFBQTtBQUFBLE1BQWhDeEIsV0FBZ0M7QUFBQSxNQUFuQnlCLGFBQW1COztBQUN6RCxNQUFNQyxVQUFVLEdBQUd6QixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBbkI7QUFDQSxNQUFNeUIsZ0JBQWdCLEdBQUdoQyx1REFBVSxDQUFDLEtBQUQsRUFBUTtBQUFFdUIsSUFBQUEsU0FBUyxFQUFFO0FBQWIsR0FBUixDQUFuQztBQUNBLE1BQU1VLGVBQWUsR0FBR2pDLHVEQUFVLENBQUMsSUFBRCxFQUFPO0FBQ3ZDdUIsSUFBQUEsU0FBUyxFQUFFLGVBRDRCO0FBRXZDVyxJQUFBQSxXQUFXLEVBQUU7QUFGMEIsR0FBUCxDQUFsQztBQUlBLE1BQU1DLGdCQUFnQixHQUFHbkMsdURBQVUsQ0FBQyxLQUFELEVBQVE7QUFDekN1QixJQUFBQSxTQUFTLEVBQUU7QUFEOEIsR0FBUixDQUFuQztBQUdBLE1BQU1hLGdCQUFnQixHQUFHcEMsdURBQVUsQ0FBQyxLQUFELEVBQVE7QUFBRXVCLElBQUFBLFNBQVMsRUFBRTtBQUFiLEdBQVIsQ0FBbkM7QUFDQSxNQUFNYyxlQUFlLEdBQUdyQyx1REFBVSxDQUFDLElBQUQsRUFBTztBQUN2Q3VCLElBQUFBLFNBQVMsRUFBRSxlQUQ0QjtBQUV2Q1csSUFBQUEsV0FBVyxFQUFFO0FBRjBCLEdBQVAsQ0FBbEM7QUFJQSxNQUFNSSxnQkFBZ0IsR0FBR3RDLHVEQUFVLENBQUMsS0FBRCxFQUFRO0FBQ3pDdUIsSUFBQUEsU0FBUyxFQUFFO0FBRDhCLEdBQVIsQ0FBbkM7QUFHQVMsRUFBQUEsZ0JBQWdCLENBQUNMLE1BQWpCLENBQ0VNLGVBREYsRUFFRUUsZ0JBRkYsRUFHRWhCLGVBQWUsQ0FBQyxzQkFBRCxFQUF5QmQsV0FBekIsQ0FIakI7QUFLQStCLEVBQUFBLGdCQUFnQixDQUFDVCxNQUFqQixDQUNFVSxlQURGLEVBRUVDLGdCQUZGLEVBR0VuQixlQUFlLENBQUMsc0JBQUQsRUFBeUJXLGFBQXpCLENBSGpCO0FBS0FDLEVBQUFBLFVBQVUsQ0FBQ0osTUFBWCxDQUFrQkssZ0JBQWxCO0FBQ0FELEVBQUFBLFVBQVUsQ0FBQ0osTUFBWCxDQUFrQlMsZ0JBQWxCO0FBQ0QsQ0E5QkQ7O0FBZ0NBLElBQU1HLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUM3QixNQUFNQyxhQUFhLEdBQUdsQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBdEI7QUFDQSxNQUFNa0MsU0FBUyxHQUFHdEIsZUFBZSxDQUFDLGtCQUFELEVBQXFCLEVBQXJCLENBQWpDO0FBQ0FxQixFQUFBQSxhQUFhLENBQUNFLFlBQWQsQ0FBMkJELFNBQTNCLEVBQXNDbkMsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQXRDO0FBQ0QsQ0FKRDs7QUFNQSxJQUFNb0MsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QixNQUFNRixTQUFTLEdBQUduQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsbUJBQXZCLENBQWxCOztBQUNBLE1BQU1xQyxPQUFPLHNCQUFPSCxTQUFTLENBQUNJLGdCQUFWLENBQTJCLFVBQTNCLENBQVAsQ0FBYjs7QUFDQSxNQUFNQyxNQUFNLEdBQUd4QyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBZjtBQUNBLE1BQUl3QyxVQUFVLEdBQUcsSUFBakI7QUFDQSxNQUFJQyxLQUFLLEdBQUcsQ0FDVjtBQUFFNUIsSUFBQUEsSUFBSSxFQUFFLFNBQVI7QUFBbUJNLElBQUFBLE1BQU0sRUFBRSxDQUEzQjtBQUE4QnVCLElBQUFBLEtBQUssRUFBRTtBQUFyQyxHQURVLEVBRVY7QUFBRTdCLElBQUFBLElBQUksRUFBRSxXQUFSO0FBQXFCTSxJQUFBQSxNQUFNLEVBQUUsQ0FBN0I7QUFBZ0N1QixJQUFBQSxLQUFLLEVBQUU7QUFBdkMsR0FGVSxFQUdWO0FBQUU3QixJQUFBQSxJQUFJLEVBQUUsU0FBUjtBQUFtQk0sSUFBQUEsTUFBTSxFQUFFLENBQTNCO0FBQThCdUIsSUFBQUEsS0FBSyxFQUFFO0FBQXJDLEdBSFUsRUFJVjtBQUFFN0IsSUFBQUEsSUFBSSxFQUFFLFdBQVI7QUFBcUJNLElBQUFBLE1BQU0sRUFBRSxDQUE3QjtBQUFnQ3VCLElBQUFBLEtBQUssRUFBRTtBQUF2QyxHQUpVLEVBS1Y7QUFBRTdCLElBQUFBLElBQUksRUFBRSxRQUFSO0FBQWtCTSxJQUFBQSxNQUFNLEVBQUUsQ0FBMUI7QUFBNkJ1QixJQUFBQSxLQUFLLEVBQUU7QUFBcEMsR0FMVSxFQU1WO0FBQUU3QixJQUFBQSxJQUFJLEVBQUUsT0FBUjtBQUFpQk0sSUFBQUEsTUFBTSxFQUFFLENBQXpCO0FBQTRCdUIsSUFBQUEsS0FBSyxFQUFFO0FBQW5DLEdBTlUsQ0FBWjs7QUFTQSxNQUFNQyw0QkFBNEIsR0FBRyxTQUEvQkEsNEJBQStCLENBQUNyQyxLQUFELEVBQVc7QUFDOUMsUUFBTUosTUFBTSxHQUFHMEMsTUFBTSxDQUFDdEMsS0FBSyxDQUFDQyxNQUFOLENBQWFHLFlBQWIsQ0FBMEIsY0FBMUIsQ0FBRCxDQUFyQjtBQUNBLFFBQU1tQyxLQUFLLEdBQUcsRUFBZDs7QUFDQSxTQUFLLElBQUk1QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHWCxLQUFLLENBQUN3QyxhQUFOLENBQW9CQyxVQUF4QyxFQUFvRDlCLENBQUMsSUFBSSxDQUF6RCxFQUE0RDtBQUMxRCxVQUFNK0IsR0FBRyxHQUFHMUMsS0FBSyxDQUFDQyxNQUFOLENBQWFFLFVBQWIsQ0FBd0JULGFBQXhCLDJCQUNRRSxNQUFNLEdBQUdlLENBRGpCLFNBQVo7QUFHQTRCLE1BQUFBLEtBQUssQ0FBQ0ksSUFBTixDQUFXRCxHQUFYO0FBQ0Q7O0FBQ0QsUUFBSUgsS0FBSyxDQUFDSyxJQUFOLENBQVcsVUFBQ0MsSUFBRDtBQUFBLGFBQVVBLElBQUksS0FBSyxJQUFuQjtBQUFBLEtBQVgsQ0FBSixFQUF5QztBQUN2QzdDLE1BQUFBLEtBQUssQ0FBQ0MsTUFBTixDQUFhSixTQUFiLENBQXVCQyxHQUF2QixDQUEyQixLQUEzQjtBQUNBO0FBQ0Q7O0FBQ0QsUUFBSXlDLEtBQUssQ0FBQ0ssSUFBTixDQUFXLFVBQUNDLElBQUQ7QUFBQSxhQUFVQSxJQUFJLENBQUNoRCxTQUFMLENBQWVLLFFBQWYsQ0FBd0IsTUFBeEIsQ0FBVjtBQUFBLEtBQVgsQ0FBSixFQUEyRDtBQUN6REYsTUFBQUEsS0FBSyxDQUFDQyxNQUFOLENBQWFKLFNBQWIsQ0FBdUJDLEdBQXZCLENBQTJCLEtBQTNCO0FBQ0E7QUFDRDs7QUFDRHlDLElBQUFBLEtBQUssQ0FBQ08sT0FBTixDQUFjLFVBQUNELElBQUQ7QUFBQSxhQUNaQSxJQUFJLENBQUNFLFlBQUwsQ0FBa0Isa0JBQWxCLEVBQXNDLFlBQXRDLENBRFk7QUFBQSxLQUFkO0FBR0FSLElBQUFBLEtBQUssQ0FBQ08sT0FBTixDQUFjLFVBQUNELElBQUQ7QUFBQSxhQUFVQSxJQUFJLENBQUNoRCxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsT0FBbkIsQ0FBVjtBQUFBLEtBQWQ7QUFDRCxHQXJCRDs7QUF1QkEsTUFBTWtELDBCQUEwQixHQUFHLFNBQTdCQSwwQkFBNkIsQ0FBQ2hELEtBQUQsRUFBVztBQUM1QyxRQUFNSixNQUFNLEdBQUcwQyxNQUFNLENBQUN0QyxLQUFLLENBQUNDLE1BQU4sQ0FBYUcsWUFBYixDQUEwQixjQUExQixDQUFELENBQXJCO0FBQ0EsUUFBTVQsR0FBRyxHQUFHMkMsTUFBTSxDQUFDdEMsS0FBSyxDQUFDQyxNQUFOLENBQWFFLFVBQWIsQ0FBd0JDLFlBQXhCLENBQXFDLFdBQXJDLENBQUQsQ0FBbEI7QUFDQSxRQUFNSyxJQUFJLEdBQUdULEtBQUssQ0FBQ0MsTUFBTixDQUFhRSxVQUFiLENBQXdCQSxVQUFyQztBQUNBLFFBQU1vQyxLQUFLLEdBQUcsRUFBZDs7QUFDQSxTQUFLLElBQUk1QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHWCxLQUFLLENBQUN3QyxhQUFOLENBQW9CQyxVQUF4QyxFQUFvRDlCLENBQUMsSUFBSSxDQUF6RCxFQUE0RDtBQUMxRCxVQUFNc0MsUUFBUSxHQUFHeEMsSUFBSSxDQUFDZixhQUFMLHdCQUFrQ0MsR0FBRyxHQUFHZ0IsQ0FBeEMsU0FBakI7QUFDQSxVQUFJLENBQUNzQyxRQUFMLEVBQWU7QUFDZlYsTUFBQUEsS0FBSyxDQUFDSSxJQUFOLENBQVdNLFFBQVEsQ0FBQ3ZELGFBQVQsMkJBQXlDRSxNQUF6QyxTQUFYO0FBQ0Q7O0FBQ0QsUUFBSTJDLEtBQUssQ0FBQzFCLE1BQU4sR0FBZWIsS0FBSyxDQUFDd0MsYUFBTixDQUFvQkMsVUFBdkMsRUFBbUQ7QUFDakR6QyxNQUFBQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUosU0FBYixDQUF1QkMsR0FBdkIsQ0FBMkIsS0FBM0I7QUFDQTtBQUNEOztBQUNELFFBQUl5QyxLQUFLLENBQUNLLElBQU4sQ0FBVyxVQUFDQyxJQUFEO0FBQUEsYUFBVUEsSUFBSSxDQUFDaEQsU0FBTCxDQUFlSyxRQUFmLENBQXdCLE1BQXhCLENBQVY7QUFBQSxLQUFYLENBQUosRUFBMkQ7QUFDekRGLE1BQUFBLEtBQUssQ0FBQ0MsTUFBTixDQUFhSixTQUFiLENBQXVCQyxHQUF2QixDQUEyQixLQUEzQjtBQUNBO0FBQ0Q7O0FBQ0R5QyxJQUFBQSxLQUFLLENBQUNPLE9BQU4sQ0FBYyxVQUFDRCxJQUFEO0FBQUEsYUFBVUEsSUFBSSxDQUFDRSxZQUFMLENBQWtCLGtCQUFsQixFQUFzQyxVQUF0QyxDQUFWO0FBQUEsS0FBZDtBQUNBUixJQUFBQSxLQUFLLENBQUNPLE9BQU4sQ0FBYyxVQUFDRCxJQUFEO0FBQUEsYUFBVUEsSUFBSSxDQUFDaEQsU0FBTCxDQUFlQyxHQUFmLENBQW1CLE9BQW5CLENBQVY7QUFBQSxLQUFkO0FBQ0QsR0FwQkQ7O0FBc0JBLE1BQU1vRCxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNsRCxLQUFELEVBQVc7QUFDcENBLElBQUFBLEtBQUssQ0FBQ0MsTUFBTixDQUFhSixTQUFiLENBQXVCc0QsTUFBdkIsQ0FBOEIsS0FBOUI7QUFDQTFELElBQUFBLFFBQVEsQ0FDTHVDLGdCQURILENBQ29CLFVBRHBCLEVBRUdjLE9BRkgsQ0FFVyxVQUFDRCxJQUFEO0FBQUEsYUFBVUEsSUFBSSxDQUFDaEQsU0FBTCxDQUFlc0QsTUFBZixDQUFzQixPQUF0QixDQUFWO0FBQUEsS0FGWDtBQUdELEdBTEQ7O0FBT0EsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QmpCLElBQUFBLEtBQUssR0FBRyxDQUNOO0FBQUU1QixNQUFBQSxJQUFJLEVBQUUsU0FBUjtBQUFtQk0sTUFBQUEsTUFBTSxFQUFFLENBQTNCO0FBQThCdUIsTUFBQUEsS0FBSyxFQUFFO0FBQXJDLEtBRE0sRUFFTjtBQUFFN0IsTUFBQUEsSUFBSSxFQUFFLFdBQVI7QUFBcUJNLE1BQUFBLE1BQU0sRUFBRSxDQUE3QjtBQUFnQ3VCLE1BQUFBLEtBQUssRUFBRTtBQUF2QyxLQUZNLEVBR047QUFBRTdCLE1BQUFBLElBQUksRUFBRSxTQUFSO0FBQW1CTSxNQUFBQSxNQUFNLEVBQUUsQ0FBM0I7QUFBOEJ1QixNQUFBQSxLQUFLLEVBQUU7QUFBckMsS0FITSxFQUlOO0FBQUU3QixNQUFBQSxJQUFJLEVBQUUsV0FBUjtBQUFxQk0sTUFBQUEsTUFBTSxFQUFFLENBQTdCO0FBQWdDdUIsTUFBQUEsS0FBSyxFQUFFO0FBQXZDLEtBSk0sRUFLTjtBQUFFN0IsTUFBQUEsSUFBSSxFQUFFLFFBQVI7QUFBa0JNLE1BQUFBLE1BQU0sRUFBRSxDQUExQjtBQUE2QnVCLE1BQUFBLEtBQUssRUFBRTtBQUFwQyxLQUxNLEVBTU47QUFBRTdCLE1BQUFBLElBQUksRUFBRSxPQUFSO0FBQWlCTSxNQUFBQSxNQUFNLEVBQUUsQ0FBekI7QUFBNEJ1QixNQUFBQSxLQUFLLEVBQUU7QUFBbkMsS0FOTSxDQUFSO0FBUUQsR0FURDs7QUFXQSxNQUFNaUIsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCLFFBQUlsQixLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVM3QyxDQUFULEtBQWVnRSxTQUFuQixFQUE4QixPQURILENBQ1c7O0FBQ3RDLFFBQU1DLFVBQVUsR0FBRzlELFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixjQUF2QixDQUFuQjtBQUNBa0MsSUFBQUEsU0FBUyxDQUFDdUIsTUFBVjtBQUNBSSxJQUFBQSxVQUFVLENBQUNDLEtBQVgsQ0FBaUJDLE9BQWpCLEdBQTJCLE1BQTNCO0FBQ0FyRSxJQUFBQSx1REFBQSxDQUFlLGFBQWYsRUFBOEIrQyxLQUE5QjtBQUNBaUIsSUFBQUEsVUFBVTtBQUNYLEdBUEQ7O0FBU0EsTUFBTU0sZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzdCLFFBQU1DLFFBQVEsR0FBR2xFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFqQjtBQUNBaUUsSUFBQUEsUUFBUSxDQUFDOUQsU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUIsUUFBdkI7QUFDQTZELElBQUFBLFFBQVEsQ0FBQzVDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1Dc0MsY0FBbkM7QUFDRCxHQUpEOztBQU1BLE1BQU1PLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQzVELEtBQUQsRUFBVztBQUMvQixRQUFJLENBQUNBLEtBQUssQ0FBQ0MsTUFBTixDQUFhSixTQUFiLENBQXVCSyxRQUF2QixDQUFnQyxTQUFoQyxDQUFMLEVBQWlEO0FBQ2pELFFBQUlGLEtBQUssQ0FBQ0MsTUFBTixDQUFhSixTQUFiLENBQXVCSyxRQUF2QixDQUFnQyxLQUFoQyxDQUFKLEVBQTRDO0FBQzVDLFFBQUlGLEtBQUssQ0FBQ0MsTUFBTixDQUFhSixTQUFiLENBQXVCSyxRQUF2QixDQUFnQyxNQUFoQyxDQUFKLEVBQTZDO0FBQzdDLFFBQU0yRCxTQUFTLEdBQUcxQixLQUFLLENBQUMyQixJQUFOLENBQVcsVUFBQ0MsSUFBRDtBQUFBLGFBQVUsQ0FBQ0EsSUFBSSxDQUFDM0IsS0FBaEI7QUFBQSxLQUFYLENBQWxCO0FBQ0EsUUFBSSxDQUFDeUIsU0FBTCxFQUFnQjs7QUFDaEIsUUFBSUEsU0FBUyxDQUFDaEQsTUFBVixLQUFxQixDQUF6QixFQUE0QjtBQUMxQmtCLE1BQUFBLE9BQU8sQ0FBQ2UsT0FBUixDQUFnQixVQUFDa0IsSUFBRDtBQUFBLGVBQ2RBLElBQUksQ0FBQ0MsbUJBQUwsQ0FBeUIsWUFBekIsRUFBdUM1Qiw0QkFBdkMsQ0FEYztBQUFBLE9BQWhCO0FBR0FOLE1BQUFBLE9BQU8sQ0FBQ2UsT0FBUixDQUFnQixVQUFDa0IsSUFBRDtBQUFBLGVBQ2RBLElBQUksQ0FBQ0MsbUJBQUwsQ0FBeUIsWUFBekIsRUFBdUNqQiwwQkFBdkMsQ0FEYztBQUFBLE9BQWhCO0FBR0FVLE1BQUFBLGdCQUFnQjtBQUNqQjs7QUFDRCxRQUFNUSxjQUFjLEdBQUcvQixLQUFLLENBQUNnQyxPQUFOLENBQWNOLFNBQWQsQ0FBdkI7QUFDQUEsSUFBQUEsU0FBUyxDQUFDekIsS0FBVixHQUFrQixJQUFsQjtBQUNBeUIsSUFBQUEsU0FBUyxDQUFDdkUsQ0FBVixHQUFjZ0QsTUFBTSxDQUFDdEMsS0FBSyxDQUFDQyxNQUFOLENBQWFFLFVBQWIsQ0FBd0JDLFlBQXhCLENBQXFDLFdBQXJDLENBQUQsQ0FBcEI7QUFDQXlELElBQUFBLFNBQVMsQ0FBQ3RFLENBQVYsR0FBYytDLE1BQU0sQ0FBQ3RDLEtBQUssQ0FBQ0MsTUFBTixDQUFhRyxZQUFiLENBQTBCLGNBQTFCLENBQUQsQ0FBcEI7QUFDQXlELElBQUFBLFNBQVMsQ0FBQ08sV0FBVixHQUF3QnBFLEtBQUssQ0FBQ0MsTUFBTixDQUFhRyxZQUFiLENBQTBCLGtCQUExQixDQUF4QjtBQUNBLFFBQU1pRSxRQUFRLEdBQUd6QyxTQUFTLENBQUNJLGdCQUFWLENBQTJCLGdCQUEzQixDQUFqQjtBQUNBcUMsSUFBQUEsUUFBUSxDQUFDdkIsT0FBVCxDQUFpQixVQUFDRCxJQUFEO0FBQUEsYUFBVUEsSUFBSSxDQUFDaEQsU0FBTCxDQUFlQyxHQUFmLENBQW1CLE1BQW5CLENBQVY7QUFBQSxLQUFqQjtBQUNBdUUsSUFBQUEsUUFBUSxDQUFDdkIsT0FBVCxDQUFpQixVQUFDRCxJQUFEO0FBQUEsYUFBVUEsSUFBSSxDQUFDaEQsU0FBTCxDQUFlQyxHQUFmLENBQW1CK0QsU0FBUyxDQUFDdEQsSUFBN0IsQ0FBVjtBQUFBLEtBQWpCO0FBQ0EsUUFBTStELG1CQUFtQixHQUFHN0UsUUFBUSxDQUFDQyxhQUFULENBQXVCLHFCQUF2QixDQUE1Qjs7QUFDQSxRQUFJbUUsU0FBUyxDQUFDaEQsTUFBVixLQUFxQixDQUF6QixFQUE0QjtBQUMxQnlELE1BQUFBLG1CQUFtQixDQUFDakQsV0FBcEIsR0FDRSx5Q0FERjtBQUVEOztBQUNELFFBQUksQ0FBQ2MsS0FBSyxDQUFDK0IsY0FBYyxHQUFHLENBQWxCLENBQVYsRUFBZ0M7QUFDaENJLElBQUFBLG1CQUFtQixDQUFDakQsV0FBcEIsd0JBQ0VjLEtBQUssQ0FBQytCLGNBQWMsR0FBRyxDQUFsQixDQUFMLENBQTBCM0QsSUFENUI7QUFHQXdCLElBQUFBLE9BQU8sQ0FBQ2UsT0FBUixDQUNFLFVBQUNrQixJQUFEO0FBQUEsYUFBV0EsSUFBSSxDQUFDdkIsVUFBTCxHQUFrQk4sS0FBSyxDQUFDK0IsY0FBYyxHQUFHLENBQWxCLENBQUwsQ0FBMEJyRCxNQUF2RDtBQUFBLEtBREY7QUFHRCxHQW5DRDs7QUFxQ0FrQixFQUFBQSxPQUFPLENBQUNlLE9BQVIsQ0FBZ0IsVUFBQ2tCLElBQUQ7QUFBQSxXQUFXQSxJQUFJLENBQUN2QixVQUFMLEdBQWtCLENBQTdCO0FBQUEsR0FBaEI7QUFFQVYsRUFBQUEsT0FBTyxDQUFDZSxPQUFSLENBQWdCLFVBQUNrQixJQUFEO0FBQUEsV0FDZEEsSUFBSSxDQUFDakQsZ0JBQUwsQ0FBc0IsWUFBdEIsRUFBb0NzQiw0QkFBcEMsQ0FEYztBQUFBLEdBQWhCO0FBSUFOLEVBQUFBLE9BQU8sQ0FBQ2UsT0FBUixDQUFnQixVQUFDa0IsSUFBRDtBQUFBLFdBQ2RBLElBQUksQ0FBQ2pELGdCQUFMLENBQXNCLFlBQXRCLEVBQW9DbUMsa0JBQXBDLENBRGM7QUFBQSxHQUFoQjtBQUlBdEIsRUFBQUEsU0FBUyxDQUFDYixnQkFBVixDQUEyQixPQUEzQixFQUFvQzZDLGFBQXBDO0FBRUEzQixFQUFBQSxNQUFNLENBQUNsQixnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxZQUFNO0FBQ3JDLFFBQUltQixVQUFKLEVBQWdCO0FBQ2RILE1BQUFBLE9BQU8sQ0FBQ2UsT0FBUixDQUFnQixVQUFDa0IsSUFBRDtBQUFBLGVBQ2RBLElBQUksQ0FBQ0MsbUJBQUwsQ0FBeUIsWUFBekIsRUFBdUM1Qiw0QkFBdkMsQ0FEYztBQUFBLE9BQWhCO0FBR0FOLE1BQUFBLE9BQU8sQ0FBQ2UsT0FBUixDQUFnQixVQUFDa0IsSUFBRDtBQUFBLGVBQ2RBLElBQUksQ0FBQ2pELGdCQUFMLENBQXNCLFlBQXRCLEVBQW9DaUMsMEJBQXBDLENBRGM7QUFBQSxPQUFoQjtBQUdBZCxNQUFBQSxVQUFVLEdBQUcsS0FBYjtBQUNELEtBUkQsTUFRTztBQUNMSCxNQUFBQSxPQUFPLENBQUNlLE9BQVIsQ0FBZ0IsVUFBQ2tCLElBQUQ7QUFBQSxlQUNkQSxJQUFJLENBQUNqRCxnQkFBTCxDQUFzQixZQUF0QixFQUFvQ3NCLDRCQUFwQyxDQURjO0FBQUEsT0FBaEI7QUFHQU4sTUFBQUEsT0FBTyxDQUFDZSxPQUFSLENBQWdCLFVBQUNrQixJQUFEO0FBQUEsZUFDZEEsSUFBSSxDQUFDQyxtQkFBTCxDQUF5QixZQUF6QixFQUF1Q2pCLDBCQUF2QyxDQURjO0FBQUEsT0FBaEI7QUFHQWQsTUFBQUEsVUFBVSxHQUFHLElBQWI7QUFDRDtBQUNGLEdBbEJEO0FBbUJELENBaEtEOztBQWtLQSxJQUFNcUMsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixHQUFNO0FBQ2pDLE1BQU1DLGNBQWMsR0FBRy9FLFFBQVEsQ0FBQ3VDLGdCQUFULENBQTBCLGlCQUExQixDQUF2QjtBQUNBd0MsRUFBQUEsY0FBYyxDQUFDMUIsT0FBZixDQUF1QixVQUFDMkIsT0FBRDtBQUFBLFdBQWFBLE9BQU8sQ0FBQ3RCLE1BQVIsRUFBYjtBQUFBLEdBQXZCO0FBQ0QsQ0FIRDs7QUFLQSxJQUFNdUIsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QkgsRUFBQUEsb0JBQW9CO0FBQ3BCLE1BQU1JLFlBQVksR0FBR2xGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixpQkFBdkIsQ0FBckI7QUFDQWlGLEVBQUFBLFlBQVksQ0FBQ25CLEtBQWIsQ0FBbUJDLE9BQW5CLEdBQTZCLE1BQTdCO0FBQ0EsTUFBTUYsVUFBVSxHQUFHOUQsUUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLENBQW5CO0FBQ0E2RCxFQUFBQSxVQUFVLENBQUNDLEtBQVgsQ0FBaUJDLE9BQWpCLEdBQTJCLE1BQTNCO0FBQ0EvQixFQUFBQSxnQkFBZ0I7QUFDaEJJLEVBQUFBLFVBQVU7QUFDVixNQUFNd0MsbUJBQW1CLEdBQUc3RSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIscUJBQXZCLENBQTVCO0FBQ0E0RSxFQUFBQSxtQkFBbUIsQ0FBQ2pELFdBQXBCLEdBQWtDLHFCQUFsQztBQUNBakMsRUFBQUEsdURBQUEsQ0FBZSxjQUFmO0FBQ0QsQ0FYRDs7QUFhQSxJQUFNd0YsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxNQUFELEVBQVk7QUFDbkMsTUFBTUYsWUFBWSxHQUFHbEYsUUFBUSxDQUFDQyxhQUFULENBQXVCLGlCQUF2QixDQUFyQjtBQUNBaUYsRUFBQUEsWUFBWSxDQUFDbkIsS0FBYixDQUFtQkMsT0FBbkIsR0FBNkIsT0FBN0I7QUFDQSxNQUFNcUIsSUFBSSxHQUFHckYsUUFBUSxDQUFDQyxhQUFULENBQXVCLHVCQUF2QixDQUFiO0FBQ0FvRixFQUFBQSxJQUFJLENBQUN6RCxXQUFMLGFBQXNCd0QsTUFBdEI7QUFDQSxNQUFNRSxPQUFPLEdBQUd0RixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsMEJBQXZCLENBQWhCO0FBQ0FxRixFQUFBQSxPQUFPLENBQUNoRSxnQkFBUixDQUF5QixPQUF6QixFQUFrQzJELFdBQWxDO0FBQ0EsTUFBTU0sS0FBSyxHQUFHdkYsUUFBUSxDQUFDQyxhQUFULENBQXVCLHdCQUF2QixDQUFkO0FBQ0FzRixFQUFBQSxLQUFLLENBQUNqRSxnQkFBTixDQUF1QixPQUF2QixFQUFnQyxZQUFNO0FBQ3BDNEQsSUFBQUEsWUFBWSxDQUFDbkIsS0FBYixDQUFtQkMsT0FBbkIsR0FBNkIsTUFBN0I7QUFDRCxHQUZEO0FBR0QsQ0FYRDs7QUFhQSxJQUFNd0IsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0osTUFBRCxFQUFZO0FBQzVCcEYsRUFBQUEsUUFBUSxDQUNMQyxhQURILENBQ2lCLHVCQURqQixFQUVHdUUsbUJBRkgsQ0FFdUIsT0FGdkIsRUFFZ0NsRSxnQkFGaEM7QUFHQTZFLEVBQUFBLGdCQUFnQixDQUFDQyxNQUFELENBQWhCO0FBQ0QsQ0FMRDs7QUFPQSxJQUFNSyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLFFBQTRCO0FBQUEsTUFBekJDLFNBQXlCLFNBQXpCQSxTQUF5QjtBQUFBLE1BQWRDLE9BQWMsU0FBZEEsT0FBYzs7QUFDdEQsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxNQUFELEVBQVNDLEdBQVQsRUFBaUI7QUFDeEMsUUFBSUEsR0FBRyxLQUFLLGFBQVosRUFBMkI7QUFDekIsVUFBSUQsTUFBTSxLQUFLLFFBQWYsRUFBeUI7QUFDdkIsZUFBTywwQkFBUDtBQUNEOztBQUNELFVBQUlBLE1BQU0sS0FBSyxVQUFmLEVBQTJCO0FBQ3pCLGVBQU8sdUNBQVA7QUFDRDtBQUNGOztBQUNELFFBQUlDLEdBQUcsS0FBSyxjQUFaLEVBQTRCO0FBQzFCLFVBQUlELE1BQU0sS0FBSyxRQUFmLEVBQXlCO0FBQ3ZCLGVBQU8sMkJBQVA7QUFDRDs7QUFDRCxhQUFPLHFCQUFQO0FBQ0Q7O0FBQ0QsV0FBTyxFQUFQO0FBQ0QsR0FoQkQ7O0FBaUJBLE1BQUlILFNBQVMsS0FBSyxRQUFsQixFQUE0QjtBQUMxQixRQUFNSyxVQUFVLEdBQUcvRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIscUJBQXZCLENBQW5CO0FBQ0E4RixJQUFBQSxVQUFVLENBQUNuRSxXQUFYLEdBQXlCZ0UsZ0JBQWdCLENBQUMsUUFBRCxFQUFXRCxPQUFYLENBQXpDOztBQUNBLFFBQUlBLE9BQU8sS0FBSyxhQUFoQixFQUErQjtBQUM3QkksTUFBQUEsVUFBVSxDQUFDM0YsU0FBWCxDQUFxQnNELE1BQXJCLENBQTRCLE1BQTVCO0FBQ0FxQyxNQUFBQSxVQUFVLENBQUMzRixTQUFYLENBQXFCQyxHQUFyQixDQUF5QixLQUF6QjtBQUNELEtBSEQsTUFHTyxJQUFJc0YsT0FBTyxLQUFLLGNBQWhCLEVBQWdDO0FBQ3JDSSxNQUFBQSxVQUFVLENBQUMzRixTQUFYLENBQXFCQyxHQUFyQixDQUF5QixNQUF6QjtBQUNBMEYsTUFBQUEsVUFBVSxDQUFDM0YsU0FBWCxDQUFxQnNELE1BQXJCLENBQTRCLEtBQTVCO0FBQ0Q7QUFDRixHQVZELE1BVU8sSUFBSWdDLFNBQVMsS0FBSyxVQUFsQixFQUE4QjtBQUNuQyxRQUFNSyxXQUFVLEdBQUcvRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIscUJBQXZCLENBQW5COztBQUNBOEYsSUFBQUEsV0FBVSxDQUFDbkUsV0FBWCxHQUF5QmdFLGdCQUFnQixDQUFDLFVBQUQsRUFBYUQsT0FBYixDQUF6Qzs7QUFDQSxRQUFJQSxPQUFPLEtBQUssYUFBaEIsRUFBK0I7QUFDN0JJLE1BQUFBLFdBQVUsQ0FBQzNGLFNBQVgsQ0FBcUJzRCxNQUFyQixDQUE0QixNQUE1Qjs7QUFDQXFDLE1BQUFBLFdBQVUsQ0FBQzNGLFNBQVgsQ0FBcUJDLEdBQXJCLENBQXlCLEtBQXpCO0FBQ0QsS0FIRCxNQUdPLElBQUlzRixPQUFPLEtBQUssY0FBaEIsRUFBZ0M7QUFDckNJLE1BQUFBLFdBQVUsQ0FBQzNGLFNBQVgsQ0FBcUJDLEdBQXJCLENBQXlCLE1BQXpCOztBQUNBMEYsTUFBQUEsV0FBVSxDQUFDM0YsU0FBWCxDQUFxQnNELE1BQXJCLENBQTRCLEtBQTVCO0FBQ0Q7QUFDRjtBQUNGLENBdkNEOztBQXlDQSxJQUFNc0MsZUFBZSxHQUFHO0FBQ3RCQyxFQUFBQSxPQURzQixxQkFDWjtBQUNSaEUsSUFBQUEsZ0JBQWdCO0FBQ2hCSSxJQUFBQSxVQUFVO0FBQ1YxQyxJQUFBQSx5REFBQSxDQUFpQixvQkFBakIsRUFBdUM0QixnQkFBdkM7QUFDQTVCLElBQUFBLHlEQUFBLENBQWlCLHNCQUFqQixFQUF5Q0MscUJBQXpDO0FBQ0FELElBQUFBLHlEQUFBLENBQWlCLGdCQUFqQixFQUFtQzhGLG1CQUFuQztBQUNBOUYsSUFBQUEseURBQUEsQ0FBaUIsVUFBakIsRUFBNkI2RixTQUE3QjtBQUNEO0FBUnFCLENBQXhCO0FBV0EsaUVBQWVRLGVBQWY7Ozs7Ozs7Ozs7Ozs7O0FDMVVBLElBQU10RyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDeUcsT0FBRCxFQUFVQyxVQUFWLEVBQXlCO0FBQzFDLE1BQU1DLFVBQVUsR0FBR3JHLFFBQVEsQ0FBQ3NHLGFBQVQsQ0FBdUJILE9BQXZCLENBQW5COztBQUNBLE9BQUssSUFBTUksU0FBWCxJQUF3QkgsVUFBeEIsRUFBb0M7QUFDbEMsUUFBSSxDQUFDQyxVQUFVLENBQUNFLFNBQUQsQ0FBZixFQUE0QjtBQUMxQixVQUFJQSxTQUFTLENBQUNDLFFBQVYsR0FBcUJDLFFBQXJCLENBQThCLE1BQTlCLENBQUosRUFBMkM7QUFDekNKLFFBQUFBLFVBQVUsQ0FBQy9DLFlBQVgsQ0FBd0JpRCxTQUFTLENBQUNDLFFBQVYsRUFBeEIsRUFBOENKLFVBQVUsQ0FBQ0csU0FBRCxDQUF4RDtBQUNELE9BRkQsTUFFTztBQUNMRixRQUFBQSxVQUFVLENBQUNFLFNBQUQsQ0FBVixHQUF3QkgsVUFBVSxDQUFDRyxTQUFELENBQWxDO0FBQ0Q7QUFDRjtBQUNGOztBQUNELFNBQU9GLFVBQVA7QUFDRCxDQVpEOztBQWNBLGlFQUFlM0csVUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUltRyxNQUFNLEdBQUdlLG1EQUFNLENBQUMsUUFBRCxFQUFXRCxzREFBUyxFQUFwQixDQUFuQjtBQUNBLElBQUlFLFFBQVEsR0FBR0QsbURBQU0sQ0FBQyxVQUFELEVBQWFELHNEQUFTLEVBQXRCLENBQXJCOztBQUVBLElBQU1HLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNwRSxLQUFELEVBQVc7QUFBQSw2Q0FDUEEsS0FETztBQUFBOztBQUFBO0FBQzFCLHdEQUEwQjtBQUFBLFVBQWY0QixJQUFlO0FBQ3hCdUIsTUFBQUEsTUFBTSxDQUFDa0IsS0FBUCxDQUNHQyxFQURILENBQ00xQyxJQUFJLENBQUN6RSxDQURYLEVBQ2N5RSxJQUFJLENBQUN4RSxDQURuQixFQUVHTyxHQUZILENBRU9xRyxpREFBSSxDQUFDcEMsSUFBSSxDQUFDeEQsSUFBTixFQUFZd0QsSUFBSSxDQUFDbEQsTUFBakIsQ0FGWCxFQUVxQ2tELElBQUksQ0FBQ0ssV0FGMUM7QUFHQWtDLE1BQUFBLFFBQVEsQ0FBQ0ksT0FBVCxDQUFpQlAsaURBQUksQ0FBQ3BDLElBQUksQ0FBQ3hELElBQU4sRUFBWXdELElBQUksQ0FBQ2xELE1BQWpCLENBQXJCO0FBQ0Q7QUFOeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFPMUJ6QixFQUFBQSx1REFBQSxDQUFlLG9CQUFmLEVBQXFDLENBQ25Da0csTUFBTSxDQUFDa0IsS0FBUCxDQUFhaEcsS0FEc0IsRUFFbkM4RixRQUFRLENBQUNFLEtBQVQsQ0FBZWhHLEtBRm9CLENBQXJDO0FBSUQsQ0FYRDs7QUFhQSxJQUFNbUcsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFNO0FBQy9CLDhCQUFlTCxRQUFRLENBQUNNLE1BQVQsQ0FBZ0J0QixNQUFoQixFQUF3QnVCLElBQXhCLEVBQWY7QUFBQTtBQUFBLE1BQU92SCxDQUFQO0FBQUEsTUFBVUMsQ0FBVjs7QUFDQUgsRUFBQUEsdURBQUEsQ0FBZSxzQkFBZixFQUF1QyxDQUFDRSxDQUFELEVBQUlDLENBQUosQ0FBdkM7O0FBQ0EsTUFBSStGLE1BQU0sQ0FBQ2tCLEtBQVAsQ0FBYU0sZUFBYixFQUFKLEVBQW9DO0FBQ2xDMUgsSUFBQUEsdURBQUEsQ0FBZSxVQUFmLEVBQTJCLFVBQTNCO0FBQ0Q7O0FBQ0RBLEVBQUFBLHVEQUFBLENBQWUsZ0JBQWYsRUFBaUM7QUFDL0IrRixJQUFBQSxTQUFTLEVBQUUsUUFEb0I7QUFFL0JDLElBQUFBLE9BQU8sRUFBRUUsTUFBTSxDQUFDa0IsS0FBUCxDQUFhTztBQUZTLEdBQWpDO0FBSUQsQ0FWRDs7QUFZQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLE9BQVk7QUFBQTtBQUFBLE1BQVYxSCxDQUFVO0FBQUEsTUFBUEMsQ0FBTzs7QUFDbkMrRixFQUFBQSxNQUFNLENBQUNzQixNQUFQLENBQWNOLFFBQWQsRUFBd0JHLEVBQXhCLENBQTJCbkgsQ0FBM0IsRUFBOEJDLENBQTlCOztBQUNBLE1BQUkrRyxRQUFRLENBQUNFLEtBQVQsQ0FBZU0sZUFBZixFQUFKLEVBQXNDO0FBQ3BDMUgsSUFBQUEsdURBQUEsQ0FBZSxVQUFmLEVBQTJCLEtBQTNCO0FBQ0Q7O0FBQ0RBLEVBQUFBLHVEQUFBLENBQWUsZ0JBQWYsRUFBaUM7QUFDL0IrRixJQUFBQSxTQUFTLEVBQUUsVUFEb0I7QUFFL0JDLElBQUFBLE9BQU8sRUFBRWtCLFFBQVEsQ0FBQ0UsS0FBVCxDQUFlTztBQUZPLEdBQWpDO0FBSUFKLEVBQUFBLGtCQUFrQjtBQUNuQixDQVZEOztBQVlBLElBQU1qQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCWSxFQUFBQSxNQUFNLEdBQUcsSUFBVDtBQUNBZ0IsRUFBQUEsUUFBUSxHQUFHLElBQVg7QUFDQWhCLEVBQUFBLE1BQU0sR0FBR2UsbURBQU0sQ0FBQyxRQUFELEVBQVdELHNEQUFTLEVBQXBCLENBQWY7QUFDQUUsRUFBQUEsUUFBUSxHQUFHRCxtREFBTSxDQUFDLFVBQUQsRUFBYUQsc0RBQVMsRUFBdEIsQ0FBakI7QUFDRCxDQUxEOztBQU9BLElBQU1hLGdCQUFnQixHQUFHO0FBQ3ZCdkIsRUFBQUEsT0FEdUIscUJBQ2I7QUFDUnRHLElBQUFBLHlEQUFBLENBQWlCLGFBQWpCLEVBQWdDbUgsUUFBaEM7QUFDQW5ILElBQUFBLHlEQUFBLENBQWlCLG9CQUFqQixFQUF1QzRILGdCQUF2QztBQUNBNUgsSUFBQUEseURBQUEsQ0FBaUIsY0FBakIsRUFBaUNzRixXQUFqQztBQUNEO0FBTHNCLENBQXpCO0FBUUEsaUVBQWV1QyxnQkFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVEQSxJQUFNYixTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCLE1BQU01RixLQUFLLEdBQUcwRyxLQUFLLENBQUMsRUFBRCxDQUFMLENBQ1hDLElBRFcsQ0FDTixFQURNLEVBRVhDLEdBRlcsQ0FFUCxVQUFDeEIsT0FBRDtBQUFBLFdBQWFzQixLQUFLLENBQUMsRUFBRCxDQUFMLENBQVVDLElBQVYsQ0FBZXZCLE9BQWYsQ0FBYjtBQUFBLEdBRk8sQ0FBZDtBQUlBLE1BQU15QixVQUFVLEdBQUcsRUFBbkI7QUFFQSxNQUFJTixrQkFBa0IsR0FBRyxFQUF6Qjs7QUFFQSxNQUFNTyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUNoSSxDQUFELEVBQUlDLENBQUosRUFBTzZFLFdBQVAsRUFBb0IzQixVQUFwQixFQUFtQztBQUMvRCxRQUFJMkIsV0FBVyxLQUFLLFlBQXBCLEVBQWtDO0FBQ2hDLFVBQU1tRCxhQUFhLEdBQUcsbUJBQUkvRyxLQUFKLEVBQVdsQixDQUFYLEVBQWNrSSxLQUFkLENBQW9CakksQ0FBcEIsRUFBdUJBLENBQUMsR0FBR2tELFVBQTNCLENBQXRCOztBQUNBLFVBQUk4RSxhQUFhLENBQUMxRyxNQUFkLEtBQXlCNEIsVUFBN0IsRUFBeUMsT0FBTyxLQUFQO0FBQ3pDLGFBQU84RSxhQUFhLENBQUNFLEtBQWQsQ0FBb0IsVUFBQzdCLE9BQUQ7QUFBQSxlQUFhQSxPQUFPLEtBQUssRUFBekI7QUFBQSxPQUFwQixDQUFQO0FBQ0Q7O0FBQ0QsUUFBSXhCLFdBQVcsS0FBSyxVQUFwQixFQUFnQztBQUM5QixVQUFNbUQsY0FBYSxHQUFHLEVBQXRCOztBQUNBLFdBQUssSUFBSTVHLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLElBQUksSUFBSXJCLENBQXpCLEVBQTRCcUIsQ0FBQyxJQUFJLENBQWpDLEVBQW9DO0FBQ2xDNEcsUUFBQUEsY0FBYSxDQUFDNUUsSUFBZCxDQUFtQm5DLEtBQUssQ0FBQ2xCLENBQUMsR0FBR3FCLENBQUwsQ0FBTCxDQUFhcEIsQ0FBYixDQUFuQjtBQUNEOztBQUNELFVBQUlnSSxjQUFhLENBQUMxRyxNQUFkLEdBQXVCNEIsVUFBM0IsRUFBdUMsT0FBTyxLQUFQO0FBQ3ZDLGFBQU84RSxjQUFhLENBQUNFLEtBQWQsQ0FBb0IsVUFBQzdCLE9BQUQ7QUFBQSxlQUFhQSxPQUFPLEtBQUssRUFBekI7QUFBQSxPQUFwQixDQUFQO0FBQ0Q7O0FBQ0QsV0FBTyxFQUFQO0FBQ0QsR0FmRDs7QUFpQkEsTUFBTThCLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQzNELElBQUQsRUFBVTtBQUMvQnNELElBQUFBLFVBQVUsQ0FBQzFFLElBQVgsQ0FBZ0JvQixJQUFoQjtBQUNELEdBRkQ7O0FBSUEsTUFBTTRELGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ3JJLENBQUQsRUFBSUMsQ0FBSixFQUFPNkUsV0FBUCxFQUFvQkwsSUFBcEIsRUFBNkI7QUFDbEQsUUFBSUssV0FBVyxLQUFLLFlBQXBCLEVBQWtDO0FBQ2hDNUQsTUFBQUEsS0FBSyxDQUFDbEIsQ0FBRCxDQUFMLENBQVM2SCxJQUFULENBQWNwRCxJQUFkLEVBQW9CeEUsQ0FBcEIsRUFBdUJBLENBQUMsR0FBR3dFLElBQUksQ0FBQ2xELE1BQWhDO0FBQ0Q7O0FBQ0QsUUFBSXVELFdBQVcsS0FBSyxVQUFwQixFQUFnQztBQUM5QixXQUFLLElBQUl6RCxDQUFDLEdBQUdyQixDQUFiLEVBQWdCcUIsQ0FBQyxHQUFHb0QsSUFBSSxDQUFDbEQsTUFBTCxHQUFjdkIsQ0FBbEMsRUFBcUNxQixDQUFDLElBQUksQ0FBMUMsRUFBNkM7QUFDM0NILFFBQUFBLEtBQUssQ0FBQ0csQ0FBRCxDQUFMLENBQVNwQixDQUFULElBQWN3RSxJQUFkO0FBQ0Q7QUFDRjtBQUNGLEdBVEQ7O0FBV0EsTUFBTTZELFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUN0SSxDQUFELEVBQUlDLENBQUosRUFBVTtBQUMzQixRQUFNd0UsSUFBSSxHQUFHdkQsS0FBSyxDQUFDbEIsQ0FBRCxDQUFMLENBQVNDLENBQVQsQ0FBYjtBQUNBLFFBQUlzSSxXQUFXLEdBQUcsQ0FBbEIsQ0FGMkIsQ0FHM0I7O0FBQ0EsUUFBTUMsb0JBQW9CLEdBQUd0SCxLQUFLLENBQUNsQixDQUFELENBQUwsQ0FBU2tJLEtBQVQsQ0FBZSxDQUFmLEVBQWtCakksQ0FBbEIsQ0FBN0IsQ0FKMkIsQ0FLM0I7O0FBQ0EsUUFBTXdJLFlBQVksR0FBR0Qsb0JBQW9CLENBQUNFLE1BQXJCLENBQ25CLFVBQUNwQyxPQUFEO0FBQUEsYUFBYUEsT0FBTyxDQUFDckYsSUFBUixLQUFpQndELElBQUksQ0FBQ3hELElBQW5DO0FBQUEsS0FEbUIsQ0FBckI7QUFHQSxRQUFNMEgsa0JBQWtCLEdBQUcsRUFBM0IsQ0FUMkIsQ0FVM0I7O0FBQ0EsU0FBSyxJQUFJdEgsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3JCLENBQXBCLEVBQXVCcUIsQ0FBQyxJQUFJLENBQTVCLEVBQStCO0FBQzdCc0gsTUFBQUEsa0JBQWtCLENBQUN0RixJQUFuQixDQUF3Qm5DLEtBQUssQ0FBQ0csQ0FBRCxDQUFMLENBQVNwQixDQUFULENBQXhCO0FBQ0QsS0FiMEIsQ0FjM0I7OztBQUNBLFFBQU0ySSxhQUFhLEdBQUdELGtCQUFrQixDQUFDRCxNQUFuQixDQUNwQixVQUFDcEMsT0FBRDtBQUFBLGFBQWFBLE9BQU8sQ0FBQ3JGLElBQVIsS0FBaUJ3RCxJQUFJLENBQUN4RCxJQUFuQztBQUFBLEtBRG9CLENBQXRCOztBQUlBc0gsSUFBQUEsV0FBVyxHQUFJLFlBQU07QUFDbkIsVUFBSUUsWUFBWSxDQUFDbEgsTUFBYixLQUF3QixDQUF4QixJQUE2QnFILGFBQWEsQ0FBQ3JILE1BQWQsS0FBeUIsQ0FBMUQsRUFBNkQsT0FBTyxDQUFQOztBQUM3RCxVQUFJa0gsWUFBWSxDQUFDbEgsTUFBYixLQUF3QixDQUF4QixJQUE2QnFILGFBQWEsQ0FBQ3JILE1BQWQsS0FBeUIsQ0FBMUQsRUFBNkQ7QUFDM0QsZUFBT3FILGFBQWEsQ0FBQ3JILE1BQXJCO0FBQ0Q7O0FBQ0QsYUFBT2tILFlBQVksQ0FBQ2xILE1BQXBCO0FBQ0QsS0FOYSxFQUFkOztBQVFBLFFBQUlrRCxJQUFJLENBQUNvRSxPQUFMLENBQWFOLFdBQWIsQ0FBSixFQUErQjtBQUM3QmQsTUFBQUEsa0JBQWtCLEdBQUcsU0FBckI7QUFDQTtBQUNEOztBQUVEaEQsSUFBQUEsSUFBSSxDQUFDcUUsR0FBTCxDQUFTUCxXQUFUO0FBQ0FkLElBQUFBLGtCQUFrQixHQUFHLGFBQXJCO0FBQ0QsR0FsQ0Q7O0FBb0NBLFNBQU87QUFDTCxRQUFJdkcsS0FBSixHQUFZO0FBQ1YsZ0NBQVdBLEtBQVg7QUFDRCxLQUhJOztBQUlMLFFBQUk2RyxVQUFKLEdBQWlCO0FBQ2YsdUJBQVdBLFVBQVg7QUFDRCxLQU5JOztBQU9MLFFBQUlOLGtCQUFKLEdBQXlCO0FBQ3ZCLGFBQU9BLGtCQUFQO0FBQ0QsS0FUSTs7QUFVTE4sSUFBQUEsRUFWSyxjQVVGbkgsQ0FWRSxFQVVDQyxDQVZELEVBVUk7QUFDUCxhQUFPO0FBQ0xPLFFBQUFBLEdBREssZUFDRGlFLElBREMsRUFDS0ssV0FETCxFQUNrQjtBQUNyQixjQUFJa0QscUJBQXFCLENBQUNoSSxDQUFELEVBQUlDLENBQUosRUFBTzZFLFdBQVAsRUFBb0JMLElBQUksQ0FBQ2xELE1BQXpCLENBQXpCLEVBQTJEO0FBQ3pENkcsWUFBQUEsY0FBYyxDQUFDM0QsSUFBRCxDQUFkO0FBQ0E0RCxZQUFBQSxjQUFjLENBQUNySSxDQUFELEVBQUlDLENBQUosRUFBTzZFLFdBQVAsRUFBb0JMLElBQXBCLENBQWQ7QUFDRDtBQUNGLFNBTkk7QUFPTHNFLFFBQUFBLGFBUEssMkJBT1c7QUFDZCxjQUFJLFFBQU83SCxLQUFLLENBQUNsQixDQUFELENBQUwsQ0FBU0MsQ0FBVCxDQUFQLE1BQXVCLFFBQTNCLEVBQXFDO0FBQ25DcUksWUFBQUEsVUFBVSxDQUFDdEksQ0FBRCxFQUFJQyxDQUFKLENBQVY7QUFDQTtBQUNEOztBQUNELGNBQUlpQixLQUFLLENBQUNsQixDQUFELENBQUwsQ0FBU0MsQ0FBVCxNQUFnQixHQUFwQixFQUF5QjtBQUN2QndILFlBQUFBLGtCQUFrQixHQUFHLFNBQXJCO0FBQ0E7QUFDRDs7QUFDRHZHLFVBQUFBLEtBQUssQ0FBQ2xCLENBQUQsQ0FBTCxDQUFTQyxDQUFULElBQWMsR0FBZDtBQUNBd0gsVUFBQUEsa0JBQWtCLEdBQUcsY0FBckI7QUFDRDtBQWxCSSxPQUFQO0FBb0JELEtBL0JJO0FBZ0NMRCxJQUFBQSxlQWhDSyw2QkFnQ2E7QUFDaEIsYUFBTyxVQUFJTyxVQUFKLEVBQWdCSSxLQUFoQixDQUFzQixVQUFDMUQsSUFBRDtBQUFBLGVBQVVBLElBQUksQ0FBQ3VFLE1BQUwsRUFBVjtBQUFBLE9BQXRCLENBQVA7QUFDRDtBQWxDSSxHQUFQO0FBb0NELENBakhEOztBQW1IQSxpRUFBZWxDLFNBQWY7Ozs7Ozs7Ozs7Ozs7O0FDbkhBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUM5RixJQUFELEVBQU9pRyxLQUFQLEVBQWlCO0FBQzlCLE1BQU1xQixXQUFXLEdBQUc7QUFBRXZJLElBQUFBLENBQUMsRUFBRWdFLFNBQUw7QUFBZ0IvRCxJQUFBQSxDQUFDLEVBQUUrRDtBQUFuQixHQUFwQjtBQUNBLE1BQUlpRixVQUFVLEdBQUcsRUFBakI7O0FBRUEsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDdkksTUFBRCxFQUFZO0FBQ2hDLFFBQUlBLE1BQU0sQ0FBQ1ksTUFBUCxLQUFrQixDQUF0QixFQUF5QjtBQUN2QmdILE1BQUFBLFdBQVcsQ0FBQ3ZJLENBQVosR0FBZ0JnRSxTQUFoQjtBQUNBdUUsTUFBQUEsV0FBVyxDQUFDdEksQ0FBWixHQUFnQitELFNBQWhCO0FBQ0E7QUFDRDs7QUFDRHVFLElBQUFBLFdBQVcsQ0FBQ3ZJLENBQVosR0FBZ0JXLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVVgsQ0FBMUI7QUFDQXVJLElBQUFBLFdBQVcsQ0FBQ3RJLENBQVosR0FBZ0JVLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVVYsQ0FBMUI7QUFDQWdKLElBQUFBLFVBQVUsQ0FBQ0UsTUFBWCxDQUFrQixDQUFsQixFQUFxQixDQUFyQjtBQUNELEdBVEQ7O0FBV0EsU0FBTztBQUNMLFFBQUlsSSxJQUFKLEdBQVc7QUFDVCxhQUFPQSxJQUFQO0FBQ0QsS0FISTs7QUFJTCxRQUFJaUcsS0FBSixHQUFZO0FBQ1YsYUFBT0EsS0FBUDtBQUNELEtBTkk7O0FBT0xJLElBQUFBLE1BUEssa0JBT0U4QixLQVBGLEVBT1M7QUFDWixhQUFPO0FBQ0xqQyxRQUFBQSxFQURLLGNBQ0ZuSCxDQURFLEVBQ0NDLENBREQsRUFDSTtBQUNQbUosVUFBQUEsS0FBSyxDQUFDbEMsS0FBTixDQUFZQyxFQUFaLENBQWVuSCxDQUFmLEVBQWtCQyxDQUFsQixFQUFxQjhJLGFBQXJCLENBQW1DL0ksQ0FBbkMsRUFBc0NDLENBQXRDO0FBQ0QsU0FISTtBQUlMc0gsUUFBQUEsSUFKSyxrQkFJRTtBQUNMMkIsVUFBQUEsYUFBYSxDQUFDRCxVQUFELENBQWI7O0FBRUEsY0FBTWpKLENBQUMsR0FBSSxZQUFNO0FBQ2YsZ0JBQUl1SSxXQUFXLENBQUN2SSxDQUFaLEtBQWtCZ0UsU0FBdEIsRUFBaUM7QUFDL0IscUJBQU9xRixJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLEVBQTNCLENBQVA7QUFDRDs7QUFDRCxtQkFBT2hCLFdBQVcsQ0FBQ3ZJLENBQW5CO0FBQ0QsV0FMUyxFQUFWOztBQU1BLGNBQU1DLENBQUMsR0FBSSxZQUFNO0FBQ2YsZ0JBQUlzSSxXQUFXLENBQUN0SSxDQUFaLEtBQWtCK0QsU0FBdEIsRUFBaUM7QUFDL0IscUJBQU9xRixJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLEVBQTNCLENBQVA7QUFDRDs7QUFDRCxtQkFBT2hCLFdBQVcsQ0FBQ3RJLENBQW5CO0FBQ0QsV0FMUyxFQUFWOztBQU9BbUosVUFBQUEsS0FBSyxDQUFDbEMsS0FBTixDQUFZQyxFQUFaLENBQWVuSCxDQUFmLEVBQWtCQyxDQUFsQixFQUFxQjhJLGFBQXJCLENBQW1DL0ksQ0FBbkMsRUFBc0NDLENBQXRDOztBQUVBLGNBQUltSixLQUFLLENBQUNsQyxLQUFOLENBQVlPLGtCQUFaLEtBQW1DLFNBQXZDLEVBQWtEO0FBQ2hELG1CQUFPLEtBQUtGLElBQUwsRUFBUDtBQUNEOztBQUVELGNBQUk2QixLQUFLLENBQUNsQyxLQUFOLENBQVlPLGtCQUFaLEtBQW1DLGFBQXZDLEVBQXNEO0FBQ3BEd0IsWUFBQUEsVUFBVSxHQUFHLEVBQWI7O0FBQ0EsZ0JBQUloSixDQUFDLEdBQUcsQ0FBSixJQUFTLENBQWIsRUFBZ0I7QUFDZGdKLGNBQUFBLFVBQVUsQ0FBQzVGLElBQVgsQ0FBZ0I7QUFBRXJELGdCQUFBQSxDQUFDLEVBQURBLENBQUY7QUFBS0MsZ0JBQUFBLENBQUMsRUFBRUEsQ0FBQyxHQUFHO0FBQVosZUFBaEI7QUFDRDs7QUFDRCxnQkFBSUEsQ0FBQyxHQUFHLENBQUosSUFBUyxDQUFiLEVBQWdCO0FBQ2RnSixjQUFBQSxVQUFVLENBQUM1RixJQUFYLENBQWdCO0FBQUVyRCxnQkFBQUEsQ0FBQyxFQUFEQSxDQUFGO0FBQUtDLGdCQUFBQSxDQUFDLEVBQUVBLENBQUMsR0FBRztBQUFaLGVBQWhCO0FBQ0Q7O0FBQ0QsZ0JBQUlELENBQUMsR0FBRyxDQUFKLElBQVMsQ0FBYixFQUFnQjtBQUNkaUosY0FBQUEsVUFBVSxDQUFDNUYsSUFBWCxDQUFnQjtBQUFFckQsZ0JBQUFBLENBQUMsRUFBRUEsQ0FBQyxHQUFHLENBQVQ7QUFBWUMsZ0JBQUFBLENBQUMsRUFBREE7QUFBWixlQUFoQjtBQUNEOztBQUNELGdCQUFJRCxDQUFDLEdBQUcsQ0FBSixJQUFTLENBQWIsRUFBZ0I7QUFDZGlKLGNBQUFBLFVBQVUsQ0FBQzVGLElBQVgsQ0FBZ0I7QUFBRXJELGdCQUFBQSxDQUFDLEVBQUVBLENBQUMsR0FBRyxDQUFUO0FBQVlDLGdCQUFBQSxDQUFDLEVBQURBO0FBQVosZUFBaEI7QUFDRDtBQUNGOztBQUVELGlCQUFPLENBQUNELENBQUQsRUFBSUMsQ0FBSixDQUFQO0FBQ0Q7QUEzQ0ksT0FBUDtBQTZDRCxLQXJESTtBQXNETG1ILElBQUFBLE9BdERLLG1CQXNERzNDLElBdERILEVBc0RTO0FBQ1osVUFBTXpFLENBQUMsR0FBR3FKLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsRUFBM0IsQ0FBVjtBQUNBLFVBQU10SixDQUFDLEdBQUdvSixJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLEVBQTNCLENBQVY7QUFDQSxVQUFNQyxZQUFZLEdBQUcsQ0FBQyxZQUFELEVBQWUsVUFBZixDQUFyQjtBQUNBLFVBQU0xRSxXQUFXLEdBQUcwRSxZQUFZLENBQUNILElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsQ0FBM0IsQ0FBRCxDQUFoQztBQUVBckMsTUFBQUEsS0FBSyxDQUFDQyxFQUFOLENBQVNuSCxDQUFULEVBQVlDLENBQVosRUFBZU8sR0FBZixDQUFtQmlFLElBQW5CLEVBQXlCSyxXQUF6Qjs7QUFFQSxVQUFJLENBQUNvQyxLQUFLLENBQUNhLFVBQU4sQ0FBaUJuQixRQUFqQixDQUEwQm5DLElBQTFCLENBQUwsRUFBc0M7QUFDcEMsYUFBSzJDLE9BQUwsQ0FBYTNDLElBQWI7QUFDRDtBQUNGO0FBakVJLEdBQVA7QUFtRUQsQ0FsRkQ7O0FBb0ZBLGlFQUFlc0MsTUFBZjs7Ozs7Ozs7Ozs7Ozs7QUNwRkEsSUFBTWpILE1BQU0sR0FBRztBQUNiMkosRUFBQUEsTUFBTSxFQUFFLEVBREs7QUFFYjFJLEVBQUFBLE9BRmEsbUJBRUwySSxTQUZLLEVBRU1DLElBRk4sRUFFWTtBQUN2QixRQUFJN0osTUFBTSxDQUFDMkosTUFBUCxDQUFjQyxTQUFkLENBQUosRUFBOEI7QUFDNUI1SixNQUFBQSxNQUFNLENBQUMySixNQUFQLENBQWNDLFNBQWQsRUFBeUJsRyxPQUF6QixDQUFpQyxVQUFDb0csUUFBRDtBQUFBLGVBQWNBLFFBQVEsQ0FBQ0QsSUFBRCxDQUF0QjtBQUFBLE9BQWpDO0FBQ0Q7QUFDRixHQU5ZO0FBT2J0RCxFQUFBQSxTQVBhLHFCQU9IcUQsU0FQRyxFQU9RRSxRQVBSLEVBT2tCO0FBQzdCLFFBQUksQ0FBQ2hDLEtBQUssQ0FBQ2lDLE9BQU4sQ0FBYy9KLE1BQU0sQ0FBQzJKLE1BQVAsQ0FBY0MsU0FBZCxDQUFkLENBQUwsRUFBOEM7QUFDNUM1SixNQUFBQSxNQUFNLENBQUMySixNQUFQLENBQWNDLFNBQWQsSUFBMkIsRUFBM0I7QUFDRDs7QUFDRDVKLElBQUFBLE1BQU0sQ0FBQzJKLE1BQVAsQ0FBY0MsU0FBZCxFQUF5QnJHLElBQXpCLENBQThCdUcsUUFBOUI7QUFDRDtBQVpZLENBQWY7QUFlQSxpRUFBZTlKLE1BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkEsSUFBTStHLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUM1RixJQUFELEVBQU9NLE1BQVAsRUFBa0I7QUFDN0IsTUFBSXVJLFNBQVMsR0FBR2xDLEtBQUssQ0FBQ3JHLE1BQUQsQ0FBTCxDQUFjc0csSUFBZCxDQUFtQixFQUFuQixDQUFoQjs7QUFFQSxNQUFNaUIsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBQ2lCLFFBQUQsRUFBYztBQUN4QkQsSUFBQUEsU0FBUyxHQUFHLG1CQUFJQSxTQUFKLEVBQWVoQyxHQUFmLENBQW1CLFVBQUN4QixPQUFELEVBQVUwRCxLQUFWLEVBQW9CO0FBQ2pELGFBQU9BLEtBQUssS0FBS0QsUUFBVixHQUFxQixLQUFyQixHQUE2QnpELE9BQXBDO0FBQ0QsS0FGVyxDQUFaO0FBR0QsR0FKRDs7QUFNQSxNQUFNdUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ2tCLFFBQUQsRUFBYztBQUM1QixXQUFPLG1CQUFJRCxTQUFKLEVBQWVDLFFBQWYsTUFBNkIsS0FBcEM7QUFDRCxHQUZEOztBQUlBLE1BQU1mLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDbkIsV0FBTyxtQkFBSWMsU0FBSixFQUFlM0IsS0FBZixDQUFxQixVQUFDN0IsT0FBRDtBQUFBLGFBQWFBLE9BQU8sS0FBSyxLQUF6QjtBQUFBLEtBQXJCLENBQVA7QUFDRCxHQUZEOztBQUlBLFNBQU87QUFDTCxRQUFJckYsSUFBSixHQUFXO0FBQ1QsYUFBT0EsSUFBUDtBQUNELEtBSEk7O0FBSUwsUUFBSU0sTUFBSixHQUFhO0FBQ1gsYUFBT0EsTUFBUDtBQUNELEtBTkk7O0FBT0wsUUFBSXVJLFNBQUosR0FBZ0I7QUFDZCxnQ0FBV0EsU0FBWDtBQUNELEtBVEk7O0FBVUxoQixJQUFBQSxHQUFHLEVBQUhBLEdBVks7QUFXTEQsSUFBQUEsT0FBTyxFQUFQQSxPQVhLO0FBWUxHLElBQUFBLE1BQU0sRUFBTkE7QUFaSyxHQUFQO0FBY0QsQ0EvQkQ7O0FBaUNBLGlFQUFlbkMsSUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSx1V0FBdVcsdUJBQXVCLDJDQUEyQyxVQUFVLDBLQUEwSyxjQUFjLEdBQUcsZ0ZBQWdGLG1CQUFtQixHQUFHLGtLQUFrSyxtQkFBbUIscUJBQXFCLEdBQUcsb09BQW9PLDZCQUE2QixzQkFBc0IsOEJBQThCLFVBQVUsbUtBQW1LLHVDQUF1QywyQkFBMkIsVUFBVSxxTUFBcU0sa0NBQWtDLEdBQUcsc0tBQXNLLHlCQUF5Qix1Q0FBdUMsOENBQThDLFVBQVUsaUdBQWlHLHdCQUF3QixHQUFHLGlMQUFpTCx1Q0FBdUMsMkJBQTJCLFVBQVUsOEVBQThFLG1CQUFtQixHQUFHLGdJQUFnSSxtQkFBbUIsbUJBQW1CLHVCQUF1Qiw2QkFBNkIsR0FBRyxTQUFTLG9CQUFvQixHQUFHLFNBQVMsZ0JBQWdCLEdBQUcsaU1BQWlNLHVCQUF1QixHQUFHLDRRQUE0USwwQkFBMEIsNEJBQTRCLDhCQUE4QixzQkFBc0IsVUFBVSwyR0FBMkcsaUNBQWlDLEdBQUcsZ0xBQWdMLG9DQUFvQyxHQUFHLGlLQUFpSywrQkFBK0IsR0FBRyx1TkFBdU4sdUJBQXVCLGVBQWUsR0FBRyxnTkFBZ04sbUNBQW1DLEdBQUcsc0VBQXNFLG1DQUFtQyxHQUFHLDRSQUE0Uiw0QkFBNEIsMkJBQTJCLDJCQUEyQiw0QkFBNEIsdUJBQXVCLGdDQUFnQyxVQUFVLHdHQUF3Ryw2QkFBNkIsR0FBRyx1RkFBdUYsbUJBQW1CLEdBQUcsb0pBQW9KLDRCQUE0Qix1QkFBdUIsVUFBVSxnTUFBZ00saUJBQWlCLEdBQUcsbUpBQW1KLG1DQUFtQyxpQ0FBaUMsVUFBVSxrSUFBa0ksNkJBQTZCLEdBQUcseUxBQXlMLGdDQUFnQywwQkFBMEIsVUFBVSxrTUFBa00sbUJBQW1CLEdBQUcsNkVBQTZFLHVCQUF1QixHQUFHLDBLQUEwSyxrQkFBa0IsR0FBRyx3RUFBd0Usa0JBQWtCLEdBQUcsU0FBUyxtR0FBbUcsTUFBTSxRQUFRLFFBQVEsTUFBTSxLQUFLLHNCQUFzQix1QkFBdUIsT0FBTyxLQUFLLFFBQVEsT0FBTyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsT0FBTyxPQUFPLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFFBQVEsUUFBUSxNQUFNLEtBQUssc0JBQXNCLHFCQUFxQix1QkFBdUIsT0FBTyxPQUFPLE1BQU0sS0FBSyxzQkFBc0IscUJBQXFCLE9BQU8sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFlBQVksT0FBTyxPQUFPLE1BQU0sS0FBSyxzQkFBc0IsdUJBQXVCLHVCQUF1QixPQUFPLE1BQU0sTUFBTSxNQUFNLFlBQVksT0FBTyxPQUFPLE1BQU0sT0FBTyxzQkFBc0IscUJBQXFCLE9BQU8sTUFBTSxNQUFNLEtBQUssVUFBVSxPQUFPLE9BQU8sTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFFBQVEsT0FBTyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssUUFBUSxRQUFRLE1BQU0sU0FBUyxzQkFBc0IscUJBQXFCLHVCQUF1QixxQkFBcUIsT0FBTyxPQUFPLE1BQU0sTUFBTSxVQUFVLFlBQVksT0FBTyxPQUFPLE1BQU0sTUFBTSxVQUFVLFlBQVksT0FBTyxNQUFNLE1BQU0sUUFBUSxZQUFZLE9BQU8sTUFBTSxNQUFNLFFBQVEsWUFBWSxXQUFXLE1BQU0sTUFBTSxNQUFNLFFBQVEsWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxTQUFTLE1BQU0sS0FBSyxzQkFBc0IscUJBQXFCLHFCQUFxQixxQkFBcUIscUJBQXFCLHVCQUF1QixPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLE9BQU8sT0FBTyxNQUFNLE1BQU0sc0JBQXNCLHFCQUFxQixPQUFPLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxPQUFPLE1BQU0sS0FBSyxzQkFBc0IsdUJBQXVCLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLE9BQU8sTUFBTSxLQUFLLHNCQUFzQixxQkFBcUIsT0FBTyxLQUFLLFFBQVEsT0FBTyxNQUFNLEtBQUssVUFBVSxPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFFBQVEsT0FBTyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsc1ZBQXNWLHVCQUF1QiwyQ0FBMkMsVUFBVSwwS0FBMEssY0FBYyxHQUFHLGdGQUFnRixtQkFBbUIsR0FBRyxrS0FBa0ssbUJBQW1CLHFCQUFxQixHQUFHLG9PQUFvTyw2QkFBNkIsc0JBQXNCLDhCQUE4QixVQUFVLG1LQUFtSyx1Q0FBdUMsMkJBQTJCLFVBQVUscU1BQXFNLGtDQUFrQyxHQUFHLHNLQUFzSyx5QkFBeUIsdUNBQXVDLDhDQUE4QyxVQUFVLGlHQUFpRyx3QkFBd0IsR0FBRyxpTEFBaUwsdUNBQXVDLDJCQUEyQixVQUFVLDhFQUE4RSxtQkFBbUIsR0FBRyxnSUFBZ0ksbUJBQW1CLG1CQUFtQix1QkFBdUIsNkJBQTZCLEdBQUcsU0FBUyxvQkFBb0IsR0FBRyxTQUFTLGdCQUFnQixHQUFHLGlNQUFpTSx1QkFBdUIsR0FBRyw0UUFBNFEsMEJBQTBCLDRCQUE0Qiw4QkFBOEIsc0JBQXNCLFVBQVUsMkdBQTJHLGlDQUFpQyxHQUFHLGdMQUFnTCxvQ0FBb0MsR0FBRyxpS0FBaUssK0JBQStCLEdBQUcsdU5BQXVOLHVCQUF1QixlQUFlLEdBQUcsZ05BQWdOLG1DQUFtQyxHQUFHLHNFQUFzRSxtQ0FBbUMsR0FBRyw0UkFBNFIsNEJBQTRCLDJCQUEyQiwyQkFBMkIsNEJBQTRCLHVCQUF1QixnQ0FBZ0MsVUFBVSx3R0FBd0csNkJBQTZCLEdBQUcsdUZBQXVGLG1CQUFtQixHQUFHLG9KQUFvSiw0QkFBNEIsdUJBQXVCLFVBQVUsZ01BQWdNLGlCQUFpQixHQUFHLG1KQUFtSixtQ0FBbUMsaUNBQWlDLFVBQVUsa0lBQWtJLDZCQUE2QixHQUFHLHlMQUF5TCxnQ0FBZ0MsMEJBQTBCLFVBQVUsa01BQWtNLG1CQUFtQixHQUFHLDZFQUE2RSx1QkFBdUIsR0FBRywwS0FBMEssa0JBQWtCLEdBQUcsd0VBQXdFLGtCQUFrQixHQUFHLHFCQUFxQjtBQUNsN2U7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsNEZBQTRGLDJCQUEyQixHQUFHLCtGQUErRixjQUFjLEdBQUcseUpBQXlKLHFCQUFxQixHQUFHLHFEQUFxRCw0QkFBNEIsR0FBRyx3Q0FBd0Msc0JBQXNCLGtDQUFrQyxxQkFBcUIsR0FBRyxpRkFBaUYsbUNBQW1DLEdBQUcsMERBQTBELG9CQUFvQixtQkFBbUIsR0FBRyxvRkFBb0Ysa0JBQWtCLEdBQUcsZ0pBQWdKLHVCQUF1Qiw0QkFBNEIsS0FBSyxvQ0FBb0MsNENBQTRDLDhDQUE4Qyw2Q0FBNkMsdUNBQXVDLEtBQUssR0FBRyxTQUFTLDhGQUE4RixRQUFRLFlBQVksT0FBTyxZQUFZLGVBQWUsVUFBVSxNQUFNLFlBQVksT0FBTyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLFlBQVksT0FBTyxVQUFVLFVBQVUsT0FBTyxZQUFZLFNBQVMsVUFBVSxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxPQUFPLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSwyRUFBMkUsMkJBQTJCLEdBQUcsK0ZBQStGLGNBQWMsR0FBRyx5SkFBeUoscUJBQXFCLEdBQUcscURBQXFELDRCQUE0QixHQUFHLHdDQUF3QyxzQkFBc0Isa0NBQWtDLHFCQUFxQixHQUFHLGlGQUFpRixtQ0FBbUMsR0FBRywwREFBMEQsb0JBQW9CLG1CQUFtQixHQUFHLG9GQUFvRixrQkFBa0IsR0FBRyxnSkFBZ0osdUJBQXVCLDRCQUE0QixLQUFLLG9DQUFvQyw0Q0FBNEMsOENBQThDLDZDQUE2Qyx1Q0FBdUMsS0FBSyxHQUFHLHFCQUFxQjtBQUN2ckc7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsZ0RBQWdELDhCQUE4QixpQkFBaUIsa0JBQWtCLDJCQUEyQix3QkFBd0IsR0FBRyxRQUFRLHVCQUF1QixlQUFlLCtDQUErQyx1QkFBdUIsK0NBQStDLEdBQUcsa0JBQWtCLGVBQWUsa0JBQWtCLDJCQUEyQix3QkFBd0IsK0NBQStDLGlCQUFpQixzQkFBc0IseUJBQXlCLHVCQUF1QixhQUFhLEdBQUcsUUFBUSxlQUFlLCtDQUErQyx1QkFBdUIsdUJBQXVCLGlCQUFpQixHQUFHLFFBQVEsZUFBZSx1QkFBdUIsaUJBQWlCLG9CQUFvQixzRUFBc0UsR0FBRyx5Q0FBeUMsVUFBVSxpQkFBaUIscUJBQXFCLEtBQUssUUFBUSxtQkFBbUIsbUJBQW1CLEtBQUssR0FBRyxnREFBZ0QsZUFBZSx1QkFBdUIsb0JBQW9CLHVCQUF1Qiw0QkFBNEIsR0FBRyxZQUFZLHlCQUF5QixpQkFBaUIsOEJBQThCLGlCQUFpQixHQUFHLG1CQUFtQix5QkFBeUIsZUFBZSx3Q0FBd0MsbUNBQW1DLHNDQUFzQyxzQkFBc0IsR0FBRyx5QkFBeUIsb0JBQW9CLEdBQUcsNkJBQTZCLFFBQVEsZ0NBQWdDLEtBQUssU0FBUyxnQ0FBZ0MsS0FBSyxTQUFTLGdDQUFnQyxLQUFLLFVBQVUsZ0NBQWdDLEtBQUssR0FBRyxhQUFhLHVDQUF1QyxpQkFBaUIsR0FBRyx5QkFBeUIsOENBQThDLEdBQUcsd0JBQXdCLDJCQUEyQixHQUFHLGdEQUFnRCw4QkFBOEIsR0FBRyx1QkFBdUIsb0JBQW9CLHVCQUF1QixHQUFHLGlCQUFpQixrQkFBa0IsMkJBQTJCLHdCQUF3QixhQUFhLGVBQWUsR0FBRyxxQkFBcUIsd0JBQXdCLGdCQUFnQixrQkFBa0IsMkJBQTJCLHdCQUF3QixHQUFHLG9CQUFvQixpQkFBaUIsd0JBQXdCLGVBQWUsdUJBQXVCLGlCQUFpQixvQkFBb0IsOENBQThDLEdBQUcsK0NBQStDLGVBQWUsb0JBQW9CLDhDQUE4Qyx1QkFBdUIsd0JBQXdCLHVCQUF1QixpQkFBaUIsR0FBRyx5REFBeUQsbUJBQW1CLEdBQUcsdURBQXVELG1CQUFtQixHQUFHLCtGQUErRixlQUFlLG9CQUFvQixrQkFBa0IsaUJBQWlCLDJCQUEyQixnQ0FBZ0MsNEJBQTRCLEdBQUcseUZBQXlGLFlBQVksYUFBYSxrQkFBa0IsZ0JBQWdCLHdCQUF3QixHQUFHLHFFQUFxRSxZQUFZLDhCQUE4Qiw4Q0FBOEMsR0FBRyxnQ0FBZ0MsWUFBWSw4Q0FBOEMsR0FBRywrQ0FBK0MsNEJBQTRCLEdBQUcsbUdBQW1HLHdCQUF3QixHQUFHLHlGQUF5Rix3QkFBd0IsNEJBQTRCLGlCQUFpQix5QkFBeUIsR0FBRyxxQkFBcUIsa0JBQWtCLG9CQUFvQixlQUFlLFlBQVksV0FBVyxnQkFBZ0IsaUJBQWlCLG1CQUFtQixtQ0FBbUMseUNBQXlDLDRCQUE0Qix3QkFBd0IsR0FBRyw2QkFBNkIsd0NBQXdDLHFCQUFxQixrQkFBa0IsdUJBQXVCLDJCQUEyQixlQUFlLGtCQUFrQiwyQkFBMkIsd0JBQXdCLGNBQWMsR0FBRyxzQ0FBc0MsdUNBQXVDLG9CQUFvQixpQkFBaUIsaUJBQWlCLHVCQUF1Qix1QkFBdUIsNEJBQTRCLG9CQUFvQixHQUFHLFlBQVksZ0JBQWdCLGlCQUFpQixvQkFBb0Isc0JBQXNCLEdBQUcsaUNBQWlDLGlCQUFpQiwwQkFBMEIsb0JBQW9CLEdBQUcsU0FBUyx1RkFBdUYsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssTUFBTSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsZ0NBQWdDLDhCQUE4QixpQkFBaUIsa0JBQWtCLDJCQUEyQix3QkFBd0IsR0FBRyxRQUFRLHVCQUF1QixlQUFlLCtDQUErQyx1QkFBdUIsK0NBQStDLEdBQUcsa0JBQWtCLGVBQWUsa0JBQWtCLDJCQUEyQix3QkFBd0IsK0NBQStDLGlCQUFpQixzQkFBc0IseUJBQXlCLHVCQUF1QixhQUFhLEdBQUcsUUFBUSxlQUFlLCtDQUErQyx1QkFBdUIsdUJBQXVCLGlCQUFpQixHQUFHLFFBQVEsZUFBZSx1QkFBdUIsaUJBQWlCLG9CQUFvQixzRUFBc0UsR0FBRyx5Q0FBeUMsVUFBVSxpQkFBaUIscUJBQXFCLEtBQUssUUFBUSxtQkFBbUIsbUJBQW1CLEtBQUssR0FBRyxnREFBZ0QsZUFBZSx1QkFBdUIsb0JBQW9CLHVCQUF1Qiw0QkFBNEIsR0FBRyxZQUFZLHlCQUF5QixpQkFBaUIsOEJBQThCLGlCQUFpQixHQUFHLG1CQUFtQix5QkFBeUIsZUFBZSx3Q0FBd0MsbUNBQW1DLHNDQUFzQyxzQkFBc0IsR0FBRyx5QkFBeUIsb0JBQW9CLEdBQUcsNkJBQTZCLFFBQVEsZ0NBQWdDLEtBQUssU0FBUyxnQ0FBZ0MsS0FBSyxTQUFTLGdDQUFnQyxLQUFLLFVBQVUsZ0NBQWdDLEtBQUssR0FBRyxhQUFhLHVDQUF1QyxpQkFBaUIsR0FBRyx5QkFBeUIsOENBQThDLEdBQUcsd0JBQXdCLDJCQUEyQixHQUFHLGdEQUFnRCw4QkFBOEIsR0FBRyx1QkFBdUIsb0JBQW9CLHVCQUF1QixHQUFHLGlCQUFpQixrQkFBa0IsMkJBQTJCLHdCQUF3QixhQUFhLGVBQWUsR0FBRyxxQkFBcUIsd0JBQXdCLGdCQUFnQixrQkFBa0IsMkJBQTJCLHdCQUF3QixHQUFHLG9CQUFvQixpQkFBaUIsd0JBQXdCLGVBQWUsdUJBQXVCLGlCQUFpQixvQkFBb0IsOENBQThDLEdBQUcsK0NBQStDLGVBQWUsb0JBQW9CLDhDQUE4Qyx1QkFBdUIsd0JBQXdCLHVCQUF1QixpQkFBaUIsR0FBRyx5REFBeUQsbUJBQW1CLEdBQUcsdURBQXVELG1CQUFtQixHQUFHLCtGQUErRixlQUFlLG9CQUFvQixrQkFBa0IsaUJBQWlCLDJCQUEyQixnQ0FBZ0MsNEJBQTRCLEdBQUcseUZBQXlGLFlBQVksYUFBYSxrQkFBa0IsZ0JBQWdCLHdCQUF3QixHQUFHLHFFQUFxRSxZQUFZLDhCQUE4Qiw4Q0FBOEMsR0FBRyxnQ0FBZ0MsWUFBWSw4Q0FBOEMsR0FBRywrQ0FBK0MsNEJBQTRCLEdBQUcsbUdBQW1HLHdCQUF3QixHQUFHLHlGQUF5Rix3QkFBd0IsNEJBQTRCLGlCQUFpQix5QkFBeUIsR0FBRyxxQkFBcUIsa0JBQWtCLG9CQUFvQixlQUFlLFlBQVksV0FBVyxnQkFBZ0IsaUJBQWlCLG1CQUFtQixtQ0FBbUMseUNBQXlDLDRCQUE0Qix3QkFBd0IsR0FBRyw2QkFBNkIsd0NBQXdDLHFCQUFxQixrQkFBa0IsdUJBQXVCLDJCQUEyQixlQUFlLGtCQUFrQiwyQkFBMkIsd0JBQXdCLGNBQWMsR0FBRyxzQ0FBc0MsdUNBQXVDLG9CQUFvQixpQkFBaUIsaUJBQWlCLHVCQUF1Qix1QkFBdUIsNEJBQTRCLG9CQUFvQixHQUFHLFlBQVksZ0JBQWdCLGlCQUFpQixvQkFBb0Isc0JBQXNCLEdBQUcsaUNBQWlDLGlCQUFpQiwwQkFBMEIsb0JBQW9CLEdBQUcscUJBQXFCO0FBQ3YxWDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHVCQUF1QixrQkFBa0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0Isc0JBQXNCO0FBQzVDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQTBHO0FBQzFHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsMEZBQU87Ozs7QUFJb0Q7QUFDNUUsT0FBTyxpRUFBZSwwRkFBTyxJQUFJLGlHQUFjLEdBQUcsaUdBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBc0c7QUFDdEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUlnRDtBQUN4RSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUFzRztBQUN0RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSWdEO0FBQ3hFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7O1VDZkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFWLDREQUFBO0FBQ0F3Qiw2REFBQSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL0RPTS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvRE9NRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvR2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL1B1YnN1Yi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvU2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9ub3JtYWxpemUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL25vcm1hbGl6ZS5jc3M/NDNmNCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9yZXNldC5jc3M/NGNmYiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERPTUZhY3RvcnkgZnJvbSBcIi4vRE9NRmFjdG9yeVwiO1xuaW1wb3J0IHB1YnN1YiBmcm9tIFwiLi9QdWJzdWJcIjtcblxuY29uc3QgcmVjZWl2ZUNvbXB1dGVyQXR0YWNrID0gKFt4LCB5XSkgPT4ge1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLW9uZS1nYW1lYm9hcmRcIik7XG4gIGNvbnN0IHJvdyA9IHBsYXllckJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvd3M9XCIke3h9XCJdYCk7XG4gIGNvbnN0IGNvbHVtbiA9IHJvdy5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb2x1bW5zPVwiJHt5fVwiXWApO1xuICBjb2x1bW4uY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbn07XG5cbmNvbnN0IHNlbmRQbGF5ZXJBdHRhY2sgPSAoZXZlbnQpID0+IHtcbiAgaWYgKCFldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY29sdW1uc1wiKSkgcmV0dXJuO1xuICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgY29uc3QgeCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcImRhdGEtcm93c1wiKTtcbiAgY29uc3QgeSA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtbnNcIik7XG4gIHB1YnN1Yi5wdWJsaXNoKFwicGxheWVyLWF0dGFjay1zaGlwXCIsIFt4LCB5XSk7XG59O1xuXG5jb25zdCBjcmVhdGVHYW1lYm9hcmQgPSAobmFtZSwgYm9hcmQpID0+IHtcbiAgY29uc3QgZ3JpZCA9IERPTUZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc05hbWU6IG5hbWUgfSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgIGNvbnN0IHJvdyA9IERPTUZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwicm93c1wiLCBcImRhdGEtcm93c1wiOiBpIH0pO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgY29uc3QgY29sdW1uID0gRE9NRmFjdG9yeShcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJjb2x1bW5zXCIsXG4gICAgICAgIFwiZGF0YS1jb2x1bW5zXCI6IGosXG4gICAgICB9KTtcbiAgICAgIGlmIChib2FyZC5sZW5ndGggIT09IDAgJiYgdHlwZW9mIGJvYXJkW2ldW2pdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGNvbHVtbi5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgIH1cbiAgICAgIHJvdy5hcHBlbmQoY29sdW1uKTtcbiAgICB9XG4gICAgZ3JpZC5hcHBlbmQocm93KTtcbiAgfVxuICBpZiAobmFtZSA9PT0gXCJwbGF5ZXItdHdvLWdhbWVib2FyZFwiKSB7XG4gICAgZ3JpZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VuZFBsYXllckF0dGFjayk7XG4gIH1cbiAgcmV0dXJuIGdyaWQ7XG59O1xuXG5jb25zdCBhcHBlbmRHYW1lYm9hcmRzID0gKFtwbGF5ZXJCb2FyZCwgY29tcHV0ZXJCb2FyZF0pID0+IHtcbiAgY29uc3QgZ2FtZWJvYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZWJvYXJkc1wiKTtcbiAgY29uc3QgcGxheWVyT25lU2VjdGlvbiA9IERPTUZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwicGxheWVyLXNlY3Rpb25cIiB9KTtcbiAgY29uc3QgcGxheWVyT25lSGVhZGVyID0gRE9NRmFjdG9yeShcImgyXCIsIHtcbiAgICBjbGFzc05hbWU6IFwicGxheWVyLWhlYWRlclwiLFxuICAgIHRleHRDb250ZW50OiBcIllvdVwiLFxuICB9KTtcbiAgY29uc3QgcGxheWVyT25lTWVzc2FnZSA9IERPTUZhY3RvcnkoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJwbGF5ZXItb25lLW1lc3NhZ2VcIixcbiAgfSk7XG4gIGNvbnN0IHBsYXllclR3b1NlY3Rpb24gPSBET01GYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInBsYXllci1zZWN0aW9uXCIgfSk7XG4gIGNvbnN0IHBsYXllclR3b0hlYWRlciA9IERPTUZhY3RvcnkoXCJoMlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcInBsYXllci1oZWFkZXJcIixcbiAgICB0ZXh0Q29udGVudDogXCJDb21wdXRlclwiLFxuICB9KTtcbiAgY29uc3QgcGxheWVyVHdvTWVzc2FnZSA9IERPTUZhY3RvcnkoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJwbGF5ZXItdHdvLW1lc3NhZ2VcIixcbiAgfSk7XG4gIHBsYXllck9uZVNlY3Rpb24uYXBwZW5kKFxuICAgIHBsYXllck9uZUhlYWRlcixcbiAgICBwbGF5ZXJPbmVNZXNzYWdlLFxuICAgIGNyZWF0ZUdhbWVib2FyZChcInBsYXllci1vbmUtZ2FtZWJvYXJkXCIsIHBsYXllckJvYXJkKSxcbiAgKTtcbiAgcGxheWVyVHdvU2VjdGlvbi5hcHBlbmQoXG4gICAgcGxheWVyVHdvSGVhZGVyLFxuICAgIHBsYXllclR3b01lc3NhZ2UsXG4gICAgY3JlYXRlR2FtZWJvYXJkKFwicGxheWVyLXR3by1nYW1lYm9hcmRcIiwgY29tcHV0ZXJCb2FyZCksXG4gICk7XG4gIGdhbWVib2FyZHMuYXBwZW5kKHBsYXllck9uZVNlY3Rpb24pO1xuICBnYW1lYm9hcmRzLmFwcGVuZChwbGF5ZXJUd29TZWN0aW9uKTtcbn07XG5cbmNvbnN0IHJlbmRlcklucHV0TW9kYWwgPSAoKSA9PiB7XG4gIGNvbnN0IGlucHV0TW9kYWxEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LW1vZGFsXCIpO1xuICBjb25zdCBpbnB1dEdyaWQgPSBjcmVhdGVHYW1lYm9hcmQoXCJpbnB1dHMtZ2FtZWJvYXJkXCIsIFtdKTtcbiAgaW5wdXRNb2RhbERpdi5pbnNlcnRCZWZvcmUoaW5wdXRHcmlkLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlYWR5XCIpKTtcbn07XG5cbmNvbnN0IGlucHV0U2hpcHMgPSAoKSA9PiB7XG4gIGNvbnN0IGlucHV0R3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXRzLWdhbWVib2FyZFwiKTtcbiAgY29uc3QgY29sdW1ucyA9IFsuLi5pbnB1dEdyaWQucXVlcnlTZWxlY3RvckFsbChcIi5jb2x1bW5zXCIpXTtcbiAgY29uc3Qgcm90YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yb3RhdGVcIik7XG4gIGxldCBob3Jpem9udGFsID0gdHJ1ZTtcbiAgbGV0IHNoaXBzID0gW1xuICAgIHsgbmFtZTogXCJjYXJyaWVyXCIsIGxlbmd0aDogNSwgYWRkZWQ6IGZhbHNlIH0sXG4gICAgeyBuYW1lOiBcImRlc3Ryb3llclwiLCBsZW5ndGg6IDQsIGFkZGVkOiBmYWxzZSB9LFxuICAgIHsgbmFtZTogXCJjcnVpc2VyXCIsIGxlbmd0aDogMywgYWRkZWQ6IGZhbHNlIH0sXG4gICAgeyBuYW1lOiBcInN1Ym1hcmluZVwiLCBsZW5ndGg6IDMsIGFkZGVkOiBmYWxzZSB9LFxuICAgIHsgbmFtZTogXCJwYXRyb2xcIiwgbGVuZ3RoOiAyLCBhZGRlZDogZmFsc2UgfSxcbiAgICB7IG5hbWU6IFwic2NvdXRcIiwgbGVuZ3RoOiAxLCBhZGRlZDogZmFsc2UgfSxcbiAgXTtcblxuICBjb25zdCBtb3VzZWVudGVyQ2FsbGJhY2tIb3Jpem9udGFsID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgY29sdW1uID0gTnVtYmVyKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtbnNcIikpO1xuICAgIGNvbnN0IGNlbGxzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudC5jdXJyZW50VGFyZ2V0LnNoaXBMZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgY29sID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYFtkYXRhLWNvbHVtbnM9XCIke2NvbHVtbiArIGl9XCJdYCxcbiAgICAgICk7XG4gICAgICBjZWxscy5wdXNoKGNvbCk7XG4gICAgfVxuICAgIGlmIChjZWxscy5zb21lKChpdGVtKSA9PiBpdGVtID09PSBudWxsKSkge1xuICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJyZWRcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChjZWxscy5zb21lKChpdGVtKSA9PiBpdGVtLmNsYXNzTGlzdC5jb250YWlucyhcInNoaXBcIikpKSB7XG4gICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZChcInJlZFwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2VsbHMuZm9yRWFjaCgoaXRlbSkgPT5cbiAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS1vcmllbnRhdGlvblwiLCBcImhvcml6b250YWxcIiksXG4gICAgKTtcbiAgICBjZWxscy5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoXCJob3ZlclwiKSk7XG4gIH07XG5cbiAgY29uc3QgbW91c2VlbnRlckNhbGxiYWNrVmVydGljYWwgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBjb2x1bW4gPSBOdW1iZXIoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uc1wiKSk7XG4gICAgY29uc3Qgcm93ID0gTnVtYmVyKGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcImRhdGEtcm93c1wiKSk7XG4gICAgY29uc3QgZ3JpZCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgY29uc3QgY2VsbHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50LmN1cnJlbnRUYXJnZXQuc2hpcExlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBmb2N1c1JvdyA9IGdyaWQucXVlcnlTZWxlY3RvcihgW2RhdGEtcm93cz1cIiR7cm93ICsgaX1cIl1gKTtcbiAgICAgIGlmICghZm9jdXNSb3cpIGJyZWFrO1xuICAgICAgY2VsbHMucHVzaChmb2N1c1Jvdy5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb2x1bW5zPVwiJHtjb2x1bW59XCJdYCkpO1xuICAgIH1cbiAgICBpZiAoY2VsbHMubGVuZ3RoIDwgZXZlbnQuY3VycmVudFRhcmdldC5zaGlwTGVuZ3RoKSB7XG4gICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZChcInJlZFwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNlbGxzLnNvbWUoKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hpcFwiKSkpIHtcbiAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwicmVkXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjZWxscy5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLnNldEF0dHJpYnV0ZShcImRhdGEtb3JpZW50YXRpb25cIiwgXCJ2ZXJ0aWNhbFwiKSk7XG4gICAgY2VsbHMuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QuYWRkKFwiaG92ZXJcIikpO1xuICB9O1xuXG4gIGNvbnN0IG1vdXNlbGVhdmVDYWxsYmFjayA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwicmVkXCIpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5jb2x1bW5zXCIpXG4gICAgICAuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiaG92ZXJcIikpO1xuICB9O1xuXG4gIGNvbnN0IHNoaXBzUmVzZXQgPSAoKSA9PiB7XG4gICAgc2hpcHMgPSBbXG4gICAgICB7IG5hbWU6IFwiY2FycmllclwiLCBsZW5ndGg6IDUsIGFkZGVkOiBmYWxzZSB9LFxuICAgICAgeyBuYW1lOiBcImRlc3Ryb3llclwiLCBsZW5ndGg6IDQsIGFkZGVkOiBmYWxzZSB9LFxuICAgICAgeyBuYW1lOiBcImNydWlzZXJcIiwgbGVuZ3RoOiAzLCBhZGRlZDogZmFsc2UgfSxcbiAgICAgIHsgbmFtZTogXCJzdWJtYXJpbmVcIiwgbGVuZ3RoOiAzLCBhZGRlZDogZmFsc2UgfSxcbiAgICAgIHsgbmFtZTogXCJwYXRyb2xcIiwgbGVuZ3RoOiAyLCBhZGRlZDogZmFsc2UgfSxcbiAgICAgIHsgbmFtZTogXCJzY291dFwiLCBsZW5ndGg6IDEsIGFkZGVkOiBmYWxzZSB9LFxuICAgIF07XG4gIH07XG5cbiAgY29uc3QgaGlkZUlucHV0TW9kYWwgPSAoKSA9PiB7XG4gICAgaWYgKHNoaXBzWzBdLnggPT09IHVuZGVmaW5lZCkgcmV0dXJuOyAvLyByZXR1cm4gd2hlbiBubyBzaGlwcyBlbnRlcmVkXG4gICAgY29uc3QgaW5wdXRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXQtbW9kYWxcIik7XG4gICAgaW5wdXRHcmlkLnJlbW92ZSgpO1xuICAgIGlucHV0TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIHB1YnN1Yi5wdWJsaXNoKFwiaW5wdXQtc2hpcHNcIiwgc2hpcHMpO1xuICAgIHNoaXBzUmVzZXQoKTtcbiAgfTtcblxuICBjb25zdCBhY3RpdmF0ZVJlYWR5RGl2ID0gKCkgPT4ge1xuICAgIGNvbnN0IHJlYWR5RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZWFkeVwiKTtcbiAgICByZWFkeURpdi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIHJlYWR5RGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoaWRlSW5wdXRNb2RhbCk7XG4gIH07XG5cbiAgY29uc3QgY2xpY2tDYWxsYmFjayA9IChldmVudCkgPT4ge1xuICAgIGlmICghZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNvbHVtbnNcIikpIHJldHVybjtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInJlZFwiKSkgcmV0dXJuO1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hpcFwiKSkgcmV0dXJuO1xuICAgIGNvbnN0IHNoaXBUb0FkZCA9IHNoaXBzLmZpbmQoKHNoaXApID0+ICFzaGlwLmFkZGVkKTtcbiAgICBpZiAoIXNoaXBUb0FkZCkgcmV0dXJuO1xuICAgIGlmIChzaGlwVG9BZGQubGVuZ3RoID09PSAxKSB7XG4gICAgICBjb2x1bW5zLmZvckVhY2goKGNlbGwpID0+XG4gICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgbW91c2VlbnRlckNhbGxiYWNrSG9yaXpvbnRhbCksXG4gICAgICApO1xuICAgICAgY29sdW1ucy5mb3JFYWNoKChjZWxsKSA9PlxuICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIG1vdXNlZW50ZXJDYWxsYmFja1ZlcnRpY2FsKSxcbiAgICAgICk7XG4gICAgICBhY3RpdmF0ZVJlYWR5RGl2KCk7XG4gICAgfVxuICAgIGNvbnN0IHNoaXBUb0FkZEluZGV4ID0gc2hpcHMuaW5kZXhPZihzaGlwVG9BZGQpO1xuICAgIHNoaXBUb0FkZC5hZGRlZCA9IHRydWU7XG4gICAgc2hpcFRvQWRkLnggPSBOdW1iZXIoZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1yb3dzXCIpKTtcbiAgICBzaGlwVG9BZGQueSA9IE51bWJlcihldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW5zXCIpKTtcbiAgICBzaGlwVG9BZGQub3JpZW50YXRpb24gPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1vcmllbnRhdGlvblwiKTtcbiAgICBjb25zdCByZXF1aXJlZCA9IGlucHV0R3JpZC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbHVtbnMuaG92ZXJcIik7XG4gICAgcmVxdWlyZWQuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKSk7XG4gICAgcmVxdWlyZWQuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QuYWRkKHNoaXBUb0FkZC5uYW1lKSk7XG4gICAgY29uc3QgcGxhY2VTaGlwTWVzc2FnZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxhY2Utc2hpcC1tZXNzYWdlXCIpO1xuICAgIGlmIChzaGlwVG9BZGQubGVuZ3RoID09PSAxKSB7XG4gICAgICBwbGFjZVNoaXBNZXNzYWdlRGl2LnRleHRDb250ZW50ID1cbiAgICAgICAgXCJBbGwgc2hpcHMgcGxhY2VkLCBtb3ZlIHRvIGJhdHRsZWdyb3VuZCFcIjtcbiAgICB9XG4gICAgaWYgKCFzaGlwc1tzaGlwVG9BZGRJbmRleCArIDFdKSByZXR1cm47XG4gICAgcGxhY2VTaGlwTWVzc2FnZURpdi50ZXh0Q29udGVudCA9IGBQbGFjZSB5b3VyICR7XG4gICAgICBzaGlwc1tzaGlwVG9BZGRJbmRleCArIDFdLm5hbWVcbiAgICB9IWA7XG4gICAgY29sdW1ucy5mb3JFYWNoKFxuICAgICAgKGNlbGwpID0+IChjZWxsLnNoaXBMZW5ndGggPSBzaGlwc1tzaGlwVG9BZGRJbmRleCArIDFdLmxlbmd0aCksXG4gICAgKTtcbiAgfTtcblxuICBjb2x1bW5zLmZvckVhY2goKGNlbGwpID0+IChjZWxsLnNoaXBMZW5ndGggPSA1KSk7XG5cbiAgY29sdW1ucy5mb3JFYWNoKChjZWxsKSA9PlxuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgbW91c2VlbnRlckNhbGxiYWNrSG9yaXpvbnRhbCksXG4gICk7XG5cbiAgY29sdW1ucy5mb3JFYWNoKChjZWxsKSA9PlxuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgbW91c2VsZWF2ZUNhbGxiYWNrKSxcbiAgKTtcblxuICBpbnB1dEdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrQ2FsbGJhY2spO1xuXG4gIHJvdGF0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICBjb2x1bW5zLmZvckVhY2goKGNlbGwpID0+XG4gICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgbW91c2VlbnRlckNhbGxiYWNrSG9yaXpvbnRhbCksXG4gICAgICApO1xuICAgICAgY29sdW1ucy5mb3JFYWNoKChjZWxsKSA9PlxuICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIG1vdXNlZW50ZXJDYWxsYmFja1ZlcnRpY2FsKSxcbiAgICAgICk7XG4gICAgICBob3Jpem9udGFsID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbHVtbnMuZm9yRWFjaCgoY2VsbCkgPT5cbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBtb3VzZWVudGVyQ2FsbGJhY2tIb3Jpem9udGFsKSxcbiAgICAgICk7XG4gICAgICBjb2x1bW5zLmZvckVhY2goKGNlbGwpID0+XG4gICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgbW91c2VlbnRlckNhbGxiYWNrVmVydGljYWwpLFxuICAgICAgKTtcbiAgICAgIGhvcml6b250YWwgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCByZW1vdmVQbGF5ZXJTZWN0aW9ucyA9ICgpID0+IHtcbiAgY29uc3QgcGxheWVyU2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXllci1zZWN0aW9uXCIpO1xuICBwbGF5ZXJTZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiBzZWN0aW9uLnJlbW92ZSgpKTtcbn07XG5cbmNvbnN0IHJlc3RhcnRHYW1lID0gKCkgPT4ge1xuICByZW1vdmVQbGF5ZXJTZWN0aW9ucygpO1xuICBjb25zdCBnYW1lRW5kTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtZW5kLW1vZGFsXCIpO1xuICBnYW1lRW5kTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBjb25zdCBpbnB1dE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dC1tb2RhbFwiKTtcbiAgaW5wdXRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gIHJlbmRlcklucHV0TW9kYWwoKTtcbiAgaW5wdXRTaGlwcygpO1xuICBjb25zdCBwbGFjZVNoaXBNZXNzYWdlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGFjZS1zaGlwLW1lc3NhZ2VcIik7XG4gIHBsYWNlU2hpcE1lc3NhZ2VEaXYudGV4dENvbnRlbnQgPSBcIlBsYWNlIHlvdXIgY2FycmllciFcIjtcbiAgcHVic3ViLnB1Ymxpc2goXCJyZXN0YXJ0LWdhbWVcIik7XG59O1xuXG5jb25zdCBvcGVuR2FtZUVuZE1vZGFsID0gKHZpY3RvcikgPT4ge1xuICBjb25zdCBnYW1lRW5kTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtZW5kLW1vZGFsXCIpO1xuICBnYW1lRW5kTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1lbmQtbW9kYWwgLnRleHRcIik7XG4gIHRleHQudGV4dENvbnRlbnQgPSBgJHt2aWN0b3J9IHdvbiFgO1xuICBjb25zdCByZXN0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLWVuZC1tb2RhbCAucmVzdGFydFwiKTtcbiAgcmVzdGFydC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVzdGFydEdhbWUpO1xuICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1lbmQtbW9kYWwgLmNsb3NlXCIpO1xuICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGdhbWVFbmRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH0pO1xufTtcblxuY29uc3Qgc2hvd0FsZXJ0ID0gKHZpY3RvcikgPT4ge1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci10d28tZ2FtZWJvYXJkXCIpXG4gICAgLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZW5kUGxheWVyQXR0YWNrKTtcbiAgb3BlbkdhbWVFbmRNb2RhbCh2aWN0b3IpO1xufTtcblxuY29uc3QgcmVuZGVyQXR0YWNrTWVzc2FnZSA9ICh7IHJlY2lwaWVudCwgbWVzc2FnZSB9KSA9PiB7XG4gIGNvbnN0IG1lc3NhZ2VHZW5lcmF0b3IgPSAocGxheWVyLCBtc2cpID0+IHtcbiAgICBpZiAobXNnID09PSBcInN1Y2Nlc3MvaGl0XCIpIHtcbiAgICAgIGlmIChwbGF5ZXIgPT09IFwicGxheWVyXCIpIHtcbiAgICAgICAgcmV0dXJuIFwiQ29tcHV0ZXIgaGl0IHlvdXIgZmxlZXQhXCI7XG4gICAgICB9XG4gICAgICBpZiAocGxheWVyID09PSBcImNvbXB1dGVyXCIpIHtcbiAgICAgICAgcmV0dXJuIFwiWW91IHN1Y2Nlc3NmdWxseSBoaXQgYSBjb21wdXRlciBzaGlwIVwiO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobXNnID09PSBcInN1Y2Nlc3MvbWlzc1wiKSB7XG4gICAgICBpZiAocGxheWVyID09PSBcInBsYXllclwiKSB7XG4gICAgICAgIHJldHVybiBcIkNvbXB1dGVyJ3MgYXR0YWNrIG1pc3NlZCFcIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBcIllvdXIgYXR0YWNrIG1pc3NlZCFcIjtcbiAgICB9XG4gICAgcmV0dXJuIFwiXCI7XG4gIH07XG4gIGlmIChyZWNpcGllbnQgPT09IFwicGxheWVyXCIpIHtcbiAgICBjb25zdCBtZXNzYWdlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItb25lLW1lc3NhZ2VcIik7XG4gICAgbWVzc2FnZURpdi50ZXh0Q29udGVudCA9IG1lc3NhZ2VHZW5lcmF0b3IoXCJwbGF5ZXJcIiwgbWVzc2FnZSk7XG4gICAgaWYgKG1lc3NhZ2UgPT09IFwic3VjY2Vzcy9oaXRcIikge1xuICAgICAgbWVzc2FnZURpdi5jbGFzc0xpc3QucmVtb3ZlKFwibWlzc1wiKTtcbiAgICAgIG1lc3NhZ2VEaXYuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICB9IGVsc2UgaWYgKG1lc3NhZ2UgPT09IFwic3VjY2Vzcy9taXNzXCIpIHtcbiAgICAgIG1lc3NhZ2VEaXYuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XG4gICAgICBtZXNzYWdlRGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJoaXRcIik7XG4gICAgfVxuICB9IGVsc2UgaWYgKHJlY2lwaWVudCA9PT0gXCJjb21wdXRlclwiKSB7XG4gICAgY29uc3QgbWVzc2FnZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLXR3by1tZXNzYWdlXCIpO1xuICAgIG1lc3NhZ2VEaXYudGV4dENvbnRlbnQgPSBtZXNzYWdlR2VuZXJhdG9yKFwiY29tcHV0ZXJcIiwgbWVzc2FnZSk7XG4gICAgaWYgKG1lc3NhZ2UgPT09IFwic3VjY2Vzcy9oaXRcIikge1xuICAgICAgbWVzc2FnZURpdi5jbGFzc0xpc3QucmVtb3ZlKFwibWlzc1wiKTtcbiAgICAgIG1lc3NhZ2VEaXYuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICB9IGVsc2UgaWYgKG1lc3NhZ2UgPT09IFwic3VjY2Vzcy9taXNzXCIpIHtcbiAgICAgIG1lc3NhZ2VEaXYuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XG4gICAgICBtZXNzYWdlRGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJoaXRcIik7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBET01Nb2R1bGVPYmplY3QgPSB7XG4gIGV4ZWN1dGUoKSB7XG4gICAgcmVuZGVySW5wdXRNb2RhbCgpO1xuICAgIGlucHV0U2hpcHMoKTtcbiAgICBwdWJzdWIuc3Vic2NyaWJlKFwiZmxlZXRzLWluaXRpYWxpemVkXCIsIGFwcGVuZEdhbWVib2FyZHMpO1xuICAgIHB1YnN1Yi5zdWJzY3JpYmUoXCJjb21wdXRlci1hdHRhY2stc2hpcFwiLCByZWNlaXZlQ29tcHV0ZXJBdHRhY2spO1xuICAgIHB1YnN1Yi5zdWJzY3JpYmUoXCJhdHRhY2stbWVzc2FnZVwiLCByZW5kZXJBdHRhY2tNZXNzYWdlKTtcbiAgICBwdWJzdWIuc3Vic2NyaWJlKFwiZ2FtZS1lbmRcIiwgc2hvd0FsZXJ0KTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERPTU1vZHVsZU9iamVjdDtcbiIsImNvbnN0IERPTUZhY3RvcnkgPSAoZWxlbWVudCwgYXR0cmlidXRlcykgPT4ge1xuICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgZm9yIChjb25zdCBhdHRyaWJ1dGUgaW4gYXR0cmlidXRlcykge1xuICAgIGlmICghbmV3RWxlbWVudFthdHRyaWJ1dGVdKSB7XG4gICAgICBpZiAoYXR0cmlidXRlLnRvU3RyaW5nKCkuaW5jbHVkZXMoXCJkYXRhXCIpKSB7XG4gICAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZS50b1N0cmluZygpLCBhdHRyaWJ1dGVzW2F0dHJpYnV0ZV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3RWxlbWVudFthdHRyaWJ1dGVdID0gYXR0cmlidXRlc1thdHRyaWJ1dGVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbmV3RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERPTUZhY3Rvcnk7XG4iLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9TaGlwXCI7XG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL0dhbWVib2FyZFwiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9QbGF5ZXJcIjtcbmltcG9ydCBwdWJzdWIgZnJvbSBcIi4vUHVic3ViXCI7XG5cbmxldCBwbGF5ZXIgPSBQbGF5ZXIoXCJwbGF5ZXJcIiwgR2FtZWJvYXJkKCkpO1xubGV0IGNvbXB1dGVyID0gUGxheWVyKFwiY29tcHV0ZXJcIiwgR2FtZWJvYXJkKCkpO1xuXG5jb25zdCBhZGRTaGlwcyA9IChzaGlwcykgPT4ge1xuICBmb3IgKGNvbnN0IHNoaXAgb2Ygc2hpcHMpIHtcbiAgICBwbGF5ZXIuZmxlZXRcbiAgICAgIC5hdChzaGlwLngsIHNoaXAueSlcbiAgICAgIC5hZGQoU2hpcChzaGlwLm5hbWUsIHNoaXAubGVuZ3RoKSwgc2hpcC5vcmllbnRhdGlvbik7XG4gICAgY29tcHV0ZXIuYXV0b0FkZChTaGlwKHNoaXAubmFtZSwgc2hpcC5sZW5ndGgpKTtcbiAgfVxuICBwdWJzdWIucHVibGlzaChcImZsZWV0cy1pbml0aWFsaXplZFwiLCBbXG4gICAgcGxheWVyLmZsZWV0LmJvYXJkLFxuICAgIGNvbXB1dGVyLmZsZWV0LmJvYXJkLFxuICBdKTtcbn07XG5cbmNvbnN0IGNvbXB1dGVyQXR0YWNrU2hpcCA9ICgpID0+IHtcbiAgY29uc3QgW3gsIHldID0gY29tcHV0ZXIuYXR0YWNrKHBsYXllcikuYXV0bygpO1xuICBwdWJzdWIucHVibGlzaChcImNvbXB1dGVyLWF0dGFjay1zaGlwXCIsIFt4LCB5XSk7XG4gIGlmIChwbGF5ZXIuZmxlZXQuYXJlQWxsU2hpcHNTdW5rKCkpIHtcbiAgICBwdWJzdWIucHVibGlzaChcImdhbWUtZW5kXCIsIFwiQ29tcHV0ZXJcIik7XG4gIH1cbiAgcHVic3ViLnB1Ymxpc2goXCJhdHRhY2stbWVzc2FnZVwiLCB7XG4gICAgcmVjaXBpZW50OiBcInBsYXllclwiLFxuICAgIG1lc3NhZ2U6IHBsYXllci5mbGVldC5sYXRlc3RBdHRhY2tTdGF0dXMsXG4gIH0pO1xufTtcblxuY29uc3QgcGxheWVyQXR0YWNrU2hpcCA9IChbeCwgeV0pID0+IHtcbiAgcGxheWVyLmF0dGFjayhjb21wdXRlcikuYXQoeCwgeSk7XG4gIGlmIChjb21wdXRlci5mbGVldC5hcmVBbGxTaGlwc1N1bmsoKSkge1xuICAgIHB1YnN1Yi5wdWJsaXNoKFwiZ2FtZS1lbmRcIiwgXCJZb3VcIik7XG4gIH1cbiAgcHVic3ViLnB1Ymxpc2goXCJhdHRhY2stbWVzc2FnZVwiLCB7XG4gICAgcmVjaXBpZW50OiBcImNvbXB1dGVyXCIsXG4gICAgbWVzc2FnZTogY29tcHV0ZXIuZmxlZXQubGF0ZXN0QXR0YWNrU3RhdHVzLFxuICB9KTtcbiAgY29tcHV0ZXJBdHRhY2tTaGlwKCk7XG59O1xuXG5jb25zdCByZXN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgcGxheWVyID0gbnVsbDtcbiAgY29tcHV0ZXIgPSBudWxsO1xuICBwbGF5ZXIgPSBQbGF5ZXIoXCJwbGF5ZXJcIiwgR2FtZWJvYXJkKCkpO1xuICBjb21wdXRlciA9IFBsYXllcihcImNvbXB1dGVyXCIsIEdhbWVib2FyZCgpKTtcbn07XG5cbmNvbnN0IGdhbWVNb2R1bGVPYmplY3QgPSB7XG4gIGV4ZWN1dGUoKSB7XG4gICAgcHVic3ViLnN1YnNjcmliZShcImlucHV0LXNoaXBzXCIsIGFkZFNoaXBzKTtcbiAgICBwdWJzdWIuc3Vic2NyaWJlKFwicGxheWVyLWF0dGFjay1zaGlwXCIsIHBsYXllckF0dGFja1NoaXApO1xuICAgIHB1YnN1Yi5zdWJzY3JpYmUoXCJyZXN0YXJ0LWdhbWVcIiwgcmVzdGFydEdhbWUpO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2FtZU1vZHVsZU9iamVjdDtcbiIsImNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgY29uc3QgYm9hcmQgPSBBcnJheSgxMClcbiAgICAuZmlsbChcIlwiKVxuICAgIC5tYXAoKGVsZW1lbnQpID0+IEFycmF5KDEwKS5maWxsKGVsZW1lbnQpKTtcblxuICBjb25zdCBzaGlwc0FycmF5ID0gW107XG5cbiAgbGV0IGxhdGVzdEF0dGFja1N0YXR1cyA9IFwiXCI7XG5cbiAgY29uc3QgY2hlY2tJZlNoaXBDYW5CZUFkZGVkID0gKHgsIHksIG9yaWVudGF0aW9uLCBzaGlwTGVuZ3RoKSA9PiB7XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgY29uc3QgcmVxdWlyZWRTcGFjZSA9IFsuLi5ib2FyZF1beF0uc2xpY2UoeSwgeSArIHNoaXBMZW5ndGgpO1xuICAgICAgaWYgKHJlcXVpcmVkU3BhY2UubGVuZ3RoICE9PSBzaGlwTGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gcmVxdWlyZWRTcGFjZS5ldmVyeSgoZWxlbWVudCkgPT4gZWxlbWVudCA9PT0gXCJcIik7XG4gICAgfVxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBjb25zdCByZXF1aXJlZFNwYWNlID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSA5IC0geDsgaSArPSAxKSB7XG4gICAgICAgIHJlcXVpcmVkU3BhY2UucHVzaChib2FyZFt4ICsgaV1beV0pO1xuICAgICAgfVxuICAgICAgaWYgKHJlcXVpcmVkU3BhY2UubGVuZ3RoIDwgc2hpcExlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIHJlcXVpcmVkU3BhY2UuZXZlcnkoKGVsZW1lbnQpID0+IGVsZW1lbnQgPT09IFwiXCIpO1xuICAgIH1cbiAgICByZXR1cm4gXCJcIjtcbiAgfTtcblxuICBjb25zdCBhZGRTaGlwSW5BcnJheSA9IChzaGlwKSA9PiB7XG4gICAgc2hpcHNBcnJheS5wdXNoKHNoaXApO1xuICB9O1xuXG4gIGNvbnN0IGFkZFNoaXBPbkJvYXJkID0gKHgsIHksIG9yaWVudGF0aW9uLCBzaGlwKSA9PiB7XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgYm9hcmRbeF0uZmlsbChzaGlwLCB5LCB5ICsgc2hpcC5sZW5ndGgpO1xuICAgIH1cbiAgICBpZiAob3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgZm9yIChsZXQgaSA9IHg7IGkgPCBzaGlwLmxlbmd0aCArIHg7IGkgKz0gMSkge1xuICAgICAgICBib2FyZFtpXVt5XSA9IHNoaXA7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGF0dGFja1NoaXAgPSAoeCwgeSkgPT4ge1xuICAgIGNvbnN0IHNoaXAgPSBib2FyZFt4XVt5XTtcbiAgICBsZXQgaGl0UG9zaXRpb24gPSAwO1xuICAgIC8vIGdldCBsZWZ0IG9mIGdhbWVib2FyZCBmcm9tIGhpdCBwb3NpdGlvblxuICAgIGNvbnN0IHRhcmdldEFyZWFIb3Jpem9udGFsID0gYm9hcmRbeF0uc2xpY2UoMCwgeSk7XG4gICAgLy8gZmlsdGVyIHRvIGdldCBsZWZ0IG9mIHNoaXAgZnJvbSBoaXQgcG9zaXRpb25cbiAgICBjb25zdCBzaGlwTGVmdFNpZGUgPSB0YXJnZXRBcmVhSG9yaXpvbnRhbC5maWx0ZXIoXG4gICAgICAoZWxlbWVudCkgPT4gZWxlbWVudC5uYW1lID09PSBzaGlwLm5hbWUsXG4gICAgKTtcbiAgICBjb25zdCB0YXJnZXRBcmVhVmVydGljYWwgPSBbXTtcbiAgICAvLyBnZXQgdXBwZXIgb2YgZ2FtZWJvYXJkIGZyb20gaGl0IHBvc2l0aW9uXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB4OyBpICs9IDEpIHtcbiAgICAgIHRhcmdldEFyZWFWZXJ0aWNhbC5wdXNoKGJvYXJkW2ldW3ldKTtcbiAgICB9XG4gICAgLy8gZmlsdGVyIHRvIGdldCB1cHBlciBvZiBzaGlwIGZyb20gaGl0IHBvc2l0aW9uXG4gICAgY29uc3Qgc2hpcFVwcGVyU2lkZSA9IHRhcmdldEFyZWFWZXJ0aWNhbC5maWx0ZXIoXG4gICAgICAoZWxlbWVudCkgPT4gZWxlbWVudC5uYW1lID09PSBzaGlwLm5hbWUsXG4gICAgKTtcblxuICAgIGhpdFBvc2l0aW9uID0gKCgpID0+IHtcbiAgICAgIGlmIChzaGlwTGVmdFNpZGUubGVuZ3RoID09PSAwICYmIHNoaXBVcHBlclNpZGUubGVuZ3RoID09PSAwKSByZXR1cm4gMDtcbiAgICAgIGlmIChzaGlwTGVmdFNpZGUubGVuZ3RoID09PSAwICYmIHNoaXBVcHBlclNpZGUubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBzaGlwVXBwZXJTaWRlLmxlbmd0aDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzaGlwTGVmdFNpZGUubGVuZ3RoO1xuICAgIH0pKCk7XG5cbiAgICBpZiAoc2hpcC5pc0hpdEF0KGhpdFBvc2l0aW9uKSkge1xuICAgICAgbGF0ZXN0QXR0YWNrU3RhdHVzID0gXCJpbGxlZ2FsXCI7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2hpcC5oaXQoaGl0UG9zaXRpb24pO1xuICAgIGxhdGVzdEF0dGFja1N0YXR1cyA9IFwic3VjY2Vzcy9oaXRcIjtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldCBib2FyZCgpIHtcbiAgICAgIHJldHVybiBbLi4uYm9hcmRdO1xuICAgIH0sXG4gICAgZ2V0IHNoaXBzQXJyYXkoKSB7XG4gICAgICByZXR1cm4gWy4uLnNoaXBzQXJyYXldO1xuICAgIH0sXG4gICAgZ2V0IGxhdGVzdEF0dGFja1N0YXR1cygpIHtcbiAgICAgIHJldHVybiBsYXRlc3RBdHRhY2tTdGF0dXM7XG4gICAgfSxcbiAgICBhdCh4LCB5KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBhZGQoc2hpcCwgb3JpZW50YXRpb24pIHtcbiAgICAgICAgICBpZiAoY2hlY2tJZlNoaXBDYW5CZUFkZGVkKHgsIHksIG9yaWVudGF0aW9uLCBzaGlwLmxlbmd0aCkpIHtcbiAgICAgICAgICAgIGFkZFNoaXBJbkFycmF5KHNoaXApO1xuICAgICAgICAgICAgYWRkU2hpcE9uQm9hcmQoeCwgeSwgb3JpZW50YXRpb24sIHNoaXApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVjZWl2ZUF0dGFjaygpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkW3hdW3ldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBhdHRhY2tTaGlwKHgsIHkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYm9hcmRbeF1beV0gPT09IFwiWFwiKSB7XG4gICAgICAgICAgICBsYXRlc3RBdHRhY2tTdGF0dXMgPSBcImlsbGVnYWxcIjtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYm9hcmRbeF1beV0gPSBcIlhcIjtcbiAgICAgICAgICBsYXRlc3RBdHRhY2tTdGF0dXMgPSBcInN1Y2Nlc3MvbWlzc1wiO1xuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9LFxuICAgIGFyZUFsbFNoaXBzU3VuaygpIHtcbiAgICAgIHJldHVybiBbLi4uc2hpcHNBcnJheV0uZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpO1xuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJjb25zdCBQbGF5ZXIgPSAobmFtZSwgZmxlZXQpID0+IHtcbiAgY29uc3QgaGl0UG9zaXRpb24gPSB7IHg6IHVuZGVmaW5lZCwgeTogdW5kZWZpbmVkIH07XG4gIGxldCB0YXJnZXRBcmVhID0gW107XG5cbiAgY29uc3QgdXNlVGFyZ2V0QXJlYSA9ICh0YXJnZXQpID0+IHtcbiAgICBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgaGl0UG9zaXRpb24ueCA9IHVuZGVmaW5lZDtcbiAgICAgIGhpdFBvc2l0aW9uLnkgPSB1bmRlZmluZWQ7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGhpdFBvc2l0aW9uLnggPSB0YXJnZXRbMF0ueDtcbiAgICBoaXRQb3NpdGlvbi55ID0gdGFyZ2V0WzBdLnk7XG4gICAgdGFyZ2V0QXJlYS5zcGxpY2UoMCwgMSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgIHJldHVybiBuYW1lO1xuICAgIH0sXG4gICAgZ2V0IGZsZWV0KCkge1xuICAgICAgcmV0dXJuIGZsZWV0O1xuICAgIH0sXG4gICAgYXR0YWNrKGVuZW15KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBhdCh4LCB5KSB7XG4gICAgICAgICAgZW5lbXkuZmxlZXQuYXQoeCwgeSkucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICAgICAgfSxcbiAgICAgICAgYXV0bygpIHtcbiAgICAgICAgICB1c2VUYXJnZXRBcmVhKHRhcmdldEFyZWEpO1xuXG4gICAgICAgICAgY29uc3QgeCA9ICgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoaGl0UG9zaXRpb24ueCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaGl0UG9zaXRpb24ueDtcbiAgICAgICAgICB9KSgpO1xuICAgICAgICAgIGNvbnN0IHkgPSAoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGhpdFBvc2l0aW9uLnkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGhpdFBvc2l0aW9uLnk7XG4gICAgICAgICAgfSkoKTtcblxuICAgICAgICAgIGVuZW15LmZsZWV0LmF0KHgsIHkpLnJlY2VpdmVBdHRhY2soeCwgeSk7XG5cbiAgICAgICAgICBpZiAoZW5lbXkuZmxlZXQubGF0ZXN0QXR0YWNrU3RhdHVzID09PSBcImlsbGVnYWxcIikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXV0bygpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChlbmVteS5mbGVldC5sYXRlc3RBdHRhY2tTdGF0dXMgPT09IFwic3VjY2Vzcy9oaXRcIikge1xuICAgICAgICAgICAgdGFyZ2V0QXJlYSA9IFtdO1xuICAgICAgICAgICAgaWYgKHkgKyAxIDw9IDkpIHtcbiAgICAgICAgICAgICAgdGFyZ2V0QXJlYS5wdXNoKHsgeCwgeTogeSArIDEgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoeSAtIDEgPj0gMCkge1xuICAgICAgICAgICAgICB0YXJnZXRBcmVhLnB1c2goeyB4LCB5OiB5IC0gMSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh4ICsgMSA8PSA5KSB7XG4gICAgICAgICAgICAgIHRhcmdldEFyZWEucHVzaCh7IHg6IHggKyAxLCB5IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHggLSAxID49IDApIHtcbiAgICAgICAgICAgICAgdGFyZ2V0QXJlYS5wdXNoKHsgeDogeCAtIDEsIHkgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIFt4LCB5XTtcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSxcbiAgICBhdXRvQWRkKHNoaXApIHtcbiAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgY29uc3Qgb3JpZW50YXRpb25zID0gW1wiaG9yaXpvbnRhbFwiLCBcInZlcnRpY2FsXCJdO1xuICAgICAgY29uc3Qgb3JpZW50YXRpb24gPSBvcmllbnRhdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMildO1xuXG4gICAgICBmbGVldC5hdCh4LCB5KS5hZGQoc2hpcCwgb3JpZW50YXRpb24pO1xuXG4gICAgICBpZiAoIWZsZWV0LnNoaXBzQXJyYXkuaW5jbHVkZXMoc2hpcCkpIHtcbiAgICAgICAgdGhpcy5hdXRvQWRkKHNoaXApO1xuICAgICAgfVxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJjb25zdCBwdWJzdWIgPSB7XG4gIGV2ZW50czoge30sXG4gIHB1Ymxpc2goZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgaWYgKHB1YnN1Yi5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgcHVic3ViLmV2ZW50c1tldmVudE5hbWVdLmZvckVhY2goKGNhbGxiYWNrKSA9PiBjYWxsYmFjayhkYXRhKSk7XG4gICAgfVxuICB9LFxuICBzdWJzY3JpYmUoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShwdWJzdWIuZXZlbnRzW2V2ZW50TmFtZV0pKSB7XG4gICAgICBwdWJzdWIuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXTtcbiAgICB9XG4gICAgcHVic3ViLmV2ZW50c1tldmVudE5hbWVdLnB1c2goY2FsbGJhY2spO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgcHVic3ViO1xuIiwiY29uc3QgU2hpcCA9IChuYW1lLCBsZW5ndGgpID0+IHtcbiAgbGV0IHNoaXBBcnJheSA9IEFycmF5KGxlbmd0aCkuZmlsbChcIlwiKTtcblxuICBjb25zdCBoaXQgPSAocG9zaXRpb24pID0+IHtcbiAgICBzaGlwQXJyYXkgPSBbLi4uc2hpcEFycmF5XS5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gaW5kZXggPT09IHBvc2l0aW9uID8gXCJoaXRcIiA6IGVsZW1lbnQ7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaXNIaXRBdCA9IChwb3NpdGlvbikgPT4ge1xuICAgIHJldHVybiBbLi4uc2hpcEFycmF5XVtwb3NpdGlvbl0gPT09IFwiaGl0XCI7XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIHJldHVybiBbLi4uc2hpcEFycmF5XS5ldmVyeSgoZWxlbWVudCkgPT4gZWxlbWVudCA9PT0gXCJoaXRcIik7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgIHJldHVybiBuYW1lO1xuICAgIH0sXG4gICAgZ2V0IGxlbmd0aCgpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfSxcbiAgICBnZXQgc2hpcEFycmF5KCkge1xuICAgICAgcmV0dXJuIFsuLi5zaGlwQXJyYXldO1xuICAgIH0sXG4gICAgaGl0LFxuICAgIGlzSGl0QXQsXG4gICAgaXNTdW5rLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcblxcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxufVxcblxcbi8qIFNlY3Rpb25zXFxuICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgICAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gICAgICovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAgICAgKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gICAgICovXFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICAgICAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gICAgICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gICAgICovXFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgICAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICAgICAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAgICAgKi9cXG5cXG5ociB7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAgICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAgICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICAgKi9cXG5cXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICAgKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICAgICAqL1xcblxcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qKlxcbiAgICAgKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAgICAgKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAgICAgKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAgICAgKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gICAgICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAgICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICAgKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgICAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICAgKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICAgICAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAgICAgKiBhbGwgYnJvd3NlcnMuXFxuICAgICAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgICAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICAgICAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIEZvcm1zXFxuICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgICAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICAgKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICAgICAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAgICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICAgICAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICAgICAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICAgICAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAgICAgKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICAgICAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgLyogMSAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAgICAgKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAgICAgKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyoqXFxuICAgICAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICAgICAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAgICAgKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICAgICAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICAgICAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gICAgICovXFxuXFxuZmllbGRzZXQge1xcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcbn1cXG5cXG4vKipcXG4gICAgICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gICAgICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAgICAgKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICAgICAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICAgKi9cXG5cXG5sZWdlbmQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXFxuICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cXG59XFxuXFxuLyoqXFxuICAgICAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICAgICAqL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICAgICAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAgICAgKi9cXG5cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICAgICAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAgICAgKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICAgICAqL1xcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgICAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gICAgICovXFxuXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAgICAgKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gICAgICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICAgICAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgICAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gICAgICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICAgICAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICAgICAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gICAgICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICAgICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxuICAgICAqL1xcblxcbmRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICAgICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gICAgICovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qIE1pc2NcXG4gICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAgICAgKi9cXG5cXG50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKipcXG4gICAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICAgICAqL1xcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbm9ybWFsaXplLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwyRUFBMkU7O0FBRTNFOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGO0VBQ0UsaUJBQWlCLEVBQUUsTUFBTTtFQUN6Qiw4QkFBOEIsRUFBRSxNQUFNO0FBQ3hDOztBQUVBO21GQUNtRjs7QUFFbkY7O01BRU07O0FBRU47RUFDRSxTQUFTO0FBQ1g7O0FBRUE7O01BRU07O0FBRU47RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7TUFHTTs7QUFFTjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7bUZBQ21GOztBQUVuRjs7O01BR007O0FBRU47RUFDRSx1QkFBdUIsRUFBRSxNQUFNO0VBQy9CLFNBQVMsRUFBRSxNQUFNO0VBQ2pCLGlCQUFpQixFQUFFLE1BQU07QUFDM0I7O0FBRUE7OztNQUdNOztBQUVOO0VBQ0UsaUNBQWlDLEVBQUUsTUFBTTtFQUN6QyxjQUFjLEVBQUUsTUFBTTtBQUN4Qjs7QUFFQTttRkFDbUY7O0FBRW5GOztNQUVNOztBQUVOO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBOzs7TUFHTTs7QUFFTjtFQUNFLG1CQUFtQixFQUFFLE1BQU07RUFDM0IsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyxpQ0FBaUMsRUFBRSxNQUFNO0FBQzNDOztBQUVBOztNQUVNOztBQUVOOztFQUVFLG1CQUFtQjtBQUNyQjs7QUFFQTs7O01BR007O0FBRU47OztFQUdFLGlDQUFpQyxFQUFFLE1BQU07RUFDekMsY0FBYyxFQUFFLE1BQU07QUFDeEI7O0FBRUE7O01BRU07O0FBRU47RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7TUFHTTs7QUFFTjs7RUFFRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO21GQUNtRjs7QUFFbkY7O01BRU07O0FBRU47RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7bUZBQ21GOztBQUVuRjs7O01BR007O0FBRU47Ozs7O0VBS0Usb0JBQW9CLEVBQUUsTUFBTTtFQUM1QixlQUFlLEVBQUUsTUFBTTtFQUN2QixpQkFBaUIsRUFBRSxNQUFNO0VBQ3pCLFNBQVMsRUFBRSxNQUFNO0FBQ25COztBQUVBOzs7TUFHTTs7QUFFTjs7RUFFRSxNQUFNO0VBQ04saUJBQWlCO0FBQ25COztBQUVBOzs7TUFHTTs7QUFFTjs7RUFFRSxNQUFNO0VBQ04sb0JBQW9CO0FBQ3RCOztBQUVBOztNQUVNOztBQUVOOzs7O0VBSUUsMEJBQTBCO0FBQzVCOztBQUVBOztNQUVNOztBQUVOOzs7O0VBSUUsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTs7TUFFTTs7QUFFTjs7OztFQUlFLDhCQUE4QjtBQUNoQzs7QUFFQTs7TUFFTTs7QUFFTjtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTs7Ozs7TUFLTTs7QUFFTjtFQUNFLHNCQUFzQixFQUFFLE1BQU07RUFDOUIsY0FBYyxFQUFFLE1BQU07RUFDdEIsY0FBYyxFQUFFLE1BQU07RUFDdEIsZUFBZSxFQUFFLE1BQU07RUFDdkIsVUFBVSxFQUFFLE1BQU07RUFDbEIsbUJBQW1CLEVBQUUsTUFBTTtBQUM3Qjs7QUFFQTs7TUFFTTs7QUFFTjtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTs7TUFFTTs7QUFFTjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7OztNQUdNOztBQUVOOztFQUVFLHNCQUFzQixFQUFFLE1BQU07RUFDOUIsVUFBVSxFQUFFLE1BQU07QUFDcEI7O0FBRUE7O01BRU07O0FBRU47O0VBRUUsWUFBWTtBQUNkOztBQUVBOzs7TUFHTTs7QUFFTjtFQUNFLDZCQUE2QixFQUFFLE1BQU07RUFDckMsb0JBQW9CLEVBQUUsTUFBTTtBQUM5Qjs7QUFFQTs7TUFFTTs7QUFFTjtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTs7O01BR007O0FBRU47RUFDRSwwQkFBMEIsRUFBRSxNQUFNO0VBQ2xDLGFBQWEsRUFBRSxNQUFNO0FBQ3ZCOztBQUVBO21GQUNtRjs7QUFFbkY7O01BRU07O0FBRU47RUFDRSxjQUFjO0FBQ2hCOztBQUVBOztNQUVNOztBQUVOO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO21GQUNtRjs7QUFFbkY7O01BRU07O0FBRU47RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7O01BRU07O0FBRU47RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcblxcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxufVxcblxcbi8qIFNlY3Rpb25zXFxuICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgICAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gICAgICovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAgICAgKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gICAgICovXFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICAgICAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gICAgICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gICAgICovXFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgICAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICAgICAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAgICAgKi9cXG5cXG5ociB7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAgICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAgICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICAgKi9cXG5cXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICAgKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICAgICAqL1xcblxcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qKlxcbiAgICAgKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAgICAgKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAgICAgKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAgICAgKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gICAgICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAgICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICAgKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgICAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICAgKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICAgICAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAgICAgKiBhbGwgYnJvd3NlcnMuXFxuICAgICAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgICAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICAgICAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIEZvcm1zXFxuICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgICAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICAgKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICAgICAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAgICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICAgICAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICAgICAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICAgICAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAgICAgKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICAgICAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgLyogMSAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAgICAgKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAgICAgKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyoqXFxuICAgICAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICAgICAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAgICAgKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICAgICAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICAgICAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gICAgICovXFxuXFxuZmllbGRzZXQge1xcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcbn1cXG5cXG4vKipcXG4gICAgICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gICAgICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAgICAgKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICAgICAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICAgKi9cXG5cXG5sZWdlbmQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXFxuICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cXG59XFxuXFxuLyoqXFxuICAgICAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICAgICAqL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICAgICAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAgICAgKi9cXG5cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICAgICAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAgICAgKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICAgICAqL1xcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgICAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gICAgICovXFxuXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAgICAgKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gICAgICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICAgICAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgICAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gICAgICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICAgICAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICAgICAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gICAgICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICAgICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxuICAgICAqL1xcblxcbmRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICAgICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gICAgICovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qIE1pc2NcXG4gICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAgICAgKi9cXG5cXG50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKipcXG4gICAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICAgICAqL1xcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEJveCBzaXppbmcgcnVsZXMgKi9cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gKi9cXG5ib2R5LFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbnAsXFxuZmlndXJlLFxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiBSZW1vdmUgbGlzdCBzdHlsZXMgb24gdWwsIG9sIGVsZW1lbnRzIHdpdGggYSBsaXN0IHJvbGUsIHdoaWNoIHN1Z2dlc3RzIGRlZmF1bHQgc3R5bGluZyB3aWxsIGJlIHJlbW92ZWQgKi9cXG51bFtyb2xlPVxcXCJsaXN0XFxcIl0sXFxub2xbcm9sZT1cXFwibGlzdFxcXCJdIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIFNldCBjb3JlIHJvb3QgZGVmYXVsdHMgKi9cXG5odG1sOmZvY3VzLXdpdGhpbiB7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuLyogU2V0IGNvcmUgYm9keSBkZWZhdWx0cyAqL1xcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbi8qIEEgZWxlbWVudHMgdGhhdCBkb24ndCBoYXZlIGEgY2xhc3MgZ2V0IGRlZmF1bHQgc3R5bGVzICovXFxuYTpub3QoW2NsYXNzXSkge1xcbiAgdGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBhdXRvO1xcbn1cXG5cXG4vKiBNYWtlIGltYWdlcyBlYXNpZXIgdG8gd29yayB3aXRoICovXFxuaW1nLFxcbnBpY3R1cmUge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qIEluaGVyaXQgZm9udHMgZm9yIGlucHV0cyBhbmQgYnV0dG9ucyAqL1xcbmlucHV0LFxcbmJ1dHRvbixcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxuXFxuLyogUmVtb3ZlIGFsbCBhbmltYXRpb25zLCB0cmFuc2l0aW9ucyBhbmQgc21vb3RoIHNjcm9sbCBmb3IgcGVvcGxlIHRoYXQgcHJlZmVyIG5vdCB0byBzZWUgdGhlbSAqL1xcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XFxuICBodG1sOmZvY3VzLXdpdGhpbiB7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0bztcXG4gIH1cXG5cXG4gICosXFxuICAqOjpiZWZvcmUsXFxuICAqOjphZnRlciB7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3Jlc2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxxQkFBcUI7QUFDckI7OztFQUdFLHNCQUFzQjtBQUN4Qjs7QUFFQSwwQkFBMEI7QUFDMUI7Ozs7Ozs7Ozs7RUFVRSxTQUFTO0FBQ1g7O0FBRUEsMkdBQTJHO0FBQzNHOztFQUVFLGdCQUFnQjtBQUNsQjs7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0UsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixnQkFBZ0I7QUFDbEI7O0FBRUEsMERBQTBEO0FBQzFEO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBLG9DQUFvQztBQUNwQzs7RUFFRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQSx5Q0FBeUM7QUFDekM7Ozs7RUFJRSxhQUFhO0FBQ2Y7O0FBRUEsZ0dBQWdHO0FBQ2hHO0VBQ0U7SUFDRSxxQkFBcUI7RUFDdkI7O0VBRUE7OztJQUdFLHFDQUFxQztJQUNyQyx1Q0FBdUM7SUFDdkMsc0NBQXNDO0lBQ3RDLGdDQUFnQztFQUNsQztBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEJveCBzaXppbmcgcnVsZXMgKi9cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gKi9cXG5ib2R5LFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbnAsXFxuZmlndXJlLFxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiBSZW1vdmUgbGlzdCBzdHlsZXMgb24gdWwsIG9sIGVsZW1lbnRzIHdpdGggYSBsaXN0IHJvbGUsIHdoaWNoIHN1Z2dlc3RzIGRlZmF1bHQgc3R5bGluZyB3aWxsIGJlIHJlbW92ZWQgKi9cXG51bFtyb2xlPVxcXCJsaXN0XFxcIl0sXFxub2xbcm9sZT1cXFwibGlzdFxcXCJdIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIFNldCBjb3JlIHJvb3QgZGVmYXVsdHMgKi9cXG5odG1sOmZvY3VzLXdpdGhpbiB7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuLyogU2V0IGNvcmUgYm9keSBkZWZhdWx0cyAqL1xcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbi8qIEEgZWxlbWVudHMgdGhhdCBkb24ndCBoYXZlIGEgY2xhc3MgZ2V0IGRlZmF1bHQgc3R5bGVzICovXFxuYTpub3QoW2NsYXNzXSkge1xcbiAgdGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBhdXRvO1xcbn1cXG5cXG4vKiBNYWtlIGltYWdlcyBlYXNpZXIgdG8gd29yayB3aXRoICovXFxuaW1nLFxcbnBpY3R1cmUge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qIEluaGVyaXQgZm9udHMgZm9yIGlucHV0cyBhbmQgYnV0dG9ucyAqL1xcbmlucHV0LFxcbmJ1dHRvbixcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxuXFxuLyogUmVtb3ZlIGFsbCBhbmltYXRpb25zLCB0cmFuc2l0aW9ucyBhbmQgc21vb3RoIHNjcm9sbCBmb3IgcGVvcGxlIHRoYXQgcHJlZmVyIG5vdCB0byBzZWUgdGhlbSAqL1xcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XFxuICBodG1sOmZvY3VzLXdpdGhpbiB7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0bztcXG4gIH1cXG5cXG4gICosXFxuICAqOjpiZWZvcmUsXFxuICAqOjphZnRlciB7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmgxIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiA5NSU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiAwcHggMTVweCAzMHB4IHJnYigwIDAgMCAvIDE1JSk7XFxufVxcblxcbi5pbnB1dC1tb2RhbCB7XFxuICB3aWR0aDogOTUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG5oMiB7XFxuICB3aWR0aDogOTUlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIDAuMDcpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG5oMyB7XFxuICB3aWR0aDogOTUlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgYW5pbWF0aW9uOiBwbGFjZS1zaGlwLW1lc3NhZ2UtYmxpbmsgMnMgaW5maW5pdGUgZWFzZS1pbiBhbHRlcm5hdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgcGxhY2Utc2hpcC1tZXNzYWdlLWJsaW5rIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBjb2xvcjogI2UxYmVlNztcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMC4zO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICB9XFxufVxcblxcbi5pbnB1dC1tb2RhbCAucmVhZHksXFxuLmlucHV0LW1vZGFsIC5yb3RhdGUge1xcbiAgd2lkdGg6IDM1JTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ucmVhZHkge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBvcGFjaXR5OiAwLjU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYmVlO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ucmVhZHkuYWN0aXZlIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbiAgb3BhY2l0eTogMTtcXG4gIGFuaW1hdGlvbjogcmVhZHktYnV0dG9uIDJzIGluZmluaXRlO1xcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5yZWFkeS5hY3RpdmU6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJlYWR5LWJ1dHRvbiB7XFxuICAwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3ODQ2ODI7XFxuICB9XFxuICAyMCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODM0Yzg5O1xcbiAgfVxcbiAgODAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MwOWNjNDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlN2YwO1xcbiAgfVxcbn1cXG5cXG4ucm90YXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMzEsIDE0Myk7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5pbnB1dC1tb2RhbCAuaG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyOCwgMTI4LCAxMjgsIDAuNik7XFxufVxcblxcbi5pbnB1dC1tb2RhbCAuc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4uaW5wdXQtbW9kYWwgLnJlZCxcXG4uaW5wdXQtbW9kYWwgLnJlZC5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjUzNTA7XFxufVxcblxcbi5pbnB1dHMtZ2FtZWJvYXJkIHtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLmdhbWVib2FyZHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxdnc7XFxuICB3aWR0aDogOTUlO1xcbn1cXG5cXG4ucGxheWVyLXNlY3Rpb24ge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucGxheWVyLWhlYWRlciB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgd2lkdGg6IDk1JTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzcsIDIzMSwgMjQ2LCAwLjUpO1xcbn1cXG5cXG4ucGxheWVyLW9uZS1tZXNzYWdlLFxcbi5wbGF5ZXItdHdvLW1lc3NhZ2Uge1xcbiAgd2lkdGg6IDk1JTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzcsIDIzMSwgMjQ2LCAwLjEpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnBsYXllci1vbmUtbWVzc2FnZS5taXNzLFxcbi5wbGF5ZXItdHdvLW1lc3NhZ2UubWlzcyB7XFxuICBjb2xvcjogI2E3ZmZlYjtcXG59XFxuXFxuLnBsYXllci1vbmUtbWVzc2FnZS5oaXQsXFxuLnBsYXllci10d28tbWVzc2FnZS5oaXQge1xcbiAgY29sb3I6ICNjZTkzZDg7XFxufVxcblxcbi5nYW1lYm9hcmRzIC5wbGF5ZXItb25lLWdhbWVib2FyZCxcXG4uZ2FtZWJvYXJkcyAucGxheWVyLXR3by1nYW1lYm9hcmQsXFxuLmlucHV0cy1nYW1lYm9hcmQge1xcbiAgd2lkdGg6IDk1JTtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICByb3ctZ2FwOiAycHg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5wbGF5ZXItb25lLWdhbWVib2FyZCAucm93cyxcXG4ucGxheWVyLXR3by1nYW1lYm9hcmQgLnJvd3MsXFxuLmlucHV0cy1nYW1lYm9hcmQgLnJvd3Mge1xcbiAgZmxleDogMTtcXG4gIGdhcDogNHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuXFxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIC5jb2x1bW5zLFxcbi5wbGF5ZXItdHdvLWdhbWVib2FyZCAuY29sdW1ucyB7XFxuICBmbGV4OiAxO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2QxYzRlOTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDIyOSwgMjQ1LCAwLjEpO1xcbn1cXG5cXG4uaW5wdXRzLWdhbWVib2FyZCAuY29sdW1ucyB7XFxuICBmbGV4OiAxO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxufVxcblxcbi5wbGF5ZXItb25lLWdhbWVib2FyZCAucm93cyAuY29sdW1ucy5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ucGxheWVyLW9uZS1nYW1lYm9hcmQgLnJvd3MgLmNvbHVtbnMuc2hpcC5oaXQsXFxuLnBsYXllci10d28tZ2FtZWJvYXJkIC5yb3dzIC5jb2x1bW5zLnNoaXAuaGl0IHtcXG4gIGJhY2tncm91bmQ6ICM1ZTM1YjE7XFxufVxcblxcbi5wbGF5ZXItb25lLWdhbWVib2FyZCAucm93cyAuY29sdW1ucy5oaXQsXFxuLnBsYXllci10d28tZ2FtZWJvYXJkIC5yb3dzIC5jb2x1bW5zLmhpdCB7XFxuICBiYWNrZ3JvdW5kOiAjYTdmZmViO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBvcGFjaXR5OiAwLjc7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmdhbWUtZW5kLW1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5nYW1lLWVuZC1tb2RhbC1jb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjkpO1xcbiAgbWFyZ2luOiAxNSUgYXV0bztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgd2lkdGg6IDgwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmdhbWUtZW5kLW1vZGFsLWNvbnRlbnQgLnJlc3RhcnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDEzMSwgMTQzKTtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uY2xvc2Uge1xcbiAgY29sb3I6ICNhYWE7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNsb3NlOmhvdmVyLFxcbi5jbG9zZTpmb2N1cyB7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5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O0VBQ2QsOEJBQThCO0VBQzlCLG9DQUFvQztFQUNwQyx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaDEge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDk1JTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAwLjA1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDBweCAxNXB4IDMwcHggcmdiKDAgMCAwIC8gMTUlKTtcXG59XFxuXFxuLmlucHV0LW1vZGFsIHtcXG4gIHdpZHRoOiA5NSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbmgyIHtcXG4gIHdpZHRoOiA5NSU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC4wNyk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbmgzIHtcXG4gIHdpZHRoOiA5NSU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBhbmltYXRpb246IHBsYWNlLXNoaXAtbWVzc2FnZS1ibGluayAycyBpbmZpbml0ZSBlYXNlLWluIGFsdGVybmF0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBwbGFjZS1zaGlwLW1lc3NhZ2UtYmxpbmsge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGNvbG9yOiAjZTFiZWU3O1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwLjM7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gIH1cXG59XFxuXFxuLmlucHV0LW1vZGFsIC5yZWFkeSxcXG4uaW5wdXQtbW9kYWwgLnJvdGF0ZSB7XFxuICB3aWR0aDogMzUlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5yZWFkeSB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmViZWU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5yZWFkeS5hY3RpdmUge1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICBvcGFjaXR5OiAxO1xcbiAgYW5pbWF0aW9uOiByZWFkeS1idXR0b24gMnMgaW5maW5pdGU7XFxuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnJlYWR5LmFjdGl2ZTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbkBrZXlmcmFtZXMgcmVhZHktYnV0dG9uIHtcXG4gIDAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc4NDY4MjtcXG4gIH1cXG4gIDIwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MzRjODk7XFxuICB9XFxuICA4MCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzA5Y2M0O1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmU3ZjA7XFxuICB9XFxufVxcblxcbi5yb3RhdGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDEzMSwgMTQzKTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmlucHV0LW1vZGFsIC5ob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI4LCAxMjgsIDEyOCwgMC42KTtcXG59XFxuXFxuLmlucHV0LW1vZGFsIC5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbi5pbnB1dC1tb2RhbCAucmVkLFxcbi5pbnB1dC1tb2RhbCAucmVkLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmNTM1MDtcXG59XFxuXFxuLmlucHV0cy1nYW1lYm9hcmQge1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4uZ2FtZWJvYXJkcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDF2dztcXG4gIHdpZHRoOiA5NSU7XFxufVxcblxcbi5wbGF5ZXItc2VjdGlvbiB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wbGF5ZXItaGVhZGVyIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICB3aWR0aDogOTUlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNywgMjMxLCAyNDYsIDAuNSk7XFxufVxcblxcbi5wbGF5ZXItb25lLW1lc3NhZ2UsXFxuLnBsYXllci10d28tbWVzc2FnZSB7XFxuICB3aWR0aDogOTUlO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNywgMjMxLCAyNDYsIDAuMSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4ucGxheWVyLW9uZS1tZXNzYWdlLm1pc3MsXFxuLnBsYXllci10d28tbWVzc2FnZS5taXNzIHtcXG4gIGNvbG9yOiAjYTdmZmViO1xcbn1cXG5cXG4ucGxheWVyLW9uZS1tZXNzYWdlLmhpdCxcXG4ucGxheWVyLXR3by1tZXNzYWdlLmhpdCB7XFxuICBjb2xvcjogI2NlOTNkODtcXG59XFxuXFxuLmdhbWVib2FyZHMgLnBsYXllci1vbmUtZ2FtZWJvYXJkLFxcbi5nYW1lYm9hcmRzIC5wbGF5ZXItdHdvLWdhbWVib2FyZCxcXG4uaW5wdXRzLWdhbWVib2FyZCB7XFxuICB3aWR0aDogOTUlO1xcbiAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHJvdy1nYXA6IDJweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIC5yb3dzLFxcbi5wbGF5ZXItdHdvLWdhbWVib2FyZCAucm93cyxcXG4uaW5wdXRzLWdhbWVib2FyZCAucm93cyB7XFxuICBmbGV4OiAxO1xcbiAgZ2FwOiA0cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4ucGxheWVyLW9uZS1nYW1lYm9hcmQgLmNvbHVtbnMsXFxuLnBsYXllci10d28tZ2FtZWJvYXJkIC5jb2x1bW5zIHtcXG4gIGZsZXg6IDE7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDFjNGU5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMjI5LCAyNDUsIDAuMSk7XFxufVxcblxcbi5pbnB1dHMtZ2FtZWJvYXJkIC5jb2x1bW5zIHtcXG4gIGZsZXg6IDE7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG59XFxuXFxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIC5yb3dzIC5jb2x1bW5zLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5wbGF5ZXItb25lLWdhbWVib2FyZCAucm93cyAuY29sdW1ucy5zaGlwLmhpdCxcXG4ucGxheWVyLXR3by1nYW1lYm9hcmQgLnJvd3MgLmNvbHVtbnMuc2hpcC5oaXQge1xcbiAgYmFja2dyb3VuZDogIzVlMzViMTtcXG59XFxuXFxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIC5yb3dzIC5jb2x1bW5zLmhpdCxcXG4ucGxheWVyLXR3by1nYW1lYm9hcmQgLnJvd3MgLmNvbHVtbnMuaGl0IHtcXG4gIGJhY2tncm91bmQ6ICNhN2ZmZWI7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIG9wYWNpdHk6IDAuNztcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uZ2FtZS1lbmQtbW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDE7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmdhbWUtZW5kLW1vZGFsLWNvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuOSk7XFxuICBtYXJnaW46IDE1JSBhdXRvO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICB3aWR0aDogODAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZ2FtZS1lbmQtbW9kYWwtY29udGVudCAucmVzdGFydCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTMxLCAxNDMpO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5jbG9zZSB7XFxuICBjb2xvcjogI2FhYTtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY2xvc2U6aG92ZXIsXFxuLmNsb3NlOmZvY3VzIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNbX2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgbW9kdWxlcy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pMl0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm1hbGl6ZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm1hbGl6ZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGVzL3Jlc2V0LmNzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMvbm9ybWFsaXplLmNzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMvc3R5bGUuY3NzXCI7XG5pbXBvcnQgZ2FtZU1vZHVsZU9iamVjdCBmcm9tIFwiLi9tb2R1bGVzL0dhbWVcIjtcbmltcG9ydCBET01Nb2R1bGVPYmplY3QgZnJvbSBcIi4vbW9kdWxlcy9ET01cIjtcblxuRE9NTW9kdWxlT2JqZWN0LmV4ZWN1dGUoKTtcbmdhbWVNb2R1bGVPYmplY3QuZXhlY3V0ZSgpO1xuIl0sIm5hbWVzIjpbIkRPTUZhY3RvcnkiLCJwdWJzdWIiLCJyZWNlaXZlQ29tcHV0ZXJBdHRhY2siLCJ4IiwieSIsInBsYXllckJvYXJkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicm93IiwiY29sdW1uIiwiY2xhc3NMaXN0IiwiYWRkIiwic2VuZFBsYXllckF0dGFjayIsImV2ZW50IiwidGFyZ2V0IiwiY29udGFpbnMiLCJwYXJlbnROb2RlIiwiZ2V0QXR0cmlidXRlIiwicHVibGlzaCIsImNyZWF0ZUdhbWVib2FyZCIsIm5hbWUiLCJib2FyZCIsImdyaWQiLCJjbGFzc05hbWUiLCJpIiwiaiIsImxlbmd0aCIsImFwcGVuZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhcHBlbmRHYW1lYm9hcmRzIiwiY29tcHV0ZXJCb2FyZCIsImdhbWVib2FyZHMiLCJwbGF5ZXJPbmVTZWN0aW9uIiwicGxheWVyT25lSGVhZGVyIiwidGV4dENvbnRlbnQiLCJwbGF5ZXJPbmVNZXNzYWdlIiwicGxheWVyVHdvU2VjdGlvbiIsInBsYXllclR3b0hlYWRlciIsInBsYXllclR3b01lc3NhZ2UiLCJyZW5kZXJJbnB1dE1vZGFsIiwiaW5wdXRNb2RhbERpdiIsImlucHV0R3JpZCIsImluc2VydEJlZm9yZSIsImlucHV0U2hpcHMiLCJjb2x1bW5zIiwicXVlcnlTZWxlY3RvckFsbCIsInJvdGF0ZSIsImhvcml6b250YWwiLCJzaGlwcyIsImFkZGVkIiwibW91c2VlbnRlckNhbGxiYWNrSG9yaXpvbnRhbCIsIk51bWJlciIsImNlbGxzIiwiY3VycmVudFRhcmdldCIsInNoaXBMZW5ndGgiLCJjb2wiLCJwdXNoIiwic29tZSIsIml0ZW0iLCJmb3JFYWNoIiwic2V0QXR0cmlidXRlIiwibW91c2VlbnRlckNhbGxiYWNrVmVydGljYWwiLCJmb2N1c1JvdyIsIm1vdXNlbGVhdmVDYWxsYmFjayIsInJlbW92ZSIsInNoaXBzUmVzZXQiLCJoaWRlSW5wdXRNb2RhbCIsInVuZGVmaW5lZCIsImlucHV0TW9kYWwiLCJzdHlsZSIsImRpc3BsYXkiLCJhY3RpdmF0ZVJlYWR5RGl2IiwicmVhZHlEaXYiLCJjbGlja0NhbGxiYWNrIiwic2hpcFRvQWRkIiwiZmluZCIsInNoaXAiLCJjZWxsIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNoaXBUb0FkZEluZGV4IiwiaW5kZXhPZiIsIm9yaWVudGF0aW9uIiwicmVxdWlyZWQiLCJwbGFjZVNoaXBNZXNzYWdlRGl2IiwicmVtb3ZlUGxheWVyU2VjdGlvbnMiLCJwbGF5ZXJTZWN0aW9ucyIsInNlY3Rpb24iLCJyZXN0YXJ0R2FtZSIsImdhbWVFbmRNb2RhbCIsIm9wZW5HYW1lRW5kTW9kYWwiLCJ2aWN0b3IiLCJ0ZXh0IiwicmVzdGFydCIsImNsb3NlIiwic2hvd0FsZXJ0IiwicmVuZGVyQXR0YWNrTWVzc2FnZSIsInJlY2lwaWVudCIsIm1lc3NhZ2UiLCJtZXNzYWdlR2VuZXJhdG9yIiwicGxheWVyIiwibXNnIiwibWVzc2FnZURpdiIsIkRPTU1vZHVsZU9iamVjdCIsImV4ZWN1dGUiLCJzdWJzY3JpYmUiLCJlbGVtZW50IiwiYXR0cmlidXRlcyIsIm5ld0VsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYXR0cmlidXRlIiwidG9TdHJpbmciLCJpbmNsdWRlcyIsIlNoaXAiLCJHYW1lYm9hcmQiLCJQbGF5ZXIiLCJjb21wdXRlciIsImFkZFNoaXBzIiwiZmxlZXQiLCJhdCIsImF1dG9BZGQiLCJjb21wdXRlckF0dGFja1NoaXAiLCJhdHRhY2siLCJhdXRvIiwiYXJlQWxsU2hpcHNTdW5rIiwibGF0ZXN0QXR0YWNrU3RhdHVzIiwicGxheWVyQXR0YWNrU2hpcCIsImdhbWVNb2R1bGVPYmplY3QiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJzaGlwc0FycmF5IiwiY2hlY2tJZlNoaXBDYW5CZUFkZGVkIiwicmVxdWlyZWRTcGFjZSIsInNsaWNlIiwiZXZlcnkiLCJhZGRTaGlwSW5BcnJheSIsImFkZFNoaXBPbkJvYXJkIiwiYXR0YWNrU2hpcCIsImhpdFBvc2l0aW9uIiwidGFyZ2V0QXJlYUhvcml6b250YWwiLCJzaGlwTGVmdFNpZGUiLCJmaWx0ZXIiLCJ0YXJnZXRBcmVhVmVydGljYWwiLCJzaGlwVXBwZXJTaWRlIiwiaXNIaXRBdCIsImhpdCIsInJlY2VpdmVBdHRhY2siLCJpc1N1bmsiLCJ0YXJnZXRBcmVhIiwidXNlVGFyZ2V0QXJlYSIsInNwbGljZSIsImVuZW15IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwib3JpZW50YXRpb25zIiwiZXZlbnRzIiwiZXZlbnROYW1lIiwiZGF0YSIsImNhbGxiYWNrIiwiaXNBcnJheSIsInNoaXBBcnJheSIsInBvc2l0aW9uIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9