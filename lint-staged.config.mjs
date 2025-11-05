// 只对暂存文件执行 lint-staged（包含 eslint/stylelint/prettier/ts 类型检查）
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { cwd } from 'node:process';

const hasBiome = existsSync(resolve(cwd(), 'biome.json'));
const hasTurbo = existsSync(resolve(cwd(), 'turbo.json'));

export default {
  '**/*.{js,jsx,ts,tsx,vue}': (files) => {
    const normalized = files.map((f) => f.replaceAll('\\', '/'));
    const targets = normalized.join(' ');

    const commands = [];

    if (hasTurbo) {
      commands.push("pnpm -s exec turbo run typecheck");
    }
console.log(hasBiome, '====')
    // 存在 biome.json 时，先用 Biome 修复问题
    if (hasBiome) {
      commands.push("pnpm -s exec biome lint --fix");
      return commands;
    }

    const eslintMaxWarnings = 100;
    // 再对暂存文件运行 ESLint/Prettier
    commands.push(
      `pnpm -s exec eslint --fix --cache --cache-location .eslintcache --max-warnings ${eslintMaxWarnings} ${targets}`,
      `pnpm -s exec prettier --write ${targets}`,
    );

    return commands;
  }
};
