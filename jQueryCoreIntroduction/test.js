/**
 * 
 */
//jdst-jquery is just a plugin for auto-completion of jquery code
//which means it couldn't launch and do debug work!

var test = "test.js";
console.log(test.indexOf("js"));
function func() {
	function nestedfunc() {
		return true;
	}
	return true;
}

var tmp = undefined;
var tmp = null;

var num = 1;
console.log(num+5900);

$(document).ready(function () {
		$('p').css('font-weight','bold');
		$('.myclass').html('Different <em>content</em>');
		$('#myid').click(function () {
			alert('hello world!');
		});
});