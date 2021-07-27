textField.document.designMode = "On";

const buttons = document.querySelectorAll('button');
const menus = document.querySelector('.editor_menu_items_group');

menus.addEventListener("click", async(e) => {
    const cmd = e.target.closest('button').getAttribute('data-cmd');
    switch (cmd) {
        case "fontsize_title":
            textField.document.execCommand("fontSize", false, "7");
            var fontElements = textField.document.getElementsByTagName("font");
            for (var i = 0, len = fontElements.length; i < len; ++i) {
                if (fontElements[i].size == "7") {
                    fontElements[i].removeAttribute("size");
                    fontElements[i].style.fontSize = "16pt";
                }
            }
            break;
        case "fontsize_contents":
            textField.document.execCommand("fontSize", false, "7");
            var fontElements = textField.document.getElementsByTagName("font");
            for (var i = 0, len = fontElements.length; i < len; ++i) {
                if (fontElements[i].size == "7") {
                    fontElements[i].removeAttribute("size");
                    fontElements[i].style.fontSize = "12pt";
                }
            }
            break;
        case "color_black":
            textField.document.execCommand("foreColor", false, "000000");
            break;
        case "color_green":
            textField.document.execCommand("foreColor", false, "609167");
            break;
        case "color_orange":
            textField.document.execCommand("foreColor", false, "FD9F28");
            break;

        default: 
            textField.document.execCommand(cmd, false, null);
            break;
    }
});

function calc_iframe_counter(){
    console.log("key")
    var input_len = document.getElementById('id_editor_title_input').value.length;
    document.getElementById('id_editor_title_counter').innerText = "("+input_len+" / 30)";

}

function changeFont() {
    
}