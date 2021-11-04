const express = require('express')
const passport = require('passport')
//const { json } = require('body-parser')
const router = express.Router()
const cors = require('cors')
router.use(cors())
router.use(express.json())

const crypto = require('crypto')
//const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const { checkLevel, getSQLnParams, getUserPKArrStrWithNewPK,
  isNotNullOrUndefined, namingImagesPath, nullResponse,
  lowLevelResponse, response, removeItems
} = require('../util')
const {
  getRowsNumWithKeyword, getRowsNum, getAllDatas,
  getDatasWithKeywordAtPage, getDatasAtPage,
  getKioskList, getItemRows, getItemList, dbQueryList, dbQueryRows
} = require('../query-util')

const db = require('../config/db')
const { upload } = require('../config/multerConfig')
const { Console } = require('console')
const { abort } = require('process')
const { stringify } = require('querystring')
//const { pbkdf2 } = require('crypto')
const salt = "435f5ef2ffb83a632c843926b35ae7855bc2520021a73a043db41670bfaeb722"
const saltRounds = 10
const pwBytes = 64
const jwtSecret = "djfudnsqlalfKeyFmfRkwu"


router.get('/list', (req, res, next) => {

	let ipp = 10;
	let totalCount = 0;
	let block = 10;
	let total_page = 0;
	let page = 1;
	let start = 0;
	let end = ipp;
	let start_page = 1;
	let end_page = block;
	let where = "";

	body = req.query; //get

	if(body.keyword) where += ` AND subject like '%${body.keyword}%' `; 
	sql = ` SELECT  count(*) cnt FROM tb_board WHERE board_code = ? ${where} `;
	db.query(sql,[body.board_code],(err,data)=>{
		if(err) throw err;
		totalCount = data[0].cnt;

		total_page = Math.ceil(totalCount/ipp);

		if(body.page) page = body.page;
		start = (page - 1) * 10;
		start_page = Math.ceil(page / block);
		end_page = start_page * block;
		
		if(total_page < end_page) end_page = total_page;

		let paging = {
			"totalCount":totalCount
			,"total_page": total_page
			,"page":page
			,"start_page":start_page
			,"end_page":end_page
			,"ipp":ipp
		}

		sql = ` SELECT * FROM tb_board WHERE board_code = ? ${where} ORDER BY num DESC LIMIT ?, ? `; 
		db.query(sql,[body.board_code, start, end],(err,list)=> {
			if(err) throw err;

			res.send({success:true,list:list,paging:paging});
		}) 
	})
})

router.post('/write', (req, res, next) => {
	body = req.body; //전송된 데이터를 받는다.
	sql = " INSERT INTO  tb_board (board_code, subject, id,cont, regdate,password) values (?, ?, ? ,? ,now(),?) ";
	db.query(sql,
		[body.board_code
		, body.subject
    , body.id
		, body.cont
    , body.password]
		,(err,result)=>{
		if(err) throw err;

		res.send({success:true});
	})
})


router.get('/view:num', (req, res, next) => {
	body = req.query;
   num = req.params.num;
   sql = " SELECT * FROM tb_board WHERE board_code = ? AND num = ? AND password = ?";
    
   db.query(sql, [body.board_code, num, body.password], (err,view) => {
      if(err) throw err
    else if(view.length > 0) res.send({success:true, view:view});
      else res.send({success: false})
   })
})

router.put('/mod', (req, res, next) => { //수정 모듈
	body = req.body; //post
	sql = " UPDATE tb_board SET subject = ?, cont = ?, regdate = now(), password = ? WHERE num = ? ";
	db.query(sql,[body.subject, body.cont, body.num, body.password],(err,result) => {
		if(err) throw err;
		res.send({success:true});
	})
})

router.delete('/delete', (req, res, next) => { //삭제 모듈
	body = req.query;
	sql = " DELETE FROM tb_board WHERE num = ? ";
	db.query(sql,[body.num],(err,result) => {
		if(err) throw err;
		res.send({success:true,result:result});
	})
})

//회원가입
router.post('/signup', (req, res, next) => {
  // 값 받아올 때, id, pw, userLevel, brandList
  try {
    const id = req.body.userid
    const name = req.body.name
    const pw = req.body.password
    const tel = req.body.tel
    const email = req.body.email
    const address = req.body.address
    const genre = req.body.genre
    //중복 체크 
    let sql = "SELECT * FROM users WHERE userid=?";

    db.query(sql, [id], (err, result) => {
      if (result.length > 0)
        response(req, res, -200, "ID가 중복됩니다.", [])
      else {
        console.log(salt)
        crypto.pbkdf2(pw, salt, saltRounds, pwBytes, 'sha512', async (err, decoded) => {
          // bcrypt.hash(pw, salt, async (err, hash) => {
          let hash = decoded.toString('base64')

          if (err) {
            console.log(err)
            response(req, res, -200, "비밀번호 암호화 도중 에러 발생", [])
          }
          else {
            sql = 'INSERT INTO users (userid, name, password,tel,email,address, genre) VALUES (?, ?, ?, ?, ?, ?, ?)';
            await db.query(sql, [id, name, hash, tel, email, address, genre], (err, result) => {

              if (err) {
                console.log(err)
                response(req, res, -200, "회원 추가 실패", [])
              }
              else {
                response(req, res, 100, "회원 추가 성공", [])
              }
            })
          }


        })
      }
    })

  }
  catch (err) {
    console.log(err)
    response(req, res, -200, "서버 에러 발생", [])
  }
})

// 권한 체크
router.get('/auth', (req, res, next) => {
  try {
    const decode = checkLevel(req.cookies.token, 0)

    if (decode) {
      let pk = decode.code
      let nam = decode.name
      let first = decode.user_level == 40
      let second = decode.user_level >= 0
      console.log(pk)
      console.log(nam)
      res.send({ pk, first, second })
    }
    else {
      res.send({
        id: decode.id,
        first: false,
        second: false
      })
    }
  }
  catch (err) {
    console.log(err)
    response(req, res, -200, "서버 에러 발생", [])
  }
})

router.post('/login', (req, res, next) => {
  try {

    passport.authenticate('local', { session: false }, async (err, user, info) => {

      if (!user)
        return response(req, res, -200, "해당 계정이 존재하지 않습니다.", []);

      try {
        var expiresTime;

        expiresTime = '60m'

        const token = jwt.sign({
          code: user.pk,
          id: user.userid,
          name: user.name,
          user_level: user.user_level

        },
          jwtSecret,
          {
            expiresIn: '60m',
            issuer: 'fori',
          });
          res.header('Access-Control-Allow-Origin', 'http://localhost:8081');
        res.cookie("token", token, { httpOnly: false, maxAge: 60 * 60 * 1000 });

        return response(req, res, 200, user.name + '님 환영합니다.', [user.pk]);
      }
      catch (err) {
        console.log(err);
        return response(req, res, -200, "로그인 중 오류 발생", [])
      }
    })(req, res, next);
  }
  catch (err) {
    console.log(err);
    response(req, res, -200, "로그인 중 오류 발생", [])
  }
})

router.post('/logout', (req, res, next) => {
  try {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8081');
    res.clearCookie('token')
    //res.clearCookie('rtoken')
    response(req, res, 200, "로그아웃 성공", [])
  }
  catch (err) {
    console.log(err)
    response(req, res, -200, "서버 에러 발생", [])
  }
});

//------------------------------------------------영화
//영화 리스트 출력
router.get('/movie/:page', (req, res, next) => {
  try {
    let page = (req.params.page - 1) * 10;

    db.query('SELECT * FROM movies ORDER BY pk DESC LIMIT ?, ?;', [page, page + 10], async (err, result) => {
      if (err) {
        console.log(err);
      }
      else {
        await db.query('SELECT COUNT(*) FROM movies;', (err, resl) => {
          console.log(resl)
          response(req, res, 100, { result: result, maxPage: resl })
        })


      }
    })
  }
  catch (err) {
    console.log(err)
    response(req, res, -200, "서버 에러 발생", [])
  }
});
//영화 수정
router.put('/updatemovie', upload.single('image'), (req, res) => {
  try {
    if(!req.cookies.token) return response(req, res, 401, "토큰 만료", [])
    const decode = checkLevel(req.cookies.token, 40)
    if (decode) {
      const pk = req.body.pk;
      const movieName = req.body.adName;
      const { image, isNull } = namingImagesPath("movie", req.file)
      let query = 'UPDATE movies SET '
      let params = [movieName]
      let colNames = ['ad_name']
      if (!isNull) { params.push(image); colNames.push('movie_image') }
      let { sql, param } = getSQLnParams(query, params, colNames)
      sql += ' WHERE pk=?'
      param.push(pk)

      if (param.length == 1)
        return response(req, res, -200, "입력된 데이터가 없습니다.", [])

      if (isNotNullOrUndefined(param)) {
        db.query(sql, param, (err, result) => {
          if (err) {
            console.log(err)
            response(req, res, -200, "영화 수정 실패", [])
          } else {
            response(req, res, 200, "영화 수정 성공", [])
          }
        })
      }
    }
    else
      lowLevelResponse(req, res)
  }
  catch (err) {
    console.log(err)
    response(req, res, -200, "서버 에러 발생", [])
  }
})
//영화 삭제
router.post('/deletemovie', (req, res) => {
  try {
    if(!req.cookies.token) return response(req, res, 401, "토큰 만료", [])
    const decode = checkLevel(req.cookies.token, 40)
    if (decode) {
      const pk = req.body.pk
      const param = [pk]
      if (isNotNullOrUndefined(param)) {
        let sql = "DELETE FROM movies WHERE pk=?";
        db.query(sql, param, (err, result) => {
          if (err) {
            console.log(err)
            response(req, res, -200, "영화 삭제 실패", [])
          } else {
            response(req, res, 200, "영화 삭제 성공", [])
          }
        })
      }
      else {
        nullResponse(req, res)
      }
    }
    else
      lowLevelResponse(req, res)
  }
  catch (err) {
    console.log(err)
    response(req, res, -200, "서버 에러 발생", [])
  }
})
//영화 예매
function chatToNumber(seat) {
  const first = (seat.charCodeAt(0) - 65) * 5;
  const second = Number(seat.slice(1));
  return first + second
}

router.post('/ticketingmovie', async (req, res) => {
  try {
    if(!req.cookies.token) return response(req, res, 401, "토큰 만료", [])
    if (checkLevel(req.cookies.token, 0)) {
      const userPk = req.body.userPk;
      const seatArr = req.body.seatNum.map(chatToNumber);
      const moviePk = req.body.moviePk;
      let isNone = false;
      for(const seatNum of seatArr) {
        await new Promise(resolve => {
          db.query('SELECT seat FROM movies WHERE pk=?', moviePk, async (err, result) => {
            if (err) {
              console.log(err);
            }
            else {
              const movie_seat = JSON.parse(result[0].seat);
              if(isNone) return
              if (movie_seat[seatNum - 1] != 0) {
                isNone = true;
                
                response(req, res, -100, "이미 예약이 된 좌석 입니다.", []);
                resolve()
              } else resolve()
            }
           })
        })
      }
      if(isNone) return
      
      await db.query('SELECT seat FROM movies WHERE pk=?', moviePk, async (err, result) => {
        const movie_seat = JSON.parse(result[0].seat);
        seatArr.forEach((seatNum) => {
          movie_seat[seatNum - 1] = userPk;
        })

        const string = JSON.stringify(movie_seat);

        await db.query('UPDATE movies SET seat=? WHERE pk=?', [string, moviePk], (err, result) => {
          if (err) {
            console.log(err);
          }
        })

        db.query("SELECT * FROM movies WHERE pk=?", moviePk, async (err, result) => {
          const movieName = result[0].movie_name
          await db.query('SELECT * FROM users WHERE pk=?', userPk, async (err, result) => {
            if (err) {
              console.log(err);
            }
            else {
              const user_seat = JSON.parse(result[0].my_seat);
              user_seat.push({
                movieName,
                moviePk,
                seatArr
              });
  
              const string = JSON.stringify(user_seat);
  
              await db.query('UPDATE users SET my_seat=? WHERE pk=?', [string, userPk], (err, result) => {
                if (err) {
                  console.log(err);
                }
              })
            }
          })
        })
    })
      await response(req, res, 200, "영화 예매 성공", [])
    }
    else
      lowLevelResponse(req, res);
  }
  catch (err) {
    console.log(err)
    response(req, res, -200, "서버 에러 발생", [])
  }
});
//자신의 프로필 출력
router.get('/myprofile/:pk', (req, res) => {
  try {
    if(!req.cookies.token) return response(req, res, 401, "토큰 만료", [])
    const pk = req.params.pk
    if (checkLevel(req.cookies.token, 0)) {
      db.query('SELECT * FROM users WHERE pk=?',pk,(err, result)=>{
        if(err){
          console.log(err);
        }
        else{
          response(req, res, 200, "프로필 출력 성공", [result])
        }
      })
    }
    else
      lowLevelResponse(req, res);
    }
    catch (err) {
    console.log(err)
    response(req, res, -200, "서버 에러 발생", [])
  }
});
//자신이 예매한 영화 출력
router.get('/ordermovie:pk',(req, res)=>{
  try {
    const pk = req.params.pk;
    db.query('SELECT * FROM movies WHERE pk=?',pk,(err,result)=>{
      if(err){
        console.log(err)
      }
      else{
        response(req, res, 200, "영화 가져오기 성공", result[0])
      }
    })
    }
    catch (err) {
      console.log(err)
      response(req, res, -200, "서버 에러 발생", [])
    }
})
//영화 예매 취소
router.post('/cancelmovie', async (req, res) => {
  try {
    if(!req.cookies.token) return response(req, res, 401, "토큰 만료", [])
    if (checkLevel(req.cookies.token, 0)) {
      const userPk = req.body.userPk;
      const seatNum = req.body.seatNum;
      const moviePk = req.body.movieNum;
      await db.query('SELECT seat FROM movies WHERE pk=?', moviePk, async (err, result) => {
        if (err) {
          console.log(err);
        }
        else {
          const movie_seat = JSON.parse(result[0].seat);
          if (movie_seat[seatNum - 1] != 0) {


            movie_seat[seatNum - 1] = 0;

            const string = JSON.stringify(movie_seat);

            await db.query('UPDATE movies SET seat=? WHERE pk=?', [string, moviePk], (err, result) => {
              if (err) {
                console.log(err);
              }
              else {
                response(req, res, 200, "영화 취소 성공", [])
              }
            })
            await db.query('SELECT my_seat FROM users WHERE pk=?', userPk, async (err, result) => {
              if (err) {
                console.log(err);
              }
              else {
                const user_seat = JSON.parse(result[0].my_seat);
                for (var i = 0; i < user_seat.length; i++) {
                  if (user_seat[i] == moviePk * 100 + seatNum) {
                    user_seat.splice(i, 1);
                    break;
                  }
                }
                const string = JSON.stringify(user_seat);
                console.log(string)
                await db.query('UPDATE users SET my_seat=? WHERE pk=?', [string, userPk], (err, result) => {
                  if (err) {
                    console.log(err);
                  }
                })
              }
            })


          }
          else {
            response(req, res, -100, "이미 취소가 된 좌석 입니다.", []);
          }
        }
      })
    }
    else
      lowLevelResponse(req, res);
  }
  catch (err) {
    console.log(err)
    response(req, res, -200, "서버 에러 발생", [])
  }
});
//광고리스트
router.get('/ad/:page', async (req, res) => {
  try {
    if(!req.cookies.token) return response(req, res, 401, "토큰 만료", [])
    if (checkLevel(req.cookies.token, 40)) {
      let page = ((req.params.page || req.body.page) - 1) * 10;
      if (isNotNullOrUndefined([page])) {
        let keyword = req.query.keyword
        let rows = {}, adList = {}
        let table = 'ad_information_tb'
        let columns = ['ad_name', 'ad_image', 'create_time']

        if (keyword)
          rows = await getRowsNumWithKeyword(table, columns, keyword)
        else
          rows = await getRowsNum(table)

        if (rows.code > 0) {
          if (keyword)
            adList = await getDatasWithKeywordAtPage(table, columns, keyword, page)
          else
            adList = await getDatasAtPage(table, columns, page)

          if (adList.code > 0)
            await response(req, res, 200, "광고 조회 성공", { result: adList.result, maxPage: rows.maxPage })
          else
            await response(req, res, -200, "광고 조회 실패", []);
        }
        else
          await response(req, res, -200, "광고 조회 실패", [])
      }
      else {
        nullResponse(req, res)
      }
    }
    else
      lowLevelResponse(req, res)
  }
  catch (err) {
    console.log(err)
    response(req, res, -200, "서버 에러 발생", [])
  }
})


module.exports = router;