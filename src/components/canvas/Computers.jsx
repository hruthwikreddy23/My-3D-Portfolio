import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Color, MathUtils } from "three";

const SetBackground = () => {
  const { scene } = useThree();
  useEffect(() => {
    scene.background = new Color("#050816");
  }, [scene]);
  return null;
};

const Computers = ({ isMobile }) => {
  const groupRef = useRef();
  const hovering = useRef(false);
  const computer = useGLTF("./desktop_pc/scene.gltf");

  useFrame((state) => {
    if (!groupRef.current) return;
    const { x, y } = state.pointer;
    // Tilt toward cursor only while the pointer is over the model;
    // smoothly return to neutral when the cursor leaves.
    const targetX = hovering.current ? y * 0.12 : 0;
    const targetY = hovering.current ? x * 0.3  : 0;
    groupRef.current.rotation.x = MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.05);
    groupRef.current.rotation.y = MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.05);
  });

  return (
    <group
      ref={groupRef}
      onPointerEnter={() => (hovering.current = true)}
      onPointerLeave={() => (hovering.current = false)}
    >
      <hemisphereLight intensity={2} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={2} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -2.3]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <Canvas
      frameloop='always'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      onCreated={({ scene }) => {
        scene.background = new Color("#050816");
      }}
    >
      <SetBackground />
      <Suspense fallback={null}>
        {/* autoRotate gives the slow base orbit; click+drag overrides it */}
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.5}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
