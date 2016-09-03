<?php

//overriding kirby image tag

// image tag
kirbytext::$tags['image'] = array(
	'attr' => array(
		'width',
		'height',
		'alt',
		'text',
		'title',
		'class',
		'imgclass',
		'linkclass',
		'caption',
		'link',
		'target',
		'popup',
		'rel'
	),
	'html' => function($tag) {

		$url     = $tag->attr('image');
		$alt     = $tag->attr('alt');
		$title   = $tag->attr('title');
		$link    = $tag->attr('link');
		if (($tag->attr('caption'))) {
				$caption = $tag->attr('caption'); //edit: override file caption via kirbytext
		} else {
				$caption = $tag->file($url)->caption(); //file caption
		}
		$file    = $tag->file($url);
		$ratio = $file->ratio();

		// use the file url if available and otherwise the given url
		$url = $file ? $file->url() : url($url);
		
		//edit: generate new resolution
		if ($ratio >= (1/1) ) {
				$urlOverride = thumb($file, array('width' => 1000, 'quality' => 75),false);
				$urlOverride2x = thumb($file, array('width' => 1400, 'quality' => 75),false);
		} else {
				//generate suqare frame for vertical images
				$urlOverride = thumb($file, array('width' => 1000, 'height' => 720, 'crop' => false, 'quality' => 75),false);
				$urlOverride2x = thumb($file, array('width' => 1400, 'height' => 1440 , 'crop' => false, 'quality' => 75),false);
		}
		

		// alt is just an alternative for text
		if($text = $tag->attr('text')) $alt = $text;

		// try to get the title from the image object and use it as alt text
		if($file) {

			if(empty($alt) and $file->alt() != '') {
				$alt = $file->alt();
			}

			if(empty($title) and $file->title() != '') {
				$title = $file->title();
			}

		}

		if(empty($alt)) $alt = pathinfo($url, PATHINFO_FILENAME);

		// link builder
		$_link = function($image) use($tag, $url, $link, $file) {

			if(empty($link)) return $image;

			// build the href for the link
			if($link == 'self') {
				$href = $url;
			} else if($file and $link == $file->filename()) {
				$href = $file->url();
			} else if($tag->file($link)) {
				$href = $tag->file($link)->url();
			} else {
				$href = $link;
			}

			return html::a(url($href), $image, array(
				'rel'    => $tag->attr('rel'),
				'class'  => $tag->attr('linkclass'),
				'title'  => $tag->attr('title'),
				'target' => $tag->target()
			));

		};

		// image builder
		$_image = function($class) use($tag, $url, $alt, $title) {
			return html::img($url, array(
				'width'  => $tag->attr('width'),
				'height' => $tag->attr('height'),
				'class'  => $class,
				'title'  => $title,
				'alt'    => $alt
			));
		};
		
		$_imageLazy = function($class) use($tag, $url, $alt, $title, $urlOverride, $urlOverride2x) {
			return html::img(url('assets/images/blank-1x1.gif'), array(
				'width'  => $tag->attr('width'),
				'height' => $tag->attr('height'),
				'class'  => $class.' lazy',
				'title'  => $title,
				'alt'    => $alt,
				'data-src' => $urlOverride,
				'data-src-retina' => $urlOverride2x
			));
		};

		if(kirby()->option('kirbytext.image.figure') or !empty($caption)) {
			$image  = $_link($_image($tag->attr('imgclass')));
			$imageLazy  = $_link($_imageLazy($tag->attr('imgclass')));
			$figure = new Brick('figure');
			$figure->addClass($tag->attr('class'));
			if ($ratio >= (1/1) ) {
				 $figure->addClass('figure-landscape');
				 } else {
					$figure->addClass('figure-portrait');
				 }
			$figure->append('<noscript>'.$image.'</noscript>');
			$figure->append('<div class="img-wrapper">'.$imageLazy.'</div>');
			if(!empty($caption)) {
				$figure->append('<figcaption>' . html($caption) . '</figcaption>');
			}
			return $figure;
		} else {
			$class = trim($tag->attr('class') . ' ' . $tag->attr('imgclass'));
			return $_link($_image($class));
		}

	}
);