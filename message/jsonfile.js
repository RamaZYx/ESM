import fs from "fs"
export const _scommand = () => {
JSON.parse(fs.readFileSync('../database/scommand.json'))
}
/*export async function commandsDB(JSON.parse(fs.readFileSync('../database/commands.json')))*/
