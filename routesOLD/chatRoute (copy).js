const router = require("express").Router();
const User = require("../models/usersModel");
const openai = require('openai');
const axios = require("axios")


router.get("/message", async (req, res) => {
  try {
    openai.apiKey=process.env.openAI;
    User.findOne({ email: "sidd.jml@gmail.com" }, 'weight height weightGoal', async (err, user) => {
    if (err) {
        console.log(err);
    } else {
    let prompt = `My weight is ${weight}kg and my height is ${height}cm. My total caloric intake is ${calories} calories, my protein intake is ${protein} grams and fats ${fats} grams. my ideal weight ${weightGoal}kg.

${message}`
const response = await openai.Completion.create({
    engine: "text-davinci-003",
    prompt: prompt,
    max_tokens: 1024
  });
    console.log(response.choices)
    res.status(200).send({
      message: "Got Response",
      data: response.choices[0].text,
      success: false,
    });
    }});
  } catch (error) {
    console.log(error)
    res.status(500).send({
      message: "Couldnt get response",
      data: error,
      success: false,
    });
  }
});

router.get("/health", async (req, res) => {
  try {
    openai.apiKey=process.env.openAI;
    User.findOne({ email: "sidd.jml@gmail.com" }, 'weight height weightGoal', async (err, user) => {
    if (err) {
        console.log(err);
    } else {
    let prompt = `My weight is ${req.body.weight}kg and my height is ${req.body.height}cm. My total caloric intake is ${req.body.calories} calories, my protein intake is ${req.body.protein} grams and fats ${req.body.fats} grams. my ideal weight ${req.body.weightGoal}kg.

${message}`
const response = await openai.Completion.create({
    engine: "text-davinci-003",
    prompt: prompt,
    max_tokens: 1024
  });
    console.log(response.choices)
    res.status(200).send({
      message: "Got Response",
      data: response.choices[0].text,
      success: false,
    });
    }});
  } catch (error) {
    console.log(error)
    res.status(500).send({
      message: "Couldnt get response",
      data: error,
      success: false,
    });
  }
});

router.get("/test", async (req, res) => { // https://backend.sidd065.repl.co/api/chat/test
  try{
      const result = await axios({
        method:"POST",
        "Content-Type": "application/json",
        url: "https://backend.sidd065.repl.co/api/users/find",
        data:{
        userid: '63c7ef219c7e7bff2bab703b',
        }
      });
      console.log(result.data)
      res.send({
        message:"success",
        data:result.data,
        success:true
      })
    } catch(e){
      console.log(e);
    }
});

module.exports = router;


/*
router.get("/test", async (req, res) => { // https://backend.sidd065.repl.co/api/chat/test
  try{
      const result = await axios({
        method:"GET",
        "Content-Type": "application/json",
        url: "https://backend.sidd065.repl.co/api/friend/search",
        data:{
          userid:"63c7ec5d9c7e7bff2bab7032",
        }
      });
      console.log(result.data)
      res.send({
        message:"success",
        data:[],
        success:true
      })
    } catch(e){
      console.log(e);
    }
});
*/

/*
const result = await axios({
        method:"POST",
        "Content-Type": "application/json",
        url: "https://backend.sidd065.repl.co/api/meals/add",
        data:{
          name: "Roti",
        userid: '63c7acd80c57c2e2c694650b',
        quantity: 1,
        }
      });
      console.log(result.data)
      res.send({
        message:"success",
        data:[],
        success:true
      })
*/

/*
const result = await axios({
        method:"POST",
        "Content-Type": "application/json",
        url: "https://backend.sidd065.repl.co/api/friend/add",
        data:{
          userid:"63c7ec5d9c7e7bff2bab7032",
          friendid:"63c7ef219c7e7bff2bab703b"
        }
      });
      console.log(result.data)
      res.send({
        message:"success",
        data:[],
        success:true
      })
    } catch(e){
      console.log(e);
    }
  */