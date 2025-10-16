export default{
     //物料供应来源
     materialSupplySource:{
        label:{
            "sitecode":"工厂编码",
            "assignmentSetName":"供应来源规则名称",
            "assignmentSetDesc":"供应来源规则描述",
            "status":"状态",
            "warehouse":"仓库",
            "whCode":"仓库编码",
            "whName":"仓库名称",
            "ruleStatus":"规则状态",
            "priority":"优先级",
            "expireDateTime":"失效时间",
            "siteName":"工厂名称",
        },
        placeholder: {
            "sitecode":"请选择工厂编码",
            "assignmentSetName":"请输入供应来源规则名称",
            "assignmentSetDesc":"请输入供应来源规则描述",
            "warehouse":"请输入仓库",
            "priority":"请输入优先级",
            "expireDateTime":"请选择失效时间",
        },
        vaild: {
            "priority":"格式应只包含（[1-99]的整数）",
        },
        tab: {
            "sourceOfSupply":"物料供应来源",
            "sourceOfSupplyDetail":"物料供应来源明细",
        },
        draw: {
            "drawTitle":"正在处理：物料来源规则",
            "checkAllLeft":"包含物料",
            "checkAllRight":"排除物料",
        },
        message: {
            "deleteStatus":"当前为启用状态，不能删除!"
        },
        options:{
            new: "新建",
            start:"启用",
            stop:"停用"
        }
    },
}
