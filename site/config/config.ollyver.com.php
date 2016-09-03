<?php

// License
c::set('license', 'xx-xxxxxxxx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');

// Reroute direct access to resumé sections back to main resumé page
c::set('routes', array(
	array(
		'pattern' => 'resume/(:any)',
		'action'  => function() {
			go('home');
		}
	),
	array(
		'pattern' => 'about/(:any)',
		'action'  => function() {
			go('home');
		}
	),
	array(
		'pattern' => 'newsletter',
		'action'  => function() {
			go('home');
		}
	)
));

// Enable smartypants for smart quotes etc.
c::set('smartypants', true);

// Enable markdown extra
c::set('markdown.extra', true);

// Panel drafts overview widget
c::set('plugin.drafts.widget.exclude', array(
	'error',
	'home',
	'notes',
	'photos',
	'projects',
	'about',
	'newsletter',
	'confirm',
	'thankyou',
	'escape',
));

c::set('plugin.drafts.widget.nodrafts', 'No drafts... Start writing today!');

// Google Analytics
c::set('plugin.ga', true);
c::set('plugin.ga.id', 'UA-83418702-1');
c::set('plugin.ga.debug', false);

// Custom panel CSS (for modifying markdown field tag appearance)
c::set('panel.stylesheet', 'assets/css/panel.css');

// SCSS plugin setting for dev environment only
// c::set('scssNestedCheck', true);