
import type { Plugin } from "vite"
import { openCodeFile, codeLineTrack } from "./utils" 

module.exports = function codeLocate(): Plugin {
    return {
        name: 'vite:code-locate',
        apply: 'serve',
        enforce: 'pre',
        configureServer(server) {
            server.middlewares.use((req, res, next) => {
                const url = req.url;
                if(!url) return next();
                if(url.indexOf("/code/open") !== -1) {
                    const filepath = url.replace('/code/open?path=', '')
                    console.log("open by chrome debug:", filepath)
                    if(filepath) openCodeFile(filepath);
                }
                next()
            })
        },
        transform(code, id) {
            // just handler vue file
            const vueRE = /\.vue$/;
            if (!vueRE.test(id)) {
                return code;
            } else {
                return codeLineTrack(code, id)
            }
        }
    }
}

module.exports.default = module.exports;
