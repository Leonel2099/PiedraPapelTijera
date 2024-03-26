import { useTexture } from "@react-three/drei";
import roomTextureAo from "./roomTextureAo.jpg";
import roomTextureMe from "./roomTextureMe.jpg";
import roomTextureN from "./roomTextureN.jpg";
import roomTextureR from "./roomTextureR.jpg";

export default function TextureRoom() {

    const TextureRoom = new useTexture({
        aoMap: roomTextureAo,
        normalMap: roomTextureN,
        roughnessMap: roomTextureR,
        metalnessMap: roomTextureMe,
    });
    return (
        <meshStandardMaterial {...TextureRoom} color={'#176085'} />
    )
};

