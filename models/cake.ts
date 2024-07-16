
// Cake Schema
import mongoose, { models, Schema } from "mongoose";

const cakeSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name for the cake.'],
    },
    flavor: {
        type: String,
        required: [true, 'Please provide a flavor for the cake.'],
    },
    price: {
        type: Number,
        required: [true, 'Please provide a price for the cake.'],
    },
    description: {
        type: String,
        required: [true, 'Please provide a description for the cake.'],
    },
}, { timestamps: true });

const Cake = models.Cake || mongoose.model("Cake", cakeSchema);
export default Cake;