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