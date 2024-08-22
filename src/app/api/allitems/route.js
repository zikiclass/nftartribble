import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

export async function GET(req) {
  try {
    const admin = await prisma.administrators.aggregate({
      _count: { email: true },
    });
    if (admin) {
      return NextResponse.json({ admin }, { status: 200 });
    } else {
      return NextResponse.json("Unable to get request", { status: 404 });
    }
  } catch (error) {
    return NextResponse.json("Internal server error" + error, { status: 500 });
  }
}
