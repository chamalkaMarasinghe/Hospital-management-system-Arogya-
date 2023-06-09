const PatientSchema= require('../models/user')
// const { check, validationResult } = require('express-validator');
const mongoose = require("mongoose")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
//const config = require('../config');
// const router = express.Router();
// const asyncHandler = require('express-async-handler');
// const generateToken = require('../../client/src/utils/generateToken');

// const { validationResult } = require('express-validator');
// const jwt = require('jsonwebtoken');

// const signup = async (req, res) => {
//   const { FirstName, LastName, Nic, EmailAddress, Address, Gender, City, Dob, GuardianName, Password } = req.body;
//   try {
//     // Check if user with email already exists
//     let patient = await PatientSchema.findOne({ EmailAddress });
//     if (patient) {
//       return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
//     }

//     const hashedPassword = await bcrypt.hash(Password, 10);
//     const newPatient = new PatientSchema({
//       FirstName: FirstName,
//       LastName: LastName,
//       Nic: Nic,
//       EmailAddress: EmailAddress,
//       Address: Address,
//       Gender: Gender,
//       City: City,
//       Dob: Dob,
//       GuardianName: GuardianName,
//       Password: hashedPassword
//     });

//     const result = await newPatient.save();

//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: 'tnathuluwage@gmail.com',
//         pass: '0728195727',
//       },
//     });

//     const mailOptions = {
//       from: 'tnathuluwage@gmail.com',
//       to: EmailAddress,
//       subject: 'Registration successful',
//       text: 'Congratulations! You have successfully registered for our website.',
//     };

//     await transporter.sendMail(mailOptions);

//     res.redirect('/login'); // redirect to login page after successful registration

//   } catch (err) {
//     if (err.code === 11000) {
//       res.status(409).json({ message: 'Email already in use!' });
//     } else {
//       res.status(500).json({ message: 'Server error!' });
//     }
//   }
// };

// const signup = async(req, res) =>{

//     const {  FirstName, LastName, Nic, EmailAddress,Address, Gender, City, Dob, GuardianName, Password } = req.body;
//   bcrypt.hash(Password, 10)

//   try {
//     // Check if user with email already exists
//     let user = await User.findOne({ email });
//     if (user) {
//       return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
//     }
//   .then(hashedPassword => {
//     const patient = new PatientSchema({
//         FirstName : FirstName,
//         LastName :LastName,
//         Nic : Nic ,
//         EmailAddress : EmailAddress,
//         Address : Address,
//         Gender : Gender ,
//         City : City,
//         Dob : Dob,
//         GuardianName : GuardianName,
//         Password : hashedPassword
//     });
//     return patient.save();
//   })
//     .then(async result => {
//       res.status(201).json({ message: 'User created!' });
//       const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//           user: 'tnathuluwage@gmail.com',
//           pass: '0728195727',
//         },
//       });
  
//       const mailOptions = {
//         from: 'tnathuluwage@gmail.com',
//         to: EmailAddress,
//         subject: 'Registration successful',
//         text: 'Congratulations! You have successfully registered for our website.',
//       };
  
//       await transporter.sendMail(mailOptions);
    
//     })
//     .catch(err => {
//       if (err.code === 11000) {
//         res.status(409).json({ message: 'Email already in use!' });
//       } else {
//         res.status(500).json({ message: 'Server error!' });
//       }
//     });
// };






const getById = async(req,res,next)=>{

  const id = req.params.id;
  let patient;

  try{
      patient = await PatientSchema.findById(id);
  }catch(err) {
      console.log(err);
  }

  if(!patient){
      return res.status(404).json({message:"There are no patients"});
  }
  return res.status(200).json({patient});
}


//Update Patient details
const updateDetails = async(req,res,next) =>{

  const { FirstName, LastName, Nic, EmailAddress, Address, Gender, City, Dob, GuardianName } = req.body;

  PatientSchema.findOneAndUpdate({ EmailAddress }, { FirstName, LastName, Nic, EmailAddress, Address, Gender, City, Dob, GuardianName }, { new: true })
    .then(user => {
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      return res.status(200).json({ message: 'Profile updated successfully', user });
    })
    .catch(err => {
      console.error(err);
      return res.status(500).json({ message: 'Internal server error' });
    });
  }


module.exports = { updateDetails,getById};














