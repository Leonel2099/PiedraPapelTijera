import React, { useState } from "react";
import { useBox, usePlane } from "@react-three/cannon";

export function Main({ setPlay }) {
    const [colorBtn, setColorBtn] = useState('blue');
    const [plane] = usePlane(() => ({
        rotation: [0, 0, 0],
        position: [0.314, 14.447, -11.2],
    }))
    const [box] = useBox(() => ({
        rotation: [0, 0, 0],
        position: [0.314, 14, -11.2],
    }))
    const btnClick = () => {
        setPlay(true)
        setColorBtn('red')

    }
    return (
        <>
            <group>
                <mesh ref={plane} scale={[19.5, 11, 1]}>
                    <planeGeometry />
                    <meshStandardMaterial color={'white'}></meshStandardMaterial>
                </mesh>
                <mesh ref={box} onClick={btnClick}>
                    <meshStandardMaterial color={colorBtn}></meshStandardMaterial>
                    <boxGeometry />
                </mesh>
            </group>
        </>
    )
}
