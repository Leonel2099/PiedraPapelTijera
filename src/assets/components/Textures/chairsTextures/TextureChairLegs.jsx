import { useTexture } from "@react-three/drei";
import chairsLegsAlbedo from "../chairsTextures/chairLegsAlbedo.png";
import chairsLegsAo from "../chairsTextures/chairLegsAo.png";
import chairsLegsMe from "../chairsTextures/chairLegsMe.jpg";
import chairsLegsN from "../chairsTextures/chairLegsN.png";

export default function TextureChairLegs() {

  const TextureChairLegs = new useTexture({
    map: chairsLegsAlbedo,
    aoMap: chairsLegsAo,
    normalMap: chairsLegsN,
    metalnessMap: chairsLegsMe,
  });
  return (
    <meshStandardMaterial {...TextureChairLegs} color={'#c57d56'} />
  )
};

