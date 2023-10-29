"use node";

import OpenAI from "openai";
import { action } from "./_generated/server";
import { internal } from "./_generated/api";

export const send = action(
  async (ctx, { prompt }) => {
    const apiKey = process.env.OPENAI_API_KEY;
    const openai = new OpenAI({ apiKey });

    // CHECK OFFENSIVE PROMPT
    const modResponse = await openai.moderations.create({input: prompt});
    const modResult = modResponse.results[0];
    if (modResult.flagged) {
      throw new Error(`Your prompt was flagged: ${JSON.stringify(modResult.categories)}`);
    }

    // QUERY OPENAI DALL E FOR IMAGE
    const opanaiResponse = await openai.images.generate({
      prompt,
      size: "256x256",
    });
    const dallEImageUrl = opanaiResponse.data[0]["url"];

    const imageResponse = await fetch(dallEImageUrl);
    if (!imageResponse.ok) {
      throw new Error(`Failed to download: ${imageResponse.statusText}`);
    }

    try {
      const blob = await imageResponse.blob(); 
      console.log(blob);
  
      const storageId = await ctx.storage.store(blob);
      console.log("Storage ID:", storageId);

      // WRITE STORAGE ID TO TABLE
      await ctx.runMutation(internal.clientFunctions.storeResult, {
        storageId: storageId,
        input: prompt,
      });
  
    } catch (error) {
        console.error("An error occurred:", error);
    }
  
  }
);