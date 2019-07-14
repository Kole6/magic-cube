/*
通用工具方法类
调用方式：直接使用 this.$Global.xxx()
*/
export default {
    /* 页面跳转类 */
    goBackPage() {
        window.history.back(-1);
    },
    backPage() {
        window.history.go(-1);
    },
    menuScrollTop() { //每次进页面滚动到开头
        document.getElementById('app').scrollTop = 0;
    },
    rightScrollTop() {
        document.getElementById('pageRight').scrollTop = 0;
    },

    /* 字符串处理类 */
    empty(str) { //字符串去除null
        if (str == null || str == undefined) {
            return ''
        } else {
            return str
        }
    },
    isEmpty(str) { //判断对象或字符串是否为空或不存在
        if (str == null || str == undefined) {
            return false
        } else {
            return true
        }
    },

    /* 浏览器本地缓存类 */
    localSet(str1, str2) { //设置缓存-字符串
        window.localStorage.setItem(str1, str2)
    },
    localSetJson(str, obj) { //设置缓存-对象
        window.localStorage.setItem(str, JSON.stringify(obj))
    },
    localGet(str) { //获取缓存-字符串
        return window.localStorage.getItem(str)
    },
    localGetJson(str) { //获取缓存-对象
        return JSON.parse(window.localStorage.getItem(str))
    },
    localRemove(str) { //移除缓存
        window.localStorage.removeItem(str)
    },

    /* 日志类 */
    log(str, obj) {
        console.log('%c' + str, 'color:green', obj || '');
    },
    logColor(str, color) {
        console.log('%c' + str, 'color:' + (color || 'green'));
    },
    //通过下拉框的值获取其名称
    getLableFromOptionList(value, optionList) {
        for (let i = 0; i < optionList.length; i++) {
            if (optionList[i].value == value) {
                return optionList[i].label
            }
        }
    },

    // 时间格式化time="2019-04-08T16:00:00.000+0000"
    timeFormat(time) {
        var d = new Date(time);
        var year = d.getFullYear(); //年  
        var month = d.getMonth() + 1; //月  
        var day = d.getDate(); //日  
        var hh = d.getHours(); //时  
        var mm = d.getMinutes(); //分  
        var ss = d.getSeconds(); //秒  
        var clock = year + "/";
        if (month < 10)
            clock += "0";
        clock += month + "/";
        if (day < 10)
            clock += "0";
        clock += day + " ";


        
        // 时分秒暂不需要
        // if (hh < 10)
        //   clock += "0";
        // clock += hh + ":";
        // if (mm < 10) clock += '0';
        // clock += mm + ":";
        // if (ss < 10) clock += '0';
        // clock += ss;
        return (clock);
    },
}