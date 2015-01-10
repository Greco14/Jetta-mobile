window.fbAsyncInit = function() {
	FB.init({
		appId      : '1507088162913655',
		xfbml      : true,
		version    : 'v2.2'
	});

};
function shareiT(picture, copy){
	console.log(picture,copy);
	var txt;
	if(copy == 1){
		txt = 'Porque con Nuevo Jetta no tienes que elegir un solo estilo, conócelo.';
	}
	FB.ui(    {
    method: 'share',
    name: 'Nuevo Jetta, Volkswagen México.',
    link: 'http://localhost:8888',
    caption: 'Nuevo Jetta, Volkswagen México.',
    description: 'Nuevo Jetta: elegante, deportivo e innovador. Te damos 9 poderosas razones para quererlo.',
    message: txt
   },    
  function (response) {
      if (response && response.post_id) {
        
      } else {

      }
     }
  );

}