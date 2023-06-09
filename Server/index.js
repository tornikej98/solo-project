require('dotenv').config()
const Express = require('express')
const app = Express()
const PORT = process.env.PORT
const cors = require('cors')
const recipeRouter = require('./routers/recipeRouter')
const userRouter = require('./routers/userRouter')


app.use(cors())
app.use(Express.json())


app.use('/user', userRouter)
app.use('/recipes', recipeRouter)



app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`)
})