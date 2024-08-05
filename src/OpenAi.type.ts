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


export  interface MessageContent {
  type: "user"|"image_url", 
  text?: string,
  image_url?: string
}

export interface Message {
  role: string,
  content : MessageContent[]
}


export interface OpenAIInput {
  message : Message 
}