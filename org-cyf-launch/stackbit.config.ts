export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  ssgName: "hugo",
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],
      models: [
        {
          type: "page",
          label: "Home",
          file: "_index.md",
          fields: [{ name: "description", type: "string", required: false }],
        },
      ],
    }),
  ],
  // other properties...
});
