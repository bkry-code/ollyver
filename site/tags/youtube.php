<?php

kirbytext::$tags['youtube'] = array(
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

		return '<figure class="video ' . $tag->attr('class', kirby()->option('kirbytext.video.class', 'video')) . '">' . '<iframe src="https://www.youtube.com/embed/' . $tag->attr('youtube') . '?rel=0&showinfo=0"  width="' . $tag->attr('width') . '" height="' . $tag->attr('height') . '" frameborder="0" allowfullscreen></iframe>' . $figcaption . '</figure>';

	}
);