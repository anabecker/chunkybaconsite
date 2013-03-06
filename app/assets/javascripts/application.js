// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
// = require jquery
// = require jquery_ujs
// = require twitter/bootstrap
// = require_tree .
//
$('document').ready(function(){
  // // var newText = $("p").text().split(" ").join("</span> <span>");
  // //     newText = "<span>" + newText + "</span>";
 
  // $('p').find(":contains('bacon')")
  //   var newText = $("p").text().split(" ").join("</span> <span>");
  //   newText = "<span>" + newText + "</span>";
  //   .css({"font-style":"italic", "font-weight":"bolder"});

var search = $('body').html();
search = search.replace(/bacon|Bacon|BACON/g, function($1){
    return('<a href="#" rel="tooltip" data-toggle="tooltip" title="OMGBACON">' + $1 + '</a>');
});

// (function($) {
//   var thePage = $("p");
//   thePage.html(thePage.html().replace(/bacon/ig, '<a href="#" class="tooltip" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Tooltip on bottom">bacon</a>')); 
// });

$('body').html(search);
$("a[rel=tooltip]").tooltip()

// $('.tooltip').tooltip();

 });

// <a href="#" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Tooltip on bottom">Tooltip on bottom</a>

//irregular expression