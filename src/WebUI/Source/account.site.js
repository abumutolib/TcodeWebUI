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
const faUser_1 = require("@fortawesome/free-solid-svg-icons/faUser");
//import { } from "@fortawesome/free-solid-svg-icons/"
fontawesome_svg_core_1.library.add(faUser_1.faUser);
fontawesome_svg_core_1.dom.watch();
require("lazysizes");
Promise.resolve().then(() => __importStar(require("./pages/account/account.page")));