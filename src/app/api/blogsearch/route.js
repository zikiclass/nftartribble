import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

export async function GET(req) {
  try {
    // Use req.nextUrl to parse query parameters
    const url = new URL(req.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { message: "ID parameter is missing" },
        { status: 400 }
      );
    }

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
    console.error("Error fetching blog:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(req) {
  try {
    const body = await req.json();

    // Check if all required fields are present
    if (!body.id || !body.author || !body.headline) {
      return NextResponse.json(
        { message: "Required fields are missing" },
        { status: 400 }
      );
    }

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
    } else {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error updating blog:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
