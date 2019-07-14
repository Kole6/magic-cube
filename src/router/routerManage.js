// 系统管理
export default [
    // 公告管理
    { 
        path: 'announcement',
        component: resolve => require(['@/views/systemManage/announcement.vue'], resolve),
    },
    {//制度管理
        path: 'institutional',
        component: () => import('@/views/systemManage/institutional.vue')
    },
    {
        path: 'question',
        component: resolve => require(['@/views/systemManage/question.vue'], resolve),
    },
    {
        path: 'warningSet',
        component: resolve => require(['@/views/systemManage/warningSet.vue'], resolve),
    },
    {
        path: 'analysisSet',
        component: resolve => require(['@/views/systemManage/analysisSet.vue'], resolve),
    },
    {
        path: 'controlSet',
        component: resolve => require(['@/views/systemManage/controlSet.vue'], resolve),
    },
    //预警管理
    {
        path: 'warningPointSet',
        component: resolve => require(['@/views/systemManage/warningPointSet.vue'], resolve),
    },
    {
        path: 'warningRecord',
        component: resolve => require(['@/views/systemManage/warningRecord.vue'], resolve),
    },
    //评价管理
    {
        path: 'evaluateIndex',
        component: resolve => require(['@/views/systemManage/evaluateIndex.vue'], resolve),
    },
    {
        path: 'evaluatePoint',
        component: resolve => require(['@/views/systemManage/evaluatePoint.vue'], resolve),
    },
    {
        path: 'evaluateTask',
        component: resolve => require(['@/views/systemManage/evaluateTask.vue'], resolve),
    },
    { //驾驶舱设置
        path: 'cockpitSet',
        component: resolve => require(['@/views/systemManage/cockpitSet.vue'], resolve),
    },
    {
        path: 'yearQualityReport',
        component: resolve => require(['@/views/systemManage/yearQualityReport.vue'], resolve),
    },
    { //教室管理
        path: 'sysManageClassRoom',
        component: resolve => require(['@/views/systemManage/sysManageClassRoom'], resolve)
    },
    { //实验楼管理
        path: 'sysManageLabsBulid',
        component: resolve => require(['@/views/systemManage/sysManageLabsBulid'], resolve)
    },
    { //实验室管理
        path: 'sysManageLabsRoom',
        component: resolve => require(['@/views/systemManage/sysManageLabsRoom'], resolve)
    },
    { //教学楼管理
        path: 'sysManageTeachBulid',
        component: resolve => require(['@/views/systemManage/sysManageTeachBulid'], resolve)
    },
    { //实训基地管理
        path: 'sysManageTrainBase',
        component: resolve => require(['@/views/systemManage/sysManageTrainBase'], resolve)
    },
    { //实训岗位管理
        path: 'sysManageTrainPost',
        component: resolve => require(['@/views/systemManage/sysManageTrainPost'], resolve)
    },
    { //实训室管理
        path: 'sysManageTrainRoom',
        component: resolve => require(['@/views/systemManage/sysManageTrainRoom'], resolve)
    },
    { //教师授课计划
        path: 'sysManageTeachPlan',
        component: resolve => require(['@/views/systemManage/sysManageTeachPlan'], resolve)
    },
    { //教学考勤统计
        path: 'sysStuAttends',
        component: resolve => require(['@/views/systemManage/sysStuAttends'], resolve)
    },
    { //班级巡视量化考核统计
        path: 'sysManageClassTest',
        component: resolve => require(['@/views/systemManage/sysManageClassTest'], resolve)
    },
    { //教师巡视量化考核统计
        path: 'sysManageTeachTest',
        component: resolve => require(['@/views/systemManage/sysManageTeachTest'], resolve)
    },
    { //教学督导理论课巡视情况
        path: 'sysManageInspectTestA',
        component: resolve => require(['@/views/systemManage/sysManageInspectTestA'], resolve)
    },
    { //教学督导实训课巡视情况
        path: 'sysManageInspectTestB',
        component: resolve => require(['@/views/systemManage/sysManageInspectTestB'], resolve)
    },
]