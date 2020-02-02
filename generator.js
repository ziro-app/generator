#!/usr/bin/env node

const spawn = require('child_process').spawn
const result = spawn('plop', [''], { shell: true, stdio: 'inherit' })
result.stdout.on('data', data => data)
