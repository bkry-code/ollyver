<?php if($pages->find('home')->recommended()->isNotEmpty()): ?>
<section class="recommended">
	<h2>Recommended Activities</h2>
	<?= $pages->find('home')->recommended()->kirbytext() ?>
</section>
<?php endif ?>