export default {
  //提前期
  leadTime: {
    title: '工序等待时间',
    subTitle: '工序等待时间编辑',
    label: {
      leadTimeCode: '编码',
      leadTimeName: '名称',
      leadTimeType: '类型',
      ruleSql: '适用规则',
      priority: '优先级',
      leadTimeDesc: '描述',
      prdProcess: '所属工段',
      nodeName: '节点',
      itemNo:'序号',
      leadTime:'提前期',
    },
    placeholder: {
      leadTimeNamePlaceholder: "请输入名称",
      leadTimeTypePlaceholder: "请选择类型",
      processScenario: '请选择工艺场景',
      priority: '请输入优先级，只支持正整数"',
      leadTimeDesc: '请输入提前期描述',
      prdProcess:'请输入所属工段',
      nodeName: '请输入节点',
      leadTime:'请输入提前期（天）',
    },
    rules: {
      leadTimeCodeVaild: "编码不能为空",
      englishNumberVaild: "只能输入【英文，数字，-,/】",
      describeNumber: "描述字数不能超出50字",
      leadTimeFormatVaild: "提前期格式应只包含([0-9])",
      priority: "优先级应为整数",
      leadTimeCodeInputValid: "请输入类型编码",
      leadTimeInputVaild: "请输入提前期",
      leadTimeValid: "提前期不能为空",
      prdProcessValid: "请输入工段信息",
      ruleSqlValid:"适用规则不能为空",
    },
    optionLabel: {
      count: '计算',
      noCount: '不计算',
      regular: '固定',
      noRegular: '非固定',
    }
  }
}