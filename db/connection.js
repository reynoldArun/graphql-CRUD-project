import mongoose from "mongoose";


function Connetion(url) {
    try {
        mongoose.connect(url)
        console.log('MongoDB connected')
    } catch (error) {
        console.log('mongoose connection failed')
    }
}

export default Connetion