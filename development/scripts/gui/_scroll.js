Scroll = function (){
	this.settings={
		isAnimated : false,
		start_view: 0,
		last_view: 9,
		fst_time: false,
		snd_time: false,
		trd_time: false,
		fst_timeD: false,
		snd_timeD: false,
		trd_timeD: false,
		view_0 : $('#razon0'),
		view_1 : $('#razon1').height(),
		view_2 : $('#razon2').height(),
		view_3 : $('#razon3').height(),
		view_4 : $('#razon4').height(),
		view_5 : $('#razon5').height(),
		view_6 : $('#razon6').height(),
		view_7 : $('#razon7').height(),
		view_8 : $('#razon8').height(),
		view_9 : $('#razon9').height(),
		topDown: $('.topMeDwon'),
		nonOnes: $('.nonOnes'),
		window_h : $(window).height(),
		view_touch : $('.holdView'),
		time_duration: 0.5,
	};
	this.tlScroll = new TimelineLite();
	this.tlScroll2 = new TimelineLite();
};

Scroll.prototype.init = function (){
	var self = this,
		s = self.settings;
	self.bind();

};


Scroll.prototype.bind = function (){
	var self = this,
		s = self.settings;
		s.topDown.css({top: s.window_h+100 });
	s.view_touch.scroll(function (event) {
		//     var scroll = $(window).scrollTop();
		var num = $(this).attr('data-es');
		var this_view = $('#raz'+num).height();
		var el_top = $('#raz'+num).offset().top
		var dif = ( s.window_h-this_view );
		if(el_top <= dif ){
			s.fst_time = true;
			console.log('Ya alcanzo el tope');
		}
	});
	s.view_touch.swipe({
		swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
			var cuales = $(this).attr('data-es');
			console.log(distance);
			// if(direction == 'up'){
			// 	console.log('the one that goes down :'+cuales);
			// 	self.moveMe_up(cuales, distance);
			// }
			// if(direction == 'down'){
			// 	console.log('the one that goes up :'+cuales);
			// 	self.moveMe_down(cuales, distance);			
			// }

        },
	});

	// s.view_touch.swipe( {
 //        //Generic swipe handler for all directions

 //        swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
	// 		var cuales = $(this).attr('data-es');
	// 		if(direction == 'up'){
	// 			console.log('the one that goes down :'+cuales);
	// 			self.moveMe_up(cuales);
	// 		}
	// 		if(direction == 'down'){
	// 			console.log('the one that goes up :'+cuales);
	// 			self.moveMe_down(cuales);			
	// 		}

 //        },
 //        //Default is 75px, set to 0 for demo so any distance triggers swipe
 //         threshold:0
 //      });
 };

Scroll.prototype.moveMe_up = function (num, distance){
	var self = this,
		s = self.settings;
	var this_view = $('#raz'+num).height();
	var el_top = $('#raz'+num).offset().top
	var dif = ( s.window_h-this_view );


	if(s.isAnimated){
		return false;
	}
	if(el_top <= dif ){
		s.fst_time = true;
		console.log('Ya alcanzo el tope');
	}
	if(s.fst_time){
		// var this_view = $('#razon'+num-1).height()
		s.fst_time = false;
		s.fst_timeD = true;
		s.snd_time = true;

		var dif = ( s.window_h-this_view );
		var elvalor = parseInt(num)+1;
		console.log('this_view altura: '+ this_view +' window view: '+s.window_h);
		self.tlScroll.to($('#raz'+elvalor),s.time_duration,{
			top: dif,
			ease: Cubic.easeOut
		});

	}
	// if(s.snd_time){
	// 	s.snd_time = false;
	// 	s.trd_time = true;
	// 	s.fst_timeD = true;

	// 	// var dif = ( s.window_h-this_view );
	// 	var elvalor = parseInt(num);
	// 	console.log('this_view altura: '+ this_view +' window view: '+s.window_h);
	// 	self.tlScroll.to($('#razon'+elvalor),s.time_duration,{
	// 		top: dif*2,
	// 		ease: Cubic.easeOut
	// 	});
		
	// }
	// if(s.trd_time)
		else{
		self.scrollMe_up(num);
		s.fst_timeD = true;
		s.snd_timeD = true;
	}
	
};
Scroll.prototype.moveMe_down = function (num){
	var self = this,
		s = self.settings;
	var this_view = $('#razon'+num).height();
	var el_top = $('#raz'+num).offset().top
	var dif = ( s.window_h-this_view );


	if(s.isAnimated){
		return false;
	}
	if(el_top == 0){
		s.fst_timeD = true;
		self.scrollMe_down(num);
		console.log('Ya me puedo ir pabajo');
	}
	if(s.fst_timeD){
		// var this_view = $('#razon'+num-1).height()
		s.fst_time = false;
		// var dif = ( s.window_h-this_view );
		var elvalor = parseInt(num);
		//console.log('this_view altura: '+ this_view +' window view: '+s.window_h);
		self.tlScroll.to($('#razon'+num),0.75,{
			top: 0,
			ease: Cubic.easeIn,
			onComplete: function(){

			}
		});

	}else{
		self.scrollMe_down(num);
		s.fst_timeD = true;
	}
	// if(s.fst_timeD){
	// 	// var this_view = $('#razon'+num-1).height()
	// 	s.trd_time = false;
	// 	s.fst_timeD = false;
	// 	s.snd_timeD = true;
	// 	var dif = ( s.window_h-this_view );
	// 	var elvalor = parseInt(num);
	// 	console.log('this_view altura: '+ this_view +' window view: '+s.window_h);
	// 	self.tlScroll.to($('#razon'+elvalor),s.time_duration,{
	// 		top: 0,
	// 		ease: Cubic.easeOut
	// 	});

	// }
	// if(s.snd_timeD){
	// 	s.snd_timeD = false;
	// 	s.trd_timeD = true;
	// 	s.trd_time = true;
	// 	var dif = ( s.window_h-this_view )/2;
	// 	var elvalor = parseInt(num);
	// 	console.log('this_view altura: '+ this_view +' window view: '+s.window_h);
	// 	self.tlScroll.to($('#razon'+elvalor),s.time_duration,{
	// 		top: dif*2,
	// 		ease: Cubic.easeOut
	// 	});
		
	// }if(s.trd_timeD){
	// 	self.scrollMe_down(num);
	// 	s.fst_time = true;
	// }
	
};

Scroll.prototype.scrollMe_up = function (num){
	var self = this,
		s = self.settings;
	var newNum = parseInt(num)+1;
	var this_view = $('#raz'+newNum).height();
	var gotMe_top = s.window_h;
	console.log(newNum);
	if(s.isAnimated){
		return false;
	}
	if( newNum > s.last_view){
		return false;
	}
	self.tlScroll.to(
		$('#raz'+newNum), 1.75,{
			top: 0,
			ease: Cubic.easeOut
		});
};
Scroll.prototype.scrollMe_down = function (num){
	var self = this,
		s = self.settings;
	var newNum = parseInt(num);
	var this_view = $('#raz'+newNum).height();
	console.log('#raz'+newNum);
	var gotMe_top = 2000;
	console.log(newNum);
	if(s.isAnimated){
		return false;
	}
	if(num==0){
		console.log('No debo bajar');
		return false;

	}
	if( newNum < s.start_view){
		return false;
	}

	self.tlScroll2.to(
		$('#raz'+num), 1.75,{
			top: gotMe_top,
			ease: Cubic.easeIn
		});

};





