<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>${TITLE}</title>
    <meta name="viewport"
    content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">
     <link href="fh_static_1/imgs/favicon.ico" type="image/x-icon" rel="Shortcut Icon"/>
    <link rel="stylesheet" href="fh_static_1/css/public.css">
    <link rel="stylesheet" href="fh_static_1/css/listPage.css">
    <script src="fh_static_1/js/jquery-2.1.0.js"></script>
    <script src="fh_static_1/js/paging.js"></script>
</head>
<body>
<!--公共头部-->
<#include "headerTemplate.ftl"> 
<!--公共头部-->
<!--body部分-->
<div class="content">
    <div class="center-1200">
        <div class="cont-menu">
            <div class="cont-menu-title">师资队伍</div>
            <div class="cont-menu-title1"><a href="webj.html" >经济系</a></div>
            <div class="cont-menu-title1"><a href="webc.html" >财税系</a></div>
            <div class="cont-menu-title1"><a href="webg.html" >国经系</a></div>
            <div class="cont-menu-title1"><a href="webk.html" >科研机构</a></div>
            <div class="cont-menu-title1"><a href="webx.html" class="active">行政机构</a></div>
        </div>
        <div class="cont-right">
            <div class="location">
                <p>你的位置:&nbsp;<a href="./index.html">首页</a>&nbsp;>&nbsp;<span class="eo10">师资队伍</span>  >行政机构</p>
            </div>
            <div class="teach-div">
                <div class="teach-title">
                  党 政 办 公 室
                </div>
                <div class="teach-content">
                    <ul>
                        <#list fieldListeo36 as var>
                        <#if var[8]?trim=="党政办公室">
                        <li><a href="JavaScript:;" title="${var[1]}" onclick="gotoDetail('webdetail.html','eo36','eo36','${var[0]}')">${var[1]}</a></li>
                        </#if>
                        </#list>
                    </ul>
                </div>
                <div class="teach-title">
                学 生 管 理 办 公 室
                </div>
                <div class="teach-content">
                    <ul>
                          <#list fieldListeo36 as var>
                        <#if var[8]?trim=="学生管理办公室">
                        <li><a href="JavaScript:;" title="${var[1]}" onclick="gotoDetail('webdetail.html','eo36','eo36','${var[0]}')">${var[1]}</a></li>
                        </#if>
                        </#list>
                    </ul>
                </div>
                <div class="teach-title">
                   团 委 办 公 室
                </div>
                <div class="teach-content">
                    <ul>
                         <#list fieldListeo36 as var>
                        <#if var[8]?trim=="团委办公室">
                        <li><a href="JavaScript:;" title="${var[1]}" onclick="gotoDetail('webdetail.html','eo36','eo36','${var[0]}')">${var[1]}</a></li>
                        </#if>
                        </#list>
                    </ul>
                </div>
                <div class="teach-title">
                    	教 务 管 理 办 公 室
                </div>
                <div class="teach-content">
                    <ul>
                        <#list fieldListeo36 as var>
                        <#if var[8]?trim=="教务管理办公室">
                        <li><a href="JavaScript:;" title="${var[1]}" onclick="gotoDetail('webdetail.html','eo36','eo36','${var[0]}')">${var[1]}</a></li>
                        </#if>
                        </#list>
                    </ul>
                </div>
                <div class="teach-title">
                    	学 科 建 设 管 理 办 公 室
                </div>
                <div class="teach-content">
                    <ul>
                        <#list fieldListeo36 as var>
                        <#if var[8]?trim=="学科建设管理办公室">
                        <li><a href="JavaScript:;" title="${var[1]}" onclick="gotoDetail('webdetail.html','eo36','eo36','${var[0]}')">${var[1]}</a></li>
                        </#if>
                        </#list>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
<!--body部分-->
<!--footer-->
 <#include "footerTemplate.ftl"> 
<!--footer-->

<script src="fh_static_1/js/public.js"></script>
<script src="fh_static_1/js/toList.js"></script>

</body>
</html>