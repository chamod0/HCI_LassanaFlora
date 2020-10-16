$(function () {

    // $("a#blogItem").on("click", function (event){
    //     var item = $(this);
    //     var pDetails = item.parent().parent();
    //     var blogImage = item.parent().parent().parent().children(".seller-thumb").children("a").children("img").attr('src')
    //     var itemTitle = pDetails.children(".tag-cate").children().text();
    
    //     var itemJSON = {
    //         "tag": itemTag,
    //         "name": itemName,
    //         "price": itemPrice,
    //         "image": itemImage
    //     }
    //     localStorage.setItem('currentProduct', JSON.stringify(itemJSON));
    //     console.log(JSON.parse(localStorage.getItem('currentProduct')));
    //     window.location.href = "../product-details.html";
    //     return false;
    // });

    $("#post1Content").load("data/blog/flower/post1.html");
    $("#post2Content").load("data/blog/fruit/post1.html");
    $("#post3Content").load("data/blog/gift/post1.html");
    $("#post4Content").load("data/blog/cake/post1.html");
    $("#post5Content").load("data/blog/flower/post2.html");
});