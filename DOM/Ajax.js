function ajax(url,fnSucc,fnFaild){
	//1.创建ajax对象
	var oAjax = null;
	if(window.XMLHttpRequest){
	oAjax = new XMLHttpRequest();
	}else{
		oAjax = new ActiveXObject('Microsoft.XMLHTTP')
	};
	//2.连接服务器
	//open（方法，URL，是否异步）
	oAjax.open('GET',url,true);
	//3.发送请求
	oAjax.send();
	//接收返回:onreadystatechange类似于window.onload
	oAjax.onreadystatechange=function(){
		if(oAjax.readyState==4){
			if(oAjax.status==200){
				//alert('chenggong'+oAjax.responseText);
				fnSucc(oAjax.responseText);
			}else{   //失败时执行
				if(fnFaild){
					fnFaild();
				}
			};
		};
	};
}