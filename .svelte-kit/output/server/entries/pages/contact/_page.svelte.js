import { h as head } from "../../../chunks/index.js";
import { a as Button_1 } from "../../../chunks/Button.js";
import { C as Card_1 } from "../../../chunks/Card2.js";
import "clsx";
import { C as Container } from "../../../chunks/Container.js";
import { H as Heading } from "../../../chunks/Heading.js";
import { H as Hero, S as Section } from "../../../chunks/Section.js";
import { E as External_link } from "../../../chunks/external-link.js";
function _page($$renderer) {
  head("1bv7ezn", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Contact - Young Able Voices</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Get in touch with Young Able Voices. We'd love to hear from you!"/>`);
  });
  Hero($$renderer, { title: "Contact Us", subtitle: "We'd love to hear from you" });
  $$renderer.push(`<!----> `);
  Section($$renderer, {
    children: ($$renderer2) => {
      Container($$renderer2, {
        size: "sm",
        children: ($$renderer3) => {
          Card_1($$renderer3, {
            class: "p-6 sm:p-8",
            children: ($$renderer4) => {
              Heading($$renderer4, {
                size: "sm",
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->Interest Form`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!----> <p class="mt-4 leading-relaxed text-foreground/80">Ready to get started? Fill out our interest form to sign up for programs or ask questions.</p> <div class="mt-6 flex flex-col gap-3 sm:flex-row">`);
              Button_1($$renderer4, {
                href: "https://docs.google.com/forms/d/e/1FAIpQLScYMC1owhE6MqyXYKN45B0KV0FINmKoAo3X60qY-APDQDxq1g/viewform",
                size: "lg",
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->Open Interest Form `);
                  External_link($$renderer5, { class: "h-4 w-4" });
                  $$renderer5.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!----> `);
              Button_1($$renderer4, {
                href: "mailto:elina@youngablevoices.com",
                variant: "outline",
                size: "lg",
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->Send Email`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!----></div>`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> <p class="mt-6 text-center text-sm text-muted-foreground">Please understand that I am a college student with a very active calendar and may not be able to reply each day, but will do my best within 48-72 hours.</p>`);
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
