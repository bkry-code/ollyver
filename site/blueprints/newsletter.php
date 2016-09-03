<?php if(!defined('KIRBY')) exit ?>

title: Newsletter
pages: false
files: false
fields:
  title:
    label: Title
    type:  text
  text:
    label: Text
    type:  markdown
  togglenewsletter:
    label: Display Newsletter on Home Page
    type: toggle
    text: yes/no