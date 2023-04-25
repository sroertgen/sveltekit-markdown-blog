import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/kit/vite";
import "dotenv/config";

const dev = process.argv.includes("dev");
console.log("dev", dev);
console.log("process.env.BASE_PATH", process.env.BASE_PATH);

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [
    vitePreprocess(),
    preprocess({
      postcss: true,
    }),
  ],

  kit: {
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: "build",
      assets: "build",
      fallback: null,
      precompress: false,
      strict: false,
    }),
    paths: {
      base:  dev ? '' : `/${process.env.BASE_PATH}`,
    },
  },
};

export default config;
