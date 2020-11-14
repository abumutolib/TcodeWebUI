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
const faAlignLeft_1 = require("@fortawesome/free-solid-svg-icons/faAlignLeft");
const faAlignCenter_1 = require("@fortawesome/free-solid-svg-icons/faAlignCenter");
const faAlignRight_1 = require("@fortawesome/free-solid-svg-icons/faAlignRight");
const faAlignJustify_1 = require("@fortawesome/free-solid-svg-icons/faAlignJustify");
const faBold_1 = require("@fortawesome/free-solid-svg-icons/faBold");
const faItalic_1 = require("@fortawesome/free-solid-svg-icons/faItalic");
const faUnderline_1 = require("@fortawesome/free-solid-svg-icons/faUnderline");
const faListOl_1 = require("@fortawesome/free-solid-svg-icons/faListOl");
const faListUl_1 = require("@fortawesome/free-solid-svg-icons/faListUl");
const faLink_1 = require("@fortawesome/free-solid-svg-icons/faLink");
const faImage_1 = require("@fortawesome/free-solid-svg-icons/faImage");
const faStrikethrough_1 = require("@fortawesome/free-solid-svg-icons/faStrikethrough");
const faRemoveFormat_1 = require("@fortawesome/free-solid-svg-icons/faRemoveFormat");
const faComment_1 = require("@fortawesome/free-solid-svg-icons/faComment");
const faChevronRight_1 = require("@fortawesome/free-solid-svg-icons/faChevronRight");
const faChevronLeft_1 = require("@fortawesome/free-solid-svg-icons/faChevronLeft");
fontawesome_svg_core_1.library.add(faEdit_1.faEdit, faSearch_1.faSearch, faUser_1.faUser, faAngleRight_1.faAngleRight, faAlignLeft_1.faAlignLeft, faAlignCenter_1.faAlignCenter, faAlignRight_1.faAlignRight, faAlignJustify_1.faAlignJustify, faBold_1.faBold, faItalic_1.faItalic, faUnderline_1.faUnderline, faListOl_1.faListOl, faListUl_1.faListUl, faLink_1.faLink, faImage_1.faImage, faStrikethrough_1.faStrikethrough, faRemoveFormat_1.faRemoveFormat, faComment_1.faComment, faChevronRight_1.faChevronRight, faChevronLeft_1.faChevronLeft);
fontawesome_svg_core_1.dom.watch();
require("lazysizes");
Promise.resolve().then(() => __importStar(require("./pages/login-partial/login.partial")));
Promise.resolve().then(() => __importStar(require("./components/main/header-nav/header.component")));
