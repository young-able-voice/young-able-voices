import { h as head, e as ensure_array_like, f as attr, g as escape_html } from "../../../chunks/index.js";
import { a as Button_1 } from "../../../chunks/Button.js";
import { C as Card_1 } from "../../../chunks/Card2.js";
import "clsx";
import { C as Container } from "../../../chunks/Container.js";
import { H as Heading } from "../../../chunks/Heading.js";
import { H as Hero, S as Section } from "../../../chunks/Section.js";
import { S as Separator } from "../../../chunks/separator.js";
import { E as External_link } from "../../../chunks/external-link.js";
function _page($$renderer) {
  const resources = [
    {
      title: "My Speech Journey",
      description: "Follow Elina's personal journey with childhood apraxia of speech.",
      href: "/resources/speech-journey"
    },
    {
      title: "Apraxia Kids",
      description: "Resources and information about childhood apraxia of speech.",
      url: "https://www.apraxia-kids.org"
    },
    {
      title: "Learning Disabilities Association of America",
      description: "Support and resources for learning disabilities.",
      url: "https://ldaamerica.org"
    },
    {
      title: "Dysautonomia International",
      description: "Information and support for POTS and dysautonomia.",
      url: "https://dysautonomiainternational.org"
    },
    {
      title: "Understood.org",
      description: "Resources for learning and attention issues.",
      url: "https://www.understood.org"
    },
    {
      title: "Child Mind Institute",
      description: "Mental health and learning disorder resources for families.",
      url: "https://childmind.org"
    }
  ];
  head("gczoum", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Resources - Young Able Voices</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Helpful resources for kids with hidden disabilities and their families."/>`);
  });
  Hero($$renderer, {
    title: "Helpful Resources",
    subtitle: "Information and support for your journey"
  });
  $$renderer.push(`<!----> `);
  Section($$renderer, {
    children: ($$renderer2) => {
      Container($$renderer2, {
        children: ($$renderer3) => {
          $$renderer3.push(`<p class="mb-12 text-center text-lg leading-relaxed text-foreground/80">We've gathered these resources to help you learn more and find additional support. Have a resource to suggest?
			Let us know!</p> <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
          const each_array = ensure_array_like(resources);
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let resource = each_array[$$index];
            if (resource.href) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`<a${attr("href", resource.href)}>`);
              Card_1($$renderer3, {
                hoverable: true,
                class: "h-full p-6",
                children: ($$renderer4) => {
                  $$renderer4.push(`<h3 class="text-lg font-semibold">${escape_html(resource.title)}</h3> <p class="mt-2 text-sm text-muted-foreground">${escape_html(resource.description)}</p>`);
                },
                $$slots: { default: true }
              });
              $$renderer3.push(`<!----></a>`);
            } else if (resource.url) {
              $$renderer3.push("<!--[1-->");
              $$renderer3.push(`<a${attr("href", resource.url)} target="_blank" rel="noopener noreferrer">`);
              Card_1($$renderer3, {
                hoverable: true,
                class: "h-full p-6",
                children: ($$renderer4) => {
                  $$renderer4.push(`<h3 class="text-lg font-semibold">${escape_html(resource.title)}</h3> <p class="mt-2 text-sm text-muted-foreground">${escape_html(resource.description)}</p> <span class="mt-4 inline-flex items-center gap-1 text-xs text-muted-foreground">External link `);
                  External_link($$renderer4, { class: "h-3 w-3" });
                  $$renderer4.push(`<!----></span>`);
                },
                $$slots: { default: true }
              });
              $$renderer3.push(`<!----></a>`);
            } else {
              $$renderer3.push("<!--[!-->");
            }
            $$renderer3.push(`<!--]-->`);
          }
          $$renderer3.push(`<!--]--></div>`);
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  Separator($$renderer, {});
  $$renderer.push(`<!----> `);
  Section($$renderer, {
    children: ($$renderer2) => {
      Container($$renderer2, {
        size: "sm",
        class: "text-center",
        children: ($$renderer3) => {
          Heading($$renderer3, {
            size: "sm",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->Have a Resource to Share?`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> <p class="mt-4 leading-relaxed text-foreground/80">We're always looking to expand our resource list. Let us know if there's something that helped you!</p> `);
          Button_1($$renderer3, {
            href: "/contact",
            class: "mt-6",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->Suggest a Resource`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!---->`);
}
export {
  _page as default
};
