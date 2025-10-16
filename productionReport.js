export default {
  productionReport: {
    title: '报工数据',
    subTitle: '报工数据编辑',
    label: {
      "siteCode":"SITE_CODE", 
      "mo":"生产工单", 
      "workCode":"工作代码", 
      reportType: '报工类型',
      "orderQty":"工单数量", 
      "routingName":"工艺编号", 
      "processStepId":"工序编号", 
      "processCode":"工序序号", 
      "processName":"工序名称", 
      "qualifiedQty":"合格数量", 
      "repairQty":"返修数量", 
      "scrapQty":"报废数量", 
      "mainResourceCode":"实际生产主资源", 
      "auxiliaryResourceCode":"实际生产副资源", 
      "reportTime":"报工时间", 
      "workingStatus":"工作状态", 
      orderNum: '订单',
      
      processNum:"工序数量",
      successFlag:"成品标识",
      part:"幅位",
      component: "部件",
      position: "部位", 
      "prdProcess": '工段',// 工段
      resourceCode:"资源编号",
      size:"尺码"
    },
    placeholder: {
      
      APS:"请输入APS ID",
      productionOrder:"请输入Production Order",
      processNum:"请输入工序数量",
      successFlag:"请输入成品标识",
      "siteCode":"请选择SITE_CODE",
      "mo":"请选择生产工单", 
      "workCode":"请输入工作代码", 
      reportType: '请选择报工类型',
      "orderQty":"请输入工单数量", 
      "routingName":"请输入工艺编号", 
      "processStepId":"请输入工序编号", 
      "processCode":"请选择工序序号", 
      "processName":"请输入工序名称", 
      "qualifiedQty":"请输入合格数量", 
      "repairQty":"请输入返工数量", 
      "scrapQty":"请输入报废数量", 
      "mainResourceCode":"请输入实际生产主资源", 
      "auxiliaryResourceCode":"请输入实际生产副咨源", 
      "reportTime":"请选择报工时间", 
      "workingStatus":"工作状态", 
      part:"请选择幅位",
      component: "请选择部件",
      position: "请选择部位",
    },
    ruler: {
      numRange: "数字范围：0-9999999999.999999"
    },
    message: {
      order: '生产工单不存在,请重新输入',
      mainResource: '实际生产主资源不存在,请重新输入',
      auxiliaryResource: '实际生产副资源不存在,请重新输入',
      orderQty: '报工总数量不能超过订单数量',
    }
  }
}