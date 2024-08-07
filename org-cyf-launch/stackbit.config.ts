// stackbit.config.ts
import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],
      models: [
        {
          name: "homePage",
          type: "page",
          urlPath: "/",
          filePath: "content/_index.md",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "description", type: "string" },
            { name: "layout", type: "string" },
            { name: "emoji", type: "string" },
            { name: "map", type: "list" },
            { name: "weight", type: "number" },
          ],
        },
        {
          name: "sprint1Prep",
          type: "page",
          urlPath: "/sprints/1/prep/",
          filePath: "sprints/1/prep/index.md",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "description", type: "string" },
            { name: "layout", type: "string" },
            { name: "emoji", type: "string" },
            { name: "map", type: "list" },
            { name: "weight", type: "number" },
            {
              name: "blocks",
              type: "object",
              fields: [
                { name: "name", type: "string" },
                { name: "src", type: "string" },
              ],
            },
          ],
        },
      ],
      assetsConfig: {
        referenceType: "static",
        staticDir: "static",
        uploadDir: "uploaded",
        publicPath: "/uploaded/",
      },
    }),
  ],
});
