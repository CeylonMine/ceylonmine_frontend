import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function GET() {
  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // Send a minimal request to check if the API is responsive
    await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "test" }],
      max_tokens: 1,
    });

    return NextResponse.json({ status: "available" }, { status: 200 });
  } catch (error: any) {
    console.error("OpenAI API Health Check Failed:", error);
    return NextResponse.json(
      {
        status: "unavailable",
        error: error?.message || "Unknown error occurred",
      },
      { status: 503 }
    );
  }
}
