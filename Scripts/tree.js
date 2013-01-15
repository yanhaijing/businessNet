// JavaScript Document
//tree的js部分

function treeInit(){//初始化函数为按钮添加onclick事件
	var ul=document.getElementById("productListPanel");
	var lis=ul.getElementsByClassName("listHead");
	for(i=0;i<lis.length;i++){
		lis.item(i).getElementsByTagName("img").item(0).onclick=function(e){treeShow(e);};
	}
}
function treeShow(e){
	var e=e||window.event;
	if(e.target){
		e=e.target;
	}
	if(e.srcElement){
		e=e.srcElement
	}
	var listHead=e.parentNode;
	if(listHead.getElementsByTagName("ul").item(0).style.display=='block'){//当前节点展开在此单击关闭
		//document.write(e.parentNode.nodeName);
		listHead.getElementsByTagName("ul").item(0).style.display='none';
		e.src='images/tree/dotOm.gif';
	}else{//如果当前节点收起，则将所有节点收起，并将当前节点 展开
		var lis=document.getElementById("productListPanel").getElementsByClassName("listHead");
		for(i=0;i<lis.length;i++){//将全部收起
			if(lis.item(i).getElementsByTagName("ul").item(0).style.display=='block'){
				//document.write(lis.item(i).lastChild.nodeName);
				lis.item(i).getElementsByTagName("ul").item(0).style.display='none';
				lis.item(i).getElementsByTagName("img").item(0).src='images/tree/dotOm.gif';
			}
		}
		listHead.getElementsByTagName("ul").item(0).style.display='block';
		e.src='images/tree/dotCm.gif';
	}
}
	