import mongoose from "mongoose"

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://chichristopher:qoeVKUjSgoKRg743@cluster0.gwfgcyb.mongodb.net/todo-app');
    console.log("DB Connected")
}