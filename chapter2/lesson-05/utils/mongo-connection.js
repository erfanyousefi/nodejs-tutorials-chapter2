const { MongoClient } = require("mongodb");

module.exports = class ConnectToMongoDB {
    #DB_URL="mongodb://localhost:27017/lesson-05";
    #db = null;
    async #connect(){
        try {
            let client = new MongoClient(this.#DB_URL);
            let db = client.db();
            return db;
        } catch (error) {
            console.log(error.message);
        }
    }
    async Get() {
        try {
            if(this.#db){
                console.log("db connection is already alive");
                return this.#db;
            }
            this.#db = await this.#connect();
            return this.#db;

        } catch (error) {
            console.log(error.message);
        }
    }
}