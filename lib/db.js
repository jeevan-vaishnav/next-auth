import {MongoClient} from 'mongodb'

export async function connectToDatabase(){
    const client = await MongoClient.connect('mongodb+srv://jeevan1:X3jlO25s5IBzLAnp@cluster0Test.1ryn5.mongodb.net/TestingProject?retryWrites=true&w=majority')
    return client;
}