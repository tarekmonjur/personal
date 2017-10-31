<template>
<div>
<!--Blog  -->
<div id="blog" class="tab-pane fade in active mCustomScrollbar" data-mcs-theme="dark">
	<div class="blog main-container">
		<div class="details-row row-m-bttom">
			<h3 class="row-heading">Blog</h3>
			<ul class="blog-list  clearfix">
				<li>
					<img alt="" src="image/blog-img-1.jpg">
					<h4>A designer must should know how to write clean code</h4>
					<p>Lorem ipsum dolor sit amet, ridens eligendi an nec, his nostro dolorum splendide te. Docendi intellegebat eu pro, ius in facilis reprimique. Primis aliquando vis ne. At per diceret numquam. Ne vim aliquid accusamus.</p>
					<a href="#">Read More</a>
				</li>
				<li>
					<img alt="" src="image/blog-img-2.jpg">
					<h4>A designer must should know how to write clean code</h4>
					<p>Lorem ipsum dolor sit amet, ridens eligendi an nec, his nostro dolorum splendide te. Docendi intellegebat eu pro, ius in facilis reprimique. Primis aliquando vis ne. At per diceret numquam. Ne vim aliquid accusamus.</p>
					<a href="#">Read More</a>
				</li>
				<li>
					<img alt="" src="image/blog-img-3.jpg">
					<h4>A designer must should know how to write clean code</h4>
					<p>Lorem ipsum dolor sit amet, ridens eligendi an nec, his nostro dolorum splendide te. Docendi intellegebat eu pro, ius in facilis reprimique. Primis aliquando vis ne. At per diceret numquam. Ne vim aliquid accusamus.</p>
					<a href="#">Read More</a>
				</li>
			</ul>
		</div>
	</div>
</div>
<!-- End Blog -->
</div>
</template>

<script>
    export default {
        created(){
            $(document).ready(function () {
                $('#blog').mCustomScrollbar();
            });
        }
    }
</script>