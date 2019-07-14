const MockData = [
    //领导驾驶舱
    {
        name: '领导驾驶舱',
        href: '/head/page/cockpit/cockpit',
        icon: "&#xe650;",
        enName: 'LING DAO JIA SHI CANG',
        menuFlag: '1'
    },
    //质量监控
    {
        name: '质量监控',
        href: 'qualityControl',
        icon: "&#xe624;",
        enName: 'ZHI LIANG JIAN KONG',
        menuFlag: '1',
        children: [{
                name: '学校概况',
                href: '/head/page/qualityControl/qualityControl/schoolProfile'
            },
            {
                name: '专业建设',
                href: '/head/page/qualityControl/qualityControl/specialtyConstruction'
            }
        ]
    },
    // 质量分析
    {
        name: '质量分析',
        href: 'qualityAssessment',
        icon: "&#xe68c;",
        enName: 'ZHI LIANG FEN XI',
        menuFlag: '1',
        children: [{
                name: '专业质量评估',
                children: [{
                        name: '专业质量概况',
                        href: '/head/page/qualityAssessment/professional'
                    },
                    {
                        name: '质量评估报告',
                        href: '/head/page/qualityAssessment/professionalReport'
                    }
                ]
            },
            {
                name: '教师能力评估',
                children: [{
                        name: '教师能力概况',
                        href: '/head/page/qualityAssessment/teacherAbility'
                    },
                    {
                        name: '教师能力报告',
                        href: '/head/page/qualityAssessment/teacherAbilityReport'
                    }
                ]
            },
            {
                name: '学生素质评估',
                children: [{
                        name: '学生素质概况',
                        href: '/head/page/qualityAssessment/studentQuality'
                    },
                    {
                        name: '学生素质报告',
                        href: '/head/page/qualityAssessment/studentQualityReport'
                    }
                ]
            },
        ]
    },
]
export default MockData;