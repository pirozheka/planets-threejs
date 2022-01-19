const div = document.querySelector('.canv_container');
let width = div.clientWidth;
let height = div.clientHeight;
const backTexture = new THREE.TextureLoader().load( "/textures/sp.jpg" );
const scene = new THREE.Scene( { environment: backTexture } );
const camera = new THREE.PerspectiveCamera( 45, width / height, 0.1, 100 );
//scene constructor

const renderer = new THREE.WebGLRenderer();
renderer.setSize( width, height );
div.appendChild( renderer.domElement );
//renderer constructor

let ambient = new THREE.AmbientLight(0x191970, 0.7);
scene.add(ambient);

let spotlight = new THREE.SpotLight(0x6FA8DC);
spotlight.position.set(80,1,100);
scene.add(spotlight);
//creating spotlight color: 0x6FA8DC

const texture = new THREE.TextureLoader().load( "/textures/Screenshot_1.png" );


let geometry = new THREE.SphereGeometry( 15, 51, 26 );
const material = new THREE.MeshLambertMaterial( { map: texture } );
const sphere = new THREE.Mesh (geometry, material);
scene.add( sphere );

camera.position.z = 55;

function animate() {
				requestAnimationFrame( animate );
				sphere.rotation.y += 0.005;
				renderer.render( scene, camera );
 };

animate();