// Cleans up a messy folder (like Downloads) using the folder-organiser package
// Usage:
//   node index.js <folder>            organise the folder
//   node index.js <folder> --preview  only show what would happen

const organize = require("folder-organiser")

// the default categories, plus some extra ones for college work
const myRules = {
    ...organize.defaultRules,
    College: [".pptx", ".xlsx", ".ipynb"],
    Music: [".mp3", ".wav"],
    Archives: [".zip", ".rar", ".7z"]
}

async function main() {
    const folder = process.argv[2] || "sample-folder"
    const preview = process.argv.includes("--preview")

    console.log(`${preview ? "Previewing" : "Organising"}: ${folder}\n`)

    const result = await organize(folder, { preview: preview, rules: myRules })

    if (result.total === 0) {
        console.log("Nothing to organise, the folder is already clean!")
        return
    }

    for (const file of result.files) {
        const renamed = file.newName !== file.file ? ` (saved as ${file.newName})` : ""
        console.log(`  ${file.file} -> ${file.category}/${renamed}`)
    }

    console.log("\nSummary:")
    for (const category in result.categories) {
        console.log(`  ${category}: ${result.categories[category]} file(s)`)
    }

    if (preview) {
        console.log(`\n${result.total} files would be moved. Run without --preview to move them.`)
    } else {
        console.log(`\nMoved ${result.moved} of ${result.total} files.`)
    }
}

main().catch(err => {
    console.log("Error:", err.message)
    process.exitCode = 1
})
