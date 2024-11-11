import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma"; // Adjust this import based on your prisma setup

// Main POST function to create a question and optionally end the interview
export async function POST(req) {
  try {
    const {
      interviewId,
      text,
      userAnswer,
      aiAnswer,
      feedback,
      score,
      isEndInterview,
    } = await req.json();

    // Validate required fields
    if (
      !interviewId ||
      !text ||
      !userAnswer ||
      !aiAnswer ||
      !feedback ||
      score === undefined
    ) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Create the question with nested relationships for userAnswer, aiAnswer, and feedback
    const question = await prisma.question.create({
      data: {
        interviewId: parseInt(interviewId, 10),
        text,
        userAnswer: { create: { answerText: userAnswer, score: score } },
        aiAnswer: { create: { answerText: aiAnswer } },
        feedback: { create: { content: feedback } },
      },
    });

    // If `isEndInterview` is true, call endInterview to mark the interview as completed
    if (isEndInterview) {
      await endInterview(interviewId);
    }

    // Return the created question data
    return NextResponse.json(question, { status: 201 });
  } catch (error) {
    console.error("Error creating question:", error);
    return NextResponse.json(
      { error: `Failed to create question: ${error.message}` },
      { status: 500 }
    );
  }
}

// Helper function to mark the interview as completed
async function endInterview(interviewId) {
  try {
    // Update interview status to 'completed'
    const interview = await prisma.interview.update({
      where: { id: parseInt(interviewId, 10) },
      data: { status: "completed" },
    });
    return interview;
  } catch (error) {
    console.error("Error ending interview:", error);
    throw new Error("Failed to end the interview");
  }
}
