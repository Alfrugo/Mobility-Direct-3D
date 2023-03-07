
console.log(THREE)
// scene

const sceneBasic = new THREE.Scene()
const scenePlus = new THREE.Scene()
const scenePro = new THREE.Scene()

const basicMD = new THREE.OctahedronGeometry( 1.5, 0 )
const plusMD = new THREE.OctahedronGeometry(1.5, 1)
const proMD = new THREE.OctahedronGeometry(1.5, 2)

const material = new THREE.MeshBasicMaterial(  )

material.wireframe = true

const BasicMD = new THREE.Mesh( basicMD, material )
const PlusMD = new THREE.Mesh ( plusMD, material )
const ProMD = new THREE.Mesh ( proMD, material )

sceneBasic.add( BasicMD )
scenePlus.add ( PlusMD )
scenePro.add ( ProMD )

// sizes

const sizes = {
    width: 100,
    height: 100
}

// camera
const camera = new THREE.PerspectiveCamera( 75, sizes.width / sizes.height )

camera.position.z = 3
sceneBasic.add ( camera )
// scenePlus.add ( camera )
// scenePro.add ( camera )

// renderer
const canvasBasic = document.querySelector('.mobilityDirectBasic')
const canvasPlus = document.querySelector('.mobilityDirectPlus')
const canvasPro = document.querySelector('.mobilityDirectPro')

const rendererBasic = new THREE.WebGLRenderer(
    {canvas: canvasBasic, alpha: true, antiliasing: true 
})
rendererBasic.setSize( sizes.width, sizes.height )

const rendererPlus = new THREE.WebGLRenderer(
    {canvas: canvasPlus, alpha: true, antiliasing: true 
})
rendererPlus.setSize( sizes.width, sizes.height )

const rendererPro = new THREE.WebGLRenderer(
    {canvas: canvasPro, alpha: true, antiliasing: true 
})
rendererPro.setSize( sizes.width, sizes.height )

// animations

// renderer.render( scene, camera )


const tick = () => {

    BasicMD.rotation.y += 0.01
    BasicMD.rotation.z += 0.005

    PlusMD.rotation.y += 0.007
    PlusMD.rotation.z += 0.001
    PlusMD.rotation.x += 0.003
    
    ProMD.rotation.x += 0.003
    ProMD.rotation.y += 0.008

    rendererBasic.render( sceneBasic, camera )
    rendererPlus.render( scenePlus, camera )
    rendererPro.render ( scenePro, camera )
    window.requestAnimationFrame( tick )

}

tick()