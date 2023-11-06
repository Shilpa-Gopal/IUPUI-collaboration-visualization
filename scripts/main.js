// let chartDom = document.getElementById('main');
// let myChart = echarts.init(chartDom);
const myChart = echarts.init(document.querySelector('#main'))
let option;
fetch("/assets/test.json")
  .then(response => response.json())
  .then(json => {
    json.nodes.forEach(function (node) {
      node.label = {
        // show: node.symbolSize > 30
        show: true
      }
    });
    option = {
      title: {
        text: 'Les Miserables',
        subtext: 'Circular layout',
        top: 'bottom',
        left: 'right'
      },
      tooltip: {},
      legend: [
        {
          data: json.categories.map(function (a) {
            return a.name;
          }),
          emphasis: {
            show: true
          }
        }
      ],
      animationDurationUpdate: 1500,
      animationEasingUpdate: 'quinticInOut',
      series: [
        {
          name: 'Les Miserables',
          type: 'graph',
          layout: 'circular',
          circular: {
            rotateLabel: true
          },
          symbol: 'pin',
          symbolSize: 200,
          data: json.nodes,
          links: json.links,
          categories: json.categories,
          roam: true,
          label: {
            position: 'right',
            formatter: '{b}'
          },
          lineStyle: {
            color: 'source',
            curveness: 0.3
          },
          emphasis: {
            focus: 'adjacency',
            lineStyle: {
              width: 10
            }
          }
        }
      ]
    };
  option && myChart.setOption(option);
  myChart.on("click", (res) => {
    console.log(res);
  })
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


