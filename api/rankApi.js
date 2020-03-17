const express = require('express');
const router = express.Router();
const dbConn = require('../mariaDBConn');


// [ admin ]
// [ mapMarker 클릭) 금월, 전월(해당매장) ]
router.post("/AllProductRankStore", (req, res) => {
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


// [Admin Select Side default]-[이번달 매장순위]
router.post("/StoresRankMonth", (req, res) => {
    const sql = `select 
                    st.name, sum(price) as price
                 from 
                    sales as sa inner join product pr on sa.productId = pr.productId 
                    inner join store as st on sa.storeId = st.storeId
                  where 
                    month(sa.date)= month(now())
                  GROUP BY 
                    st.storeId
                  order by 
                    price desc
                  limit 3;`;
        // db select문 수행
        dbConn((err, connection) => {
        connection.query( sql, (err, rows) => {
            connection.release(); // 연결세션 반환.
            if (err) {
            throw err;
            }
            return res.send( rows );
        });
        if(err) throw err;
        });
  });



// [Admin Select Side default]-[이번달 전체매장 카테고리(d/f/g)별 상품순위 ]
router.post("/ProductRank", (req, res) => {

  let category = req.body.category;   // [ 0(drink)/ 1(food)/ 2(goods)]
  if(category=='Drink'){category = 0;}
  else if(category=='Food'){category = 1;}
  else if(category=='Goods'){category = 2;}

    const sql = `select 
                    pr.name as name, sum(pr.price) as price
                 from 
                    sales as sa inner join product pr on sa.productId = pr.productId
                 where 
                    month(sa.date)= month(now())
                 and 
                    pr.category= ?
                 group by
                     pr.productId
                order by  
                    price
                 limit 3;
                    `;
        // db select문 수행
        dbConn((err, connection) => {
        connection.query( sql, category, (err, rows) => {
            connection.release(); // 연결세션 반환.
            if (err) {
            throw err;
            }
            return res.send( rows );
        });
        if(err) throw err;
        });
  });


// [Admin Select Side Select ]-[이번달 Drink 상품순위]-
router.post("/drinkRankStore", (req, res) => {

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
                 and 
                      pr.category= 0
                 group by 
                      pr.productId
                 order by 
                      price desc
                 limit 3
                      ;`;
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

// [Admin Select Side Select ]-[이번달 Food 상품순위]-
router.post("/foodRankStore", (req, res) => {

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
                 and 
                      pr.category= 1
                 group by 
                      pr.productId
                 order by 
                      price desc
                 limit 3;`;
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

// [Admin Select Side Select ]-[이번달 Drink 상품순위]-
router.post("/goodsRankStore", (req, res) => {

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
                 and 
                      pr.category= 2
                 group by 
                      pr.productId
                 order by 
                      price desc
                 limit 3;`;
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


// [ owner ] 


module.exports = router;