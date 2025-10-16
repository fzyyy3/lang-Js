export default {
    mprScene:{
        title: "MRP场景",//导出文件名
        label:{
            "sceneCode":"MRP场景编号",
            "sceneName":"MRP场景名称",
            "sceneDesc":"MRP场景描述",
            "defaultConfigId":"默认模版",
            "sourceRuleId":"来源规则",
            "sourceType":"来源类型",
            "tracingEnable":"生成追溯记录",
            "mrpDrawTitle":"正在处理：MRP场景",
            "userSite":"按工厂分配模版",
            "template":"模板",
            "ruleTemplateName":"规则模板名称",
            "ruleTemplateDesc":"规则模板描述",
        },
        placeholder: {

            "sceneCode":"请输入MRP场景编号",
            "sceneName":"请输入MRP场景名称",
            "sceneDesc":"请输入MRP场景描述",
            "defaultConfigId":"请选择默认模版",
            "sourceRulePlaceholder":"请选择来源规则",
            "sourceTypePlaceholder":"请选择来源类型",
            "tracingEnable":"请选择生成追溯记录",
            "template":"请选择模板",
        },
        relus:{
            "sceneCodeVaild":"场景编号应只包含（[A-Z,a-z,0-9,-,_])",
            "templatePlaceholder":"请选择默认模板",
            "sourceRulePlaceholder":"请选择来源规则",
            "sourceTypePlaceholder":"请选择来源类型",
            "saveMes":'请正确的输入必填项',
        }
        // selectCommon:{
        //     "raw":"原材料规则模板",
        //     "products":"半成品规则模板",
        // },
    }
}