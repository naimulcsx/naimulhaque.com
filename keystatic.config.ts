import { collection, config, fields } from "@keystatic/core";
import { block, inline } from "@keystatic/core/content-components";

import { createElement } from "react";

import { MathFormula } from "@/components/math-formula";
import { MathInline } from "@/components/math-inline";

export const markdocConfig = fields.markdoc.createMarkdocConfig({});

export default config({
  storage: {
    kind: "local"
  },
  singletons: {
    config: {
      label: "Site Config",
      path: "content/config",
      schema: {
        siteTitle: fields.text({
          label: "Site Title",
          validation: { length: { min: 1 } }
        }),
        siteAbout: fields.mdx({
          label: "Site About"
        }),
        socialProfiles: fields.array(
          fields.object({
            type: fields.select({
              label: "Type",
              options: [
                { label: "X", value: "X" },
                { label: "LinkedIn", value: "Linkedin" },
                { label: "Github", value: "Github" },
                { label: "Website", value: "website" }
              ],
              defaultValue: "X"
            }),
            url: fields.url({ label: "URL" })
          }),
          { label: "Social Profiles" }
        )
      }
    },
    uses: {
      label: "Uses Page",
      path: "content/uses",
      schema: {
        title: fields.text({
          label: "Page Title",
          validation: { length: { min: 1 } }
        }),
        description: fields.text({
          label: "Page Description",
          validation: { isRequired: true },
          multiline: true
        }),
        items: fields.array(
          fields.object({
            name: fields.text({
              label: "Item Name",
              validation: { isRequired: true }
            }),
            description: fields.text({
              label: "Item Description",
              validation: { isRequired: true }
            }),
            category: fields.select({
              label: "Category",
              options: [
                { label: "Hardware", value: "Hardware" },
                { label: "Desk Setup", value: "Desk Setup" },
                { label: "Workflow", value: "Workflow" }
              ],
              defaultValue: "Hardware"
            }),
            icon: fields.image({
              label: "Item Icon",
              directory: "public/images/uses",
              validation: { isRequired: false }
            })
          }),
          {
            label: "Items",
            itemLabel: (props) => props.fields.name.value
          }
        )
      }
    },
    about: {
      label: "About Page",
      path: "content/about",
      schema: {
        title: fields.text({
          label: "Page Title",
          validation: { length: { min: 1 } }
        }),
        description: fields.text({
          label: "Page Description",
          multiline: true
        }),
        content: fields.mdx({
          label: "Content"
        }),
        gallery: fields.array(
          fields.object({
            image: fields.image({
              label: "Gallery Image",
              directory: "public/images/about",
              validation: { isRequired: true }
            }),
            caption: fields.text({
              label: "Image Caption",
              validation: { isRequired: false }
            })
          }),
          {
            label: "Gallery",
            itemLabel: (props) => props.fields.caption.value || "Image"
          }
        )
      }
    }
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "content/posts/*",
      entryLayout: "content",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        excerpt: fields.text({ label: "Excerpt" }),
        publishedDate: fields.date({ label: "Published date" }),
        featuredImage: fields.image({
          label: "Featured Image",
          directory: "public/images/posts"
        }),
        tags: fields.array(fields.text({ label: "Tag" }), {
          label: "Tags",
          itemLabel: (props) => props.value
        }),
        content: fields.mdx({
          label: "Content",
          components: {
            MathFormula: block({
              label: "MathFormula",
              schema: {
                formula: fields.text({ label: "Formula", multiline: true })
              },
              ContentView: ({ value }) => {
                return createElement(MathFormula, {
                  formula: value.formula
                });
              }
            }),
            MathInline: inline({
              label: "MathInline",
              schema: { formula: fields.text({ label: "Formula" }) },
              ContentView: ({ value }) => {
                return createElement(MathInline, { formula: value.formula });
              }
            })
          }
        })
      }
    }),
    experiences: collection({
      label: "Experiences",
      slugField: "company",
      path: "content/experiences/*",
      schema: {
        role: fields.text({
          label: "Role/Position",
          validation: { isRequired: true }
        }),
        company: fields.slug({
          name: { label: "Company Name" }
        }),
        companyUrl: fields.url({
          label: "Company URL",
          validation: { isRequired: true }
        }),
        order: fields.integer({
          label: "Order"
        }),
        type: fields.select({
          label: "Employment Type",
          options: [
            { label: "Full Time", value: "Full Time" },
            { label: "Part Time", value: "Part Time" },
            { label: "Freelance", value: "Freelance" },
            { label: "Contract", value: "Contract" },
            { label: "Internship", value: "Internship" }
          ],
          defaultValue: "Full Time"
        }),
        location: fields.text({
          label: "Location",
          validation: { isRequired: true }
        }),
        fromDate: fields.date({
          label: "Start Date",
          validation: { isRequired: true }
        }),
        toDate: fields.date({
          label: "End Date",
          validation: { isRequired: false }
        }),
        description: fields.text({
          label: "Description",
          multiline: true
        }),
        logo: fields.image({
          label: "Logo",
          directory: "public/images/experiences"
        }),
        isCurrent: fields.checkbox({
          label: "Current Position",
          defaultValue: false
        })
      }
    }),
    snippets: collection({
      label: "Snippets",
      slugField: "title",
      path: "content/snippets/*",
      entryLayout: "content",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({
          name: { label: "Title" }
        }),
        description: fields.text({
          label: "Description",
          multiline: true,
          validation: { isRequired: true }
        }),
        publishedAt: fields.date({
          label: "Published At",
          validation: { isRequired: true }
        }),
        language: fields.multiselect({
          label: "Language",
          options: [
            { label: "JavaScript", value: "javascript" },
            { label: "TypeScript", value: "typescript" },
            { label: "Python", value: "python" },
            { label: "HTML", value: "html" },
            { label: "CSS", value: "css" },
            { label: "Dockerfile", value: "dockerfile" },
            { label: "Bash", value: "bash" }
          ],
          defaultValue: []
        }),
        content: fields.mdx({
          label: "Code"
        })
      }
    }),
    projects: collection({
      label: "Projects",
      slugField: "title",
      path: "content/projects/*",
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        description: fields.text({ label: "Description" }),
        backgroundColor: fields.text({ label: "Background Color" }),
        year: fields.integer({
          label: "Year",
          validation: { isRequired: true }
        }),
        techStack: fields.array(fields.text({ label: "Tech Stack" }), {
          label: "Tech Stack",
          itemLabel: (props) => props.value
        }),
        liveUrl: fields.url({ label: "Live URL" }),
        image: fields.image({
          label: "Image",
          directory: "public/images/projects"
        })
      }
    })
  }
});
