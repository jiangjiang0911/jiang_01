// 开发环境
var baseUrl = 'http://api-breakingnews-web.itheima.net'

// 在发送get(),post(),ajax()之前会触发下面这个函数，会获取到发起请求的所有参数信息
$.ajaxPrefilter(function (options) {
    // console.log(options.url);
    options.url = baseUrl + options.url
    // console.log(options.url);
})