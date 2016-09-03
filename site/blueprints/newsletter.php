<?php if(!defined('KIRBY')) exit ?>

title: Newsletter
pages: false
files: false
fields:
  tabMain:
    label: Newsletter Info
    id: main
    type: tab
    icon: file-text
  title:
    label: Title
    type:  text
  text:
    label: Text
    type:  markdown
  togglenewsletter:
    label: Toggle
    type: checkbox
    text: Display Newsletter on Home Page
  tabSettings:
    label: MailChimp Settings
    id: settings
    type: tab
    icon: code
  info:
    label: Warning
    type: info
    text: These MailChimp setting are fragile, be careful when copying and pasting.
  formaction:
    label: MailChimp Form Action
    type: text
  antirobot:
    label: MailChimp Anti Robot Code
    type: text