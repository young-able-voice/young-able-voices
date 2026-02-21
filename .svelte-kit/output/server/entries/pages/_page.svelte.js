import { h as head, e as ensure_array_like, b as spread_props, f as attr, g as escape_html } from "../../chunks/index.js";
import { a as Button_1 } from "../../chunks/Button.js";
import "clsx";
import { C as Container } from "../../chunks/Container.js";
import { F as FeatureCard } from "../../chunks/FeatureCard.js";
import { H as Heading } from "../../chunks/Heading.js";
import { H as Hero, S as Section } from "../../chunks/Section.js";
import { S as Separator } from "../../chunks/separator.js";
import { V as Video, M as Mic, N as Newspaper, m as mediaData } from "../../chunks/media.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const programs = [
      {
        title: "Weekly Chats",
        description: "Join weekly video chats with peers facing similar challenges. Share, listen, and connect.",
        href: "/programs/weekly-chats",
        icon: "💬"
      },
      {
        title: "One-on-One Meetings",
        description: "Personal support sessions for when you need individual attention.",
        href: "/programs/one-on-one",
        icon: "🤝"
      },
      {
        title: "Specialized Chats",
        description: "Focused groups for specific conditions like Apraxia, Dyslexia, and POTS.",
        href: "/programs/specialized",
        icon: "🎯"
      }
    ];
    head("1uha8ag", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Young Able Voices - A Safe Place for Kids with Hidden Disabilities</title>`);
      });
      $$renderer3.push(`<meta name="description" content="Peer support for children with hidden disabilities through weekly chats, one-on-one meetings, and specialized programs."/>`);
    });
    Hero($$renderer2, {
      title: "A safe place for kids with hidden disabilities to connect, and know they aren't alone.",
      subtitle: "Your future is bright."
    });
    $$renderer2.push(`<!----> `);
    Section($$renderer2, {
      children: ($$renderer3) => {
        Container($$renderer3, {
          size: "sm",
          children: ($$renderer4) => {
            $$renderer4.push(`<div class="text-center">`);
            Heading($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->What We Do`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> <div class="mt-6 space-y-4"><p class="text-lg leading-relaxed text-foreground/80">At Young Able Voices, children with hidden disabilities have the opportunity to join weekly chats to talk
					with others facing similar challenges. Each week we post a specific video to get the chat rolling.</p> <p class="leading-relaxed text-foreground/80">Please understand that this is a peer-to-peer support group. We are not therapists, but we're here to
					share helpful suggestions, tips, and tricks in navigating daily life.</p></div> `);
            Button_1($$renderer4, {
              href: "/contact",
              size: "lg",
              class: "mt-8",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->Join Us`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----></div>`);
          },
          $$slots: { default: true }
        });
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Separator($$renderer2, {});
    $$renderer2.push(`<!----> `);
    Section($$renderer2, {
      children: ($$renderer3) => {
        Container($$renderer3, {
          children: ($$renderer4) => {
            Heading($$renderer4, {
              class: "mb-12 text-center",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->Our Programs`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
            const each_array = ensure_array_like(programs);
            for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
              let program = each_array[$$index];
              FeatureCard($$renderer4, spread_props([program]));
            }
            $$renderer4.push(`<!--]--></div>`);
          },
          $$slots: { default: true }
        });
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Separator($$renderer2, {});
    $$renderer2.push(`<!----> `);
    Section($$renderer2, {
      children: ($$renderer3) => {
        Container($$renderer3, {
          size: "sm",
          class: "text-center",
          children: ($$renderer4) => {
            Heading($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->Featured In`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> <p class="mt-4 leading-relaxed text-muted-foreground">Young Able Voices has been recognized by these organizations</p> <div class="mt-8 flex flex-wrap items-center justify-center gap-3"><!--[-->`);
            const each_array_1 = ensure_array_like(mediaData.featured);
            for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
              let item = each_array_1[$$index_1];
              $$renderer4.push(`<a${attr("href", item.url)} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-md border bg-card px-3 py-2 text-sm font-medium transition-colors hover:bg-accent">`);
              if (item.icon === "video") {
                $$renderer4.push("<!--[-->");
                Video($$renderer4, { class: "h-4 w-4" });
              } else if (item.icon === "podcast") {
                $$renderer4.push("<!--[1-->");
                Mic($$renderer4, { class: "h-4 w-4" });
              } else {
                $$renderer4.push("<!--[!-->");
                Newspaper($$renderer4, { class: "h-4 w-4" });
              }
              $$renderer4.push(`<!--]--> ${escape_html(item.name)}</a>`);
            }
            $$renderer4.push(`<!--]--></div> `);
            Button_1($$renderer4, {
              href: "/media",
              variant: "outline",
              class: "mt-8",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->View All Media`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        });
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Separator($$renderer2, {});
    $$renderer2.push(`<!----> `);
    Section($$renderer2, {
      children: ($$renderer3) => {
        Container($$renderer3, {
          size: "sm",
          class: "text-center",
          children: ($$renderer4) => {
            Heading($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->Ready to Connect?`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> <p class="mt-4 leading-relaxed text-foreground/80">Hey Moms, Dads, and all you awesome adults—feel free to join your kiddos and tune in! Got questions or
			topic ideas? We'd love to hear from you!</p> `);
            Button_1($$renderer4, {
              href: "/contact",
              size: "lg",
              class: "mt-8",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->Get in Touch`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!---->`);
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
