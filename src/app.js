
const  mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
const connectionURL = "mongodb://127.0.0.1:27017";
const mongoName = "TaskOfLec9"

mongoClient.connect(connectionURL, (error, res) => {
    if (error) {
        return console.log("erorr happen one")
    }
    console.log("all good 1 ");

    const db = res.db(mongoName);
 
    // 1 //
    db.collection("Tskers").insertOne({
        name: "Sara",
        age: 26
    }, (error, data) => {
        if (error) {
            console.log("error 2ed ")
        }
        console.log(data.insertedId + " =  data.insertedId 2 , the id of inserted field")
    }
    )

    db.collection("Tskers").insertOne({
        name: "Noor",
        age: 22
    }, (error, data) => {
        if (error) {
            console.log("error 3ed ")
        }
        console.log(data.insertedId + " = data.insertedId 3 , the id of inserted field ")
    }
    )

    // 2 //
     db.collection("Tskers").insertMany(
        [
            {
                name: "Sama",
                age:16
            },
              {
                name: "Anas",
                age:24
             },
            {
                name: "Hajar",
                age:27
             },
            {
                name: "Mahmood",
                age:27
            },
            {
                name: "Ahmed",
                age:18
            },
              {
                name: "Omar",
                age:27
            },
              {
                name: "Abdelrahman",
                age:27
             }
         ,
              {
                name: "Islam",
                age:27
             }
         ,
              {
                name: "Ziyad",
                age:19
             }
         ,
              {
                name: "Mohammed",
                age:20
             }
         ],
          
            (error, data) => {
                 if(error){
                 console.log("erorr happen 4th ")
            }
                console.log(data.insertedCount + " = data.insertedCount 4 , all the inserted fields ")
             }
        )

    // 3 //  
    db.collection("Tskers").find({ age: 27 }).toArray((error, taskers) => {
        if (error) {
            return console.log("erorr happen 5th")
        } else {
            console.log(taskers + " =  taskers data 5 , all who have 27y ")
        }
    })
 
    // 4 //   
    db.collection("Tskers").find({ age: 27 }).limit(3).toArray((error, taskers) => {
        if (error) {
            return console.log("erorr happen 6th")
        } else {
            console.log(taskers + "= taskers 6 , the first 3 who have 27y ")
        }
    })

    // 5 // 
    db.collection("Tskers").updateOne( { _id: mongodb.ObjectId("64da62d1e8a073efd72c5ecb") } ,
        {$set: {name:"Yazan"}  }
    ).then((data7) => {
        console.log(data7.modifiedCount + ", data7.modifiedCount 7 , change first 4 names ")
    }).catch((error) => {
        console.log(error)
    })

     db.collection("Tskers").updateOne( { _id: mongodb.ObjectId("64da5edca4698de326113ce5") } ,
        {$set: {name:"Yasmeen"} }
    ).then((data7) => {
        console.log(data7.modifiedCount + ", data7.modifiedCount 7 , change first 4 names ")
    }).catch((error) => {
        console.log(error)
    })

    db.collection("Tskers").updateOne({ _id: mongodb.ObjectId("64da5edca4698de326113ce6") },
      {$set: {name:"Yaseen"} }
    ).then((data7) => {
        console.log(data7.modifiedCount + ", data7.modifiedCount 7 , change first 4 names ")
    }).catch((error) => {
        console.log(error)
    })

    db.collection("Tskers").updateOne( { _id: mongodb.ObjectId("64da5edca4698de326113ce7") } ,
    {$set: {name:"Yahyaa"}}
    ).then((data7) => {
        console.log(data7.modifiedCount + ", data7.modifiedCount 7 , change first 4 names ")
    }).catch((error) => {
        console.log(error)
    })

    

    // 6 //
  
    //  db.collection("Tskers").updateOne( { _id: mongodb.ObjectId("64da5a1eb1e3071b6774498a") } ,
    //  { $inc: { age: 4 } }
    // ).then((data8) => {
    //     console.log(data8.modifiedCount + ", data7.modifiedCount 8 , change first 4 ages ")
    // }).catch((error) => {
    //     console.log(error)
    // })

     db.collection("Tskers").updateOne( { _id: mongodb.ObjectId("64da5edca4698de326113ce3") } ,
        {
         $inc: {age:4}
         }
    ).then((data7) => {
        console.log(data7.modifiedCount + ", data7.modifiedCount 7 , change first 4 names ")
    }).catch((error) => {
        console.log(error)
    })

     db.collection("Tskers").updateOne( { _id: mongodb.ObjectId("64da5edca4698de326113ce5") } ,
        {
         $inc: {age:4}
         }
       
    ).then((data7) => {
        console.log(data7.modifiedCount + ", data7.modifiedCount 7 , change first 4 names ")
    }).catch((error) => {
        console.log(error)
    })
      db.collection("Tskers").updateOne( { _id: mongodb.ObjectId("64da5edca4698de326113ce6") } ,
        {
         $inc: {age:4}
         }
    ).then((data7) => {
        console.log(data7.modifiedCount + ", data7.modifiedCount 7 , change first 4 names ")
    }).catch((error) => {
        console.log(error)
    })

    db.collection("Tskers").updateOne( { _id: mongodb.ObjectId("64da5edca4698de326113ce7") } ,
         {$inc: {age:4}}
    ).then((data7) => {
        console.log(data7.modifiedCount + ", data7.modifiedCount 7 , change first 4 names ")
    }).catch((error) => {
        console.log(error)
    })

   // 7 //
    db.collection("Tskers").updateMany( { },
       { $inc: { age: 10}} 
    ).then((data9) => {
        console.log(data9.modifiedCount + ", data9.modifiedCount 9 , change first 4 ages ")
    }).catch((error) => {
        console.log(error)
    })

    // 8 // 

    db.collection("Tskers").deleteMany({age:41})
        .then((data10) => { console.log(data10.deletedCount + " , data10.deletedCount , delete ALL have 41y ")})
        .catch((error) => {console.log(error) } )

   
//   ////////////////////////////////////////// the end of lec 9 taskes ////////////////////////////////////////////////////////////
    
    
    


})







