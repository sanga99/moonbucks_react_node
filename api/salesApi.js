const express = require('express');
const router = express.Router();
const dbConn = require('../mariaDBConn');



//[admin]
// [ mapMarker 클릭) 금월, 전월(해당매장) ]
router.post("/salesClickMarker", (req, res) => {

let store = req.body.name;
const sql = `select          
                extract(month from sa.date) as month, sum(price) as total_sales 
             from 
                sales as sa inner join product pr on sa.productId = pr.productId 
                inner join store as st on sa.storeId = st.storeId 
              where 
                st.name = ?
              and 
                sa.date >= date_add(now(), interval -2 month) 
              group by 
                extract(month from sa.date) 
              order by 
                month desc`;
    // db select문 수행
    dbConn((err, connection) => {
      connection.query( sql, store, (err, rows) => {
        connection.release(); // 연결세션 반환.
        if (err) {
          throw err;
        }
        return res.send( rows ); // 결과는 rows에 담아 전송  [{"3":"10000"},{"2":"20000"}]
      });
      if(err) throw err;
    });
  });


  // [ mapMarker 클릭) 누적매출(해당매장) ]
  router.post("/totalSalesClickMarker", (req, res) => {
  
  let store = req.body.name;
  const sql = `select 
                  sum(pr.price) as sum
               from 
                  sales as sa inner join product pr on sa.productId = pr.productId 
                  inner join store as st on sa.storeId = st.storeId
                where st.name = ?`;
      // db select문 수행
      dbConn((err, connection) => {
        connection.query( sql, store, (err, rows) => {
          connection.release(); // 연결세션 반환.
          if (err) {
            throw err;
          }
          return res.send( rows ); // 결과는 rows에 담아 전송
        });
        if(err) throw err;
      });
    });


  // [ mapMarker 클릭) [drink/food/goods] 별 총매출액(해당매장, 금월) ]
  router.post("/categorySalesClickMarker", (req, res) => {
  
  let store = req.body.name;
  const sql = `select 
                  pr.category,  sum(pr.price) as price
              from 
                  sales as sa inner join product pr on sa.productId = pr.productId
                  inner join store as st on sa.storeId = st.storeId
              where 
                  st.name = ?
              and 
                  month(sa.date)= month(now())
              group by 
                  pr.category
              `;
      // db select문 수행
      dbConn((err, connection) => {
        connection.query( sql, store, (err, rows) => {
          connection.release(); // 연결세션 반환.
          if (err) {
            throw err;
          }
          console.log('결과'+JSON.stringify(rows));
          return res.send( rows ); // 결과는 rows에 담아 전송
        });
        if(err) throw err;
      });
    });




//[owner]

module.exports = router;