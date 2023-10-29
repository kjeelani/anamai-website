import { query, internalMutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
    args: {},
    handler: async (ctx) => {
      const images = await ctx.db.query("images").order("desc").take(5);
      return Promise.all(
        images.map(async (image) => ({
          ...image,
          url: await ctx.storage.getUrl(image.storageId)
        }))
      ).then((result) => result);
    },
  });  

export const storeResult = internalMutation({
    args: {
        storageId: v.string(),
        input: v.string(),
    },
    handler: async (ctx, args) => {
        const { storageId, input } = args;
        await ctx.db.insert("images", { storageId, input });
    },
});