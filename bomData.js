export default {
    bomData: {
      title: 'BOM主数据',
      subTitle: '物料BOM编辑',
      label: {
        materialCode: '子物料编码',
        effectiveFrom:'生效日期',
        effectiveTo:'失效日期',
        buzhong:"布种",
        color:"颜色",
        unit:"子物料单位",
        yishen:"衣身部位",
        prdProcess:'工段',
        garmentComponent:'套装'
      },
      placeholder: {
        materialCode: '请选择子物料编码',
        effectiveFrom:'请选择生效日期',
        effectiveTo:'请选择失效日期',
        buzhong:"请输入布种",
        color:"请输入颜色",
        unit:"请选择子物料单位",
        yishen:"请输入衣身部位",
        prdProcess:"请选择工段",
        applyOrderNo: '请填写子物料编码',
        usePossibility:'请填写使用可能性',
        garmentComponent:'请输入套装'
      },
      message: {
        quantity: '请填用量，最多填写大于0的10位数字且最多保留五位小数',
        baseQuantity: '请填基准数量，最多填写大于0的10位数字且最多保留五位小数',
        lossRate: '正确填写损耗率，最多填写大于0的10位数字且最多保留五位小数',
        fixedLossQuantity: '正确填写固定损耗量，最多填写大于0的10位数字且最多保留五位小数',
        applyOrderNo: '同一主表下，子列表中组件子物料编码不可重复'
      }
    },
  }