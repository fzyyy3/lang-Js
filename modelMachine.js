export default {
  modelMachine: {
    title: 'Knitting机寸对应表',
    label: {
      factoryStyleNo: '成衣款号',
      componentStyleNo: '筒布款号',
      componentSize: '筒布尺码',
      features: '机寸号',
      needleNum: '针数',
      ptm: 'PTM值',
      styleLevel: '转款等级',
      transferStyleHours: '转款时长(小时)',
      baseQty: '每筒件数',
      weight: '单件克重',
      remark: '备注',
    },
    placeholder: {
      factoryStyleNo: '请输入成衣款号',
      componentStyleNo: '请输入筒布款号',
      componentSize: '请输入筒布尺码',
      features: '请输入机寸号',
      needleNum: '请输入针数',
      ptm: '请输入PTM值',
      styleLevel: '请输入转款等级',
      transferStyleHours: '请输入转款时长',
      baseQty: '请输入每筒件数',
      weight: '请输入单件克重',
      remark: '请输入备注',
    },
    ruler: {
      ptm: '只能输入数字,允许三位小数点'
    }
  }
}