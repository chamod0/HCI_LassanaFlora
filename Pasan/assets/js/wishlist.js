$(document).ready(function () {

    // initialize wishlist srray
    var wishlistArr = [];

    // add product item to wishlsit
    $("a").on("click", function (event) {
        var item = $(this);
        var itemImage = item.parent().parent().children("a").children("img").attr('src');
        var parent = item.parent().parent().parent();
        var itemTag = parent.children(".product-content").children(".tag-cate").children().text();
        var itemName = parent.children(".product-content").children(".product-name").children().text();
        var itemPrice = parent.children(".product-content").children(".price-box").children("span#pPrice").text();
        console.log("item name= " + itemName + " , price = " + itemPrice);

        var wishlistItem = "<tr>" +
            "<td class='pro-thumbnail'><a href='#'><img class='img-fluid' src='assets/img/product/product-img7.jpg' alt='Product' /></a></td>" +
            "<td class='pro-title'><a href='#'>element snowboard</a></td>" +
            "<td class='pro-price'><span>$295.00</span></td>" +
            "<td class='pro-quantity'><span class='text-success'>In Stock</span></td>" +
            "<td class='pro-subtotal'><a href='cart.html' class='sqr-btn'>Add to Cart</a></td>" +
            "<td class='pro-remove'><a href='#'><i class='fa fa-trash-o'></i></a></td>" +
            "</tr>";

        var itemJSON = {
            "tag": itemTag,
            "name": itemName,
            "price": itemPrice,
            "image": itemImage
        }
        wishlistArr.push(itemJSON);
        console.log(wishlistArr);

        return false;
    });




});