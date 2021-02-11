// globals
const type = process.argv[2] || null
const title = process.argv[3] || null
const slug = process.argv[3]
  ? process.argv[3].toLowerCase().replace(/ /g, '-')
  : null

const contentDir = process.cwd() + '/content'
const editor = 'code'
// globals

// check for type
const types = ['blog', 'photo', 'project']
if (!type) {
  console.log('type not provided use:', types.join(' '))
}

// check for title
if (!title) {
  console.log('title not provided')
}

// exit if no type and title
if (!type || !title) {
  console.log('usage:\r\n', "npm run create [type] '[My New Blog Title]'")
  process.exit()
}

// type and title passed, continue...

// deps
const fs = require('fs')
const { spawn } = require('child_process')

// check if template file exists
const templateFile = `${__dirname}/_${type}.md`
if (!fs.existsSync(templateFile)) {
  console.log(`template type "${type}" not found`)
  console.log('available types:', types.join(' '))
  process.exit()
}

// check if dest file exists
const dest = `${contentDir}/${type}/${slug}.md`
if (fs.existsSync(dest)) {
  console.log('content file name already exists')
  process.exit()
}

// we got a valid type, title passed, and a file of the same name does not exist, lez do it..
async function create() {
  // read _[template].md
  const templateContent = await fs.readFileSync(templateFile).toString()
  console.log('creating...')
  const newContent = templateContent
    // add title to template
    .replace(/title:/g, `title: ${title}`)
  console.log(newContent)

  // save as content/[template]/[slug].
  fs.writeFileSync(dest, newContent)

  // open file - code content/[template]/[slug].md
  const edit = spawn(editor, [dest])

  console.log('type', type)
  console.log('title', title)
  console.log('slug', slug)
}
create()
