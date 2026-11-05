import { NextResponse } from "next/server";

const BHASHINI_PIPELINE_URL = "https://anuvaad.bhashini.gov.in/v1/pipeline";

interface BhashiniPipelineResponse {
  pipelineResponse?: Array<{
    output?: Array<{
      target?: unknown;
    }>;
  }>;
}

export async function POST(req: Request) {
  try {
    const { texts, targetLanguage, targetScriptCode } = await req.json();

    if (!Array.isArray(texts) || texts.length === 0 || !texts.every((text) => typeof text === "string")) {
      return NextResponse.json({ error: "texts array is required" }, { status: 400 });
    }

    if (typeof targetLanguage !== "string" || typeof targetScriptCode !== "string" || !targetLanguage || !targetScriptCode) {
      return NextResponse.json({ error: "targetLanguage and targetScriptCode are required" }, { status: 400 });
    }

    const requestBody = {
      pipelineTasks: [
        {
          taskType: "translation",
          config: {
            language: {
              sourceLanguage: "en",
              targetLanguage: targetLanguage,
              sourceScriptCode: "Latn",
              targetScriptCode: targetScriptCode,
            },
            postProcessors: ["glossary"],
            serviceId: "bhashini/bodhan/Indic-trans-v4",
          },
        },
      ],
      inputData: {
        input: texts.map((source: string) => ({ source })),
        audio: [{ audioContent: null }],
      },
    };

    const response = await fetch(BHASHINI_PIPELINE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Bhashini API Error:", errorText);
      const error =
        response.status === 401 || response.status === 403
          ? "Bhashini rejected the request. Verify the API credentials and service access."
          : "Bhashini translation failed.";
      return NextResponse.json({ error }, { status: response.status });
    }

    const data = (await response.json()) as BhashiniPipelineResponse;
    const output = data.pipelineResponse?.[0]?.output;

    if (!Array.isArray(output) || !output.every((item) => typeof item.target === "string")) {
      return NextResponse.json({ error: "Invalid response from Bhashini" }, { status: 500 });
    }

    const translatedTexts = output.map((item) => item.target as string);

    return NextResponse.json({ translatedTexts });
  } catch (error) {
    console.error("Translation error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
