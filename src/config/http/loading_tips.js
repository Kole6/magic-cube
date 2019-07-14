/* 
    time: 2019/03/03
    desc: HTTP request loading layer
    author: wangyong
 */
import {Loading} from 'element-ui';
import _ from 'lodash';
let needLoadingRequestCount = 0;
let loading;
let options = {
    lock: true,
    target: '.loading_'+APP_EN_NAME,
    text: '数据加载中...',
    background: 'rgba(255, 255, 255, 0.7)'
}

let options2 = {
    lock: true,
    text: '加载中……',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
}
function startLoading () {
    loading = Loading.service(options)
}

function endLoading() {
    loading.close()
}

const tryCloseLoading = () => {
    if (needLoadingRequestCount === 0) {
        endLoading();
    }
};

export function showFullScreenLoading () {
    if (needLoadingRequestCount === 0) {
        startLoading();
    }
    needLoadingRequestCount++;
}

export function tryHideFullScreenLoading () {
    if (needLoadingRequestCount <= 0) return;
    needLoadingRequestCount--;
    if (needLoadingRequestCount === 0) {
        _.debounce(tryCloseLoading, 0)()
    }
}