// JavaScript Document
var scrollings=null;
var arrImage=null;
var timeId=null;
function initScrolling(){//初始化函数初始化滚动图片
	scrollings=document.getElementById("productShowPanel").getElementsByTagName("div");
	arrImage=document.getElementById("productShowPanel").getElementsByTagName("div");
	for(i=0;i<scrollings.length;i++){
		scrollings.item(i).style.left=i*160+'px';
		scrollings.item(i).style.top=10+'px';
		scrollings.item(i).onmouseover=imageStop;
		scrollings.item(i).onmouseout=imageScroll;
	}
	imageScroll();
}

function checkImage(){//判断对头是否超出边界超出边界放到队尾
	for(i=0;i<arrImage.length;i++){
		if(parseInt(arrImage.item(i).style.left)<-160){
			arrImage.item(i).style.left=(arrImage.length-1)*160+'px';
		}
	}
}

function imageScroll(){
	for(i=0;i<arrImage.length;i++){//循环移动将移除屏幕的图片放到队尾
		arrImage.item(i).style.left=parseInt(arrImage.item(i).style.left)-1+'px';
	}
	checkImage();
	timeId=window.setTimeout("imageScroll()",10);
}

function imageStop(){
	window.clearTimeout(timeId);
}