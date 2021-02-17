<template>
  <div class="uploadPhotoItem">
    <span class="myProgress">
      <span class="plan"></span>
      30%
    </span>
    <img :src="imgSrc" />
    <span class="pictureName">
      home
    </span>
  </div>
</template>

<script>
  export default {
    name:"UploadItem",
    props: ["file"],
    data() {
      return {
        imgSrc: ""
      }
    },
    created () {
      let fileReader = new FileReader()
      fileReader.readAsDataURL(this.file)
      console.log('filereader:',fileReader)
      fileReader.onload = ()=>{
        this.imgSrc = fileReader.result
        // console.log(this.imgSrc)

      }
    },
  }
</script>

<style scoped>
.uploadPhotoItem {
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  float: left;
  margin-bottom: 30px;
  position: relative;
}

.uploadPhotoItem img {
  width: 164px;
  height: 123px;
  opacity: 1;
  background: rgb(222, 222, 222);
}

.pictureName {
  background: white;
  border: 1px solid rgb(225, 225, 225);
  text-align: center;
}

.myProgress {
  top: 50px;
  height: 24px;
  background: rgba(0, 0, 0, 0.5);
  text-align: center;
  position: absolute;
  width: 164px;
  color: white;
}
</style>