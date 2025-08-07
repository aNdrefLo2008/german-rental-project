/**
 * This configuration is used for the Sanity Studio that’s mounted on the `\app\studio\[[...tool]]\page.tsx` route
 */

import path from 'path';
import {visionTool} from '@sanity/vision';
import {defineConfig} from 'sanity';
import {structureTool} from 'sanity/structure';

import {apiVersion, dataset, projectId} from './env';
import {schema} from './schema';
import {structure} from './structure';

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({structure}),
    visionTool({defaultApiVersion: apiVersion}),
  ]
});
