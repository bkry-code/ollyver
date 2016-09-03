<?php if(!defined('KIRBY')) exit ?>

title: Home
pages: false
fields:
  title:
    label: Title
    type:  text
  text:
    label: Text
    type:  markdown
  recommended:
    label: Recommended Activities
    type: markdown
    placeholder: '- (link: /notes text: Browse writing and notes)'
    help: A list of suggested links that appear after main content sections on other pages too.