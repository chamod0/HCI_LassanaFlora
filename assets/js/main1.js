$("#submit").click(function(){
	var o_id = $("#o_id").val();
	var name = $("#name").val();
	var email = $("#email").val();
	var phone = $("#phone").val();
	var category = $("#category").val();
	var comment = $("#comment").val();
	var payment = $("#payment").val();
	
	
if(o_id == '' || name =='' || email =='' || phone ==''|| category == '' || comment == ''|| payment ==''){
	
	alert("please fill the missing values");

}else{

	

		confirm("Order Id : "+o_id+"\n Name : "+name+"\n Email : "+email+"\n Phone No: "+phone+"\n Category : "+category+"\n Comment: "+comment+"\n Payment Method : "+payment);	





}

	

});