import mongoose from 'mongoose';
import Blog from './models/Blog.js';



await mongoose.connect(
    process.env.MONGO_URI || 'mongodb://localhost:27017/blog',
)

const article = new Blog({
    title: 'Awesome Post14!',
    slug: 'awesome-post',
    published: true,
    content: 'This is the best post ever',
    tags: ['featured', 'announcement'],
});

await article.save()
    
process.exit()