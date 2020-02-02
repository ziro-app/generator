#!/usr/bin/env node

const { spawn } = require('child_process')
const spawnOptions = { shell: true, stdio: 'inherit' }
spawn('echo', [`"module.exports = require('@ziro/generator')"`, '>', 'plopfile.js'], spawnOptions)
spawn('plop', spawnOptions)
