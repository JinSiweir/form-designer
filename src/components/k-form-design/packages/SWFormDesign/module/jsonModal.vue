<template>
<!--
 * author 
 * date 
 * description 生成json Modal
 */
-->
  <a-modal
    title="JSON数据"
    :footer="null"
    :visible="visible"
    @cancel="handleCancel"
    :destroyOnClose="true"
    wrapClassName="code-modal"
    style="top:20px;"
    width="850px"
  >
    <previewCode :editorJson="editorJson" />
  </a-modal>
</template>
<script>

import previewCode from "../../PreviewCode/index";
export default {
  name: "JsonModal",
  data() {
    return {
      visible: false,
      editorJson: "",
      jsonData: {}
    };
  },
  watch: {
    visible(val) {
      if (val) {
        this.editorJson = JSON.stringify(this.jsonData, null, "\t");
      }
    }
  },
  components: {
    previewCode
  },
  methods: {
    handleCancel() {
      this.visible = false;
    }
  }
};
</script>
