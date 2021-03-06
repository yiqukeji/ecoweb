<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${TITLE}</title>
<meta name="keywords" content="${KEYWORDS}" />
<meta name="description" content="${DESCRIPTION}">
<meta name="author" content="fhadmin">

<!-- core CSS -->
<link href="fh_static_3/css/bootstrap.min.css" rel="stylesheet">
<link href="fh_static_3/css/font-awesome.min.css" rel="stylesheet">
<link href="fh_static_3/css/prettyPhoto.css" rel="stylesheet">
<link href="fh_static_3/css/main.css" rel="stylesheet">
<link href="fh_static_3/css/responsive.css" rel="stylesheet">
<link href="fh_static_3/css/owl.carousel.css" rel="stylesheet">
<link href="fh_static_3/css/owl.theme.css" rel="stylesheet">

<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body>

<!-- header 包含导航菜单 -->
<#include "headerTemplate.ftl"> 
<!-- header 包含导航菜单 -->
    
<div id="inner-page">
  <div class="top-center">
    <h2>产品案例 Product case</h2>
  </div>
</div>
    
  <div class="container">
    <div class="row contact_top">
    	<div style="appding-left:20px;appding-right:20px;margin-top:20px;">

		    <div class="row">
		      <div class="portfolio-items">
		      
		      <#list fieldList5 as var>
		        <div class="portfolio-item apps col-xs-12 col-sm-4 col-md-4">
		          <div class="recent-work-wrap"> <img class="img-responsive" src="${var[1]}" alt="${var[0]}">
		            <div class="overlay">
		              <div class="recent-work-inner">
		                <h3><a href="${var[2]}">${var[0]}</a> </h3>
		                <p>${var[3]}</p>
		                <a class="preview" href="${var[1]}" rel="prettyPhoto"><i class="fa fa-search"></i>查看</a> </div>
		            </div>
		          </div>
		        </div>
		        <!--/.portfolio-item-->
		       </#list>
		       
		      </div>
		     </div>
			</div>

		</div>
    </div>
  </div> 
    
    
    

<!-- footer 包含底部 -->
<#include "footerTemplate.ftl"> 
<!-- footer 包含底部  -->

<script type="text/javascript" src="fh_static_3/js/jquery.js"></script> 
<script type="text/javascript" src="fh_static_3/js/bootstrap.min.js"></script> 
<script type="text/javascript" src="fh_static_3/js/jquery.prettyPhoto.js"></script> 
<script type="text/javascript" src="fh_static_3/js/jquery.isotope.min.js"></script> 
<script type="text/javascript" src="fh_static_3/js/owl.carousel.js"></script> 
<script type="text/javascript" src="fh_static_3/js/main.js"></script>

<script type="text/javascript">
	$(window).load(function() {
		$("#Product").addClass("active");
	});
</script>
</body>
</html>
