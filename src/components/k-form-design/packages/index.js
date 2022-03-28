/*
 * @Description: 增加antd ui 组件
 * @Author:
 * @Date: 2020-01-02 22:41:48
 * @LastEditors:
 * @LastEditTime: 2021-05-14 14:20:45
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
