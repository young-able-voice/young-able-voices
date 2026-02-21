import { s as sanitize_props, b as spread_props, d as slot } from "./index.js";
import { I as Icon } from "./Icon.js";
function Newspaper($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M15 18h-5" }],
    ["path", { "d": "M18 14h-8" }],
    [
      "path",
      {
        "d": "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"
      }
    ],
    [
      "rect",
      { "width": "8", "height": "4", "x": "10", "y": "6", "rx": "1" }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "newspaper" },
    $$sanitized_props,
    {
      /**
       * @component @name Newspaper
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTUgMThoLTUiIC8+CiAgPHBhdGggZD0iTTE4IDE0aC04IiAvPgogIDxwYXRoIGQ9Ik00IDIyaDE2YTIgMiAwIDAgMCAyLTJWNGEyIDIgMCAwIDAtMi0ySDhhMiAyIDAgMCAwLTIgMnYxNmEyIDIgMCAwIDEtNCAwdi05YTIgMiAwIDAgMSAyLTJoMiIgLz4KICA8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI0IiB4PSIxMCIgeT0iNiIgcng9IjEiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/newspaper
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Mic($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M12 19v3" }],
    ["path", { "d": "M19 10v2a7 7 0 0 1-14 0v-2" }],
    [
      "rect",
      { "x": "9", "y": "2", "width": "6", "height": "13", "rx": "3" }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "mic" },
    $$sanitized_props,
    {
      /**
       * @component @name Mic
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgMTl2MyIgLz4KICA8cGF0aCBkPSJNMTkgMTB2MmE3IDcgMCAwIDEtMTQgMHYtMiIgLz4KICA8cmVjdCB4PSI5IiB5PSIyIiB3aWR0aD0iNiIgaGVpZ2h0PSIxMyIgcng9IjMiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/mic
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Video($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"
      }
    ],
    [
      "rect",
      { "x": "2", "y": "6", "width": "14", "height": "12", "rx": "2" }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "video" },
    $$sanitized_props,
    {
      /**
       * @component @name Video
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTYgMTMgNS4yMjMgMy40ODJhLjUuNSAwIDAgMCAuNzc3LS40MTZWNy44N2EuNS41IDAgMCAwLS43NTItLjQzMkwxNiAxMC41IiAvPgogIDxyZWN0IHg9IjIiIHk9IjYiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxMiIgcng9IjIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/video
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
const featured = [{ "name": "TEDx", "url": "https://www.youtube.com/watch?v=zLxWXcz5k2o", "icon": "video" }, { "name": "The Hun School of Princeton", "url": "https://www.hunschool.org/about-hun/news-events/post/~board/school-news/post/tedx-talk-hosts-elina-c-24-and-samhita-k-28", "icon": "article" }, { "name": "NJ 101.5", "url": "https://nj1015.com/courageous-nj-high-school-student-overcomes-hidden-disability/", "icon": "article" }, { "name": "Apraxia Kids", "url": "https://www.apraxia-kids.org/elina-csapo-setting-goals-as-an-apraxia-star/", "icon": "article" }, { "name": "LDA America", "url": "https://ldaamerica.org/celebrating-young-advocates-meet-elina-csapo/", "icon": "podcast" }, { "name": "No Limits Podcast", "url": "https://www.youtube.com/watch?v=ulAD9Utt_zA", "icon": "video" }];
const all = [{ "title": "TEDx Talk", "source": "YouTube", "url": "https://www.youtube.com/watch?v=zLxWXcz5k2o", "type": "video" }, { "title": "Young Able Voices Introduction", "source": "YouTube", "url": "https://www.youtube.com/watch?v=Cvjbe-oylBo", "type": "video" }, { "title": "The Hun School of Princeton", "source": "School News", "url": "https://www.hunschool.org/about-hun/news-events/post/~board/school-news/post/tedx-talk-hosts-elina-c-24-and-samhita-k-28", "type": "article" }, { "title": "Courageous NJ High School Student Overcomes Hidden Disability", "source": "NJ 101.5", "url": "https://nj1015.com/courageous-nj-high-school-student-overcomes-hidden-disability/", "type": "article" }, { "title": "Top 5 Highlights of the Apraxia Kids National Conference", "source": "The Speak Boutique", "url": "https://thespeakboutique.com/en-us/blogs/the-speak-boutique-blog/apraxia-kids-conference", "type": "article" }, { "title": "Elina Csapo: Setting Goals As An Apraxia Star", "source": "Apraxia Kids", "url": "https://www.apraxia-kids.org/elina-csapo-setting-goals-as-an-apraxia-star/", "type": "article" }, { "title": "Celebrating Young Advocates: Meet Elina Csapo", "source": "Learning Disabilities Association of America", "url": "https://ldaamerica.org/celebrating-young-advocates-meet-elina-csapo/", "type": "podcast" }, { "title": "Talking with Jordan from the Apraxia Foundation", "source": "Instagram", "url": "https://www.instagram.com/tv/Cw3t42kRcOH/", "type": "podcast" }, { "title": "No Limits Podcast", "source": "YouTube", "url": "https://www.youtube.com/watch?v=ulAD9Utt_zA", "type": "video" }];
const mediaData = {
  featured,
  all
};
export {
  Mic as M,
  Newspaper as N,
  Video as V,
  mediaData as m
};
