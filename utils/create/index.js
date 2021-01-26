//

const template = process.argv[2]
const title = process.argv[3]
const slug = process.argv[3].toLowerCase().replace(/ /g, '-')

// read [template].md
// replace title line
// save as content/[template]/[slug].md
// open file - code content/[template]/[slug].md

console.log('creating', template, `"${title}"`)
console.log('slug', slug)
