$(document).ready(function(){$(".accordion_head").click(function(){$(".accordion_body").is(":visible")&&($(".accordion_body").slideUp(300),$(".plusminus").text("+")),$(this).next(".accordion_body").is(":visible")?($(this).next(".accordion_body").slideUp(300),$(this).children(".plusminus").text("+")):($(this).next(".accordion_body").slideDown(300),$(this).children(".plusminus").text("-"))})});