console.log('app.js - is loaded correctly')

    $('#rand-form').on('submit', function(event) {
        event.preventDefault()

        $('#imgDiv').empty()


    var input = $(this).serializeArray()['0'].value
    var splitInput = input.split(" ").join("+")
        console.log(splitInput)

        $.ajax({
                url: 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=' + splitInput,
                success: function (search) {
                    var gifUrl = search.data.image_url
                    var gifImg = document.createElement('img')
                    gifImg.setAttribute('src', gifUrl)
                    $('#imgDiv').append(gifImg)
                 }   
          })

        $.ajax({
          url: 'http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&limit=10',
          success: function (trend) {
            var trendArray = {}
            for(var i = 0; i <= 10; i++) {
              trendArray.push(trend.data[i].images.original.url)
            }
            
          }
        })

    })


http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&limit=10