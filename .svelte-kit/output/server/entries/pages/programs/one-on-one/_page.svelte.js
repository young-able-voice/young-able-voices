import { h as head } from "../../../../chunks/index.js";
import { a as Button_1 } from "../../../../chunks/Button.js";
import { C as Card_1 } from "../../../../chunks/Card2.js";
import "clsx";
import { C as Container } from "../../../../chunks/Container.js";
import { H as Heading } from "../../../../chunks/Heading.js";
import { H as Hero, S as Section } from "../../../../chunks/Section.js";
import { S as Separator } from "../../../../chunks/separator.js";
function _page($$renderer) {
  head("17bc98q", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>One-on-One Meetings - Young Able Voices</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Personal support sessions for when you need individual attention."/>`);
  });
  Hero($$renderer, {
    title: "One-on-One Meetings",
    subtitle: "Personal support when you need it"
  });
  $$renderer.push(`<!----> `);
  Section($$renderer, {
    children: ($$renderer2) => {
      Container($$renderer2, {
        size: "sm",
        children: ($$renderer3) => {
          Heading($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->Individual Support`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> <div class="mt-6 space-y-4"><p class="text-lg leading-relaxed text-foreground/80">Sometimes you might want to talk one-on-one rather than in a group setting. That's completely okay! We
				offer individual meetings for those who prefer personal attention.</p> <p class="leading-relaxed text-foreground/80">Whether you're nervous about joining a group chat, have specific questions, or just want someone to
				listen, we're here for you.</p></div> <div class="mt-8 grid gap-6 sm:grid-cols-2">`);
          Card_1($$renderer3, {
            class: "p-6",
            children: ($$renderer4) => {
              $$renderer4.push(`<h3 class="text-lg font-semibold">What to Expect</h3> <ul class="mt-4 space-y-2 text-sm text-foreground/80"><li>• A friendly, no-pressure conversation</li> <li>• Someone who understands what you're going through</li> <li>• Tips and suggestions based on real experience</li> <li>• Complete confidentiality</li></ul>`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> `);
          Card_1($$renderer3, {
            class: "p-6",
            children: ($$renderer4) => {
              $$renderer4.push(`<h3 class="text-lg font-semibold">How to Schedule</h3> <ul class="mt-4 space-y-2 text-sm text-foreground/80"><li>• Reach out via email or our contact form</li> <li>• Let us know what you'd like to discuss</li> <li>• We'll find a time that works for both of us</li> <li>• Parents are welcome to join!</li></ul>`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----></div>`);
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
              $$renderer4.push(`<!---->Schedule a Meeting`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> <p class="mt-4 leading-relaxed text-foreground/80">Send us an email or fill out our contact form to request a one-on-one meeting.</p> `);
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
