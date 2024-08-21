import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

export async function GET(req) {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const nftID = url.searchParams.get("id");
    const id = parseInt(nftID, 10);

    if (isNaN(id)) {
      return NextResponse.json(
        { message: "Invalid ID format" },
        { status: 400 }
      );
    }

    const nft = await prisma.nftdrop.findUnique({
      where: { id },
    });

    if (nft) {
      return NextResponse.json(nft, { status: 200 });
    } else {
      return NextResponse.json({ message: "NFT not found" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error fetching NFT:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
