const { MongoClient } = require("mongodb");
const DB_URL = "mongodb://localhost:27017";
const DB_Name = "mongodb-tutorials"
const client = new MongoClient(DB_URL);
async function main(){
    await client.connect();
    console.log("connected to mongodb");
    const db = client.db(DB_Name)
    const userCollection = db.collection("user");
    const result = await userCollection.insertMany(
        [
            {
                firstName: "Amir",
                lastName: "Amoli",
                age: 27,
                skills: ["front-end developer", "ReactJS", "NextJS"],
                identity: "983658479",
                birthDay: new Date("01-04-2000"),
                address: {
                    province: "Tehran",
                    city: "Tehran",
                    street: "vahdat"
                }
            },
            {
                firstName: "Ali",
                lastName: "Asadi",
                age: 27,
                skills: ["fullstack", "ReactJS", "NodeJS"],
                identity: "569758479",
                birthDay: new Date("05-10-1999"),
                address: {
                    province: "Tehran",
                    city: "Varamin",
                    street: "AmrAbad"
                }
            },
        ]
    )
    console.log("Inserted Documents => ", result);
    userCollection.count({}).then(count => {
        console.log(count);
    })
    userCollection.countDocuments({}).then(count => {
        console.log(count);
    })
}

main()