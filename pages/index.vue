<template>
  <div class="container m-auto">
    <div class="lg:flex justify-between items-center">
      <div class="lg:w-6/12 lg:p-0 p-7">
        <h1 class="text-4xl font-bold leading-tight mb-5 capitalize">
          FULLSTACK DEV
        </h1>
        <p class="text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, facere
          itaque! Sint aspernatur fuga dolorum quis dolorem. Itaque, natus
          dolorem cumque, distinctio quibusdam soluta et dolores vitae esse
          deleniti exercitationem.
        </p>

        <div class="py-5">
          <!-- <a
            href="#"
            class="text-white rounded-full py-2 px-5 text-lg font-semibold bg-purple-600 inline-block border border-purple-600 mr-3"
            >Try for free</a
          > -->
          <a
            href="#"
            class="text-black rounded-full py-2 px-5 text-lg font-semibold bg-gray-400 inline-block border hover:bg-white hover:text-black"
            >Lorem ipsum</a
          >
        </div>
      </div>
      <div class="lg:w-5/12 order-2">
        <img
          src="../assets/img/IMG_3874.JPG"
          style="
            transform: scale(1) perspective(1040px) rotateY(-11deg)
              rotateX(2deg) rotate(2deg);
          "
          alt=""
          class="rounded"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
