import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const DEFAULT_FACE = "";


export const rotatingCube = (
  heroContainer,
  heroCube,

  Face1,
  Face2,
  Face3,
  Face4,
  Face5,
  Face6
) => {
  if (heroContainer && heroCube) {
    const F1 = Face1 || DEFAULT_FACE;
    const F2 = Face2 || DEFAULT_FACE;
    const F3 = Face3 || DEFAULT_FACE;
    const F4 = Face4 || DEFAULT_FACE;
    const F5 = Face5 || DEFAULT_FACE;
    const F6 = Face6 || DEFAULT_FACE;

    // Scene, Camera and Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const canvas = heroCube;
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      canvas: canvas,
    });

    // Base Config
    renderer.setPixelRatio(devicePixelRatio * 2);
    renderer.setSize(300, 300);
    canvas.style.height = "auto";
    // canvas.style.minWidth = "min(512px, max(220px, 100%))";
    // canvas.style.maxWidth = "512px";
    canvas.style.minWidth = "min(300px, max(220px, 100%))";
    canvas.style.maxWidth = "300px";
    camera.position.setZ(30);

    // Avatar
    const materials = [
      new THREE.MeshLambertMaterial({
        map: new THREE.TextureLoader().load(F1),
      }),
      new THREE.MeshLambertMaterial({
        map: new THREE.TextureLoader().load(F2),
      }),
      new THREE.MeshLambertMaterial({
        map: new THREE.TextureLoader().load(F3),
      }),
      new THREE.MeshLambertMaterial({
        map: new THREE.TextureLoader().load(F4),
      }),
      new THREE.MeshLambertMaterial({
        map: new THREE.TextureLoader().load(F5),
      }),
      new THREE.MeshLambertMaterial({
        map: new THREE.TextureLoader().load(F6),
      }),
    ];
    const avatar = new THREE.Mesh(new THREE.BoxGeometry(20, 20, 20), materials);
    scene.add(avatar);

    // Lights
    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.position.set(50, 50, 50);
    scene.add(spotLight);

    // Controls
    const hero = heroContainer;
    const controls = new OrbitControls(camera, hero);
    controls.enableZoom = false;
    controls.enablePan = false;

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);

      const speedMultiplier = 0.5;
      const cameraPosition = new THREE.Vector3();

      avatar.rotation.x += speedMultiplier * 0.005;
      avatar.rotation.y += speedMultiplier * 0.0025;
      avatar.rotation.z += speedMultiplier * 0.005;

      spotLight.position.copy(camera.getWorldPosition(cameraPosition));

      controls.update();
      renderer.render(scene, camera);
    };

    animate();
  }
}
