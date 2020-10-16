$(document).ready(function () {

    // initialize wishlist srray
    var wishlistArr = [];

    // add product item to wishlsit
    $("a#btnWishlist").on("click", function (event) {
        var item = $(this);
        var itemImage = item.parent().parent().children("a").children("img").attr('src');
        var parent = item.parent().parent().parent();
        var itemTag = parent.children(".product-content").children(".tag-cate").children().text();
        var itemName = parent.children(".product-content").children(".product-name").children().text();
        var itemPrice = parent.children(".product-content").children(".price-box").children("span#pPrice").text();
        console.log("item name= " + itemName + " , price = " + itemPrice);

        var itemJSON = {
            "tag": itemTag,
            "name": itemName,
            "price": itemPrice,
            "image": itemImage
        }
        wishlistArr.push(itemJSON);
        localStorage.setItem('wishlistObj', JSON.stringify(wishlistArr));
        console.log(wishlistArr);

        return false;
    });

    //get all wishlists from json array

    console.log(JSON.parse(localStorage.getItem('wishlistObj')));

    var wishlist = JSON.parse(localStorage.getItem('wishlistObj'));

    wishlist.forEach((element, index) => {
        // console.log(index);
        var wishlistItem = "<tr>" +
            "<td style='display:none;'>" + index + "</td>" +
            "<td class='pro-thumbnail'><a href='#'><img class='img-fluid' src='" + element.image + "' alt='Product' /></a></td>" +
            "<td class='pro-title'><a href='#'>" + element.name + "</a></td>" +
            "<td class='pro-price'><span>" + element.price + "</span></td>" +
            "<td class='pro-quantity'><span class='text-success'>In Stock</span></td>" +
            "<td class='pro-subtotal'><a href='cart.html' class='sqr-btn'>Add to Cart</a></td>" +
            "<td class='pro-remove'><button onClick=' deleteWishlistItem(" + index + ")' class='btn btn-danger'><i class='fa fa-trash-o'></i></button></td>" +
            "</tr>";

        $("#wishlistTable").find('tbody').append(wishlistItem);


    });


});

// remove product form wishlist
function deleteWishlistItem(id) {
    // alert(id);

    var wishlist = JSON.parse(localStorage.getItem('wishlistObj'));
    wishlist.splice(id, 1);
    localStorage.setItem('wishlistObj',JSON.stringify(wishlist)); 
    console.log(JSON.parse(localStorage.getItem('wishlistObj')));

}

