
const zod=require('zod');

const userSchema=zod.object({
    username:zod.string().trim().min(3).max(20),
    password:zod.string().trim().min(8),
    email:zod.string().email(),
    firstname:zod.string().trim().min(3).max(20),
    lastname:zod.string().trim().min(3).max(20)
})

const loginSchema=zod.object({

    username:zod.string().trim().min(3).max(20),
    password:zod.string().trim().min(8)
})

const updateSchema=zod.object({
   firstname:zod.string().trim().min(3).max(20).optional(),
   lastname:zod.string().trim().min(3).max(20).optional(),
    email:zod.string().email().optional(),
})

module.exports = {
    userSchema,
    loginSchema,
    updateSchema



};