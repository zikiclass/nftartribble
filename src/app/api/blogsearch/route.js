import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

export async function GET(req) {
  try {
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const id = searchParams.get("id");

    const blog = await prisma.blog.findUnique({
      where: {
        id: parseInt(id),
      },
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

export async function PUT(req) {
  try {
    const body = await req.json();

    const updateBlog = await prisma.blog.update({
      where: { id: parseInt(body.id) },
      data: {
        author: body.author,
        heading: body.headline,
        content1: body.content1,
        content2: body.content2,
        content3: body.content3,
        content4: body.content4,
      },
    });
    if (updateBlog) {
      return NextResponse.json("Blog updated successfully", { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ error: error.message, status: 500 });
  }
}
