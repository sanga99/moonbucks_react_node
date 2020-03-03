/*global kakao*/

import React, { Component } from 'react';


class Map extends Component {

    componentDidMount() {
        const script = document.createElement('script');
        script.async = true;
        script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=4df73cfcb7cfb8177e418e2c44092262&autoload=false";
        document.head.appendChild(script);

        script.onload = () => {
            kakao.maps.load(() => {
                let el = document.getElementById('map');
                let map = new kakao.maps.Map(el, {
                    center: new kakao.maps.Coords(523951.25, 1085073.75)
                });
            });
        };
    }

    render() {
      const style={
        width: "500px",
        height: "400px"
      };
        return (
            <div className="Map" id="map" style={style}></div>
        );
    }
}

export default Map;
