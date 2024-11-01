import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

// POST: Create a new interview
export async function POST(req) {
  try {
    const { role, experience, description, userId } = await req.json();

    // Validate data
    if (!role || !experience || !description || !userId) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Create a new interview in the database
    const interview = await prisma.interview.create({
      data: {
        role,
        experience: parseInt(experience, 10),
        description,
        user: { connect: { clerkUserId: userId } },
      },
    });

    return NextResponse.json(interview, { status: 201 });
  } catch (error) {
    console.error("Error creating interview:", error);
    return NextResponse.json(
      { error: "Failed to create interview" },
      { status: 500 }
    );
  }
}

// GET: Retrieve all interviews for a specific user
export async function GET(req) {
  try {
    const userId = req.headers.get("user-id");

    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    const interviews = await prisma.interview.findMany({
      where: {
        user: { clerkUserId: userId },
      },
      select: {
        id: true,
        role: true,
        experience: true,
        description: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(interviews, { status: 200 });
  } catch (error) {
    console.error("Error retrieving interviews:", error);
    return NextResponse.json(
      { error: "Failed to retrieve interviews" },
      { status: 500 }
    );
  }
}
