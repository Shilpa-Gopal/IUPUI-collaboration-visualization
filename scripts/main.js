// let chartDom = document.getElementById('main');
// let myChart = echarts.init(chartDom);
const myChart = echarts.init(document.querySelector('#main'))
let option;
fetch("/assets/data.json")
  .then(response => response.json())
  .then(json => {
    option = {
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
      },
      series: [
        {
          type: 'tree',
          data: [json],
          top: '18%',
          bottom: '14%',
          layout: 'radial',
          symbol: 'emptyCircle',
          symbolSize: 7,
          initialTreeDepth: 3,
          animationDurationUpdate: 750,
          emphasis: {
            focus: 'descendant'
          }
        }
      ]
    };
  option && myChart.setOption(option);
    
  });


  



// option = {
//   angleAxis: {
//     max: 2,
//     startAngle: 30,
//     splitLine: {
//       show: false
//     }
//   },
//   radiusAxis: {
//     type: 'category',
//     data: ['v', 'w', 'x', 'y', 'z'],
//     z: 10
//   },
//   polar: {},
//   series: [
//     {
//       type: 'bar',
//       data: [4, 3, 2, 1, 0],
//       coordinateSystem: 'polar',
//       name: 'Without Round Cap',
//       itemStyle: {
//         borderColor: 'red',
//         opacity: 0.8,
//         borderWidth: 1
//       }
//     },
//     {
//       type: 'bar',
//       data: [4, 3, 2, 1, 0],
//       coordinateSystem: 'polar',
//       name: 'With Round Cap',
//       roundCap: true,
//       itemStyle: {
//         borderColor: 'green',
//         opacity: 0.8,
//         borderWidth: 1
//       }
//     }
//   ],
//   legend: {
//     show: true,
//     data: ['Without Round Cap', 'With Round Cap']
//   }
// };


