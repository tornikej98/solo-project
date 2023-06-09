const { mongoose } = require('./index')


const Schema = mongoose.Schema


// const analyzedInst = new Schema({
//     name: String,
//     steps: {

//     }
// })

const recipeSchema = new Schema({
    id: Number,
    title: String,
    image: String,
    cuisines: [String],
    sourceUrl: String,
    user_id: {
        type: String,
        required: true
    },
    favorite: { type: Boolean, default: false },
    summary: String,
    instructions: String,
    extendedIngredients: [{
        name: String,
    }],
    notes: { type: String, default: '' }
    // analyzedInstructions: [analyzedInst],

    // cuisine: String,
    // glutenFree: Boolean,
    // vegetarian: Boolean,
    // vegan: Boolean,
    // ingredients: [String],
    // instructions: String,



})



const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe