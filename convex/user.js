// import {v} from "convex/values"
// import { mutation } from "./_generated/server"

// export const CreateUser=mutation({
//     args:{
//         name:v.string(),
//         email:v.string(),
//         picture:v.string(),
//         uid:v.string()
//     },

//     handler:async(ctx,args)=>{

//         const user=await ctx.db.query('users').filter((q)=>q.eq(q.field('email'),args.email)).collect()
//         console.log(user);

//         if(user?.length==0){
//             const result=await ctx.db.insert('users',{
//                 name:args.name,
//                 picture:args.picture,
//                 email:args.email,
//                 uid:args.uid
//             });
//             console.log(result);
            
//         }
        
//     }
// })

import { v } from "convex/values";
import { mutation,query } from "./_generated/server";

export const CreateUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    picture: v.string(),
    uid: v.string(),
  },

  handler: async (ctx, args) => {
    try {
      // Check if the user already exists
      const user = await ctx.db.query('users').filter((q) => q.eq(q.field('email'), args.email)).collect();
      console.log(user);

      if (user.length === 0) {
        // If user doesn't exist, create a new one
        const result = await ctx.db.insert('users', {
          name: args.name,
          picture: args.picture,
          email: args.email,
          uid: args.uid,
        });
        console.log('User created:', result);
        return { success: true, message: 'User created successfully' };
      } else {
        // If user exists, notify client
        return { success: false, message: 'User with this email already exists' };
      }
    } catch (error) {
      console.error('Error creating user:', error);
      return { success: false, message: 'An error occurred while creating the user' };
    }
  },
});


export const GetUser=query({
    args:{
        email:v.string()
    },
    handler:async(ctx,args)=>{
        const user = await ctx.db.query('users').filter((q) => q.eq(q.field('email'), args.email)).collect();
        return user[0];
    }
})
