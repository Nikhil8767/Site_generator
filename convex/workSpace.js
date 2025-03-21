import { v } from "convex/values";
import { mutation, query } from "./_generated/server";


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

export const GetWorkspace=query({
    args:{
        workSpaceId:v.id('workSpace')
    },
    handler:async(ctx,args)=>{
        const result=await ctx.db.get(args.workSpaceId);
        return result;
    }
})