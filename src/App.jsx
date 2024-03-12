import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";


function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 100]} />   
        <ambientLight intensity={0.5} />         
        <Physics>
        </Physics>   
      </Canvas>
    </>
  )
}

export default App
