Main ={
	init: function(){
		colorpick = new Colorpick();
		colorpick.init();
		// scroller = new Scroller();
		// scroller.init();
		scroll = new Scroll();
		scroll.init();
	}
};
$(function(){

	Main.init();
	// var alto1 = $("#razon0").height();
	// $('body').on('click',function(event){event.preventDefaul();});
	// $(window).scroll(function (event) {
	//     var scroll = $(window).scrollTop();
	//     // Do something
	//     console.log(alto1-scroll);
	//     // $('.telmeHow').html(scroll);
	//     $("#razon1").css({height: scroll+"px", top: alto1-scroll+"px"});
	// });
	
	// var controller = new ScrollMagic({container: "#wrapper"});
	  

});
(function(d, s, id){
 var js, fjs = d.getElementsByTagName(s)[0];
 if (d.getElementById(id)) {return;}
 js = d.createElement(s); js.id = id;
 js.src = "//connect.facebook.net/en_US/sdk.js";
 fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));