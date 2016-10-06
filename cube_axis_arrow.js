var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );
//
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
var geometry_master = new THREE.CubeGeometry( 10, 10, 10 );
var material_master = new THREE.MeshBasicMaterial( { color: 0x00ff00 ,wireframe: true } );
var cube_master = new THREE.BoxHelper(new THREE.Mesh( geometry_master, material_master ),'grey')
cube_master.position.set(0,0,0)
var geometry = new THREE.CubeGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
cube.position.set(0,1,0)
scene.add( cube_master );
scene.add( cube );
//
camera.position.z = 5;
//  controlls
var controls = new THREE.TrackballControls( camera, renderer.domElement );
//controls.addEventListener( 'change', render ); //apparently not necessary
//  Adding arrows
var dir = new THREE.Vector3( 1, 0, 0 );
var origin = new THREE.Vector3( 0, 0, 0 );
var length = 2.5;
var hex = 0xffff00;
//
//LABELS FOR AXIS
//var textGeo = new THREE.TextGeometry('Y', {size: 5, height: 2, 
//                         curveSegments: 6,font: "helvetiker",style: "normal"});
//var  color = new THREE.Color();
//color.setRGB(255, 250, 250);
//var  textMaterial = new THREE.MeshBasicMaterial({ color: color });
//var  text = new THREE.Mesh(textGeo , textMaterial);

//text.position.x = arrowHelper.geometry.vertices[1].x;
//text.position.y = arrowHelper.geometry.vertices[1].y;
//text.position.z = arrowHelper.geometry.vertices[1].z;
//text.rotation = camera.rotation;
//scene.add(text);
//
var arrowHelper = new THREE.ArrowHelper( dir, origin, length, hex );
var dir2 = new THREE.Vector3( 0, 1, 0 );
var arrowHelper2 = new THREE.ArrowHelper( dir2, origin, length, hex );
var dir3 = new THREE.Vector3( 0, 0, 1 );
var arrowHelper3 = new THREE.ArrowHelper( dir3, origin, length, hex );
scene.add( arrowHelper );
scene.add( arrowHelper2 );
scene.add( arrowHelper3 );

function render() {
renderer.render( scene, camera );
} 
//
(function animate() {
requestAnimationFrame( animate );
controls.update();
render();
})();      
