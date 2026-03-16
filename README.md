# starter-monorepo

[English](./README.en.md) | 中文

一个开箱即用的 Monorepo 项目模板，基于 pnpm workspace，集成了 ESLint、Prettier、TypeScript、VitePress 等常用工具链配置。

## ✨ 特性

- 📦 **pnpm workspace** — 高效的 Monorepo 依赖管理
- 🔧 **统一配置** — 共享 ESLint / Prettier / TypeScript 配置
- 📝 **VitePress 文档** — 内置文档站点，支持 GitHub Pages 自动部署
- 🚀 **GitHub Actions** — 自动化发布 & 文档部署
- 🔗 **Lefthook** — Git hooks 管理，自动格式化 & 代码检查
- 📋 **Commitizen** — 规范化 commit message

## 📁 项目结构

```
starter-monorepo/
├── apps/                  # 应用
│   └── www/               # Web 应用
├── packages/              # 共享包
│   ├── eslint-config/     # ESLint 共享配置
│   ├── prettier-config/   # Prettier 共享配置
│   ├── tsconfig/          # TypeScript 共享配置
│   └── types/             # 共享类型定义
├── docs/                  # VitePress 文档
├── scripts/               # 工具脚本
├── lefthook.yml           # Git hooks 配置
├── pnpm-workspace.yaml    # pnpm workspace 配置
└── package.json
```

## 🚀 快速开始

### 环境要求

- Node.js >= 20.10.0
- pnpm >= 9.12.0

### 安装

```bash
# 克隆项目
git clone https://github.com/busyhe/starter-monorepo.git
cd starter-monorepo

# 安装依赖
pnpm install
```

### 常用命令

```bash
# 启动文档开发服务
pnpm docs:dev

# 构建文档
pnpm docs:build

# 预览构建后的文档
pnpm docs:preview

# 清除所有 node_modules
pnpm clean

# 版本发布
pnpm release
```

## 📦 共享包

| 包名 | 说明 |
| --- | --- |
| `@workspace/eslint-config` | 统一的 ESLint 配置，支持 Vue / TypeScript / JSON 等 |
| `@workspace/prettier-config` | 统一的 Prettier 格式化配置 |
| `@workspace/tsconfig` | 统一的 TypeScript 编译配置 |
| `types` | 项目共享类型定义 |

## 🔧 工具链

### Git Hooks (Lefthook)

- **pre-commit** — 自动检查并格式化暂存文件（ESLint + Prettier）
- **post-merge** — 合并后自动安装依赖
- **prepare-commit-msg** — 使用 czg 生成规范 commit message

### CI/CD (GitHub Actions)

- **Release** — 推送 tag 时自动生成 changelog
- **Docs** — 推送到 main/docs 分支时自动部署文档到 GitHub Pages

## 🎯 使用模板

1. 克隆此项目
2. 全局替换以下占位符：
   - `starter-monorepo` → 你的项目名
   - `busyhe` → 你的 GitHub 用户名
   - `_description_` → 你的项目描述

## 📝 License

[MIT](./LICENSE) License © 2024-PRESENT [busyhe](https://github.com/busyhe)
