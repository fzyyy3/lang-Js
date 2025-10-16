
export default {
  //工单领料
  workPick: {
    title: '发料主数据',
    subTitle: '发料主数据明细',
    label: {
      moQty: "工单数量",
      mo: "生产单号",
      //child
      demandQty: "需求数量",
      receivedQty: "已领数量",
      unclaimedQty: "未领数量",
      returnQty: "退料数量",
      materialIssuanceOrder: "发料单号",
      receivedDate: "发料日期",
      productOrder: '生产工单',
      material: '物料',
      addRow: '新建行',
      deleteRow: '删除行',
      return: '返回',
      sitename: '工厂',
      salesOrder: "销售订单",
      materialRequestNumber: '物料申请单号',
      materialRequestItemNumber: '物料申请单行号',
      color: '颜色',
      size: '尺码',
      supplierBatch: '供应商批次',
      materialBatch: '物料批次',
    },
    placeholder: {
      sitename: '请选择工厂',
      salesOrder: '请选择销售订单',
      moPlaceholder: "请输入生产工单",
      productFamilyName: "请输入产品族名称",
      prductTypeDict: "请选择产品类型",
      productFamilyState: "请选择产品族状态",
    },
    ruler: {
      moCheck: '生产工单不存在,请重新输入',
      materialName: "物料名称不存在,请重新输入",
      materialNameCheck: "请输入物料编码",
      materialCode: "物料编码不存在,请重新输入",
      demandQty: "请输入需求数量",
      receivedQty: "请输入已领数量",
      receivedQtySum: "已领数量+未领数量=需求数量",
      unclaimedQty: "请输入未领数量",
      receivedDate: "请选择发料日期",
      materialCodeSaveCheck: "请填写物料编码,只能填写A~Z,0~9,-",
      demandQtySaveCheck: "请填写需求用量",
      materialIssuanceOrder: "请输入发料单号",
      demandQtyRangeSaveCheck: "需求用量只包含数字,且小数点后最多6位",
      receivedQtyRangeSaveCheck: "已领数量只包含数字,且小数点后最多6位",
      unclaimedQtyRangeSaveCheck: "未领数量只包含数字,且小数点后最多6位",
      returnQtyRangeSaveCheck: "退料数量只包含数字,且小数点后最多6位",

      receivedQtySaveCheck: "正确填写已领数量",
      unclaimedQtySaveCheck: "正确填写未领数量",
      returnQtySaveCheck: "正确填写退料数量",
      receivedunclaimedQtySaveCheck: "已领数量须小于需求数量",
    }
  }
}