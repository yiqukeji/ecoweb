<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="keywords" content="${KEYWORDS}" />
     <title>${TITLE}</title>
    <meta name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">
    <link rel="stylesheet" href="fh_static_1/css/public.css">
    <link rel="stylesheet" href="fh_static_1/css/listPage.css">
    <script src="fh_static_1/js/jquery-2.1.0.js"></script>
    <script src="fh_static_1/js/paging.js"></script>
</head>
<body>
<!--公共头部-->
<!--top-->
<#include "headerTemplate.ftl">
<!--公共头部-->
<!--body部分-->
<div class="content">
    <div class="center-1200">
        <div class="cont-menu">
            <div class="cont-menu-title">
                研究生教育
            </div>
            <ul>
                <li class="ons"><a href="webprof_y.html">专业介绍</a></li>
                <li><a href="webplan_y.html">培养方案</a></li>
                <li><a href="webregu_y.html">规章制度</a></li>
            </ul>
        </div>
        <div class="cont-right">
            <div class="location">
                <p>你的位置:&nbsp;<a href="index.html">首页</a>&nbsp;>&nbsp;研究生教育&nbsp;>&nbsp;专业介绍</p>
            </div>
            <div class="list">
                <ul class="list-ul">
                </ul>
                <div id="page" class="page_div"></div>
            </div>
        </div>
    </div>
</div>
<!--body部分-->
<!--footer-->
   <#include "footerTemplate.ftl"> 
<!--footer-->

<script src="fh_static_1/js/public.js"></script>
<script>
    //分页
    $("#page").paging({
        pageNo: 10,
        totalPage:${totalPagezyjs_y},
        totalSize: ${totalResultzyjs_y},
        callback: function (num) {
            ajaxTest(${currentPagezyjs_y});
        }
    })

    /*
    // 模拟ajax数据用以下方法，方便用户更好的掌握用法
    //参数为当前页 */
    ajaxTest(1);
    function ajaxTest(num) {
        $.ajax({
            url: "web/pageHtml.do",
            type: "get",
            data: {PUB_TYPE:'zyjs_y',currentPage:num},
            dataType: "json",
            success: function(data) {
                rendering(data);//渲染数据
                //分页
                $("#page").paging({
                    pageNo: num,
                    totalPage: data.page.totalPage,
                    totalSize: data.page.totalResult,
                    callback: function(num) {
                        ajaxTest(num)
                    }
                })
            }
        })
    }
   
</script>
<script src="fh_static_1/js/rendering.js"></script>
</body>
</html>