import type { PageServerLoad } from './$types';

const PLAYLIST_ID = 'PLVuD2Hl1loHDt5YUCc9blHS34KiFjlcf9';

async function fetchPlaylist(playlistId: string) {
  const url = `https://www.youtube.com/playlist?list=${playlistId}`;
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
  });
  if (!res.ok) return [];
  const html = await res.text();
  
  // Extract ytInitialData JSON from the page
  const match = html.match(/var ytInitialData = ({.*?});<\/script>/);
  if (!match) return [];
  
  try {
    const data = JSON.parse(match[1]);
    const contents = data?.contents?.twoColumnBrowseResultsRenderer?.tabs?.[0]?.tabRenderer?.content?.sectionListRenderer?.contents?.[0]?.itemSectionRenderer?.contents?.[0]?.playlistVideoListRenderer?.contents;
    if (!contents) return [];
    
    const entries = contents
      .filter((item: any) => item.playlistVideoRenderer)
      .map((item: any) => {
        const video = item.playlistVideoRenderer;
        const videoId = video.videoId;
        const title = video.title?.runs?.[0]?.text || 'Untitled';
        const thumbnail = video.thumbnail?.thumbnails?.[video.thumbnail.thumbnails.length - 1]?.url || `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`;
        return {
          title,
          url: `https://www.youtube.com/watch?v=${videoId}`,
          thumbnail,
          publishedAt: '', // Not easily available from this data
          videoId
        };
      })
      .reverse(); // Reverse to get newest-to-oldest
    
    console.log(`[YAV Playlist] Fetched ${entries.length} videos from playlist ${playlistId}`);
    return entries;
  } catch (error) {
    console.error('[YAV Playlist] Error parsing playlist data:', error);
    return [];
  }
}

export const load: PageServerLoad = async () => {
  const items = await fetchPlaylist(PLAYLIST_ID);
  return { items };
};
