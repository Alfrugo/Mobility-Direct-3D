import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// import * as dat from 'dat.gui'
import typefaceFont from 'three/examples/fonts/helvetiker_regular.typeface.json'
// import { Mesh } from 'three'

import gsap from 'gsap'

import * as dat from 'lil-gui'

console.log (dat)

// console.log (gsap)
// console.log(THREE)

// console.log(OrbitControls)


//
// Debug
//
const gui = new dat.GUI()

const parameter = {
    color: 0xff0000
}

gui
    .addColor(parameter, 'color')
    .onChange(()=> {
        material.color.set(parameter.color)
    })





// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Clock to get the frame rate independent of computer CPU power

const clock = new THREE.Clock()

// Object

const material = new THREE.MeshBasicMaterial({color: parameter.color})

const sphere = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    material
)


// const plane = new THREE.Plane(
//     new THREE.PlaneBufferGeometry(1,1),
//     material
// )

scene.add(sphere)

// Sizes
 
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
    
}

//camera
const  camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 300 )
// camera.position.x = 1
// camera.position.y = 1
camera.position.z = 5
scene.add(camera)

// Mouse tracking cursor

const cursor = {
    x: 0, 
    y: 0
}

window.addEventListener('mousemove', (event)=>{
    cursor.x = event.clientX / sizes.width - 0.5  //the -0.5 makes the value fluctuate between -0.5 to 0.5 indendent of the canvas size
    cursor.y = event.clientY / sizes.height - 0.5
})




// Green Sock

            // gsap.to(sphere.position, { duration: 1, delay: 1, x: 2 }) 


// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true


//render
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2
    ))


// Animations

const tick = () => {

    // // Clock
    const elapsedTime = clock.getElapsedTime()
    controls.update()
    // // console.log('tick')

    // update camera
    // camera.position.x = cursor.x * 4
    // camera.position.y = cursor.y * -6
    // camera.lookAt(sphere.position)

    // sphere.position.x += Math.sin(elapsedTime)
    // sphere.position.y += Math.cos(elapsedTime)
    // sphere.rotation.z = elapsedTime * Math.PI * 0.5
    // camera.lookAt(sphere.position)

    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick()

// Debug elements
gui.add(sphere.position, 'y', -3, 3, 0.01)
gui
    .add(sphere.position, 'z')
    .min(-3)
    .max(3)
    .step(0.01)
    .name('elevation cube')

gui 
    .add(sphere, 'visible')

gui 
    .add(material, 'wireframe')

gui
    .addColor