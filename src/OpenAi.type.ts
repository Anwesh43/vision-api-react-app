// {
//     role: "user",
//     content: [
//       { type: "text", text: "What’s in this image?" },
//       {
//         type: "image_url",
//         image_url: {
//           "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg",
//         },
//       },
//     ],
//   },

import { Image } from "openai/resources"


interface ImageUrl {
  url : string
}
export  interface MessageContent {
  type: "text"|"image_url", 
  text?: string,
  image_url?: Image
}

export interface Message {
  role: string,
  content : MessageContent[]
}


export interface OpenAIInput {
  model: string,
  messages : Message[]
}