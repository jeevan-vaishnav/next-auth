import {MongoClient} from 'mongodb'

export async function connectToDatabase(){
    const client = await MongoClient.connect('mongodb+srv://jeevan:oSyFuKi3dI4HOR0o@cluster0.1ryn5.mongodb.net/TestingProject?retryWrites=true&w=majority')
    return client;
}