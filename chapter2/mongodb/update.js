const { MongoClient, ObjectId } = require("mongodb");
const DB_URL = "mongodb://localhost:27017";
const DB_Name = "mongodb-tutorials"
const client = new MongoClient(DB_URL);
async function main(){
    await client.connect();
    console.log("connected to mongodb");
    const db = client.db(DB_Name)
    const userCollection = db.collection("user");
    // const result = await userCollection.updateOne({_id: new ObjectId("63d411ed82b45b28d1fa0767")}, {
    //     $set: {age: 30},
    // })
    // const result = await userCollection.updateOne({_id: new ObjectId("63d411ed82b45b28d1fa0767")}, {
    //     $push: {skills: "NestJS"},
    // })
    // const result = await userCollection.updateOne({_id: new ObjectId("63d411ed82b45b28d1fa0767")}, {
    //     $pull: {skills: "back-end developer"},
    // })
    // const result = await userCollection.updateOne({_id: new ObjectId("63d411ed82b45b28d1fa0767")}, {
    //     $inc: {age: 1},
    // })
    // const result = await userCollection.updateOne({_id: new ObjectId("63d411ed82b45b28d1fa0767")}, {
    //     $inc: {age: -4},
    // })
    // const result = await userCollection.updateOne({_id: new ObjectId("63d411ed82b45b28d1fa0767")}, {
    //     $rename: {age: "userAge"},
    // })
    // const result = await userCollection.updateOne({_id: new ObjectId("63d411ed82b45b28d1fa0767")}, {
    //     $unset: {identity: 1},
    // })
    // const result = await userCollection.updateOne({_id: new ObjectId("63d411ed82b45b28d1fa0767")}, {
    //     $set: {identity: 65321479},
    // })
    // const result = await userCollection.updateMany({firstName:"Erfan"}, {
    //     $set: {age: 25},
    // })
    // const result = await userCollection.findOneAndUpdate({firstName:"Erfan"}, {
    //     $set: {age: 27},
    // })
    console.log("Updated Document => ", result);
}

main()