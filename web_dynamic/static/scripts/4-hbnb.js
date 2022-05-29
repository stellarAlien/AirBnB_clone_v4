$(document).ready(function(){
    let amenity_dict = {};
    $('input[type=checkbox]').change(function(){
        let name = $(this).attr('data-name');
        if($(this).is('checked'){
            amenity_dict[($(this).attr('data-id'))] =  $(this).attr('data-name')
        }
        else{
            delete amenity_dict[($(this).attr('data-id'))];
        }
        $('div-amenities h4').html(Object.values(amenitiesList).join(', ') || '&nbsp;');
    });
});

$.ajax({
    type: 'GET',
    url: "http://0.0.0.0:5001/api/v1/status",
    success: function(res){
        if(res.status == 200){
            $('div#api_status').addClass('avaliable');
        }
        else{
        if($('div#api_status').hasClass('available')){
            $('div#api_status').removeClass('available');
        }
    }
}});

$.ajax({
    url: 'http://localhost:5001/api/v1/places_search',
    type: 'POST',
    data: '{}',
    contentType: 'application/json',
    dataType: 'json',
    success: function (places) {
      const lenPlaces = places.length;
      for (let i = 0; i < lenPlaces; i++) {
        $('section.places').append(`<article>
          <div class="title_box">
            <h2>${places[i].name}</h2>
            <div class="price_by_night">${places[i].price_by_night}</div>
          </div>
          <div class="information">
            <div class="max_guest">${places[i].max_guest}${places[i].max_guest > 1 ? ' Guests' : ' Guest'} </div>
        <div class="number_rooms">${places[i].number_rooms}${places[i].number_rooms > 1 ? ' Bedrooms' : ' Bedroom'}</div>
                  <div class="number_bathrooms">${places[i].number_bathrooms}${places[i].number_bathrooms > 1 ? ' Bathrooms' : ' Bathroom'}</div>
          </div>
          <div class="user">                  
                </div>
                <div class="description">
            ${places[i].description}
                </div>
        </article>`);
      }
    }
  });

  $('button').click(function () {
    $('article').remove();
    $.ajax({
      type: 'POST',
      url: 'http://0.0.0.0:5001/api/v1/places_search/',
      data: JSON.stringify({'amenities': Object.keys(amenity_dict)}),
      contentType: 'application/json',
      success: function (data) {
	for (let i = 0; i < data.length; i++) {
	  $('section.places').append('<article><div class="title"><h2>' + data[i].name + '</h2><div class="price_by_night">' + data[i].price_by_night + '</div></div><div class="information"><div class="max_guest"><i class="fa fa-users fa-3x" aria-hidden="true"></i><br />' + data[i].max_guest + ' Guests</div><div class="number_rooms"><i class="fa fa-bed fa-3x" aria-hidden="true"></i><br />' + data[i].number_rooms + ' Bedrooms</div><div class="number_bathrooms"><i class="fa fa-bath fa-3x" aria-hidden="true"></i><br />' + data[i].number_bathrooms + ' Bathroom</div></div><div class="description">' + data[i].description + '</div></article>');
	}
      }
    });
  });