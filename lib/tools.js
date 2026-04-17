'use strict';

const TOOLS = [
  { flag: 'claude-code', name: 'Claude Code',  dirs: ['.claude/skills'] },
  { flag: 'cursor',      name: 'Cursor',        dirs: ['.cursor/skills', '.agents/skills'] },
  { flag: 'windsurf',    name: 'Windsurf',      dirs: ['.windsurf/skills', '.agents/skills'] },
  { flag: 'continue',    name: 'Continue',      dirs: ['.continue/skills'] },
  { flag: 'cline',       name: 'Cline',         dirs: ['.cline/skills'] },
  { flag: 'aider',       name: 'Aider',         dirs: ['.aider/skills'] },
];

module.exports = { TOOLS };
