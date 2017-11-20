var gifApp = {
    defaultButtons:['cats','dogs','sheep','cars','starcraft'],
    displayButtons : function(buttons){
        if(Array.isArray(buttons)){
            for(var i =0;i<buttons.length;i++){
                $('#buttons').append($(`<button class='imgButton'>${buttons[i]}</button>`));
            }
        }
        else{
            $('#buttons').append($(`<button class='imgButton'>${buttons}</button>`));
        }
    },

};
gifApp.displayButtons(gifApp.defaultButtons);
$('body').on('click','.imgButton',function(){
    var searchQuery = $(this).text();
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    searchQuery + "&api_key=dc6zaTOxFJmzC&limit=10";
    $.ajax({
        url:queryURL,
        method:'GET'
    }).done(function(response){
        var gifs = response.data;
        for(var i = 0; i<gifs.length;i++){
            var newSpan = $('<span>');
            newSpan.append($(`<h3>Rating: ${gifs[i].rating}</h3>`));
            newSpan.append($(`<img state="still" data-still=${gifs[i].images.fixed_height_small_still.url} data-moving=${gifs[i].images.fixed_height_small.url} src = ${gifs[i].images.fixed_height_small_still.url}>`));
            $('#imageHolder').append(newSpan);
        }
    });
});
$('body').on('click','img',function(){

});