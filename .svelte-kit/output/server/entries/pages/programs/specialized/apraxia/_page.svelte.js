import { h as head } from "../../../../../chunks/index.js";
import { a as Button_1 } from "../../../../../chunks/Button.js";
import { C as Card } from "../../../../../chunks/card.js";
import "clsx";
import { C as Container } from "../../../../../chunks/Container.js";
import { H as Heading } from "../../../../../chunks/Heading.js";
import { H as Hero, S as Section } from "../../../../../chunks/Section.js";
import { S as Separator } from "../../../../../chunks/separator.js";
function _page($$renderer) {
  head("1cygcmj", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Apraxia Weekly Chats - Young Able Voices</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Weekly support chats for kids with childhood apraxia of speech (CAS)."/>`);
  });
  Hero($$renderer, {
    title: "Apraxia Weekly Chats",
    subtitle: "Connect with others who understand speech challenges"
  });
  $$renderer.push(`<!----> `);
  Section($$renderer, {
    children: ($$renderer2) => {
      Container($$renderer2, {
        size: "sm",
        children: ($$renderer3) => {
          Heading($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->About Our Apraxia Group`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> <div class="mt-6 space-y-4"><p class="text-lg leading-relaxed text-foreground/80">Childhood apraxia of speech (CAS) can feel isolating, but you're not alone. Our weekly apraxia chats
				bring together kids who understand what it's like to work hard on speech sounds.</p> <p class="leading-relaxed text-foreground/80">Whether you want to share your progress, talk about challenges, or just hang out with others who "get
				it," this is the place for you.</p></div> `);
          Card($$renderer3, {
            class: "mt-8 p-6",
            children: ($$renderer4) => {
              $$renderer4.push(`<h3 class="text-lg font-semibold">What We Talk About</h3> <ul class="mt-4 grid gap-2 text-sm sm:grid-cols-2"><li class="flex items-center gap-2 text-foreground/80"><span class="text-primary">•</span> Speech practice tips</li> <li class="flex items-center gap-2 text-foreground/80"><span class="text-primary">•</span> Dealing with frustration</li> <li class="flex items-center gap-2 text-foreground/80"><span class="text-primary">•</span> Celebrating progress</li> <li class="flex items-center gap-2 text-foreground/80"><span class="text-primary">•</span> School experiences</li> <li class="flex items-center gap-2 text-foreground/80"><span class="text-primary">•</span> Making friends</li> <li class="flex items-center gap-2 text-foreground/80"><span class="text-primary">•</span> Self-advocacy</li></ul>`);
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
              $$renderer4.push(`<!---->Join the Apraxia Chat`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> <p class="mt-4 leading-relaxed text-foreground/80">Ready to connect? Fill out our interest form and we'll send you details about upcoming sessions.</p> `);
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
