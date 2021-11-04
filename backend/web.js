const fs = require('fs')
const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')
const db = require('./config/db')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const https = require('https')
const history = require('connect-history-api-fallback');

const port = 3000;
app.use(cors({
        credentials: true,
        origin: true
}));

require('dotenv').config()
//passport, jwt
const jwt = require('jsonwebtoken')
const { checkLevel, logRequestResponse, isNotNullOrUndefined, namingImagesPath, nullResponse, lowLevelResponse, response } = require('./util')
const passport = require('passport');
const passportConfig = require('./passport');

//multer
const {upload} = require('./config/multerConfig')

//express
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
passportConfig(passport);

const path = require('path');
app.set('/routes', __dirname + '/routes');
app.use('/config', express.static(__dirname + '/config'));
//app.use('/image', express.static('./upload'));
app.use('/image', express.static(__dirname + '/image'));
app.use('/api', require('./routes/api'))

app.get('/', (req, res) => {
    console.log("back-end initialized")
    res.send('back-end initialized')
});


app.post('/api/addmovie', upload.single('image'), (req, res) =>{
        try{
                res.header('Access-Control-Allow-Origin', 'http://localhost:8081');
                if(!req.cookies.token) return response(req, res, 401, "토큰 만료", [])
                if(checkLevel(req.cookies.token, 40))
                {
                        
                        const sql = 'INSERT INTO movies (movie_name, movie_image) VALUE (? , ?)'
                        const movieName = req.body.movieName
                        const {image, isNull} = namingImagesPath("movie", req.file)
                        const param = [movieName, image]
                        
                        console.log(req.file)
                        if(isNotNullOrUndefined([movieName]))
                        {       
                                
                                db.query(sql, param, (err, rows, feild)=>{
                                        if (err) {
                                                
                                                console.log(err)
                                                response(req, res, -200, "영화 추가 실패", [])
                                        }
                                        else {
                                                
                                                response(req, res, 200, "영화 추가 성공", [])
                                        }
                                })
                        }
                        else
                                nullResponse(req, res)
                }
                else
                        lowLevelResponse(req, res)
        }
        catch(err)
        {
        console.log(err)
        response(req, res, -200, "서버 에러 발생", [])
        }
})

app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, '0.0.0.0', () => {
        console.log("Server running on port " + port)
})

