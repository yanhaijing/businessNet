// JavaScript Document
//新闻tab面板js
var newHeads=null;
var newBodys=null;
function newInit(){
	newHeads=document.getElementById("newsHead").getElementsByTagName("li");
	newHeads.item(0).getElementsByTagName("a").item(0).style.color='#00f';
	newHeads.item(0).style.fontWeight='800';
	newBodys=document.getElementById("newBody").getElementsByTagName("ul");
	newBodys.item(0).style.display='block';
	//document.write(newBodys.item(0).nodeName);
}

function newShow(index){
	for(i=0;i<newHeads.length;i++){
		newHeads.item(i).getElementsByTagName("a").item(0).style.color='#666666';
		newHeads.item(i).style.fontWeight='400';
	}
	for(i=0;i<newBodys.length;i++){
		newBodys.item(i).style.display='none';
	}
	newBodys.item(index).style.display='block';
	newHeads.item(index).getElementsByTagName("a").item(0).style.color='#00f';
	newHeads.item(index).style.fontWeight='800';
}