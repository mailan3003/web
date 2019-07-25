
$(document).ready(function(e) {
	//code trong khu vuc nay chi chay khi tai lieu da duoc tai xong
	$('#image').click(function(e) {
        thaydoi();
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

$(document).ready(function(e) {
    alert('xin chao');
});