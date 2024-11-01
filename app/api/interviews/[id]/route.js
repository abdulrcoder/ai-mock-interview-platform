import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

// GET: Retrieve a specific interview by ID
export async function GET(req, { params }) {
  try {
    const userId = req.headers.get("user-id");

    // Check for required headers
    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    if (!params.id) {
      return NextResponse.json(
        { error: "Interview ID is required" },
        { status: 400 }
      );
    }

    // Fetch interview from the database
    const interview = await prisma.interview.findUnique({
      where: {
        id: parseInt(params.id), // Ensure the ID is an integer
      },
      select: {
        id: true,
        role: true,
        experience: true,
        description: true,
        createdAt: true,
      },
    });

    // Handle case where the interview is not found
    if (!interview) {
      return NextResponse.json(
        { error: "Interview not found" },
        { status: 404 }
      );
    }

    // Return the interview data
    return NextResponse.json(interview, { status: 200 });
  } catch (error) {
    console.error("Error retrieving interview:", error);
    return NextResponse.json(
      { error: "Failed to retrieve interview" },
      { status: 500 }
    );
  }
}
