$(function() {
          
	//聚焦失焦特效
	$("#inputSearch").focus(function() {
		$(this).addClass("focus")
		var val = $(this).val();
		if(val == "输入商品名称") {
			$(this).val("");
		}
	}).blur(function() {
		$(this).removeClass("focus")
		if ($(this).val() == "") {
			$(this).val("输入商品名称");
		}
	}).keydown(function(e) {
		//按Enter提交
		if(e.keyCode == 13 && $(this).val()!="") {
			alert("提交内容：" +$(this).val());
		}
	})
	
	
	//换肤
	$("#skin li").click(function(){
		$(this).addClass("selected").siblings().removeClass("selected");
		var index = $(this).index();
		$("#cssfile").prop("href","styles/skin/skin_"+index+".css");
	})
	
	//二级导航
	$("#caption li").mouseover(function(){
		$(this).children("div").show();
	}).mouseout(function(){
		$(this).children("div").hide();
	})
	
	//热卖产品展示
	var del = $("<del class='hot'></del>")
	$(".promoted").append(del);
	
	
	//轮播图
	//显示不同的幻灯片
	function showImg (index){
		var $rollobj = $("#jnImageroll");
		//获取文字区域列表
		var $rolllist = $rollobj.find("div a");
		//当前展示文字区域超链接
		var newhref = $rolllist.eq(index).attr("href");
		//替换新的超链接，找到要展示的图片使用淡入显示，其他同辈元素使用淡出隐藏
		$("#JS_imgWrap").attr("href",newhref).find("img").eq(index).stop(true,true).fadeIn().siblings().fadeOut();
		//移除文字区域的背景类名chos，当前展示文字区域添加背景颜色类名
		$rolllist.removeClass("chos").css("opacity","0.7").eq(index).addClass("chos").css("opacity","1");
	}
	
	var $imgrolls = $("#jnImageroll div a");//文字区域列表
	$imgrolls.css("opacity","0.7");
	var len = $imgrolls.length;//轮播图的总数
	var index = 0;//当前选中的轮播图下标
	$imgrolls.mousemove(function(){
		index = $imgrolls.index(this);//获取当前的下标
		showImg(index);//图片轮播业务
	}).eq(0).mouseover();//默认初始化执行第一个标签的鼠标悬停事件
	
	//滑入 停止动画，滑出开始动画
	var adTimer = null;//定时器对象
	$("#jnImageroll").hover(function(){
		if (adTimer) {
			clearInterval(adTimer);//清除定时器，暂停动画
		}
	},function(){
		//设置1秒钟定时器，执行轮播图效果
		adTimer = setInterval(function(){
			showImg(index);
			index++;
			if (index == len) {
				index = 0;
			}
		},1000);
	}).trigger("mouseleave");//默认页面初始化就执行鼠标离开事件，创建定时器
	
	
	
	
	//切换tab
//	$("#jnBrandTab li").eq(0).addClass("chos").siblings().removeClass("chos");
	$("#jnBrandTab li").click(function(){
		var index = $(this).index();
		$(this).addClass("chos").siblings().removeClass("chos");
		$("#jnBrandList").stop().animate({"left":(-780*index)+"px"},500);
	}).eq(0).trigger("click");//模拟点击
	
	
})