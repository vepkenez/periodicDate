//requires jquery

$(document).ready(function(){
	var D = new Date();
	var datebox = $('<div style="width:100px;height:100px;background-color:'+D.color()+'"></div>')
	datebox.append('<div style="font-size:1.2em;font-weight:600">'+D.element().toString()+'</div>')
	$('body').append(datebox)

})
