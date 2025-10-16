export default {
  shipmentManagement: {
    title: '出货管理',
    subTitle: '出货管理编辑',
    label: {
      "deliveryOrder": "出货单", 
      "deliveryItem": "出货单行号", 
      "saleOrder": "销售订单", 
      "saleItem": "销售订单行号", 
      "materialId": "物料编码", 
      "materialName": "物料名称", 
      "shipQty": "出货数量", 
      "unitName": "单位", 
      "deliveryTime": "出货日期", 
      "customerId": "客户名称", 
      "productTypeDict": "产品类型", 
      "productFamilyId": "产品族", 
      "countryDict": "国家", 
      "districtDict": "地区", 
      "remark": "备注", 
      material: '物料'
    },
    tab: {
      first: '基础数据',
      second: '自定义字段'
    },
    placeholder: {
      "deliveryOrder": "请输入交货单", 
      "deliveryItem": "请输入交货单行号", 
      "saleOrder": "请选择销售订单", 
      "saleItem": "销售订单行号", 
      "materialId": "请选择物料编码", 
      "materialName": "请输入物料名称", 
      "shipQty": "请输入出货数量", 
      "unitName": "请选择单位", 
      "deliveryTime": "请选择日期", 
      "customerId": "请输入客户名称", 
      "productTypeDict": "请选择产品类型", 
      "productFamilyId": "请选择产品族", 
      "countryDict": "请选择国家", 
      "districtDict": "请选择地区", 
      "remark": "请输入备注", 
    },
    ruler: {
      numRange: '数字范围：0-9999999999.999999',
      deliveryOrder: "出货单不能为空",
      deliveryOrderReg: "出货单应只包含（[A-a,0-9,-,_,/])",
      deliveryItem: "出货单行号不能为空",
      deliveryItemReg: "出货单行号只能数字",
      saleOrder: "销售订单不能为空",
      saleOrderReg: "销售订单只能数字和英文字母和-,/",
      materialId: "物料编码不能为空",
      materialIdReg: "物料编码只能数字和英文字母和-,/",
      saleItem: "销售订单行号不能为空",
      saleItemReg: "销售订单行号只能数字",
      shipQty: "出货数量不能为空",
      unitId: "单位不能为空",
      deliveryTime: "出货时间不能为空"
    },
    message: {
      saleOrder: "销售订单不存在,请重新输入"
    }
  }
}