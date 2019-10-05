const User = require('../model/Users');

module.exports = {
    async store(req, res){
        const user = await new User({
            Name: req.body.Name,
            email: req.body.Email,
            password: req.body.Password
        });

        try {
            User.create(user);
            return res.json(req.body);
        } catch (error) {
            return res.status(400).json({message: error});
        }
    },
    async update(req, res){
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(user);
    },

    async index(req, res){
        const user = await User.find();
        return res.json(user);
    },

    async show(req, res){
        const user = await User.findById(req.params.id);
        try {
            return res.json(user);    
        } catch (error) {
            return res.status(400).send(error);
        }
    },
    async destroy(req, res){
        try {
            await  User.findByIdAndRemove(req.params.id);
            res.send('User deleted');
        } catch (error) {
            return res.json(error);
        }
    }
}