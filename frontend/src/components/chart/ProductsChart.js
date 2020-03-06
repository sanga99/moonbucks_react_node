import React, { Component } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


const data = [
  {
    name: '1월', drink: 400, food: 200, goods: 240,
  },
  {
    name: '2월', drink: 300, food: 138, goods: 220,
  },
  {
    name: '3월', drink: 200, food: 80, goods: 220,
  },
  {
    name: '4월', drink: 270, food: 398, goods: 200,
  },
  {
    name: '5월', drink: 180, food: 480, goods: 211,
  },
  {
    name: '6월', drink: 230, food: 380, goods: 250,
  },
  {
    name: '7월', drink: 340, food: 430, goods: 210,
  },
  {
    name: '8월', drink: 340, food: 430, goods: 210,
  },
  {
    name: '9월', drink: 340, food: 430, goods: 210,
  },
  {
    name: '10월', drink: 340, food: 430, goods: 200,
  },
  {
    name: '11월', drink: 340, food: 430, goods: 200,
  },
  {
    name: '12월', drink: 340, food: 430, goods: 210,
  },
];

export default class ProductsChart extends Component {
 
    /*
    LinkChart : chart전체
    CartesianGrid : 차트 바탕 안내선
                    storkeDasharray : 숫자가 작을 수록 점선이 촘촘해 진다
    Tooltip : 해당 지점에 마우스를 가져다 대면 나오는 popup 내용
    Legend : 아래 나오는 설명
    Line : 하나의 라인 
           activeDot={{ r: 5}} 속성값에 이것을 주면, 해당 라인에 마우스를 가져다 대었을 때 점크기가 숫자만큼 커진다 .
    */

  render() {
    const tooltipStyle = {
        fontSize:'15px',
        width: '100px',
        textAlign: 'center'
    }

    return (
        // 제목 : <Product> 월별 매출 현황   주석 : (만단위)  legend top여분 글씨체, 글씨크기
      <LineChart
                width={800}
                height={400}
                data={data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
      >
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis dataKey="name" 
               tickLine={false}     // x축 표시로 튀어나오는 선 false
               tickMargin={10}       // x축 선과 문자열 사이의 공간
               fontSize={12}        // x축 문자열 크기
        />
        <YAxis 
                // dataKey="y"
                type="number" 
                domain={[0, 500]}
                tickLine={false}
                fontSize={10}
                ticks={[0, 50, 100, 150 ,200, 250, 300, 350, 400, 450, 500]}
        />
        <Tooltip 
                itemStyle={tooltipStyle}
        />
        <Legend 
                iconSize={10}
                iconType='rect'
                // margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
                // content={LegendChart}
                
        />     
        <Line 
                type="monotone"
                dataKey="drink" 
                stroke="#756600" 
                dot={false} 
                // name={"drink"}
        />
        <Line type="monotone" dataKey="food" stroke="#6799FF" dot={false} />
        <Line type="monotone" dataKey="goods" stroke="#F361A6" dot={false}/>
      </LineChart>
    );
  }
}


/*  실시간 test(jsfiddle.net)
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/'; 
*/