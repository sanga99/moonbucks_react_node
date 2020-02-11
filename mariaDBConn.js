// Node.js통해 MariaDB사용 커넥터 사용 코드 작성
const mariadb = require('mariadb');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 5000;


const data = fs.readFileSync('./database.json');
const conifg = JSON.parse(data);



/*
 createConnection VS createPool(추천)
 createConnection은 하나의 쿼리를 실행하고 있는 동안 다른사람이 실행할 수 없도록 연결을 차단한다. 
 따라서 사용자의 DB처리량이 감소한다.
 createPool은 하나의 쿼리를 실핼하고 있는 동안 다른 쿼리를 실행을 가능토록 한다.
 많은 사람이 접속하면 느려질수 잇지만 여러 쿼리를 병력적으로 실행할 수 있다.
*/
const pool = mariadb.createPool({
    host : config.host,
    port : config.port,
    user : config.user,
    password : config.password,
    database : config.database
})



async function DBTest(){
    let conn, rows;
    try{
        conn = await pool.getConnection();
        conn.query('USE test');
        rows = await conn.query('SELECT * FROM users');

    }
    catch(err){
        throw err;
    }
    finally{
        if(conn) conn.end();
        return rows[0;]
    }
}

module.exports = {
    DBTest : DBTest
}

