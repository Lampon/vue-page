<template>
  <div class="product-content">
    <div class="lp-form">
      <el-form ref="form" label-width="80px">
        <el-form-item label="一级标题">
          <el-input v-model="list.data.title"></el-input>
        </el-form-item>
        <el-form-item label="二级标题">
          <el-input v-model="list.data.subTitle"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <p class="tit">图片列表 <span>（可拖动排序）</span></p>
    <el-button class="add-btn" type="primary" @click="addPic"
      ><i class="el-icon-plus"></i> 添加图片</el-button
    >
    <input
      type="file"
      name="file"
      multiple="multiple"
      @change="fileChange"
      class="el-upload__input"
      ref="file"
    />

    <template v-if="list.data.picList && list.data.picList.length > 0">
      <vuedraggable
        v-model="list.data.picList"
        tag="ul"
        draggable="li"
        v-if="list.data.picList && list.data.picList.length > 0"
        class="list"
      >
        <li
          class="item"
          v-for="(item, index) in list.data.picList"
          :key="index"
        >
          <img :src="item.url" />
          <i class="el-icon-error" @click="deleteItem(index)"></i>
        </li>
      </vuedraggable>
    </template>
  </div>
</template>

<script>
// import { searchProduct } from '@/api/pageDecoration.js'
import vuedraggable from "vuedraggable";
export default {
  name: "Page",
  components: {
    vuedraggable,
  },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      list: {
        data: {
          title: "",
          subTitle: "",
          picList: [],
        },
      },
    };
  },
  mounted() {
    this.list = this.data;
  },
  watch: {
    title: function (newVal, oldVal) {
      this.$set(this.list.data, "title", newVal);
    },
    subTitle: function (newVal, oldVal) {
      this.$set(this.list.data, "subTitle", newVal);
    },
  },
  methods: {
    addPic() {
      this.$refs.file.click();
    },
    //上传图片
    async fileChange(e) {
      var files = e.target.files;
      files = Array.from(files);
      files.forEach((element) => {
        var url = URL.createObjectURL(
          new Blob([element], { type: element.type })
        );
        this.list.data.picList.push({
          name: element.name,
          url: url,
        });
        this.list.data.picList;
        // this.$set(this.list.data, "picList", this.picList);
      });
    },
    //删除图片
    deleteItem(index) {
      this.list.data.picList.splice(index, 1);
    },
  },
};
</script>

<style lang="scss">
.product-content {
  padding: 0 10px;
  .lp-form {
    margin-top: 10px;
  }
  .tit {
    text-align: center;
    font-size: 12px;
    color: #666;
    margin: 18px 0;
    padding-bottom: 10px;
    border-bottom: 1px dashed #ddd;
  }
  .add-btn {
    width: calc(100% - 30px);
    height: 34px;
    line-height: 34px;
    padding: 0;
    font-size: 12px;
    margin-left: 15px;
    margin-top: 5px;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    padding: 12px;
    margin: 0;
    .item {
      width: 70px;
      height: 70px;
      border-radius: 6px;
      margin: 4px;
      position: relative;
      transition: all 0.3s;
      list-style: none;
      img {
        width: 100%;
        height: 100%;
        border-radius: 4px;
      }
      i {
        position: absolute;
        top: -6px;
        right: -6px;
        cursor: pointer;
        opacity: 0;
        transition: all 0.3s;
        color: red;
      }
      &::before {
        content: "";
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.4);
        border-radius: 4px;
        opacity: 0;
        transition: all 0.3s;
      }
      &:hover {
        cursor: grab;
        &::before,
        i {
          opacity: 1;
        }
      }
    }
  }
  .options {
    padding: 15px;
    border-radius: 6px;
    .el-form {
      background: #f7f8f9;
      overflow: hidden;
      padding: 10px 0;
      .el-form-item {
        margin: 0;
        label {
          font-size: 12px;
        }
      }
    }
  }
}
</style>