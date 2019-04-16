export default [
  // app
  {
    path: "/",
    component: () => import(/* webpackChunkName: "UserLayout" */ "../layouts/BasicLayout.vue"),
    children: [
      { 
        path: "/", 
        redirect: "/dashboard/analysis" 
      },
      {
        path: "/dashboard/analysis",
        name: "分析页",
        component: () => import(/* webpackChunkName: "Analysis" */ "../views/Dashboard/Analysis.vue")
      },
      {
        path: "/dashboard/monitor",
        name: "监控页",
        component: () => import(/* webpackChunkName: "Monitor" */ "../views/Dashboard/Monitor.vue")
      },
      {
        path: "/dashboard/workplace",
        name: "工作台",
        component: () => import(/* webpackChunkName: "Workplace" */ "../views/Dashboard/Workplace.vue")
      },

      {
        path: "/form",
        redirect: "/form/basic-form",
      },
      {
        path: "/form/basic-form",
        name: "基础表单",
        component: () => import(/* webpackChunkName: "BasicForm" */ "../views/Forms/BasicForm.vue")
      },
      {
        path: "/form/step-form",
        name: "分步表单",
        redirect: "/form/step-form/info",
        component: () => import(/* webpackChunkName: "StepForm" */ "../views/Forms/StepForm/index.vue"),
        children: [

          {
            path: "/form/step-form/info",
            name: "分步表单（填写转账信息）",
            component: () => import(/* webpackChunkName: "Step1" */ "../views/Forms/StepForm/Step1.vue"),
          },
          {
            path: "/form/step-form/confirm",
            name: "分步表单（确认转账信息）",
            component: () => import(/* webpackChunkName: "Step2" */ "../views/Forms/StepForm/Step2.vue"),
          },
          {
            path: "/form/step-form/result",
            name: "分步表单（完成）",
            component: () => import(/* webpackChunkName: "Step3" */ "../views/Forms/StepForm/Step3.vue"),
          }
        ]
      },
      {
        path: "/form/advanced-form",
        name: "高级表单",
        component: () => import(/* webpackChunkName: "BasicForm" */ "../views/Forms/AdvancedForm.vue"),
      },

      { 
        path: "/list", 
        redirect: "/list/table-list" 
      },
      {
        path: "/list/table-list",
        name: "查询表格",
        component: () => import(/* webpackChunkName: "TableList" */ "../views/List/TableList.vue")
      },
      {
        path: "/list/basic-list",
        name: "标准列表",
        component: () => import(/* webpackChunkName: "BasicList" */ "../views/List/BasicList.vue")
      },
      {
        path: "/list/card-list",
        name: "卡片列表",
        component: () => import(/* webpackChunkName: "CardList" */ "../views/List/CardList.vue")
      },
      {
        path: "/list/search",
        name: "搜索列表",
        component: () => import(/* webpackChunkName: "List" */ "../views/List/List.vue"),
        children: [
          {
            path: "/list/search",
            redirect: "/list/search/articles"
          },
          {
            path: "/list/search/articles",
            name: "搜索列表（文章）",
            component: () => import(/* webpackChunkName: "Articles" */ "../views/List/Articles.vue")
          },
          {
            path: "/list/search/projects",
            name: "搜索列表（项目）",
            component: () => import(/* webpackChunkName: "Projects" */ "../views/List/Projects.vue")
          },
          {
            path: "/list/search/applications",
            name: "搜索列表（应用）",
            component: () => import(/* webpackChunkName: "Applications" */ "../views/List/Applications.vue")
          }
        ]
      },

      { 
        path: "/profile", 
        redirect: "/profile/basic" 
      },

      {
        path: "/profile/basic",
        name: "基础详情页",
        component: () => import(/* webpackChunkName: "BasicProfile" */ "../views/Profile/BasicProfile.vue")
      },
      {
        path: "/profile/advanced",
        name: "高级详情页",
        component: () => import(/* webpackChunkName: "AdvancedProfile" */ "../views/Profile/AdvancedProfile.vue")
      },

      { 
        path: "/result", 
        redirect: "/result/success" 
      },
      {
        path: "/result/success",
        name: "成功页",
        component: () => import(/* webpackChunkName: "Success" */ "../views/Result/Success.vue")
      },
      { 
        path: "/result/fail", 
        name: "失败页", 
        component: () => import(/* webpackChunkName: "Error" */ "../views/Result/Error.vue")
      },

      { 
        path: "/exception", 
        redirect: "/exception/404" 
      },
      {
        path: "/exception/403",
        name: "403",
        component: () => import(/* webpackChunkName: "Success" */ "../views/Exception/403.vue")
      },
      {
        path: "/exception/404",
        name: "404",
        component: () => import(/* webpackChunkName: "Success" */ "../views/Exception/404.vue")
      },
      {
        path: "/exception/500",
        name: "500",
        component: () => import(/* webpackChunkName: "Success" */ "../views/Exception/500.vue")
      },

    ]
  }
];


