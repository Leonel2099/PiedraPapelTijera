import { useTexture } from "@react-three/drei";
import floorTexture from "./floorTexture.jpg";
import floorTextureAo from "./floorTextureAo.jpg";
import floorTextureMe from "./floorTextureMe.jpg";
import floorTextureN from "./floorTextureN.jpg";
import floorTextureR from "./floorTextureR.jpg";
import { NearestFilter, RepeatWrapping } from "three";
import { useEffect } from "react";

export default function TextureFloor() {

    const TextureFloor = new useTexture({
        map: floorTexture,
        aoMap: floorTextureAo,
        normalMap: floorTextureN,
        roughnessMap: floorTextureR,
        metalnessMap: floorTextureMe,
    });
    useEffect(() => {
        [TextureFloor.map, TextureFloor.roughnessMap, TextureFloor.normalMap, TextureFloor.aoMap, TextureFloor.metalnessMap].forEach((t) => {
            t.wrapS = RepeatWrapping;
            t.wrapT = RepeatWrapping;
            t.repeat.set(1, 1);
            t.magFilter = NearestFilter;
        });
    }, [])
    return (
        <meshStandardMaterial {...TextureFloor} />
    )
};

