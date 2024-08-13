export const getNfts = async (cursor) => {
  const response = await fetch(
    `http://localhost:3000/api/getContractNFTs?cursor=${cursor || ""}`
  );
  if (response.ok) {
    const nftData = await response.json();
    return nftData;
  } else {
    throw new Error(`Failed to fetch NFTs: ${response.statusText}`);
  }
};
