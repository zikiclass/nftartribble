import Moralis from "moralis";
import { NextResponse } from "next/server";

await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

export async function GET(req) {
  try {
    const cursor = req.nextUrl.searchParams.get("cursor");
    const body = {
      chain: "0x1",
      format: "decimal",
      limit: 10,
      mediaItems: false,
      address: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
    };

    if (cursor) {
      body.cursor = cursor;
    }

    const response = await Moralis.EvmApi.nft.getContractNFTs(body);
    return NextResponse.json(response);
  } catch (error) {
    console.error("Error fetching data from Moralis:", error);
    // Ensure a valid status code and message
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
