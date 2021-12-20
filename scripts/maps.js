
// function initMap() {
//     // const location = {lat: 34.06226571924177
//     //                   lng: -118.31151886261077};
//     const location = { lat: -25.344, lng: 131.036 };
//     const map = new google.maps.Map(document.getElementById("google_maps"), {
//         zoom: 4,
//         center: location,
//     });   

//     const marker = new google.maps.Marker({
//         position: location,
//         map: map,
//     });
// }

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };
    
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
    });
    
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}