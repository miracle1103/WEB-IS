<?php /*a:4:{s:65:"/library/WebServer/Documents/tp6/app/origin/view/index/login.html";i:1581068181;s:66:"/library/WebServer/Documents/tp6/app/origin/view/public/_meta.html";i:1580972412;s:68:"/library/WebServer/Documents/tp6/app/origin/view/public/_header.html";i:1580866621;s:68:"/library/WebServer/Documents/tp6/app/origin/view/public/_footer.html";i:1580972412;}*/ ?>
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="format-detection" content="telephone=no">
<meta name="theme-color" content="#282828"/>
<meta property="og:type" content="website">
<!-- 图标 -->
<link href="/static/is/ico/apple-touch-icon-144-precomposed.png" rel="apple-touch-icon" sizes="144x144">
<link href="/static/is/ico/apple-touch-icon-114-precomposed.png" rel="apple-touch-icon" sizes="114x114">
<link href="/static/is/ico/apple-touch-icon-72-precomposed.png" rel="apple-touch-icon" sizes="72x72">
<link href="/static/is/ico/apple-touch-icon-57-precomposed.png" rel="apple-touch-icon">
<link href="/static/is/ico/favicon.png" rel="shortcut icon">
<!-- LayUI-->
<link rel="stylesheet" href="/static/is/layui/css/layui.css">
<!-- CSS 文件 -->
<link rel="stylesheet" href="/static/is/css/fontawesome.min.css">
<link rel="stylesheet" href="/static/is/css/animate.min.css">
<link rel="stylesheet" href="/static/is/css/fancybox.min.css">
<link rel="stylesheet" href="/static/is/css/odometer.min.css">
<link rel="stylesheet" href="/static/is/css/swiper.min.css">
<link rel="stylesheet" href="/static/is/css/bootstrap.min.css">
<link rel="stylesheet" href="/static/is/css/style.css">
<link rel="stylesheet" href="/static/is/css/simple-line-icons.css">
<title>综合系统-统一登录</title>

</head>
<body>
<div class="preloader">
	<div class="layer"></div>
	<div class="inner">
		<figure><img src="/static/is/images/preloader.gif" alt="Image"></figure>
		<p><span class="text-rotater" data-text="汇华学院 | 工学部 | 极客联盟">加载</span></p>
	</div>
</div>
<!--/加载动画-->
<div class="transition-overlay">
	<div class="layer"></div>
</div>
<!--手机版本侧边栏-->
<div class="side-navigation">
	<!--手机版本导航栏-->
	<div class="menu">
		<ul>
			<li>
				<a id="phone_login_set">
					<a id="phone_login_remove">

					</a>
				</a>
			</li>
			<br>
			<li><a href="/">主页</a></li>
			<li>
				<a>第二课堂</a>
				<ul>
					<li><a href="/origin/Index/secondClassIndex">新课程</a></li>
					<li><a href="/origin/Index/secondClassSearch">查讯报名情况</a></li>
				</ul>
			</li>
			<li>
				<a>综合测评</a>
				<ul>
					<li><a href="/origin/Index/synthesizeIndex?type=zong_ce">综合测评</a></li>
					<li><a href="/origin/Index/synthesizeIndex?type=pin_kun">贫困生测评</a></li>
					<li><a href="/origin/Index/synthesizeIndex?type=ban_wei">班委测评</a></li>
					<li><a href="/origin/Index/synthesizeSign?type=pin_kun_sign">贫困生报名</a></li>
					<li><a href="/origin/Index/synthesizeSign?type=ban_wei_sign">班委报名</a></li>
				</ul>
			</li>
			<li>
				<a>时光信箱</a>
				<ul>
					<li><a href="/origin/Index/timePostalIndex">公开信</a></li>
					<li><a href="/origin/Index/timePostalWriteLetter">写信</a></li>
					<li><a href="/origin/Index/timePostalMailBox">信箱</a></li>
				</ul>
			</li>
			<li><a href="/origin/Index/onlineJudgeIndex">通信答题</a></li>
			<li><a href="/origin/Index/forumIndex">论坛</a></li>
			<li><a href="/origin/Index/personal">个人设置</a></li>
		</ul>
	</div>
	<!--/手机版本导航栏-->
	<div class="side-content">
		<figure> <img src="/static/is/images/logo-light.png" alt="Image"> </figure>
		<p>开发者：Shane</p>
		<ul class="gallery">
			<li><a href="/static/is/images/developer/1.jpg" data-fancybox><img src="/static/is/images/developer/1.jpg" alt="Image"></a></li>
		</ul>
		<address>河北师范大学汇华学院</address>
		<h6>QQ：1109571639</h6>
		<p><a>特别感谢：Rex</a></p>
		<ul class="gallery">
			<li><a href="/static/is/images/developer/2.jpg" data-fancybox><img src="/static/is/images/developer/2.jpg" alt="Image"></a></li>
		</ul>
		<h6>QQ：321257088</h6>
		<ul class="social-media">
			<li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
			<li><a href="#"><i class="fab fa-twitter"></i></a></li>
			<li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
			<li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
			<li><a href="#"><i class="fab fa-youtube"></i></a></li>
		</ul>
		<small>© 2019 汇华学院 | 极客联盟Shane</small>
	</div>
</div>
<!-- 电脑本导航栏 -->
<nav class="navbar">
	<div class="container">
		<div class="upper-side">
			<!--图标-->
			<div class="logo">
				<a href="/"><img src="/static/is/images/logo-light.png" alt="Image"></a>
			</div>
			<div class="phone-email">

			</div>
			<div class="language" id="window_login_set">
				<a id="window_login_remove">

				</a>
			</div>
			<div class="hamburger"> <span></span> <span></span> <span></span><span></span> </div>
		</div>
		<!-- 一级导航栏 -->
		<div class="menu">
			<ul>
				<li><a href="/">主页</a></li>
				<li>
					<a href="/origin/Index/secondClassIndex">第二课堂</a>
				</li>
				<li>
					<a href="/origin/Index/synthesizeIndex?type=zong_ce">综合测评</a>
				</li>
				<li>
					<a href="/origin/Index/timePostalIndex">时光信箱</a>
				</li>
				<li><a href="/origin/Index/onlineJudgeIndex">通信答题</a></li>
				<li><a href="/origin/Index/forumIndex">论坛</a></li>
				<li><a href="/origin/Index/personal">个人设置</a></li>
			</ul>
		</div>
		<!-- / 一级导航栏 -->
	</div>
</nav>
<!-- /电脑版本导航栏 -->
<header class="page-header" data-background="/static/is/images/banner/public.jpg" data-stellar-background-ratio="1.15">
	<div class="container">
		<h1>综合系统-统一登录</h1>
		<ol class="breadcrumb">
			<li class="breadcrumb-item"><a>登录</a></li>
			<li class="breadcrumb-item active" aria-current="page">Login</li>
		</ol>
	</div>
</header>
<section class="blog">
	<div class="container">
		<div class="row">
			<div class="col-lg-8">
				<form id="contact" name="contact" method="post">

					<div id="email_place">
						<div class="form-group">
							<input type="text" placeholder="邮箱" id="email" autocomplete="off" required>
						</div>
					</div>

					<div id="type_password">
						<div class="form-group">
							<input type="text" placeholder="密码" id="password" autocomplete="off" required>
						</div>
						<div class="form-group">
							<input type="text" placeholder="图片验证码(需计算)" id="validate_password" autocomplete="off" required>
						</div>

						<div class="form-group">
							<div>
								<img name="captcha" src="<?php echo captcha_src(); ?>" alt="点击更新验证码" />
							</div>
							<a name="captcha_a">&nbsp;&nbsp;&nbsp;&nbsp;看不清?点图片或者点我</a>
						</div>
						<button name="commit" type="button" class="btn btn-lg btn-success lt b-white b-2x btn-block btn-rounded">
							<i class="icon-arrow-right pull-right"></i>
							<span class="m-r-n-lg">登录</span>
						</button>
						<button id="login_type_change" type="button" class="btn btn-lg btn-dark lt b-white b-2x btn-block btn-rounded">
							<i class="icon-cup"></i>
							<span class="m-r-n-lg">切换邮箱登陆</span>
						</button>
					</div>

					<div id="type_email">
						<div class="form-group">
							<input type="text" placeholder="图片验证码(需计算)" id="validate_send_email" autocomplete="off" required>
						</div>

						<div class="form-group">
							<div>
								<img name="captcha" src="<?php echo captcha_src(); ?>" alt="点击更新验证码" />
							</div>
							<a name="captcha_a">&nbsp;&nbsp;&nbsp;&nbsp;看不清?点图片或者点我</a>
						</div>
						<button id="send_email" type="button" class="btn btn-lg btn-success lt b-white b-2x btn-block btn-rounded">
							<i class="icon-arrow-right pull-right"></i>
							<span class="m-r-n-lg">发送验证码</span>
						</button>
						<button id="login_type_back" type="button" class="btn btn-lg btn-dark lt b-white b-2x btn-block btn-rounded">
							<i class="icon-cup"></i>
							<span class="m-r-n-lg">返回密码登陆</span>
						</button>
					</div>

					<div id="type_email_send">
						<div class="form-group">
							<input type="text" placeholder="邮箱6位验证码" id="random" autocomplete="off" required>
						</div>
						<div class="form-group">
							<input type="text" placeholder="图片验证码(需计算)" id="validate_email" autocomplete="off" required>
						</div>

						<div class="form-group">
							<div>
								<img name="captcha" src="<?php echo captcha_src(); ?>" alt="点击更新验证码" />
							</div>
							<a name="captcha_a">&nbsp;&nbsp;&nbsp;&nbsp;看不清?点图片或者点我</a>
						</div>
						<button name="commit" type="button" class="btn btn-lg btn-success lt b-white b-2x btn-block btn-rounded">
							<i class="icon-arrow-right pull-right"></i>
							<span class="m-r-n-lg">登陆</span>
						</button>
					</div>
					<br>
					<button id="register" type="button" class="btn btn-lg btn-danger lt b-white b-2x btn-block btn-rounded">
						<i class="icon-arrow-right pull-right"></i>
						<span class="m-r-n-lg">还没有账号？去注册</span>
					</button>
					<br>
					<div class="form-group" id="warn">
						<div id="remove_warn">

						</div>
					</div>

				</form>
			</div>
			<div class="col-lg-4">
				<aside class="sidebar">
					<div class="widget">
						<h4 class="title">全部功能</h4>
						<ul class="categories">
							<li><a href="/">主页</a></li>
							<li>
								<a href="/origin/Index/secondClassIndex">第二课堂</a>
							</li>
							<li>
								<a href="/origin/Index/synthesizeIndex?type=zong_ce">综合测评</a>
							</li>
							<li>
								<a href="/origin/Index/timePostalIndex">时光信箱</a>
							</li>
							<li><a href="/origin/Index/onlineJudgeIndex">通信答题</a></li>
							<li><a href="/origin/Index/forumIndex">论坛</a></li>
							<li><a href="/origin/Index/personal">个人设置</a></li>
						</ul>
					</div>

					<div class="widget">
						<h4 class="title">简介</h4>
						<p>这里是综合系统统一登陆，登陆后可使用所有无附加要求的功能</p>
					</div>

					<div class="widget">
						<h4 class="title">搜索</h4>
						<form>
							<input type="text" placeholder="摆设...">
							<button type="submit"><i class="fas fa-search"></i></button>
						</form>
					</div>

					<div class="widget">
						<h4 class="title">标签</h4>
						<ul class="tags">
							<li><a href="#">PHP</a></li>
							<li><a href="#">JAVA</a></li>
							<li><a href="#">C#</a></li>
							<li><a href="#">PYTHON</a></li>
							<li><a href="#">C/C++</a></li>
							<li><a href="#">GO</a></li>
						</ul>
					</div>
					</a>
				</aside>
			</div>
		</div>
	</div>
</section>
<section class="footer-bar">
	<div class="container">
		<div class="inner wow fadeIn">
			<div class="row">
				<div class="col-lg-4 wow fadeInUp" data-wow-delay="0.05s">
					<figure><img src="/static/is/images/developer/1.jpg" alt="Image"></figure>
					<h3>申正</h3>
					<p>PHP讲师</p>
				</div>

				<div class="col-lg-4 wow fadeInUp" data-wow-delay="0.10s">
					<figure><img src="/static/is/images/developer/2.jpg" alt="Image"></figure>
					<h3>REX</h3>
					<p>测试人员</p>
				</div>

				<div class="col-lg-4 wow fadeInUp" data-wow-delay="0.15s">
					<figure><img src="/static/is/images/developer/2.jpg" alt="Image"></figure>
					<h3>李晨颖</h3>
					<p>后台前端开发</p>
				</div>
			</div>
		</div>
	</div>
</section>
<!--脚部-->
<footer class="footer">
	<div class="container">
		<div class="row">
			<div class="col-lg-4 wow fadeInUp" data-wow-delay="0.05s">
				<img src="/static/is/images/logo-light.png" alt="Image" class="logo">
				<p>工学部综合系统IS</p>
			</div>
			<div class="col-lg-2 col-md-6 wow fadeInUp" data-wow-delay="0.10s">
				<ul class="footer-menu">
					<li><a href="/origin/Index/secondClassIndex">第二课堂</a></li>
					<li><a href="/origin/Index/synthesizeIndex?type=zong_ce">综合测评</a></li>
					<li><a href="/origin/Index/timePostalIndex">时光信箱</a></li>
					<li><a href="/origin/Index/forumIndex">论坛</a></li>
					<li><a href="#">联系我们</a></li>
				</ul>
			</div>
			<div class="col-lg-2 col-md-6 wow fadeInUp" data-wow-delay="0.15s">
				<ul class="footer-menu">
					<li><a href="http://huihua.hebtu.edu.cn/xxgcxb/">工学部网站</a></li>
					<li><a href="http://huihua.hebtu.edu.cn/">汇华学院网站</a></li>
					<li><a href="http://huihua.hebtu.edu.cn/xfz/">学分制系统</a></li>
					<li><a href="/origin/Index/onlineJudgeIndex">通信答题</a></li>
				</ul>
			</div>
			<div class="col-lg-4 wow fadeInUp" data-wow-delay="0.20s">
				<div class="contact-box">
					<h5>遇到问题？快联系我</h5>
					<h3>13315926692</h3>
					<p><a>1109571639@qq.com</a></p>
					<ul>
						<li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
						<li><a href="#"><i class="fab fa-twitter"></i></a></li>
						<li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
						<li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
						<li><a href="#"><i class="fab fa-youtube"></i></a></li>
					</ul>
				</div>
			</div>
			<div class="col-12">
					<span class="copyright">
						© 2020 汇华学院 | 极客联盟Shane
						<p>
							备案编号：
							<a href="http://www.beian.miit.gov.cn" target="_blank">网站备案号:</a>
							冀ICP备19021549号
						</p>
					</span>
			</div>
		</div>
	</div>
</footer>
<!-- JS 文件 --> 
<script src="/static/is/js/jquery.min.js"></script>
<script src="/static/is/js/jquery.cookie.js"></script>
<script src="/static/is/js/popper.min.js"></script>
<script src="/static/is/js/bootstrap.min.js"></script>
<script src="/static/is/js/swiper.min.js"></script>
<script src="/static/is/js/fancybox.min.js"></script>
<script src="/static/is/js/odometer.min.js"></script>
<script src="/static/is/js/wow.min.js"></script>
<script src="/static/is/js/text-rotater.js"></script>
<script src="/static/is/js/jquery.stellar.js"></script>
<script src="/static/is/js/isotope.min.js"></script>
<script src="/static/is/layui/layui.all.js"></script>
<script src="/static/is/js/scripts.js"></script>
<script src="/assets/js/origin/public/header.js"></script>



<script src="/assets/js/origin/public/login.js"></script>
</body>
</html>