import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

export async function POST(request) {
  try {
    const body = await request.json();

    const addWallet = await prisma.cryptocurrency.create({
      data: {
        crypto: body.crypto,
        wallet: body.wallet,
      },
    });

    return NextResponse.json(addWallet, { status: 201 });
  } catch (err) {
    console.error("Prisma Client Error:", err);
    return NextResponse.json(err, { status: 500 });
  }
}

export async function GET(request) {
  try {
    const wallet = await prisma.cryptocurrency.findMany();

    if (wallet) {
      return NextResponse.json(wallet, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "Wallet not found" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error fetching wallet:", error);
    return NextResponse.json(error, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const walletID = req.nextUrl.searchParams.get("id");
    const id = parseInt(walletID);
    const walletDelete = await prisma.cryptocurrency.delete({
      where: {
        id,
      },
    });
    if (walletDelete) return NextResponse.json("success", { status: 200 });
    return NextResponse.json("error", { status: 404 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
