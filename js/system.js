//import * as THREE from "https://threejs.org/build/three.module.js"
import * as THREE from "https://cdnjs.cloudflare.com/ajax/libs/three.js/r124/three.module.js"
import { TrackballControls } from 'https://threejs.org/examples/jsm/controls/TrackballControls.js';
//import * as THREE from "../node_modules/three/build/three.module.js"
//import { TrackballControls } from '../node_modules/three/examples/jsm/controls/TrackballControls.js';


var container = document.getElementById('Content')
var width  = window.innerWidth;
var height = window.innerHeight;
    
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 45, width / height, 1, 1000000000 );
camera.position.set(-4000, 5500, 7500)

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize( width ,height);
container.appendChild(renderer.domElement )

var light = new THREE.AmbientLight(0xffffff, 1);
scene.add(light);

const loader = new THREE.TextureLoader();
    
const controls = new TrackballControls(camera,container);


var planets = []; // Planet Info


window.addEventListener( 'resize', onWindowResize, false );		
function onWindowResize() {

   camera.aspect = window.innerWidth / window.innerHeight;
   camera.updateProjectionMatrix();
   renderer.setSize( window.innerWidth, window.innerHeight );

}





//add stars
var starsbg = new THREE.MeshBasicMaterial({map: loader.load('images/2k_stars.jpg'),side: THREE.BackSide})
//const starsgeo = new THREE.SphereGeometry(2000,64,64)
var starsgeo = new THREE.BufferGeometry().fromGeometry(new THREE.SphereGeometry(100000000, 64, 64));
var stars = new THREE.Mesh( starsgeo, starsbg )
scene.add(stars);



function BuildPlanetsArray(){
    //Radius in KM / 100
    //DFS = shit number for now
    var Sun = {name:'Sun',radius:696,DFS:0,texturepath:'images/2k_sun.jpg'}
    planets.push(Sun);
    var Mercury = {name:'Mercury',radius:24.4,DFS:1250,texturepath:'images/2k_mercury.jpg'}
    planets.push(Mercury);
    var Venus = {name:'Venus',radius:60.52,DFS:2000,texturepath:'images/2k_venus_surface.jpg'}
    planets.push(Venus);
    var Earth = {name:'Earth',radius:63.71,DFS:3000,texturepath:'images/2k_earth_daymap.jpg'}
    planets.push(Earth);
    var Mars = {name:'Mars',radius:33.89,DFS:4000,texturepath:'images/2k_mars.jpg'}
    planets.push(Mars);
    var Jupiter = {name:'Jupiter',radius:699.11,DFS:6000,texturepath:'images/2k_jupiter.jpg'}
    planets.push(Jupiter);
    var Saturn = {name:'Saturn',radius:582.32,DFS:8000,texturepath:'images/2k_saturn.jpg'}
    planets.push(Saturn);
    var Uranus = {name:'Uranus',radius:253.62,DFS:10000,texturepath:'images/2k_uranus.jpg'}
    planets.push(Uranus);
    var Neptune = {name:'Neptune',radius:246.22,DFS:12000,texturepath:'images/2k_neptune.jpg'}
    planets.push(Neptune);
}

var segments = 64;
var pivotPoints = [];
var planetMeshes =[];
function CreatePlanets(){
    var position = 0; // value that will hold distance from sun
    
    
    planets.forEach(element => {
        var pivotPoint = new THREE.Object3D(); //center of galaxy
        
        var texture = loader.load(element.texturepath);
        var geo = new THREE.SphereGeometry(element.radius,segments,segments);
        var material = new THREE.MeshPhongMaterial({map: texture})
        var sphere = new THREE.Mesh(geo,material);

      // if(element.name == 'Sun' ){
      //     sphere.position.set(0,0,0)
      //     scene.add(sphere);  
      // }
      // else
      // {
            position = element.DFS;
            //console.log(element.DFS)
            sphere.position.set(position,0,0)
            //align to system center (sun)
            pivotPoint.add(sphere)
            pivotPoints.push(pivotPoint)
            planetMeshes.push(sphere)
            scene.add(pivotPoint)
            //create rings
            var geometry = new THREE.RingGeometry( position, position+10, 128 );
            var material = new THREE.MeshBasicMaterial( { color: 0xF1F1E4, side: THREE.DoubleSide } );
           
            var mesh = new THREE.Mesh( geometry, material );
            mesh.rotation.x = Math.PI / 2;
            if(element.name == 'Saturn'){

                var ring1=64
                var ring2=16


                var RingGeo = new THREE.RingGeometry( 700, 1100, ring1,ring2);
                var RingTexture = loader.load('images/rings2.jpg');
                RingTexture.wrapS = RingTexture.wrapT = THREE.RepeatWrapping; // <=========
                RingTexture.offset.set( 0, 0 ); // <=========
                RingTexture.repeat.set( 0.9, 1 );
              for(var yi=0; yi<ring2; yi++)
                    {
                        var u0=yi/ring2;
                        var u1=(yi+1)/ring2;
                        for(var xi=0; xi<ring1; xi++)
                        {
                            var fi=2*(xi+ring1*yi);
                            var v0=xi/ring1;
                            var v1=(xi+1)/ring1;
                            RingGeo.faceVertexUvs[0][fi][0].x=u0; RingGeo.faceVertexUvs[0][fi][0].y=v0;
                            RingGeo.faceVertexUvs[0][fi][1].x=u1; RingGeo.faceVertexUvs[0][fi][1].y=v0;
                            RingGeo.faceVertexUvs[0][fi][2].x=u0; RingGeo.faceVertexUvs[0][fi][2].y=v1;
                            fi++;
                            RingGeo.faceVertexUvs[0][fi][0].x=u1; RingGeo.faceVertexUvs[0][fi][0].y=v0;
                            RingGeo.faceVertexUvs[0][fi][1].x=u1; RingGeo.faceVertexUvs[0][fi][1].y=v1;
                            RingGeo.faceVertexUvs[0][fi][2].x=u0; RingGeo.faceVertexUvs[0][fi][2].y=v1;
                        }
                    }


                var RingMat = new THREE.MeshBasicMaterial( { map: RingTexture, side: THREE.DoubleSide,transparent: true } );
                var RingMesh = new THREE.Mesh( RingGeo, RingMat );

               

                RingMesh.rotation.x = Math.PI / 2;
                sphere.add( RingMesh );
            }
            scene.add( mesh );

      //  }
    });
}

function animate() {
    controls.update();
    requestAnimationFrame( animate );
        //orbit around sun
        pivotPoints[1].rotation.y += 0.0025; // Mercury
        pivotPoints[2].rotation.y += 0.0022;
        pivotPoints[3].rotation.y += 0.0018;
        pivotPoints[4].rotation.y += 0.0015;
        pivotPoints[5].rotation.y += 0.0012;
        pivotPoints[6].rotation.y += 0.001;
        pivotPoints[7].rotation.y += 0.00060;
        pivotPoints[8].rotation.y += 0.00040;
        //orbit around self axis
        planetMeshes[0].rotation.y +=0.00001; //sun
       
        planetMeshes[1].rotation.y +=0.01; // Mercury
        planetMeshes[2].rotation.y +=0.01;
        planetMeshes[3].rotation.y +=0.05;
        planetMeshes[4].rotation.y +=0.01;
        planetMeshes[5].rotation.y +=0.01;
        planetMeshes[6].rotation.y +=0.01;
        planetMeshes[7].rotation.y +=0.01;
        planetMeshes[8].rotation.y +=0.01;
      
    renderer.render( scene, camera );
    
}



BuildPlanetsArray();
CreatePlanets();
animate();