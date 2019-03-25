export default [
  // user
  {
    path: "/user",
    component: () => import(/* webpackChunkName: "UserLayout" */ "../layouts/UserLayout.vue"),
    children: [
      { path: "/user", redirect: "/user/login" },
      { path: "/user/login", name: "登录", component: () => import(/* webpackChunkName: "UserLayout" */ "../views/User/Login.vue") },
      { path: "/user/register", name: "注册", component: () => import(/* webpackChunkName: "UserLayout" */ "../views/User/Register.vue") },
      {
        path: "/user/register-result",
        name: "注册结果",
        component: () => import(/* webpackChunkName: "UserLayout" */ "../views/User/RegisterResult.vue")
      }
    ]
  },
  // app
  {
    path: "/",
    component: () => import(/* webpackChunkName: "UserLayout" */ "../layouts/BasicLayout.vue"),
    children: [
      // dashboard
      { path: "/", redirect: "/dashboard/analysis" },
      // {
      //   path: "/dashboard",
      //   name: "Dashboard",
      //   children: [
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
      //   ]
      // },
      //forms
      // {
      //   path: "/form",
      //   name: "表单页",
      //  children: [
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
      //   ]
      // },
      // // list
      // {
      //   path: "/list",
      //   icon: "table",
      //   name: "列表页",
      //   routes: [
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
          }
      //   ]
      // },
      // {
      //   path: "/profile",
      //   name: "详情页",
      //   icon: "profile",
      //   routes: [
      //     // profile
      //     {
      //       path: "/profile/basic",
      //       name: "基础详情页",
      //       component: "./Profile/BasicProfile"
      //     },
      //     {
      //       path: "/profile/basic/:id",
      //       name: "基础详情页",
      //       hideInMenu: true,
      //       component: "./Profile/BasicProfile"
      //     },
      //     {
      //       path: "/profile/advanced",
      //       name: "高级详情页",
      //       authority: ["admin"],
      //       component: "./Profile/AdvancedProfile"
      //     }
      //   ]
      // },
      // {
      //   name: "结果页",
      //   icon: "check-circle-o",
      //   path: "/result",
      //   routes: [
      //     // result
      //     {
      //       path: "/result/success",
      //       name: "成功页",
      //       component: "./Result/Success"
      //     },
      //     { path: "/result/fail", name: "失败页", component: "./Result/Error" }
      //   ]
      // },
      // {
      //   name: "异常页",
      //   icon: "warning",
      //   path: "/exception",
      //   routes: [
      //     // exception
      //     {
      //       path: "/exception/403",
      //       name: "403",
      //       component: "./Exception/403"
      //     },
      //     {
      //       path: "/exception/404",
      //       name: "404",
      //       component: "./Exception/404"
      //     },
      //     {
      //       path: "/exception/500",
      //       name: "500",
      //       component: "./Exception/500"
      //     },
      //     {
      //       path: "/exception/trigger",
      //       name: "触发错误",
      //       hideInMenu: true,
      //       component: "./Exception/TriggerException"
      //     }
      //   ]
      // },
      // {
      //   name: "个人页",
      //   icon: "user",
      //   path: "/account",
      //   routes: [
      //     {
      //       path: "/account/center",
      //       name: "个人中心",
      //       component: "./Account/Center/Center",
      //       routes: [
      //         {
      //           path: "/account/center",
      //           redirect: "/account/center/articles"
      //         },
      //         {
      //           path: "/account/center/articles",
      //           component: "./Account/Center/Articles"
      //         },
      //         {
      //           path: "/account/center/applications",
      //           component: "./Account/Center/Applications"
      //         },
      //         {
      //           path: "/account/center/projects",
      //           component: "./Account/Center/Projects"
      //         }
      //       ]
      //     },
      //     {
      //       path: "/account/settings",
      //       name: "个人设置",
      //       component: "./Account/Settings/Info",
      //       routes: [
      //         {
      //           path: "/account/settings",
      //           redirect: "/account/settings/base"
      //         },
      //         {
      //           path: "/account/settings/base",
      //           component: "./Account/Settings/BaseView"
      //         },
      //         {
      //           path: "/account/settings/security",
      //           component: "./Account/Settings/SecurityView"
      //         },
      //         {
      //           path: "/account/settings/binding",
      //           component: "./Account/Settings/BindingView"
      //         },
      //         {
      //           path: "/account/settings/notification",
      //           component: "./Account/Settings/NotificationView"
      //         }
      //       ]
      //     }
      //   ]
      // },
      // {
      //   component: "404"
      // }
    ]
  }
];


