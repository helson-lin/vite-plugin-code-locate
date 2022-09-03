import { Plugin } from "vite";

declare module "vite-plugin-code-locate" {
    function codeLocate(): Plugin;
    export { codeLocate as default };
}
