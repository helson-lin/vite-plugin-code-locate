import { Plugin } from "vite";

declare module "vite-plugin-code-locate" {
    interface Options {
        log?: boolean;
    }
    function codeLocate(options?: Partial<Options>): Plugin;
    export { codeLocate as default };
}
