// Fontfaceobserver init
if (typeof Object.keys === 'function') {
	// Implementation approach taken from https://helloanselm.com/2015/using-webfonts-in-2015/
	var fontObservers = [];
	var fontFamilies = {
		'Concourse C3': [
			{
				weight: 'normal',
				style: 'normal'
			}
		],
		'Concourse C4': [
			{
				weight: 'normal',
				style: 'normal'
			}
		],
		'Concourse C6': [
			{
				weight: 'normal',
				style: 'normal'
			}
		],
		'Concourse T3': [
			{
				weight: 'normal',
				style: 'normal'
			}
		],
		'Concourse T3': [
			{
				weight: 'normal',
				style: 'italic'
			}
		],
		'Concourse T3': [
			{
				weight: 'bold',
				style: 'normal'
			}
		],
		'Concourse T3 Index': [
			{
				weight: 'normal',
				style: 'normal'
			}
		],
		'Concourse T6': [
			{
				weight: 'normal',
				style: 'normal'
			}
		],
		'Advocate C53': [
			{
				weight: 'normal',
				style: 'normal'
			}
		],
	}
	Object.keys(fontFamilies).forEach(function(family) {
		fontObservers.push(fontFamilies[family].map(function(config) {
				return new FontFaceObserver(family, config).check(null, 25000)
		}));
	});
	Promise.all(fontObservers).then(function() {
		document.documentElement.classList.add('fonts-loaded');
		document.cookie="fonts-loaded=true";
	});
} else if (typeof document.documentElement !== 'undefined' && typeof document.documentElement.classList !== 'undefined' && typeof document.documentElement.classList.add === 'function') {
	document.documentElement.classList.add('fonts-loaded');
	document.cookie="fonts-loaded=true";
} else {
	document.documentElement.className += " fonts-loaded";
	document.cookie="fonts-loaded=true";
}

$(document).ready(function() {
	// Dropdown global navigation
	$('.menu').click(function() {
		$('.menu-list').toggleClass('menu-list-active');
		$('.menu').toggleClass('menu-active');
	});
	
	// Fitvids
	$("figure").fitVids();

	// Unveil images
	$(".page-article img").unveil(200, function() {
		$(this).load(function() {
			this.style.opacity = 1;
		});
	});
});

/*! Tablesaw - v2.0.3 - 2016-05-02
* https://github.com/filamentgroup/tablesaw
* Copyright (c) 2016 Filament Group; Licensed MIT */
;(function( $ ) {

	// DOM-ready auto-init of plugins.
	// Many plugins bind to an "enhance" event to init themselves on dom ready, or when new markup is inserted into the DOM
	$( function(){
		$( document ).trigger( "enhance.tablesaw" );
	});

})( jQuery );