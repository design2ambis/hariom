function addQty(){
    var qty = $("#qty").val();
    $("#qty").val(parseInt(qty)+1);
}
function minusQty(){
    var qty = $("#qty").val();
    if(qty>1){
        $("#qty").val(parseInt(qty)-1);    
    }
}
function addCart(a){
    
    var qty = $("#qty").val();
    
    $.ajax({
            url: 'php/insert',
            type: 'POST', 
            data:{
              add_into_cart:"1",
              a:a,
              qty:qty
            },
            dataType: 'json', 
            success: function(data) {
                if (data.status===200){                
                    swal("Success", "Redirecting...", "success").then(function(){location.reload();});
                }else{
                    swal("Failed", data.msg , "error");
                }
            },
            error: function(xhr, status, error) {
                console.log(error);
            } 
        });
    
}

function searchItem(){
    
    var str = $("#search_param").val();
    
    if(str.length>0 && str!==''){
        
        $("#displaySearchvalue").show();
    
        $.ajax({
                url: 'action/insert',
                type: 'POST', 
                data:{
                  search_products:"1",
                  str:str
                },
                dataType: 'text', 
                success: function(data) {
                     $("#displaySearchvalue").html(data);
                },
                error: function(xhr, status, error) {
                    console.log(error);
                } 
            });
        
    }else{
        
        $("#displaySearchvalue").hide();
        
    }
    
}

function confirmOrder(){
    
    var a = {};
    
    a['fname'] = $("#firstName").val();
    a['lname'] = $("#lastName").val();
    a['cname'] = $("#companyName").val();
    a['add'] = $("#address").val();
    a['city'] = $("#townCity").val();
    a['state'] = $("#stateCountry").val();
    a['zip'] = $("#zipcode").val();
    a['phone'] = $("#phone").val();
    a['save'] = $("#shippingAddressEscape").val();
    
    if(a.fname.length>0 && a.phone.length>0){
    
        $.ajax({
                url: 'action/insert',
                type: 'POST', 
                data:{
                  order_confirmation:"1",
                  a:a
                },
                dataType: 'json',
                beforeSend:function() {    
                    $('.page-loader').show();
                    
                },
                success: function(data) {
                    if(data.status==true){
                        $('.page-loader').fadeOut('slow');
                        swal("Success", "Order submitted...", "success").then(function(){ window.location.href='index.php';});
                    }
                },
                error: function(xhr, status, error) {
                    console.log(error);
                } 
            });
        
    }else{
        
        swal("Warning", "Oops please fill manditory details" , "warning");
        
    }
    
}

function loginFirst(){
      swal("Oops", "Login first", "warning");
}

function selectMultiple(a){
    var type = "";
    if ($("#proid"+a).is(':checked')){
        type = "add";
    }else{
        type = "delete";
    }
    
    $.ajax({
        method: "POST",
        url: "php/insert",
        data: {insert_tmp_cart:1, a:a, type:type},
        success: function(data) {
            $("#btnCount").html(data+" items selected");
        }
    });
    
    
}

function addtocarttemp(){
    
    $.ajax({
            method: "POST",
            url: "php/insert",
            data: {add_to_cart_temp:1},
            success: function(data) {
                swal("Good!", "Selected Items Added To Cart", "success").then(function(){ location.reload();});
            }
        });

}

function getOrderDet(a){
    
    $.ajax({
            url: 'php/fetch',
            type: 'POST', 
            data:{
              get_order_det:"1",
              a:a
            },
            dataType: 'text', 
            success: function(data) {
                $("#fetchhere").html(data);
            },
            error: function(xhr, status, error) {
                console.log(error);
            } 
        });
    
}

$("#contactForm").on('submit', function(e) {
        e.preventDefault();
        let formData = new FormData(e.target);
        
        fetch('php/insert',{method: 'POST',body: formData})
        .then($("#submit").attr("disable",true))
        .then(RawResponce => RawResponce.json())
        .then(ParsedResponse => {
                if (ParsedResponse.status===200){
                    swal("Good!", "Your message sended to our admin", "success").then(() =>{window.location.href="contact.php"});
                }else{
                    swal("Oops!", ParsedResponse.message, "warning");
                }
            
        })
        .catch((error) => {
            swal("Oops", error, "warning");
        });
    });
    
$('.modal-footer').on("click","#clrmod", function(e){
    $("#fetchhere").html("");
});