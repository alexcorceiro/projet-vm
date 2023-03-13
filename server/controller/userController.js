const User = require("../model/userSchema")
const bcrypt = require('bcrypt');
const { generateToken } = require("../utils/generateToken");
const { remove } = require("../model/userSchema");

exports.register = async(req, res, next ) => {
    try{

      const { prenom , nom , email, password, role} = req.body

        if(!prenom || !nom || !email || !password){
            res.status(400)
            throw new Error("veuillez remplir tous les champs")
        }

        const userExists = await User.findOne({email})
        if(userExists){
            res.status(400)
            throw new Error("compte existe deja")
        }


        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({
            prenom,
            nom,
            email,
            password : hashedPassword,
            role
        })

        const token = generateToken(user._id)

        res.cookie("access_token", token, {
            path: "/",
            httpOnly: true,
            expires: new Date(Date.now() + 1000 * 86400), // 1 day
            sameSite: "none",
            secure: true,
          });

          if (user) {
            const {_id, prenom , nom , email, password, role} = user;
        
            res.status(201).json({
               _id, prenom , nom , email,  password , role
            })
        }
    
        await user.save()
        
    }catch(err){
        next(err)
    }
}

exports.login = async (req, res, next) => {
    const {email, password} = req.body
    try{
     
    const user = await User.findOne({ email})

    if(!user){
        res.status(404)
        throw new Error *('compte inconue')
    }

    const passwordCorrect = await bcrypt.compare(password, user.password)

    if (!passwordCorrect) {
        res.status(400);
        throw new Error("Invalid email or password");
      }

      const token = generateToken(user._id);

      if (user && passwordCorrect) {
        // Send HTTP-only cookie
        res.cookie("access_token", token, {
          path: "/",
          httpOnly: true,
          expires: new Date(Date.now() + 1000 * 86400), // 1 day
          sameSite: "none",
          secure: true,
        });
    
        const { _id ,email, password} = user;
    
        res.status(200).json({
          _id,
          email,
          password
        });
      } else {
        res.status(500);
        throw new Error('erreur de lors de la connexion');
      }

    }catch(err){
        next(err)
    }
}

exports.logout= async(req, res, next) => {
  res.cookie("token", "", {
    path: "/",
    httpOnly: true,
    expires: new Date(0), // 1 day
    sameSite: "none",
    secure: true,
  });
  return res.status(200).json({ message: "Logout successful" });
}

exports.getUser = async(req, res, next) =>{
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send({ message: 'utilisateur introuvable' });
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
}

exports.getUsers = async(req, res, next) => {
  const users = await User.find().sort("-createdAt").select("-password");
  if (!users) {
    res.status(500);
    throw new Error("Something went wrong");
  }
  res.status(200).json(users);
}

exports.update = async(req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      { _id :req.params.id},
      req.body,
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé.' });
    }
    res.status(200).json({ message: 'Utilisateur mis à jour avec succès.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur.' });
  }
}

exports.deleteUser = async(req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'utilisateur introuvable' });
    }
    res.json({ message: 'utilisateur supprimé' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}