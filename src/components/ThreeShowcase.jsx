import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import ThreeOceanScene from './ThreeOceanScene';

// Loading fallback
function Loader() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-white/60 text-sm">Loading 3D Scene...</div>
    </div>
  );
}

function ThreeShowcase() {
  return (
    <div className="relative w-full h-screen bg-navy-900">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-white mb-2">Three.js Marine Experience</h1>
          <p className="text-white/60 text-sm">Interactive 3D ocean scene with animated ship and particles</p>
        </div>
      </div>

      {/* Controls hint */}
      <div className="absolute bottom-6 left-6 z-10 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
        <p className="text-white/80 text-xs mb-1">🖱️ Drag to rotate</p>
        <p className="text-white/60 text-xs">🔄 Auto-rotation enabled</p>
      </div>

      {/* Three.js Canvas */}
      <Suspense fallback={<Loader />}>
        <Canvas
          camera={{ position: [8, 4, 8], fov: 60 }}
          gl={{ alpha: false, antialias: true }}
          shadows
          className="w-full h-full"
        >
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1}
            castShadow
            shadow-mapSize={[2048, 2048]}
          />
          <pointLight position={[0, 5, 0]} intensity={0.5} color="#0ea5e9" />
          
          {/* Environment for reflections */}
          <Environment preset="sunset" />
          
          {/* Ocean scene */}
          <ThreeOceanScene />
          
          {/* Enhanced controls */}
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            autoRotate={true}
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2.2}
            minPolarAngle={Math.PI / 4}
            maxDistance={20}
            minDistance={5}
          />
          
          {/* Ground shadows */}
          <ContactShadows
            position={[0, -3, 0]}
            opacity={0.4}
            scale={20}
            blur={2}
            far={10}
          />
        </Canvas>
      </Suspense>

      {/* Performance stats (optional) */}
      <div className="absolute top-6 right-6 z-10 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
        <p className="text-white/80 text-xs">⚡ Hardware Accelerated</p>
        <p className="text-white/60 text-xs">🎨 60 FPS Target</p>
      </div>
    </div>
  );
}

export default ThreeShowcase;
