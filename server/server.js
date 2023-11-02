require("../server/database/connection");
const express = require('express');
const validator = require('validator');
const port = process.env.PORT || 3000;
const app = express();
const usersSchema = require('../server/models/users');

app.get('/register', (req, res) => {
    res.send('Hello World!');
});

app.post('/register', async (req, res) => {
    try{
        const {username, email, phonenumber, password} = req.body;
        if(username != "" || email != "" || phonenumber != "" || password != ""){
            res.status(400).json({
                mandatoryFields: "Please fill all the required fields."
            });
        }
        
        if(validator.isEmail(email)){
            res.status(400).json({
                invalidEmail: "Invalid Email."
            });
        }
        
        if(validator.isMobilePhone(phonenumber)){
            res.status(400).json({
                invalidPhoneNumber: "Invalid Phone Number."
            });
        }

        if(phonenumber.length !== 10){
            res.status(400).json({
                phoneNumberLimit: "Phone number must be 10 digits long."
            });
        }
        
        if(password.length < 8){
            res.status(400).json({
                passwordLength: "Password must be atleast 8 character long."
            });
        }
        
        const existingEmail = await usersSchema.findOne({ email });
        if(existingEmail){
            res.status(400).json({
                emailExists: "An user already registered with this email."
            });
        }
        
        const newUser = new usersSchema({ username, email, phoneNumber: phonenumber, password }); 
        if(await newUser.save()){
            res.status(200).json({
                success: "User registered successfully."
            });    
        }
    }catch(error){
        res.status(500).json({
            error: "Internal Server Error."
        }); 
    }
    

});

app.listen(port, () =>
  console.log(`App listening on port ${port}`),
);