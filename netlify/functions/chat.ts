import { Handler } from "@netlify/functions";
import OpenAI from "openai";
import { SYSTEM_PROMPT } from "../../app/minebot/prompt";

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

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json",
};

export const handler: Handler = async (event) => {
  // Handle OPTIONS request for CORS
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: "",
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    if (!event.body) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Request body is required" }),
      };
    }

    const { messages, input } = JSON.parse(event.body);

    if (!input) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Input message is required" }),
      };
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

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        message: { role: "assistant", content: response },
      }),
    };
  } catch (error: any) {
    console.error("Error in chat API:", error);

    // Handle different types of errors
    if (error.name === "SyntaxError") {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          error: "Invalid JSON in request body",
          details: error.message,
        }),
      };
    }

    if (error.status === 401 || error.status === 403) {
      return {
        statusCode: error.status,
        headers,
        body: JSON.stringify({
          error: "Authentication error with OpenAI",
          details: error.message,
        }),
      };
    }

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: "Failed to generate response",
        details: error.message || "Unknown error occurred",
      }),
    };
  }
};
