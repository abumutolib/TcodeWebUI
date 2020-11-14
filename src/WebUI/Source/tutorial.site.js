"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
if (process.env.NODE_ENV === "devlopment" && module.hot) {
    module.hot.accept();
}
const fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");
const faEdit_1 = require("@fortawesome/free-solid-svg-icons/faEdit");
const faSearch_1 = require("@fortawesome/free-solid-svg-icons/faSearch");
const faUser_1 = require("@fortawesome/free-solid-svg-icons/faUser");
const faAngleRight_1 = require("@fortawesome/free-solid-svg-icons/faAngleRight");
fontawesome_svg_core_1.library.add(faEdit_1.faEdit, faSearch_1.faSearch, faUser_1.faUser, faAngleRight_1.faAngleRight);
fontawesome_svg_core_1.dom.watch();
require("lazysizes");
Promise.resolve().then(() => __importStar(require("./components/tutorial/header/header.component")));
