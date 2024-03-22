jQuery(function(o){o(".contact-form").submit(function(){return $this=o(this),o.post(o(this).attr("action"),function(o){$this.prev().text(o.message).fadeIn().delay(3e3).fadeOut()},"json"),!1})}),$(document).ready(function(){function o(){$(window).width()>980?($(".navbar-default .dropdown").on("mouseover",function(){$(".dropdown-toggle",this).next(".dropdown-menu").show()}).on("mouseout",function(){$(".dropdown-toggle",this).next(".dropdown-menu").hide()}),$(".dropdown-toggle").click(function(){$(this).next(".dropdown-menu").is(":visible")&&(window.location=$(this).attr("href"))})):$(".navbar-default .dropdown").off("mouseover").off("mouseout")}$(window).resize(function(){o()}),o()});

$(document).ready(function(){
	// lms Submission
// 	$('#frmContact .sendlmsform').click(function (e) {
// 	    //alert('Just a Moment!!!');
// 	    //e.preventDefault();
// 	    //$(".sendlmsform").attr("disabled", true);
// 	    var name = $("#frmContact input[name='fullname']").val();
// 	    var emailid = $("#frmContact input[name='emailaddress']").val();
// 	    var phone = $("#frmContact input[name='phone']").val();
// 	    var city = $("#frmContact input[name='city']").val();
// 	    var interestedin = $("#frmContact #interestedin").val();
// 	    var message = $("#frmContact #feedback").val();
// 	    //var url_string = window.location.href;
// 	    var url = new window.URLSearchParams(window.location.search);
// 	    var utm_source = url.get("utm_source");
// 	    var utm_campaign = url.get("utm_campaign");
// 	    debugger;
	    
// 	    $.ajax({
// 	        type: "POST",
// 	        url: "https://beta.savit.in/lms/create_account_site.php",
// 	        data: { "Submit": "1",
// 	            "name":name,
// 	            "emailid":emailid,
// 	            "phone":phone,
// 	            "city":city,	
// 	            "interestedin":interestedin,    
// 	            "message":message,    
// 	            "utm_source":utm_source,	
// 	            "utm_campaign":utm_campaign	
// 	        },	
// 	        success: function (data) {
// 	            //console.log('Submission was successful.');
// 	            console.log(data);
// 	        },
// 	        error: function (data) {
// 	            //console.log('An error occurred.');
// 	            console.log(data);
// 	        },
// 	    });
// 	    //debugger;
// 	    return true;
// 	});

// 	// lms Submission of chatbot
// 	$('#chatbot__LMS .sendlmsChat').click(function (e) {
// 	    //alert('Just a Moment!!!');
// 	    //e.preventDefault();
// 	    //$(".sendlmsform").attr("disabled", true);
// 	    var name = $("#chatbot__LMS input[name='name']").val();
// 	    var emailid = $("#chatbot__LMS input[name='email']").val();
// 	    var phone = $("#chatbot__LMS input[name='phone']").val();
// 	    var city = $("#chatbot__LMS input[name='city']").val();
// 	    var interestedin = '';
// 	    var message = '';
// 	    //var url_string = window.location.href;
// 	    var url = new window.URLSearchParams(window.location.search);
// 	    var utm_source = url.get("utm_source");
// 	    var utm_campaign = url.get("utm_campaign");
// 	    debugger;
	    
// 	    $.ajax({
// 	        type: "POST",
// 	        url: "https://beta.savit.in/lms/create_account_site.php",
// 	        data: { "Submit": "1",
// 	            "name":name,
// 	            "emailid":emailid,
// 	            "phone":phone,
// 	            "city":city,	
// 	            "interestedin":interestedin,    
// 	            "message":message,    
// 	            "utm_source":utm_source,	
// 	            "utm_campaign":utm_campaign	
// 	        },	
// 	        success: function (data) {
// 	            //console.log('Submission was successful.');
// 	            console.log(data);
// 	        },
// 	        error: function (data) {
// 	            //console.log('An error occurred.');
// 	            console.log(data);
// 	        },
// 	    });
// 	    //debugger;
// 	    return true;
// 	});
});