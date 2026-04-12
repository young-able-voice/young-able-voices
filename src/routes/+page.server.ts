import type { PageServerLoad } from './$types';
import fs from 'fs/promises';
import path from 'path';
import { base } from '$app/paths';

const IMAGE_DIR_PREFIX = 'pictures';

export const load: PageServerLoad = async () => {
  try {
    const staticDir = path.join(process.cwd(), 'static');
    const entries = await fs.readdir(staticDir, { withFileTypes: true });

    // find a directory that starts with "pictures" (case-insensitive)
    const picturesEntry = entries.find(
      (e) => e.isDirectory() && e.name.toLowerCase().startsWith(IMAGE_DIR_PREFIX)
    );

    if (!picturesEntry) {
      return { images: [] };
    }

    const picturesPath = path.join(staticDir, picturesEntry.name);
    const files = await fs.readdir(picturesPath, { withFileTypes: true });

    const images = files
      .filter((f) => f.isFile() && /\.(jpe?g|png|webp|gif|avif|svg)$/i.test(f.name))
      .map((f) => `${base}/${encodeURIComponent(picturesEntry.name)}/${encodeURIComponent(f.name)}`)
      .sort();

    return { images };
  } catch (error) {
    console.error('[YAV] Error reading Pictures folder:', error);
    return { images: [] };
  }
};
