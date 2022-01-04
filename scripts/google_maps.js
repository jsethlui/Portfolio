

function initMap() {
    const ucla = { lat: 34.069, lng: -118.445 };
    
    // The map, centered at location
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: ucla,
    });

    // The marker, positioned at location
    const marker = new google.maps.Marker({
        position: ucla,
        map: map,
    });    
}