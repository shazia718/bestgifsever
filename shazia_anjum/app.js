alert('jquery is working')
function appendGif(data){
	$('.images').empty()
	var url = data.data.image_url;
	var image = document.createElement('img')
	image.setAttribute('src', url)
	$('.images').append(image)

}
function trendGif(data){
 	$('.images').empty()
 	for(var i = 0 ; i <25 ; i++){

   	   var url = data.data[i].images.downsized.url
 		var images = document.createElement('img')
 	    images.setAttribute('src',url)
 	    $('.images').append(images)
 	
    }
}
function search(data){
	$('.images').empty()
	for(var i = 0 ; i < 25 ; i++){
		var url = data.data[i].images.downsized.url
		var images = document.createElement('img')
		images.setAttribute('src' , url)
		$('.images').append(images)
	}
	$('input').val('');
}
$('#random').on('click',function(event){

$.ajax({
	url: 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC'  ,
	success: appendGif 
	
});
})

$('#trend').on('click',function(event){
	$.ajax({
		url: 'http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC',
		success: trendGif
	})
})
var button = document.getElementsByTagName('button')[0]
button.addEventListener('click',function(event){
	var input = $('input').val().split(' ').join('+');

	
$.ajax({
	url: 'http://api.giphy.com/v1/gifs/search?q=' + input + '&api_key=dc6zaTOxFJmzC',
	success: search
	
})
})









