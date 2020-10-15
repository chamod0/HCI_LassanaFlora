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
            item +="<div class='product-item text-center'>";
            item +="<div class='product-thumb'>";
            item +="<a href='product-details.html'><img src='assets/img/product/product-img1.jpg'></a>";
            item +="<div class='product-action-link'>";
            item +="<a href='#' title='Add To Wishlist'><i class='icon-heart'></i></a>";
            item +="<a href='#' title='Compare'><i class='icon-shuffle'></i></a>";
            item +="<a href='#' title='Quick View' data-target='#quick_view' data-toggle='modal'><i class='icon-eye'></i></a>";
            item +="</div>";
            item +="</div>";
            item +="<div class='product-content'>";
            item +="<div class='tag-cate'>";
            item +="<a href='product-details.html'>fruit</a>";
            item +="</div>";
            item +="<div class='product-name'>";
            item +="<a href='product-details.html'>porro quisquam</a>";
            item +="</div>";
            item +="<div class='price-box'>";
            item +="<span class='regular-price'>$65.00</span>";
            item +="<span class='old-price'><del>$75.00</del></span>";
            item +="</div>";
            item +="</div>";
            item +="<div class='product-hover-content'>";
            item +="<div class='product-ratings'>";
            item +="<span class='good'><i class='icon-star'></i></span>";
            item +="<span class='good'><i class='icon-star'></i></span>";
            item +="<span class='good'><i class='icon-star'></i></span>";
            item +="<span class='good'><i class='icon-star'></i></span>";
            item +="<span class='good'><i class='icon-star'></i></span>";
            item +="<span><i class='icon-star'></i></span>";
            item +="</div>";
            item +="<div class='add-to-cart'>";
            item +="<a href='#'><i class='icon-handbag'></i></a>";
            item +="</div>";
            item +="</div>";
            item +="</div>";
        });
        $('#product-trend').append(item);
    });
});