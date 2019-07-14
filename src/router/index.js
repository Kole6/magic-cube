import Vue from 'vue'
import Router from 'vue-router'
// import routerCollect from './routerCollect'
// import routerManage from './routerManage'
Vue.use(Router);
export default new Router({
    linkActiveClass: 'active',
    linkExactActiveClass: 'active-exact',
    routes: [{
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/pages/login.vue')
        },
        {
            path: '/head',
            component: () => import('@/components/global/top_header.vue'),
            redirect: '/head/home',
            children: [{
                    path: 'home',
                    name: 'home',
                    component: () => import('@/pages/home.vue')
                },
                {
                    path: 'page/:id',
                    name: 'page',
                    component: () => import('@/components/indexModules/indexPage.vue'),
                    children: [
                        // ...routerCollect,
                        // ...routerManage,
                        { //领导驾驶舱
                            path: 'cockpit',
                            component: resolve => require(['@/pages/cockpit/cockpit.vue'], resolve)
                        },
                        // { //系部情况
                        //     path: 'depart',
                        //     component: resolve => require(['@/pages/cockpit/depart.vue'], resolve)
                        // },
                        // { //班级情况
                        //     path: 'class',
                        //     component: resolve => require(['@/pages/cockpit/class.vue'], resolve)
                        // },
                        // { //授课情况
                        //     path: 'teach',
                        //     component: resolve => require(['@/pages/cockpit/teach.vue'], resolve)
                        // },
                        // { //在校情况
                        //     path: 'inSchool',
                        //     component: resolve => require(['@/pages/cockpit/inSchool.vue'], resolve)
                        // },
                        //质量监控 aQuality
                        {
                            path: 'qualityControl/:vs',
                            redirect: 'qualityControl/:vs/x001'
                        },
                        {
                            path: 'qualityControl/:vs/:indexCode',
                            component: resolve => require(['@/pages/qualityControl/aQuality.vue'], resolve),
                        },
                        //质量分析
                        {
                            path: 'professional',
                            component: resolve => require(['@/pages/qualityAnalysis/professional.vue'], resolve),
                        },
                        {
                            path: 'professionalReport',
                            component: resolve => require(['@/pages/qualityAnalysis/professionalReport.vue'], resolve),
                        },
                        {
                            path: 'teacherAbility',
                            component: resolve => require(['@/pages/qualityAnalysis/teacherAbility.vue'], resolve),
                        },
                        {
                            path: 'teacherAbilityReport',
                            component: resolve => require(['@/pages/qualityAnalysis/teacherAbilityReport.vue'], resolve),
                        },
                        {
                            path: 'studentQuality',
                            component: resolve => require(['@/pages/qualityAnalysis/studentQuality.vue'], resolve),
                        },
                        {
                            path: 'studentQualityReport',
                            component: resolve => require(['@/pages/qualityAnalysis/studentQualityReport.vue'], resolve),
                        },
                        //relf
                        {
                            path: 'info',
                            component: resolve => require(['@/pages/relf/info.vue'], resolve),
                        },
                        {
                            path: 'changePwd',
                            component: resolve => require(['@/pages/relf/changePwd.vue'], resolve),
                        },
                        //titleDetail
                        // {
                        //     path: 'textDetail',
                        //     name: 'textDetail',
                        //     component: resolve => require(['@/pages/titleDetail/textDetail.vue'], resolve),
                        // },
                        // {
                        //     path: 'dataDetail',
                        //     name: 'dataDetail',
                        //     component: resolve => require(['@/pages/titleDetail/dataDetail.vue'], resolve),
                        // },
                        // {
                        //     path: 'onlineSurvey',
                        //     name: 'onlineSurvey',
                        //     component: resolve => require(['@/pages/titleDetail/onlineSurveyList.vue'], resolve),
                        // },
                        // {
                        //     path: 'schoolSystem',
                        //     name: 'schoolSystem',
                        //     component: resolve => require(['@/pages/titleDetail/schoolSystemList.vue'], resolve),
                        // },
                        // {
                        //     path: 'notice',
                        //     name: 'notice',
                        //     component: resolve => require(['@/pages/titleDetail/noticeList.vue'], resolve),
                        // },
                        // {
                        //     path: 'xxzdDetail',
                        //     name: 'xxzdDetail',
                        //     component: resolve => require(['@/pages/titleDetail/xxzdDetail.vue'], resolve),
                        // },
                        // {
                        //     path: 'tzggDetail',
                        //     name: 'tzggDetail',
                        //     component: resolve => require(['@/pages/titleDetail/tzggDetail.vue'], resolve),
                        // },
                    ]

                }
            ]
        },
    ]
})