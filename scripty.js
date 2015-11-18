$(function () {
    'use strict';
    var data = {
        languages: [
            { name: "<strong>JavaScript</strong>", year: "1995", developer: { firstName: "Brendan", lastName: "Eich" } },
            { name: "<strong>Java</strong>", year: "1995", developer: { firstName: "James", lastName: "Gosling" } },
            { name: "<strong>C#</strong>", year: "2000"},
            { name: "<strong>PHP</strong>", year: "1998", developer: { firstName: "Rasmus", lastName: "Lerdorf" } }
        ]
    }

    var template = $("#languagesTpl").html();
    var html = Mustache.to_html(template, data);
    $('#languages').html(html);
});