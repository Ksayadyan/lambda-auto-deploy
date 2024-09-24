import * as esbuild from 'esbuild';
import { createBuildSettings } from './build.settings.js';

const settings = createBuildSettings({ minify: true });

await esbuild.build(settings);
