<?php

kirbytext::$tags['vimeo'] = array(
	'attr' => array(
		'width',
		'height',
		'class',
		'caption'
	),
	'html' => function($tag) {

		$caption = $tag->attr('caption');

		if(!empty($caption)) {
			$figcaption = '<figcaption>' . escape::html($caption) . '</figcaption>';
		} else {
			$figcaption = null;
		}

		return '<figure class="video ' . $tag->attr('class', kirby()->option('kirbytext.video.class', 'video')) . '">' . '<iframe src="https://player.vimeo.com/video/' . $tag->attr('vimeo') . '?title=0&byline=0&portrait=0"  width="' . $tag->attr('width') . '" height="' . $tag->attr('height') . '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' . $figcaption . '</figure>';

	}
);