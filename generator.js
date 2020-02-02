#!/usr/bin/env node

require('./plopfile.js')
const { spawn } = require('child_process')
spawn('plop', [], { shell: true, stdio: 'inherit' })
