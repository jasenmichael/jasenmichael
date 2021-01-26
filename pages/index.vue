<template>
  <div>
    <HomeHead v-if="$route.path === '/'" class="flex-grow" />
  </div>
</template>

<script>
export default {
  // async asyncData() {
  //   const url =
  //     'https://esits.org/tumblr-json.php?url=https://beautiful-redheads.tumblr.com'
  //   const images = await fetch(url, { method: 'GET' })
  //     .then((res) => res.json())
  //     .then((res) =>
  //       res.posts
  //         .filter((post) => post.type === 'photo')
  //         .map((photo) => {
  //           return {
  //             img: photo['photo-url-1280'],
  //             imgThumb: photo['photo-url-1280'],
  //             height: photo.height,
  //             width: photo.width,
  //             view: photo.height > photo.width ? 'portrait' : 'landscape',
  //             // OG: photo,
  //           }
  //         })
  //     )
  //     .catch((error) => console.log('WTF!', error))
  //   return { images }
  // },
}
</script>
