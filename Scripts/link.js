// JavaScript Document
var id=null;
var indexTemp=0;
function linkListInit(){
		document.getElementById("linkPanelFirst").style.display='block';
	}
function linkListShow(index){//将当前的ul快显示
	var uls=document.getElementById("linkPanel").getElementsByTagName("ul");
	uls.item(indexTemp).style.display='none';
	uls.item(index).style.display='block';
	uls.item(index).style.paddingLeft=index*94+20+'px';
	indexTemp=index;
}
