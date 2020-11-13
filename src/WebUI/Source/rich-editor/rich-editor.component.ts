import Quill, { QuillOptionsStatic } from "quill";

const container = document.getElementById("editor");
if (container) {
    var toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],
      
        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction
      
        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        //[{'size': ['8px', '10px', '12px', '14px', '16px', '18px', '32px']}],
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      
        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        // [{ 'align': []}],
        [{ 'align': ''}, { 'align': 'center'}, { 'align':'right'}, { 'align':'justify'}],
        ['link', 'image'],
        ['clean']                                         // remove formatting button
      ];


    let toolbar = [
        [{'size': ['8px', '10px', '12px', '14px', '16px']}],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'header': '3' }]
    ];


    let options: QuillOptionsStatic = {
        modules: {
            toolbar: toolbarOptions
        },
        placeholder: "Enter Text",
        theme: 'snow'  // or 'bubble'
    };
    // let Size = Quill.import('attributors/style/size');
    // Size.whitelist = ['8px', '10px', '12px', '14px', '16px', '18px', '32px'];
    // Quill.register(Size, true);

    let editor = new Quill(container, options);
}
