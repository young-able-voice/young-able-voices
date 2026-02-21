import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.N-XwKZIZ.js","_app/immutable/chunks/lsryPQS4.js","_app/immutable/chunks/CDoyrOs-.js","_app/immutable/chunks/CfhblRRO.js","_app/immutable/chunks/Be0XpEma.js","_app/immutable/chunks/gcAqdv9B.js","_app/immutable/chunks/BGOvR6ZW.js","_app/immutable/chunks/BW7lDpDa.js","_app/immutable/chunks/BaEjpl3O.js","_app/immutable/chunks/BC-ugpnt.js","_app/immutable/chunks/C45n1TbF.js"];
export const stylesheets = ["_app/immutable/assets/0.Dc3TB1Lg.css"];
export const fonts = [];
