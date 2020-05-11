(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("ActionSDK", [], factory);
	else if(typeof exports === 'object')
		exports["ActionSDK"] = factory();
	else
		root["ActionSDK"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../ActionCommon/node_modules/uuid/index.js":
/*!**************************************************!*\
  !*** ../ActionCommon/node_modules/uuid/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(/*! ./v1 */ "../ActionCommon/node_modules/uuid/v1.js");
var v4 = __webpack_require__(/*! ./v4 */ "../ActionCommon/node_modules/uuid/v4.js");

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),

/***/ "../ActionCommon/node_modules/uuid/lib/bytesToUuid.js":
/*!************************************************************!*\
  !*** ../ActionCommon/node_modules/uuid/lib/bytesToUuid.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "../ActionCommon/node_modules/uuid/lib/rng-browser.js":
/*!************************************************************!*\
  !*** ../ActionCommon/node_modules/uuid/lib/rng-browser.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "../ActionCommon/node_modules/uuid/v1.js":
/*!***********************************************!*\
  !*** ../ActionCommon/node_modules/uuid/v1.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "../ActionCommon/node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "../ActionCommon/node_modules/uuid/lib/bytesToUuid.js");

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),

/***/ "../ActionCommon/node_modules/uuid/v4.js":
/*!***********************************************!*\
  !*** ../ActionCommon/node_modules/uuid/v4.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "../ActionCommon/node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "../ActionCommon/node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "../ActionCommon/src/AMSClient.ts":
/*!****************************************!*\
  !*** ../ActionCommon/src/AMSClient.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(/*! ./Utils */ "../ActionCommon/src/Utils.ts");
var IMAGE_OBJECT_TYPE = "pish/image";
// Task: 3726644 to remove this
var baseUrl = "https://absharstorage.blob.core.windows.net/createfromblob1/";
var AMSClient = /** @class */ (function () {
    function AMSClient() {
    }
    AMSClient.uploadBlob = function (imageObj, sasToken) {
        return __awaiter(this, void 0, void 0, function () {
            var blob, fileName, url, imageData, uploadResponse, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, fetch(imageObj.url).then(function (r) { return r.blob(); })];
                    case 1:
                        blob = _a.sent();
                        fileName = imageObj.id;
                        url = "" + baseUrl + fileName + sasToken;
                        return [4 /*yield*/, Utils_1.Utils.readBlobAsync(blob)];
                    case 2:
                        imageData = _a.sent();
                        return [4 /*yield*/, fetch(url, {
                                method: "PUT",
                                headers: {
                                    "Content-Type": "image/png",
                                    "x-ms-client-version": "2015-02-21",
                                    "x-ms-date": new Date().toString(),
                                    "x-ms-blob-type": "BlockBlob"
                                },
                                body: imageData
                            })];
                    case 3:
                        uploadResponse = _a.sent();
                        if (uploadResponse.ok) {
                            return [2 /*return*/, "" + baseUrl + fileName];
                        }
                        else {
                            return [2 /*return*/, Promise.reject("Error in uploadBlob")];
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        return [2 /*return*/, Promise.reject( true ? e_1.errorMessage : undefined)];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return AMSClient;
}());
exports.AMSClient = AMSClient;


/***/ }),

/***/ "../ActionCommon/src/ActionEnvironment.ts":
/*!************************************************!*\
  !*** ../ActionCommon/src/ActionEnvironment.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ActionEnvironment;
(function (ActionEnvironment) {
    ActionEnvironment["None"] = "None";
    ActionEnvironment["Local"] = "Local";
    ActionEnvironment["Alpha"] = "Alpha";
    ActionEnvironment["Preprod"] = "Preprod";
    ActionEnvironment["Prod"] = "Prod";
})(ActionEnvironment = exports.ActionEnvironment || (exports.ActionEnvironment = {}));


/***/ }),

/***/ "../ActionCommon/src/ActionError.ts":
/*!******************************************!*\
  !*** ../ActionCommon/src/ActionError.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ActionErrorCode;
(function (ActionErrorCode) {
    ActionErrorCode["Unknown"] = "Unknown";
    ActionErrorCode["Unauthorized"] = "Unauthorized";
    ActionErrorCode["ServerError"] = "ServerError";
    ActionErrorCode["BadRequest"] = "BadRequest";
    ActionErrorCode["UnsupportedApi"] = "UnsupportedApi";
    ActionErrorCode["InvalidOperation"] = "InvalidOperation";
    ActionErrorCode["IOException"] = "IOException";
})(ActionErrorCode = exports.ActionErrorCode || (exports.ActionErrorCode = {}));


/***/ }),

/***/ "../ActionCommon/src/ActionSdkCommand.ts":
/*!***********************************************!*\
  !*** ../ActionCommon/src/ActionSdkCommand.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ActionSdkCommand;
(function (ActionSdkCommand) {
    ActionSdkCommand["CreateActionInstance"] = "CreateActionInstance";
    ActionSdkCommand["CreateActionInstanceWithRows"] = "CreateActionInstanceWithRows";
    ActionSdkCommand["GetActionInstance"] = "GetActionInstance";
    ActionSdkCommand["UpdateActionInstance"] = "UpdateActionInstance";
    ActionSdkCommand["DeleteActionInstance"] = "DeleteActionInstance";
    ActionSdkCommand["SendActionInstanceReminder"] = "SendActionInstanceReminder";
    ActionSdkCommand["CreateOrUpdateActionInstanceRows"] = "CreateOrUpdateActionInstanceRows";
    ActionSdkCommand["GetActionInstanceRow"] = "GetActionInstanceRow";
    ActionSdkCommand["GetActionInstanceRows"] = "GetActionInstanceRows";
    ActionSdkCommand["DeleteActionInstanceRow"] = "DeleteActionInstanceRow";
    ActionSdkCommand["GetActionInstanceSummary"] = "GetActionInstanceSummary";
    ActionSdkCommand["DownloadActionInstanceResult"] = "DownloadActionInstanceResult";
    ActionSdkCommand["GetActionInstanceNonResponoders"] = "GetActionInstanceNonResponoders";
    ActionSdkCommand["GetConversationMembers"] = "GetConversationMembers";
    ActionSdkCommand["GetConversationMembersCount"] = "GetConversationMembersCount";
    ActionSdkCommand["GetUserProfiles"] = "GetUserProfiles";
    ActionSdkCommand["GetUserProfilePhotos"] = "GetUserProfilePhotos";
    ActionSdkCommand["SetNavBarMenuItems"] = "SetNavBarMenuItems";
    ActionSdkCommand["UploadMedia"] = "UploadMedia";
    ActionSdkCommand["DismissScreen"] = "DismissScreen";
    ActionSdkCommand["GetCurrentContext"] = "GetCurrentContext";
    ActionSdkCommand["LogTelemetry"] = "LogTelemetry";
    ActionSdkCommand["GetLocalizedActionStrings"] = "GetLocalizedActionStrings";
    ActionSdkCommand["ShowDiagnosticView"] = "ShowDiagnosticView";
    ActionSdkCommand["HideLoadingIndicator"] = "HideLoadingIndicator";
    ActionSdkCommand["ActionViewDidLoad"] = "ActionViewDidLoad";
    ActionSdkCommand["RegisterBackButtonHandler"] = "RegisterBackButtonHandler";
    ActionSdkCommand["GetTemplateActions"] = "GetTemplateActions";
    ActionSdkCommand["GetActionInstances"] = "GetActionInstances";
    ActionSdkCommand["SaveActionInstanceDraft"] = "SaveActionInstanceDraft";
    ActionSdkCommand["UpdateActionInstanceDraft"] = "UpdateActionInstanceDraft";
    ActionSdkCommand["GetDraftActionInstances"] = "GetDraftActionInstances";
    ActionSdkCommand["PromoteDraftToAction"] = "PromoteDraftToAction";
    ActionSdkCommand["CreateActionInstanceNoBot"] = "CreateActionInstanceNoBot";
    ActionSdkCommand["GetJoinedTeams"] = "GetJoinedTeams";
    ActionSdkCommand["GetListOfChannelsForGroups"] = "GetListOfChannelsForGroups";
})(ActionSdkCommand = exports.ActionSdkCommand || (exports.ActionSdkCommand = {}));


/***/ }),

/***/ "../ActionCommon/src/ActionUtils.ts":
/*!******************************************!*\
  !*** ../ActionCommon/src/ActionUtils.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ActionInstancePropertyType_1 = __webpack_require__(/*! ./model/ActionInstancePropertyType */ "../ActionCommon/src/model/ActionInstancePropertyType.ts");
var Visibility_1 = __webpack_require__(/*! ./model/Visibility */ "../ActionCommon/src/model/Visibility.ts");
var Utils_1 = __webpack_require__(/*! ./Utils */ "../ActionCommon/src/Utils.ts");
var ActionUtils;
(function (ActionUtils) {
    function getActionInstanceProperty(actionInstance, propertyName) {
        if (actionInstance.properties && actionInstance.properties.length > 0) {
            for (var _i = 0, _a = actionInstance.properties; _i < _a.length; _i++) {
                var property = _a[_i];
                if (property.name == propertyName) {
                    return property;
                }
            }
        }
        return null;
    }
    ActionUtils.getActionInstanceProperty = getActionInstanceProperty;
    function prepareActionInstance(actionInstance, actionContext) {
        if (Utils_1.Utils.isEmptyString(actionInstance.id)) {
            actionInstance.id = Utils_1.Utils.generateGUID();
            actionInstance.createTime = Date.now();
        }
        if (Utils_1.Utils.isEmptyObject(actionInstance.conversationInfo)) {
            actionInstance.conversationInfo = actionContext.conversationInfo;
        }
        actionInstance.updateTime = Date.now();
        actionInstance.creatorId = actionContext.userId;
        actionInstance.clientType = actionContext.hostType;
        actionInstance.actionPackageId = actionContext.actionPackageId;
        actionInstance.version = actionInstance.version || 1;
        actionInstance.canUserEditRows = actionInstance.canUserEditRows || true;
        actionInstance.canUserAddMultipleRows = actionInstance.canUserAddMultipleRows || false;
        actionInstance.rowsVisibility = actionInstance.rowsVisibility || Visibility_1.Visibility.All;
        actionInstance.sendReminderVisibility = actionInstance.sendReminderVisibility || Visibility_1.Visibility.Sender;
        actionInstance.isAnonymous = actionInstance.isAnonymous || false;
        if (getActionInstanceProperty(actionInstance, "Locale") == null) {
            actionInstance.properties = actionInstance.properties || [];
            actionInstance.properties.push({
                name: "Locale",
                type: ActionInstancePropertyType_1.ActionInstancePropertyType.Text,
                value: actionContext.locale
            });
        }
    }
    ActionUtils.prepareActionInstance = prepareActionInstance;
    function prepareActionInstanceRow(actionInstanceRow) {
        if (Utils_1.Utils.isEmptyString(actionInstanceRow.id)) {
            actionInstanceRow.id = Utils_1.Utils.generateGUID();
            actionInstanceRow.createTime = Date.now();
        }
        actionInstanceRow.updateTime = Date.now();
        actionInstanceRow.isAnonymous = actionInstanceRow.isAnonymous || false;
        if (actionInstanceRow.isAnonymous) {
            actionInstanceRow.creatorId = undefined;
        }
    }
    ActionUtils.prepareActionInstanceRow = prepareActionInstanceRow;
    function prepareActionInstanceRows(actionInstanceRows) {
        for (var _i = 0, actionInstanceRows_1 = actionInstanceRows; _i < actionInstanceRows_1.length; _i++) {
            var actionInstanceRow = actionInstanceRows_1[_i];
            this.prepareActionInstanceRow(actionInstanceRow);
        }
    }
    ActionUtils.prepareActionInstanceRows = prepareActionInstanceRows;
})(ActionUtils = exports.ActionUtils || (exports.ActionUtils = {}));


/***/ }),

/***/ "../ActionCommon/src/HttpStatusCode.ts":
/*!*********************************************!*\
  !*** ../ActionCommon/src/HttpStatusCode.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HttpStatusCode;
(function (HttpStatusCode) {
    HttpStatusCode[HttpStatusCode["Unauthorized"] = 401] = "Unauthorized";
    HttpStatusCode[HttpStatusCode["NotFound"] = 404] = "NotFound";
})(HttpStatusCode = exports.HttpStatusCode || (exports.HttpStatusCode = {}));


/***/ }),

/***/ "../ActionCommon/src/ILogger.ts":
/*!**************************************!*\
  !*** ../ActionCommon/src/ILogger.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LogLevel_1 = __webpack_require__(/*! ./LogLevel */ "../ActionCommon/src/LogLevel.ts");
var LogMetricState_1 = __webpack_require__(/*! ./LogMetricState */ "../ActionCommon/src/LogMetricState.ts");
var ActionError_1 = __webpack_require__(/*! ./ActionError */ "../ActionCommon/src/ActionError.ts");
/**
 * Each log statement will by default log the below properties:
 * CorrelationId
 * HostSessionId
 * HostClientType
 * TenantId
 * UserId
 * GroupId
 * GroupAADId
 * ActionPackageId
 * ActionViewName
 * ActionInstanceId
 * Locale
 * KasBaseUrl
 * KasBuildVersion
 */
var ILogger = /** @class */ (function () {
    function ILogger() {
    }
    /**
     * Category: ActionLogs
     * Priority: High
     * Api to log any error message
     */
    ILogger.logError = function (logTag, logMessage) {
        this.logInternal(LogLevel_1.LogLevel.Error, logTag, logMessage);
    };
    /**
     * Category: ActionLogs
     * Priority: Low
     * Api to log any warning message
     */
    ILogger.logWarning = function (logTag, logMessage) {
        this.logInternal(LogLevel_1.LogLevel.Warning, logTag, logMessage);
    };
    /**
     * Category: ActionLogs
     * Priority: Low
     * Api to log any informative message
     */
    ILogger.logInfo = function (logTag, logMessage) {
        this.logInternal(LogLevel_1.LogLevel.Info, logTag, logMessage);
    };
    /**
     * Category: ActionLogs
     * Priority: Low
     * Api to log any debug message - only applicable for dev builds
     */
    ILogger.logVerbose = function (logTag, logMessage) {
        this.logInternal(LogLevel_1.LogLevel.Verbose, logTag, logMessage);
    };
    /**
     * Category: None
     * Priority: None
     * Api to log any diagnostic message - only visible in diagnostic view
     */
    ILogger.logDiagnostic = function (logTag, logMessage) {
        this.logInternal(LogLevel_1.LogLevel.Diagnostic, logTag, logMessage);
    };
    /**
     * Category: ActionEvents
     * Priority: Normal
     * Api to log any event with custom properties
     */
    ILogger.logEvent = function (eventName, eventProps) {
        if (eventProps === void 0) { eventProps = null; }
        this.logEventInternal(eventName, eventProps);
    };
    /**
     * Category: ActionMetrics
     * Priority: Normal
     * Api to log a standalone metric along with its duration
     */
    ILogger.logMetric = function (metricName, metricDuration, metricProps) {
        if (metricProps === void 0) { metricProps = null; }
        this.logMetricInternal(LogMetricState_1.LogMetricState.Standalone, metricName, metricProps, metricDuration);
    };
    /**
     * Category: ActionMetrics
     * Priority: Normal
     * Api to log a metric start - duration can be logged in conjunction with an end marker
     */
    ILogger.logMetricStart = function (metricName, metricProps) {
        if (metricProps === void 0) { metricProps = null; }
        this.logMetricInternal(LogMetricState_1.LogMetricState.Start, metricName, metricProps);
    };
    /**
     * Category: ActionMetrics
     * Priority: Normal
     * Api to log metric end - works in conjunction with a start marker
     */
    ILogger.logMetricEnd = function (metricName, metricProps) {
        if (metricProps === void 0) { metricProps = null; }
        this.logMetricInternal(LogMetricState_1.LogMetricState.End, metricName, metricProps);
    };
    ////////////// Protected APIs //////////////
    ILogger.logInternal = function (logLevel, logTag, logMessage) {
        this.throwError();
    };
    ILogger.logEventInternal = function (eventName, eventProps) {
        if (eventProps === void 0) { eventProps = null; }
        this.throwError();
    };
    ILogger.logMetricInternal = function (metricState, metricName, metricProps, metricDuration) {
        if (metricProps === void 0) { metricProps = null; }
        if (metricDuration === void 0) { metricDuration = 0; }
        this.throwError();
    };
    ////////////// Private APIs //////////////
    ILogger.throwError = function () {
        var error = {
            errorCode: ActionError_1.ActionErrorCode.InvalidOperation,
            errorMessage: "Implement in derived class"
        };
        throw error;
    };
    return ILogger;
}());
exports.ILogger = ILogger;


/***/ }),

/***/ "../ActionCommon/src/LogCategory.ts":
/*!******************************************!*\
  !*** ../ActionCommon/src/LogCategory.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LogCategory;
(function (LogCategory) {
    LogCategory["ActionLogs"] = "ActionLogs";
    LogCategory["ActionEvents"] = "ActionEvents";
    LogCategory["ActionMetrics"] = "ActionMetrics";
    LogCategory["ActionExceptions"] = "ActionExceptions";
})(LogCategory = exports.LogCategory || (exports.LogCategory = {}));


/***/ }),

/***/ "../ActionCommon/src/LogLevel.ts":
/*!***************************************!*\
  !*** ../ActionCommon/src/LogLevel.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LogLevel;
(function (LogLevel) {
    LogLevel["Error"] = "Error";
    LogLevel["Warning"] = "Warning";
    LogLevel["Info"] = "Info";
    LogLevel["Verbose"] = "Verbose";
    LogLevel["Diagnostic"] = "Diagnostic";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));


/***/ }),

/***/ "../ActionCommon/src/LogMetric.ts":
/*!****************************************!*\
  !*** ../ActionCommon/src/LogMetric.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LogMetric;
(function (LogMetric) {
    LogMetric["WebApiCall"] = "WebApiCall";
    LogMetric["KasWebApiCall"] = "KasWebApiCall";
    LogMetric["ActionSdkApiCall"] = "ActionSdkApiCall";
    LogMetric["TeamsTokenFetch"] = "TeamsTokenFetch";
    LogMetric["ActionHostLoad"] = "ActionHostLoad";
    LogMetric["ActionViewLoad"] = "ActionViewLoad";
    LogMetric["ActionViewEngagement"] = "ActionViewEngagement";
})(LogMetric = exports.LogMetric || (exports.LogMetric = {}));


/***/ }),

/***/ "../ActionCommon/src/LogMetricState.ts":
/*!*********************************************!*\
  !*** ../ActionCommon/src/LogMetricState.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LogMetricState;
(function (LogMetricState) {
    LogMetricState["Start"] = "Start";
    LogMetricState["End"] = "End";
    LogMetricState["Standalone"] = "Standalone";
})(LogMetricState = exports.LogMetricState || (exports.LogMetricState = {}));


/***/ }),

/***/ "../ActionCommon/src/Utils.ts":
/*!************************************!*\
  !*** ../ActionCommon/src/Utils.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var ActionError_1 = __webpack_require__(/*! ./ActionError */ "../ActionCommon/src/ActionError.ts");
var uuid = __webpack_require__(/*! uuid */ "../ActionCommon/node_modules/uuid/index.js");
var Utils;
(function (Utils) {
    Utils.YEARS = "YEARS";
    Utils.MONTHS = "MONTHS";
    Utils.WEEKS = "WEEKS";
    Utils.DAYS = "DAYS";
    Utils.HOURS = "HOURS";
    Utils.MINUTES = "MINUTES";
    Utils.DEFAULT_LOCALE = "en";
    function parseUrlQueries(url) {
        if (isEmptyString(url) || url.indexOf("?") === -1) {
            return null;
        }
        var params = {};
        // Separate the queries part
        var queries = url.substr(url.indexOf("?") + 1);
        if (!isEmptyString(queries)) {
            // Decode the queries
            queries = decodeURIComponent(queries);
            // Split the queries to get key-value pairs
            var keyValuePairs = queries.split("&");
            for (var _i = 0, keyValuePairs_1 = keyValuePairs; _i < keyValuePairs_1.length; _i++) {
                var keyValuePair = keyValuePairs_1[_i];
                var keyValue = keyValuePair.split("=");
                if (!isEmptyString(keyValue[0]) && !isEmptyString(keyValue[1])) {
                    params[keyValue[0]] = keyValue[1];
                }
            }
        }
        return params;
    }
    Utils.parseUrlQueries = parseUrlQueries;
    function isValidJson(json) {
        try {
            JSON.parse(JSON.stringify(json));
            return true;
        }
        catch (e) {
            return false;
        }
    }
    Utils.isValidJson = isValidJson;
    // To avoid HTML injections, we sanitize all HTML tags
    // by replacing all '<' with '&lt;' and '>' with '&gt;'
    function sanitizeHtmlTags(str) {
        if (isEmptyString(str))
            return str;
        var tagsToReplace = {
            "<": "&lt;",
            ">": "&gt;"
        };
        var sanitizedString = str.replace(/[&<>]/g, function (tag) {
            return tagsToReplace[tag] || tag;
        });
        return sanitizedString;
    }
    Utils.sanitizeHtmlTags = sanitizeHtmlTags;
    function executeFunction(funcNameWithNamespaces, args) {
        if (args === void 0) { args = []; }
        var components = funcNameWithNamespaces.split(".");
        var func;
        for (var i = 0; i < components.length; i++) {
            var component = components[i];
            if (!func) {
                func = window[component];
            }
            else {
                func = func[component];
            }
        }
        func(args);
    }
    Utils.executeFunction = executeFunction;
    function replaceCharacterInString(str, oldChar, newChar) {
        return str.split(oldChar).join(newChar);
    }
    Utils.replaceCharacterInString = replaceCharacterInString;
    function jsonIsArray(json) {
        return Object.prototype.toString.call(json) === "[object Array]";
    }
    Utils.jsonIsArray = jsonIsArray;
    function isEmptyString(str) {
        return isEmptyObject(str);
    }
    Utils.isEmptyString = isEmptyString;
    function isEmptyObject(obj) {
        if (obj == undefined || obj == null) {
            return true;
        }
        var isEmpty = false;
        if (typeof obj === "number" || typeof obj === "boolean") {
            isEmpty = false;
        }
        else if (typeof obj === "string") {
            isEmpty = obj.trim().length == 0;
        }
        else if (Array.isArray(obj)) {
            isEmpty = obj.length == 0;
        }
        else if (typeof obj === "object") {
            if (isValidJson(obj)) {
                isEmpty = JSON.stringify(obj) == "{}";
            }
        }
        return isEmpty;
    }
    Utils.isEmptyObject = isEmptyObject;
    function parseJson(jsonString, defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        try {
            return JSON.parse(jsonString);
        }
        catch (e) {
            return defaultValue || {};
        }
    }
    Utils.parseJson = parseJson;
    function stringifyJson(obj) {
        try {
            if (isEmptyObject(obj)) {
                return null;
            }
            return JSON.stringify(obj);
        }
        catch (e) {
            return null;
        }
    }
    Utils.stringifyJson = stringifyJson;
    function getTimeRemaining(deadLineDate) {
        var now = new Date().getTime();
        var deadLineTime = deadLineDate.getTime();
        var minutes = 0;
        var hours = 0;
        var days = 0;
        var weeks = 0;
        var months = 0;
        var years = 0;
        var diff = Math.abs(deadLineTime - now);
        if (diff > 0) {
            var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var days = Math.floor((diff % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
            var weeks = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24 * 7));
            var months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
            var years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
        }
        return {
            YEARS: years,
            MONTHS: months,
            WEEKS: weeks,
            DAYS: days,
            HOURS: hours,
            MINUTES: minutes,
        };
    }
    Utils.getTimeRemaining = getTimeRemaining;
    function getDefaultExpiry(activeDays) {
        var date = new Date();
        date.setDate(date.getDate() + activeDays);
        // round off to next 30 minutes time multiple
        if (date.getMinutes() > 30) {
            date.setMinutes(0);
            date.setHours(date.getHours() + 1);
        }
        else {
            date.setMinutes(30);
        }
        return date;
    }
    Utils.getDefaultExpiry = getDefaultExpiry;
    function isServerURL(url) {
        if (!isEmptyString(url) && url.match(/^https?:\/\//)) {
            return true;
        }
        return false;
    }
    Utils.isServerURL = isServerURL;
    function generateGUID() {
        return uuid.v4();
    }
    Utils.generateGUID = generateGUID;
    function getValues(map) {
        var values = [];
        for (var key in map) {
            values.push(map[key]);
        }
        return values;
    }
    Utils.getValues = getValues;
    function getMaxValue(values) {
        var result = Number.MIN_VALUE;
        for (var i = 0; i < values.length; i++) {
            result = Math.max(result, values[i]);
        }
        return result;
    }
    Utils.getMaxValue = getMaxValue;
    function downloadContent(fileName, data) {
        if (data && fileName) {
            var a = document.createElement("a");
            a.href = data;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    }
    Utils.downloadContent = downloadContent;
    function isRTL(locale) {
        var rtlLang = ['ar', 'he', 'fl'];
        if (locale && rtlLang.indexOf(locale.split('-')[0]) !== -1) {
            return true;
        }
        else {
            return false;
        }
    }
    Utils.isRTL = isRTL;
    // read a local file's blob Object as ArrayBuffer
    function readBlobAsync(blob) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var reader = new FileReader();
                        reader.readAsArrayBuffer(blob);
                        reader.onloadend = function () {
                            resolve(reader.result);
                        };
                        reader.onerror = function (e) {
                            var error = {
                                errorCode: ActionError_1.ActionErrorCode.IOException,
                                errorMessage: "Error in reading blobUrl: " + e
                            };
                            reject(error);
                        };
                    })];
            });
        });
    }
    Utils.readBlobAsync = readBlobAsync;
    function dateTimeToLocaleString(date, locale, options) {
        var dateOptions = options ? options
            : { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric" };
        return date.toLocaleDateString(locale ? locale : Utils.DEFAULT_LOCALE, dateOptions);
    }
    Utils.dateTimeToLocaleString = dateTimeToLocaleString;
    function announceText(text) {
        var ariaLiveSpan = document.getElementById("aria-live-span");
        if (ariaLiveSpan) {
            ariaLiveSpan.innerText = text;
        }
        else {
            ariaLiveSpan = document.createElement("SPAN");
            ariaLiveSpan.style.cssText = "position: fixed; overflow: hidden; width: 0px; height: 0px;";
            ariaLiveSpan.id = "aria-live-span";
            ariaLiveSpan.innerText = "";
            ariaLiveSpan.setAttribute("aria-live", "polite");
            ariaLiveSpan.tabIndex = -1;
            document.body.appendChild(ariaLiveSpan);
            setTimeout(function () {
                ariaLiveSpan.innerText = text;
            }, 50);
        }
    }
    Utils.announceText = announceText;
    function getNonNullString(str) {
        if (isEmptyObject(str)) {
            return "";
        }
        else {
            return str;
        }
    }
    Utils.getNonNullString = getNonNullString;
})(Utils = exports.Utils || (exports.Utils = {}));


/***/ }),

/***/ "../ActionCommon/src/index.ts":
/*!************************************!*\
  !*** ../ActionCommon/src/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ActionInstanceColumnType_1 = __webpack_require__(/*! ./model/ActionInstanceColumnType */ "../ActionCommon/src/model/ActionInstanceColumnType.ts");
exports.ActionInstanceColumnType = ActionInstanceColumnType_1.ActionInstanceColumnType;
var ActionInstancePropertyType_1 = __webpack_require__(/*! ./model/ActionInstancePropertyType */ "../ActionCommon/src/model/ActionInstancePropertyType.ts");
exports.ActionInstancePropertyType = ActionInstancePropertyType_1.ActionInstancePropertyType;
var ActionInstancePropertyUpdateType_1 = __webpack_require__(/*! ./model/ActionInstancePropertyUpdateType */ "../ActionCommon/src/model/ActionInstancePropertyUpdateType.ts");
exports.ActionInstancePropertyUpdateType = ActionInstancePropertyUpdateType_1.ActionInstancePropertyUpdateType;
var ActionInstanceStatus_1 = __webpack_require__(/*! ./model/ActionInstanceStatus */ "../ActionCommon/src/model/ActionInstanceStatus.ts");
exports.ActionInstanceStatus = ActionInstanceStatus_1.ActionInstanceStatus;
var AttachmentType_1 = __webpack_require__(/*! ./model/AttachmentType */ "../ActionCommon/src/model/AttachmentType.ts");
exports.AttachmentType = AttachmentType_1.AttachmentType;
var ClientType_1 = __webpack_require__(/*! ./model/ClientType */ "../ActionCommon/src/model/ClientType.ts");
exports.ClientType = ClientType_1.ClientType;
var NotificationSettingMode_1 = __webpack_require__(/*! ./model/NotificationSettingMode */ "../ActionCommon/src/model/NotificationSettingMode.ts");
exports.NotificationSettingMode = NotificationSettingMode_1.NotificationSettingMode;
var Visibility_1 = __webpack_require__(/*! ./model/Visibility */ "../ActionCommon/src/model/Visibility.ts");
exports.Visibility = Visibility_1.Visibility;
var ActionEnvironment_1 = __webpack_require__(/*! ./ActionEnvironment */ "../ActionCommon/src/ActionEnvironment.ts");
exports.ActionEnvironment = ActionEnvironment_1.ActionEnvironment;
var ActionError_1 = __webpack_require__(/*! ./ActionError */ "../ActionCommon/src/ActionError.ts");
exports.ActionErrorCode = ActionError_1.ActionErrorCode;
var ActionSdkCommand_1 = __webpack_require__(/*! ./ActionSdkCommand */ "../ActionCommon/src/ActionSdkCommand.ts");
exports.ActionSdkCommand = ActionSdkCommand_1.ActionSdkCommand;
var ILogger_1 = __webpack_require__(/*! ./ILogger */ "../ActionCommon/src/ILogger.ts");
exports.ILogger = ILogger_1.ILogger;
var LogCategory_1 = __webpack_require__(/*! ./LogCategory */ "../ActionCommon/src/LogCategory.ts");
exports.LogCategory = LogCategory_1.LogCategory;
var LogLevel_1 = __webpack_require__(/*! ./LogLevel */ "../ActionCommon/src/LogLevel.ts");
exports.LogLevel = LogLevel_1.LogLevel;
var LogMetricState_1 = __webpack_require__(/*! ./LogMetricState */ "../ActionCommon/src/LogMetricState.ts");
exports.LogMetricState = LogMetricState_1.LogMetricState;
var LogMetric_1 = __webpack_require__(/*! ./LogMetric */ "../ActionCommon/src/LogMetric.ts");
exports.LogMetric = LogMetric_1.LogMetric;
var Utils_1 = __webpack_require__(/*! ./Utils */ "../ActionCommon/src/Utils.ts");
exports.Utils = Utils_1.Utils;
var NavBarMenuListType_1 = __webpack_require__(/*! ./model/NavBarMenuListType */ "../ActionCommon/src/model/NavBarMenuListType.ts");
exports.NavBarMenuListType = NavBarMenuListType_1.NavBarMenuListType;
var ActionUtils_1 = __webpack_require__(/*! ./ActionUtils */ "../ActionCommon/src/ActionUtils.ts");
exports.ActionUtils = ActionUtils_1.ActionUtils;
var AMSClient_1 = __webpack_require__(/*! ./AMSClient */ "../ActionCommon/src/AMSClient.ts");
exports.AMSClient = AMSClient_1.AMSClient;
var AtachmentStatus_1 = __webpack_require__(/*! ./model/AtachmentStatus */ "../ActionCommon/src/model/AtachmentStatus.ts");
exports.AttachmentStatus = AtachmentStatus_1.AttachmentStatus;
var HttpStatusCode_1 = __webpack_require__(/*! ./HttpStatusCode */ "../ActionCommon/src/HttpStatusCode.ts");
exports.HttpStatusCode = HttpStatusCode_1.HttpStatusCode;


/***/ }),

/***/ "../ActionCommon/src/model/ActionInstanceColumnType.ts":
/*!*************************************************************!*\
  !*** ../ActionCommon/src/model/ActionInstanceColumnType.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ActionInstanceColumnType;
(function (ActionInstanceColumnType) {
    ActionInstanceColumnType["SingleOption"] = "SingleOption";
    ActionInstanceColumnType["MultiOption"] = "MultiOption";
    ActionInstanceColumnType["Text"] = "Text";
    ActionInstanceColumnType["Numeric"] = "Numeric";
    ActionInstanceColumnType["Location"] = "Location";
    ActionInstanceColumnType["DateTime"] = "DateTime";
    ActionInstanceColumnType["AttachmentList"] = "AttachmentList";
    ActionInstanceColumnType["PhoneNumber"] = "PhoneNumber";
    ActionInstanceColumnType["Date"] = "Date";
    ActionInstanceColumnType["LargeText"] = "LargeText";
    ActionInstanceColumnType["UserId"] = "UserId";
})(ActionInstanceColumnType = exports.ActionInstanceColumnType || (exports.ActionInstanceColumnType = {}));


/***/ }),

/***/ "../ActionCommon/src/model/ActionInstancePropertyType.ts":
/*!***************************************************************!*\
  !*** ../ActionCommon/src/model/ActionInstancePropertyType.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ActionInstancePropertyType;
(function (ActionInstancePropertyType) {
    /** Any text is allowed as the metadata value */
    ActionInstancePropertyType["Text"] = "Text";
    /** Only numbers are allowed as the metadata value */
    ActionInstancePropertyType["Numeric"] = "Numeric";
    /** Location type as the metadata value */
    ActionInstancePropertyType["Location"] = "Location";
    /** Date time as the metadata value */
    ActionInstancePropertyType["DateTime"] = "DateTime";
    /** Set (unique list) of strings as the metadata value */
    ActionInstancePropertyType["StringSet"] = "StringSet";
    /** List of Attachment as metadata value */
    ActionInstancePropertyType["AttachmentList"] = "AttachmentList";
})(ActionInstancePropertyType = exports.ActionInstancePropertyType || (exports.ActionInstancePropertyType = {}));


/***/ }),

/***/ "../ActionCommon/src/model/ActionInstancePropertyUpdateType.ts":
/*!*********************************************************************!*\
  !*** ../ActionCommon/src/model/ActionInstancePropertyUpdateType.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ActionInstancePropertyUpdateType;
(function (ActionInstancePropertyUpdateType) {
    // Replace the old property value with a new one
    ActionInstancePropertyUpdateType["Update"] = "Update";
    // Add a whole new property
    ActionInstancePropertyUpdateType["Add"] = "Add";
    // Delete a whole property
    ActionInstancePropertyUpdateType["Delete"] = "Delete";
    // Replace an entry in the property value (Array type) with a new one
    ActionInstancePropertyUpdateType["Replace"] = "Replace";
    // Add entries in the property value (Array type)
    ActionInstancePropertyUpdateType["Append"] = "Append";
    // Remove entries from the property value (Array type)
    ActionInstancePropertyUpdateType["Remove"] = "Remove";
})(ActionInstancePropertyUpdateType = exports.ActionInstancePropertyUpdateType || (exports.ActionInstancePropertyUpdateType = {}));


/***/ }),

/***/ "../ActionCommon/src/model/ActionInstanceStatus.ts":
/*!*********************************************************!*\
  !*** ../ActionCommon/src/model/ActionInstanceStatus.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ActionInstanceStatus;
(function (ActionInstanceStatus) {
    ActionInstanceStatus["Active"] = "Active";
    ActionInstanceStatus["Expired"] = "Expired";
    ActionInstanceStatus["Closed"] = "Closed";
    ActionInstanceStatus["Draft"] = "Draft";
})(ActionInstanceStatus = exports.ActionInstanceStatus || (exports.ActionInstanceStatus = {}));


/***/ }),

/***/ "../ActionCommon/src/model/AtachmentStatus.ts":
/*!****************************************************!*\
  !*** ../ActionCommon/src/model/AtachmentStatus.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AttachmentStatus;
(function (AttachmentStatus) {
    AttachmentStatus["Unknown"] = "Unknown";
    AttachmentStatus["Uploading"] = "Uploading";
    AttachmentStatus["Uploaded"] = "Uploaded";
    AttachmentStatus["Downloaded"] = "Downloaded";
    AttachmentStatus["Downloading"] = "Downloading";
    AttachmentStatus["UploadFailed"] = "UploadFailed";
    AttachmentStatus["DownloadFailed"] = "DownloadFailed";
})(AttachmentStatus = exports.AttachmentStatus || (exports.AttachmentStatus = {}));


/***/ }),

/***/ "../ActionCommon/src/model/AttachmentType.ts":
/*!***************************************************!*\
  !*** ../ActionCommon/src/model/AttachmentType.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AttachmentType;
(function (AttachmentType) {
    AttachmentType["Image"] = "Image";
    AttachmentType["Audio"] = "Audio";
    AttachmentType["Video"] = "Video";
    AttachmentType["Document"] = "Document";
})(AttachmentType = exports.AttachmentType || (exports.AttachmentType = {}));


/***/ }),

/***/ "../ActionCommon/src/model/ClientType.ts":
/*!***********************************************!*\
  !*** ../ActionCommon/src/model/ClientType.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ClientType;
(function (ClientType) {
    ClientType["None"] = "None";
    ClientType["Teams"] = "Teams";
    ClientType["Kaizala"] = "Kaizala";
})(ClientType = exports.ClientType || (exports.ClientType = {}));


/***/ }),

/***/ "../ActionCommon/src/model/NavBarMenuListType.ts":
/*!*******************************************************!*\
  !*** ../ActionCommon/src/model/NavBarMenuListType.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NavBarMenuListType;
(function (NavBarMenuListType) {
    NavBarMenuListType["dropDown"] = "dropDown";
    NavBarMenuListType["popOver"] = "popOver";
})(NavBarMenuListType = exports.NavBarMenuListType || (exports.NavBarMenuListType = {}));


/***/ }),

/***/ "../ActionCommon/src/model/NotificationSettingMode.ts":
/*!************************************************************!*\
  !*** ../ActionCommon/src/model/NotificationSettingMode.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NotificationSettingMode;
(function (NotificationSettingMode) {
    NotificationSettingMode["None"] = "None";
    NotificationSettingMode["Daily"] = "Daily";
    NotificationSettingMode["OnRowCreate"] = "OnRowCreate";
    NotificationSettingMode["OnRowUpdate"] = "OnRowUpdate";
})(NotificationSettingMode = exports.NotificationSettingMode || (exports.NotificationSettingMode = {}));


/***/ }),

/***/ "../ActionCommon/src/model/Visibility.ts":
/*!***********************************************!*\
  !*** ../ActionCommon/src/model/Visibility.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Visibility;
(function (Visibility) {
    Visibility["All"] = "All";
    Visibility["Sender"] = "Sender";
})(Visibility = exports.Visibility || (exports.Visibility = {}));


/***/ }),

/***/ "./src/APIs.ts":
/*!*********************!*\
  !*** ./src/APIs.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var ActionHostInterface_1 = __webpack_require__(/*! ./ActionHostInterface */ "./src/ActionHostInterface.ts");
var src_1 = __webpack_require__(/*! ../../ActionCommon/src */ "../ActionCommon/src/index.ts");
var APIs;
(function (APIs) {
    /**
    * Creates a new Action instance
    * @param {ActionInstance} actionInstance
    * @return promise returning either success or ActionError
    */
    function createActionInstance(actionInstance, viewData) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ActionHostInterface_1.Host.executeActionSDKApi(src_1.ActionSdkCommand.CreateActionInstance, [actionInstance, viewData])];
            });
        });
    }
    APIs.createActionInstance = createActionInstance;
    /**
    * Creates a new Action instance along with the given rows
    * @param {ActionInstance} actionInstance
    * @param {ActionInstanceRow[]} actionInstanceRows
    * @return promise returning either success or ActionError
    */
    function createActionInstanceWithRows(actionInstance, actionInstanceRows, viewData) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ActionHostInterface_1.Host.executeActionSDKApi(src_1.ActionSdkCommand.CreateActionInstanceWithRows, [actionInstance, actionInstanceRows, viewData])];
            });
        });
    }
    APIs.createActionInstanceWithRows = createActionInstanceWithRows;
    /**
    * Gets the current Action instance
    * @param {string} actionInstanceId ID of the action instance
    * @return promise returning either ActionInstance or ActionError
    */
    function getActionInstance(actionInstanceId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ActionHostInterface_1.Host.executeActionSDKApi(src_1.ActionSdkCommand.GetActionInstance, [actionInstanceId])];
            });
        });
    }
    APIs.getActionInstance = getActionInstance;
    /**
    * Updates the current Action instance
    * @param {string} actionInstanceId ID of the action instance
    * @param {ActionInstanceUpdateInfo} actionInstanceUpdateInfo
    * @return promise returning either success or ActionError
    */
    function updateActionInstance(actionInstanceId, actionInstanceUpdateInfo) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ActionHostInterface_1.Host.executeActionSDKApi(src_1.ActionSdkCommand.UpdateActionInstance, [actionInstanceId, actionInstanceUpdateInfo])];
            });
        });
    }
    APIs.updateActionInstance = updateActionInstance;
    /**
    * Deletes the current Action instance
    * @param {string} actionInstanceId ID of the action instance
    * @return promise returning either success or ActionError
    */
    function deleteActionInstance(actionInstanceId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ActionHostInterface_1.Host.executeActionSDKApi(src_1.ActionSdkCommand.DeleteActionInstance, [actionInstanceId])];
            });
        });
    }
    APIs.deleteActionInstance = deleteActionInstance;
    /**
    * Sends a reminder for the current Action instance
    * @param {string} actionInstanceId ID of the action instance
    * @return promise returning either success or ActionError
    */
    function sendActionInstanceReminder(actionInstanceId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ActionHostInterface_1.Host.executeActionSDKApi(src_1.ActionSdkCommand.SendActionInstanceReminder, [actionInstanceId])];
            });
        });
    }
    APIs.sendActionInstanceReminder = sendActionInstanceReminder;
    /**
    * Creates or updates Action instance rows
    * @param {string} actionInstanceId ID of the action instance
    * @param {ActionInstanceRow[]} actionInstanceRows An array of ActionInstanceRow instances
    * @return promise returning either success or ActionError
    */
    function createOrUpdateActionInstanceRows(actionInstanceId, actionInstanceRows) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ActionHostInterface_1.Host.executeActionSDKApi(src_1.ActionSdkCommand.CreateOrUpdateActionInstanceRows, [actionInstanceId, actionInstanceRows])];
            });
        });
    }
    APIs.createOrUpdateActionInstanceRows = createOrUpdateActionInstanceRows;
    /**
    * Gets an Action instance row corresponding to the given id
    * @param {string} actionInstanceId ID of the action instance
    * @param {string} actionInstanceRowId ID of the action instance row to fetch
    * @return promise returning either ActionInstanceRow or ActionError
    */
    function getActionInstanceRow(actionInstanceId, actionInstanceRowId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ActionHostInterface_1.Host.executeActionSDKApi(src_1.ActionSdkCommand.GetActionInstanceRow, [actionInstanceId, actionInstanceRowId])];
            });
        });
    }
    APIs.getActionInstanceRow = getActionInstanceRow;
    /**
    * Gets Action instance rows
    * @param {string} actionInstanceId ID of the action instance
    * @param {string} creatorId ID of the creator of the action instance rows to fetch
    * @param {string} continuationToken continuation token to handle paged results
    * @param {number} pageSize size of the page (number of results to fetch in one call)
    * @return promise returning either an array of ActionInstanceRow or ActionError
    */
    function getActionInstanceRows(actionInstanceId, creatorId, continuationToken, pageSize) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // TODO: The following implementation will be udpated once continuationToken support is added on service
                return [2 /*return*/, ActionHostInterface_1.Host.executeActionSDKApi(src_1.ActionSdkCommand.GetActionInstanceRows, [actionInstanceId, creatorId, continuationToken, pageSize])];
            });
        });
    }
    APIs.getActionInstanceRows = getActionInstanceRows;
    /**
    * Deletes an Action instance row
    * @param {string} actionInstanceId ID of the action instance
    * @param {string} actionInstanceRowId ID of the action instance row to delete
    * @return promise returning either success or ActionError
    */
    function deleteActionInstanceRow(actionInstanceId, actionInstanceRowId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ActionHostInterface_1.Host.executeActionSDKApi(src_1.ActionSdkCommand.DeleteActionInstanceRow, [actionInstanceId, actionInstanceRowId])];
            });
        });
    }
    APIs.deleteActionInstanceRow = deleteActionInstanceRow;
    /**
    * Gets the summary of the current Action instance
    * @param {string} actionInstanceId ID of the action instance
    * @param {boolean} isShortSummary flag denoting if aggregates are to be returned with the summary
    * @return promise returning either ActionInstanceSummary or ActionError
    */
    function getActionInstanceSummary(actionInstanceId, isShortSummary) {
        if (isShortSummary === void 0) { isShortSummary = true; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ActionHostInterface_1.Host.executeActionSDKApi(src_1.ActionSdkCommand.GetActionInstanceSummary, [actionInstanceId, isShortSummary])];
            });
        });
    }
    APIs.getActionInstanceSummary = getActionInstanceSummary;
    /**
    * Downloads the Action instance result result
    * @param {string} actionInstanceId ID of the action instance
    * @return promise returning either success or ActionError
    */
    function downloadActionInstanceResult(actionInstanceId, fileName) {
        if (fileName === void 0) { fileName = null; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ActionHostInterface_1.Host.executeActionSDKApi(src_1.ActionSdkCommand.DownloadActionInstanceResult, [actionInstanceId, fileName])];
            });
        });
    }
    APIs.downloadActionInstanceResult = downloadActionInstanceResult;
    /**
    * Gets non responders of the current Action instance
    * @param {string} actionInstanceId ID of the action instance
    * @return promise returning either an array of non-responders or ActionError
    */
    function getActionInstanceNonResponders(actionInstanceId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ActionHostInterface_1.Host.executeActionSDKApi(src_1.ActionSdkCommand.GetActionInstanceNonResponoders, [actionInstanceId])];
            });
        });
    }
    APIs.getActionInstanceNonResponders = getActionInstanceNonResponders;
    /**
    * Gets the members count of the current conversation
    * @param {ConversationInfo} conversationInfo conversation details
    * @param {string} actionInstanceId ID of the action instance
    * @return promise returning either a result or ActionError
    */
    function getConversationMembersCount(conversationInfo, actionInstanceId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ActionHostInterface_1.Host.executeActionSDKApi(src_1.ActionSdkCommand.GetConversationMembersCount, [conversationInfo, actionInstanceId])];
            });
        });
    }
    APIs.getConversationMembersCount = getConversationMembersCount;
    /**
    * Gets the members of the current conversation
    * @param {ConversationInfo} conversationInfo conversation details
    * @param {string} actionInstanceId ID of the action instance
    * @return promise returning either an array of members or ActionError
    */
    function getConversationMembers(conversationInfo, actionInstanceId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ActionHostInterface_1.Host.executeActionSDKApi(src_1.ActionSdkCommand.GetConversationMembers, [conversationInfo, actionInstanceId])];
            });
        });
    }
    APIs.getConversationMembers = getConversationMembers;
    /**
    * Gets the details of the given user ids
    * @param {string[]} userIDs array of user ids
    * @param {string} actionInstanceId ID of the action instance
    * @return promise returning either UserProfilesFetchResult or ActionError
    */
    function getUserProfiles(userIDs, actionInstanceId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ActionHostInterface_1.Host.executeActionSDKApi(src_1.ActionSdkCommand.GetUserProfiles, [userIDs, actionInstanceId])];
            });
        });
    }
    APIs.getUserProfiles = getUserProfiles;
    /**
    * Gets profile photos of the given user ids
    * @param {string[]} userIDs array of user ids
    * @return promise returning either ProfilePhotosFetchResult or ActionError
    */
    function getUserProfilePhotos(userIDs) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ActionHostInterface_1.Host.executeActionSDKApi(src_1.ActionSdkCommand.GetUserProfilePhotos, [userIDs])];
            });
        });
    }
    APIs.getUserProfilePhotos = getUserProfilePhotos;
    /**
    * Sets the nav bar items when the host's client type is mobile
    * @param {NavBarMenuItem[]} menuItems list of NavBarMenuItems
    * @param {(id: string) => void} callback callback function to be called when menu item is tapped
    * @return promise returning either success or ActionError
    */
    function setNavBarMenuItems(menuItems, callback) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ActionHostInterface_1.Host.registerActionSDKCallback(src_1.ActionSdkCommand.SetNavBarMenuItems, [menuItems], callback)];
            });
        });
    }
    APIs.setNavBarMenuItems = setNavBarMenuItems;
    /**
    * Get current Action context
    * @return promise returning either ActionContext or ActionError
    */
    function getCurrentContext() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ActionHostInterface_1.Host.executeActionSDKApi(src_1.ActionSdkCommand.GetCurrentContext)];
            });
        });
    }
    APIs.getCurrentContext = getCurrentContext;
    /**
    * Dismiss the current screen.
    * @return promise returning either success or ActionError
    */
    function dismissScreen() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ActionHostInterface_1.Host.executeActionSDKApi(src_1.ActionSdkCommand.DismissScreen)];
            });
        });
    }
    APIs.dismissScreen = dismissScreen;
    /**
    * Show the diagnostic view containing diagnostic logs
    * @return promise returning either success or ActionError
    */
    function showDiagnosticView() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ActionHostInterface_1.Host.executeActionSDKApi(src_1.ActionSdkCommand.ShowDiagnosticView)];
            });
        });
    }
    APIs.showDiagnosticView = showDiagnosticView;
    /**
     * To notify app loaded to hide loading indicator
     * @return promise returning false if already called once else true.
     */
    function hideLoadingIndicator() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ActionHostInterface_1.Host.executeActionSDKApi(src_1.ActionSdkCommand.HideLoadingIndicator, [])];
            });
        });
    }
    APIs.hideLoadingIndicator = hideLoadingIndicator;
    /**
    * Log given props and time to render view. Must be called only once.
    * It will log only one time in one instance of Task module.
    * @return promise returning either success or ActionError
    */
    var actionViewLoadCalled = false;
    function actionViewDidLoad(success, props) {
        if (props === void 0) { props = null; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (actionViewLoadCalled) {
                    return [2 /*return*/];
                }
                actionViewLoadCalled = true;
                return [2 /*return*/, ActionHostInterface_1.Host.executeActionSDKApi(src_1.ActionSdkCommand.ActionViewDidLoad, [success, props])];
            });
        });
    }
    APIs.actionViewDidLoad = actionViewDidLoad;
    /**
    * Registers a handler for the hardware back button in Android
    * @param {() => void} handler handler method to be invoked when back button is pressed
    * @return promise returning either success or ActionError
    */
    function registerBackButtonHandler(handler) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ActionHostInterface_1.Host.registerActionSDKCallback(src_1.ActionSdkCommand.RegisterBackButtonHandler, [], handler)];
            });
        });
    }
    APIs.registerBackButtonHandler = registerBackButtonHandler;
    /**
    * Call server to get list of templates from server.
    * @param string filter required for getting list of templates
    * @return promise returning either List of ActionInstances or ActionError
    */
    function getTemplateActions(filter) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ActionHostInterface_1.Host.executeActionSDKApi(src_1.ActionSdkCommand.GetTemplateActions, [filter])];
            });
        });
    }
    APIs.getTemplateActions = getTemplateActions;
    /**
    * Call server to get list of user actions from server.
    * @param string filter required for getting list of Active action instance
    * @return promise returning either List of ActionInstances or ActionError
    */
    function getActionInstances(filter) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ActionHostInterface_1.Host.executeActionSDKApi(src_1.ActionSdkCommand.GetActionInstances, [filter])];
            });
        });
    }
    APIs.getActionInstances = getActionInstances;
    /**
     * Call server to get list of user actions from server.
     * @param string filter required for getting list of Drafts
     * @return promise returning either List of ActionInstances or ActionError
     */
    function getDraftActionInstances(filter) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ActionHostInterface_1.Host.executeActionSDKApi(src_1.ActionSdkCommand.GetDraftActionInstances, [filter])];
            });
        });
    }
    APIs.getDraftActionInstances = getDraftActionInstances;
    /**
    * Call server to create a action as draft
    * @param actionInstance action instance object to create
    * @return promise returning either ActionInstances or ActionError
    */
    function saveActionInstanceDraft(actionInstance) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ActionHostInterface_1.Host.executeActionSDKApi(src_1.ActionSdkCommand.SaveActionInstanceDraft, [actionInstance])];
            });
        });
    }
    APIs.saveActionInstanceDraft = saveActionInstanceDraft;
    /**
     * Call server to update the draft
     * @param actionInstance action instance object to update
     * @return promise returning success or ActionError
     */
    function updateActionInstanceDraft(actionInstance) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ActionHostInterface_1.Host.executeActionSDKApi(src_1.ActionSdkCommand.UpdateActionInstanceDraft, [actionInstance])];
            });
        });
    }
    APIs.updateActionInstanceDraft = updateActionInstanceDraft;
    /**
     * send draft
     * @return promise returning list of groups and channels
     */
    function promoteDraftToAction(actionInstanceId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ActionHostInterface_1.Host.executeActionSDKApi(src_1.ActionSdkCommand.PromoteDraftToAction, [actionInstanceId])];
            });
        });
    }
    APIs.promoteDraftToAction = promoteDraftToAction;
    /**
     * Creates a new Action instance
     * @param {ActionInstance} actionInstance
     * @return promise returning either success or ActionError
     */
    function createActionInstanceNoBot(actionInstance) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ActionHostInterface_1.Host.executeActionSDKApi(src_1.ActionSdkCommand.CreateActionInstanceNoBot, [actionInstance])];
            });
        });
    }
    APIs.createActionInstanceNoBot = createActionInstanceNoBot;
    /**
    * Creates a new Action instance
    * @param {ActionInstance} actionInstance
    * @return promise returning either success or ActionError
    */
    function getJoinedTeams() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ActionHostInterface_1.Host.executeActionSDKApi(src_1.ActionSdkCommand.GetJoinedTeams)];
            });
        });
    }
    APIs.getJoinedTeams = getJoinedTeams;
    /**
    * Creates a new Action instance
    * @param {ActionInstance} actionInstance
    * @return promise returning either success or ActionError
    */
    function getListOfChannelsForGroups(listOfGroups) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ActionHostInterface_1.Host.executeActionSDKApi(src_1.ActionSdkCommand.GetListOfChannelsForGroups, [listOfGroups])];
            });
        });
    }
    APIs.getListOfChannelsForGroups = getListOfChannelsForGroups;
})(APIs = exports.APIs || (exports.APIs = {}));


/***/ }),

/***/ "./src/ActionHostInterface.ts":
/*!************************************!*\
  !*** ./src/ActionHostInterface.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Host;
(function (Host) {
    // Communication towards host
    function executeActionSDKApi(command, args) {
        if (args === void 0) { args = []; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!actionHost) {
                    console.error("ActionHost is not set");
                    return [2 /*return*/];
                }
                return [2 /*return*/, actionHost.executeActionSDKApi(command, args)];
            });
        });
    }
    Host.executeActionSDKApi = executeActionSDKApi;
    function registerActionSDKCallback(command, args, handler) {
        if (args === void 0) { args = []; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!actionHost) {
                    console.error("ActionHost is not set");
                    return [2 /*return*/];
                }
                return [2 /*return*/, actionHost.registerActionSDKCallback(command, args, handler)];
            });
        });
    }
    Host.registerActionSDKCallback = registerActionSDKCallback;
})(Host = exports.Host || (exports.Host = {}));


/***/ }),

/***/ "./src/Localizer.ts":
/*!**************************!*\
  !*** ./src/Localizer.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ActionHostInterface_1 = __webpack_require__(/*! ./ActionHostInterface */ "./src/ActionHostInterface.ts");
var src_1 = __webpack_require__(/*! ../../ActionCommon/src */ "../ActionCommon/src/index.ts");
var Localizer = /** @class */ (function () {
    function Localizer() {
    }
    /**
     * Get localized Action strings. It will first try to fetch the proper locale strings
     * i.e. content of string_<language>.json within the Action package. If that is not
     * found it will fallback to default locale strings i.e. strings_en.json file.
     * @return promise returning either success or ActionError
     */
    Localizer.initialize = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, ActionHostInterface_1.Host.executeActionSDKApi(src_1.ActionSdkCommand.GetLocalizedActionStrings)];
                    case 1:
                        _a.jsonObject = _b.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    /**
     * Get localized value of the given string id.
     * If any id is not found the same will be returned.
     * @param stringId id of the string to be localized
     * @param args any arguments which needs to passed
     */
    Localizer.getString = function (id) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this.jsonObject && this.jsonObject[id])
            return this.getStringInternal.apply(this, __spreadArrays([this.jsonObject[id]], args));
        return this.getStringInternal.apply(this, __spreadArrays([id], args));
    };
    Localizer.getStringInternal = function (main) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var formatted = main;
        for (var i = 0; i < args.length; i++) {
            var regexp = new RegExp('\\{' + i + '\\}', 'gi');
            formatted = formatted.replace(regexp, args[i]);
        }
        return formatted;
    };
    Localizer.jsonObject = {};
    return Localizer;
}());
exports.Localizer = Localizer;


/***/ }),

/***/ "./src/Logger.ts":
/*!***********************!*\
  !*** ./src/Logger.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ActionHostInterface_1 = __webpack_require__(/*! ./ActionHostInterface */ "./src/ActionHostInterface.ts");
var src_1 = __webpack_require__(/*! ../../ActionCommon/src */ "../ActionCommon/src/index.ts");
var Logger = /** @class */ (function (_super) {
    __extends(Logger, _super);
    function Logger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Logger.logInternal = function (logLevel, logTag, logMessage) {
        ActionHostInterface_1.Host.executeActionSDKApi(src_1.ActionSdkCommand.LogTelemetry, [src_1.LogCategory.ActionLogs, logLevel, logTag, logMessage]);
    };
    Logger.logEventInternal = function (eventName, eventProps) {
        if (eventProps === void 0) { eventProps = null; }
        ActionHostInterface_1.Host.executeActionSDKApi(src_1.ActionSdkCommand.LogTelemetry, [src_1.LogCategory.ActionEvents, eventName, eventProps]);
    };
    Logger.logMetricInternal = function (metricState, metricName, metricProps, metricDuration) {
        if (metricProps === void 0) { metricProps = null; }
        if (metricDuration === void 0) { metricDuration = 0; }
        ActionHostInterface_1.Host.executeActionSDKApi(src_1.ActionSdkCommand.LogTelemetry, [src_1.LogCategory.ActionMetrics, metricState, metricName, metricProps, metricDuration]);
    };
    return Logger;
}(src_1.ILogger));
exports.Logger = Logger;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Exporting all data models
var src_1 = __webpack_require__(/*! ../../ActionCommon/src */ "../ActionCommon/src/index.ts");
exports.ActionInstanceColumnType = src_1.ActionInstanceColumnType;
exports.ActionInstancePropertyType = src_1.ActionInstancePropertyType;
exports.ActionInstancePropertyUpdateType = src_1.ActionInstancePropertyUpdateType;
exports.ActionInstanceStatus = src_1.ActionInstanceStatus;
exports.AttachmentType = src_1.AttachmentType;
exports.ClientType = src_1.ClientType;
exports.NotificationSettingMode = src_1.NotificationSettingMode;
exports.Visibility = src_1.Visibility;
exports.ActionEnvironment = src_1.ActionEnvironment;
exports.ActionErrorCode = src_1.ActionErrorCode;
exports.LogLevel = src_1.LogLevel;
exports.NavBarMenuListType = src_1.NavBarMenuListType;
exports.AMSClient = src_1.AMSClient;
exports.AttachmentStatus = src_1.AttachmentStatus;
exports.HttpStatusCode = src_1.HttpStatusCode;
// Exporting utilities
var src_2 = __webpack_require__(/*! ../../ActionCommon/src */ "../ActionCommon/src/index.ts");
exports.Utils = src_2.Utils;
exports.ActionUtils = src_2.ActionUtils;
// Exporting all apis
var APIs_1 = __webpack_require__(/*! ./APIs */ "./src/APIs.ts");
exports.APIs = APIs_1.APIs;
// Exporting logger
var Logger_1 = __webpack_require__(/*! ./Logger */ "./src/Logger.ts");
exports.Logger = Logger_1.Logger;
// Exporting localizer
var Localizer_1 = __webpack_require__(/*! ./Localizer */ "./src/Localizer.ts");
exports.Localizer = Localizer_1.Localizer;


/***/ })

/******/ });
});
//# sourceMappingURL=ActionSDK.js.map