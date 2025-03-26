import { defineSchema,defineTable } from "convex/server";
import { v } from "convex/values";


export default defineSchema({
    users:defineTable({
        name:v.string(),
        email:v.string(),
        picture:v.string(),
        uid:v.string()
        
    }),

    workSpace:defineTable({
        messages:v.any(),
        fileData:v.optional(v.any()),
        user:v.id('users'),
        files: v.optional(v.record(
            v.string(), // Key (filename)
            v.object({ code: v.string() }) // Value
        ))
       
    })
})