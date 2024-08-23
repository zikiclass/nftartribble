import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";
import { nftSchema } from "../../validationSchemas";

export async function POST(request) {
  try {
    const body = await request.json();

    const date_created = new Date();

    // Create new user
    const addBlog = await prisma.blog.create({
      data: {
        author: body.author,
        blogImg: body.blogImg,
        heading: body.heading,
        content1: body.content1,
        content2: body.content2,
        content3: body.content3,
        content4: body.content4,
        date: date_created,
      },
    });

    return NextResponse.json(addBlog, { status: 201 });
  } catch (err) {
    console.error("Prisma Client Error:", err);
    return NextResponse.json(err, { status: 500 });
  }
}

export async function GET(request) {
  try {
    const blog = await prisma.blog.findMany({
      orderBy: {
        id: "desc",
      },
    });

    if (blog) {
      return NextResponse.json(blog, { status: 200 });
    } else {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json(body.email, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const blogId = req.nextUrl.searchParams.get("id");
    const id = parseInt(blogId);
    const deleteBlog = await prisma.blog.delete({
      where: {
        id,
      },
    });
    if (deleteBlog) return NextResponse.json("success", { status: 200 });
    return NextResponse.json("error", { status: 404 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
