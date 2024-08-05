import OpenAI from "openai"
import { ChatCompletionCreateParamsNonStreaming, ChatCompletionMessage } from "openai/resources"

const visionApi = (prompt : string) => {
    const openAi = new OpenAI()
    return {
        async predictImage(str : string) : Promise<string> {
            try {
                const input : ChatCompletionCreateParamsNonStreaming = {
                    model: 'gpt-4o-mini',
                    messages: [
                        {
                            "role": "user",
                            "content": [
                                {
                                    "type": "text", "text": prompt
                                },
                                {
                                    "type": "image_url", image_url: {
                                        url: `data:image/jpeg;base64,${str}`
                                    }
                                }
                            ]
                        }
                    ]
                }
                const response = await openAi.chat.completions.create(input)
                return response.choices[0].message.content || ''
            } catch(e) {
                return  "error"
            }
        }
    }
}

export default visionApi 