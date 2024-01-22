import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "src/content/page",
        format:"mdx",
        fields: [
          {
            type: 'image',
            label: 'Hero image',
            name: 'heroImage',
          },
          {
            type: 'datetime',
            name: 'pubDate',
            label: 'pubDate'
          },
          {
            type: 'datetime',
            name: 'updatedDate',
            label: 'updatedDate'
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },

          {
            type: 'boolean',
            name: 'Draft',
            label: 'draft'
          }
          
        ],
      },
      {
        name: "post",
        label: "Posts",
        path: "src/content/blog",
        format:"mdx",
        fields: [
          {
            type: 'image',
            label: 'Hero image',
            name: 'heroImage',
          },
          {
            type: 'datetime',
            name: 'pubDate',
            label: 'pubDate'
          },
          {
            type: 'datetime',
            name: 'updatedDate',
            label: 'updatedDate'
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },

          {
            type: 'boolean',
            name: 'Draft',
            label: 'draft'
          }
          
        ],
      },
    ],
  },
});
