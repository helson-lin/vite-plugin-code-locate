import child_process from 'child_process'
/**
 * @description opencodeFile with file path
 * @param path file path dir
 */
export function openCodeFile(path: string): void {
    let filePath: string;
    if (process.platform === 'win32') {
        let pathBefore = __dirname.substring(0, __dirname.search('node_modules'))
        filePath = pathBefore + path
    } else {
        filePath = path
    }
    console.log("code open:", filePath)
    child_process.exec(`code -r -g ${filePath}`)
}
/**
 * @description handler template string to add code-location attrs
 * @param lineStr temaplate codeString
 * @param line code line
 * @param resourcePath sourcepath
 * @returns 
 */
export function addLineAttr(lineStr: string, line: number, resourcePath: string): string {
    let reg = /<[\w-]+/g //math html tag
    let leftTagList = lineStr.match(reg)
    if (leftTagList) {
        leftTagList = Array.from(new Set(leftTagList))
        leftTagList.forEach(item => {
            if (item && item.indexOf('template') == -1) {
                let regx = new RegExp(`${item}`, 'g')
                // add code-location attrs for vscode open
                let location = `${item} code-location="${resourcePath}:${line}"`
                lineStr = lineStr.replace(regx, location)
            }
        })
    }
    return lineStr
}

/**
* @description find vue file's template block and handler
*/
export function codeLineTrack(str: string, resourcePath: string): string {
    const reg = /^<template>[\d\D]*<\/template>$/gm
    const templateStringArr = str.match(reg)
    if (!templateStringArr) return str;
    let lineList = templateStringArr[0].split('\n')
    let newList = <string[]>[]
    lineList.forEach((item, index) => {
        newList.push(addLineAttr(item, index + 1, resourcePath))
    })
    // replace template width handledTeamplateString
    return str.replace(reg, newList.join('\n'))
}