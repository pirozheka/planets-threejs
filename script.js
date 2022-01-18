const div = document.querySelector('.canv_container');
let width = div.clientWidth;
let height = div.clientHeight;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 30, width / height, 0.1, 1000 );
//scene constructor

const renderer = new THREE.WebGLRenderer();
renderer.setSize( width, height );
div.appendChild( renderer.domElement );
//renderer constructor

let spotlight = new THREE.SpotLight(0x6FA8DC);
spotlight.position.set(40,1,90);
scene.add(spotlight);
//creating spotlight color: 0x6FA8DC

const texture = new THREE.TextureLoader().load( "https://aurora-starship.space/wp-content/uploads/2022/01/Screenshot_1.png" );


let geometry = new THREE.SphereGeometry( 15, 51, 26 );
const material = new THREE.MeshLambertMaterial( { map: texture } );
const sphere = new THREE.Mesh (geometry, material);
scene.add( sphere );

camera.position.z = 65;

function animate() {
				requestAnimationFrame( animate );
				sphere.rotation.y += 0.005;
				renderer.render( scene, camera );
 };

animate();