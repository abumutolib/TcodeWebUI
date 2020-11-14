"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const quill_1 = __importDefault(require("quill"));
const container = document.getElementById("editor");
if (container) {
    var toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        [{ 'header': 1 }, { 'header': 2 }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],
        [{ 'indent': '-1' }, { 'indent': '+1' }],
        [{ 'direction': 'rtl' }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        //[{'size': ['8px', '10px', '12px', '14px', '16px', '18px', '32px']}],
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'font': [] }],
        // [{ 'align': []}],
        [{ 'align': '' }, { 'align': 'center' }, { 'align': 'right' }, { 'align': 'justify' }],
        ['link', 'image'],
        ['clean'] // remove formatting button
    ];
    let toolbar = [
        [{ 'size': ['8px', '10px', '12px', '14px', '16px'] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'header': '3' }]
    ];
    let options = {
        modules: {
            toolbar: toolbarOptions
        },
        placeholder: "Enter Text",
        theme: 'snow' // or 'bubble'
    };
    // let Size = Quill.import('attributors/style/size');
    // Size.whitelist = ['8px', '10px', '12px', '14px', '16px', '18px', '32px'];
    // Quill.register(Size, true);
    let editor = new quill_1.default(container, options);
}
