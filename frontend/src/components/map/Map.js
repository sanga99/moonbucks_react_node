/*global kakao*/

import React, { Component } from 'react';
// import createMarker from './createMarker';


class Map extends Component {

    map;
    marker;
    infowindow;

    componentDidMount() {
        const script = document.createElement('script');
        script.async = true;
        script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=4df73cfcb7cfb8177e418e2c44092262&autoload=false";
        document.head.appendChild(script);

        script.onload = () => {

            // kakao maps 로드 (여기서 kakao모듈 사용 가능)
            kakao.maps.load(() => {
           
                let el = document.getElementById('map');

                // map 출력
                this.map = new kakao.maps.Map(el, {                          // 지도 생성 및 객체 리턴
                    center: new kakao.maps.Coords(523951.25, 1085073.75),  // 지도의 중심좌표
                    lever : 5   // 지도의 레벨(확대, 축소 정도)
                });

                //기존에 생성된 마커제거 => 작동 X
                if(this.marker!=null){
                  this.marker.setMap(null);  
                  this.infowindow.close();    
              }


                // 마커 생성
                this.marker = new window.kakao.maps.Marker({
                  position : this.map.getCenter()
                });
                // 마커 표기
                this.marker.setMap(this.map);

              

                // 클릭한 (위도, 경도)값
                this.clickMarker()

                
                // // 마커 위치를 클릭한 위치로 옮긴다
                // this.marker.setPosition(latLng);


                //인포윈도우  
               // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
                const iwContent = `<div style="padding:5px;"><a><strong>종각점</strong> 블라<br>종로 3가 123</a></div>`
                      ,iwRemoveable = true 
                      // ,iwPosition = new window.daum.maps.LatLng(latLngth); 
                      //인포윈도우 표시 위치입니다

                // 인포윈도우를 생성합니다
                this.infowindow = new window.daum.maps.InfoWindow({
                    // position : iwPosition, 
                    content : iwContent,
                    removable : iwRemoveable
                });

                // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
                this.infowindow.open(this.map, this.marker); 


            });
        };

       
    }

   
      // 지도에 클릭 이벤트를 등록. 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출.
      clickMarker = () =>   window.kakao.maps.event.addListener(this.map, 'click', function(mouseEvent) {                  
        
        return mouseEvent.latLng;   // 클릭한 (위도, 경도) 정보
      });
     
          


    render() {
      
      // 임시
      // 마커를 클릭 시 지도 초점 center
      // 방법1) popup이 그냥 지도 위로 새로 뜬다
      // 방법2) popup 뜨면 지도 비율이 달라진다. 
      const style={
        width: "800px",
        height: "700px",
      };

      // 참고 : https://kooku.netlify.com/api/%EB%A6%AC%EC%95%A1%ED%8A%B8%EC%97%90%EC%84%9C-%EC%A7%80%EB%8F%84api-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0/

      // => 처음 근방 지점들의 마커들이 띄워져 있고, 
      //    마커 위에 마우스 올리면 -> infowindow가 뜸
      //    마커 클릭 -> 옆 popup 뜬다.

  
        return (           
              <div className="Map" id="map" style={style}></div>         
        );
    }
}

export default Map;
