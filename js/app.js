$(function () {
    $('#btn_01').popover({
        "html": true,
        "placement": "top",
        "content": "Button 1",
        "title": "<span class='test'>Popover 1</span>",
        "trigger": "hover",
    });
    $("h1").css({
        "border": "2px solid blue",
        "text-align": "center",
        "padding": "1vh",
        "color": "blue"
    });
    $('#btn_02').popover({
        "placement": "bottom",
        "content": "Button 2",
        "title": "Popover 2",
        "trigger": "focus"
    });
    $('#btn_03').popover({
        "placement": "left",
        "content": "Button 3",
        "title": "Popover 3"
    });
    $('#btn_04').popover({
        "placement": "right",
        "content": "Button 4",
        "title": "Popover 4"
    });
    $('#img_01').popover({
        "placement": "right",
        "content": "Roze Plaatje",
        "title": "The Bright Side",
        "trigger": "hover",
        "delay": { "show": 100, "hide": 2000 }
    });
    $('#img_02').popover({
        "placement": "left",
        "content": "Zwart Plaatje",
        "title": "The Dark Side",
        "trigger": "hover",
        "template": '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    });
});
