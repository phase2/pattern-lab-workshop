#!/usr/bin/env node

const workshopper = require('workshopper-jlord'),
      path        = require('path')

function fpath (f) {
    return path.join(__dirname, f)
}

workshopper({
    name        : 'pattern-lab-workshop',
    title       : 'Pattern Lab Workshop',
    subtitle    : 'Learn how Pattern Lab works',
    appDir      : __dirname,
    menu: {
        fg: /^win/.test(process.platform) ? 'white' : 231,
        bg: /^win/.test(process.platform) ? 'blue'  : 33
    },
    exerciseDir : fpath('./exercises/')
}).init()