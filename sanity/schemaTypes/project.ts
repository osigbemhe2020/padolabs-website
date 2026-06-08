import { defineType, defineField, defineArrayMember, SanityDocument } from 'sanity';

interface ProjectDocument extends SanityDocument {
  meta?: {
    title?: string;
  };
}

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
   preview: {
    select: {
      title: "meta.title", // ✅ use meta.title as the display name
      subtitle: "category.name",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Untitled Project",
        subtitle: subtitle || "",
      };
    },
  },
  fields: [
    defineField({
      name: 'slug',
      title: 'Project Slug',
      type: 'slug',
      options: {
      source: (doc: ProjectDocument) => doc?.meta?.title || "", // ✅ use a function
    },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    }),

    // Meta Information
    defineField({
      name: 'meta',
      title: 'Meta Information',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required().max(100),
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          validation: (Rule) => Rule.required().max(300),
        }),
        defineField({
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{ type: 'string' }],
          validation: (Rule) => Rule.required().min(1),
        }),

        defineField({
          name: 'year',
          title: 'Year',
          type: 'string',
          validation: (Rule) => Rule.required().max(50),
        }),
        defineField({
          name: 'phase',
          title: 'Phase',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'featured',
          title: 'Featured Project',
          type: 'boolean',
          initialValue: false,
        }),
      ],
    }),

    // Hero Section
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'stack',
          title: 'Technology Stack',
          type: 'array',
          of: [{ type: 'string' }],
          validation: (Rule) => Rule.required().min(1),
        }),
        defineField({
          name: 'role',
          title: 'Role',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'timeline',
          title: 'Timeline',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'projectType',
          title: 'Project Type',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'origin',
          title: 'Origin',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'liveUrl',
          title: 'Live URL',
          type: 'url',
        }),
        defineField({
          name: 'githubUrl',
          title: 'GitHub URL',
          type: 'url',
        }),
        defineField({
          name: 'heroImage',
          title: 'Hero Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
        
      ],
    }),

    // Screenshots
    defineField({
      name: 'screenshots',
      title: 'Screenshots',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    }),

    // Context Section
    defineField({
      name: 'context',
      title: 'Context',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'intro',
          title: 'Introduction',
          type: 'text',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'body',
          title: 'Body Content',
          type: 'text',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'highlightQuote',
          title: 'Highlight Quote',
          type: 'string',
        }),
      ],
    }),

    // Goals Section
    defineField({
      name: 'goals',
      title: 'Project Goals',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'items',
          title: 'Goals',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Goal Title',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'desc',
                  title: 'Description',
                  type: 'text',
                  validation: (Rule) => Rule.required(),
                }),

              ],
            },
          ],
          validation: (Rule) => Rule.required().min(1),
        }),
      ],
    }),

    // Challenges Section
    defineField({
      name: 'challenges',
      title: 'Challenges',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'intro',
          title: 'Introduction',
          type: 'text',
        }),
        defineField({
          name: 'ChallengeImage',
          title: 'Challenge Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: 'items',
          title: 'Challenges',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Challenge Title',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                  validation: (Rule) => Rule.required(),
                }),
              ],
            },
          ],
          validation: (Rule) => Rule.required().min(1),
        }),
      ],
    }),

    // Process Section
    defineField({
      name: 'process',
      title: 'Development Process',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'steps',
          title: 'Steps',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'step',
                  title: 'Step Number',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'title',
                  title: 'Step Title',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
              ],
            },
          ],
          validation: (Rule) => Rule.required().min(1),
        }),
      ],
    }),

    // Technical Learnings Section
    defineField({
      name: 'technicalLearnings',
      title: 'Technical Learnings',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'items',
          title: 'Learning Items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Learning Title',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'body',
                  title: 'Description',
                  type: 'text',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'progress',
                  title: 'Progress (%)',
                  type: 'number',
                  validation: (Rule) => Rule.min(0).max(100),
                }),
              ],
            },
          ],
          validation: (Rule) => Rule.required().min(1),
        }),
      ],
    }),

    // Reflection Section
    defineField({
      name: 'reflection',
      title: 'Reflection',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'intro',
          title: 'Introduction',
          type: 'text',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'then',
          title: 'Then (Past)',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'points',
              title: 'Points',
              type: 'array',
              of: [{ type: 'string' }],
              validation: (Rule) => Rule.required().min(1),
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
          ],
        }),
        defineField({
          name: 'now',
          title: 'Now (Present)',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'points',
              title: 'Points',
              type: 'array',
              of: [{ type: 'string' }],
              validation: (Rule) => Rule.required().min(1),
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
          ],
        }),
        defineField({
          name: 'improvements',
          title: 'Future Improvements',
          type: 'array',
          of: [{ type: 'string' }],
        }),
      ],
    }),

    // Growth Section
    defineField({
      name: 'growth',
      title: 'Growth & Evolution',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'milestones',
          title: 'Milestones',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Milestone Title',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'status',
                  title: 'Status',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
              ],
            },
          ],
          validation: (Rule) => Rule.required().min(1),
        }),
      ],
    }),

    

    // schemas/project.ts (or wherever your document lives)



    // ── features ──────────────────────────────────────────
    defineField({
      name: 'features',
      title: 'Key Features',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Key Features',
        }),
        defineField({
          name: 'items',
          title: 'Feature Items',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Feature Title',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                  rows: 3,
                }),
              ],
              preview: {
                select: { title: 'title', subtitle: 'description' },
              },
            }),
          ],
        }),
      ],
    }),

    // ── engineeringDecisions ──────────────────────────────
    defineField({
      name: 'engineeringDecisions',
      title: 'Engineering Decisions',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Engineering Decisions',
        }),
        defineField({
          name: 'items',
          title: 'Decision Items',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({
                  name: 'decision',
                  title: 'Decision',
                  type: 'text',
                  rows: 2,
                }),
                defineField({
                  name: 'reason',
                  title: 'Reason',
                  type: 'text',
                  rows: 3,
                }),
              ],
              preview: {
                select: { title: 'decision', subtitle: 'reason' },
              },
            }),
          ],
        }),
      ],
    }),

    // ── retrospective ─────────────────────────────────────
    defineField({
      name: 'retrospective',
      title: 'Retrospective',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Retrospective',
        }),
        defineField({
          name: 'items',
          title: 'Reflections',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({
                  name: 'text',
                  title: 'Reflection',
                  type: 'text',
                  rows: 2,
                }),
              ],
              preview: {
                select: { title: 'text' },
              },
            }),
          ],
        }),
      ],
    }),

 
    // CTA Section
    defineField({
      name: 'cta',
      title: 'Call to Action',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'buttons',
          title: 'Buttons',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'url',
                  title: 'URL',
                  type: 'url',
                  validation: (Rule) => Rule.required(),
                }),
              ],
            },
          ],
          validation: (Rule) => Rule.required().min(1),
        }),
      ],
    }),
  ],
});
