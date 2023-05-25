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

  let collegamentoPad = null
  let pad28 = null
  let int28Int = null
  let int28 = null
  let pad29 = null
  let int29Int = null
  let int29 = null
  let gamersArena = null
  let stand143 = null
  let stand154 = null
  let stand158 = null
  let ingressoNord = null
  let ingressoNord29 = null
  let bar = null
  let infoPoint = null
  let wc = null

  loader.load(
    'Padiglione28.glb',
    function (glb)
    {    
        pad28 = glb.scene
        scene.add(pad28)
    }
)

loader.load(
  'CollegamentoPad.glb',
  function (glb)
  {    
    collegamentoPad = glb.scene
    scene.add(collegamentoPad)
  }
)

loader.load(
  'Interno28.glb',
  function (glb)
  {    
    int28 = glb.scene
    int28.position.set(-0.535346, 0, 2.2081)
  }
)

loader.load(
  'Interno28Interagibile.glb',
  function (glb)
  {    
    int28Int = glb.scene
    int28Int.position.set(-0.535346, 0, 2)
  }
)

loader.load(
    'Padiglione_29.glb',
    function (glb)
    {    
        pad29 = glb.scene
        scene.add(pad29)
    }
)

let selectedModel = null;

loader.load(
  'Interno29.glb',
  function (glb)
  {    
      int29 = glb.scene
      selectedModel = "int29";
      int29.position.set(1.5, 0, 0.526493)
  }
)

loader.load(
  'GamersArena.glb',
  function (glb)
  {    
      gamersArena = glb.scene
      gamersArena.position.set(1.5, 0, 0.6)
  }
)

loader.load(
  'Stand143.glb',
  function (glb)
  {    
      stand143 = glb.scene
      stand143.position.set(1.45, 0, 0.456493)
  }
)

loader.load(
  'Stand154.glb',
  function (glb)
  {    
      stand154 = glb.scene
      stand154.position.set(1.41213, 0, 0.5)
  }
)

loader.load(
  'Stand158.glb',
  function (glb)
  {    
      stand158 = glb.scene
      stand158.position.set(1.5, 0, 0.5)
  }
)

loader.load(
  'IngressoNord.glb',
  function (glb)
  {    
      ingressoNord = glb.scene
      ingressoNord.position.set(1.48, 0, 0.53)
  }
)

loader.load(
  'IngressoNord29.glb',
  function (glb)
  {    
      ingressoNord29 = glb.scene
      scene.add(ingressoNord29)
  }
)

loader.load(
  'Bar.glb',
  function (glb)
  {    
      bar = glb.scene
      bar.position.set(1.48, 0, 0.53)
  }
)

loader.load(
  'InfoPoint.glb',
  function (glb)
  {    
      infoPoint = glb.scene
      infoPoint.position.set(1.48, 0, 0.53)
  }
)

loader.load(
  'WC.glb',
  function (glb)
  {    
      wc = glb.scene
      wc.position.set(1.48, 0, 0.53)
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
      isObjectSelected = false
  })

  // Creazione del bottone per riposizionare la mappa
  const resettamappa = document.createElement('button');
  resettamappa.textContent = 'Riposiziona Mappa';
  document.body.appendChild(resettamappa);

  resettamappa.addEventListener('click', () => {
    scene.add(pad28)
    scene.add(pad29)
    scene.add(collegamentoPad)
    scene.add(ingressoNord29)

    scene.remove(int28)
    scene.remove(int28Int)
    scene.remove(int29)
    scene.remove(gamersArena)
    scene.remove(stand143)
    scene.remove(stand154)
    scene.remove(stand158)
    scene.remove(ingressoNord)
    scene.remove(bar)
    scene.remove(infoPoint)
    scene.remove(wc)
  });
  
  canvas.addEventListener('click', () => {
    // Imposta lo stato di selezione dell'oggetto quando viene fatto clic sul canvas
    if (selectedModel && selectedObject) {
        //selectedObject.material.color.set('#FAAC6A') 
        isObjectSelected = true
        //selectedObject.visible = false
        if(selectedObject.name == 'Padiglione_28'){
          console.log(selectedObject.name)
          scene.remove(pad28)
          scene.remove(pad29)
          scene.remove(ingressoNord29)
          scene.remove(collegamentoPad)
          scene.add(int28)
          scene.add(int28Int)
      }
        else if(selectedObject.name == 'Padiglione_29'){
            console.log(selectedObject.name)
            scene.remove(pad28)
            scene.remove(pad29)
            scene.remove(ingressoNord29)
            scene.remove(collegamentoPad)
            scene.add(int29)
            scene.add(gamersArena)
            scene.add(stand143)
            scene.add(stand154)
            scene.add(stand158)
            scene.add(ingressoNord)
            scene.add(bar)
            scene.add(infoPoint)
            scene.add(wc)
        } 
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
      if (intersectedObject.isMesh && !isObjectSelected && intersectedObject.name != 'Pavimento' && intersectedObject.name != 'int29' && intersectedObject.name != 'Bar' && intersectedObject.name != 'InfoPoint' && intersectedObject.name != 'WC' && intersectedObject.name != 'Ingresso_Nord001' && intersectedObject.name != 'Ingresso_Nord' && intersectedObject.name != 'Ingresso_Padiglione_28' && intersectedObject.name != 'Plane' && intersectedObject.name != 'Plane_1') {
        // console.log(intersectedObject)
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