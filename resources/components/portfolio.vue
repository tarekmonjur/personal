<template>
<div>
<!-- Portfolio -->
<div id="portfolio" class="tab-pane fade in active mCustomScrollbar" data-mcs-theme="dark">
	<div class="portfolio main-container">
			<h3 class="row-heading">Portfolio</h3>
		<div class="filters-menu clearfix">
			<ul>
				<li><a class="filter" v-on:click="all=true,active='all'" :class="{'active': active=='all'}">ALL</a></li>
				<li><a class="filter" v-on:click="all=false,webDevelopment=true,softwareDevelopment=false,active='web'" :class="{'active': active=='web'}">WEB DEVELOPMENT</a></li>
				<li><a class="filter" v-on:click="all=false,webDevelopment=false,softwareDevelopment=true,active='soft'" :class="{'active': active=='soft'}">SOFTWARE DEVELOPMENT</a></li>
				<li><a class="filter">APP DESIGN</a></li>
			</ul>
		</div>
		<div>
			<ul class="portfolio-wrapper clearfix">
				<li class="portfolio-item" v-if="all==true || softwareDevelopment==true">
					<a href="http://35.160.205.158/login" target="_blank" class="link-box">
						<div class="portfolio-hover">
							<div class="portfolio-hover-content">
								<h4>LAMBA</h4>
								<p>HRMS System</p>
								<div class="extra-ink">
									<i class="fa fa-link" aria-hidden="true"></i>
									<i class="fa fa-heart-o" aria-hidden="true"></i>
								</div>
							</div>
						</div>
						<div class="image">
							<img alt="" src="image/pfolio-img9.PNG" style="height:180px!important">
						</div>
					</a>							
				</li>

				<li class="portfolio-item" v-if="all==true || webDevelopment==true || softwareDevelopment==true">
					<a href="https://simplicitywanted.com/" target="_blank" class="link-box">
						<div class="portfolio-hover">
							<div class="portfolio-hover-content">
								<h4>Simplicity Wanted</h4>
								<p>Carrer & CV Builder</p>
								<div class="extra-ink">
									<i class="fa fa-link" aria-hidden="true"></i>
									<i class="fa fa-heart-o" aria-hidden="true"></i>
								</div>
							</div>
						</div>
						<div class="image">
							<img alt="" src="image/pfolio-img7.PNG" style="height:180px!important">
						</div>
					</a>							
				</li>

				<li class="portfolio-item" v-if="all==true || webDevelopment==true">
					<a href="#" class="link-box" target="_blank">
						<div class="portfolio-hover">
							<div class="portfolio-hover-content">
								<h4>GunLook Up</h4>
								<p>Gun Store</p>
								<div class="extra-ink">
									<i class="fa fa-link" aria-hidden="true"></i>
									<i class="fa fa-heart-o" aria-hidden="true"></i>
								</div>
							</div>
						</div>
						<div class="image">
							<img alt="" src="image/pfolio-img5.jpg">
						</div>
					</a>							
				</li>

				<li class="portfolio-item" v-if="all==true || webDevelopment==true || softwareDevelopment==true">
					<a href="http://pixelmind.com.bd/bdhouse/" class="link-box" target="_blank">
						<div class="portfolio-hover">
							<div class="portfolio-hover-content">
								<h4>BD House</h4>
								<p>House Booking System</p>
								<div class="extra-ink">
									<i class="fa fa-link" aria-hidden="true"></i>
									<i class="fa fa-heart-o" aria-hidden="true"></i>
								</div>
							</div>
						</div>
						<div class="image">
							<img alt="" src="image/pfolio-img1.jpg">
						</div>
					</a>							
				</li>

				<li class="portfolio-item" v-if="all==true || webDevelopment==true">
					<a href="#" class="link-box" target="_blank">
					    <div class="portfolio-hover">
							<div class="portfolio-hover-content">
								<h4>Wedding</h4>
								<p>Video Surpriser</p>
								<div class="extra-ink">
									<i class="fa fa-link" aria-hidden="true"></i>
									<i class="fa fa-heart-o" aria-hidden="true"></i>
								</div>
							</div>
						</div>
						<div class="image">
							<img alt="" src="image/pfolio-img3.jpg">
						</div>
					</a>							
				</li>

				<li class="portfolio-item" v-if="all==true || softwareDevelopment==true">
					<a href="http://pixelmind.com.bd/restaurant/" class="link-box" target="_blank">
						<div class="portfolio-hover">
							<div class="portfolio-hover-content">
								<h4>Restaurant</h4>
								<p>Online Food Order</p>
								<div class="extra-ink">
									<i class="fa fa-link" aria-hidden="true"></i>
									<i class="fa fa-heart-o" aria-hidden="true"></i>
								</div>
							</div>
						</div>
						<div class="image">
							<img alt="" src="image/pfolio-img8.PNG" style="height:180px!important">
						</div>
					</a>							
				</li>

				<li class="portfolio-item" v-if="all==true || softwareDevelopment==true">
					<a href="http://erp.nanoit.biz/" class="link-box" target="_blank">
						<div class="portfolio-hover">
							<div class="portfolio-hover-content">
								<h4>ERP</h4>
								<p>ERP Software Solution</p>
								<div class="extra-ink">
									<i class="fa fa-link" aria-hidden="true"></i>
									<i class="fa fa-heart-o" aria-hidden="true"></i>
								</div>
							</div>
						</div>
						<div class="image">
							<img alt="" src="image/pfolio-img10.PNG" style="height:180px!important">
						</div>
					</a>							
				</li>

				<li class="portfolio-item" v-if="all==true || webDevelopment==true || softwareDevelopment==true">
					<a href="#" class="link-box">
					    <div class="portfolio-hover">
							<div class="portfolio-hover-content">
								<h4>Autoland</h4>
								<p>Online Inventory</p>
								<div class="extra-ink">
									<i class="fa fa-link" aria-hidden="true"></i>
									<i class="fa fa-heart-o" aria-hidden="true"></i>
								</div>
							</div>
						</div>
						<div class="image">
							<img alt="" src="image/pfolio-img2.png">
						</div>
					</a>							
				</li>
				
				<li class="portfolio-item" v-if="all==true || webDevelopment==true">
					<a href="#" class="link-box">
					    <div class="portfolio-hover">
							<div class="portfolio-hover-content">
								<h4>Master Mind</h4>
								<p>Online Tutorial</p>
								<div class="extra-ink">
									<i class="fa fa-link" aria-hidden="true"></i>
									<i class="fa fa-heart-o" aria-hidden="true"></i>
								</div>
							</div>
						</div>
						<div class="image">
							<img alt="" src="image/pfolio-img4.png">
						</div>
					</a>							
				</li>

				<li class="portfolio-item" v-if="all==true || webDevelopment==true">
					<a href="http://mediusware.com/demo/review/public/" class="link-box" target="_blank">
						<div class="portfolio-hover">
							<div class="portfolio-hover-content">
								<h4>Software Review</h4>
								<p>Software Review Manager</p>
								<div class="extra-ink">
									<i class="fa fa-link" aria-hidden="true"></i>
									<i class="fa fa-heart-o" aria-hidden="true"></i>
								</div>
							</div>
						</div>
						<div class="image" style="height: 170px!important;">
							<img alt="" src="image/review.png">
						</div>
					</a>
				</li>

				<li class="portfolio-item" v-if="all==true || webDevelopment==true">
					<a href="http://mediusware.com/demo/paraliders" class="link-box" target="_blank">
						<div class="portfolio-hover">
							<div class="portfolio-hover-content">
								<h4>Paraliders</h4>
								<p>Online Resource and Feedback</p>
								<div class="extra-ink">
									<i class="fa fa-link" aria-hidden="true"></i>
									<i class="fa fa-heart-o" aria-hidden="true"></i>
								</div>
							</div>
						</div>
						<div class="image" style="height: 200px!important;">
							<img alt="" src="image/paraliders.png">
						</div>
					</a>
				</li>

				<li class="portfolio-item" v-if="all==true || softwareDevelopment==true">
					<a href="http://pixelmind.com.bd/stockmanage/" class="link-box" target="_blank">
						<div class="portfolio-hover">
							<div class="portfolio-hover-content">
								<h4>Stock Mange</h4>
								<p>Inventory & POS</p>
								<div class="extra-ink">
									<i class="fa fa-link" aria-hidden="true"></i>
									<i class="fa fa-heart-o" aria-hidden="true"></i>
								</div>
							</div>
						</div>
						<div class="image" style="height: 170px!important;">
							<img alt="" src="image/stockmanage.png" style="height:150px!important">
						</div>
					</a>
				</li>
			</ul>			
		</div>	
	</div>
</div>
<!-- End Portfolio -->
</div>
</template>
<style>
	.filters-menu a{
		cursor: pointer!important;
	}
</style>
<script>
    export default {
        data(){
            return {
                active: 'all',
                all:true,
				webDevelopment:false,
				softwareDevelopment:false,
				appDevelopment:false
			}
		},
        created(){
            $(document).ready(function () {
                $('#portfolio').mCustomScrollbar();
            });
        },
    }
</script>