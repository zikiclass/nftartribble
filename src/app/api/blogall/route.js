import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

export async function GET(request) {
  try {
    const blog = await prisma.blog.findMany({
      take: 4,
    });

    if (blog) {
      return NextResponse.json(blog, { status: 200 });
    } else {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error fetching nft:", error);
    return NextResponse.json(body.email, { status: 500 });
  }
}
