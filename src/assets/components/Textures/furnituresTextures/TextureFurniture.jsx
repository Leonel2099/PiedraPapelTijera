import { useTexture } from "@react-three/drei";
import furnituresWoodImgMap from "../furnituresTextures/furnituresWoodImgMap.jpg";
import furnituresWoodImgR from "../furnituresTextures/furnituresWoodImgR.jpg";
import furnituresWoodImgAo from "../furnituresTextures/furnituresWoodImgAo.jpg";
import furnituresWoodImgMe from "../furnituresTextures/furnituresWoodImgMe.jpg";
import furnituresWoodImgN from "../furnituresTextures/furnituresWoodImgN.jpg";

export default function TextureFurniture() {

  const WoodTextureFurniture = new useTexture({
    map: furnituresWoodImgMap,
    aoMap: furnituresWoodImgAo,
    roughnessMap: furnituresWoodImgR,
    normalMap: furnituresWoodImgN,
    metalnessMap: furnituresWoodImgMe,
  });
  return (
    <meshStandardMaterial {...WoodTextureFurniture} />
  )
};

