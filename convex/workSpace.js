import { v } from "convex/values";
import { mutation } from "./_generated/server";


export const CreateWorkSpace=mutation({
    args:{
        messages:v.any(),
        user:v.id("users")
    },
    handler:async(ctx,args)=>{
        const workSpaceId =await ctx.db.insert('workSpace',{
            messages:args.messages,
            user:args.user
        });
        return workSpaceId;
    }
})