#!/usr/bin/env node
'use strict';

const { install } = require('../lib/installer');
const { showHelp } = require('../lib/help');
const { TOOLS } = require('../lib/tools');
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);

const force      = args.includes('-f') || args.includes('--force');
const showHelp_  = args.includes('-h') || args.includes('--help');
const showVer    = args.includes('-v') || args.includes('--version');
const listTools  = args.includes('--list-tools');

// Parse --tool flags
const toolFlags = [];
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--tool' && args[i + 1]) {
    toolFlags.push(args[i + 1]);
    i++;
  }
}

if (showVer) {
  const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json'), 'utf8'));
  console.log(pkg.version);
  process.exit(0);
}

if (showHelp_) {
  showHelp();
  process.exit(0);
}

if (listTools) {
  console.log('\nSupported AI tools / 支援的 AI 工具:\n');
  TOOLS.forEach(t => console.log(`  ${'--tool ' + t.flag}`.padEnd(26) + t.name));
  console.log('');
  process.exit(0);
}

install({ force, toolFilter: toolFlags.length ? toolFlags : null, cwd: process.cwd() });
