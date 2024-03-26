import { useTexture } from "@react-three/drei";
import TableTextureAlbedo from "./TableTextureAlbedo.png";
import TableTextureAo from "./TableTextureAo.png";
import TableTextureMe from "./TableTextureMe.jpg";
import TableTextureN from "./TableTextureN.png";
import TableTextureR from "./TableTextureR.png";

export default function TableTexture() {

    const TableTexture = new useTexture({
        map: TableTextureAlbedo,
        aoMap: TableTextureAo,
        normalMap: TableTextureN,
        roughnessMap: TableTextureR,
        metalnessMap: TableTextureMe,
    });
    return (
        <meshStandardMaterial {...TableTexture} color={'#9d5732'} />
    )
};

