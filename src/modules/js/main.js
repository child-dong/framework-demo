var page = {
	init: function(num) {
		require(['jquery','swiper'],function($,swiper){
			$(document).ready(function(){
					var mySwiper = new Swiper('.swiper-container',{
						hashnav:true,
						pagination : '.swiper-pagination',
					 	paginationClickable: true,
					  paginationBulletRender: function (swiper, index, className) {
			      return '<span class="' + className + '">' + '</span>';
  }
				})
			})
		})
	}
}

var queue = {
	init: function(num) {
		require(['jquery','echarts'],function($,echarts){
			$(document).ready(function(){
				var myChart = echarts.init(document.getElementById('ring'));
				option = {
				    tooltip: {
				        trigger: 'item',
				    },
				    legend: {
				        orient: 'vertical',
				        x: 'left',
				        data:[]
				    },
				    series: [
				        {
				            name:'访问来源',
				            type:'pie',
				            radius: ['50%', '70%'],
				            avoidLabelOverlap: false,
				            label: {
				                normal: {
				                    show: true,
				                    position: 'center',
				                    textStyle: {
			                        fontSize: '30',
			                        fontWeight: 'bold',
			                        color: "white",
				                    }
				                },
				            },
				            data:[
				                {value:100, name:'排队:38'},
				                {value:30, name:''}
				            ]
				        }
				    ]
				},
				myChart.setOption(option);
			})
		})
	}
}

exports.page = page;
exports.queue = queue;