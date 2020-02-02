#!/usr/bin/env node

const { spawn } = require('child_process')
spawn('plop', [''], { shell: true, stdio: 'inherit' })
