
$(document).ready(function(e) {
	//code trong khu vuc nay chi chay khi tai lieu da duoc tai xong
	$('#image').click(function(e) {
        thaydoi();
    });
	$('#mytabs').tabs({
		collapsible:true,
		
	});
	//spinner
	$('#myspinner').spinner({
		min:0,
		max:100,
		step:2,
		spin:function () {
			var v1=$(this).spinner("value");
			$('#spinnervalue').html(v1);
		}

	});

	//select menu
	//dinh nghia lai ham render selecmenu
	$.widget("custom.selectmenuwithavatar", $.ui.selectmenu,
		{
			_renderItem: function(ul, item){
				//moi item la mot the lis
				var li = $('<li>'), 
				//moi the li chua the div la mot noi dung
				wrapper=$("div", {text:item.label});
				if(item.disable){
					li.addClass("ui-state-disable");
				}
				$("<span>", {
					style:item.element.attr("datastyle"),
					"class": item.element.attr("dataclass")+"ui-icon"
				}).appendTo(wrapper);
			}
		}
	);
	//checkbox radio
	$('input.mycheckboxradioclass').checkboxradio({
		icon : false
	});

	//graggable
	$('#mydraggable').draggable({
		//containment: "parent"
		//scroll: true,
		//revert: true,
		//helper:"clone"
		drag: function(){
			$(this).css("background-color", "black");	
		},
		stop:function(){
				$(this).css("background-color", "green");
			}
	});
	//droppable
	$('#mydroppable').droppable();

	//resizeable
	$('#resizable_1').resizable({

	});
	$('#resizable_2').resizable({
		alsoResize:'#resizable_1',
		//aspectRatio:4/3
		animate : true
	});
});

var status = 1;

function thaydoi(){
	$('#image').stop(true, true);
	if(status==1){
		status=2;
		thunho();	
	}
	else{
		status = 1;
		phongto();	
	}
}

function thunho(){
	$('#image').animate(
		{
			width:'100px',
			opacity:0.2
		},
		3000
		
	);
}

function phongto(){
	$('#image').animate(
		{
			width:'500px',
			opacity:1
		},
		5000
		
	);	
}

