

※ [개인 프로젝트] 
프로젝트명 : Moonbucks_react_node
================================

* * *
#### * Notion포트폴리오(chrome에서 작동): <https://www.notion.so/Portfolio-772ed24acfc14bf1a1d9e40a89edcf6e>
#### * 개인 프로젝트 : <http://15.165.159.219:3000/adminHome>  (현재 미가동)
   


* * *
#### client : create-react-app
#### server : node.js express
#### DB : MariaDB 
#### 배포 : AWS, Heroku
    

* * *
#### [프로젝트소개]      
스타벅스같은 체인점 카페들을 모티브 삼아, 체인점 시스템에서 [본점]과 [지점들]에서 각 통계치를 관제할 수 있는 사이트.

Actor1 : 본점 관리자. 
         전체매장 통계치 확인
         각 지점들을 kakao map을 통해 확인하고, 각 매장 정보와 통계치를 확인할 수 있다. 

Actor2 : 매장 지점장.
         1매장 당 1명의 매장주 가입만 가능.
         본인 매장의 월별 통계치를 chart로 확인 할 수 있다. 
        
        
         
* * *
#### [사용기술]
**[  front-end ]**    
 create-react-app,  react-redux, redux-saga, axios,  react-router-dom

**[ back-end ]**    
 node.js , Express, concurrently, body-parser,
 passport, passport-local, cookie-parser, express-session, cors

**[ API ]**     
kakoMap API(지도), recharts(차트)

**[ DB  &  기타 ]**     
proxy, fs, git, redux-devtools-extends, mariaDB

**[ Port ]**     
Client : React ( port : 3000 )
Server : node ( port : 5000 )



* * *
#### [대표기능]
*[ client ]
1. axios
2. React Redux + Redux saga
3. Map API (kakao Map API)
4. Chart API (rechart API)
5. 미로그인 : 화면 blur처리 -> 로그인 : blur제거
6. SCSS
    
*[ server ]
1. Passport - login
2. Express Router
3. Maria DB Connect
   
*[ DB ]
1. DB 설계 정규화 ( 3정규화 적용 )
2. sequence 부여
3. EXTRACT(MONTH FROM data)
4. inner join / left join
5. group by / with rollup
6. month(now()) / data(now(), interval -1 month)





