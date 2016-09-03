<section class="newsletter">
	<?= $pages->find('newsletter')->text()->kirbytext() ?>
	<form action="<?= $pages->find('newsletter')->formaction()->html() ?>" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate="">
		<input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="Enter your email address and hit return" required="">
		<div style="position: absolute; left: -1000000px;" aria-hidden="true">
			<input type="text" name="<?= $pages->find('newsletter')->antirobot()->html() ?>" tabindex="-1" value="">
		</div>
		<input type="submit" value="‡" name="subscribe" id="mc-embedded-subscribe" class="button">
	</form>
</section>