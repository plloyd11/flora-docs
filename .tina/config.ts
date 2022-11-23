import { defineConfig } from 'tinacms'

  // Your hosting provider likely exposes this as an environment variable
  const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main'

  export default defineConfig({
    branch,
    clientId: '5d559244-b281-4cbe-9ad4-9231990d0d34',
    token: 'f0b97c9933b027113ce742053e3235657cb92c76',
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
          name: 'post',
          label: 'Blog Posts',
          path: 'blog',
          fields: [
            {
              type: 'string',
              name: 'title',
              label: 'Title',
              isTitle: true,
              required: true,
            },
            {
              type: 'rich-text',
              name: 'body',
              label: 'Body',
              isBody: true,
            },
          ],
          ui: {
            // This is an DEMO router. You can remove this to fit your site
            router: ({ document }) => `/blog/${document._sys.filename}`,
          },
        },
      ],
    },
  })
