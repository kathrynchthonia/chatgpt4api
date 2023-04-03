import { Configuration, OpenAIApi } from "openai";
import { API_KEY, ORGANIZATION_KEY } from "./env.js";
const configuration = new Configuration({
  organization: ORGANIZATION_KEY,
  apiKey: API_KEY,
});

const openai = new OpenAIApi(configuration)

const completion = await openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  messages: [
    {
      role: "user",
      content: "Write a hypnosis script about being open to the amazing opportunities coming my way today"
    }
  ]
})

console.log(completion.data.choices[0].message)