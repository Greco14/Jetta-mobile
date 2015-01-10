Colorpick = function(){
	this.settings={
		picker : $('.circlesColor'),
		circles : $('.holdCircles'),

	};
};
Colorpick.prototype.init = function(){
	var self = this,
		s = self.settings;
	self.bind();

};
Colorpick.prototype.bind = function(){
	var self = this,
		s = self.settings;
	s.picker.on('click', function(){
		var wichIs = $(this).attr('data-color');
		for (var i = 1; i < 8; i++) {
			// console.log(i);
			s.circles.removeClass('secuencia-'+i);
		};
		s.circles.addClass('secuencia-'+wichIs);
	});
};