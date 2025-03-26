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

export const UpdateMessages=mutation({
    args:{
        workSpaceId:v.id('workSpace'),
        messages:v.any()
    },
    handler:async(ctx,args)=>{
        const result=await ctx.db.patch(args.workSpaceId,{
            messages:args.messages
        });
        return result
    }
})


export const UpdateFiles=mutation({
    args:{
        workSpaceId:v.id('workSpace'),
        files:v.any()
    },
    handler:async(ctx,args)=>{
        const result=await ctx.db.patch(args.workSpaceId,{
            files:args.files
        });
        return result
    }
})