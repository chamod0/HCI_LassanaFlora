$(document).ready(function(){

    // add product item to wishlsit
    $("a").on("click", function(event){
        var item = $(this);
        var parent = item.parent().parent().parent();
        var itemName = parent.children(".product-content").children(".product-name").children().text();
        var itemPrice = parent.children(".product-content").children(".price-box").children("span#pPrice").text();
        alert("item name= " + itemName + " and price = " + itemPrice);
        return false;
    });



    
});