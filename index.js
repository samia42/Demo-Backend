const express = require('express');//require express
const cors = require('cors');
const jwt = require('jsonwebtoken');//require jwt
// const cookie = require('cookie');
// console.log(cookie());
var token = jwt.sign({ foo: 'bar' }, 'shhhhh');//jwt token taking key,value,key used for encryption

console.log(token)
// cookie.parse(token)
var decoded = jwt.verify(token, 'shhhhh');
console.log(decoded.foo) // bar
const app = express();//store express in app variaable

app.use(express.json());//app using express function json
app.use(express.urlencoded({//internal configuration 
    extended: true
}));//use to decode client side data made it recognizeable


app.use(cors());//app using cors



app.post('/submitData', (req, res) => {
    console.log(req.body);

    res.json({ ...req.body, jwt: token });
})



app.listen(9000, () => {
    console.log('Server started> 9000');
});