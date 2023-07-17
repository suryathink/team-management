const express = require('express');

const connectDatabase = require('./config/db');


const app = express();
app.use(express.json());


app.get("/",(req,res)=>{
    try {
        const data = db.data1.aggregate([
            {
              $project: {
                _id: 0,
                team_name: { $literal: null },
                full_name: 1,
                email: 1,
                number: 1,
                city: 1,
                url: 1
              }
            },
            {
              $unionWith: {
                coll: "data-2",
                pipeline: [
                  {
                    $project: {
                      _id: 0,
                      team_name: 1,
                      full_name: 1,
                      email: 1,
                      number: { $literal: null },
                      city: { $literal: null },
                      url: { $literal: null }
                    }
                  }
                ]
              }
            }
          ])
          
       console.log("Data Sent Successfully")
       return res.send(data)
    } catch (error) {
        console.log("Data Sending Failed")
        return res.send("Data Sending Failed")
    }
    
})


app.listen(8080, async () => {
    try{
        await connectDatabase()
        console.log("connected to DB successfully")
    }
    catch(err){
        console.log("error connecting to DB")
        console.log(err)
    }
    console.log("listening on port 8080")
})