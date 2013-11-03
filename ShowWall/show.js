
$(document).ready(function() {
	loadFromJson("data.json");
	init();
});


function init(){
	//vendor script
	$('#header')
	.css({ 'top':-50 })
	.delay(1000)
	.animate({'top': 0}, 800);
	
	$('#footer')
	.css({ 'bottom':-15 })
	.delay(1000)
	.animate({'bottom': 0}, 800);
	
	
	$('#container').BlocksIt({
		numOfCol: 3,
		offsetX: 8,
		offsetY: 8
	});

	
}

function addNewCard(html,size=1){

	str="<div class='block' data-size='1'><h2>江南听雨展示墙</h2><h3>JNRain Show Wall</h3></div>";
	var card=document.createElement("div"); 
	$(card).attr({
    	"class" : "block",
    	"data-size" : size
  	});
  	$(card).html(html);
	$('#container').append(card);

}

function loadFromJson(JsonUrl){
	$.ajaxSettings.async = false;		//同步请求，否则将造成排版混乱
	$.getJSON(JsonUrl,function(data){	

		$.each(data, function(i, item) {
			titleHtml="<h3>"+item.title+"</h3>";
			html=titleHtml+item.content;
    	    addNewCard(html,item.size);     
        })
	});
	
}