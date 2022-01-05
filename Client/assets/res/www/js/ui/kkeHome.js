/**
 * @file kkeHome.js
 * <p>SCREEN_NAME: 홈</p>
 */

/**
* 화면 로딩 완료시
* 화면 로딩완료시 한번 호출된다.
*/
jQuery(document).ready(function($) {
		jQuery(function(j$) {
		// header fixed
		var myHeader = j$('.header_bar, .header_bar h1');
		myHeader.data( 'position', myHeader.position() );
		j$(window).scroll(function(){
			var hPos = myHeader.data('position'), scroll = getScroll();
			/* null check */
			if (hPos) {
				if ( hPos.top < scroll.top ){
					myHeader.addClass('fixed');
				}
				else {
					myHeader.removeClass('fixed');
				}
			}
		});

		function getScroll () {
			var b = document.body;
			var e = document.documentElement;
			return {
				left: parseFloat( window.pageXOffset || b.scrollLeft || e.scrollLeft ),
				top: parseFloat( window.pageYOffset || b.scrollTop || e.scrollTop )
			};
		}

		// header fixed
		});

		function kkk(){
			 $('.gnb > a').click(function() {
				 $('.gnb > p').toggleClass('aaa');
			 });

		} kkk();

};

$(function() {
	$('.btn_message').click(function() {
		$('.popupMessage').hide();
	});
});

$(function() {
	$('.tabs').tabs();
});

$(function() {
	$('.gnb a.ico_name_tag').click(function() {
		$('.name_tag_open').toggle("slow");
		$('.message_open').hide();
		$('.notice_open').hide();
	});
});

$(function(){
	$('.gnb a.ico_message').click(function() {
   	$('.message_open').toggle("slow");
 		$('.name_tag_open').hide();
 		$('.notice_open').hide();
  });
});

$(function() {
  $('.gnb a.ico_notice').click(function() {
  	$('.notice_open').toggle("slow");
 		$('.name_tag_open').hide();
 		$('.message_open').hide();
  });
});

$(function() {
	$('.notice > a').click(function() {
		$('.kaywon').toggle();
 		$('.notice > a').hide();
  });
});

$(function() {
//	$('.date2').datepicker();
	$('.posco_open, .tomntoms_open, .keb_bank_open, .kb_bank_open, .goodchoice_open, .hanil_open, .airwindow_open').dialog({
		autoOpen:false,
		modal:true,
		minWidth:1100,
		show: {
		effect: "fade",
		duration: 500
		},
		hide: {
		effect: "fade",
		duration: 500
		}
	});
	$('.open01').click(function(){
		$('.airwindow_open').dialog('open');
	});
	$('.open02').click(function(){
		$('.posco_open').dialog('open');
	});
	$('.open03').click(function(){
		$('.tomntoms_open').dialog('open');
	});
	$('.open04').click(function(){
		$('.keb_bank_open').dialog('open');
	});
	$('.open05').click(function(){
		$('.kb_bank_open').dialog('open');
	});
	$('.open06').click(function(){
		$('.goodchoice_open').dialog('open');
	});
	$('.open07').click(function(){
		$('.hanil_open').dialog('open');
	});
});

$(function() {
	$('.alert > div a').click(function() {
		$('.alert').hide();
	});
});

$(function(){
  $('.news').accordion({
    heightStyle: "content"
  });
});
