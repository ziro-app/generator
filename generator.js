#!/usr/bin/env node

const spawn = require('child_process').spawn
const result = spawn('node', ["./index.js"])
result.stdout.on('data', data => console.log(data))
