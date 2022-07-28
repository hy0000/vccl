import vue from '@vitejs/plugin-vue'
import voie from 'vite-plugin-voie'

/**
 * @type {import('vite').UserConfig}
 */
import vitePluginDirInfo from "./plugin/vite-plugin-dir-info.js";

const base = "/vccl/"

export default {
  plugins: [vue(), voie(), vitePluginDirInfo(base)],
  base: base
}
