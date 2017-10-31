<template>
<div>
<!-- Contact -->
<div id="contacts" class="tab-pane fade in active mCustomScrollbar" data-mcs-theme="dark">
	<div class="contact main-container">
		<div class="details-row row-m-bttom">
			<span class="number">01</span>
			<h3 class="row-heading">Contact info</h3>
			<ul class="contact-list  clearfix">
				<li class="col-md-4 npl">
					<i class="fa fa-map-marker" aria-hidden="true"></i>
					<h5>Address</h5>
					<p>Road:11, House:53, D.I.T Project, Merul Badda, Dhaka.</p>
				</li>
				<li class="col-md-4 pad-l-0">
					<i class="fa fa-phone" aria-hidden="true"></i>
					<h5>Phone</h5>
					<p>+880 1832308565<br>+880 1780292737</p>
				</li>
				<li class="col-md-4 npr pad-l-0">
					<i class="fa fa-envelope-o" aria-hidden="true"></i>
					<h5>Mail</h5>
					<p>tarekmonjur@gmail.com<br>tarek_21ahammed@yahoo.com</p>
				</li>
			</ul>
		</div>
		<div class="details-row row-m-bttom" id="contact">
			<span class="number">02</span>
			<h3 class="row-heading">Send me a mail</h3>

			<form method="post" id="cform" class="custom-form" v-on:submit.prevent="sendMail">
				<div class="form-group" :class="{'has-error': errors.has('name')}">
					<span>Name</span>
					<input name="name" class="form-control" v-model="name" v-validate="'required|alpha_spaces'" :class="{'input': true, 'has-error': errors.has('name') }" type="text" placeholder="Name">
					<i v-show="errors.has('name')" class="fa fa-warning"></i>
						 <span v-show="errors.has('name')">{{ errors.first('name') }}</span>
				</div>
				<div class="form-group" :class="{'has-error': errors.has('email')}">
					<span>Email</span>
					<input name="email" class="form-control" v-model="email" v-validate="'required|email'" :class="{'input': true, 'has-error': errors.has('email') }" type="text" placeholder="Email">
					 <i v-show="errors.has('email')" class="fa fa-warning"></i>
						 <span v-show="errors.has('email')">{{ errors.first('email') }}</span>
				</div>
				<div class="form-group" :class="{'has-error': errors.has('message')}">
					<span>Messege</span>
					<textarea name="message" class="form-control" v-model="message" v-validate="'required'" :class="{'input': true, 'has-error': errors.has('message') }" type="text" placeholder="Message"></textarea>
					<i v-show="errors.has('message')" class="fa fa-warning"></i>
						<span v-show="errors.has('message')">{{ errors.first('message') }}</span>
				</div>
				<button>SEND</button>
			</form>
		</div>
	</div>
</div>
<!-- End Contact -->
</div>
</template>

<script>
    import VeeValidate from 'vee-validate';
    Vue.use(VeeValidate);

    export default {
        data(){
            return {
                appName:'Tarek Monjur',
                name: '',
                email: '',
                message: ''
            }
        },

        created(){
            $(document).ready(function () {
                $('#contacts').mCustomScrollbar();
            });
        },

        methods:{

            sendMail(e){
                var formData = new FormData(e.target);
                this.$validator.validateAll().then(() => {
                    axios.post(window.url+'contact.php', formData)
                        .then(response => {
                            // console.log(response);
                            document.getElementById('cform').reset();
                            Notify("Message successfully send!<br>Thank You.", null, null, 'success');
                        })
                        .catch(e => {
                            Notify("Message not send!<br>Try again.", null, null, 'danger');
                        });

                }).catch(() => {
                    Notify("Please fill all field.", null, null, 'danger');
                });
            }
        },
    }
</script>