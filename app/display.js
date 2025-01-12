"use strict";

var blockWorkspace = null;
var codeChanged = false;


var curwidth = 300;
function resizeWorkspaceDiv() {
    // Compute the absolute coordinates and dimensions of blocklyArea.
    var blocklyarea = document.getElementById("blocklyarea");
    var blocklyDiv = document.getElementById("blockly_div");
    var codearea = document.getElementById("codediv");
    var x = 0;
    var y = 0;
    var element = blocklyarea;
    do {
        x += element.offsetLeft;
        y += element.offsetTop;
        element = element.offsetParent;
    } while (element);

    if (curwidth < 100) curwidth = 10;

    blocklyDiv.style.left = x + "px";
    blocklyDiv.style.top = y + "px";
    blocklyDiv.style.width = (blocklyarea.offsetWidth - curwidth) + "px";
    blocklyDiv.style.height = blocklyarea.offsetHeight + "px";
    codearea.style.width = curwidth + "px";
    if (blockWorkspace) {
        Blockly.svgResize(blockWorkspace);
    }
    try {
        window.localStorage.codeWidth = curwidth;
    } catch (e) {

    }
}
var slider_drogStart = function (e) {
    var ev = e || event;
    if (ev.preventDefault) {
        ev.preventDefault();
        ev.stopPropagation();
    }

    ev = ev.type == "touchstart" ? ev.targetTouches[0] : ev;

    var disX = ev.clientX;
    var codediv = document.getElementById("codediv");
    var width = codediv.style.width;
    width = parseInt(width);

    var slidermove = function (e) {
        var ev = e || event;
        if (ev.preventDefault) {
            ev.preventDefault();
            ev.stopPropagation();
        }

        ev = ev.type == "touchmove" ? ev.targetTouches[0] : ev;
        var dx = (ev.clientX - disX);
        curwidth = width - dx;
        resizeWorkspaceDiv();
        return false;
    };
    document.addEventListener("mousemove", slidermove, false);
    document.addEventListener("touchmove", slidermove, false);
    var sliderup = function (e) {
        var ev = e || event;
        if (ev.preventDefault) {
            ev.preventDefault();
            ev.stopPropagation();
        }
        document.removeEventListener("mousemove", slidermove, false);
        document.removeEventListener("mouseup", sliderup);
        document.removeEventListener("touchmove", slidermove, false);
        document.removeEventListener("touchend", sliderup, false);
        resizeWorkspaceDiv();
        return false;
    };
    document.addEventListener("mouseup", sliderup, false);
    document.addEventListener("touchend", sliderup, false);
    return false;
}

function loadOBPFileFromCLI() {
    var text = null;
    try {
        const remote = require("electron").remote;
        const fs = require("fs");
        const path = require("path");
        var args = remote.process.argv.slice(1);
        for (var fname, i = 0; fname = args[i]; i++) {
            if (path.extname(fname).toLowerCase() != ".obp") continue;
            if (!fs.existsSync(fname)) continue;
            text = fs.readFileSync(fname, "utf-8");
            break;
        }
    }
    catch (e) {
        text = null;
    }
    return text;
}

function saveBlockWorkspaceToLocalStorage(workspace) {
    if (Blockly.getMainWorkspace().isDragging()) return;
    try {
        if (window.localStorage) {
            var xml = Blockly.Xml.workspaceToDom(workspace);
            var text = Blockly.Xml.domToText(xml);
            window.localStorage.blocks = text;
        }
    } catch (e) {
        console.log(e);
    }
}
function loadBlockWorkspaceFromLocalStorage(workspace) {
    var text = null;
    try {
        text = loadOBPFileFromCLI();
    }
    catch (e) {
        text = null;
    }

    try {
        if (text == null) {
            text = window.localStorage.blocks;
        }
    } catch (e) {
        // Firefox sometimes throws a SecurityError when accessing sessionStorage.
        // Restarting Firefox fixes this, so it looks like a bug.
        text = null;
    }
    if (text) {
        try {
            var xml = Blockly.Xml.textToDom(text);
            Blockly.Xml.domToWorkspace(xml, workspace);
            return true;
        } catch (e) {
            workspace.clear();
            return false;
        }
    } else {
        return false;
    }
}
var newWorkspace = function () {
    var eventGroup = Blockly.utils.genUid();
    Blockly.Events.setGroup(eventGroup);
    blockWorkspace.clear();
    var block = blockWorkspace.newBlock("controlsetuploop");
    block.initSvg();
    block.render();
    block.setDeletable(false);
    blockWorkspace.scrollCenter();
    Blockly.Events.setGroup(false);
}

var saveWorkspace = function () {
    try {
        var filename = prompt("Enter the file name under which to save your blocks ", "oseppBlocks.obp");
    } catch (e) {
        var filename = "oseppBlock.obp";
    }

    if (filename) {
        var xml = Blockly.Xml.workspaceToDom(blockWorkspace);
        var text = Blockly.Xml.domToText(xml);
        var data = new Blob([text], { type: "text/xml" });
        var clickEvent = new MouseEvent("click", {
            "view": window,
            "bubbles": true,
            "cancelable": false
        });

        var a = document.createElement("a");
        a.href = window.URL.createObjectURL(data);
        a.download = filename;
        a.textContent = "Download file!";
        a.dispatchEvent(clickEvent);
    }
}
var loadWorkspace = function () {
    var f = document.createElement("input");
    f.setAttribute("type", "file");
    f.setAttribute("id", "load_block_file");
    f.setAttribute("accept", ".obp");

    f.onchange = function () {
        var file = this.files[0];
        var reader = new FileReader();
        reader.onload = function () {
            try {
                var text = reader.result;
                var xml = Blockly.Xml.textToDom(text);
                blockWorkspace.clear();
                Blockly.Xml.domToWorkspace(xml, blockWorkspace);
                blockWorkspace.scrollCenter();
                blockWorkspace.clearUndo();
            } catch (e) {
                newWorkspace();
            }
        };
        reader.readAsText(file);
    };
    var clickEvent = new MouseEvent("click", {
        "view": window,
        "bubbles": true,
        "cancelable": false
    });

    f.dispatchEvent(clickEvent);
}
function setLocaleUI() {
    var trans = document.querySelectorAll('[localeID]');
    for (var i = 0, t; t = trans[i]; i++) {
        var key = t.attributes.localeID.value;
        if (!Blockly.Msg[key]) continue;
        switch (t.tagName.toLowerCase()) {
            case 'li':
                t.title = Blockly.Msg[key];
                break;
            case 'span':
            case 'option':
                t.innerText = Blockly.Msg[key];
                break;
            default:
                break;
        }
    }
}

function setLocale(locale) {
    blockWorkspace.getFlyout().setRecyclingEnabled(false);
    var xml = Blockly.Xml.workspaceToDom(blockWorkspace);
    Blockly.ScratchMsgs.setLocale(locale);
    Blockly.Xml.clearWorkspaceAndLoadFromXml(xml, blockWorkspace);
    blockWorkspace.updateToolbox(Blockly.Xml.textToDom(blockToolboxXml));
    blockWorkspace.getFlyout().setRecyclingEnabled(true);
    setLocaleUI();
}

function initLocal() {
    try {
        const remote = require("electron").remote;
        var args = remote.process.argv.slice(1);
        var loca_cli = '';
        //last set from cli
        for (var arg, i = 0; arg = args[i]; i++) {
            match = arg.match(/locale=([^&]+)/);
            if (match) loca_cli = match[1];
        }
        if (loca_cli) {
            Blockly.ScratchMsgs.setLocale(match[1]);
            setLocaleUI();
            return;//nowhere to go
        }
    }
    catch (e) {
    }

    var match = location.search.match(/locale=([^&]+)/);
    if (match) {
        Blockly.ScratchMsgs.setLocale(match[1]);
    } else {
        var lang = navigator.language || navigator.userLanguage;
        Blockly.ScratchMsgs.setLocale(lang.toLowerCase());
    }
    setLocaleUI();
}

function createBlockWorkspace() {
    blockWorkspace = Blockly.inject(document.getElementById("blockly_div"),
        {
            comments: true,
            disable: false,
            collapse: false,
            media: "scratch-blocks/media/",
            readOnly: false,
            scrollbars: true,
            toolbox: Blockly.Xml.textToDom(blockToolboxXml),
            toolboxPosition: "start",
            sounds: "true",
            zoom: {
                controls: true,
                wheel: true,
                startScale: 0.75,
                maxScale: 4,
                minScale: 0.25,
                scaleSpeed: 1.1
            }
        });
    if (!loadBlockWorkspaceFromLocalStorage(blockWorkspace)) {
        var block = blockWorkspace.newBlock("controlsetuploop");
        block.initSvg();
        block.render();
        block.setDeletable(false);
    }
    blockWorkspace.setScale(blockWorkspace.options.zoomOptions.startScale);
    blockWorkspace.scrollCenter();
    blockWorkspace.clearUndo();
    blockWorkspace.addChangeListener(
        function blockWorkspaceChanged(masterEvent) {
            if (masterEvent.type == Blockly.Events.UI) {
                return;  // Don't update UI events.
            }
            saveBlockWorkspaceToLocalStorage(blockWorkspace);
            codeChanged = true;
        });
    codeChanged = true;
}

function getCode() {
    return Blockly.Arduino.workspaceToCode(blockWorkspace) || "";
}

function updateCode() {
    if (!codeChanged) return;
    if (Blockly.getMainWorkspace().isDragging()) return;
    var allcode = getCode() || "";
    allcode = allcode.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    document.getElementById("code_area").innerHTML = PR.prettyPrintOne(allcode, "cpp", true);
    codeChanged = false;
}

var getOnlineVersionNumber = function (callback) {
    const { net } = require("electron").remote;
    const request = net.request("http://www.osepp.com/block/package.json?d=" + Date());
    request.on("response", (response) => {
        if (response.statusCode == 200) {
            response.on("data", (chunk) => {
                var json = JSON.parse(chunk);
                if (json.version) {
                    if (callback) {
                        callback(json.version);
                    }
                }
            });
        }
    });
    request.on("error", (error) => {
        console.log(error);
    });
    request.end();
};

function initWorkspace() {
    try {
        curwidth = window.localStorage.codeWidth || 300;
    } catch (e) {
        curwidth = 300;
    }
    initLocal();
    resizeWorkspaceDiv();
    createBlockWorkspace();
    resizeWorkspaceDiv();
    window.addEventListener("resize", resizeWorkspaceDiv, false);

    document.getElementById("silderdiv").addEventListener("mousedown", slider_drogStart, false);
    document.getElementById("silderdiv").addEventListener("touchstart", slider_drogStart, false);
    setInterval("updateCode()", 250);
    document.getElementById("new").onclick = newWorkspace;
    document.getElementById("save").onclick = saveWorkspace;
    document.getElementById("load").onclick = loadWorkspace;

    document.getElementById("undo").onclick = function () {
        Blockly.getMainWorkspace().undo(0);
    }
    document.getElementById("redo").onclick = function () {
        Blockly.getMainWorkspace().undo(1);
    }

    document.ondragover = function (e) {
        e.preventDefault();
        //return false;
    };
    document.ondrop = function (e) {
        e.preventDefault();
        //return false;
        var list = e.dataTransfer.files;
        for (var i = 0; i < list.length; i++) {
            var f = list[i];
            if (!f.name.toLowerCase().endsWith(".obp")) continue;
            var reader = new FileReader();
            reader.onload = function () {
                try {
                    var text = reader.result;
                    var xml = Blockly.Xml.textToDom(text);
                    blockWorkspace.clear();
                    Blockly.Xml.domToWorkspace(xml, blockWorkspace);
                    blockWorkspace.scrollCenter();
                } catch (e) {
                    newWorkspace();
                }
            };
            reader.readAsText(f);
            break;
        }
    };
    try {
        getOnlineVersionNumber(function (version) {
            var cv = document.title;
            if (version) {
                version = String(version).replace(/(^\s*)|(\s*$)/g, "");
                if (version != "") {
                    var nowv = cv.replace("oseppBlock", "").replace(/(^\s*)|(\s*$)/g, "").split(".");
                    var webv = version.split(".");
                    for (var i = 0; i < nowv.length; i++) {
                        if (parseInt(webv[i]) == parseInt(nowv[i])) continue;
                        if (parseInt(webv[i]) > parseInt(nowv[i])) {
                            document.getElementById("serial_upload_msg").setAttribute("class", "serial_upload_msg_open");
                            document.getElementById("msgTextArea").innerHTML += "<br><a id=\"downloadoseppBlock\" href=\"#\">new version oseppBlock " + version + " available!</a><br>";
                            const exLinksBtn = document.getElementById('downloadoseppBlock');
                            exLinksBtn.addEventListener('click', function (event) {
                                const shell = require('electron').shell
                                shell.openExternal('https://osepp.com/oseppblock-ide')
                            });
                        }
                        break;
                    }

                }
            }
        });
    } catch (e) {
        console.log(e);
    }
}

var takeScreen = function () {
    var wc = require("electron").remote.getCurrentWindow();
    const fs = require('fs');
    var oldsize = wc.getContentSize();

    var svg = document.getElementsByClassName('blocklySvg')[0];
    var blocklyCanvas = document.getElementsByClassName('blocklyBlockCanvas')[0];
    var blocklyBubbleCanvas = document.getElementsByClassName('blocklyBubbleCanvas')[0];

    var vbox = svg.getBoundingClientRect();
    var bbox = blocklyCanvas.getBoundingClientRect();
    var bbbox = blocklyBubbleCanvas.getBoundingClientRect();
    if (bbbox.height > 0 && bbbox.width > 0) {
        var mx = bbbox.x + bbbox.width;
        mx = Math.max(mx, bbox.x + bbox.width);
        var my = bbbox.y + bbbox.height;
        my = Math.max(my, bbox.y + bbox.height)
        bbox.x = Math.max(bbbox.x, bbox.x);
        bbox.y = Math.max(bbbox.y, bbox.y);
        bbox.width = mx - bbox.x;
        bbox.height = my - bbox.y;
    }

    var newwidth = oldsize[0] + bbox.width - vbox.width + bbox.x;
    var newheight = oldsize[1] + bbox.height - vbox.height + bbox.y;

    var el = document.getElementById('code_area');
    newwidth += Math.max(0, el.scrollWidth - el.clientWidth + 50);
    newheight = Math.max(newheight, el.scrollHeight + 50);

    var msg = document.getElementById('serial_upload_msg');
    newheight += msg.clientHeight;

    newwidth = Math.ceil(newwidth + 80);
    newheight = Math.ceil(newheight);

    wc.setContentSize(Math.max(oldsize[0], newwidth), Math.max(oldsize[1], newheight));
    var oldcodewith = curwidth;
    curwidth = el.scrollWidth + 50;
    resizeWorkspaceDiv();
    var now = new Date;
    var fname = '' + now.getTime() + '.png';
    setTimeout(function () {
        wc.capturePage(function (image) {
            fs.writeFile(fname, image.toPNG(), (err) => {
                if (err) throw err;
            })
        })
        curwidth = oldcodewith;
        resizeWorkspaceDiv();
        wc.setContentSize(oldsize[0], oldsize[1]);
    }, 500);
    return fname;
}

$(document).ready(initWorkspace);