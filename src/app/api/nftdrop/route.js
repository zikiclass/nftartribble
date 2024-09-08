import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";
import { nftSchema } from "../../validationSchemas";

export async function POST(request) {
  try {
    const body = await request.json();

    // Validate input data
    const validation = nftSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { message: "Validation error", errors: validation.error.format() },
        { status: 400 }
      );
    }

    const date_created = new Date();

    // Create new user
    const addNFT = await prisma.nftdrop.create({
      data: {
        title: body.title,
        postedby: body.postedby,
        short_description: body.short_description,
        about_author: body.about_author,
        amount: body.amount,
        status: body.status,
        period: body.period,
        authorImg: body.authorImg,
        NFTImg: body.nftImg,
        NFTImgFormat: body.nftImgFormat,
        date: date_created,
      },
    });

    return NextResponse.json(addNFT, { status: 201 });
  } catch (err) {
    console.error("Prisma Client Error:", err);
    return NextResponse.json(err, { status: 500 });
  }
}

export async function GET(request) {
  try {
    const nft = await prisma.nftdrop.findMany({
      orderBy: {
        id: "desc",
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

export async function DELETE(req) {
  try {
    const adminId = req.nextUrl.searchParams.get("id");
    const id = parseInt(adminId);
    const deleteNFT = await prisma.nftdrop.delete({
      where: {
        id,
      },
    });
    if (deleteNFT) return NextResponse.json("success", { status: 200 });
    return NextResponse.json("error", { status: 404 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
