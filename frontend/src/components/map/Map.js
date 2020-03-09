/*global kakao*/

import React, { Component } from 'react';
import * as infoTemplate from  './infoWindowTemplate';
// import createMarker from './createMarker';


class Map extends Component {

    // map;
    // marker;
    // infowindow;

    constructor(props){
      super(props);
      this.state = {
        // clicked : false,   // 잠금
        map: null, 
        marker :null,
        // markers :[],
        infowindow : null, 

        
      };
    }

    componentDidMount() {
        const script = document.createElement('script');
        script.async = true;
        script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=4df73cfcb7cfb8177e418e2c44092262&autoload=false&libraries=services";
        document.head.appendChild(script);

        

              
          script.onload = () => {
                
                // kakao maps 로드 (여기서 kakao모듈 사용 가능)
            kakao.maps.load(() => {

                
                // => 검색모듈 바꾸기 /  장소 검색 객체를 생성합니다
                // this.ps = new kakao.maps.services.Places();
                
                const mapContainer = document.getElementById('map');

                // map 출력
                this.map = new kakao.maps.Map(mapContainer, {                          // 지도 생성 및 객체 리턴
                    center: new kakao.maps.LatLng(33.450701, 126.570667),  // 지도의 중심좌표
                    lever : 5   // 지도의 레벨(확대, 축소 정도)
                });


                // 마커를 표시할 위치와 title 객체 배열입니다 
                const positions = [
                  {
                      title: '카카오', 
                      latlng: new kakao.maps.LatLng(33.450705, 126.570677)
                  },
                  {
                      title: '생태연못', 
                      latlng: new kakao.maps.LatLng(33.450936, 126.569477)
                  },
                  {
                      title: '텃밭', 
                      latlng: new kakao.maps.LatLng(33.450879, 126.569940)
                  },
                  {
                      title: '근린공원',
                      latlng: new kakao.maps.LatLng(33.451393, 126.570738)
                  }
                ];


                for (var i = 0; i < positions.length; i ++) {

                      // [마커를 생성]
                      this.marker = new kakao.maps.Marker({
                          map: this.map, // 마커를 표시할 지도
                          position: positions[i].latlng, // 마커를 표시할 위치
                          title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                      });
                      


                      // [ 인포윈도우를 생성]
                      var infowindow = new kakao.maps.InfoWindow({
                        content: positions[i].title // 인포윈도우에 표시할 내용
                      });



                       // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
                      // 이벤트 리스너로는 클로저를 만들어 등록합니다 
                      // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
                      kakao.maps.event.addListener(this.marker, 'mouseover', makeOverListener(this.map, this.marker, infowindow));
                      kakao.maps.event.addListener(this.marker, 'mouseout', makeOutListener(infowindow));
                      kakao.maps.event.addListener(this.marker, 'click', makeClickListener(this.map, this.marker, positions[i].title));


                 }    // for end


                  // [ 인포윈도우를 표시하는 클로저를 만드는 함수] 
                  function makeOverListener(map, marker, infowindow) {
                    return function() {
                        infowindow.open(map, marker);
                    };
                  }

                  // [ 인포윈도우를 닫는 클로저를 만드는 함수]
                  function makeOutListener(infowindow) {
                    return function() {
                        infowindow.close();
                    };
                  }

                  // [ 마크 클릭 시 이벤트 ] => 해당 정보가 옆 side로 나온다. 
                  function makeClickListener(map, marker, title) {
                    return function() {
                        alert('완료'+title)
                    };
                  }



                // 주소-좌표 변환 객체를 생성
                const geocoder = new kakao.maps.services.Geocoder();

                // 좌표변환 함수 - 주소로 좌표 추출
                  const handleAddress = (result, status) => {
   
                      // 정상적으로 검색이 완료됐으면 
                      if (status === kakao.maps.services.Status.OK) {

                          const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                          console.log('주소 좌표(coords) 변환'+ coords)

                          // 마커 생성 함수
                          // this.createMarker(positions);

                          
                          // 인포윈도우 생성 함수(닫기포함)
                          // this.createinfoWindow();

                          // 커스텀 오버레이 함수
                          // this.createOverlay();
                          
                          // 지도의 중심을 결과값으로 받은 위치로 이동
                          // map.setCenter(coords); 
                          
                        }
                      };    // end hadleAddress
                      
                      //geocoder 라이브러리 addressSearch 메서드 사용
                      geocoder.addressSearch('제주특별자치도 제주시 첨단로 242', handleAddress);
                      
                      // 키워드로 장소를 검색합니다
                      // this.searchPlaces();


            });
        };

       
    }

         
        // [ 마커 생성 함수 ]  
        // createMarker = (positions) => {

        //   for (var i = 0; i < positions.length; i ++) {
        //       // 마커를 생성합니다
        //       this.marker = new kakao.maps.Marker({
        //           map: this.map, // 마커를 표시할 지도
        //           position: positions[i].latlng, // 마커를 표시할 위치
        //           title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        //       });
        //    }
        //     //  마커 표기
        //     // this.marker.setMap(this.map);
        // }




        // [ 커스텀 오버레이 ]
        createOverlay = () => {

            const iwContent = infoTemplate.infoWindowTemplate()
                  ,iwRemoveable = true 

            // 마커 위에 커스텀오버레이를 표시합니다
            // 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다 
            //=> css 안되어 마커에 안뜸
            const overlay = new kakao.maps.CustomOverlay({
              content: iwContent,
              // removable : iwRemoveable,
              map: this.map,
              position: this.marker.getPosition()
            });

            // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다 
            //=> css 먼저라 작동하는지 아직 미확인 
            kakao.maps.event.addListener(this.marker, 'click', function() {
              overlay.setMap(this.map);
            });

            // 커스텀 오버레이를 닫기 위해 호출되는 함수입니다 
            function closeOverlay() {
              overlay.setMap(null);    
            }
    
         }
      
          


           // [ 인포윈도우 ]
          // createinfoWindow = (positions) => {
          //   // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능.
          //   const iwContent = infoTemplate.infoWindowTemplate()
          //         ,iwRemoveable = true 


          //   // 인포윈도우를 생성합니다
          //   this.infowindow = new kakao.maps.InfoWindow({
          //       content : iwContent, // => api 다른한곳에서 가져오고 여기서는 이곳을 제외한 필요한 부분만 api에서 추출해오기
          //       removable : iwRemoveable
          //   });

          //   // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
          //   this.infowindow.open(this.map, this.marker);
          // }



            //  // [ 키워드 검색을 요청하는 함수 ]
            //  searchPlaces = () => {
            //     var keyword = document.getElementById('keyword').value;

            //     if (!keyword.replace(/^\s+|\s+$/g, '')) {
            //         alert('키워드를 입력해주세요!');
            //         return false;
            //     }

            //     // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
            //     this.ps.keywordSearch( keyword, this.placesSearchCB); 
            //   }
        


              // // [ 장소검색이 완료됐을 때 호출되는 콜백함수 ]
              //  placesSearchCB = (data, status, pagination) => {
              //     if (status === kakao.maps.services.Status.OK) {

              //         // 정상적으로 검색이 완료됐으면
              //         // 검색 목록과 마커를 표출합니다
              //         this.displayPlaces(data);

              //         // 페이지 번호를 표출합니다
              //         this.displayPagination(pagination);

              //     } else if (status === kakao.maps.services.Status.ZERO_RESULT) {

              //         alert('검색 결과가 존재하지 않습니다.');
              //         return;

              //     } else if (status === kakao.maps.services.Status.ERROR) {

              //         alert('검색 결과 중 오류가 발생했습니다.');
              //         return;

              //     }
              // }


   
      // // 지도에 클릭 이벤트를 등록. 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출.
      // clickMarker = () =>   window.kakao.maps.event.addListener(this.map, 'click', function(mouseEvent) {                  
        
      //   return mouseEvent.latLng;   // 클릭한 (위도, 경도) 정보
      // });
     
          


    render() {

      const style={
        width: "700px",
        height: "600px",
      };

        return (           
              <div className="Map" id="map" style={style}></div>
        );
    }
}

export default Map;



/* 
[기본 코드 이용하기]
    //기존에 생성된 마커제거 => 작동 X
    if(this.marker!=null){
      this.marker.setMap(null);  
      this.infowindow.close();    
    }

    [마커]
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


    [인포윈도우  ]
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



    
    // [ 인포윈도우 ]
    createinfoWindow = () => {
        // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능.
        const iwContent = infoTemplate.infoWindowTemplate()
              ,iwRemoveable = true 

        // 인포윈도우를 생성합니다
        this.infowindow = new kakao.maps.InfoWindow({
            content : iwContent,
            removable : iwRemoveable
        });

        // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
        this.infowindow.open(this.map, this.marker);
      }
 */





 /* 
 ----------------------------

     // [ 키워드 검색을 요청하는 함수 ]
                      const searchPlaces = () => {
                        var keyword = document.getElementById('keyword').value;

                        if (!keyword.replace(/^\s+|\s+$/g, '')) {
                            alert('키워드를 입력해주세요!');
                            return false;
                        }

                        // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
                        this.ps.keywordSearch( keyword, this.placesSearchCB); 
                      }


                      // [ 장소검색이 완료됐을 때 호출되는 콜백함수 ]
                      const placesSearchCB = (data, status, pagination) => {
                        if (status === kakao.maps.services.Status.OK) {

                            // 정상적으로 검색이 완료됐으면
                            // 검색 목록과 마커를 표출합니다
                            this.displayPlaces(data);

                            // 페이지 번호를 표출합니다
                            this.displayPagination(pagination);

                        } else if (status === kakao.maps.services.Status.ZERO_RESULT) {

                            alert('검색 결과가 존재하지 않습니다.');
                            return;

                        } else if (status === kakao.maps.services.Status.ERROR) {

                            alert('검색 결과 중 오류가 발생했습니다.');
                            return;

                        }
                      }



                      // 검색 결과 목록과 마커를 표출하는 함수입니다
                      function displayPlaces(places) {

                        var listEl = document.getElementById('placesList'), 
                        menuEl = document.getElementById('menu_wrap'),
                        fragment = document.createDocumentFragment(), 
                        bounds = new kakao.maps.LatLngBounds(), 
                        listStr = '';
                        
                        // 검색 결과 목록에 추가된 항목들을 제거합니다
                        removeAllChildNods(listEl);

                        // 지도에 표시되고 있는 마커를 제거합니다
                        removeMarker();
                        
                        for ( var i=0; i<places.length; i++ ) {

                            // 마커를 생성하고 지도에 표시합니다
                            var placePosition = new kakao.maps.LatLng(places[i].y, places[i].x),
                                marker = addMarker(placePosition, i), 
                                itemEl = getListItem(i, places[i]); // 검색 결과 항목 Element를 생성합니다

                            // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
                            // LatLngBounds 객체에 좌표를 추가합니다
                            bounds.extend(placePosition);

                            // 마커와 검색결과 항목에 mouseover 했을때
                            // 해당 장소에 인포윈도우에 장소명을 표시합니다
                            // mouseout 했을 때는 인포윈도우를 닫습니다
                            (function(marker, title) {
                                kakao.maps.event.addListener(marker, 'mouseover', function() {
                                    displayInfowindow(marker, title);
                                });

                                kakao.maps.event.addListener(marker, 'mouseout', function() {
                                    this.infowindow.close();
                                });

                                itemEl.onmouseover =  function () {
                                    displayInfowindow(marker, title);
                                };

                                itemEl.onmouseout =  function () {
                                    this.infowindow.close();
                                };
                            })(marker, places[i].place_name);

                            fragment.appendChild(itemEl);
                        }

                        // 검색결과 항목들을 검색결과 목록 Elemnet에 추가합니다
                        listEl.appendChild(fragment);
                        menuEl.scrollTop = 0;

                        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
                        this.map.setBounds(bounds);
                      }

                      // 검색결과 항목을 Element로 반환하는 함수입니다
                      function getListItem(index, places) {

                        var el = document.createElement('li'),
                        itemStr = '<span class="markerbg marker_' + (index+1) + '"></span>' +
                                    '<div class="info">' +
                                    '   <h5>' + places.place_name + '</h5>';

                        if (places.road_address_name) {
                            itemStr += '    <span>' + places.road_address_name + '</span>' +
                                        '   <span class="jibun gray">' +  places.address_name  + '</span>';
                        } else {
                            itemStr += '    <span>' +  places.address_name  + '</span>'; 
                        }
                                    
                          itemStr += '  <span class="tel">' + places.phone  + '</span>' +
                                    '</div>';           

                        el.innerHTML = itemStr;
                        el.className = 'item';

                        return el;
                      }

                      // 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
                      function addMarker(position, idx, title) {
                        var imageSrc = 'http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png', // 마커 이미지 url, 스프라이트 이미지를 씁니다
                            imageSize = new kakao.maps.Size(36, 37),  // 마커 이미지의 크기
                            imgOptions =  {
                                spriteSize : new kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
                                spriteOrigin : new kakao.maps.Point(0, (idx*46)+10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
                                offset: new kakao.maps.Point(13, 37) // 마커 좌표에 일치시킬 이미지 내에서의 좌표
                            },
                            markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions),
                                marker = new kakao.maps.Marker({
                                position: position, // 마커의 위치
                                image: markerImage 
                            });

                        marker.setMap(this.map); // 지도 위에 마커를 표출합니다
                        this.markers.push(this.marker);  // 배열에 생성된 마커를 추가합니다

                        return marker;
                      }

                      // 지도 위에 표시되고 있는 마커를 모두 제거합니다
                      function removeMarker() {
                        for ( var i = 0; i < this.markers.length; i++ ) {
                            this.markers[i].setMap(null);
                        }   
                        this.markers = [];
                      }

                      // 검색결과 목록 하단에 페이지번호를 표시는 함수입니다
                      function displayPagination(pagination) {
                        var paginationEl = document.getElementById('pagination'),
                            fragment = document.createDocumentFragment(),
                            i; 

                        // 기존에 추가된 페이지번호를 삭제합니다
                        while (paginationEl.hasChildNodes()) {
                            paginationEl.removeChild (paginationEl.lastChild);
                        }

                        for (i=1; i<=pagination.last; i++) {
                            var el = document.createElement('a');
                            el.href = "#";
                            el.innerHTML = i;

                            if (i===pagination.current) {
                                el.className = 'on';
                            } else {
                                el.onclick = (function(i) {
                                    return function() {
                                        pagination.gotoPage(i);
                                    }
                                })(i);
                            }

                            fragment.appendChild(el);
                        }
                        paginationEl.appendChild(fragment);
                      }

                      // 검색결과 목록 또는 마커를 클릭했을 때 호출되는 함수입니다
                      // 인포윈도우에 장소명을 표시합니다
                      function displayInfowindow(marker, title) {
                        var content = '<div style="padding:5px;z-index:1;">' + title + '</div>';

                        this.infowindow.setContent(content);
                        this.infowindow.open(this.map, marker);
                      }

                      // 검색결과 목록의 자식 Element를 제거하는 함수입니다
                      function removeAllChildNods(el) {   
                        while (el.hasChildNodes()) {
                            el.removeChild (el.lastChild);
                        }
                      }


 
 
 ----------------------------
 */

