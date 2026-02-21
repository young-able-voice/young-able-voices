import { s as sanitize_props, b as spread_props, d as slot, g as escape_html, e as ensure_array_like, f as attr, a8 as stringify, h as head } from "../../../chunks/index.js";
import "clsx";
import { C as Container } from "../../../chunks/Container.js";
import { H as Heading } from "../../../chunks/Heading.js";
import { H as Hero, S as Section } from "../../../chunks/Section.js";
import { C as Card } from "../../../chunks/card.js";
import { I as Icon } from "../../../chunks/Icon.js";
import { F as Facebook, I as Instagram } from "../../../chunks/instagram.js";
import { S as Separator } from "../../../chunks/separator.js";
function Mail($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" }],
    [
      "rect",
      { "x": "2", "y": "4", "width": "20", "height": "16", "rx": "2" }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "mail" },
    $$sanitized_props,
    {
      /**
       * @component @name Mail
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMjIgNy04Ljk5MSA1LjcyN2EyIDIgMCAwIDEtMi4wMDkgMEwyIDciIC8+CiAgPHJlY3QgeD0iMiIgeT0iNCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjE2IiByeD0iMiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/mail
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
function ProfileCard($$renderer, $$props) {
  let { name, role, focus, email, bio, socials } = $$props;
  Card($$renderer, {
    class: "p-6",
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="flex flex-col"><div class="aspect-square w-full max-w-[200px] overflow-hidden rounded-xl bg-muted"><div class="flex h-full w-full items-center justify-center text-muted-foreground/50"><svg class="h-16 w-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg></div></div> <h3 class="mt-4 text-xl font-semibold">${escape_html(name)}</h3> <p class="text-sm text-muted-foreground">${escape_html(role)}</p> <div class="mt-4 space-y-3"><!--[-->`);
      const each_array = ensure_array_like(bio);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let paragraph = each_array[$$index];
        $$renderer2.push(`<p class="text-sm leading-relaxed text-foreground/80">${escape_html(paragraph)}</p>`);
      }
      $$renderer2.push(`<!--]--></div> <div class="mt-4 flex items-center gap-3"><a${attr("href", `mailto:${stringify(email)}`)} class="flex h-9 w-9 items-center justify-center rounded-md bg-muted text-muted-foreground transition-colors hover:text-accent-foreground"${attr("aria-label", `Email ${stringify(name)}`)}>`);
      Mail($$renderer2, { class: "h-4 w-4" });
      $$renderer2.push(`<!----></a> <!--[-->`);
      const each_array_1 = ensure_array_like(socials);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let { platform, url } = each_array_1[$$index_1];
        $$renderer2.push(`<a${attr("href", url)} target="_blank" rel="noopener noreferrer" class="flex h-9 w-9 items-center justify-center rounded-md bg-muted text-muted-foreground transition-colors hover:text-accent-foreground"${attr("aria-label", `${stringify(name)} on ${stringify(platform)}`)}>`);
        if (platform === "facebook") {
          $$renderer2.push("<!--[-->");
          Facebook($$renderer2, { class: "h-4 w-4" });
        } else {
          $$renderer2.push("<!--[!-->");
          Instagram($$renderer2, { class: "h-4 w-4" });
        }
        $$renderer2.push(`<!--]--></a>`);
      }
      $$renderer2.push(`<!--]--></div></div>`);
    },
    $$slots: { default: true }
  });
}
const team = [
  {
    name: "Elina Csapo",
    role: "Founder",
    focus: "Childhood Apraxia of Speech",
    email: "elina@youngablevoices.com",
    bio: [
      "Hi! I'm Elina, the founder of Young Able Voices. As someone with childhood apraxia of speech, I understand firsthand the challenges that come with having a hidden disability.",
      "Growing up, I often felt alone in my struggles. I wanted to create a space where kids like me could connect, share experiences, and realize they're not alone. That's how Young Able Voices was born."
    ],
    socials: []
  },
  {
    name: "Eliza",
    role: "POTS & Dysautonomia Support",
    focus: "POTS, Dysautonomia, Chronic Migraines",
    email: "eliza.youngablevoices@gmail.com",
    bio: [
      "Hey y'all, my name is Eliza! I am 18 years old and a current senior in high school. I have POTS, dysautonomia, and chronic migraines; I was diagnosed with POTS in 2023 after a series of viral infections.",
      "I have learned to navigate life as a chronically ill teen with help from the Mayo Clinic's Pediatric Pain Rehabilitation Clinic in Rochester, Minnesota. I am so excited to talk with you all!"
    ],
    socials: []
  },
  {
    name: "Maggie Peña",
    role: "Dyslexia Support",
    focus: "Dyslexia, Auditory Processing Disorder",
    email: "maggie.youngablevoices@gmail.com",
    bio: [
      "Hi everyone! My name is Maggie Peña and I am a psychology major at Rider University. I have a learning disability called Dyslexia and Auditory Processing Disorder (APD). I was diagnosed with both when I was 15, and I have accumulated many coping skills before and after my diagnosis.",
      "Some challenges I've faced are learning how to advocate for myself during my 3-year diagnosis process, figuring out how to verbalize what was going on, and catching up on learning Dyslexia-focused strategies while transitioning from high school to college.",
      "My goal with joining Young Able Voices is to supplement their advocacy and community by adding perspective. I look forward to furthering the support that Young Able Voices provides."
    ],
    socials: [
      {
        platform: "facebook",
        url: "https://www.facebook.com/maggie.pena.382898/"
      },
      {
        platform: "instagram",
        url: "https://www.instagram.com/young_able_voices_dyslexic"
      }
    ]
  }
];
function _page($$renderer) {
  head("cwls5q", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>About - Young Able Voices</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Learn about Young Able Voices and our mission to support kids with hidden disabilities."/>`);
  });
  Hero($$renderer, { title: "About Young Able Voices" });
  $$renderer.push(`<!----> `);
  Section($$renderer, {
    children: ($$renderer2) => {
      Container($$renderer2, {
        size: "sm",
        children: ($$renderer3) => {
          Heading($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->Our Mission`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> <div class="mt-6 space-y-4"><p class="leading-relaxed text-foreground/80">Young Able Voices was created to provide a safe, supportive community for children with hidden disabilities.
				We believe that no child should feel alone in their journey.</p> <p class="leading-relaxed text-foreground/80">Hidden disabilities — invisible conditions like speech disorders, learning differences, chronic illnesses, and
				neurological conditions — can be isolating. Kids often feel misunderstood or different from their peers.</p> <p class="leading-relaxed text-foreground/80">Through peer-to-peer support, we help children connect with others who truly understand what they're going
				through. Together, we share tips, encouragement, and friendship.</p></div>`);
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
        children: ($$renderer3) => {
          Heading($$renderer3, {
            class: "mb-8",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->Meet Our Team`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
          const each_array = ensure_array_like(team);
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let member = each_array[$$index];
            ProfileCard($$renderer3, spread_props([member]));
          }
          $$renderer3.push(`<!--]--></div>`);
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
