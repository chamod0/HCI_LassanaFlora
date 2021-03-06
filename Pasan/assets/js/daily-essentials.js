$(document).ready(function () {

    $(".js-range-slider").ionRangeSlider();

    $("#priceRange").on("change", function () {
        var $this = $(this),
            value = $this.prop("value").split(";");
            var minPrice = value[0];
            var maxPrice = value[1];
            console.log("Lower Price = " + minPrice + " , Upper Price = " + maxPrice);
    });


    $.getJSON("data/daily-essentials.json", function (data) {
        var item = "";
        $.each(data.popular, function (key, value) {
            item +="<div class='product-item text-center'>"+
            "<div class='product-thumb'>"+
            "<a href='product-details.html'><img src='assets/img/product/product-img1.jpg'></a>"+
            "<div class='product-action-link'>"+
            "<a href='#' title='Add To Wishlist'><i class='icon-heart'></i></a>"+
            "<a href='#' title='Compare'><i class='icon-shuffle'></i></a>"+
            "<a href='#' title='Quick View' data-target='#quick_view' data-toggle='modal'><i class='icon-eye'></i></a>"+
            "</div>"+
            "</div>"+
            "<div class='product-content'>"+
            "<div class='tag-cate'>"+
            "<a href='product-details.html'>fruit</a>"+
            "</div>"+
            "<div class='product-name'>"+
            "<a href='product-details.html'>porro quisquam</a>"+
            "</div>"+
            "<div class='price-box'>"+
            "<span class='regular-price'>$65.00</span>"+
            "<span class='old-price'><del>$75.00</del></span>"+
            "</div>"+
            "</div>"+
            "<div class='product-hover-content'>"+
            "<div class='product-ratings'>"+
            "<span class='good'><i class='icon-star'></i></span>"+
            "<span class='good'><i class='icon-star'></i></span>"+
            "<span class='good'><i class='icon-star'></i></span>"+
            "<span class='good'><i class='icon-star'></i></span>"+
            "<span class='good'><i class='icon-star'></i></span>"+
            "<span><i class='icon-star'></i></span>"+
            "</div>"+
            "<div class='add-to-cart'>"+
            "<a href='#'><i class='icon-handbag'></i></a>"+
            "</div>"+
            "</div>"+
            "</div>";
        });
        // document.getElementById('product-trend').innerHTML = item;
    });
});

function getProductDetails(){
    var item = $(this);
    console.log(item.parent().parent());

    // window.location.href = "../product-details.html";
}

$("a#getProduct").on("click", function (event){
    var item = $(this);
    var itemImage = item.parent().parent().parent().children(".seller-thumb").children("a").children("img").attr('src')
    var pDetails = item.parent().parent();
    var itemTag = pDetails.children(".tag-cate").children().text();
    var itemName = pDetails.children(".product-name").children().text();
    var itemPrice = pDetails.children(".price-box").children("span.regular-price").text();

    var itemJSON = {
        "tag": itemTag,
        "name": itemName,
        "price": itemPrice,
        "image": itemImage
    }
    localStorage.setItem('currentProduct', JSON.stringify(itemJSON));
    console.log(JSON.parse(localStorage.getItem('currentProduct')));
    window.location.href = "item-details.html";
    return false;
});