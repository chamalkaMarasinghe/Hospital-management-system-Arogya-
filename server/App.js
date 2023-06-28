const express = require('express')
const app = express()
const http = require('http')
const bodyParser = require('body-parser')
const mongoose = require('mongoose') //mongo db library
const cors = require('cors') //Cors will let us accept cross origin request from our frontend to backend.
const dotenv = require('dotenv') //for keep secret and non shareable properies
const multer = require('multer') //Multer is a middleware that will let us handle multipart/form data sent from our frontend form.
const morgan = require('morgan') //used to log information of each request that server receives.
const session =require('express-session')
const bcrypt = require('bcryptjs');
var forms = multer();

//importing models
const PatientSchema=require('./models/user')
const AdminBoard = require("./models/adminBoard")

//allow cross origin
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    next();
});

//api configuration
app.use(express.static('public'));
app.use(express.json({extended : true}))
app.use(express.urlencoded({extended : true}))
app.use(forms.array()); 
app.use(bodyParser.json({limit : '30mb', extended : true}))
app.use(bodyParser.urlencoded({limit : '30mb', extended : true}))
app.use(morgan("common"))
app.use(cors())
dotenv.config()

//route configurations
//const userRoute = require('./routes/user.js')
const physicalAssetRoute = require('./routes/physicalAsset.js')
const laboratoryEquipmentsRoute = require('./routes/laboratoryEquipments.js')
const medicineRoute = require('./routes/medicine')
const wardRoute = require("./routes/ward.js")
const paitentinforRoute = require("./routes/paitentinfor.js")
const EmployeeRoute = require('./routes/Employee.js')
const PayrollRoute = require('./routes/Payroll.js')
const AttendenceRoute = require('./routes/Attendence.js')
const authRoutes = require('./routes/authroutes.js');
app.use('/physicalAsset', physicalAssetRoute)
app.use('/laboratoryEquipments', laboratoryEquipmentsRoute)
app.use('/medicine', medicineRoute)
app.use('/auth', authRoutes);
app.use('/ward', wardRoute)
app.use('/paitentinfor',paitentinforRoute)
app.use('/Employee',EmployeeRoute)
app.use('/Payment',PayrollRoute)
app.use('/Attendence',AttendenceRoute)

app.post("/adminLogin", async(req, res)=>{
  try {
    const {EmailAddress, Password} = req.body
    console.log(EmailAddress);
    console.log(Password);
    const admin = await AdminBoard.findOne({ email: EmailAddress });
    if (!admin) {
      res.status(401).json({ message : "Invalid email or password" });
    }
    if (Password === admin.password) {
      res.status(200).json({ message : "Admin found", "admin" : admin});
    } else {
      res.status(401).json({ message : "Invalid email or password"});
    }
  } catch (error) {
    res.status(500).send({ message : "Internal server error"});
  }
})

app.post("/login-user", async (req, res) => {
    const { EmailAddress,Password } = req.body;
  
    // find user by email
    const user = await PatientSchema.findOne({ EmailAddress: EmailAddress });
  
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
  
    // compare password hash
    if (Password === user.Password) {
      return res.json({ FirstName: user.FirstName, LastName: user.LastName,Nic: user.Nic,EmailAddress: user.EmailAddress,Address: user.Address,Gender: user.Gender,City: user.City,Dob: user.Dob,GuardianName: user.GuardianName,createdAt:user.createdAt });
    } else {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
  });


  app.delete('/authRedirect/deleteAccount/:EmailAddress', async (req, res) => {
    try {
      const EmailAddress = req.params.EmailAddress;
      const user = await PatientSchema.findOne({ EmailAddress });
  
      if (!user) {
        return res.status(404).send({ message: 'User not found' });
      }
  
      await PatientSchema.deleteOne({ EmailAddress });
  
      return res.status(200).send({ message: 'User account deleted successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).send({ message: 'Internal server error' });
    }
  });

  app.get('/authRedirect/checkEmail/:EmailAddress', async (req, res) => {
    try {
      const { EmailAddress } = req.params;
      const user = await PatientSchema.findOne({ EmailAddress });
  
      if (user) {
        res.status(200).json({ message: 'Email exists in database' });
      } else {
        res.status(404).json({ message: 'Email not found in database' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  app.get('/auth/report/:email', async (req, res) => {
    try {
      // Retrieve profile details data from database for the given email
      const profiles = await PatientSchema.find({ EmailAddress: req.params.EmailAddress });
  
      // If no profiles found, return an error
      if (profiles.length === 0) {
        return res.status(404).json({ error: 'No profiles found for the given email' });
      }
  
      // Format profile details data into a report
      const reportData = profiles.map(profile => ({
        FirstName:profile.FirstName,
        LastName:profile.LastName,
        EmailAddress:profile.EmailAddress,
        Gender:profile.Gender,
        GuardianName:profile.GuardianName,

        created_at: profile.created_at,
      }));
  
      // Return report data as a CSV file
      res.setHeader('Content-Disposition', `attachment; filename=${req.params.EmailAddress}_profiles.csv`);
      res.setHeader('Content-Type', 'text/csv');
      res.csv(reportData, true);
  
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
const server = http.createServer(app)

//mongo setup
const PORT = process.env.PORT
mongoose.set('strictQuery', true)
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        server.listen(PORT, () => {console.log(`server running on port ${PORT}`);})
    })
    .catch((err) => {console.log(err);})
