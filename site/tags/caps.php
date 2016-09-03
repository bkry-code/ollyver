<?php

kirbytext::$tags['caps'] = array(
	'html' => function($tag) {
		//return '<a href="' . $url . '/' . $article . '">' . $text . '</a>';
		return '<span class="smallcaps">' . $tag->attr('caps') . '</span>';
	}
);