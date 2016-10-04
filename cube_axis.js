// Our Javascript will go here.
//helped by http://stackoverflow.com/questions/16226693/three-js-show-world-coordinate-axes-in-corner-of-scene
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );
var container,
    container2,
    CANVAS_WIDTH = 200,
    CANVAS_HEIGHT = 200,
    CAM_DISTANCE = 300;


var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
var geometry = new THREE.CubeGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;
// controlls
controls = new THREE.TrackballControls( camera, renderer.domElement );
// axes
var axes = new THREE.AxisHelper( 10 );
scene.add( axes );

var scene2 = new THREE.Scene();

// camera
var camera2 = new THREE.PerspectiveCamera( 50, CANVAS_WIDTH / CANVAS_HEIGHT, 1, 1000 );
camera2.up = camera.up; // important!
// axes
//            var axes2 = new THREE.AxisHelper( 100 );
//            scene2.add( axes2 );
//
function render() {

renderer.render( scene, camera );
renderer2.render( scene2, camera2 );

} 
//
(function animate() {

requestAnimationFrame( animate );

controls.update();
camera2.position.copy( camera.position );
camera2.position.sub( controls.target ); // added by @libe
camera2.position.setLength( CAM_DISTANCE );

camera2.lookAt( scene2.position );
render();

})();      
