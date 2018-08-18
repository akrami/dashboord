$('.dropdown').dropdown();
$('#burger a').click(function(){
	$('#sidebar').transition('fade right');
});
$('#sidebar-close').click(function(){
	$('#sidebar').transition('fade right');
});