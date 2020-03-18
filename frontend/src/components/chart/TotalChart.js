import React, { Component } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


const data = [
  {
    name: '1월', uv: 400
  },
  {
    name: '2월', uv: 300
  },
  {
    name: '3월', uv: 200
  },
  {
    name: '4월', uv: 270
  },
  {
    name: '5월', uv: 180
  },
  {
    name: '6월', uv: 290
  },
  {
    name: '7월', uv: 390
  },
  {
    name: '8월', uv: 390
  },
  {
    name: '9월', uv: 390
  },
  {
    name: '10월', uv: 340
  },
  {
    name: '11월', uv: 340
  },
  {
    name: '12월', uv: 340
  },
];

export default class TotalChart extends Component {

  render() {
    const tooltipStyle = {
      color: '#747474',
      fontSize: '15px' 
    };

    return (
        // 제목 : 총매출(월별) 현황   주석 : (만단위)  legend top여분 글씨체, 글씨크기
          <BarChart
            width={800}
            height={400}
            data={this.props.data}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="1 1" />
            <XAxis dataKey="month" 
                   tickLine={false}     // x축 표시로 튀어나오는 선 false
                   tickMargin={10}       // x축 선과 문자열 사이의 공간
                   fontSize={12}        // x축 문자열 크기
            />
            <YAxis 
                  type="number" 
                  domain={[0, 1000]}
                  tickLine={false}
                  fontSize={10}
                  ticks={[0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]}
            />
            <Tooltip 
                  itemStyle={tooltipStyle}
            />
            <Legend 
                  iconSize={10}
                  iconType='rect'
            />
            <Bar 
                  dataKey="price" 
                  name={"총매출(만단위)"}
                  fill="#F2CB61"
                  barSize={15}
              />
          </BarChart>
        );
      }
    }



/*  실시간 test(jsfiddle.net)
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';
*/