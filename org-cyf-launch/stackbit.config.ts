import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "^0.6.0",
  ssgName: "hugo",
  nodeVersion: "20",
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],
      models: [
        {
          name: "Home",
          type: "page",
          urlPath: "/",
          filePath: "content/_index.md",
          fields: [{ name: "title", type: "string", required: true }],
        },
      ],
    }),
  ],
});
