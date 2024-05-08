const configs = {
    port: process.env.PORT || 3000,
    mongoURI: process.env.MONGODB_URI ||'mongodb+srv://sandrine:12345@cluster0.6apbkc1.mongodb.net/contacts',
    secret: process.env.SECRET ||'mysecret'
}

export default configs;