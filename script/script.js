
console.log(THREE)
// scene

const scene = new THREE.Scene()





const basicMD = new THREE.OctahedronGeometry( 1, 0 )

const geometry  = new THREE.BoxGeometry( 1, 1, 1 )
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } )

const BasicMD = new THREE.Mesh( basicMD, material )

scene.add( BasicMD )

// sizes

const sizes = {
    width: 100,
    height: 100
}

// camera
const camera = new THREE.PerspectiveCamera( 75, sizes.width / sizes.height )

camera.position.z = 3
scene.add ( camera )

// renderer
const canvas = document.querySelector('.mobilityDirectBasic')

const renderer = new THREE.WebGLRenderer(
    {canvas: canvas, alpha: true, antiliasing: true 
})
renderer.setSize( sizes.width, sizes.height )

// animations

// renderer.render( scene, camera )


const tick = () => {

    BasicMD.rotation.y += 0.01
    renderer.render( scene, camera )
    window.requestAnimationFrame( tick )

}

tick()