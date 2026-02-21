import { h as head, e as ensure_array_like, b as spread_props } from "../../../../chunks/index.js";
import { a as Button_1 } from "../../../../chunks/Button.js";
import "clsx";
import { C as Container } from "../../../../chunks/Container.js";
import { F as FeatureCard } from "../../../../chunks/FeatureCard.js";
import { H as Heading } from "../../../../chunks/Heading.js";
import { H as Hero, S as Section } from "../../../../chunks/Section.js";
import { S as Separator } from "../../../../chunks/separator.js";
function _page($$renderer) {
  const specializedGroups = [
    {
      title: "Apraxia Weekly Chats",
      description: "For kids with childhood apraxia of speech (CAS) to connect and share experiences.",
      href: "/programs/specialized/apraxia",
      icon: "🗣️"
    },
    {
      title: "Dyslexia Support",
      description: "Connect with others navigating reading and learning differences.",
      href: "/programs/specialized/dyslexia",
      icon: "📚"
    },
    {
      title: "POTS & Dysautonomia",
      description: "Support for kids dealing with POTS and related conditions.",
      href: "/programs/specialized/pots",
      icon: "💜"
    }
  ];
  head("tqjrjk", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Specialized Chats - Young Able Voices</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Condition-specific support groups for Apraxia, Dyslexia, POTS, and more."/>`);
  });
  Hero($$renderer, {
    title: "Specialized Chats",
    subtitle: "Connect with others who share your specific challenges"
  });
  $$renderer.push(`<!----> `);
  Section($$renderer, {
    children: ($$renderer2) => {
      Container($$renderer2, {
        children: ($$renderer3) => {
          $$renderer3.push(`<p class="mb-12 text-center text-lg leading-relaxed text-foreground/80">Our specialized chats bring together kids with specific conditions. These focused groups allow for deeper
			connections and more targeted support.</p> <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
          const each_array = ensure_array_like(specializedGroups);
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let group = each_array[$$index];
            FeatureCard($$renderer3, spread_props([group]));
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
              $$renderer4.push(`<!---->Don't See Your Condition?`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> <p class="mt-4 leading-relaxed text-foreground/80">We're always looking to expand our programs! Let us know if there's a specific condition you'd like support
			for.</p> `);
          Button_1($$renderer3, {
            href: "/contact",
            class: "mt-6",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->Suggest a Group`);
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
