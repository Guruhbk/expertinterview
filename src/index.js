 import express from 'express'
 import axios from 'axios';
 import {usernameValidator} from './validator.js'
 const app = express();
 const PORT = 8080;
 const gitAPI = "https://api.github.com/users"

 const users = async function(req, res){
    try{
        const { error, value } = usernameValidator.validate(req.params);
        if(error){
            return res.status(400).json({ error: error.details[0].message });
        }
        const axiosResponse = await axios.get(`${gitAPI}/${req.params.user}`)
        return res.send(axiosResponse.data);
        }catch(e){
            console.log(e)
            res.status(500).send(e.message) 
        }
 }

 app.get('/:user', users);

if(process.env.NODE_ENV !='test'){
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)) ;
}

 export default app;
