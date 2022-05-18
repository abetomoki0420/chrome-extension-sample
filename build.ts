import { build } from "esbuild"
import { copy } from "esbuild-plugin-copy"
( async () => {
  const res = await build({
    entryPoints:["./src/background.ts"],
    bundle: true,
    outfile: "./dist/background.js",
    plugins:[
      copy({
        resolveFrom: "cwd",
        assets: {
          from: ["./public/*"],
          to: ["./dist/*"]
        }
      })
    ]
  })
})()