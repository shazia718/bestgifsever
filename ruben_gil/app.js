if(location.pathname === '/page-4'){
	$.ajax({
		url: 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC',
		success: function(result){
			$('.images').append('<div class="image">' + '<img src="' + result.data.image_url + '"' + '>' + '</div>')
			//console.log(result.data.image_url);
		}	
	})
} else if(location.pathname === '/page-5'){
	var imgNum = 0;
	//var imgArr = []
	$.ajax({
		url: 'http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC',
		success: function(result){
			var imgArr = result.data;
			
			if(parseInt(imgArr[imgNum].images.downsized.height) > 550){
				$('.images').html('<div class="image">' + '<img src="' + imgArr[imgNum].images.fixed_height.url + '"' + '>' + '</div>')
			} else {
				$('.images').html('<div class="image">' + '<img src="' + imgArr[imgNum].images.downsized.url + '"' + '>' + '</div>')
			}
			
			

			$('button').on('click', function(){
				imgNum++;

				if(imgNum >= 25) imgNum = 0;
				var img = imgArr[imgNum].images.downsized;
				
				if(parseInt(img.height) > 550) img = imgArr[imgNum].images.fixed_height

				$('.images').html('<div class="image">' + '<img src="' + img.url + '"' + '>' + '</div>')
			})
			
		}	
	})

	// $('button').on('click', function(){
	// 	if(imageNum >= 25) imageNum = 0;

	// 	$('.images').html('<div class="image">' + '<img src="' + result.data[0].images.downsized.url + '"' + '>' + '</div>')
	// })
}

