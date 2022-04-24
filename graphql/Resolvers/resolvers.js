import RestaurantQuery from '../../model/index.js'

export const resolvers = {
    Query: {
        async GetAllRestaurants(_, args, context) {
            try {
                const result = await RestaurantQuery.find()
                return result;
            } catch (error) {
                console.log(error)
            }
        },
        async SingleRestaurant(_, args, context) {
            const { _id } = args;
            try {
                const result = await RestaurantQuery.findById({_id})
                return result;
            } catch (error) {
                console.log(error)
            }
        }
    },
    Mutation: {
        async CreateRestaurant(parent, {input}, context) {
            const {name, location, price_range} = input;
            try {
                const result = await RestaurantQuery.create({
                    name,
                    location,
                    price_range
                })
                return result;
            } catch (error) {
                console.log(error)
            }
        },
        async updateRestaurant(parent, {input}, context) {
            const {name, location, price_range} = input;
            try {
                const result = await RestaurantQuery.updateOne({
                    name,
                    location,
                    price_range
                })
                return "Updated Sucessfully"
            } catch (error) {
                console.log(error)
            }
        },
        async deleteRestaurant(parent, args, context) {
            const {_id} = args;
            try {
                const result = await RestaurantQuery.deleteOne({_id})
                return "Deleted Successfully"
            } catch (error) {
               console.log(error) 
            }
        }
    }
}