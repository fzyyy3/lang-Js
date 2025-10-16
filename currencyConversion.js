export default {
    currencyConversion:{
        dialogTitleAdd: "新增",
        dialogTitleEdit: "编辑",
        title: "汇率",
        titleEdit:"汇率编辑",
        label:{
            conversionName:"汇率转换表名称",
            conversionDesc:"汇率转换表描述",
            
            menuNameAdd:"新建行",
            menuNameDel:"删除行",
        },
        placeholder: {
            conversionName:"请输入汇率转换表名称",
            conversionDesc:"请输入汇率转换表描述",

            sourceCurrencyId:"请选择源货币",
            targetCurrencyId:"请选择目标货币",
            validFrom:"请选择有效期开始",
            validTo:"请选择有效期结束",
            conversionRatio:"请输入转换率",
        },
        check:{
            conversionName:"符号只能输入大写字母",
            conversionRatio:"转换率最多填写12位数字且最多保留六位小数"
        },
        table:{
            sourceCurrencyId:"源货币",
            targetCurrencyId:"目标货币",
            validFrom:"有效期开始",
            validTo:"有效期结束",
            conversionRatio:"转换率",
        },
        statusOptions:{
            start:"启用",
            stop:"禁用"
        },
        enableOptions:{
            invalid:"无效",
            valid:"有效"
        }
    }
}
