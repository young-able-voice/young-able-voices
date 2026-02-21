import { h as head } from "../../../../chunks/index.js";
import { a as Button_1 } from "../../../../chunks/Button.js";
import { C as Card } from "../../../../chunks/card.js";
import "clsx";
import { C as Container } from "../../../../chunks/Container.js";
import { H as Heading } from "../../../../chunks/Heading.js";
import { H as Hero, S as Section } from "../../../../chunks/Section.js";
import { S as Separator } from "../../../../chunks/separator.js";
function _page($$renderer) {
  head("15do9gs", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Weekly Chats - Young Able Voices</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Join our weekly video chats to connect with peers facing similar challenges."/>`);
  });
  Hero($$renderer, {
    title: "Weekly Chats & Videos",
    subtitle: "Connect, share, and grow together"
  });
  $$renderer.push(`<!----> `);
  Section($$renderer, {
    children: ($$renderer2) => {
      Container($$renderer2, {
        size: "sm",
        children: ($$renderer3) => {
          Heading($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->How It Works`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> <div class="mt-6 space-y-4"><p class="text-lg leading-relaxed text-foreground/80">Each week we have a specific video posted to get the chat rolling. This video will be posted a few days
				prior to each chat and will give you an idea of where the conversation will begin.</p> <p class="leading-relaxed text-foreground/80">When you join, you can certainly just listen in if you feel a little shy—no problem! When you feel like
				you would like to share and speak to the group, you are always welcome too.</p></div>`);
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
        children: ($$renderer3) => {
          Heading($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->Expectations for Weekly Chats`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> `);
          Card($$renderer3, {
            class: "mt-6 p-6",
            children: ($$renderer4) => {
              $$renderer4.push(`<ul class="space-y-3"><li class="flex items-start gap-3"><span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">1</span> <span class="text-foreground/80">Be respectful and kind to everyone in the group</span></li> <li class="flex items-start gap-3"><span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">2</span> <span class="text-foreground/80">Listen when others are sharing—everyone's voice matters</span></li> <li class="flex items-start gap-3"><span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">3</span> <span class="text-foreground/80">What's shared in the group stays in the group—keep it confidential</span></li> <li class="flex items-start gap-3"><span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">4</span> <span class="text-foreground/80">It's okay to just listen! You don't have to share if you're not comfortable</span></li> <li class="flex items-start gap-3"><span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">5</span> <span class="text-foreground/80">Parents are welcome to join and support their kids</span></li> <li class="flex items-start gap-3"><span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">6</span> <span class="text-foreground/80">Have fun and make new friends!</span></li></ul>`);
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
              $$renderer4.push(`<!---->Ready to Join?`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> <p class="mt-4 leading-relaxed text-foreground/80">Fill out our interest form and we'll get back to you with upcoming chat times and details.</p> `);
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
