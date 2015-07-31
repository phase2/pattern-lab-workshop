#!/usr/bin/env node

const workshopper = require('workshopper'),
      path        = require('path')

function fpath (f) {
    return path.join(__dirname, f)
}

workshopper({
    name        : 'pattern-lab-workshop',
    title       : 'Pattern Lab Workshop',
    subtitle    : 'Learn how Pattern Lab works',
    appDir      : __dirname,
    menuItems   : [],
    exerciseDir : fpath('./exercises/')
})
