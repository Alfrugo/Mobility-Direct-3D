
console.log(THREE)
// scene

const scene = new THREE.Scene()





const basicMD = new THREE.OctahedronGeometry( 5, 0 )

const geometry  = new THREE.BoxGeometry( 1, 1, 1 )
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } )

const cube = new THREE.Mesh( geometry, material )

scene.add( cube )

// sizes

const sizes = {
    width: 40,
    height: 40
}

// camera
const camera = new THREE.PerspectiveCamera( 75, sizes.width / sizes.height )

camera.position.z = 3
scene.add ( camera )

// renderer
const canvas = document.querySelector('.mobilityDirectBasic')

const renderer = new THREE.WebGLRenderer(
    {canvas: canvas
})
renderer.setSize( sizes.width, sizes.height )

renderer.render( scene, camera )

