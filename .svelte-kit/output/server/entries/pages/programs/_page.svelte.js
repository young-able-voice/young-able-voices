import { h as head, e as ensure_array_like, b as spread_props } from "../../../chunks/index.js";
import { a as Button_1 } from "../../../chunks/Button.js";
import "clsx";
import { C as Container } from "../../../chunks/Container.js";
import { F as FeatureCard } from "../../../chunks/FeatureCard.js";
import { H as Heading } from "../../../chunks/Heading.js";
import { H as Hero, S as Section } from "../../../chunks/Section.js";
import { S as Separator } from "../../../chunks/separator.js";
function _page($$renderer) {
  const programs = [
    {
      title: "Weekly Chats",
      description: "Weekly group video chats where you can share, listen, and connect with peers who understand.",
      href: "/programs/weekly-chats",
      icon: "💬"
    },
    {
      title: "One-on-One Meetings",
      description: "Individual support sessions for when you need personal attention and conversation.",
      href: "/programs/one-on-one",
      icon: "🤝"
    },
    {
      title: "Specialized Chats",
      description: "Condition-specific groups for Apraxia, Dyslexia, POTS, and more.",
      href: "/programs/specialized",
      icon: "🎯"
    }
  ];
  head("19bqm8i", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Programs - Young Able Voices</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Explore our programs: weekly chats, one-on-one meetings, and specialized support groups."/>`);
  });
  Hero($$renderer, {
    title: "Our Programs",
    subtitle: "Find the support that's right for you"
  });
  $$renderer.push(`<!----> `);
  Section($$renderer, {
    children: ($$renderer2) => {
      Container($$renderer2, {
        children: ($$renderer3) => {
          $$renderer3.push(`<p class="mb-12 text-center text-lg leading-relaxed text-foreground/80">Whether you want to join a group chat, meet one-on-one, or connect with others who share your specific
			condition, we have a program for you.</p> <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
          const each_array = ensure_array_like(programs);
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let program = each_array[$$index];
            FeatureCard($$renderer3, spread_props([program]));
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
              $$renderer4.push(`<!---->Not Sure Where to Start?`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> <p class="mt-4 leading-relaxed text-foreground/80">Feel free to reach out! We'll help you find the right program for your needs.</p> `);
          Button_1($$renderer3, {
            href: "/contact",
            class: "mt-6",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->Contact Us`);
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
