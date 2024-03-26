import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Sky } from "@react-three/drei";
import { Scene } from "./assets/components/Scene";
import { Main } from "./assets/components/Main";
import { Physics } from "@react-three/cannon";
import { useState } from "react";

function App() {
  const [play, setPlay] = useState(false)

  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 100]} />
        <ambientLight intensity={1} />
        <pointLight position={[0.5, 20, 10]} intensity={250}></pointLight>
        {/* <OrbitControls></OrbitControls> */}
        <Physics>
          <Main setPlay={setPlay} ></Main>
        </Physics>
          <Scene playAnimation={play}></Scene>
      </Canvas>
    </>
  )
}

export default App
