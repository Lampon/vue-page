<template>
  <section class="lp-page">
    <section class="img-html" v-show="imgUrl == ''"></section>
    <section>
      <div class="down" @click="downImg">
        <i class="el-icon-download"></i>
        <p>下载</p>
      </div>
      <img :src="imgUrl" style="width: 800px" />
    </section>
  </section>
</template>
<script>
import html2canvas from "html2canvas";
export default {
  data() {
    return {
      imgUrl: "",
    };
  },
  mounted() {
    document.querySelector(".img-html").appendChild(this.$store.state.imgHtml);
    const shareContent = document.querySelector("#canvas");

    html2canvas(shareContent, {
      scale: 2,
      width: shareContent.offsetWidth, //设置canvas尺寸与所截图尺寸相同，防止白边
      height: shareContent.offsetHeight, //防止白边
      logging: true,
      useCORS: true,
    }).then((canvas) => {
      const base64 = canvas.toDataURL("image/jpeg", 1);

      this.imgUrl = base64;
    });
  },
  methods: {
    async downImg() {
      const imgUrl = this.imgUrl;
      // 如果浏览器支持msSaveOrOpenBlob方法（也就是使用IE浏览器的时候），那么调用该方法去下载图片
      if (window.navigator.msSaveOrOpenBlob) {
        const bstr = atob(imgUrl.split(",")[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        const blob = new Blob([u8arr]);
        window.navigator.msSaveOrOpenBlob(blob, "chart-download" + "." + "png");
      } else {
        // 这里就按照chrome等新版浏览器来处理
        const a = document.createElement("a");
        a.href = imgUrl;
        a.setAttribute("download", "download");
        a.click();
      }
    },
  },
};
</script>

<style lang="scss">
body {
  background: #666;
}
.lp-page {
  display: flex;
  justify-content: center;

  .view-content {
    width: 800px;
    background: #f5f5f5;
    box-shadow: 0 2px 6px #ccc;

    .item {
      transition: all 0.3s;
      background: #fff;

      div {
        pointer-events: none;
      }
      .wait {
        background: #deedff;
        height: 35px;
        text-align: center;
        line-height: 35px;
        font-size: 12px;
        color: #666;
      }
      .el-icon-error {
        position: absolute;
        right: -10px;
        top: -6px;
        color: red;
        font-size: 25px;
        cursor: pointer;
        display: none;
        z-index: 9999;
      }
    }
  }

  .down {
    position: fixed;
    bottom: 5%;
    right: 10%;
    width: 60px;
    height: 60px;
    background: #F56C6C;
    border-radius: 50%;
    text-align: center;
    font-size: 12px;
    color: #fff;
    cursor: pointer;
    i{
      margin-top: 5px;
      font-size: 30px;
    }
    p{
      margin: 0;
    }
  }
}
</style>