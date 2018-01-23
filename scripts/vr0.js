document.addEventListener('DOMContentLoaded', function() {
    var g_scene = document.querySelector('a-scene');
    deviceDetection();

    g_scene.addEventListener('loaded', function() {
        console.log('loaded scene');
        deviceDetection();
    });    
});

