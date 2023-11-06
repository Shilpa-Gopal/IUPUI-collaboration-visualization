        // based ready dom, initialize echarts instance 
		var myChart = echarts.init(document.getElementById('main'));

        // Specify configurations and data graphs 
        var option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
		data:['direct','marketing campaigns','search engine','email marketing','advertising alliance','video ads','Baidu','Google','will be','other']
    },
    series: [
        {
            name:'Access Sources',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'Through', selected:true},
                {value:679, name:'Marketing Advertising'},
                {value:1548, name:'search engine'}
            ]
        },
        {
            name:'Access Sources',
            type:'pie',
            radius: ['40%', '55%'],

            data:[
                {value:335, name:'Through'},
                {value:310, name:'E-mail marketing'},
                {value:234, name:'Advertising Alliance'},
                {value:135, name:'Video ads'},
                {value:1048, name:'Baidu'},
                {value:251, name:'Google'},
                {value:147, name:'Must'},
                {value:102, name:'Other'}
            ]
        }
    ]
};

		// Use just the specified configurations and data charts. 
		myChart.setOption(option);