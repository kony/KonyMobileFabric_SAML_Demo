//Form JS File
function frmHome_button614199624179_onClick_seq0(eventobject) {
    init.call(this);
};

function frmHome_button614199624180_onClick_seq0(eventobject) {
    doSAMLLogin.call(this);
};

function frmHome_button614199624181_onClick_seq0(eventobject) {
    getBackendtoken.call(this);
};

function addWidgetsfrmHome() {
    var button614199624179 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button614199624179",
        "isVisible": true,
        "onClick": frmHome_button614199624179_onClick_seq0,
        "skin": "btnNormal",
        "text": "Init"
    }, {
        "containerWeight": 6,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button614199624180 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button614199624180",
        "isVisible": true,
        "onClick": frmHome_button614199624180_onClick_seq0,
        "skin": "btnNormal",
        "text": "Login"
    }, {
        "containerWeight": 6,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button614199624181 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button614199624181",
        "isVisible": true,
        "onClick": frmHome_button614199624181_onClick_seq0,
        "skin": "btnNormal",
        "text": "Get backend Token"
    }, {
        "containerWeight": 6,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    frmHome.add(
    button614199624179, button614199624180, button614199624181);
};

function frmHomeGlobals() {
    var MenuId = [];
    frmHome = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmHome,
        "enabledForIdleTimeout": false,
        "id": "frmHome",
        "needAppMenu": true,
        "skin": "frm",
        "title": null
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "retainScrollPosition": false,
        "titleBar": true,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
};