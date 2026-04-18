'use strict';

function showHelp() {
  console.log(`
\x1b[1m\x1b[36mux-method-advisor\x1b[0m — UX Skills Installer

\x1b[1mUSAGE\x1b[0m
  npx ux-method-advisor [options]

\x1b[1mOPTIONS\x1b[0m
  (none)              Auto-detect AI tool and install all 6 skills
  --tool <name>       Install for a specific AI tool (repeatable)
  -f, --force         Force overwrite existing skills
  --list-tools        List all supported AI tools
  -v, --version       Show version number
  -h, --help          Show this help

\x1b[1mEXAMPLES\x1b[0m
  \x1b[90m# Auto-detect and install\x1b[0m
  npx ux-method-advisor

  \x1b[90m# Install for Claude Code\x1b[0m
  npx ux-method-advisor --tool claude-code

  \x1b[90m# Install for multiple tools\x1b[0m
  npx ux-method-advisor --tool cursor --tool windsurf

  \x1b[90m# Force update\x1b[0m
  npx ux-method-advisor -f

\x1b[1mINSTALLS 6 SKILLS\x1b[0m
  /ux-method-advisor   Decision layer · 方法決策層
  /discover            Discover 探索 · 17 methods
  /define              Define 定義   · 21 methods
  /ideate              Ideate 發想   · 13 methods
  /execute             Execute 執行  · 7 methods
  /validate            Validate 驗證 · 7 methods

  Docs: https://ux-method-advisor.vercel.app
`);
}

module.exports = { showHelp };
