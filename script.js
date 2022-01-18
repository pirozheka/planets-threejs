const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
//scene constructor

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
//renderer constructor

let spotlight = new THREE.SpotLight(0x6FA8DC);
spotlight.position.set(40,1,90);
scene.add(spotlight);
//creating spotlight color: 0x6FA8DC

const texture = new THREE.TextureLoader().load( "textures/Screenshot_1.png" );


let geometry = new THREE.SphereGeometry( 15, 51, 26 );
const material = new THREE.MeshLambertMaterial( { map: texture } );
const sphere = new THREE.Mesh (geometry, material);
scene.add( sphere );

camera.position.z = 65;

function animate() {
				requestAnimationFrame( animate );
				sphere.rotation.y += 0.01;
				renderer.render( scene, camera );
 };

animate();