import { f as attr, g as escape_html, a6 as derived, h as head, e as ensure_array_like } from "../../../chunks/index.js";
import "clsx";
import { C as Container } from "../../../chunks/Container.js";
import { H as Hero, S as Section } from "../../../chunks/Section.js";
import { C as Card_1 } from "../../../chunks/Card2.js";
import { N as Newspaper, M as Mic, V as Video, m as mediaData } from "../../../chunks/media.js";
function MediaCard($$renderer, $$props) {
  let { title, description, source, url, type = "article" } = $$props;
  const typeConfig = {
    article: { label: "Article" },
    podcast: { label: "Podcast" },
    video: { label: "Video" }
  };
  let config = derived(() => typeConfig[type]);
  if (url) {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<a${attr("href", url)} target="_blank" rel="noopener noreferrer">`);
    Card_1($$renderer, {
      hoverable: true,
      class: "h-full p-5",
      children: ($$renderer2) => {
        $$renderer2.push(`<div class="mb-2 flex items-center gap-2">`);
        if (type === "article") {
          $$renderer2.push("<!--[-->");
          Newspaper($$renderer2, { class: "h-4 w-4 text-muted-foreground" });
        } else if (type === "podcast") {
          $$renderer2.push("<!--[1-->");
          Mic($$renderer2, { class: "h-4 w-4 text-muted-foreground" });
        } else {
          $$renderer2.push("<!--[!-->");
          Video($$renderer2, { class: "h-4 w-4 text-muted-foreground" });
        }
        $$renderer2.push(`<!--]--> <span class="text-xs font-medium uppercase tracking-wider text-muted-foreground">${escape_html(config().label)}</span></div> <h4 class="font-semibold">${escape_html(title)}</h4> `);
        if (source) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<p class="text-sm text-muted-foreground">${escape_html(source)}</p>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (description) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<p class="mt-2 text-sm text-muted-foreground">${escape_html(description)}</p>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    });
    $$renderer.push(`<!----></a>`);
  } else {
    $$renderer.push("<!--[!-->");
    Card_1($$renderer, {
      class: "h-full p-5",
      children: ($$renderer2) => {
        $$renderer2.push(`<div class="mb-2 flex items-center gap-2">`);
        if (type === "article") {
          $$renderer2.push("<!--[-->");
          Newspaper($$renderer2, { class: "h-4 w-4 text-muted-foreground" });
        } else if (type === "podcast") {
          $$renderer2.push("<!--[1-->");
          Mic($$renderer2, { class: "h-4 w-4 text-muted-foreground" });
        } else {
          $$renderer2.push("<!--[!-->");
          Video($$renderer2, { class: "h-4 w-4 text-muted-foreground" });
        }
        $$renderer2.push(`<!--]--> <span class="text-xs font-medium uppercase tracking-wider text-muted-foreground">${escape_html(config().label)}</span></div> <h4 class="font-semibold">${escape_html(title)}</h4> `);
        if (source) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<p class="text-sm text-muted-foreground">${escape_html(source)}</p>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (description) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<p class="mt-2 text-sm text-muted-foreground">${escape_html(description)}</p>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    });
  }
  $$renderer.push(`<!--]-->`);
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    head("14bqwv7", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Media &amp; Press - Young Able Voices</title>`);
      });
      $$renderer3.push(`<meta name="description" content="Articles, podcasts, and media featuring Young Able Voices."/>`);
    });
    Hero($$renderer2, {
      title: "Media & Press",
      subtitle: "Stories about Young Able Voices"
    });
    $$renderer2.push(`<!----> `);
    Section($$renderer2, {
      children: ($$renderer3) => {
        Container($$renderer3, {
          children: ($$renderer4) => {
            $$renderer4.push(`<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
            const each_array = ensure_array_like(mediaData.all);
            for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
              let item = each_array[$$index];
              MediaCard($$renderer4, {
                title: item.title,
                source: item.source,
                url: item.url,
                type: item.type
              });
            }
            $$renderer4.push(`<!--]--></div>`);
          },
          $$slots: { default: true }
        });
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!---->`);
  });
}
export {
  _page as default
};
