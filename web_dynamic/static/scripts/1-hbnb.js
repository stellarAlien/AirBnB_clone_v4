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
