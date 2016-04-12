$(function(){
    var shoesData = [{name:"Nike", price:199.00 }, {name:"Loafers", price:59.00 }, {name:"Wing Tip", price:259.00 }];
    //Get the HTML from the template   in the script tag
    var theTemplateScript = jQuery("#shoe-template").html(); 
    
   //Compile the template
    var theTemplate = Handlebars.compile (theTemplateScript); 
    $(".shoesNav").append (theTemplate(shoesData));
});

function documentGetElement(id){
    return document.getElementById(id);
}
