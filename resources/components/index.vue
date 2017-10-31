<template>
    <div id="root">
		<!-- Content -->
		<section class="content">
			<div class="container-fluid content-container">
				<div class="row">
					<div class="col-md-5 col-sm-12 clearfix pad-ex left-section">

						<!--Main-profile  -->
						<div class="main-profile clearfix">
							<img alt="" class="img-circle pro-img" src="image/tarekmonjur.jpg">
							<div class="text-wrapper">
								<h3>Tarek Monjur</h3>
								<h4>Software Engineer</h4>
								<p>I am full stack laravel php developer and i like to work of software or application solution base on online as any management system or ecommerce..</p>
								<img class="sign-img" alt="" src="image/sign.png">
								<a target="_blank" href="https://simplicitywanted.com/resume/tarek.monjur">Download Resume</a>
							</div>
							<div class="social-wrapper">
								<a target="_blank" href="https://www.facebook.com/tarekahammed.monjur"><i class="fa fa-facebook" aria-hidden="true"></i></a>
								<a target="_blank" href="https://github.com/tarekmonjur"><i class="fa fa-github" aria-hidden="true"></i></a>
								<a target="_blank" href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
								<a target="_blank" href="https://www.linkedin.com/in/tarek-ahammed/"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
								<a target="_blank" href="#"><i class="fa fa-dribbble" aria-hidden="true"></i></a>
								<a target="_blank" href="#"><i class="fa fa-behance" aria-hidden="true"></i></a>
							</div>
						</div>
						<!-- End Main Profile -->

						<!--Side Menu  -->
						<ul class="side-menu nav nav-tabs clearfix">
							<li :class="{'active':this.$route.meta.active=='about'}">
								<router-link to="/about"><i class="fa fa-file-text" aria-hidden="true"></i><br><span>About Me</span></router-link>
							</li>
							<li :class="{'active':this.$route.meta.active=='resume'}">
								<router-link to="/resume"><i class="fa fa-black-tie" aria-hidden="true"></i><br><span>Resume</span></router-link>
							</li>
							<li :class="{'active':this.$route.meta.active=='portfolio'}">
								<router-link to="/portfolio"><i class="fa fa-th-large" aria-hidden="true"></i><br><span>Portfolio</span></router-link>
							</li>
							<li :class="{'active':this.$route.meta.active=='blog'}">
								<router-link to="/blog"><i class="fa fa-newspaper-o" aria-hidden="true"></i><br><span>Blog</span></router-link>
							</li>
							<li :class="{'active':this.$route.meta.active=='contact'}">
								<router-link to="/contact"><i class="fa fa fa-database" aria-hidden="true"></i><br><span>Contact</span></router-link>
							</li>
						</ul>
						<!-- End Side Menu -->
					</div>

					<div class="col-md-7 col-sm-12 pad-0">
						<div class="details-wrapper">
							<!-- Tab Content -->
							<div class="tab-content pad-ex">
								<router-view></router-view>
							</div>
							<!-- End Tab Content -->
						</div>
					</div>	
				</div>
			</div>
		</section>
    </div>
</template>

<script>
    export default {
        data(){
            return {

            }
        },

    }
</script>