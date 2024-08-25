import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

export async function GET(request) {
  try {
    const nft = await prisma.nftdrop.findMany({
      take: 5,
      orderBy: {
        id: "asc",
      },
    });

    if (nft) {
      return NextResponse.json(nft, { status: 200 });
    } else {
      return NextResponse.json({ message: "NFT not found" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error fetching nft:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
