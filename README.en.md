# starter-monorepo

English | [中文](./README.md)

An out-of-the-box Monorepo project template powered by pnpm workspace, with pre-configured ESLint, Prettier, TypeScript, VitePress and more.

## ✨ Features

- 📦 **pnpm workspace** — Efficient Monorepo dependency management
- 🔧 **Unified Configuration** — Shared ESLint / Prettier / TypeScript configs
- 📝 **VitePress Docs** — Built-in documentation site with GitHub Pages auto-deployment
- 🚀 **GitHub Actions** — Automated release & docs deployment
- 🔗 **Lefthook** — Git hooks for auto formatting & linting
- 📋 **Commitizen** — Standardized commit messages

## 📁 Project Structure

```
starter-monorepo/
├── apps/                  # Applications
│   └── www/               # Web application
├── packages/              # Shared packages
│   ├── eslint-config/     # Shared ESLint configuration
│   ├── prettier-config/   # Shared Prettier configuration
│   ├── tsconfig/          # Shared TypeScript configuration
│   └── types/             # Shared type definitions
├── docs/                  # VitePress documentation
├── scripts/               # Utility scripts
├── lefthook.yml           # Git hooks configuration
├── pnpm-workspace.yaml    # pnpm workspace configuration
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js >= 20.10.0
- pnpm >= 9.12.0

### Installation

```bash
# Clone the repository
git clone https://github.com/busyhe/starter-monorepo.git
cd starter-monorepo

# Install dependencies
pnpm install
```

### Common Commands

```bash
# Start docs dev server
pnpm docs:dev

# Build docs
pnpm docs:build

# Preview built docs
pnpm docs:preview

# Clean all node_modules
pnpm clean

# Release a new version
pnpm release
```

## 📦 Shared Packages

| Package | Description |
| --- | --- |
| `@workspace/eslint-config` | Unified ESLint config with Vue / TypeScript / JSON support |
| `@workspace/prettier-config` | Unified Prettier formatting config |
| `@workspace/tsconfig` | Unified TypeScript compiler config |
| `types` | Shared type definitions |

## 🔧 Tooling

### Git Hooks (Lefthook)

- **pre-commit** — Auto lint & format staged files (ESLint + Prettier)
- **post-merge** — Auto install dependencies after merge
- **prepare-commit-msg** — Generate standardized commit messages via czg

### CI/CD (GitHub Actions)

- **Release** — Auto generate changelog on tag push
- **Docs** — Auto deploy docs to GitHub Pages on main/docs branch push

## 🎯 Using This Template

1. Clone this repository
2. Do a global find-and-replace for:
   - `starter-monorepo` → your project name
   - `busyhe` → your GitHub username
   - `_description_` → your project description

## 📝 License

[MIT](./LICENSE) License © 2024-PRESENT [busyhe](https://github.com/busyhe)
