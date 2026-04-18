'use strict';

const fs   = require('fs');
const path = require('path');
const { TOOLS } = require('./tools');
const ALL  = require('./skills-data');

const C = {
  reset: '\x1b[0m', bold: '\x1b[1m', dim: '\x1b[2m',
  green: '\x1b[32m', blue: '\x1b[34m', cyan: '\x1b[36m',
  yellow: '\x1b[33m', red: '\x1b[31m', gray: '\x1b[90m',
};
const p = s => process.stdout.write(s + '\n');

const SKILLS = [
  { name: 'ux-method-advisor', label: 'UX Method Advisor · 決策層', slash: '/ux-method-advisor' },
  { name: 'discover',          label: 'Discover 探索 · 17 methods', slash: '/discover'           },
  { name: 'define',            label: 'Define 定義 · 21 methods',   slash: '/define'             },
  { name: 'ideate',            label: 'Ideate 發想 · 13 methods',   slash: '/ideate'             },
  { name: 'execute',           label: 'Execute 執行 · 7 methods',   slash: '/execute'            },
  { name: 'validate',          label: 'Validate 驗證 · 7 methods',  slash: '/validate'           },
];

function writeSkill(baseDir, skillName, force) {
  const files = ALL[skillName];
  if (!files) return 'unknown';
  const dest = path.join(baseDir, skillName);
  if (fs.existsSync(path.join(dest, 'SKILL.md')) && !force) return 'exists';
  for (const [rel, content] of Object.entries(files)) {
    const fp = path.join(dest, rel);
    fs.mkdirSync(path.dirname(fp), { recursive: true });
    fs.writeFileSync(fp, content, 'utf8');
  }
  return 'ok';
}

function install({ force, toolFilter, cwd }) {
  p('');
  p(`${C.bold}${C.cyan}UX Method Advisor${C.reset} ${C.gray}— Skill Installer${C.reset}`);
  p(`${C.gray}Workflow-first UX advisor · 6 Skills · 65 Methods · EN/繁中${C.reset}`);
  p('');

  // Resolve target tools
  let targets = TOOLS;
  if (toolFilter && toolFilter.length) {
    targets = TOOLS.filter(t => toolFilter.includes(t.flag));
    if (!targets.length) {
      p(`${C.red}✗${C.reset} Unknown tool: ${toolFilter.join(', ')}`);
      p(`Run ${C.bold}npx ux-method-advisor --list-tools${C.reset} to see options.`);
      process.exit(1);
    }
  }

  // Resolve install directories
  const dirs = [];
  for (const t of targets) {
    for (const d of t.dirs) {
      const full = path.join(cwd, d);
      if (!toolFilter && !fs.existsSync(path.dirname(full))) continue;
      dirs.push({ label: t.name, dir: d, full });
    }
  }
  if (!dirs.length) {
    dirs.push({ label: 'General', dir: '.agents/skills', full: path.join(cwd, '.agents/skills') });
  }

  let totalInstalled = 0;
  let totalSkipped = 0;

  for (const { label, dir, full } of dirs) {
    p(`${C.bold}Installing to ${C.cyan}${dir}/${C.reset} ${C.gray}(${label})${C.reset}`);
    for (const skill of SKILLS) {
      const result = writeSkill(full, skill.name, force);
      if (result === 'ok') {
        p(`  ${C.green}✓${C.reset} ${skill.slash.padEnd(22)} ${C.gray}${skill.label}${C.reset}`);
        totalInstalled++;
      } else if (result === 'exists') {
        p(`  ${C.yellow}–${C.reset} ${skill.slash.padEnd(22)} ${C.gray}already installed${C.reset}`);
        totalSkipped++;
      }
    }
    p('');
  }

  // Summary
  if (totalInstalled > 0) {
    p(`${C.bold}${C.green}✓ ${totalInstalled} skill(s) installed! / ${totalInstalled} 個 skill 安裝完成！${C.reset}`);
    p('');
    p(`${C.bold}Try it / 試試:${C.reset}`);
    p(`  ${C.gray}"我接了一個 revamp project，現在應該先做什麼方法？"${C.reset}`);
    p(`  ${C.gray}"/ux-method-advisor 我想了解用戶為什麼在 checkout 流失"${C.reset}`);
    p(`  ${C.gray}"/define 怎樣做用戶訪談？"${C.reset}`);
    p(`  ${C.gray}"/validate 如何測試我的設計？"${C.reset}`);
    p('');
    p(`${C.dim}Docs · 文件: https://ux-method-advisor.vercel.app${C.reset}`);
  } else if (totalSkipped > 0 && !totalInstalled) {
    p(`${C.yellow}All skills already installed. / 所有 skill 已安裝。${C.reset}`);
    p(`Use ${C.bold}npx ux-method-advisor -f${C.reset} to force update / 強制更新。`);
  }
  p('');
}

module.exports = { install };
