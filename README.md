# UX Method Advisor

> Install 6 UX skills (65 methods) into Claude Code, Cursor, Windsurf and more.  
> 一鍵安裝 6 個 UX Skills（65 個方法）到你的 AI 工具。

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
| UX Method Advisor | `/ux-method-advisor` | Auto-recommend 自動推薦 |
| Discover | `/discover` | 17 methods |
| Define | `/define` | 21 methods |
| Ideate | `/ideate` | 13 methods |
| Execute | `/execute` | 7 methods |
| Validate | `/validate` | 7 methods |

Each method includes / 每個方法包含：
- When to use / 幾時用
- Step-by-step guide / 執行步驟
- Real case study / 真實案例（Airbnb, Spotify, Google, Netflix, Apple, IBM...）

## Usage / 使用

```
"我接了一個 revamp project，該怎麼做？"
"/define 怎樣做用戶訪談？"
"/validate 如何測試我的設計？"
"What is Affinity Mapping? How do I run it?"
```

## License
MIT
