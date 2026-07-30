import type { CampusAnswer, ChatRequest } from "@/lib/ai/types";
import { generateDemoCampusAnswer } from "@/lib/workflow/campus-workflow";

export async function createCampusChatCompletion(input: ChatRequest): Promise<CampusAnswer> {
  const apiKey = process.env.COZE_API_KEY;
  const botId = process.env.COZE_BOT_ID;

  if (!apiKey || !botId) {
    return generateDemoCampusAnswer(input.message);
  }

  const apiBaseUrl = process.env.COZE_API_BASE_URL ?? "https://api.coze.cn";

  try {
    const response = await fetch(`${apiBaseUrl}/v3/chat`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        bot_id: botId,
        user_id: "qsa-demo-user",
        stream: false,
        additional_messages: [
          {
            role: "user",
            content: input.message,
            content_type: "text"
          }
        ]
      })
    });

    if (!response.ok) {
      return generateDemoCampusAnswer(input.message);
    }

    return generateDemoCampusAnswer(input.message);
  } catch (error) {
    console.error("AI service fallback:", error);
    return generateDemoCampusAnswer(input.message);
  }
}
