//*Aggregation

// Aggregation in MongoDB allows you to process and transform documents
// in a collection to perform complex computations, group data, and
// extract meaningful insights.It's particularly useful for data analysis,
// reporting, and generating aggregated results from large datasets.
//  MongoDB provides the Aggregation Framework, which consists of stages that
//  can be chained together to form powerful pipelines for data aggregation.

//example1


"sales"
db.createCollection("sales")
[
    { "_id": 1, "item": "Apple", "quantity": 10, "price": 2.5, "date": ISODate("2024-04-01T00:00:00Z") },
    { "_id": 2, "item": "Banana", "quantity": 5, "price": 1.5, "date": ISODate("2024-04-02T00:00:00Z") },
    { "_id": 3, "item": "Apple", "quantity": 8, "price": 2.8, "date": ISODate("2024-04-03T00:00:00Z") },
    { "_id": 4, "item": "Orange", "quantity": 12, "price": 3.0, "date": ISODate("2024-04-04T00:00:00Z") }


]

db.sales.aggregate([
    { $match: { item: "Apple" } }
])


//result
[
    { "_id": 1, "item": "Apple",
     "quantity": 10, "price": 2.5, 
     "date": ISODate("2024-04-01T00:00:00Z") },
    { "_id": 3, "item": "Apple", 
    "quantity": 8, "price": 2.8, 
    "date": ISODate("2024-04-03T00:00:00Z") }
]

//? $group
[
    { "_id": 1, "customer": "Alice", "product": "Apple", "quantity": 5, "price": 2.5 },
    { "_id": 2, "customer": "Bob", "product": "Banana", "quantity": 3, "price": 1.5 },
    { "_id": 3, "customer": "Alice", "product": "Orange", "quantity": 2, "price": 3.0 },
    { "_id": 4, "customer": "Bob", "product": "Apple", "quantity": 4, "price": 2.5 }
]

db.orders.aggregate([
    {
        $group: {
            _id: "$customer",
            totalSalesAmount: { $sum: { $multiply: ["$quantity", "$price"] } }
        }
    }
])
//result
[
    { "_id": "Alice", "totalSalesAmount": 17.5 },
    { "_id": "Bob", "totalSalesAmount": 13.5 }
]



//*match and group
db.order.aggregate([
    { $match: { product: "Apple" } },
    {
        $group: {
            _id: "$customer",
            totalSalesAmount: { $sum: { $multiply: ["$quantity", "$price"] } }
        }
    }
])

db.orders.aggregate([
    { $match: { product: "Apple" } },
    {
        $group: {
            _id: "$customer",
            totalSalesAmount: { $sum: { $multiply: ["$quantity", "$price"] } }
        }
    }
])

// work  with $ project
// Sure, let's explore how to use the $project stage in a MongoDB aggregation pipeline.
//  The $project stage allows you to reshape documents in the aggregation pipeline
//   by including, excluding, or transforming fields. We'll 
// continue with the example of an orders collection representing customer orders.

db.order.aggregate([
    { $match: { customer: "Alice" } },
    {
        $project: {
            _id: 0, // Exclude the _id field from the output
            customer: 1, // Include the customer field
            product: 1, // Include the product field
            totalAmount: { $multiply: ["$quantity", "$price"] } // Calculate and include a new field for total amount
        }
    }
])


//output

[
    { "customer": "Alice", "product": "Apple", "totalAmount": 12.5 },
    { "customer": "Alice", "product": "Orange", "totalAmount": 6.0 }
]



//example3 $skip &$limit
[
    { "_id": 1, "name": "Alice", "age": 18, "grade": "A", "city": "New York" },
    { "_id": 2, "name": "Bob", "age": 20, "grade": "B", "city": "Los Angeles" },
    { "_id": 3, "name": "Charlie", "age": 22, "grade": "C", "city": "Chicago" },
    { "_id": 4, "name": "David", "age": 19, "grade": "A", "city": "San Francisco" },
    { "_id": 5, "name": "Emily", "age": 21, "grade": "B", "city": "Miami" }

]
db.students.aggregate([
    { $skip: 2 }, // Skip the first two documents
    { $limit: 2 } // Limit the output to two documents
])
resultArray
[
    { "_id": 3, "name": "Charlie", "age": 22, "grade": "C", "city": "Chicago" },
    { "_id": 4, "name": "David", "age": 19, "grade": "A", "city": "San Francisco" }
]


//$unwind

// The $unwind stage in MongoDB's aggregation pipeline is used to
// deconstruct arrays in documents, allowing you to work with array
// elements as individual documents. This is particularly useful when
// dealing with documents that contain arrays, as it enables
// operations such as grouping, matching, and projecting on array elements.



[
    { "_id": 1, "title": "Book 1", "authors": ["Alice", "Bob"] },
    { "_id": 2, "title": "Book 2", "authors": ["Charlie"] },
    { "_id": 3, "title": "Book 3", "authors": ["David", "Emily", "Frank"] }

]

db.books.aggregate([
    { $unwind: "$authors" }
])

[
    { "_id": 1, "title": "Book 1", "authors": "Alice" },
    { "_id": 1, "title": "Book 1", "authors": "Bob" },
    { "_id": 2, "title": "Book 2", "authors": "Charlie" },
    { "_id": 3, "title": "Book 3", "authors": "David" },
    { "_id": 3, "title": "Book 3", "authors": "Emily" },
    { "_id": 3, "title": "Book 3", "authors": "Frank" }
]

//$filter
// The $filter stage in MongoDB's aggregation pipeline
// allows you to selectively include array elements that
//  match specified conditions. This stage is particularly 
//  useful when you want to 
// filter an array field within a document based on certain criteria.

[
    { "_id": 1, "title": "Book 1", "authors": ["Alice", "Bob", "Charlie"] },
    { "_id": 2, "title": "Book 2", "authors": ["David", "Emily"] },
    { "_id": 3, "title": "Book 3", "authors": ["Frank", "Alice"] }
]



db.book.aggregate([
    {
        $project: {
            title: 1,
            filteredAuthors: {
                $filter: {
                    input: "$authors",
                    as: "author",
                    cond: { $regexMatch: { input: "$$author", regex: /^A/i } }
                }
            }
        }
    }
])
resultArray
[
    { "_id": 1, "title": "Book 1", "filteredAuthors": ["Alice"] },
    { "_id": 2, "title": "Book 2", "filteredAuthors": [] },
    { "_id": 3, "title": "Book 3", "filteredAuthors": ["Alice"] }
]



//example2

db.orders.insertMany([
    {
        _id: 0, name: "Pepperoni", size: "small", price: 19,
        quantity: 10, date: ISODate("2021-03-13T08:14:30Z")
    },
    {
        _id: 1, name: "Pepperoni", size: "medium", price: 20,
        quantity: 20, date: ISODate("2021-03-13T09:13:24Z")
    },
    {
        _id: 2, name: "Pepperoni", size: "large", price: 21,
        quantity: 30, date: ISODate("2021-03-17T09:22:12Z")
    },
    {
        _id: 3, name: "Cheese", size: "small", price: 12,
        quantity: 15, date: ISODate("2021-03-13T11:21:39.736Z")
    },
    {
        _id: 4, name: "Cheese", size: "medium", price: 13,
        quantity: 50, date: ISODate("2022-01-12T21:23:13.331Z")
    },
    {
        _id: 5, name: "Cheese", size: "large", price: 14,
        quantity: 10, date: ISODate("2022-01-12T05:08:13Z")
    },
    {
        _id: 6, name: "Vegan", size: "small", price: 17,
        quantity: 10, date: ISODate("2021-01-13T05:08:13Z")
    },
    {
        _id: 7, name: "Vegan", size: "medium", price: 18,
        quantity: 10, date: ISODate("2021-01-13T05:10:13Z")
    }
])
//calculate total  order quantity

db.orders.aggregate([

    // Stage 1: Filter pizza order documents by pizza size
    {
        $match: { size: "medium" }
    },

    // Stage 2: Group remaining documents by pizza name and calculate total quantity
    {
        $group: { _id: "$name", totalQuantity: { $sum: "$quantity" } }
    }

])





//output

[
    { _id: 'Cheese', totalQuantity: 50 },
    { _id: 'Vegan', totalQuantity: 10 },
    { _id: 'Pepperoni', totalQuantity: 20 }
]


//Calculate Total Order Value and Average Order Quantity
db.orders.aggregate([

    // Stage 1: Filter pizza order documents by date range
    {
        $match:
        {
            "date": { $gte: new ISODate("2020-01-30"), $lt: new ISODate("2022-01-30") }
        }
    },

    // Stage 2: Group remaining documents by date and calculate results
    {
        $group:
        {
            _id: { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
            totalOrderValue: { $sum: { $multiply: ["$price", "$quantity"] } },
            averageOrderQuantity: { $avg: "$quantity" }
        }
    },

    // Stage 3: Sort documents by totalOrderValue in descending order
    {
        $sort: { totalOrderValue: -1 }
    }

])

//output

[
    { _id: '2022-01-12', totalOrderValue: 790, averageOrderQuantity: 30 },
    { _id: '2021-03-13', totalOrderValue: 770, averageOrderQuantity: 15 },
    { _id: '2021-03-17', totalOrderValue: 630, averageOrderQuantity: 30 },
    { _id: '2021-01-13', totalOrderValue: 350, averageOrderQuantity: 10 }
]