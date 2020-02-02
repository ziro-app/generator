#!/usr/bin/env node

// use spawn to invoke plop terminal command
const { spawn } = require('child_process')
spawn('npm', ['i', '@ziro/generator'], { shell: true, stdio: 'inherit' })
spawn('plop', { shell: true, stdio: 'inherit' })
