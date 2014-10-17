var limit = 2 ;

var duplicate = function(object) {
	
		if($(object).text() == '-') {
			$(object).parent().detach();
			limit++;
		} else {
			if(limit > 0) {
			    var clone = $(object).parent().clone();
			    $(".actor-filters").append(clone);
				$(object).text('-');
				limit--;
			}
		}
	
}

var showPic = function(data) {
	console.log(data);
	$(".result").html("");
	var i = 0 ;
	var screenWidth = $(window).width();
	var containerWidth = (screenWidth / data.length) - 100 ;
	for(;i<data.length;i++) {
		var img = $('<img>').attr('src',data[i].address) ;
		var title = $("<h3>").text(data[i].title);
		var container = $("<div>").append(title).append(img).addClass('result-container');
		if(data.length > 1) {
			$(container).css('width', containerWidth + 'px');
		}
		$('.result').append(container);
	}
}

$(document).ready(function(){
	$("#valid").click(function(){
		var method = $("#m").val();
		var period = $("#p").val();

		var addresses = [];
		$(".actors").each(function(){
			actor = $(this).find('select');
			addresses.push({address:"img/"+method+"/"+period+"/"+actor.val()+".png",
							title:actor.find("option:selected").text()});
		});
		showPic(addresses)
	});
});