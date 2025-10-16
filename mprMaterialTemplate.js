export default {
    mprMaterialTemplate:{
        title: "MRP规则模版",//导出文件名
        label:{
            "mrpConfigName":"MRP规则模版名称",
            "mrpConfigDesc":"MRP规则模版描述",
            "startMadeCategorys":"制程段",

            "endMadeCategory":"终止制成分类",
            "mrpDrawTitle":"正在处理：MRP规则模版",
            "sumRuleTitle":"计算规则选择",
            "availableStock":"可用库存",
            "assignmentSet":"供应来源规则",
            "assignmentSetName":"物料供应来源名称",
            "inventoryInTransitEnable":"在途库存",
            "forecastStock":"预测到料",
            "inventoryInStorageEnable":"在库库存",
            "dateRange":"日期范围",
            "warehouseCode":"仓库编码",
            "warehouseName":"仓库名称",
            "occupyInventory":"占用库存",
            //"workOrderNoNumber":"工单未领料数量",
            "workOrderNoNumber":"发料",
            "otherRules":"其他规则",
            "useRatio":"利用率",
            "isKeyPart":"关键料",
            "leadTime":"提前期",
            "safetyStock":"安全库存",
            "otherMateral":"参与计算物料",
            "materalType":"物料类型",
            "unmateralType":"排出物料",
            
        },
        placeholder: {
            "mrpConfigName":"请输入MRP规则模版名称",
            "mrpConfigDesc":"请输入MRP规则模版描述",
            "startMadeCategorys":"请选择制程段",
            "endMadeCategory":"请选择终止制成分类",
            "assignmentSet":"请选择供应来源规则",
            "assignmentSetName":"请选择物料供应来源名称",
            "bomSearchTypePlaceholder":"请选择BOM展开类型",
            "endMadeCategoryPlaceholder":"请选择终止制成分类",
            "assignmentSetRules":'请输入MRP规则模版名称',
            "leadTime":"请选择提前期",

        },
        selectCommon:{
            "bomOptions":"单层",
            "bomOptionsMore":"多层",
            "raw":"原材料",
            "products":"半成品",
        },
    }
}