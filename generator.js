#!/usr/bin/env node

const spawn = require('child_process').spawn
const result = spawn('node', ['index'], { shell: true })
result.stdout.on('data', data => data)
