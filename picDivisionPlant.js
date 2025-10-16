export default {
    //PIC分工厂
    picDivisionPlant: {
        title: 'PIC分工厂',
        subTitle: 'PIC分工厂编辑',
        detail: '订单明细',
        label: {
            styleNo: '款号',
            deliveryDate: '客期',
            orderQty: '数量',
            planningSite: '成衣生产工厂',
            cupSite: '棉杯工厂',
            shippingSite: '出货工厂',
            ifAllocationSite: '是否下达',
            orderCode : '销售订单/合同号',
            formerSite: '成衣原分配工厂',
            ifChargeback: '是否退单',
            exceptionLog: '异常提醒',
        },
        placeholder: {
            planningSite: '请选择生产工厂',
        },
        message :{
            set : '是否确认下达',
            setSuccess : '下达成功',
            setError : '下达失败,生产工厂为空不允许下达',
            division : '是否确认分配工厂',
            divisionSuccess : '分配成功',
            editWarning : '订单已下达，无法编辑',
            transmitWarning : '订单已下达，无法再次下达',
        },
        rules: {
            
        }

    }
}