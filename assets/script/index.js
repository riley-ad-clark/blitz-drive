'use strict';

const button = document.querySelector('.track-package')

    function getLocation(position) {
        let { longitude, latitude } = position.coords;

        // Set the map's center to the user's current location
        map.setCenter([longitude, latitude]);

        // Set the map's center to the user's current location with smooth zoom
        map.easeTo({
            center: [longitude, latitude],
            zoom: 15,
            duration: 5000 // Adjust the duration as needed (in milliseconds)
        });

        // Add a marker at the user's current location
        new mapboxgl.Marker()
            .setLngLat([longitude, latitude])
            .addTo(map);
    }

    function errorHandler(error) {
        console.log(`Unable to retrieve your location`);
        console.log(error.message);
    }

    const options = {
        enableHighAccuracy: true
    }

    button.addEventListener('click', () => {
        if ('geolocation' in navigator) {
            const geo = navigator.geolocation;
            geo.getCurrentPosition(getLocation, errorHandler, options);
        } else {
            console.log(`Geolocation API is not supported by your browser.`);
        }
    });