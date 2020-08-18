const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const router = require("express").Router();
let User = require("../models/user.model");
const userValidator = require('../validations/userValidations.js')

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;

  const newUser = new User({ username });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});


router.post('/register', async (req, res) => {
	try {
		const isValidated = userValidator.registerValidation(req.body);
		if (isValidated.error) return res.status(400).json({ error: isValidated.error.details[0].message });
		const { email,  username, password } = req.body;
		const user = await User.findOne({ email });
		if (user) return res.status(400).json({ email: 'Email already exists' });
		const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);
        
		const newUser = new User({
		  username:username,
			password: hashedPassword,
			email,
		});
		await User.create(newUser);
		res.json({ msg: 'User created successfully', data: newUser });
	} catch (error) {
    console.log(error)
		res.status(422).send({ error: 'Can not create user' });
	}
});
router.post('/login', async (req, res) => {
	try {
        const isValidated = userValidator.loginValidation(req.body);
		if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message });
		const { email, password } = req.body;
		const userfound = await User.findOne({ email });
		if (!userfound) return res.status(404).json({ email: 'Email does not exist' });
		const match = bcrypt.compareSync(password, userfound.password);
		if (match) {            
            const user = {
                id: userfound._id,
                email: userfound.email
            }   
            const token = jwt.sign(user, 'token', {expiresIn: '1h'} )
            return res.json({token: `Bearer ${token}`})
        }
		else return res.status(400).send({ password: 'Wrong password' });
	} catch (e) {}
});



module.exports = router;
