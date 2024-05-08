const configs = {
    port: process.env.PORT||3000,
    mongoURI: process.env.MONGODB_URI||"mongodb://localhost:27017/parent_followup",
    secret: process.env.SECRET
}

export default configs;
