import pkg from 'mongoose'
const {model, Schema} = pkg;

const RestaurantSchema = Schema({
    name: String,
    location: String,
    price_range: Number
})

const RestaurantQuery = model('restaurants', RestaurantSchema)
export default RestaurantQuery
