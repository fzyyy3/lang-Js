export default {
  userManagement: {
    title: '用户管理&权限分配',
    second:'所属角色',
    subTitle: '用户管理&权限分配编辑',
    options: {
      valid: '生效',
      unValid: '失效'
    },
    button:{
      add:"新增",
      edit:"编辑",
      delete:"删除",
      password:"重置密码",
    },
    label: {
      tenantCode: '租户代码',
      tenantName: '租户名称',
      name: '用户名',
      email: '邮箱',
      telephone: '电话',
      userStatus: '状态',
      userGroup: '用户组',
      createName: '创建人',
      createTime: '创建时间',
      updateName: '修改人',
      updateTime: '修改时间',
      tenant: '租户',
      userAccount:'用户账号',
      password:'用户密码',
      userName:'用户姓名',
      emailAddress:'电子邮箱',
      startTime:'生效日期',
      endTime:'失效日期',
      newPassword:'新密码',
      checkPassword:'确认密码',
      diaTit:'重置密码'
    },
    tab: {
      first: '基本信息',
      second: '所属角色'
    },
    transfer:{
      notChooseRole:'未选择角色',
      chooseRole:'已选择角色',
      placeholder:'搜索',
    },
    placeholder:{
      tenantName:'请输入租户',
      site:'请选择Site',
      userAccount:"请输入用户账号",
      password:"请输入用户密码",
      userName:"请输入用户姓名",
      userGroup:"请选择用户组",
      emailAddress:"请输入电子邮箱",
      telephone:"请输入电话",
      userStatus:"请选择状态",
      startTime:'请选择生效日期',
      endTime:'请选择失效日期',
      newPassword:'请输入新密码',
      checkPassword:'请再次输入密码',
    },
    ruler: {
      tenantName: '租户不能为空',
      userName: '用户账号不能为空',
      password: '用户密码不能为空',
      name: '用户姓名不能为空',
      userStatus: '状态不能为空',
      startTime: '生效日期不能为空',
      endTime: '失效日期不能为空',
      telephone: '请正确填写电话号码',
      email: '请正确填写邮箱',
      resetPass:'重置密码成功',
      checkPass:'两次密码不一致!',
      chinese:"不能输入中文"
    }
  }
}