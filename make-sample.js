// Creates a messy "sample-folder" with fake files, so the demo can be tried safely
const fs = require("fs")
const path = require("path")

const folder = "sample-folder"

const fakeFiles = [
    "holiday-photo.jpg",
    "screenshot.png",
    "dbms-notes.pdf",
    "resume.docx",
    "todo.txt",
    "lecture-recording.mp4",
    "app.js",
    "assignment.py",
    "os-presentation.pptx",
    "marks.xlsx",
    "ml-lab.ipynb",
    "song.mp3",
    "project-backup.zip",
    "random-file.xyz"
]

fs.rmSync(folder, { recursive: true, force: true })
fs.mkdirSync(folder)

for (const name of fakeFiles) {
    fs.writeFileSync(path.join(folder, name), "sample file")
}

console.log(`Created ${folder}/ with ${fakeFiles.length} messy files`)
