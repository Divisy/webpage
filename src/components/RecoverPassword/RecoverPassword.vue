<template>
    <div class="Login-wrap ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                    <div class="login-form-wrap">
                        <div class="login-header">
                            <h3>Recover Password</h3>
                            <p>We will send a verification code to your mail to reset your password.
                            </p>
                        </div>
                        <div class="login-form">
                            <div class="login-body">
                                <form class="form-wrap" @submit.prevent>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <input id="email" name="email" type="email" placeholder="Username/Email/Phone" required>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <input id="pwd" name="pwd" type="password" placeholder="Old Password">
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form-group mb-0">
                                                <button class="btn style1 w-100 d-block">
                                                    Submit 
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RecoverPassword'
}
</script>