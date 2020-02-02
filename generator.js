#!/usr/bin/env node

const spawn = require('child_process').spawn
const result = spawn('node', ['index'], { shell: true, stdio: 'inherit' })
result.stdout.on('data', data => data)
