// 只对暂存文件执行 lint-staged（包含 eslint/stylelint/prettier/ts 类型检查）
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { cwd } from 'node:process';

const hasBiome = existsSync(resolve(cwd(), 'biome.json'));
const hasTurbo = existsSync(resolve(cwd(), 'turbo.json'));
const bin = (name) => resolve(cwd(), 'node_modules', '.bin', process.platform === 'win32' ? `${name}.cmd` : name);
const hasESLint = existsSync(bin('eslint'));
const hasPrettier = existsSync(bin('prettier'));
const hasStylelint = existsSync(bin('stylelint'));

export default {
  '**/*.{css,scss,less,vue}': [
    // 仅当已安装对应工具时才执行
    ...(hasStylelint
      ? ['pnpm -s exec stylelint --fix --cache --cache-location .stylelintcache']
      : []),
    ...(hasPrettier ? ['pnpm -s exec prettier --write'] : []),
  ],
  '**/*.{js,jsx,ts,tsx,vue}': (files) => {
    const normalized = files.map((f) => f.replaceAll('\\', '/'));
    const targets = normalized.join(' ');

    const commands = [];

    if (hasTurbo) {
      commands.push(`pnpm -s exec turbo run typecheck`);
    }

    // 存在 biome.json 时，先用 Biome 修复问题
    if (hasBiome) {
      commands.push(`pnpm -s exec biome lint --fix`);
    }

    const eslintMaxWarnings = 100;
    // 再对暂存文件运行 ESLint/Prettier（存在时）
    if (hasESLint) {
      commands.push(
        `pnpm -s exec eslint --fix --cache --cache-location .eslintcache --max-warnings ${eslintMaxWarnings} ${targets}`,
      );
    }
    if (hasPrettier) {
      commands.push(`pnpm -s exec prettier --write ${targets}`);
    }

    return commands;
  },
  '**/*.{json,md,yml,yaml}': [
    ...(hasPrettier ? ['pnpm -s exec prettier --write'] : []),
  ],
};
