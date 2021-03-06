/* eslint-disable handle-callback-err */
const fs = require('fs')
const sharp = require('sharp')
// const ExifImage = require('exif').ExifImage
const exifr = require('exifr')
const { info } = require('autoprefixer')
const srcDir = process.argv[2]
const publicPath = '/img/photos/'
const destDir = 'static' + publicPath
const contentDir = 'content/images/'

console.log('Getting images from: ', srcDir)
async function init() {
  const images = await getImagesData(srcDir)
  // console.log(images)
  //   const templateFile = `${__dirname}/_image.md`
  //   const imgTemplate = await fs.readFileSync(templateFile).toString()
  //   console.log(imgTemplate)
  await importImages(images)
}

async function getImagesData(path) {
  const imagePaths = await getImagePaths(path)
  const images = await Promise.all(
    imagePaths.map(async (image) => {
      const meta = await getMeta(image)
      // console.log(meta)

      // date stuff
      const createDate =
        (meta && meta.CreateDate) ||
        meta.CreateDate ||
        meta.ModifyDate ||
        new Date()
      const year = createDate
        .toLocaleString('default', {
          year: 'numeric',
        })
        .toString()
      //   const month = (meta.CreateDate.getMonth() + 1).toString()
      const month = createDate.toLocaleString('default', {
        month: '2-digit',
      })
      const day = createDate.toLocaleString('default', {
        day: '2-digit',
      })

      const fileExt = image
        .split('.')
        .pop()
        .toLowerCase()
        .replace('jpeg', 'jpg')

      // eslint-disable-next-line prettier/prettier
      const fileName = `${year}-${month}-${day}_${Math.floor(100000 + Math.random() * 900000)}.${fileExt}`

      // orientation
      const orientation = meta.Orientation
        ? meta.Orientation === 'Horizontal (normal)'
          ? 'landscape'
          : 'portrait'
        : meta.width >= meta.height
        ? 'landscape'
        : 'portrait'
      // HxW
      const width =
        meta.Orientation === 'Horizontal (normal)'
          ? meta.ExifImageWidth
          : meta.ExifImageHeight || meta.width
      const height =
        meta.Orientation === 'Horizontal (normal)'
          ? meta.ExifImageHeight
          : meta.ExifImageWidth || meta.height
      return {
        src: image,
        fileName: fileName.replace('.' + fileExt, ''),
        contentDest: contentDir + fileName.replace(fileExt, 'json'),
        dest: process.cwd() + '/' + destDir + '/' + fileName,
        thumbDest: process.cwd() + '/' + destDir + '/thumb-' + fileName,
        publicPath: publicPath + fileName,
        thumb: publicPath + 'thumb-' + fileName,
        orientation,
        date_taken: createDate,
        // eslint-disable-next-line prettier/prettier
        width,
        // eslint-disable-next-line prettier/prettier
        height,
        rating: null,
        // meta,
      }
    })
  )
  //   console.log(images)
  return images
}

async function getMeta(image) {
  const sharpMeta = await sharp(image).metadata()
  const exifData = await exifr.parse(image)
  // console.log(exifData)
  // console.log({ ...exifData, ...sharpMeta })
  return { ...exifData, ...sharpMeta }
}

function getImagePaths(dir) {
  return fs
    .readdirSync(dir)
    .filter((file) => {
      const ext = file.split('.').pop().toLowerCase()
      return ext.includes('jpeg') || ext.includes('jpg') || ext.includes('png')
    })
    .map((image) => {
      return dir + '/' + image
    })
}

function importImages(images) {
  images.forEach((image) => {
    // copy image from import to dest
    // fs.copyFileSync(image.src, image.dest)
    sharp(image.src, { failOnError: false })
      .withMetadata()
      // .resize({
      //   width: image.width,
      //   height: image.height,
      // })
      .rotate()
      .jpeg({ quality: 80 })
      .toFile(image.dest)
      .then((info) => {
        // save json
        const data = {
          title: '',
          caption: '',
          image: image.publicPath,
          imgThumb: image.thumb,
          gallery: false,
          // fix w-h and orientation after .rotate()
          orientation: info.width >= info.height ? 'landscape' : 'portrait',
          width: info.width,
          height: info.height,
          location: image.location || null,
          gps: image.gps || null,
          date_taken: image.date_taken || null,
          tags: [],
          author: 'jasenmichael',
          published: false,
          //   data: image,
        }
        const json = JSON.stringify(data, null, 2)
        // copy content json
        fs.writeFileSync(image.contentDest, json)
      })

    // create thumb
    sharp(image.src, { failOnError: false })
      .withMetadata()
      .rotate()
      .resize({
        // fit: sharp.fit.contain,
        width: 800,
      })
      .jpeg({ quality: 70 })
      .toFile(image.thumbDest)
  })
}

// start it
init()
