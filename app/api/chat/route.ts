import OpenAI from "openai";
import { NextResponse } from "next/server";
import { SYSTEM_PROMPT } from "@/app/minebot/prompt";

interface Message {
  role: "user" | "assistant";
  content: string;
}

// Ensure API key is available
if (!process.env.OPENAI_API_KEY) {
  console.error("OPENAI_API_KEY is not set");
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Common headers for all responses
const headers = {
  "Content-Type": "application/json",
  "Cache-Control": "no-store, no-cache, must-revalidate",
};

export async function POST(request: Request) {
  try {
    // Check API key
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OpenAI API key is not configured" },
        { status: 500, headers }
      );
    }

    const body = await request.json();
    const { messages, input } = body;

    if (!input) {
      return NextResponse.json(
        { error: "Input message is required" },
        { status: 400, headers }
      );
    }

    console.log("Received message:", input);

    // Format messages for OpenAI
    const formattedMessages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...messages.map((msg: Message) => ({
        role: msg.role,
        content: msg.content,
      })),
      { role: "user", content: input },
    ];

    console.log("Sending request to OpenAI...");
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: formattedMessages,
      temperature: 0.7,
      max_tokens: 1000,
    });

    const response = completion.choices[0]?.message?.content;

    if (!response) {
      return NextResponse.json(
        { error: "Empty response from OpenAI API" },
        { status: 500, headers }
      );
    }

    console.log("Received response from OpenAI");

    return NextResponse.json(
      { message: { role: "assistant", content: response } },
      { headers }
    );
  } catch (error: any) {
    console.error("Error in chat API:", error);

    if (error.name === "SyntaxError") {
      return NextResponse.json(
        {
          error: "Invalid JSON in request body",
          details: error.message,
        },
        { status: 400, headers }
      );
    }

    if (error.status === 401 || error.status === 403) {
      return NextResponse.json(
        {
          error: "Authentication error with OpenAI",
          details: error.message,
        },
        { status: error.status, headers }
      );
    }

    return NextResponse.json(
      {
        error: "Failed to generate response",
        details: error.message || "Unknown error occurred",
      },
      { status: 500, headers }
    );
  }
}
