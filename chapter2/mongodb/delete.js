const { MongoClient, ObjectId } = require("mongodb");
const DB_URL = "mongodb://localhost:27017";
const DB_Name = "mongodb-tutorials"
const client = new MongoClient(DB_URL);
async function main(){
    await client.connect();
    console.log("connected to mongodb");
    const db = client.db(DB_Name)
    const userCollection = db.collection("user");
    // console.log(new ObjectId((new Date().getTime()/1000)).getTimestamp());
    // const result = await userCollection.deleteOne({firstName: "Erfan"})
    // const result = await userCollection.deleteOne({_id: new ObjectId("63d40930f0944e44e3ad0541")})
    // console.log("Deleted Document => ", result);
    // const result = await userCollection.deleteMany({"address.province": "Tehran"})
    // const result = await userCollection.findOneAndDelete({firstName: "efe"})
    // console.log("Deleted Documents => ", result);
}

main()