import OpenAI from "openai";
import { NextResponse } from "next/server";
import { SYSTEM_PROMPT } from "@/app/minebot/prompt";

interface Message {
  role: "user" | "assistant";
  content: string;
}

if (!process.env.OPENAI_API_KEY) {
  throw new Error("OPENAI_API_KEY environment variable is not set");
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { messages, input } = body;

    if (!input) {
      return NextResponse.json(
        { error: "Input message is required" },
        { status: 400 }
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
      throw new Error("Empty response from OpenAI API");
    }

    console.log("Received response from OpenAI");

    return NextResponse.json({
      message: { role: "assistant", content: response },
    });
  } catch (error: any) {
    console.error("Error in chat API:", error);

    if (error.name === "SyntaxError") {
      return NextResponse.json(
        {
          error: "Invalid JSON in request body",
          details: error.message,
        },
        { status: 400 }
      );
    }

    if (error.status === 401 || error.status === 403) {
      return NextResponse.json(
        {
          error: "Authentication error with OpenAI",
          details: error.message,
        },
        { status: error.status }
      );
    }

    return NextResponse.json(
      {
        error: "Failed to generate response",
        details: error.message || "Unknown error occurred",
      },
      { status: 500 }
    );
  }
}
