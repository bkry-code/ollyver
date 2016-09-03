</main>

<footer>
	<div class="inner">
		<?php if(!$site->email()->empty()): ?>
			<p><span class="smallcaps">Email</span> <a href="mailto: <?= $site->email() ?>"><?= $site->email() ?></a></p>
		<?php endif ?>
		<?php if(!$site->email()->empty() && !$site->phone()->empty()): ?>
			<p class="dot">&#183;</p>
		<?php endif ?>
		<?php if(!$site->phone()->empty()): ?>
			<p><span class="smallcaps">Phone</span> <?= $site->phone() ?></p>
		<?php endif ?>

	</div>
</footer>

<?= js('assets/js/lib.min.js') ?>
<?= js('assets/js/main.min.js') ?>
<?= ga() ?>

</body>
</html>