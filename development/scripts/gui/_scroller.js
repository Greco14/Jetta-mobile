Scroller = function (){
	this.settings={
		start_view: 0,
		last_view: 9,
		view_0 : $('#razon0'),
		view_1 : $('#razon1'),
		view_2 : $('#razon2'),
		view_3 : $('#razon3'),
		view_4 : $('#razon4'),
		view_5 : $('#razon5'),
		view_6 : $('#razon6'),
		view_7 : $('#razon7'),
		view_8 : $('#razon8'),
		view_9 : $('#razon9'),
		topDown: $('.topMeDwon'),
		nonOnes: $('.nonOnes'),
		window_h : $(window).height()
	};
};

Scroller.prototype.init = function (){
	var self = this,
		s = self.settings;
	self.bind();

};


Scroller.prototype.bind = function (){
	var self = this,
		s = self.settings;

	self.animations('set_size');
	$(window).resize(function(){
		self.animations('reset_size');
	});

	// var alto1 = $("#razon0").height();
	// $('body').on('click',function(event){event.preventDefaul();});
	$(window).scroll(function (event) {
	    var scroll = $(window).scrollTop();
	    // Do something
	    // console.log(alto1-scroll);
	    // $('.telmeHow').html(scroll);
	    self.scroll(scroll)
	    // $("#razon1").css({height: scroll+"px", top: alto1-scroll+"px"});
	});
};
Scroller.prototype.animations = function (action){
	var self = this,
		s = self.settings;
		switch(action){
			case 'set_size':
				s.topDown.css({top:3500 })
				break;
			case 'reset_size':
				// s.nonOnes.css({top:3500})
				break;	
		};
};
Scroller.prototype.scroll = function( howMuch, cual ){
	var self = this,
		s = self.settings;

	var alto_0 = s.view_0.height();
	var dife_0 =  (alto_0 - s.window_h ) - howMuch;
	

	var alto_1 = s.view_1.height();
	var dife_1 =  (alto_1 - s.window_h ) ;

// console.log('dife 0: '+dife_0+' dife_1:'+dife_1+' scroll:'+howMuch );
	var alto_2 = s.view_2.height();
	var dife_2 =  (alto_2 - s.window_h ) - howMuch;

	var alto_3 = s.view_3.height();
	var dife_3 =  (alto_3 - s.window_h ) - howMuch;

	var alto_4 = s.view_4.height();
	var dife_4 =  (alto_4 - s.window_h ) - howMuch;

	var alto_5 = s.view_5.height();
	var dife_5 =  (alto_5 - s.window_h ) - howMuch;

	var alto_6 = s.view_6.height();
	var dife_6 =  (alto_6 - s.window_h ) - howMuch;

	var alto_7 = s.view_7.height();
	var dife_7 =  (alto_7 - s.window_h ) - howMuch;

	if(s.window_h < alto_0){
		// s.view_0.css({ top: - howMuch+"px"});
		// s.view_1.css({top: howMuch+s.window_h+40 +"px"});
	// }
	// if( dife_0 <= 0 ||   ){

		// var altot1 = howMuch - dife_0;
		// var top1 = s.window_h-altot1;

		// var altot2 = howMuch -(alto_0);
		// var top2 =  s.window_h -altot2;

		// console.log(top2);
		// s.view_1.css({top: top1+"px"});
		
		// if(s.window_h > 580){
		// 	s.view_2.css({top: top2  +"px"});
		// }
	
		
	}
};






