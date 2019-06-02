"use strict";

$(document).ready(function() {

    $('.js-slider__hero').slick({
        dots: true,
        dotsClass: 'hero-slider__dots',
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
    });

    $('.js-slider__news').slick({
        dots: true,
        dotsClass: 'news-slider__dots',
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        adaptiveHeight: true,
        slidesToScroll: 1
//         prevArrow
//             string (html|jQuery selector) | object (DOM node|jQuery object)
// <button type="button" class="slick-prev">Previous</button>

//         nextArrow
//             string (html|jQuery selector) | object (DOM node|jQuery object)
// <button type="button" class="slick-next">Next</button>

        // autoplay: true,
        // autoplaySpeed: 2500,
    })

});

//---------------------------------- Initialize and add the map ---------------------------------------
function initMap() {
    // The location of Beetroot Academy Chernigiv
    var beetroot = {lat: 51.4904971, lng: 31.3059363};
    // Styling The MAP
    var styledMapType = new google.maps.StyledMapType(
    [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dadada"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
    ], {name: 'Styled Map'});


    // The map, centered at Beetroot
    var map = new google.maps.Map(
        document.getElementById('js-maps'), {
            zoom: 10,
            center: beetroot,

            disableDefaultUI: true,
            mapTypeId: 'roadmap'
        });
    // The marker, positioned at Beetroot
    var marker = new google.maps.Marker({
        position: beetroot,
        map: map,

    });
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');
    // map.setMapTypeId('terrain');
}
