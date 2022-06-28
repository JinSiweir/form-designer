/*
 * @Description: 组件输出文件,不打包antd ui组件
 */

// window.$customComponentList 自定义组件列表
// window.$sw_dynameicData 动态数据

// 解决Chrome控制台non-passive event listener输出问题
// import "default-passive-events";
// 导入样式
import '../styles/form-design.less';

// 导出本地iconfont
import '../static/icons/iconfont';

// 导入单个组件
import SWFormDesign from './SWFormDesign/index';
import KFormPreview from './KFormPreview/index';
import KFormBuild from './KFormBuild/index';
import KFormItem from './KFormItem/index';
// 导入组件参数列表
import {
  customComponents,
  basicsList,
} from './SWFormDesign/config/formItemsConfig';

const components = [SWFormDesign, KFormBuild, KFormItem, KFormPreview];

const install = function (Vue) {
  // use ant组件
  if (install.installed) return;
  install.installed = true;

  components.map((component) => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

/**
 * @Author:
 * @description: 表单设计器组件配置
 * @description: 设置自定义组件和配置上传文件参数、(配置组件默认参数)
 * @param {json}
 * @return: Boolean
 */
function setFormDesignConfig(config) {
  if (!config || typeof config !== 'object') {
    console.error('传入config的参数必须为对象');
    return false;
  }
  try {
    customComponents.title = config.title || '自义定组件';
    customComponents.list = config.list || [];
    // 将自定义组件列表绑到window.$customComponentList上
    window.$customComponentList = config.list || [];
    // uploadFile 配置 start
    // 配置uploadFile默认上传地址
    const uploadFile = basicsList.filter(
      (item) => item.type === 'uploadFile'
    )[0];
    uploadFile.options.action =
      config.uploadFile || 'http://cdn.kcz66.com/uploadFile.txt';

    // 配置uploadFile默认额外参数
    uploadFile.options.data = JSON.stringify(config.uploadFileData || {});

    // 配置uploadFile默认name
    uploadFile.options.fileName = config.uploadFileName || 'file';
    // 配置uploadFile默认headers
    uploadFile.options.headers = config.uploadFileHeaders || {};
    // uploadFile 配置 end

    // uploadImage配置 start
    // 配置uploadImage默认上传地址
    const uploadImg = basicsList.filter((item) => item.type === 'uploadImg')[0];
    uploadImg.options.action =
      config.uploadImage || 'http://cdn.kcz66.com/upload-img.txt';
    // 配置uploadImage默认额外参数
    uploadImg.options.data = JSON.stringify(config.uploadImageData || {});
    // 配置uploadFile默认name
    uploadImg.options.fileName = config.uploadImageName || 'image';
    // 配置uploadFile默认headers
    uploadImg.options.headers = config.uploadImageHeaders || {};
    // uploadImage配置 end

    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

/**
 * @author
 * @description 表单生成器配置
 * @description 配置k-form-build(预览时)，暂只支持dynamicData的设置
 * @param { object }config
 */
function setFormBuildConfig(config) {
  if (!config || typeof config !== 'object') {
    console.error('传入setFormBuildConfig的参数必须为对象');
    return false;
  }
  if (config.dynamicData) {
    window.$sw_dynameicData = config.dynamicData;
  }
}

// 这里可以用es6的解构语法导入组件
export {
  install,
  SWFormDesign,
  KFormBuild,
  KFormItem,
  KFormPreview,
  setFormDesignConfig,
  setFormBuildConfig,
};

// 这里默认导入全部组件
export default {
  install,
  setConfig: setFormDesignConfig,
  setFormDesignConfig: setFormDesignConfig,
  setFormBuildConfig: setFormBuildConfig,
};
