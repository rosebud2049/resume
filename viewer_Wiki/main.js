$(document).ready(function() {

    var search = "";

    $("form").submit(function(event){

        $(".search-results").empty();

        event.preventDefault();
        search = $("#search").val();

        var url = "https://fr.wikipedia.org/w/api.php?action=opensearch&limit=10&search=" + search;

        $.ajax({
            url: url,
            dataType: 'jsonp',
            success: function(data) {
                for (var i = 1; i < data[2].length; i++) {
                    var title = data[1][i];
                    var description = data[2][i];
                    var link =  title;
                    link = link.replace(' ', '_');
                    $('<a href="https://en.wikipedia.org/wiki/'+link+'"><div class="result"><h3 class="title">'+title+'</h3><p class="description">'+description+'</p></div></a>').appendTo(".search-results");
                }
            }
        });
    })
})
