const express = require('express');
const DATA1 = require('./models/data1model')
const DATA2 = require('./models/data2model')
const connectDatabase = require('./config/db');


const app = express();
app.use(express.json());


app.get("/getdata",async (req,res)=>{

  // try {
  //   let result= await DATA1.aggregate([
  //     {
  //       $lookup: {
  //         from: 'data2',   //data2
  //         localField: 'email',
  //         foreignField: 'email',
  //         as: 'joinedData',
  //       },
  //     },
  //     {
  //       $project: {
  //         team_name: { $arrayElemAt: ['$joinedData.team_name', 0] },
  //         full_name: 1,
  //         email: 1,
  //         number: 1,
  //         city: 1,
  //         url: 1,
  //       },
  //     },
  //   ])

  //   let finalResult = await result.json();
  //   console.log("Data Converted to json successfully")
  //   res.send(finalResult)
  // } catch (error) {
  //   console.log("Error while fetching")
  //   res.send("Error from Fetching Data")
  // }
  
        let data = await DATA1.aggregate([
            {
              $lookup: {
                from: 'data2',   //data2
                localField: 'email',
                foreignField: 'email',
                as: 'joinedData',
              },
            },
            {
              $project: {
                team_name: { $arrayElemAt: ['$joinedData.team_name', 0] },
                full_name: 1,
                email: 1,
                number: 1,
                city: 1,
                url: 1,
              },
            },
          ]).then((result)=>{
            res.send(result)
          }).catch((err)=>{
          console.log(err);
          })
    
    
    
})


app.post("/create1", async (req, res) => {
    try {
      let { full_name, email, number, city, url } = req.body;
  
      const newData = await DATA1.create({
        full_name,
        email,
        number,
        city,
        url
      });
  
      console.log("Data created successfully");
      return res.json(newData);
    } catch (err) {
      console.log(err);
  
      return res.status(500).json({
        success: false,
        message: "Request to create1 Failed"
      });
    }
  });
  

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