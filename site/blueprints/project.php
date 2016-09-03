<?php if(!defined('KIRBY')) exit ?>

title: Project
pages: false
fields:
  title:
    label: Title
    type:  text
  category:
    label: Category
    type: tags
    help: After writing a new category name, hit enter to complete it.
  year:
    label: Year
    type: text
  thumbnail:
    label: Thumbnail
    type:  image
    help: 'Thumbnail image aspect ratio is 4x5. Recommended size: width: 400px, height: 500px.'
  text:
    label: Text
    type:  markdown