import type { PageServerLoad } from './$types';

const playlists = [
  { id: 'PLVuD2Hl1loHDt5YUCc9blHS34KiFjlcf9', slug: 'yav', name: 'YAV Chats' },
  { id: 'PLVuD2Hl1loHDucE2JiZTiHX0u9U75iNcC', slug: 'apraxia', name: 'Apraxia Chats' }
];

async function fetchPlaylist(playlistId: string) {
  const url = `https://www.youtube.com/feeds/videos.xml?playlist_id=${playlistId}`;
  const res = await fetch(url);
  if (!res.ok) return [];
  const text = await res.text();

  const entries: Array<{ title: string; url: string; thumbnail: string | null; publishedAt: string; videoId: string }> = [];
  const entryRe = /<entry>([\s\S]*?)<\/entry>/g;
  let m;
  while ((m = entryRe.exec(text)) !== null) {
    const entry = m[1];
    const titleMatch = entry.match(/<title>([\s\S]*?)<\/title>/);
    const title = titleMatch ? titleMatch[1].trim() : 'Untitled';
    const linkMatch = entry.match(/<link[^>]*href="([^"]+)"/);
    const url = linkMatch ? linkMatch[1] : '';
    const vidMatch = entry.match(/<yt:videoId>([\s\S]*?)<\/yt:videoId>/);
    const videoId = vidMatch ? vidMatch[1].trim() : (url.split('v=')[1] || '');
    const thumbMatch = entry.match(/<media:thumbnail[^>]*url="([^"]+)"/);
    const thumbnail = thumbMatch ? thumbMatch[1] : (videoId ? `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg` : null);
    const pubMatch = entry.match(/<published>([\s\S]*?)<\/published>/);
    const publishedAt = pubMatch ? pubMatch[1] : '';
    entries.push({ title, url, thumbnail, publishedAt, videoId });
  }

  // newest to oldest (feed is newest first but ensure sort)
  entries.sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
  return entries;
}

export const load: PageServerLoad = async () => {
  const results = await Promise.all(playlists.map((p) => fetchPlaylist(p.id)));
  const out: Record<string, any> = {};
  playlists.forEach((p, i) => {
    out[p.slug] = { meta: { id: p.id, name: p.name }, items: results[i] };
  });
  return { yav: out.yav, apraxia: out.apraxia };
};
