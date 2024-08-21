import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

export async function GET(req) {
  try {
    const nftID = req.nextUrl.searchParams.get("id");
    const id = parseInt(nftID);
    const nft = await prisma.nftdrop.findUnique({
      where: {
        id,
      },
    });

    if (nft) {
      return NextResponse.json(nft, { status: 200 });
    } else {
      return NextResponse.json({ message: "NFT not found" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error fetching nft:", error);
    return NextResponse.json(body.email, { status: 500 });
  }
}
