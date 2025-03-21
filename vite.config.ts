import { defineConfig, Plugin } from 'vite'
import react from "@vitejs/plugin-react"
import tsconfigPaths from "vite-tsconfig-paths"
import tailwindcss from "@tailwindcss/vite"
import path from 'path'
export default defineConfig({
    plugins:[react(),tsconfigPaths()],
    css:{
        postcss:{
            plugins:[tailwindcss() as any]
        }
    },
    root:path.join(__dirname,'game'),
    build:{
        emptyOutDir:true,
        copyPublicDir:true,
        sourcemap:true
    }
})