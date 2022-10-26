import { SanityCodegenConfig } from "sanity-codegen";

const config: SanityCodegenConfig = {
  schemaPath: "./schemas/schema.js",
  outputPath: "./schemaTypes.d.ts",
};

export default config;
