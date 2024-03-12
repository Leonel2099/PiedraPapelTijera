import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";

function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 100]} />        
      </Canvas>
    </>
  )
}

export default App
