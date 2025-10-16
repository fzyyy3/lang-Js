export default {
    //提前期
    productionDepartment: {
        title: '生产部',
        subTitle: '生产部编辑',
        label: {
            productionDepartmentCode: '生产部编码',
            productionDepartmentName: '生产部名称',
            planner: '排单员',
            businessUnit: '事业部名称',
            status: '状态',
            remark: '备注',
        },
        placeholder: {
            productionDepartmentCode: '请输入生产部编码',
            productionDepartmentName: '请输入生产部名称',
            planner: '请输入排单员',
            businessUnit: '请输入事业部名称',
        },
        rules: {
            productionDepartmentCode: "生产部编码不能为空",
            productionDepartmentName: "生产部名称不能为空",
            prdProcess: "工段不能为空",
        },
        optionLabel: {
            true: '启用',
            false: '禁用'
        }
    }
}