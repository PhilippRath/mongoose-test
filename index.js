import mongoose from 'mongoose';
import Blog from './models/Blog.js';

const url = "mongodb+srv://prath:wpOFkHG2elRfYVF8@bbwfi.m1wu7rg.mongodb.net/Praktikumsbörse"

await mongoose.connect(
    url
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