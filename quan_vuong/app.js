$(document).ready(
    function() {
        $("#random").on("click", function() {
            // Lookup `preventDefault`; it stops the browser's default action,
            // which is to make a synchronous submission of the form.
            // http://api.jquery.com/category/events/event-object
            event.preventDefault();

            function showRandom(json) {
            	console.log(json);
            	console.log(json.data.image_original_url);
                // var res = $.parseJSON(json);
                // console.log('res', res)
                $("#img1").attr("src", json.data.image_original_url)
                $("#img1").css("width", "50%");
            }
            $.ajax({
                    type: "GET",
                    url: 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC',
                    data: { get_param: 'url' },
                    success: showRandom
                })
                // $.ajax({
                //   url: 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=' + tag,
                //   success: showRandom
                // })
            $.ajax({
                    type: "GET",
                    url: 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC',
                    data: { get_param: 'url' },
                    success: showRandom
                })



        });
    }
)
