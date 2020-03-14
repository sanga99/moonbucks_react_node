const express = require('express');
const router = express.Router();
const dbConn = require('../mariaDBConn');


// [ admin ]
// [ mapMarker 클릭) 금월, 전월(해당매장) ]
router.post("/productClickMarker", (req, res) => {
    let store = req.body.name;
    const sql = `select 
                    pr.name, sum(pr.price) as price
                from 
                    sales as sa inner join product pr on sa.productId = pr.productId
                     inner join store as st on sa.storeId = st.storeId
                where 
                    st.name = ?
                and 
                    month(sa.date)= month(now())
                group by 
                    pr.productId
                 order by 
                    price desc;`;
        // db select문 수행
        dbConn((err, connection) => {
        connection.query( sql, store, (err, rows) => {
            connection.release(); // 연결세션 반환.
            if (err) {
            throw err;
            }
            return res.send( rows );
        });
        if(err) throw err;
        });
  });
/*

// [ 해당매장 금월 product 순위 ]( 매장명, 사장명, manager, 직원 ) 가져올 수 있는데 먼저 보기
select pr.name, sum(pr.price) as price
from sales as sa inner join product pr on sa.productId = pr.productId
inner join store as st on sa.storeId = st.storeId
where st.name = 'test역삼DT점'
and month(sa.date)= month(now())
group by pr.productId
order by price desc;
*/


// [ owner ] 


module.exports = router;