import { defineConfig } from 'tinacms'

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main'

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID!,
  token: process.env.TINA_TOKEN!,
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'layout',
        label: 'Layout',
        path: 'content/layout',
        format: 'json',
        ui: {
          global: true,
        },
        fields: [
          {
            type: 'object',
            name: 'links',
            label: 'Links',
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.title }),
            },
            fields: [
              {
                type: 'string',
                name: 'title',
                label: 'Title',
              },
              {
                type: 'object',
                name: 'links',
                label: 'Link',
                list: true,
                ui: {
                  itemProps: (item) => ({ label: item?.title }),
                },
                fields: [
                  {
                    type: 'string',
                    name: 'title',
                    label: 'Title',
                  },
                  {
                    type: 'string',
                    name: 'href',
                    label: 'Link',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'post',
        label: 'Posts',
        path: 'content/posts',
        ui: {
          router: ({ document }) => {
            return `docs/${document._sys.filename}`
          },
        },
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'description',
            label: 'Description',
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
            templates: [
              {
                name: 'Callout',
                fields: [
                  {
                    type: 'string',
                    name: 'type',
                    options: ['warning', 'note'],
                  },
                  {
                    type: 'string',
                    name: 'title',
                  },
                  {
                    type: 'rich-text',
                    name: 'children',
                  },
                ],
              },
              {
                name: 'QuickLinks',
                fields: [
                  {
                    type: 'object',
                    list: true,
                    name: 'quickLinks',
                    ui: {
                      itemProps: (item) => {
                        return { label: item?.title }
                      },
                      defaultItem: {
                        title: 'Installation',
                        icon: 'installation',
                        href: '/',
                        description:
                          'Step-by-step guides to setting up your system and installing the library.',
                      },
                    },
                    fields: [
                      {
                        type: 'string',
                        name: 'title',
                      },
                      {
                        type: 'string',
                        name: 'href',
                      },
                      {
                        type: 'string',
                        name: 'icon',
                        options: [
                          'installation',
                          'presets',
                          'plugins',
                          'theming',
                          'lightbulb',
                          'warning',
                        ],
                      },
                      {
                        type: 'string',
                        name: 'description',
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
})
