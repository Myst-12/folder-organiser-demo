# folder-organiser-demo

A small project that uses my npm package [folder-organiser](https://www.npmjs.com/package/folder-organiser) to clean up a messy folder, like `Downloads`.

It shows how the package can be installed from npm and reused in another project.

Package source code: [Myst-12/folder-organizer-npm](https://github.com/Myst-12/folder-organizer-npm)

## What it does

- Installs `folder-organiser` from npm as a normal dependency.
- Adds its own categories on top of the package's defaults:
  - **College** for `.pptx` `.xlsx` `.ipynb`
  - **Music** for `.mp3` `.wav`
  - **Archives** for `.zip` `.rar` `.7z`
- Shows a **preview** first, then organises the folder.
- Prints a summary of how many files went into each category.

## Try it

```bash
git clone https://github.com/Myst-12/folder-organiser-demo.git
cd folder-organiser-demo
npm install
```

Create a messy sample folder with fake files, so nothing real is touched:

```bash
npm run sample
```

See what would happen, without moving anything:

```bash
npm run preview
```

Organise it:

```bash
npm start
```

To use it on a real folder:

```bash
node index.js ~/Downloads --preview
node index.js ~/Downloads
```

## Example output

```
Organising: sample-folder

  app.js -> Code/
  assignment.py -> Code/
  dbms-notes.pdf -> Documents/
  holiday-photo.jpg -> Images/
  lecture-recording.mp4 -> Videos/
  marks.xlsx -> College/
  ml-lab.ipynb -> College/
  os-presentation.pptx -> College/
  project-backup.zip -> Archives/
  random-file.xyz -> Others/
  ...

Summary:
  Code: 2 file(s)
  Documents: 3 file(s)
  Images: 2 file(s)
  ...

Moved 14 of 14 files.
```

## How the package is used

```js
const organize = require("folder-organiser")

const myRules = {
    ...organize.defaultRules,
    College: [".pptx", ".xlsx", ".ipynb"]
}

const result = await organize("sample-folder", { preview: true, rules: myRules })
console.log(result.categories)
```

See the [folder-organiser README](https://www.npmjs.com/package/folder-organiser) for the full API.
