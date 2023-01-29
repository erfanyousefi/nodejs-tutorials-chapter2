const products = require("./../data/products");
const fs = require("fs");

async function find(){
    return new Promise((resolve, reject) => {
        resolve(products)
    })
}
async function findById(id){
    return new Promise((resolve, reject) => {
        resolve(products.find(product => product.id == id))
    })
}
async function create(product){
    return new Promise((resolve, reject) => {
        products.push(product);
        fs.writeFile(`${process.cwd()}/data/products.json`, JSON.stringify(products), (err) => {
            if(err) reject(err);
            else resolve({message: "new product created", data: product})
        })
    })
}
async function update(id, payload){
    return new Promise((resolve, reject) => {
        products.map(product => {
            if(product.id == id) {
                Object.assign(product, payload)
            }
            return product;
        })
        fs.writeFile(`${process.cwd()}/data/products.json`, JSON.stringify(products), (err) => {
            if(err) reject(err);
            else resolve({message: "product updated successfully"})
        })
        
    })
}
async function remove(id){
    return new Promise((resolve, reject) => {
        const newList = products.filter(product => product.id != id);
        fs.writeFile(`${process.cwd()}/data/products.json`, JSON.stringify(newList), (err) => {
            if(err) reject(err);
            else resolve({message: "deleted product successfully"})
        })
        
    })
}
const ProductModel = {
    find,
    findById,
    create,
    update,
    remove
}
module.exports = ProductModel