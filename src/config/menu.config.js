const mune = [
  // Dashboard
  {
    path: "/",
    name: "Dashboard",
    icon: "dashboard",
    children: [
      {
        path: "/dashboard/analysis",
        name: "分析页",
      },
      {
        path: "/dashboard/monitor",
        name: "监控页",
      },
      {
        path: "/dashboard/workplace",
        name: "工作台",
      }
    ]
  },
  // forms
  {
    path: "/form",
    icon: "form",
    name: "表单页",
    children: [
      {
        path: "/form/basic-form",
        name: "基础表单",
      },
      {
        path: "/form/step-form",
        name: "分步表单",
        hideChildrenInMenu: true,
        children: [
          {
            path: "/form/step-form/info",
            name: "分步表单（填写转账信息）",
          },
          {
            path: "/form/step-form/confirm",
            name: "分步表单（确认转账信息）",
          },
          {
            path: "/form/step-form/result",
            name: "分步表单（完成）",
          }
        ]
      },
      {
        path: "/form/advanced-form",
        name: "高级表单",
      }
    ]
  },
  // list
  {
    path: "/list",
    icon: "table",
    name: "列表页",
    children: [
      {
        path: "/list/table-list",
        name: "查询表格",
      },
      {
        path: "/list/basic-list",
        name: "标准列表",
      },
      {
        path: "/list/card-list",
        name: "卡片列表",
      },
      {
        path: "/list/search",
        name: "搜索列表",
        children: [
          {
            path: "/list/search/articles",
            name: "搜索列表（文章）",
          },
          {
            path: "/list/search/projects",
            name: "搜索列表（项目）",
          },
          {
            path: "/list/search/applications",
            name: "搜索列表（应用）",
          }
        ]
      }
    ]
  },
  {
    path: "/profile",
    name: "详情页",
    icon: "profile",
    children: [
      // profile
      {
        path: "/profile/basic",
        name: "基础详情页",
      },
      {
        path: "/profile/basic/:id",
        name: "基础详情页",
        hideInMenu: true,
      },
      {
        path: "/profile/advanced",
        name: "高级详情页",
      }
    ]
  },
  {
    name: "结果页",
    icon: "check-circle-o",
    path: "/result",
    children: [
      // result
      {
        path: "/result/success",
        name: "成功页",
      },
      { 
        path: "/result/fail", 
        name: "失败页" 
      }
    ]
  },
  {
    name: "异常页",
    icon: "warning",
    path: "/exception",
    children: [
      // exception
      {
        path: "/exception/403",
        name: "403",
      },
      {
        path: "/exception/404",
        name: "404",
      },
      {
        path: "/exception/500",
        name: "500",
      },
      {
        path: "/exception/trigger",
        name: "触发错误",
        hideInMenu: true,
      }
    ]
  },
];
export default mune;