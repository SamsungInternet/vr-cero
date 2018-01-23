console.log('DevDet... on');

var devDet_scene = null;

var deviceDetection = function(){

  devDet_scene = document.querySelector('a-scene');
    if(navigator.getVRDisplays) { // is webvr supported?
        console.log('WebXR supported');
        // Then get the displays attached to the computer
        navigator.getVRDisplays().then(function(displays) {
          // If a display is available, use it to present the scene
          if(displays.length > 0) {
            vrDisplay = displays[0];
            console.log(displays[0].displayName);
            // Now we have our VRDisplay object and can do what we want with it
          }
          else{ // no headset connected
            console.log('no headset available');
            createCursor();
          }
        });
      }
      else{ // spec not implemented
        createCursor();
        
      }
}

//Creates the cursor. Overrides the default camera.
var createCursor = function(){
  
  //creates camera
  var t_cam = document.querySelector('[camera]')
  t_cam.setAttribute('camera');
  //creates and attadches cursor 
  var t_cursor = document.createElement('a-entity');
  t_cursor.setAttribute('cursor', 'fuse:true; fuseTimeout:500');
  t_cursor.setAttribute('position', '0 0 -1');
  t_cursor.setAttribute('geometry', 'primitive: ring; radiusInner: 0.02; radiusOuter: 0.03');
  t_cursor.setAttribute('material', 'color: black; shader: flat');

  t_cam.appendChild(t_cursor);
  console.log('added cursor');
}


