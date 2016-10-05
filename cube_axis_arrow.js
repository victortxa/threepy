var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );
//
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
var geometry = new THREE.CubeGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );
//
camera.position.z = 5;
//  controlls
var controls = new THREE.TrackballControls( camera, renderer.domElement );
controls.addEventListener( 'change', render ); //apparently not necessary
//  Adding arrows
var dir = new THREE.Vector3( 1, 0, 0 );
var origin = new THREE.Vector3( 0, 0, 0 );
var length = 2.5;
var hex = 0xffff00;
//
var arrowHelper = new THREE.ArrowHelper( dir, origin, length, hex );
var dir2 = new THREE.Vector3( 0, 1, 0 );
var arrowHelper2 = new THREE.ArrowHelper( dir2, origin, length, hex );
var dir3 = new THREE.Vector3( 0, 0, 1 );
var arrowHelper3 = new THREE.ArrowHelper( dir3, origin, length, hex );
scene.add( arrowHelper );
scene.add( arrowHelper2 );
scene.add( arrowHelper3 );
//
function render() {
renderer.render( scene, camera );
} 
//
(function animate() {
requestAnimationFrame( animate );
controls.update();
render();
})();      
