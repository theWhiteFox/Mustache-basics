$(function () {
    'use strict';
    var data = {
        name: "<strong>JavaScript</strong>",
        year: "1995",
        standardised: true
    }

    var template = $("#languagesTpl").html();
    var html = Mustache.to_html(template, data);
    $('#languages').html(html);
});