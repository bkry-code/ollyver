<?php

/*

---------------------------------------
License Setup
---------------------------------------

Please add your license key, which you've received
via email after purchasing Kirby on http://getkirby.com/buy

It is not permitted to run a public website without a
valid license key. Please read the End User License Agreement
for more information: http://getkirby.com/license

*/

c::set('license', 'xx-xxxxxxxx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');

/*

---------------------------------------
Kirby Configuration
---------------------------------------

By default you don't have to configure anything to
make Kirby work. For more fine-grained configuration
of the system, please check out http://getkirby.com/docs/advanced/options

*/

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

// Widgets activation and panel ordering
// c::set('panel.widgets', array(
// 	'pages'    => true,
// 	'account'  => true,
// 	'history'  => true,
// 	'drafts'   => true,
// 	'site'     => true,
// ));

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