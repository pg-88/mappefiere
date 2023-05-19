import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import * as dat from 'dat.gui'

// const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()
scene.background = new THREE.Color( '#F5F5F5' );

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 100)
camera.position.z = 3

scene.add(camera)

// Load Image
const loadingManager = new THREE.LoadingManager()

loadingManager.onStart = () =>
{
    console.log('onStart')
}
loadingManager.onLoaded = () =>
{
    console.log('onLoaded')
}
loadingManager.onProgress = () =>
{
    console.log('onProgress')
}
loadingManager.onError = () =>
{
    console.log('onError')
}

const textureLoader = new THREE.TextureLoader(loadingManager)
const colorTexture28 = textureLoader.load('Textures/Texture Padiglione 28.png')
const colorTexture29 = textureLoader.load('Textures/Texture Padiglione 29.png')

const material28 = new THREE.MeshBasicMaterial()
material28.map = colorTexture28
const material29 = new THREE.MeshBasicMaterial()
material29.map = colorTexture29

const prova = new THREE.MeshBasicMaterial( { color: 0xffffff } )

var raycaster = new THREE.Raycaster();

//Create Cursor
const cursor = {
    x: 0,
    y: 0
}

// Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
scene.add(ambientLight)

const pointLight = new THREE.PointLight(0xffffff, 0.5)
pointLight.position.x = -2
pointLight.position.y = 5
pointLight.position.z = -1
scene.add(pointLight)

const loader = new GLTFLoader()

/*const models = [
    { url: 'Padiglione28.glb', position: new THREE.Vector3(0, 0, 0) },
    { url: 'Padiglione29.glb', position: new THREE.Vector3(0, 0, 0) }
  ]

let mesh

models.forEach(model => {
    loader.load(
      model.url,
      gltf => {
        const loadedModel = gltf.scene
  
        loadedModel.position.copy(model.position)
        scene.add(loadedModel)
        camera.lookAt(loadedModel)
      },
      undefined,
      error => {
        console.error(`Error loading model ${model.url}: ${error}`)
      }
    )
  })*/

  let pad28 = null
  let pad29 = null
  let int29Int = null
  let int29 = null

  loader.load(
    'Padiglione28.glb',
    function (glb)
    {    
        pad28 = glb.scene
        scene.add(pad28)
        // camera.lookAt(pad28)
    }
)

loader.load(
    'Padiglione29.glb',
    function (glb)
    {    
        pad29 = glb.scene
        scene.add(pad29)
        // camera.lookAt(mesh)
    }
)

loader.load(
  'Interno29Interagibile.glb',
  function (glb)
  {    
    int29Int = glb.scene
      // scene.add(int29Int)
      // camera.lookAt(mesh)
  }
)

let selectedModel = null;

loader.load(
  'Interno29.glb',
  function (glb)
  {    
      int29 = glb.scene
      // scene.add(int29)
      selectedModel = "int29";
      // camera.lookAt(mesh)
  }
)

let selectedObject = null
let isObjectSelected = false

canvas.addEventListener('mousemove', (event) => {
  const rect = canvas.getBoundingClientRect()
  cursor.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
  cursor.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
})

canvas.addEventListener('mouseout', () => {
    // Ripristina il colore dell'oggetto selezionato quando il mouse esce dal canvas
    if (selectedModel !== "int29" && selectedObject && !isObjectSelected) {
      selectedObject.material.color.set(0xf0f0f0)
      selectedObject = null
    }
  })
  
  canvas.addEventListener('mouseover', () => {
    // Imposta lo stato di selezione dell'oggetto quando il mouse entra nel canvas
    if (selectedModel !== "int29"){
      isObjectSelected = false
    }
  })
  
  canvas.addEventListener('click', () => {
    // Imposta lo stato di selezione dell'oggetto quando viene fatto clic sul canvas
    if (selectedModel && selectedObject) {
        selectedObject.material.color.set('#FAAC6A') 
        isObjectSelected = true
    }
  })
  
  canvas.addEventListener('dblclick', () => {
    // Ripristina lo stato di selezione dell'oggetto quando viene fatto doppio clic sul canvas
    if (selectedModel && selectedObject) {
      selectedObject.material.color.set(0xf0f0f0)
      selectedObject = null
      isObjectSelected = false
    }
  })
  
  // Update function
  const update = () => {
    // Effettua un raycasting dal punto di vista della fotocamera alla posizione del mouse
    raycaster.setFromCamera(cursor, camera)
  
    // Controlla se il raycaster interseca l'oggetto del cubo
    const intersects = raycaster.intersectObjects(scene.children, true)
  
    // Se l'oggetto selezionato è diverso da quello precedentemente selezionato,
    // ripristina il colore dell'oggetto precedente
    if (selectedObject && !isObjectSelected) {
      selectedObject.material.color.set(0xf0f0f0)
      selectedObject = null
    }
  
    // Se l'oggetto del cubo è intersecato dal raycaster, cambia il suo colore
    if (intersects.length > 0) {
      const intersectedObject = intersects[0].object
  
      // Modifica il colore solo se l'oggetto intersecato è un oggetto 3D e non un oggetto figlio
      if (intersectedObject.isMesh && !isObjectSelected) {
        intersectedObject.material.color.set('#D76B4F')
        selectedObject = intersectedObject
      }
    }
  
    // Richiama la funzione di aggiornamento
    requestAnimationFrame(update)
  }
  
  // Avvia l'aggiornamento
  update()


// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = false
controls.dampingFactor = 0.0025;

controls.minDistance = 5;
controls.maxDistance = 10;

controls.maxPolarAngle = Math.PI / 2;

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('canvas.webgl')
})
renderer.setSize(window.innerWidth, window.innerHeight)

const clock = new THREE.Clock()

const tick = () =>
{
    controls.update()
    renderer.render(scene, camera)
    requestAnimationFrame(tick)
}

tick()

renderer.render(scene, camera)