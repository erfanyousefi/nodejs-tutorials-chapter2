const { MongoClient } = require("mongodb");
const DB_URL = "mongodb://localhost:27017";
const DB_Name = "mongodb-tutorials"
const client = new MongoClient(DB_URL);
async function main(){
    await client.connect();
    console.log("connected to mongodb");
    const db = client.db(DB_Name)
    const userCollection = db.collection("user");
    const result = await userCollection.insertOne({
        firstName: "Erfan",
        lastName: "Yousefi",
        age: 27,
        skills: ["back-end developer", "NodeJS", "MongoDB", "TypeScript"],
        identity: "123658479",
        birthDay: new Date("03-22-1996"),
        address: {
            province: "Kurdestan",
            city: "Sanandaj",
            street: "azadi"
        }
    })
    console.log("Inserted Document => ", result);
    userCollection.find({}).toArray().then(res => {
        console.log(res);
    });
}

main()