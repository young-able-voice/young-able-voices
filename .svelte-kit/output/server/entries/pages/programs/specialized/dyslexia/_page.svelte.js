import { h as head } from "../../../../../chunks/index.js";
import { a as Button_1 } from "../../../../../chunks/Button.js";
import "clsx";
import { C as Container } from "../../../../../chunks/Container.js";
import { H as Heading } from "../../../../../chunks/Heading.js";
import { H as Hero, S as Section } from "../../../../../chunks/Section.js";
import { S as Separator } from "../../../../../chunks/separator.js";
function _page($$renderer) {
  head("w8iwwk", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Dyslexia Support - Young Able Voices</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Support group for kids with dyslexia and reading challenges."/>`);
  });
  Hero($$renderer, {
    title: "Dyslexia Support",
    subtitle: "Navigate reading challenges together"
  });
  $$renderer.push(`<!----> `);
  Section($$renderer, {
    children: ($$renderer2) => {
      Container($$renderer2, {
        size: "sm",
        children: ($$renderer3) => {
          Heading($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->About Our Dyslexia Group`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> <div class="mt-6 space-y-4"><p class="text-lg leading-relaxed text-foreground/80">Dyslexia affects how your brain processes words, but it doesn't define your intelligence or potential.
				Our dyslexia support group is a place to connect with others who understand the challenges and celebrate
				the unique strengths that come with thinking differently.</p></div>`);
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
              $$renderer4.push(`<!---->Join the Dyslexia Group`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> <p class="mt-4 leading-relaxed text-foreground/80">Connect with peers who understand. Sign up to get notified about upcoming sessions.</p> `);
          Button_1($$renderer3, {
            href: "/contact",
            class: "mt-6",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->Sign Up`);
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
