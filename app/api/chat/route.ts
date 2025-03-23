import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources/chat/completions";
import { NextResponse } from "next/server";
import { SYSTEM_PROMPT } from "@/app/minebot/prompt";

interface ChatRequestBody {
  messages: Array<{ role: "user" | "assistant"; content: string }>;
  input: string;
}

interface ChatResponse {
  message: { role: "assistant"; content: string };
}

// Initialize OpenAI
const openai = new OpenAI({
  apiKey:
    "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",
});

export async function POST(request: Request) {
  try {
    const body: ChatRequestBody = await request.json();
    const { messages, input } = body;

    if (!input) {
      return NextResponse.json(
        { error: "Input message is required" },
        { status: 400 }
      );
    }

    console.log("Received message:", input);

    // Format messages for OpenAI
    const formattedMessages: ChatCompletionMessageParam[] = [
      { role: "system", content: SYSTEM_PROMPT },
      ...messages.map((msg) => ({ role: msg.role, content: msg.content })),
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
    const chatResponse: ChatResponse = {
      message: { role: "assistant", content: response },
    };

    return NextResponse.json(chatResponse);
  } catch (error: any) {
    console.error("Error in chat API:", error);
    return NextResponse.json(
      { error: "Failed to generate response", details: error?.message },
      { status: 500 }
    );
  }
}
