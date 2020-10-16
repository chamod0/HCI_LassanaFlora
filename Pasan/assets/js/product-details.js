$(document).ready(function () {

    if (JSON.parse(localStorage.getItem('wishlistObj')) != null) {
        var item = JSON.parse(localStorage.getItem('currentProduct'));

        console.log(item.image);
        // document.getElementsByClassName("productImage").src = "Pasan/"+item.image;
        // $("#productImage").children("div").children("img").attr("src",item.image)
        $(".productImage").attr("src", "Pasan/" + item.image);
        $("#productName").text(item.name);
        $("#productPrice").text(item.price);

    }

    $("a#adtoWishlsit").on("click", function () {

        // alert('workd');

        var wishlistArr = JSON.parse(localStorage.getItem('wishlistObj'));
        var item = JSON.parse(localStorage.getItem('currentProduct'));

        wishlistArr.push(item);
        localStorage.setItem('wishlistObj', JSON.stringify(wishlistArr));
        console.log(wishlistArr);

        Swal.fire({
            title: "<i>SUCCESS</i>",
            html: item.name+" successfully added to the <b>WISHLIST</b>",
            confirmButtonText: "<u>close</u>",
        });

        return false;

    });


});
