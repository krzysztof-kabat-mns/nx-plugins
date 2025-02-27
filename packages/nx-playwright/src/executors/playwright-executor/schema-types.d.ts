import type { PackageRunner } from '../../types';

export interface PlaywrightExecutorSchema {
  e2eFolder: string;
  path?: string;
  config?: string;
  devServerTarget?: string;
  baseUrl?: string;
  headed?: boolean;
  reporter?: string;
  browser?: 'chromium' | 'firefox' | 'webkit' | 'all';
  packageRunner?: PackageRunner;
  testProject?: string;
  timeout?: number;
  skipServe?: boolean;
  grep?: string;
  grepInvert?: string;
  passWithNoTests?: boolean;
  debug?: boolean;
  updateSnapshots?: boolean;
  ui?: boolean;
}
