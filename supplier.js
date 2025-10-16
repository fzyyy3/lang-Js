export default {
    //供应商信息
    supplier: {
      title: '供应商信息',
      subTitle: '供应商信息维护',
      label: {
        "vendorCode":"供应商编码",
        "vendorName":"供应商名称",
        "address":"地址",
        "mobilePhone":"电话",
        "contactPerson":"联系人",
        "siteName":"工厂名称",
        "status":"状态",
        "mailAddress":"邮箱",
      },
      placeholder:{
        "siteName":"请选择工厂名称",
        "vendorCode":"请输入供应商编码",
        "vendorName":"请输入供应商名称",
        "address":"请输入地址",
        "mobilePhone":"请输入电话",
        "contactPerson":"请输入联系人",
        "status":"请选择状态",
        "mailAddress":"请输入邮箱",
      },
      rules:{
        "VendorCodeRule":"供应商编码应只包含（英文，数字，-,/）",
        "mobilePhoneRule":"电话应只包含数字,+,-,#,*",
      },
    }
  }