'use client'
import React, {useEffect, useState, useRef} from 'react';
import * as echarts from 'echarts';


const ProgressSlepp = ()=> {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);
    const options = {
      // Configuración de ECharts
      xAxis: {
        type: 'category',
        data: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [8, 7, 6, 8, 9, 7, 8],
        type: 'bar',
        color: [
          '#dd6b66',
          '#759aa0',
          '#e69d87',
          '#8dc1a9',
          '#ea7e53',
          '#eedd78',
          '#73a373',
          '#73b9bc',
          '#7289ab',
          '#91ca8c',
          '#f49f42'
        ]
      }]
    };
    chart.setOption(options);

    return () => {
      chart.dispose();
    };
  }, []);

  return  <>
  <div className="title text-center">
    <h1 className='mt-14'>Sleep</h1>
  </div>
<div className="w-full md:w-96 lg:w-96 xl:w-5/6 mx-auto -mt-8">
    
  <div ref={chartRef} style={{ width: '100%', height: '200px', backgroundColor: '#525152' }} />
</div>
</>
};


export default ProgressSlepp;
