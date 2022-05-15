<template>
  <div class="tmp_page" :class="className">
    <template v-if="data.data.picList && data.data.picList.length == 3">
      <div class="lp-page__center">
        <div class="content-left">
          <div class="content-left__title">
            <div class="main-title">
              <div class="title-no">1</div>
              <div class="title-text">{{ data.data.title }}</div>
            </div>
          </div>
          <div class="content-left__sub-title">{{ data.data.subTitle }}</div>
          <div class="content-left__img">
            <div class="img-box">
              <img
                :src="data.data.picList[0].url"
                style="width: 400px; height: 225px"
                mode="aspectFit"
              />
              <div class="title">{{ data.data.picList[0].name }}</div>
            </div>
          </div>
        </div>
        <div class="content-right">
          <div class="img-box">
            <img
              :src="data.data.picList[1].url"
              style="width: 309.76px; height: 174.24px"
              mode="aspectFit"
            />
            <div class="title">{{ data.data.picList[1].name }}</div>
          </div>
          <div class="img-box">
            <img
              :src="data.data.picList[2].url"
              style="width: 309.76px; height: 174.24px; margin-top: 20px"
              mode="aspectFit"
            />
            <div class="title">{{ data.data.picList[2].name }}</div>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="lp-page__center">
        <div class="content-left">
          <div class="content-left__title">
            <div class="main-title">
              <div class="title-no">1</div>
              <div class="title-text">打算做个自动生成的页面</div>
            </div>
          </div>
          <div class="content-left__sub-title">
            这里是一些提取的重要文字，以数据，提纲为主比如230亩，200万，比如230亩，200万
          </div>
          <div class="content-left__img">
            <div class="img-box">
              <img
                src="https://img.quanminyanxuan.com/other/21188f7a1e9340759c113aa569f96699.jpg?x-oss-process=image/resize,h_600,m_lfit"
                style="width: 400px; height: 225px"
                mode="aspectFit"
              />
              <div class="title">多向指引牌</div>
            </div>
          </div>
        </div>
        <div class="content-right">
          <div class="img-box">
            <img
              src="https://img.quanminyanxuan.com/other/21188f7a1e9340759c113aa569f96699.jpg?x-oss-process=image/resize,h_600,m_lfit"
              style="width: 309.76px; height: 174.24px"
              mode="aspectFit"
            />
            <div class="title">多向指引牌方案2</div>
          </div>
          <div class="img-box">
            <img
              src="https://img.quanminyanxuan.com/other/21188f7a1e9340759c113aa569f96699.jpg?x-oss-process=image/resize,h_600,m_lfit"
              style="width: 309.76px; height: 174.24px; margin-top: 20px"
              mode="aspectFit"
            />
            <div class="title">简介标识牌1</div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "Page",
  props: ["data", "className"],
  data() {
    return {
      list: {
        title: "打算做个自动生成的页面",
        subTitle:
          "这里是一些提取的重要文字，以数据，提纲为主比如230亩，200万，比如230亩，200万",
        picList: [
          {
            url: "https://img.quanminyanxuan.com/other/21188f7a1e9340759c113aa569f96699.jpg?x-oss-process=image/resize,h_600,m_lfit",
            name: "多向指引牌",
          },
          {
            url: "https://img.quanminyanxuan.com/other/21188f7a1e9340759c113aa569f96699.jpg?x-oss-process=image/resize,h_600,m_lfit",
            name: "多向指引牌方案2",
          },
          {
            url: "https://img.quanminyanxuan.com/other/21188f7a1e9340759c113aa569f96699.jpg?x-oss-process=image/resize,h_600,m_lfit",
            name: "简介标识牌",
          },
        ],
      },
    };
  },
  mounted() {
    if ((this.data.data.length == 0)) {
      this.data.data = this.list;
     
    }
  },
  computed: {
    options() {
      return this.data.options;
    },
    line() {
      return this.options.volumeStr && this.options.goodRatio ? "| " : "";
    },
  },
};
</script>

<style lang="scss" scoped>
.tmp_page {
  display: flex;
  flex-direction: column;
  .lp-page__center {
    width: 720px;
    height: 390px;
    display: flex;
    padding: 60px 40px;
    .img-box {
      position: relative;

      .title {
        position: absolute;
        right: 0px;
        bottom: 5px;
        background: #352a29;
        padding: 5px 25px;
        font-size: 12px;
        color: #ffffff;
      }
    }

    .content-left {
      display: flex;
      flex-direction: column;
      width: 410px;
      &__title {
        display: flex;

        .main-title {
          display: flex;

          .title-no {
            background-color: #abadaf;
            padding: 10px 15px;
            color: #ffffff;
          }

          .title-text {
            background-color: #83bb61;
            margin-left: 10px;
            padding: 10px 30px;
            color: #ffffff;
          }
        }
      }

      &__sub-title {
        display: flex;
        flex: 1;
        align-items: center;
        font-weight: bold;
        font-size: 16px;
        padding-right: 10px;
      }

      &__img {
        display: flex;

        .img-box {
          align-items: flex-end;
        }
      }
    }

    .content-right {
      display: flex;
      flex-direction: column;
      width: 310px;
      .img-box {
        margin-bottom: 10px;
      }
    }
  }
}
</style>