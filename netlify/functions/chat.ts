import { Handler } from "@netlify/functions";
import OpenAI from "openai";
import { SYSTEM_PROMPT } from "../../app/minebot/prompt";

const openai = new OpenAI({
  apiKey:
    process.env.OPENAI_API_KEY ||
    "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",
});

export const handler: Handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const { messages, input } = JSON.parse(event.body || "{}");

    if (!input) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Input message is required" }),
      };
    }

    console.log("Received message:", input);

    // Format messages for OpenAI
    const formattedMessages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...messages,
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

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
      body: JSON.stringify({
        message: { role: "assistant", content: response },
      }),
    };
  } catch (error: any) {
    console.error("Error in chat API:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Failed to generate response",
        details: error?.message,
      }),
    };
  }
};
