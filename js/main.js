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


$('.share').find('li').hover(function() {
	$(this).find('span').css('color', $(this).find('span').attr('data-color'));
}, function() {
	$(this).find('span').css('color', '#949494');
});
