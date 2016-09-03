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
  formaction:
    label: MailChimp Form Action
    type: text
    help: Don't mess around with this line.
  antirobot:
    label: MailChimp Anti Robot Code
    type: text
    help: Don't mess around with this line.
  togglenewsletter:
    label: Display Newsletter on Home Page
    type: toggle
    text: yes/no