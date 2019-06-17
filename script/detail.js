$(function(){
	
	//服装颜色切换
	$("#jnDetails .jnProDetail .color_change li img").click(function(){
		var index = $(this).index();
		$("#jnDetails .jnProDetail .color_change strong").text($(this).prop("alt"));
		
	})
	
	
	
	//尺寸选择
	$("#jnDetails .jnProDetail .pro_size li").click(function(){
		//改变尺寸的值
		$("#jnDetails .jnProDetail .pro_size strong").text($(this).text());
		//改变样式
		$(this).addClass("cur").siblings().removeClass("cur");
	})
	
	//数量
	$("#num_sort").change(function(){
		//获取价格
		var num = $("#jnDetails .jnProDetail .tbDetailPrice strong").text();
		//改变总计值
		$("#jnDetails .jnProDetail .pro_price strong").text(num*$(this).val());
	})
	
	
	//产品属性切换
	$(".tab .tab_menu li").click(function(){
		$(this).addClass("chos").siblings().removeClass("chos");
		var index = $(this).index();
		$(".tab .tab_box div").eq(index).removeClass("hide").siblings().addClass("hide");
	}).eq(0).trigger("click");//模拟点击
})