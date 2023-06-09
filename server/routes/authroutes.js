const express =require("express")
const router = express.Router()
const {body} = require('express-validator')
const {updateDetails} =require("../controllers/auth");
const PatientSchema = require("../models/user")
//const auth = require('../middlewares/auth');
//const { getCurrentUser } = require('../controllers/user');

//router.put("/update/:PatientId",updatepatient);
//router.get("/getpatient",getpatient);
//router.delete("/delete/:Nic",deletepatient);
// router.post('/signup',signup);
// router.post(
//     '/login',
//     body('EmailAddress').isEmail(),
//     body('Password').isLength({ min: 6 }),
//     login
//   );
// router.get('/userProfile/:id',patientcontroller.getById);
router.put('/updateProfile/:EmailAddress',updateDetails);
  

router.post('/register', (req, res) => {
    const { FirstName, LastName, Nic, EmailAddress, Address, Gender, City, Dob, GuardianName, Password } = req.body;
  
    // Check if email already exists
    PatientSchema.findOne({EmailAddress }, (err, existingUser) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
  
      if (existingUser) {
        return res.status(400).json({ message: 'Email already exists' });
      }
  
      // Create new user
      const user = new PatientSchema({ FirstName, LastName, Nic, EmailAddress, Address, Gender, City, Dob, GuardianName, Password });
  
      user.save(err => {
        if (err) {
          return res.status(500).json({ message: err.message });
        }
  
        res.status(201).json({ message: 'User created successfully' });
      });
    });
  });
  
  module.exports = router;


  // Get user profile by email
router.get('/profile/:EmailAddress', async (req, res) => {
    try {
      const user = await PatientSchema.findOne({ EmailAddress: req.params.EmailAddress });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });


// router.get('/getprofile', getUserProfile);
// //router.put('/updateProfile', auth, updateProfile);
// router.delete('/deleteProfile', deleteAccount);
//router.post('/login', authcontroller.login);


module.exports =router