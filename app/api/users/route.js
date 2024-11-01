import { prisma } from "../../../lib/prisma";

export async function POST(req) {
  try {
    // Parse the request body as JSON
    const { clerkUserId, email } = await req.json();

    // Ensure clerkUserId and email exist
    if (!clerkUserId || !email) {
      return new Response("Bad Request: Missing clerkUserId or email", {
        status: 400,
      });
    }

    // Assuming you have Prisma set up for database operations
    const existingUser = await prisma.user.findUnique({
      where: { clerkUserId }, // Use clerkUserId to find the existing user
    });

    if (!existingUser) {
      const newUser = await prisma.user.create({
        data: {
          clerkUserId,
          email,
        },
      });
      return new Response(JSON.stringify(newUser), {
        status: 201,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(existingUser), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in POST /api/users:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
