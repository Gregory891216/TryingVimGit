$(function(){
    var shoesData = [{name:"Nike", price:199.00 }, {name:"Loafers", price:59.00 }, {name:"Wing Tip", price:259.00 }];

    //var items;
  //  $.getJSON("SomeData.json", function (data) {
//	items = data;

    //});
var items = (function () {
    var items = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "./SomeData.json",
        'dataType': "json",
        'success': function (data) {
            items = data;
        }
    });
    return items;
})(); 

    //Get the HTML from the template   in the script tag
    var theTemplateScript = jQuery("#shoe-template").html(); 
    
   //Compile the template
    var theTemplate = Handlebars.compile (theTemplateScript); 
    $(".shoesNav").append (theTemplate(items));
});

function documentGetElement(id){
    return document.getElementById(id);
}

