
//* MongoDB is a popular open - source NoSQL database management system that uses a document - oriented data model.It is designed to be flexible, scalable, and performant, making it suitable for a wide range of use cases.

//     Here's an introduction to some key concepts and features of MongoDB:


//*1 Document - Oriented: MongoDB stores data in flexible, JSON - like documents, which can have varying structures.This allows developers to represent complex hierarchical relationships in a single record.


//*2     Schema - less: Unlike traditional relational databases, MongoDB does not enforce a rigid schema.This means you can insert documents into a collection without a predefined structure.However, you can enforce schema validation rules if needed.
// Collections and Documents: MongoDB organizes data into collections, which are analogous to tables in relational databases.Each collection contains one or more documents, which are individual records represented in BSON(Binary JSON) format.

//* 3    Indexes: MongoDB supports secondary indexes, which can greatly improve query performance by allowing for efficient data retrieval.Indexes can be created on any field within a document.

//* 4   Query Language: MongoDB provides a rich query language that allows you to perform complex queries against your data.You can filter, sort, and aggregate documents using operators and expressions.

// * 5   Aggregation Framework: MongoDB's Aggregation Framework allows you to perform advanced data processing operations, such as grouping, sorting, and filtering, directly within the database.


//*6 Scalability: MongoDB is designed to scale horizontally across multiple servers, making it suitable for large - scale deployments.It supports sharding, which distributes data across multiple machines, and replication, which provides high availability and fault tolerance.


// * 7   JSON / BSON: MongoDB uses JSON(JavaScript Object Notation) as its primary data interchange format.Internally, data is stored in BSON, a binary representation of JSON, which adds additional data types and optimizations.
//*8    Community and Ecosystem: MongoDB has a large and active community of developers and contributors.It is supported by a rich ecosystem of tools, libraries, and services, including drivers for various programming languages, graphical user interfaces, and cloud services.



//! nosql vs sql


// NoSQL and SQL(Structured Query Language) are two different approaches to database management systems, each with its own strengths and weaknesses.Here's a comparison between the two:

//* SQL(Structured Query Language):

//1 Data Model:

//* SQL databases are based on a relational data model, where data is organized into tables with rows and columns.
// *Tables have predefined schemas, and data must conform to this schema.
//2 Query Language:


//* SQL databases use the SQL language for querying and manipulating data.
//* SQL provides a standardized syntax for defining, querying, and manipulating relational databases.
//  3   Transactions:

// *SQL databases typically support ACID(Atomicity, Consistency, Isolation, Durability) transactions, ensuring data integrity and consistency.
// 4    Scalability:


// *SQL databases traditionally scale vertically, by adding more resources(CPU, memory) to a single server.
// *Scaling out(horizontally) can be more challenging and may require sharding or replication.
//    5 Examples:

//* Examples of SQL databases include MySQL, PostgreSQL, Oracle Database, Microsoft SQL Server, etc.
//  6  NoSQL(Not Only SQL):

//7 Data Model:
//* NoSQL databases use various data models, including document - oriented, key - value, column - family, and graph - based models.
// *They offer greater flexibility in data representation, allowing for schema - less or dynamic schemas.

//8 Query Language:

// *NoSQL databases may have their own query languages or APIs for accessing and manipulating data.
//* Some NoSQL databases support SQL - like query languages for certain operations.

// 9    Transactions:

//* NoSQL databases may provide eventual consistency rather than strict consistency guarantees.
//*They may sacrifice some ACID properties for scalability and performance.

// 10    Scalability:


//* NoSQL databases are designed to scale horizontally, by distributing data across multiple servers.
// *They are better suited for handling large volumes of data and high throughput.

//  11   Examples:

//* Examples of NoSQL databases include MongoDB(document - oriented), Redis(key - value), Cassandra(column - family), Neo4j(graph - based), etc.



// !json vs bson



//* JSON(JavaScript Object Notation) and BSON(Binary JSON) are both formats used for representing structured data, but they have some differences in terms of their features and use cases.

//*     JSON(JavaScript Object Notation):

//* Human - Readable: JSON is a human - readable text - based data interchange format.It is easy for humans to read and write, making it popular for transmitting data between a server and a web application.
//* Data Types: JSON supports a limited set of data types, including strings, numbers, booleans, arrays, objects, and null values.
//* Language Agnostic: JSON is language - agnostic and widely supported across various programming languages and platforms.
// *    Schema - less: JSON does not have a schema.Each JSON object can have a different structure, allowing for flexibility in data representation.



// {
//     "name": "John Doe",
//         "age": 30,
//             "is_student": false,
//                 "hobbies": ["reading", "traveling"],
//                     "address": {
//         "city": "New York",
//             "country": "USA"
//     }
// }


//* BSON(Binary JSON):

//* Binary Format: BSON is a binary serialization format for JSON - like documents.It represents JSON data in binary form, which can be more compact and efficient for storage and transmission.
//* Extended Data Types: BSON extends JSON with additional data types such as Date, Binary Data, Regular Expression, ObjectId, etc.
//*    Efficiency: BSON is more efficient for processing and storage compared to JSON, especially for large or complex documents.
// *        MongoDB: BSON is the primary data format used by MongoDB for storing documents in collections.Internally, MongoDB stores data in BSON format.


// { "_id" : ObjectId("616c7018b28aa313ee3ed33f"),
//  "name" : "John Doe", "age" : 30,
//  "is_student" : false,
//   "hobbies" : ["reading", "traveling"],
//    "address" : { "city" : "New York", "country" : "USA" }
//  }


// Comparison:

//* JSON is human - readable and widely used for data interchange over the web, while BSON is more efficient for storage and processing in database systems like MongoDB.
//* BSON supports additional data types and features compared to JSON, making it more suitable for database applications.
// *JSON is easy to work with in programming languages that natively support JSON parsing and serialization, while BSON requires conversion to and from JSON in most cases.



//?practical

//  ?   donwload  mongodb

//?Open Command Prompt or Terminal:
//mongod --version
//mongod
//mongo
//geeting mongodb database





//? Interact with MongoDB:
// ? Once in the MongoDB shell, you can perform various operations like database creation, data insertion, querying, etc.For example:
//?*  To show all databases: show dbs
//?*  To switch to a specific database: use your_database_name
//?*  To show all collections in the current database: show collections
//?* To query data from a collection: db.your_collection_name.find()
//?* Remember to replace your_database_name and your_collection_name with your actual database and collection names.


//`creting database
//?use mydatabase


//`deleting database
//? use mydatabase  // Switch to the database you want to delete
db.dropDatabase()
//`creting colletions
db.createCollection("collectionName")
//To create a collection in MongoDB, you can use the db.createCollection() method in the mongo shell.Here's the syntax:
db.createCollection("users")



//deleting collections

db.collectionName.drop()
//replace colletion nane

db.users.drop()

//insertone  method

db.createCollection("users")

db.users.insertOne({
    name: "John Doe",
    age: 30,
    email: "johndoe@example.com"
})

//insertMany

var documents = [
    { name: "Alice", age: 25, email: "alice@example.com" },
    { name: "Bob", age: 30, email: "bob@example.com" },
    { name: "Charlie", age: 35, email: "charlie@example.com" }
];

// Insert the array of documents into the collection
db.myCollection.insertMany(documents)

//ordered and unorderd
var documents = [
    { _id: 1, name: "Alice", age: 25 },
    { _id: 2, name: "Bob", age: 30 },
    { _id: 3, name: "Charlie", age: 35 },
    { _id: 4, name: "Alice", age: 30 } // Duplicate _id intentionally added
];
//1,2,3  all added   except  error
db.myCollection.insertMany(documents, { ordered: false });


//?read opration in mongodb

//*Find Documents:


//?comparison oprators 


// Sample documents to insert



var documents = [
    { name: "Alice", age: 25, department: "HR", salary: 50000 },
    { name: "Bob", age: 30, department: "IT", salary: 60000 },
    { name: "Charlie", age: 35, department: "Finance", salary: 70000 },
    { name: "David", age: 28, department: "HR", salary: 55000 },
    { name: "Eva", age: 33, department: "IT", salary: 65000 },
    { name: "Frank", age: 40, department: "Finance", salary: 75000 },
    { name: "Grace", age: 27, department: "HR", salary: 52000 },
    { name: "Henry", age: 32, department: "IT", salary: 63000 },
    { name: "Ivy", age: 37, department: "Finance", salary: 72000 },
    { name: "Jack", age: 29, department: "HR", salary: 56000 }



];

// Insert the documents into the collection
db.employees.insertMany(documents);

//* $eq
// Matches values that are equal to a specified value.
// *    $gt
// Matches values that are greater than a specified value.
// *    $gte
// Matches values that are greater than or equal to a specified value.
//  *   $in
// Matches any of the values specified in an array.
//   *  $lt
// Matches values that are less than a specified value.
// *    $lte
// Matches values that are less than or equal to a specified value.
//  *   $ne
// Matches all values that are not equal to a specified value.
//  *   $nin
// Matches none of the values specified in an array.






// ? logical oprator


// Name
// Description


[
    {
        "_id": ObjectId("61f4d2056daabc0012345678"),
        "name": "Smartphone",
        "category": "Electronics",
        "price": 599.99,
        "quantity": 100
    }, {
        "_id": ObjectId("61f4d2056daabc0012345679"),
        "name": "T-Shirt",
        "category": "Clothing",
        "price": 29.99,
        "quantity": 200
    }, {
        "_id": ObjectId("61f4d2056daabc0012345680"),
        "name": "Python Programming",
        "category": "Books",
        "price": 49.99,
        "quantity": 50
    }
    , {
        "_id": ObjectId("61f4d2056daabc0012345681"),
        "name": "Wooden Chair",
        "category": "Furniture",
        "price": 149.99,
        "quantity": 20
    }
    , {
        "_id": ObjectId("61f4d2056daabc0012345682"),
        "name": "Laptop",
        "category": "Electronics",
        "brand": "Apple",
        "price": 1499.99,
        "quantity": 50
    }

]



//*$and Operator: This operator selects
//documents that satisfy all the specified conditions.


//*$or Operator: This operator selects documents that satisfy
//at least one of the specified conditions.

//*$nor Operator: This operator selects documents that fail all the specified conditions.

//*$exists Operator: This operator selects documents where the specified field exists or does not exist.



//?  coursor oprator




// a cursor is an object returned by a database query that 
// allows you to traverse the result set, retrieve documents
//  one by one, and perform operations on them.The cursor
//   provides a way to iterate over the query results and 
//   access each document individually.

//sort method
// Sort documents by age in ascending order





db.employees.find().sort({ age: 1 });

// Sort documents by salary in descending order
db.employees.find().sort({ age: -1 });



//start////





//limit
// Limit the result set to 5 documents
db.employee.find().limit(5);

//count
// Count the number of documents where the age is greater than 30

db.employees.find({ age: { $gt: 30 } }).count();
//toArray()
// Convert the cursor to an array
var resultArray = db.employees.find().toArray();

// ?   element oprator


//In MongoDB, the element operators are used to query 
//documents based on the presence or absence of fields or 
//elements within arrays. 
// Consider a collection of contacts with different fields
db.contacts.insertMany([
    { name: "Alice", email: "alice@example.com" },
    { name: "Bob", phone: "123-456-7890" },
    { name: "Charlie" }
]);

// Find documents where the "email" field exists
db.contacts.find({ email: { $exists: true } });

// Find documents where the "phone" field does not exist
db.contacts.find({ phone: { $exists: false } });

//*$type Operator


// In MongoDB, the $type operator is used in
//  queries to match documents based on their data types.
//  It allows you to find documents where a specific field 
//  has a certain data type.Here's 
// how you can use the $type operator in MongoDB queries:

// Consider a collection of contacts with different field types

// Available Data Types:
// MongoDB supports various data types that you can use with the $type operator.Some of the commonly used data types include:
// "double": 64 - bit floating - point number
// "string": UTF - 8 encoded string
// "object": Embedded document
// "array": Array
// "binData": Binary data
// "objectId": MongoDB ObjectId
// "bool": Boolean
// "date": Date
// "null": Null value
// "regex": Regular expression
// "javascript": JavaScript code
// "symbol": Symbol
// "int": 32 - bit integer
// "timestamp": MongoDB internal timestamp
// "long": 64 - bit integer
// "decimal": Decimal128



db.contacts.insertMany([
    { name: "Alice", age: 25, tags: ["tech", "programming"] },
    { name: "Bob", isActive: true },
    { name: "Charlie", address: { city: "New York", zip: 10001 } }
]);

// Find documents where the "age" field is of type number (double)
db.contacts.find({ age: { $type: "number" } });

// Find documents where the "tags" field is an array
db.contacts.find({ tags: { $type: "array" } });

db.collection.find({ name: { $type: 'string' } });



//*$size Operator:


// The $size operator in MongoDB is used to query 
// documents based on the size of an array field.It
//  allows you to find documents where a specific array
//   field contains a certain number of elements.Here's a 
//   detailed explanation
//  of how the $size operator works in MongoDB queries:



db.items.insertMany([
    { name: "Item 1", tags: ["red", "blue"] },
    { name: "Item 2", tags: ["green", "yellow", "orange"] },
    { name: "Item 3", tags: ["black"] }
]);

// Find documents where the "tags" array has exactly 2 elements
db.item.find({ tags: { $size: 2 } });

//*$all Operator:
// Consider a collection of documents with arrays of tags


// Find documents where the "tags" array contains both "tech" and "accessories"
db.item.find({ tags: { $all: ["green", "yellow"] } });

//*$elemMatch Operator:
// Consider a collection of students with scores array
db.students.insertMany([
    { name: "Alice", scores: [85, 92, 78] },
    { name: "Bob", scores: [90, 88, 95] },
    { name: "Charlie", scores: [75, 85, 80] }
]);

// Find documents where the "scores" array contains a score greater than 90 and less than 100
db.students.find({ scores: { $elemMatch: { $gt: 90, $lt: 100 } } });




//? projections

// In MongoDB, projections are used to specify which fields should be 
// returned in the query results.This is particularly useful for 
// retrieving only the necessary data and improving performance by
//  reducing the amount of data transferred between the database
//   and the application.Projections
//  allow you to include or exclude specific fields from the query results


// {
//     "_id": 1,
//         "username": "john_doe",
//             "email": "john@example.com",
//                 "age": 30,
//                     "country": "USA"
// }

//result
// [
//     { "username": "john_doe", "email": "john@example.com" },

// ]








//example2

db.post.insertMany([
    {
        "_id": 1,
        "title": "Introduction to MongoDB",
        "content": "MongoDB is a NoSQL database...",
        "comments": [
            { "user": "Alice", "comment": "Great introduction!" },
            { "user": "Bob", "comment": "Looking forward to more tutorials." }
        ]
    },
    {
        "_id": 2,
        "title": "Advanced MongoDB Queries",
        "content": "Learn about aggregation pipelines...",
        "comments": [
            { "user": "Charlie", "comment": "Very informative!" },
            { "user": "David", "comment": "Can't wait to try these queries." }
        ]
    },
    {
        "_id": 3,
        "title": "MongoDB Schema Design",
        "content": "Best practices for schema design...",
        "comments": [
            { "user": "Emma", "comment": "This helped me a lot!" },
            { "user": "Frank", "comment": "Need more examples for complex schemas." }
        ]
    },
    {
        "_id": 4,
        "title": "MongoDB Indexing",
        "content": "Optimizing queries with indexes...",
        "comments": [
            { "user": "Grace", "comment": "Indexing made a huge difference!" },
            { "user": "Henry", "comment": "How to create compound indexes?" }
        ]
    },
    {
        "_id": 5,
        "title": "MongoDB Performance Tuning",
        "content": "Improving performance through configuration...",
        "comments": [
            { "user": "Isabella", "comment": "These tips really boosted my app!" },
            { "user": "Jack", "comment": "Any suggestions for large datasets?" }
        ]
    }
]);


db.users.find({}, { title: 1, content: 1, _id: 0 })

db.post.findOne({ _id: 1 }, { comments: 1, _id: 0 })
result

// {
//     "comments": [
//         { "user": "Alice", "comment": "Great introduction!" },
//         { "user": "Bob", "comment": "Looking forward to more tutorials." }
//     ]
// }




// To delete documents in MongoDB,
//  you can use the deleteOne()
//   method to delete a single document that matches a specified filter, and the deleteMany() method to delete multiple documents that match
//  a specified filter.Here's how you would use these methods:

// Delete a single document using deleteOne()
db.collection.deleteOne({ "_id": 1 }); // Deletes the document with _id equal to 1

// Delete multiple documents using deleteMany()
db.collection.deleteMany({ "status": "Draft" }); // Deletes all documents with the status "Draft"









// example of updating documents using updateOne() and updateMany()
//  in MongoDB, along with inserting five documents into a collection:


// Inserting five documents into the collection
db.collection.insertMany([
    {
        "_id": 1,
        "title": "Introduction to MongoDB",
        "content": "MongoDB is a NoSQL database...",
        "author": "Alice",
        "status": "Draft"
    },
    {
        "_id": 2,
        "title": "Advanced MongoDB Queries",
        "content": "Learn about aggregation pipelines...",
        "author": "Bob",
        "status": "Draft"
    },
    {
        "_id": 3,
        "title": "MongoDB Schema Design",
        "content": "Best practices for schema design...",
        "author": "Charlie",
        "status": "Draft"
    },
    {
        "_id": 4,
        "title": "MongoDB Indexing",
        "content": "Optimizing queries with indexes...",
        "author": "David",
        "status": "Draft"
    },
    {
        "_id": 5,
        "title": "MongoDB Performance Tuning",
        "content": "Improving performance through configuration...",
        "author": "Emma",
        "status": "Draft"
    }
]);

// Update a single document using updateOne()
db.collection.updateOne(
    { "title": "Introduction to MongoDB" }, // Filter to match the document
    { $set: { "status": "Published" } } // Update operation
);

// Update multiple documents using updateMany()
db.collection.updateMany(
    { "status": "Draft" }, // Filter to match documents
    { $set: { "status": "Reviewed" } } // Update operation
);
