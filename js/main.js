// 二级菜单
$('.fir_item').hover(function() {
	var athis = $(this);
	delay = setTimeout(function(){
		athis.children('.sec_menu').slideDown('300');
	},300)
}, function() {
	clearTimeout(delay);
	var athis = $(this);
	athis.children('.sec_menu').slideUp('300');
});




function gotop(){
	$("html,body").animate({scrollTop:0}, 500);
}
