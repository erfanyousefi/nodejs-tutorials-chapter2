const { MongoClient, ObjectId } = require("mongodb");
const DB_URL = "mongodb://localhost:27017";
const DB_Name = "mongodb-tutorials"
const client = new MongoClient(DB_URL);
async function main(){
    await client.connect();
    console.log("connected to mongodb");
    const db = client.db(DB_Name)
    const userCollection = db.collection("user");
    // const user = await userCollection.findOne({
    //     _id: new ObjectId("63d41302a70a4b3a574c274a")
    // }, {
    //     projection: {
    //         age: 0,
    //         birthDay: 0
    //     }
    // });
    // const user = await userCollection.findOne({
    //     _id: new ObjectId("63d41302a70a4b3a574c274a")
    // }, {
    //     projection: {
    //         firstName: 1
    //     }
    // });
    // const user = await userCollection.find({}, {
    //     skip: 2,
    //     limit: 1
    // }).toArray();
    // const user = await userCollection.find({}, {
    //     sort: {_id: -1}
    // }).toArray();
    // const user = await userCollection.find({}, {
    //     sort: {age: -1}
    // }).toArray();
    // const user = await userCollection.find({}, {
    //     sort: {birthDay: 1}
    // }).toArray();
    console.log(user);
}

main()