const z = require('zod')
const InputvaliderZod = z.object({
    Title: z.string(),
    Discription: z.string()
})
module.exports = InputvaliderZod