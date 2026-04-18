# UX Method Advisor

> Install a workflow-first UX method advisor plus 5 stage skills into Claude Code, Cursor, Windsurf and more.  
> 一鍵安裝 1 個方法決策 skill + 5 個階段技能，到你的 AI 工具。

## Install / 安裝

```bash
npx ux-method-advisor
```

## Options / 選項

```bash
npx ux-method-advisor                        # Auto-detect AI tool
npx ux-method-advisor --tool claude-code     # Claude Code
npx ux-method-advisor --tool cursor          # Cursor
npx ux-method-advisor --tool windsurf        # Windsurf
npx ux-method-advisor --tool cursor --tool windsurf  # Multiple tools
npx ux-method-advisor -f                     # Force update
npx ux-method-advisor --list-tools           # List supported tools
```

## What Gets Installed / 安裝內容

6 skills with slash commands:

| Skill | Command | Methods |
|-------|---------|---------|
| UX Method Advisor | `/ux-method-advisor` | Decision layer 方法決策 |
| Discover | `/discover` | 17 methods |
| Define | `/define` | 21 methods |
| Ideate | `/ideate` | 13 methods |
| Execute | `/execute` | 7 methods |
| Validate | `/validate` | 7 methods |

`/ux-method-advisor` does not just list methods. It:
- identifies stage / 判斷階段
- recommends a primary method, backup, and fallback / 推薦主方案、備選與 fallback
- adapts to time, research access, prototype readiness, and traffic / 根據時間、資源、prototype、流量作判斷
- moves directly into the next deliverable / 直接推進下一步產出

Each stage skill still includes / 每個階段 skill 仍然包含：
- When to use / 幾時用
- Step-by-step guide / 執行步驟
- Real case study / 真實案例（Airbnb, Spotify, Google, Netflix, Apple, IBM...）

## Usage / 使用

```
"我接了一個 revamp project，現在應該先做什麼方法？"
"/ux-method-advisor 我想了解用戶為什麼在 checkout 流失"
"/define 怎樣做用戶訪談？"
"/validate 如何測試我的設計？"
"What UX method should I use if I only have 3 days and no user access?"
```

## License
MIT
