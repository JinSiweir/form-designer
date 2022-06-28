/*
 * @Description: 增加antd ui 组件
 * @/ 导出
 */

// 导入ant组件
import './core/components_use';
// 组件注册和配置文件
import * as all from './mini';

export default all.default;
const setFormDesignConfig = all.setFormDesignConfig;
const setFormBuildConfig = all.setFormBuildConfig;
const SWFormDesign = all.SWFormDesign;
const KFormPreview = all.KFormPreview;
const KFormBuild = all.KFormBuild;
const KFormItem = all.KFormItem;

export {
  setFormDesignConfig,
  setFormBuildConfig,
  SWFormDesign,
  KFormPreview,
  KFormBuild,
  KFormItem,
};
