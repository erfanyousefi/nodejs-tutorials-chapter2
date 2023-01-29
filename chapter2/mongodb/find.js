const { MongoClient, ObjectId } = require("mongodb");
const DB_URL = "mongodb://localhost:27017";
const DB_Name = "mongodb-tutorials"
const client = new MongoClient(DB_URL);
async function main(){
    await client.connect();
    console.log("connected to mongodb");
    const db = client.db(DB_Name)
    const userCollection = db.collection("user");
    // const users = await userCollection.find({}).toArray();
    // const users = await userCollection.find({skills: "NodeJS"}).toArray();
    // const users = await userCollection.find({birthDay: {$lte: new Date("01-01-2000")}}).toArray();
    // const users = await userCollection.find({birthDay: {$gte: new Date("01-01-2000")}}).toArray();
    // const users = await userCollection.find({"address.city" : "Tehran"}).toArray();
    // const users = await userCollection.find({"address.street" : {$in: ['vahdat', 'aval', 'azadi-dowm']}}).toArray();
    // const users = await userCollection.find({_id : {$in: [new ObjectId("63d41302a70a4b3a574c274a"),  new ObjectId("63d411ed82b45b28d1fa0767")]}}).toArray();
    // console.log(users);
    // const user = await userCollection.findOne({firstName: "Erfan"});
    // const user = await userCollection.findOne({skills: "NodeJS"});
    const user = await userCollection.findOne({_id: new ObjectId("63d41302a70a4b3a574c274a")});
    console.log(user);
}

main()