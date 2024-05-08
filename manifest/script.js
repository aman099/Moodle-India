import { TemplateEngine } from "./templateEngine.js";
import { JsonToHtml } from "./jsonToHtml.js";

// let docpageData = {
//   ul: {
//     items: [
//       {
//         type: "link",
//         icon: "fa-solid fa-magnifying-glass",
//       },
//       {
//         type: "span",
//         icons: [
//           "fa-solid fa-ellipsis",
//           "fa-solid fa-ellipsis",
//           "fa-solid fa-ellipsis",
//         ],
//       },
//       {
//         type: "link",
//         icon: "fa-regular fa-user",
//       },
//     ],
//   },
//   ul: {
//     items: [
//       {
//         link: {
//           icon: "fa-solid fa-magnifying-glass",
//           href: "#",
//         },
//       },
//       {
//         spans: [
//           { icon: "fa-solid fa-ellipsis" },
//           { icon: "fa-solid fa-ellipsis" },
//           { icon: "fa-solid fa-ellipsis" },
//         ],
//       },
//       {
//         link: {
//           icon: "fa-regular fa-user",
//           href: "#",
//         },
//       },
//     ],
//   },
//   label: {
//     for: "nav-check",
//     children: [
//       { span: { icon: "fa-solid fa-magnifying-glass" } },
//       { span: {} },
//       { span: {} },
//     ],
//   },
//   carousel: {
//     items: [
//       {
//         id: "c-1",
//         imageSrc: "./assets/carousel_1.webp",
//       },
//       {
//         id: "c-2",
//         imageSrc: "./assets/carousel_2.webp",
//       },
//       {
//         id: "c-3",
//         imageSrc: "./assets/carousel_3.webp",
//       },
//       {
//         id: "c-4",
//         imageSrc: "./assets/carousel_4.webp",
//       },
//     ],
//   },
//   footer: {
//     sections: [
//       {
//         title: "Solutions",
//         items: [
//           "Corporate LMS – On-premises (BizLMS)",
//           "Education LMS – On Premises (CobaltLMS)",
//           "Moodle Workplace – SaaS hosted",
//           "Moodle LMS",
//         ],
//       },
//       {
//         title: "Services",
//         items: ["Customisation", "Hosting", "Support and Training"],
//       },
//       {
//         title: "Customers",
//         items: [
//           "K-12",
//           "Higher Education",
//           "Vocational Training",
//           "Workplace",
//           "Government",
//           "Healthcare",
//           "IT & Technology",
//         ],
//       },
//       {
//         title: "Certified Integrations",
//         items: ["LearnerScript", "Zatuk", "Other Certified Integrations"],
//       },
//       {
//         title: "About Us",
//         items: [
//           "About us",
//           "Open Source",
//           "Moodle's AI principles",
//           "Blog",
//           "Events",
//           "Careers",
//         ],
//       },
//     ],
//   },
//   followUs: [
//     {
//       platform: "Facebook",
//       iconClass: "fa-brands fa-facebook-f",
//     },
//     {
//       platform: "LinkedIn",
//       iconClass: "fa-brands fa-linkedin-in",
//     },
//     {
//       platform: "Twitter",
//       iconClass: "fa-brands fa-twitter",
//     },
//     {
//       platform: "YouTube",
//       iconClass: "fa-brands fa-youtube",
//     },
//     {
//       platform: "Instagram",
//       iconClass: "fa-brands fa-square-instagram",
//     },
//   ],
// };

// Template-1

// const docPageTemplate = {
//   div: {
//     class: "overlay",
//     children: [
//       {
//         div: {
//           class: "input-overlay-container",
//           children: [
//             {
//               input: {
//                 type: "text",
//                 placeholder: "Enter your keywords...",
//               },
//             },
//           ],
//         },
//       },
//       {
//         span: {
//           children: [
//             {
//               i: {
//                 class: "fa-solid fa-x",
//               },
//             },
//           ],
//         },
//       },
//       {
//         span: {
//           children: [
//             {
//               i: {
//                 class: "fa-solid fa-x",
//               },
//             },
//           ],
//         },
//       },
//     ],
//   },
//   div: {
//     class: "overlay",
//     children: [
//       {
//         div: {
//           class: "input-overlay-container",
//           children: [
//             {
//               input: {
//                 type: "text",
//                 placeholder: "Enter your keywords...",
//               },
//             },
//           ],
//         },
//       },
//       {
//         span1: {
//           children: [
//             {
//               i: {
//                 class: "fa-solid fa-x",
//               },
//             },
//           ],
//         },
//       },
//       {
//         span2: {
//           children: [
//             {
//               i: {
//                 class: "fa-solid fa-x",
//               },
//             },
//           ],
//         },
//       },
//     ],
//   },
//   div: {
//     class: "navbar",
//     children: [
//       {
//         div: {
//           class: "navbar-container",
//           children: [
//             {
//               nav: {
//                 id: "nav_1",
//                 class: "container is-fullhd",
//                 children: [
//                   { header: {} },
//                   { input: { type: "checkbox", id: "nav-check" } },
//                   {
//                     div: {
//                       children: [
//                         {
//                           label: {
//                             for: "nav-check",
//                             children: [
//                               {
//                                 comment:
//                                   '<!-- <span><i class="fa-solid fa-magnifying-glass"></i></span> -->',
//                               },
//                               {
//                                 comment:
//                                   "<!-- <span></span>\n<span></span> -->",
//                               },
//                             ],
//                           },
//                         },
//                       ],
//                     },
//                   },
//                   {
//                     ul: {
//                       children: [
//                         {
//                           li: {
//                             a: {
//                               href: "#",
//                               children: [
//                                 {
//                                   i: { class: "fa-solid fa-magnifying-glass" },
//                                 },
//                               ],
//                             },
//                           },
//                         },
//                         {
//                           li: {
//                             span: {
//                               children: [
//                                 { i: { class: "fa-solid fa-ellipsis" } },
//                               ],
//                             },
//                           },
//                         },
//                         {
//                           li: {
//                             span: {
//                               children: [
//                                 { i: { class: "fa-solid fa-ellipsis" } },
//                               ],
//                             },
//                           },
//                         },
//                         {
//                           li: {
//                             span: {
//                               children: [
//                                 { i: { class: "fa-solid fa-ellipsis" } },
//                               ],
//                             },
//                           },
//                         },
//                         {
//                           li: {
//                             a: {
//                               href: "#",
//                               children: [
//                                 { i: { class: "fa-regular fa-user" } },
//                               ],
//                             },
//                           },
//                         },
//                       ],
//                     },
//                   },
//                 ],
//               },
//             },
//           ],
//         },
//       },
//       {
//         div: {
//           class: "navbar-container-2",
//           children: [
//             {
//               nav: {
//                 id: "nav_2",
//                 class: "container is-fullhd",
//                 children: [
//                   {
//                     header: {
//                       children: [
//                         { img: { src: "./assets/moodle-logo-svg.svg" } },
//                       ],
//                     },
//                   },
//                   {
//                     ul: {
//                       children: [
//                         {
//                           li: {
//                             details: {
//                               class: "dropdown",
//                               summary: "Solutions",
//                               children: [
//                                 {
//                                   ul: {
//                                     role: "nav-drop",
//                                     children: [
//                                       {
//                                         li: {
//                                           a: {
//                                             href: "#",
//                                             children: [
//                                               "Corporate LMS - On-premises (BizLMS)",
//                                             ],
//                                           },
//                                         },
//                                       },
//                                       {
//                                         li: {
//                                           a: {
//                                             href: "#",
//                                             children: [
//                                               "Education LMS – On Premises (CobaltLMS)",
//                                             ],
//                                           },
//                                         },
//                                       },
//                                       {
//                                         li: {
//                                           a: {
//                                             href: "#",
//                                             children: [
//                                               "Moodle Workplace – SaaS hosted",
//                                             ],
//                                           },
//                                         },
//                                       },
//                                       {
//                                         li: {
//                                           a: {
//                                             href: "#",
//                                             children: ["Moodle LMS"],
//                                           },
//                                         },
//                                       },
//                                     ],
//                                   },
//                                 },
//                               ],
//                             },
//                           },
//                         },
//                         {
//                           li: {
//                             details: {
//                               class: "dropdown",
//                               summary: "Services",
//                               children: [
//                                 {
//                                   ul: {
//                                     role: "nav-drop",
//                                     children: [
//                                       {
//                                         li: {
//                                           a: {
//                                             href: "#",
//                                             children: ["Customization"],
//                                           },
//                                         },
//                                       },
//                                       {
//                                         li: {
//                                           a: {
//                                             href: "#",
//                                             children: ["Hosting"],
//                                           },
//                                         },
//                                       },
//                                       {
//                                         li: {
//                                           a: {
//                                             href: "#",
//                                             children: ["Support and Training"],
//                                           },
//                                         },
//                                       },
//                                     ],
//                                   },
//                                 },
//                               ],
//                             },
//                           },
//                         },
//                         {
//                           li: {
//                             details: {
//                               class: "dropdown",
//                               summary: "Customers",
//                               children: [
//                                 {
//                                   ul: {
//                                     role: "nav-drop",
//                                     children: [
//                                       {
//                                         li: {
//                                           a: { href: "#", children: ["K12"] },
//                                         },
//                                       },
//                                       {
//                                         li: {
//                                           a: {
//                                             href: "#",
//                                             children: ["Higher Education"],
//                                           },
//                                         },
//                                       },
//                                       {
//                                         li: {
//                                           a: {
//                                             href: "#",
//                                             children: ["Vocational Training"],
//                                           },
//                                         },
//                                       },
//                                       {
//                                         li: {
//                                           a: {
//                                             href: "#",
//                                             children: ["Workspace"],
//                                           },
//                                         },
//                                       },
//                                     ],
//                                   },
//                                 },
//                               ],
//                             },
//                           },
//                         },
//                         {
//                           li: {
//                             details: {
//                               class: "dropdown",
//                               summary: "Certified Integrations",
//                               children: [
//                                 {
//                                   ul: {
//                                     role: "nav-drop",
//                                     children: [
//                                       {
//                                         li: {
//                                           a: {
//                                             href: "#",
//                                             children: ["Learner script"],
//                                           },
//                                         },
//                                       },
//                                       {
//                                         li: {
//                                           a: { href: "#", children: ["Zatuk"] },
//                                         },
//                                       },
//                                       {
//                                         li: {
//                                           a: {
//                                             href: "#",
//                                             children: [
//                                               "Other Certified Integrations",
//                                             ],
//                                           },
//                                         },
//                                       },
//                                     ],
//                                   },
//                                 },
//                               ],
//                             },
//                           },
//                         },
//                         {
//                           li: {
//                             details: {
//                               class: "dropdown",
//                               summary: "About us",
//                               children: [
//                                 {
//                                   ul: {
//                                     role: "nav-drop",
//                                     children: [
//                                       {
//                                         li: {
//                                           a: {
//                                             href: "#",
//                                             children: ["About us"],
//                                           },
//                                         },
//                                       },
//                                       {
//                                         li: {
//                                           a: { href: "#", children: ["Blog"] },
//                                         },
//                                       },
//                                       {
//                                         li: {
//                                           a: {
//                                             href: "#",
//                                             children: ["Events"],
//                                           },
//                                         },
//                                       },
//                                       {
//                                         li: {
//                                           a: {
//                                             href: "#",
//                                             children: ["Careers"],
//                                           },
//                                         },
//                                       },
//                                     ],
//                                   },
//                                 },
//                               ],
//                             },
//                           },
//                         },
//                       ],
//                     },
//                   },
//                   {
//                     div: {
//                       class: "nav-btn",
//                       children: [
//                         {
//                           label: {
//                             for: "nav-check",
//                             children: [
//                               {
//                                 span: {
//                                   children: [
//                                     {
//                                       i: {
//                                         class: "fa-solid fa-magnifying-glass",
//                                       },
//                                     },
//                                   ],
//                                 },
//                               },
//                               { span: {} },
//                               { span: {} },
//                             ],
//                           },
//                         },
//                       ],
//                     },
//                   },
//                   {
//                     ul: {
//                       children: [
//                         {
//                           li: {
//                             button: {
//                               class: "outlined-btn btn",
//                               children: ["Contact Us"],
//                             },
//                           },
//                         },
//                       ],
//                     },
//                   },
//                 ],
//               },
//             },
//           ],
//         },
//       },
//     ],
//   },
//   div: {
//     class: "hero-section stars flex-center",
//     children: [
//       {
//         div: {
//           class: "hero-left",
//           children: [
//             {
//               h1: {
//                 class: "hero-title",
//                 children: [
//                   "Create engaging ",
//                   { br: {} },
//                   "online education ",
//                   { span: { children: ["experiences."] } },
//                 ],
//               },
//             },
//             {
//               p: {
//                 class: "hero-subtitle",
//                 children: [
//                   "The world’s most trusted and customisable online learning platform is now in India. ",
//                   { br: {} },
//                   "Explore our range of flexible LMS solutions and services to help you maximise learner ",
//                   { br: {} },
//                   "outcomes.",
//                 ],
//               },
//             },
//             {
//               div: {
//                 class: "btn-container",
//                 children: [
//                   {
//                     button: {
//                       class: "outlined-btn btn btn-2",
//                       children: [
//                         "Get in touch ",
//                         {
//                           span: {
//                             children: [
//                               { i: { class: "fa-solid fa-arrow-right" } },
//                             ],
//                           },
//                         },
//                       ],
//                     },
//                   },
//                 ],
//               },
//             },
//           ],
//         },
//       },
//       {
//         div: {
//           class: "hero-right",
//           children: [
//             {
//               img: {
//                 src: "./assets/hero-right-img.webp",
//                 alt: "",
//               },
//             },
//           ],
//         },
//       },
//     ],
//   },
//   section: {
//     id: "section",
//     class: "section-1 container is-fullhd",
//     children: [
//       {
//         div: {
//           class: "section-container",
//           children: [
//             {
//               div: {
//                 class: "heading-container",
//                 children: [{ h2: "Solutions" }],
//               },
//             },
//             {
//               div: {
//                 class: "section-content display-flex-2x2-wrap",
//                 children: [
//                   {
//                     div: {
//                       class: "img-container",
//                       children: [
//                         {
//                           img: { src: "./assets/section-1_left.webp", alt: "" },
//                         },
//                       ],
//                     },
//                   },
//                   {
//                     div: {
//                       class: "section-right",
//                       children: [
//                         {
//                           h3: {
//                             children: [
//                               "Corporate LMS for ",
//                               { br: {} },
//                               "employee training ",
//                               { br: {} },
//                               "and onboarding",
//                             ],
//                           },
//                         },
//                         {
//                           p: {
//                             children: [
//                               "Moodle BizLMS is our on-premise LMS designed for the rapidly changing learning and development needs of Indian corporations. With custom-friendly and scalable features, Moodle BizLMS is your solution for employee training, onboarding and compliance.",
//                             ],
//                           },
//                         },
//                         {
//                           button: {
//                             class: "outlined-btn btn btn-2",
//                             children: [
//                               "View more ",
//                               {
//                                 span: {
//                                   children: [
//                                     { i: { class: "fa-solid fa-arrow-right" } },
//                                   ],
//                                 },
//                               },
//                             ],
//                           },
//                         },
//                       ],
//                     },
//                   },
//                 ],
//               },
//             },
//           ],
//         },
//       },
//     ],
//   },
//   section: {
//     id: "section",
//     class: "section-2 container is-fullhd",
//     children: [
//       {
//         div: {
//           class: "section-container",
//           children: [
//             {
//               div: {
//                 class: "heading-container",
//                 children: [{ comment: "<!-- <h2>Solutions</h2> -->" }],
//               },
//             },
//             {
//               div: {
//                 class: "section-content is-flex-direction-row-reverse",
//                 children: [
//                   {
//                     div: {
//                       class: "img-container",
//                       children: [
//                         {
//                           img: {
//                             src: "./assets/section-2_right.webp",
//                             alt: "",
//                           },
//                         },
//                       ],
//                     },
//                   },
//                   {
//                     div: {
//                       class: "section-right",
//                       children: [
//                         {
//                           h3: {
//                             children: [
//                               "Higher education ",
//                               { br: {} },
//                               "LMS on-premise ",
//                               { br: {} },
//                               "Indian solution",
//                             ],
//                           },
//                         },
//                         {
//                           p: {
//                             children: [
//                               "Moodle BizLMS is our on-premise LMS designed for the rapidly changing learning and development needs of Indian corporations. With custom-friendly and scalable features, Moodle BizLMS is your solution for employee training, onboarding and compliance.",
//                             ],
//                           },
//                         },
//                         {
//                           button: {
//                             class: "outlined-btn btn btn-2",
//                             children: [
//                               "View more ",
//                               {
//                                 span: {
//                                   children: [
//                                     { i: { class: "fa-solid fa-arrow-right" } },
//                                   ],
//                                 },
//                               },
//                             ],
//                           },
//                         },
//                       ],
//                     },
//                   },
//                 ],
//               },
//             },
//           ],
//         },
//       },
//     ],
//   },
//   section: {
//     id: "section",
//     class: "section-1 section-1_2",
//     children: [
//       {
//         div: {
//           class: "section-container container is-fullhd",
//           children: [
//             {
//               div: {
//                 class: "heading-container",
//                 comment: "<!-- <h2>Solutions</h2> -->",
//               },
//             },
//             {
//               div: {
//                 class: "section-content",
//                 children: [
//                   {
//                     div: {
//                       class: "img-container",
//                       children: [
//                         {
//                           img: {
//                             src: "./assets/laptop_1.webp",
//                             alt: "",
//                           },
//                         },
//                       ],
//                     },
//                   },
//                   {
//                     div: {
//                       class: "section-right",
//                       children: [
//                         {
//                           h3: {
//                             children: [
//                               "Custom Moodle ",
//                               { br: {} },
//                               "solutions for your ",
//                               { br: {} },
//                               "unique challenges",
//                             ],
//                           },
//                         },
//                         {
//                           ul: {
//                             children: [
//                               "Get a customised Moodle LMS solution to meet your goals and requirements",
//                               "Integrate Moodle with other platforms to create an efficient e-Learning ecosystem.",
//                               "Incorporate your branding to create an intuitive and customisable Moodle theme",
//                               "Personalise learning experiences with a branded and custom Moodle App",
//                               "Extend your online learning ecosystem",
//                               "With Certified Integrations vetted by Moodle",
//                             ].map(function (item) {
//                               return { li: item };
//                             }),
//                           },
//                         },
//                         {
//                           button: {
//                             class: "outlined-btn btn btn-2",
//                             children: [
//                               "Contact us ",
//                               {
//                                 span: {
//                                   children: [
//                                     { i: { class: "fa-solid fa-arrow-right" } },
//                                   ],
//                                 },
//                               },
//                             ],
//                           },
//                         },
//                       ],
//                     },
//                   },
//                 ],
//               },
//             },
//           ],
//         },
//       },
//     ],
//   },
//   section: {
//     id: "features",
//     class: "container is-fullhd",
//     children: [
//       {
//         div: {
//           class: "features-heading",
//           children: [
//             {
//               h3: "Supporting Indian organisations",
//               br: {},
//               span: "with services for Moodle LMS",
//             },
//           ],
//         },
//       },
//       {
//         div: {
//           class:
//             "features-container is-align-items-flex-end display-flex-2x2-wrap",
//           children: [
//             {
//               div: {
//                 class: "feature",
//                 "data-feature-type": "left",
//                 children: [
//                   {
//                     div: {
//                       class: "feature-img",
//                       children: [
//                         {
//                           img: {
//                             src: "./assets/svg_1.webp",
//                             alt: "Flexible Moodle hosting solutions",
//                           },
//                         },
//                       ],
//                     },
//                   },
//                   {
//                     h4: "Flexible Moodle hosting solutions",
//                   },
//                   {
//                     p: "Optimise your Moodle ecosystem by hosting it through Moodle India, enhancing the learning experience for all users. Our robust technical expertise ensures seamless operation, serving millions error-free. Explore a MoodleCloud hosting plan tailored to your organisation’s needs.",
//                   },
//                 ],
//               },
//             },
//             {
//               div: {
//                 class: "feature",
//                 "data-feature-type": "right",
//                 children: [
//                   {
//                     div: {
//                       class: "feature-img",
//                       children: [
//                         {
//                           img: {
//                             src: "./assets/svg_2.svg",
//                             alt: "Get all things Moodle",
//                           },
//                         },
//                       ],
//                     },
//                   },
//                   {
//                     h4: "Get all things Moodle",
//                   },
//                   {
//                     p: "Discover the vast potential of the Moodle ecosystem in establishing a resilient e-Learning and training environment for your organisation. Consult with us for any Moodle-related enquiries and transform Moodle LMS into the core of your learning and development initiatives.",
//                   },
//                 ],
//               },
//             },
//           ],
//         },
//       },
//     ],
//   },
//   article: {
//     id: "article",
//     class: "container is-fullhd",
//     children: [
//       {
//         div: {
//           class:
//             "article-container display-flex-2x2-wrap is-align-items-flex-start is-justify-content-space-between",
//           children: [
//             {
//               div: {
//                 class: "left-article",
//                 children: [{ h3: "Who we work with" }],
//               },
//             },
//             {
//               div: {
//                 class: "right-article",
//                 children: [
//                   {
//                     p: "We work with top-tier organisations to deliver exceptional learning outcomes through our Moodle ecosystem of products and services. Our customers vouch for the value of Moodle and our services, get Moodle today.",
//                   },
//                 ],
//               },
//             },
//           ],
//         },
//       },
//     ],
//   },
//   section: {
//     id: "carousel",
//     class: "container is-fullhd",
//     children: [
//       {
//         div: {
//           class: "right-arrow",
//           children: [
//             {
//               span: {
//                 children: [{ i: { class: "fa-solid fa-arrow-right" } }],
//               },
//             },
//           ],
//         },
//       },
//       {
//         div: {
//           class: "carousel-container",
//           children: [
//             {
//               div: {
//                 class: "c c-1",
//                 children: [
//                   {
//                     div: {
//                       class: "img-container",
//                       children: [
//                         { img: { src: "./assets/carousel_1.webp", alt: "" } },
//                       ],
//                     },
//                   },
//                 ],
//               },
//             },
//             {
//               div: {
//                 class: "c c-2",
//                 children: [
//                   {
//                     div: {
//                       class: "img-container",
//                       children: [
//                         { img: { src: "./assets/carousel_2.webp", alt: "" } },
//                       ],
//                     },
//                   },
//                 ],
//               },
//             },
//             {
//               div: {
//                 class: "c c-3",
//                 children: [
//                   {
//                     div: {
//                       class: "img-container",
//                       children: [
//                         { img: { src: "./assets/carousel_3.webp", alt: "" } },
//                       ],
//                     },
//                   },
//                 ],
//               },
//             },
//             {
//               div: {
//                 class: "c c-4",
//                 children: [
//                   {
//                     div: {
//                       class: "img-container",
//                       children: [
//                         { img: { src: "./assets/carousel_4.webp", alt: "" } },
//                       ],
//                     },
//                   },
//                 ],
//               },
//             },
//           ],
//         },
//       },
//       {
//         div: {
//           class: "left-arrow",
//           children: [
//             {
//               span: {
//                 children: [{ i: { class: "fa-solid fa-arrow-left" } }],
//               },
//             },
//           ],
//         },
//       },
//     ],
//   },
//   footer: {
//     id: "footer",
//     class: "",
//     children: [
//       {
//         div: {
//           class: "footer-container container is-fullhd",
//           children: [
//             {
//               div: {
//                 class: "logo-container",
//                 children: [
//                   {
//                     img: {
//                       src: "./assets/moodle-logo-2.svg",
//                       alt: "Moodle logo",
//                     },
//                   },
//                 ],
//               },
//             },
//             {
//               div: {
//                 class: "footer-grid-container",
//                 children: [
//                   {
//                     div: {
//                       class: "grid grid-1",
//                       children: [
//                         {
//                           ul: {
//                             children: [
//                               "Solutions",
//                               "Corporate LMS – On-premises (BizLMS)",
//                               "Education LMS – On Premises (CobaltLMS)",
//                               "Moodle Workplace – SaaS hosted",
//                               "Moodle LMS",
//                             ],
//                           },
//                         },
//                       ],
//                     },
//                   },
//                   {
//                     div: {
//                       class: "grid grid-2",
//                       children: [
//                         {
//                           ul: {
//                             children: [
//                               "Services",
//                               "Customisation",
//                               "Hosting",
//                               "Support and Training",
//                             ],
//                           },
//                         },
//                       ],
//                     },
//                   },
//                   {
//                     div: {
//                       class: "grid grid-3",
//                       children: [
//                         {
//                           ul: {
//                             children: [
//                               "Customers",
//                               "K-12",
//                               "Higher Education",
//                               "Vocational Training",
//                               "Workplace",
//                               {
//                                 ul: {
//                                   children: [
//                                     "Government",
//                                     "Healthcare",
//                                     "IT & Technology",
//                                   ],
//                                 },
//                               },
//                             ],
//                           },
//                         },
//                       ],
//                     },
//                   },
//                   {
//                     div: {
//                       class: "grid grid-4",
//                       children: [
//                         {
//                           ul: {
//                             children: [
//                               "Certified Integrations",
//                               "LearnerScript",
//                               "Zatuk",
//                               "Other Certified Integrations",
//                             ],
//                           },
//                         },
//                       ],
//                     },
//                   },
//                   {
//                     div: {
//                       class: "grid grid-5",
//                       children: [
//                         {
//                           ul: {
//                             children: [
//                               "About us",
//                               {
//                                 ul: {
//                                   children: [
//                                     "About us",
//                                     "Open Source",
//                                     "Moodle's AI principles",
//                                   ],
//                                 },
//                               },
//                               "Blog",
//                               "Events",
//                               "Careers",
//                             ],
//                           },
//                         },
//                       ],
//                     },
//                   },
//                 ],
//               },
//             },
//           ],
//         },
//       },
//       {
//         div: {
//           class: "cookie-container container is-fullhd",
//           children: [
//             {
//               div: {
//                 class: "left-cookie display-flex-2x2-wrap",
//                 children: [
//                   {
//                     div: {
//                       class: "cookie-policy",
//                       children: [{ p: "Cookies Policy" }],
//                     },
//                   },
//                   {
//                     div: {
//                       class: "privacy",
//                       children: [{ p: "Privacy Notice" }],
//                     },
//                   },
//                   {
//                     div: {
//                       class: "follow",
//                       children: [
//                         { p: "Follow us:" },
//                         {
//                           span: {
//                             children: [
//                               { i: { class: "fa-brands fa-facebook-f" } },
//                             ],
//                           },
//                         },
//                         {
//                           span: {
//                             children: [
//                               { i: { class: "fa-brands fa-linkedin-in" } },
//                             ],
//                           },
//                         },
//                         {
//                           span: {
//                             children: [
//                               { i: { class: "fa-brands fa-twitter" } },
//                             ],
//                           },
//                         },
//                         {
//                           span: {
//                             children: [
//                               { i: { class: "fa-brands fa-youtube" } },
//                             ],
//                           },
//                         },
//                         {
//                           span: {
//                             children: [
//                               { i: { class: "fa-brands fa-square-instagram" } },
//                             ],
//                           },
//                         },
//                         { span: " " },
//                       ],
//                     },
//                   },
//                 ],
//               },
//             },
//             { div: { class: "right-cookie" } },
//           ],
//         },
//       },
//     ],
//   },
//   bottom: {
//     class: "bottom",
//     children: [
//       {
//         div: {
//           class: "bottom-container container is-fullhd",
//           children: [
//             {
//               p: "Copyright © 2024 Moodle All rights reserved",
//             },
//           ],
//         },
//       },
//     ],
//   },
// };

// Template-2
// const docPageTemplate = {
//   navbar: {
//     links: [
//       { icon: "fa-solid fa-magnifying-glass", url: "#" },
//       { icon: "fa-solid fa-ellipsis", url: "#" },
//       { icon: "fa-solid fa-ellipsis", url: "#" },
//       { icon: "fa-solid fa-ellipsis", url: "#" },
//       { icon: "fa-regular fa-user", url: "#" },
//     ],
//     buttons: [
//       { text: "Contact Us", class: "outlined-btn btn", action: "contact" },
//     ],
//   },
//   hero_section: {
//     title: "Create engaging online education experiences.",
//     subtitle:
//       "The world’s most trusted and customizable online learning platform is now in India. Explore our range of flexible LMS solutions and services to help you maximize learner outcomes.",
//     button: {
//       text: "Get in touch",
//       class: "outlined-btn btn btn-2",
//       action: "get_in_touch",
//     },
//   },
//   sections: [
//     {
//       id: "section-1",
//       title: "Solutions",
//       content: {
//         img_url: "./assets/section-1_left.webp",
//         description:
//           "Moodle BizLMS is our on-premise LMS designed for the rapidly changing learning and development needs of Indian corporations. With custom-friendly and scalable features, Moodle BizLMS is your solution for employee training, onboarding, and compliance.",
//       },
//       button: {
//         text: "View more",
//         class: "outlined-btn btn btn-2",
//         action: "view_more",
//       },
//     },
//     {
//       id: "section-2",
//       title: "Solutions",
//       content: {
//         img_url: "./assets/section-2_right.webp",
//         description:
//           "Moodle BizLMS is our on-premise LMS designed for the rapidly changing learning and development needs of Indian corporations. With custom-friendly and scalable features, Moodle BizLMS is your solution for employee training, onboarding, and compliance.",
//       },
//       button: {
//         text: "View more",
//         class: "outlined-btn btn btn-2",
//         action: "view_more",
//       },
//     },
//     {
//       id: "section-1_2",
//       title: "Solutions",
//       content: {
//         img_url: "./assets/laptop_1.webp",
//         description:
//           "Get a customized Moodle LMS solution to meet your goals and requirements. Integrate Moodle with other platforms to create an efficient e-Learning ecosystem. Incorporate your branding to create an intuitive and customizable Moodle theme. Personalize learning experiences with a branded and custom Moodle App. Extend your online learning ecosystem with Certified Integrations vetted by Moodle.",
//       },
//       button: {
//         text: "Contact us",
//         class: "outlined-btn btn btn-2",
//         action: "contact_us",
//       },
//     },
//   ],
//   features: [
//     {
//       title: "Flexible Moodle hosting solutions",
//       img_url: "./assets/svg_1.webp",
//       description:
//         "Optimize your Moodle ecosystem by hosting it through Moodle India, enhancing the learning experience for all users. Our robust technical expertise ensures seamless operation, serving millions error-free. Explore a MoodleCloud hosting plan tailored to your organization’s needs.",
//     },
//     {
//       title: "Get all things Moodle",
//       img_url: "./assets/svg_2.svg",
//       description:
//         "Discover the vast potential of the Moodle ecosystem in establishing a resilient e-Learning and training environment for your organization. Consult with us for any Moodle-related enquiries and transform Moodle LMS into the core of your learning and development initiatives.",
//     },
//   ],
//   article: {
//     title: "Who we work with",
//     content:
//       "We work with top-tier organizations to deliver exceptional learning outcomes through our Moodle ecosystem of products and services. Our customers vouch for the value of Moodle and our services, get Moodle today.",
//   },
//   footer: {
//     links: {
//       solutions: [
//         "Corporate LMS – On-premises (BizLMS)",
//         "Education LMS – On Premises (CobaltLMS)",
//         "Moodle Workplace – SaaS hosted",
//         "Moodle LMS",
//       ],
//       services: ["Customization", "Hosting", "Support and Training"],
//       customers: [
//         "K-12",
//         "Higher Education",
//         "Vocational Training",
//         "Workplace",
//       ],
//       certified_integrations: [
//         "LearnerScript",
//         "Zatuk",
//         "Other Certified Integrations",
//       ],
//       about_us: [
//         "About us",
//         "Open Source",
//         "Moodle's AI principles",
//         "Blog",
//         "Events",
//         "Careers",
//       ],
//     },
//     policies: {
//       cookies: "Cookies Policy",
//       privacy: "Privacy Notice",
//     },
//     social_media: [
//       "fa-facebook-f",
//       "fa-linkedin-in",
//       "fa-twitter",
//       "fa-youtube",
//       "fa-square-instagram",
//     ],
//     copyright: "Copyright © 2024 Moodle All rights reserved",
//   },
// };

let docpageData = {};

// Template-3
const docPageTemplate = {
  tag: "div",
  children: [
    {
      tag: "div",
      attributes: {
        class: "overlay",
      },
      children: [
        {
          tag: "div",
          attributes: {
            class: "input-overlay-container",
          },
          children: [
            {
              tag: "input",
              attributes: {
                type: "text",
                placeholder: "Enter your keywords...",
              },
            },
          ],
        },
        {
          tag: "span",
          attributes: {
            class: "",
          },
          children: [
            {
              tag: "i",
              attributes: {
                class: "fa-solid fa-x",
              },
            },
          ],
        },
      ],
    },
    {
      tag: "div",
      attributes: {
        class: "navbar",
      },
      children: [
        {
          tag: "div",
          attributes: {
            class: "navbar-container",
          },
          children: [
            {
              tag: "nav",
              attributes: {
                id: "nav_1",
                class: "container is-fullhd",
              },
              children: [
                {
                  tag: "header",
                },
                {
                  tag: "input",
                  attributes: {
                    type: "checkbox",
                    id: "nav-check",
                  },
                },
                {
                  tag: "div",
                  attributes: {
                    class: "",
                  },
                  children: [
                    {
                      type: "label",
                      attributes: {
                        for: "nav-check",
                      },
                    },
                  ],
                },
                {
                  tag: "ul",
                  attributes: {
                    class: "",
                  },
                  children: [
                    {
                      tag: "li",
                      children: [
                        {
                          tag: "a",
                          attributes: {
                            href: "#",
                          },
                          children: [
                            {
                              tag: "i",
                              attributes: {
                                class: "fa-solid fa-magnifying-glass",
                              },
                            },
                          ],
                        },
                      ],
                    },
                    {
                      tag: "li",
                      children: [
                        {
                          tag: "span",
                          children: [
                            {
                              tag: "i",
                              attributes: {
                                class: "fa-solid fa-ellipsis",
                              },
                            },
                          ],
                        },
                        {
                          tag: "span",
                          children: [
                            {
                              tag: "i",
                              attributes: {
                                class: "fa-solid fa-ellipsis",
                              },
                            },
                          ],
                        },
                        {
                          tag: "span",
                          children: [
                            {
                              tag: "i",
                              attributes: {
                                class: "fa-solid fa-ellipsis",
                              },
                            },
                          ],
                        },
                      ],
                    },
                    {
                      tag: "li",
                      children: [
                        {
                          tag: "a",
                          attributes: {
                            href: "#",
                          },
                          children: [
                            {
                              tag: "i",
                              attributes: {
                                class: "fa-regular fa-user",
                              },
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          tag: "div",
          attributes: {
            class: "navbar-container-2",
          },
          children: [
            {
              tag: "nav",
              attributes: {
                id: "nav_2",
                class: "container is-fullhd",
              },
              children: [
                {
                  tag: "header",
                  children: [
                    {
                      tag: "img",
                      attributes: {
                        src: "./assets/moodle-logo-svg.svg",
                      },
                    },
                  ],
                },
                {
                  tag: "ul",
                  children: [
                    {
                      tag: "li",
                      children: [
                        {
                          tag: "details",
                          attributes: {
                            class: "dropdown",
                          },
                          children: [
                            {
                              tag: "summary",
                              content: "Solutions",
                            },
                            {
                              tag: "ul",
                              attributes: {
                                role: "nav-drop",
                              },
                              children: [
                                {
                                  tag: "li",
                                  children: [
                                    {
                                      tag: "a",
                                      attributes: {
                                        href: "#",
                                      },
                                      content:
                                        "Corporate LMS - On-premises (BizLMS)",
                                    },
                                  ],
                                },
                                {
                                  tag: "li",
                                  children: [
                                    {
                                      tag: "a",
                                      attributes: {
                                        href: "#",
                                      },
                                      content:
                                        "Education LMS – On Premises (CobaltLMS)",
                                    },
                                  ],
                                },
                                {
                                  tag: "li",
                                  children: [
                                    {
                                      tag: "a",
                                      attributes: {
                                        href: "#",
                                      },
                                      content: "Moodle Workplace – SaaS hosted",
                                    },
                                  ],
                                },
                                {
                                  tag: "li",
                                  children: [
                                    {
                                      tag: "a",
                                      attributes: {
                                        href: "#",
                                      },
                                      content: "Moodle LMS",
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      tag: "li",
                      children: [
                        {
                          tag: "details",
                          attributes: {
                            class: "dropdown",
                          },
                          children: [
                            {
                              tag: "summary",
                              content: "Services",
                            },
                            {
                              tag: "ul",
                              attributes: {
                                role: "nav-drop",
                              },
                              children: [
                                {
                                  tag: "li",
                                  children: [
                                    {
                                      tag: "a",
                                      attributes: {
                                        href: "#",
                                      },
                                      content: "Customization",
                                    },
                                  ],
                                },
                                {
                                  tag: "li",
                                  children: [
                                    {
                                      tag: "a",
                                      attributes: {
                                        href: "#",
                                      },
                                      content: "Hosting",
                                    },
                                  ],
                                },
                                {
                                  tag: "li",
                                  children: [
                                    {
                                      tag: "a",
                                      attributes: {
                                        href: "#",
                                      },
                                      content: "Support and Training",
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      tag: "li",
                      children: [
                        {
                          tag: "details",
                          attributes: {
                            class: "dropdown",
                          },
                          children: [
                            {
                              tag: "summary",
                              content: "Customers",
                            },
                            {
                              tag: "ul",
                              attributes: {
                                role: "nav-drop",
                              },
                              children: [
                                {
                                  tag: "li",
                                  children: [
                                    {
                                      tag: "a",
                                      attributes: {
                                        href: "#",
                                      },
                                      content: "K12",
                                    },
                                  ],
                                },
                                {
                                  tag: "li",
                                  children: [
                                    {
                                      tag: "a",
                                      attributes: {
                                        href: "#",
                                      },
                                      content: "Higher Education",
                                    },
                                  ],
                                },
                                {
                                  tag: "li",
                                  children: [
                                    {
                                      tag: "a",
                                      attributes: {
                                        href: "#",
                                      },
                                      content: "Vocational Training",
                                    },
                                  ],
                                },
                                {
                                  tag: "li",
                                  children: [
                                    {
                                      tag: "a",
                                      attributes: {
                                        href: "#",
                                      },
                                      content: "Workspace",
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      tag: "li",
                      children: [
                        {
                          tag: "details",
                          attributes: {
                            class: "dropdown",
                          },
                          children: [
                            {
                              tag: "summary",
                              content: "Certified Integrations",
                            },
                            {
                              tag: "ul",
                              attributes: {
                                role: "nav-drop",
                              },
                              children: [
                                {
                                  tag: "li",
                                  children: [
                                    {
                                      tag: "a",
                                      attributes: {
                                        href: "#",
                                      },
                                      content: "Learner script",
                                    },
                                  ],
                                },
                                {
                                  tag: "li",
                                  children: [
                                    {
                                      tag: "a",
                                      attributes: {
                                        href: "#",
                                      },
                                      content: "Zatuk",
                                    },
                                  ],
                                },
                                {
                                  tag: "li",
                                  children: [
                                    {
                                      tag: "a",
                                      attributes: {
                                        href: "#",
                                      },
                                      content: "Other Certified Integrations",
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      tag: "li",
                      children: [
                        {
                          tag: "details",
                          attributes: {
                            class: "dropdown",
                          },
                          children: [
                            {
                              tag: "summary",
                              content: "About us",
                            },
                            {
                              tag: "ul",
                              attributes: {
                                role: "nav-drop",
                              },
                              children: [
                                {
                                  tag: "li",
                                  children: [
                                    {
                                      tag: "a",
                                      attributes: {
                                        href: "#",
                                      },
                                      content: "About us",
                                    },
                                  ],
                                },
                                {
                                  tag: "li",
                                  children: [
                                    {
                                      tag: "a",
                                      attributes: {
                                        href: "#",
                                      },
                                      content: "Blog",
                                    },
                                  ],
                                },
                                {
                                  tag: "li",
                                  children: [
                                    {
                                      tag: "a",
                                      attributes: {
                                        href: "#",
                                      },
                                      content: "Events",
                                    },
                                  ],
                                },
                                {
                                  tag: "li",
                                  children: [
                                    {
                                      tag: "a",
                                      attributes: {
                                        href: "#",
                                      },
                                      content: "Careers",
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  tag: "div",
                  attributes: {
                    class: "nav-btn",
                  },
                  children: [
                    {
                      tag: "label",
                      attributes: {
                        for: "nav-check",
                      },
                      children: [
                        {
                          tag: "span",
                          children: [
                            {
                              tag: "i",
                              attributes: {
                                class: "fa-solid fa-magnifying-glass",
                              },
                            },
                          ],
                        },
                        {
                          tag: "span",
                        },
                        {
                          tag: "span",
                        },
                      ],
                    },
                  ],
                },
                {
                  tag: "ul",
                  children: [
                    {
                      tag: "li",
                      children: [
                        {
                          tag: "button",
                          attributes: {
                            class: "outlined-btn btn",
                          },
                          content: "Contact Us",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      tag: "div",
      attributes: {
        class: "hero-section stars flex-center",
      },
      children: [
        {
          tag: "div",
          attributes: {
            class: "hero-left",
          },
          children: [
            {
              tag: "h1",
              attributes: {
                class: "hero-title",
              },
              content:
                "Create engaging <br /> <span>online education</span> <br /> experiences.",
            },
            {
              tag: "p",
              attributes: {
                class: "hero-subtitle",
              },
              content:
                "The world’s most trusted and customisable online learning platform is now in India. <br /> Explore our range of flexible LMS solutions and services to help you maximise learner <br /> outcomes.",
            },
            {
              tag: "div",
              attributes: {
                class: "btn-container",
              },
              children: [
                {
                  tag: "button",
                  attributes: {
                    class: "outlined-btn btn btn-2",
                  },
                  content:
                    'Get in touch <span><i class="fa-solid fa-arrow-right"></i></span>',
                },
              ],
            },
          ],
        },
        {
          tag: "div",
          attributes: {
            class: "hero-right",
          },
          children: [
            {
              tag: "img",
              attributes: {
                src: "./assets/hero-right-img.webp",
                alt: "Hero section Image",
              },
            },
          ],
        },
      ],
    },
    {
      tag: "section",
      attributes: {
        id: "section",
        class: "section-1 container is-fullhd",
      },
      children: [
        {
          tag: "div",
          attributes: {
            class: "section-container",
          },
          children: [
            {
              tag: "div",
              attributes: {
                class: "heading-container",
              },
              children: [
                {
                  tag: "h2",
                  content: "Solutions",
                },
              ],
            },
            {
              tag: "div",
              attributes: {
                class: "section-content display-flex-2x2-wrap",
              },
              children: [
                {
                  tag: "div",
                  attributes: {
                    class: "img-container",
                  },
                  children: [
                    {
                      tag: "img",
                      attributes: {
                        src: "./assets/section-1_left.webp",
                        alt: "Laptop",
                      },
                    },
                  ],
                },
                {
                  tag: "div",
                  attributes: {
                    class: "section-right",
                  },
                  children: [
                    {
                      tag: "h3",
                      content:
                        "Corporate LMS for <br /> employee training <br/> and onboarding",
                    },
                    {
                      tag: "p",
                      content:
                        "Moodle BizLMS is our on-premise LMS designed for the rapidly changing learning and development needs of corporations. With custom-friendly and scalable features, Moodle is your solution for employee training, onboarding and compliance.",
                    },
                    {
                      tag: "button",
                      attributes: {
                        class: "outlined-btn btn btn-2",
                      },
                      content:
                        'View more <span><i class="fa-solid fa-arrow-right"></i></span>',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      tag: "section",
      attributes: {
        id: "section",
        class: "section-2 container is-fullhd",
      },
      children: [
        {
          tag: "div",
          attributes: {
            class: "section-container",
          },
          children: [
            {
              tag: "div",
              attributes: {
                class: "heading-container",
              },
            },
            {
              tag: "div",
              attributes: {
                class: "section-content is-flex-direction-row-reverse",
              },
              children: [
                {
                  tag: "div",
                  attributes: {
                    class: "img-container",
                  },
                  children: [
                    {
                      tag: "img",
                      attributes: {
                        src: "./assets/section-2_right.webp",
                        alt: "Laptop",
                      },
                    },
                  ],
                },
                {
                  tag: "div",
                  attributes: {
                    class: "section-right",
                  },
                  children: [
                    {
                      tag: "h3",
                      content:
                        "Higher education <br /> LMS on-premise <br /> Indian solution",
                    },
                    {
                      tag: "p",
                      content:
                        "Built on Moodle LMS, our unique end-to-end on-premise solution for Indian higher education institutions delivers engaging online learning experiences and supports efficient academic and administrative processes. Moodle CobaltLMS will move you beyond delivering traditional classroom experiences to providing e-Learning experiences that will improve the way you teach and your students learn.",
                    },
                    {
                      tag: "button",
                      attributes: {
                        class: "outlined-btn btn btn-2",
                      },
                      content:
                        'View more <span><i class="fa-solid fa-arrow-right"></i></span>',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      tag: "section",
      attributes: {
        id: "section",
        class: "section-1 section-1_2",
      },
      children: [
        {
          tag: "div",
          attributes: {
            class: "section-container container is-fullhd",
          },
          children: [
            {
              tag: "div",
              attributes: {
                class: "heading-container",
              },
            },
            {
              tag: "div",
              attributes: {
                class: "section-content",
              },
              children: [
                {
                  tag: "div",
                  attributes: {
                    class: "img-container",
                  },
                  children: [
                    {
                      tag: "img",
                      attributes: {
                        src: "./assets/laptop_1.webp",
                        alt: "Laptop",
                      },
                    },
                  ],
                },
                {
                  tag: "div",
                  attributes: {
                    class: "section-right",
                  },
                  children: [
                    {
                      tag: "h3",
                      content:
                        "Custom Moodle <br /> solutions for your <br /> unique challenges",
                    },
                    {
                      tag: "ul",
                      children: [
                        {
                          tag: "li",
                          content:
                            "Get a customised Moodle LMS solution to meet your goals and requirements",
                        },
                        {
                          tag: "li",
                          content:
                            "Integrate Moodle with other platforms to create an efficient e-Learning ecosystem.",
                        },
                        {
                          tag: "li",
                          content:
                            "Incorporate your branding to create an intuitive and customisable Moodle theme",
                        },
                        {
                          tag: "li",
                          content:
                            "Personalise learning experiences with a branded and custom Moodle App",
                        },
                        {
                          tag: "li",
                          content: "Extend your online learning ecosystem",
                        },
                        {
                          tag: "li",
                          content:
                            "With Certified Integrations vetted by Moodle",
                        },
                      ],
                    },
                    {
                      tag: "button",
                      attributes: {
                        class: "outlined-btn btn btn-2",
                      },
                      content:
                        'Contact us <span><i class="fa-solid fa-arrow-right"></i></span>',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      tag: "section",
      attributes: {
        id: "features",
        class: "container is-fullhd",
      },
      children: [
        {
          tag: "div",
          attributes: {
            class: "features-heading",
          },
          children: [
            {
              tag: "h3",
              content:
                "Supporting Indian organisations <br /> with services for Moodle LMS",
            },
          ],
        },
        {
          tag: "div",
          attributes: {
            class:
              "features-container is-align-items-flex-end display-flex-2x2-wrap",
          },
          children: [
            {
              tag: "div",
              attributes: {
                class: "feature left-feature",
              },
              children: [
                {
                  tag: "div",
                  attributes: {
                    class: "feature-img",
                  },
                  children: [
                    {
                      tag: "img",
                      attributes: {
                        src: "./assets/svg_1.webp",
                        alt: "Person",
                      },
                    },
                  ],
                },
                {
                  tag: "h4",
                  content: "Flexible Moodle hosting solutions",
                },
                {
                  tag: "p",
                  content:
                    "Optimise your Moodle ecosystem by hosting it through Moodle India, enhancing the learning experience for all users. Our robust technical expertise ensures seamless operation, millions error-free. Explore a MoodleCloud hosting plan tailored your organisation’s needs.",
                },
              ],
            },
            {
              tag: "div",
              attributes: {
                class: "feature right-feature",
              },
              children: [
                {
                  tag: "div",
                  attributes: {
                    class: "feature-img",
                  },
                  children: [
                    {
                      tag: "img",
                      attributes: {
                        src: "./assets/svg_2.svg",
                        alt: "Person",
                      },
                    },
                  ],
                },
                {
                  tag: "h4",
                  content: "Get all things Moodle",
                },
                {
                  tag: "p",
                  content:
                    "Discover the vast potential of the Moodle ecosystem in establishing a resilient e-Learning and training environment for your organisation. Consult with us for any Moodle enquiries and transform Moodle LMS into the core of your learning development initiatives.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      tag: "article",
      attributes: {
        id: "article",
        class: "container is-fullhd",
      },
      children: [
        {
          tag: "div",
          attributes: {
            class:
              "article-container display-flex-2x2-wrap is-align-items-flex-start is-justify-content-space-between",
          },
          children: [
            {
              tag: "div",
              attributes: {
                class: "left-article",
              },
              children: [
                {
                  tag: "h3",
                  content: "Who we work with",
                },
              ],
            },
            {
              tag: "div",
              attributes: {
                class: "right-article",
              },
              children: [
                {
                  tag: "p",
                  content:
                    "We work with top-tier organisations to deliver exceptional learning outcomes through our Moodle ecosystem of products services. Our customers vouch for the value of Moodle and our services, Moodle today.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      tag: "section",
      attributes: {
        id: "carousel",
        class: "container is-fullhd",
      },
      children: [
        {
          tag: "div",
          attributes: {
            class: "right-arrow",
          },
          children: [
            {
              tag: "span",
              children: {
                tag: "i",
                attributes: {
                  class: "fa-solid fa-arrow-right",
                },
              },
            },
          ],
        },
        {
          tag: "div",
          attributes: {
            class: "carousel-container",
          },
          children: [
            {
              tag: "div",
              attributes: {
                class: "c c-1",
              },
              children: [
                {
                  tag: "div",
                  attributes: {
                    class: "img-container",
                  },
                  children: [
                    {
                      tag: "img",
                      attributes: {
                        src: "./assets/carousel_1.webp",
                        alt: "",
                      },
                    },
                  ],
                },
              ],
            },
            {
              tag: "div",
              attributes: {
                class: "c c-2",
              },
              children: [
                {
                  tag: "div",
                  attributes: {
                    class: "img-container",
                  },
                  children: [
                    {
                      tag: "img",
                      attributes: {
                        src: "./assets/carousel_2.webp",
                        alt: "",
                      },
                    },
                  ],
                },
              ],
            },
            {
              tag: "div",
              attributes: {
                class: "c c-3",
              },
              children: [
                {
                  tag: "div",
                  attributes: {
                    class: "img-container",
                  },
                  children: [
                    {
                      tag: "img",
                      attributes: {
                        src: "./assets/carousel_3.webp",
                        alt: "",
                      },
                    },
                  ],
                },
              ],
            },
            {
              tag: "div",
              attributes: {
                class: "c c-4",
              },
              children: [
                {
                  tag: "div",
                  attributes: {
                    class: "img-container",
                  },
                  children: [
                    {
                      tag: "img",
                      attributes: {
                        src: "./assets/carousel_4.webp",
                        alt: "",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          tag: "div",
          attributes: {
            class: "left-arrow",
          },
          children: [
            {
              tag: "span",
              children: [
                {
                  tag: "i",
                  attributes: {
                    class: "fa-solid fa-arrow-right",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      tag: "footer",
      attributes: {
        id: "footer",
        class: "",
      },
      children: [
        {
          tag: "div",
          attributes: { class: "footer-container container is-fullhd" },
          children: [
            {
              tag: "div",
              attributes: {
                class: "logo-container",
              },
              children: [
                {
                  tag: "img",
                  attributes: {
                    src: "./assets/moodle-logo-2.svg",
                    alt: "Moodle logo",
                  },
                },
              ],
            },
            {
              tag: "div",
              attributes: {
                class: "footer-grid-container",
              },
              children: [
                {
                  tag: "div",
                  attributes: {
                    class: "grid grid-1",
                  },
                  children: [
                    {
                      tag: "ul",
                      children: [
                        {
                          tag: "li",
                          attributes: {
                            class: "title",
                          },
                          content: "Solutions",
                        },
                        {
                          tag: "li",
                          content: "Corporate LMS – On-premises (BizLMS)",
                        },
                        {
                          tag: "li",
                          content: "Education LMS – On Premises (CobaltLMS)",
                        },
                        {
                          tag: "li",
                          content: "Moodle Workplace – SaaS hosted",
                        },
                        {
                          tag: "li",
                          content: "Moodle LMS",
                        },
                      ],
                    },
                  ],
                },
                {
                  tag: "div",
                  attributes: {
                    class: "grid grid-2",
                  },
                  children: [
                    {
                      tag: "ul",
                      children: [
                        {
                          tag: "li",
                          attributes: {
                            class: "title",
                          },
                          content: "Services",
                        },
                        {
                          tag: "li",
                          content: "Customisation",
                        },
                        {
                          tag: "li",
                          content: "Hosting",
                        },
                        {
                          tag: "li",
                          content: "Support and Training",
                        },
                      ],
                    },
                  ],
                },
                {
                  tag: "div",
                  attributes: {
                    class: "grid grid-3",
                  },
                  children: [
                    {
                      tag: "ul",
                      children: [
                        {
                          tag: "li",
                          attributes: {
                            class: "title",
                          },
                          content: "Customers",
                        },
                        {
                          tag: "li",
                          content: "K-12",
                        },
                        {
                          tag: "li",
                          content: "Higher Education",
                        },
                        {
                          tag: "li",
                          content: "Vocational Training",
                        },
                        {
                          tag: "li",
                          content: "Workplace",
                        },
                        {
                          tag: "ul",
                          children: [
                            {
                              tag: "li",
                              content: "Government",
                            },
                            {
                              tag: "li",
                              content: "Healthcare",
                            },
                            {
                              tag: "li",
                              content: "IT & Technology",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  tag: "div",
                  attributes: {
                    class: "grid grid-4",
                  },
                  children: [
                    {
                      tag: "ul",
                      children: [
                        {
                          tag: "li",
                          attributes: {
                            class: "title",
                          },
                          content: "Certified Integrations",
                        },
                        {
                          tag: "li",
                          content: "LearnerScript",
                        },
                        {
                          tag: "li",
                          content: "Zatuk",
                        },
                        {
                          tag: "li",
                          content: "Other Certified Integrations",
                        },
                      ],
                    },
                  ],
                },
                {
                  tag: "div",
                  attributes: {
                    class: "grid grid-5",
                  },
                  children: [
                    {
                      tag: "ul",
                      children: [
                        {
                          tag: "li",
                          attributes: {
                            class: "title",
                          },
                          content: "About us",
                        },
                        {
                          tag: "li",
                          content: "About us",
                        },
                        {
                          tag: "ul",
                          children: [
                            {
                              tag: "li",
                              content: "Open Source",
                            },
                            {
                              tag: "li",
                              content: "Moodle's AI principles",
                            },
                          ],
                        },
                        {
                          tag: "li",
                          content: "Blog",
                        },
                        {
                          tag: "li",
                          content: "Events",
                        },
                        {
                          tag: "li",
                          content: "Career",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          tag: "div",
          attributes: { class: "cookie-container container is-fullhd" },
          children: [
            {
              tag: "div",
              attributes: {
                class: "left-cookie display-flex-2x2-wrap",
              },
              children: [
                {
                  tag: "div",
                  attributes: {
                    class: "cookie-policy",
                  },
                  children: [
                    {
                      tag: "p",
                      content: "Cookies Policy",
                    },
                  ],
                },
                {
                  tag: "div",
                  attributes: {
                    class: "privacy",
                  },
                  children: [
                    {
                      tag: "p",
                      content: "Privacy Notice",
                    },
                  ],
                },
                {
                  tag: "div",
                  attributes: {
                    class: "follow",
                  },
                  children: [
                    {
                      tag: "p",
                      content: "Follow us:",
                    },
                    {
                      tag: "span",
                      children: [
                        {
                          tag: "i",
                          attributes: { class: "fa-brands fa-facebook-f" },
                        },
                      ],
                    },
                    {
                      tag: "span",
                      children: [
                        {
                          tag: "i",
                          attributes: { class: "fa-brands fa-linkedin-in" },
                        },
                      ],
                    },
                    {
                      tag: "span",
                      children: [
                        {
                          tag: "i",
                          attributes: { class: "fa-brands fa-twitter" },
                        },
                      ],
                    },
                    {
                      tag: "span",
                      children: [
                        {
                          tag: "i",
                          attributes: { class: "fa-brands fa-youtube" },
                        },
                      ],
                    },
                    {
                      tag: "span",
                      children: [
                        {
                          tag: "i",
                          attributes: {
                            class: "fa-brands fa-square-instagram",
                          },
                        },
                      ],
                    },
                    {
                      tag: "span",
                    },
                  ],
                },
              ],
            },
            {
              tag: "div",
              attributes: {
                class: "right-cookie",
              },
            },
          ],
        },
      ],
    },
    {
      tag: "div",
      attributes: {
        class: "bottom",
      },
      children: [
        {
          tag: "div",
          attributes: {
            class: "bottom-container container is-fullhd",
          },
          children: [
            {
              tag: "p",
              content: "Copyright © 2024 Moodle All rights reserved",
            },
          ],
        },
      ],
    },
  ],
};

let temp = TemplateEngine.populate(docPageTemplate, docpageData);
console.log(temp);

let html = JsonToHtml.convert(temp);
console.log(html);
document.getElementById("app").innerHTML = html;

////////////////////////////////////////////////////////////////////////

// const inputContainer = document.querySelector(
//   "#nav .nav-container .middle-nav .input-container"
// );
// const inputEl = document.querySelector(
//   "#nav .nav-container .middle-nav .input-container input"
// );
// const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");

// inputContainer.addEventListener("click", () => {
//   modal.classList.add("active");
//   overlay.classList.add("active");
//   inputEl.blur();
// });

// document.addEventListener(
//   "click",
//   (e) => {
//     if (e.target.matches(".modal")) return;
//   },
//   { once: true }
// );

// overlay.addEventListener("click", (e) => {
//   modal.classList.remove("active");
//   overlay.classList.remove("active");
// });

// // Active toggle
// const firstToggleBtnEls = document.querySelectorAll(
//   ".toggle-btn-container .first-toggle .toggle-first"
// );
// const firstToggleContasiner = document.querySelector(
//   ".toggle-btn-container .first-toggle"
// );

// const secondToggleBtnEls = document.querySelectorAll(
//   ".toggle-btn-container .second-toggle .toggle-first"
// );
// const secondToggleContasiner = document.querySelector(
//   ".toggle-btn-container .second-toggle"
// );

// firstToggleBtnEls.forEach((firstToggleBtnEl) => {
//   firstToggleBtnEl.addEventListener("click", () => {
//     document
//       .querySelector(".toggle-btn-container .first-toggle .toggle-first.active")
//       ?.classList.remove("active");
//     firstToggleBtnEl.classList.add("active");
//   });
// });

// secondToggleBtnEls.forEach((secondToggleBtnEl) => {
//   secondToggleBtnEl.addEventListener("click", () => {
//     document
//       .querySelector(
//         ".toggle-btn-container .second-toggle .toggle-first.active"
//       )
//       ?.classList.remove("active");
//     secondToggleBtnEl.classList.add("active");
//   });
// });

// // Dropdown popup
// const dropdownBtn = document.querySelector(".dropdown-attribute");
// const dropdownContainer = document.querySelector(".toggle-dropdown-container");

// dropdownBtn.addEventListener("click", (e) => {
//   dropdownContainer.classList.toggle("active");
// });

// const dropDown1 = document.querySelector(".dropd-1");
// const dropDown2 = document.querySelector(".dropd-2");
// const darkModeDropDown = document.querySelector(".darkmode-droppdown-popup");
// const versionModeDropDown = document.querySelector(".version-droppdown-popup");

// dropDown1.addEventListener("click", () => {
//   versionModeDropDown.classList.toggle("active");
// });

// dropDown2.addEventListener("click", () => {
//   darkModeDropDown.classList.toggle("active");
// });
