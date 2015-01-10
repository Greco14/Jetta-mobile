Scroll = function (){
	this.settings={
		isAnimated : false,
		start_view: 0,
		last_view: 9,
		go_down: false,
		go_up: false,
		moveIt2: 0,
		moveIt3: 0,
		
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
	// var this_view = $('#razon0').height();
	// var el_top = $('#razon0').offset().top;
	// s.moveIt3 = ( s.window_h-this_view );



	s.view_touch.swipe({
		swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
			var cuales = $(this).attr('data-es');
			
			if(direction == 'up'){
				console.log('the one that goes down :'+cuales);
				self.moveMe_up(cuales, distance);
			}
			if(direction == 'down'){
				console.log('the one that goes up :'+cuales);
				self.moveMe_down(cuales, distance);			
			}

        },
	});

	
 };

Scroll.prototype.moveMe_up = function (num, distance){
	var self = this,
		s = self.settings;
	var this_view = $('#razon'+num).height();
	var el_top = $('#razon'+num).offset().top
	var dif = ( s.window_h-this_view );
	var moveIt = (distance)/2;
	
	s.moveIt2++;
	var elMove = (s.moveIt2)*moveIt;

	if(el_top == 0){
		s.go_up = false;
	}
	if(el_top == dif){
		s.go_up = true;
	}

	if(s.isAnimated){
		return false;
	}
	if( -elMove <= dif ){
		elMove = (dif)*(-1);
		// console.log(elMove+' ya me tengo que poner en el tope')
	}
	if(s.go_up){
		self.scrollMe_up(num);
		s.go_up = false;
		// console.log('mooooove');
	}else{
		self.tlScroll.to($('#razon'+num),0.15,{
			top: -elMove,
			ease: Cubic.easeOut,
			onComplete: function(){
				
			}
		});
	}
	
	
};
Scroll.prototype.moveMe_down = function (num, distance){
	var self = this,
		s = self.settings;
	var this_view = $('#razon'+num).height();
	var el_top = $('#razon'+num).offset().top
	var dif = ( s.window_h-this_view );
	console.log('empiezo en: '+s.moveIt2)
	var moveIt = (distance)/4;
	s.moveIt3--;
	var elMove = el_top-(s.moveIt3*moveIt);
	console.log('move it to: '+elMove);

	if(el_top == 0){
		s.go_down = true;
	}
	if(el_top == dif){
		s.go_down = false;
	}

	if(s.isAnimated){
		return false;
	}
	if( elMove >= 0){
		elMove = 0;
	}
	if(s.go_down){
		self.scrollMe_down(num);
	}else{
		self.tlScroll2.to($('#razon'+num),0.15,{
			top: elMove,
			ease: Cubic.easeOut,
			onComplete: function(){
				
			}
		});
	}

	
};

Scroll.prototype.scrollMe_up = function (num){
	var self = this,
		s = self.settings;
	var newNum = parseInt(num)+1;
	var this_view = $('#raz'+newNum).height();
	var gotMe_top = s.window_h;
	s.moveIt2 = 0;
	if(s.isAnimated){
		return false;
	}
	if( newNum > s.last_view){
		return false;
	}

	self.tlScroll.to(
		$('#raz'+newNum), 0.75,{
			top: 0,
			ease: Cubic.easeOut
		});
};
Scroll.prototype.scrollMe_down = function (num){
	var self = this,
		s = self.settings;
	var newNum = num;
	var this_view = $('#raz'+newNum).height();
	// console.log('#raz'+newNum);
	var gotMe_top = $(window).height();
	// console.log(newNum);
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
		$('#raz'+num), 0.75,{
			top: gotMe_top+50,
			ease: Cubic.easeIn
		});

};





