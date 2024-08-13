import { getNfts } from "../service";
import Trending from "./trending";

export default async function LoadNFT() {
  try {
    const nftData = await getNfts(null);

    return <Trending nftData={nftData} />;
  } catch (error) {
    return <div>Error loading NFTs </div>;
  }
}
