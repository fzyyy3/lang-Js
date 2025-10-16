export default {
  //资源偏好
  resourcePriority: {
    title: "资源偏好",
    label: {
      ruleName: "规则名称",
      ruleType: "规则类型",
      ruleSql: "适用规则",
      itemNo:"序号",
      objectType:"对象类别",
      objectValue:"对象值",
      priority:"优先级",
      resourceConstrain:"可用资源约束"
      
    },
    placeholder: {},
    rules: {
      siteCode: "请选择工厂",
      ruleName: "请输入规则名称",
      ruleType: "请选择规则类型",
      objectType: "请选择对象类别",
      objectValue: "请选择对象值",
      priority: "优先级应为整数",
      ruleSql: "请输入适用规则",
    },
    message :{
      message1 : "规则类型为丝印时,无法选择对象类别为资源",
      message2 : "规则类型不为丝印时,无法选择对象类别为资源组"
    },
    optionLabel: {},
  },
};
