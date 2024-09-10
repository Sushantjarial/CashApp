
const zod=require('zod');

const userSchema=zod.object({
    username:zod.string().trim().min(3).max(20),
    password:zod.string().trim().min(8),
    email:zod.string().email(),
    firstname:zod.string().trim().min(3).max(20),
    lastname:zod.string().trim().min(3).max(20)
})

module.exports=userSchema;