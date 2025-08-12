import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  tasks: defineTable({
    text: v.string(),
    isCompleted: v.boolean(),
  }),
  messages: defineTable({
    author: v.string(),
    content: v.string(),
    timestamp: v.number(), // or v.string() if you're using ISO date strings
  }),
});