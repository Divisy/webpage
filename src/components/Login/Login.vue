<template>
    <div class="Login-wrap ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                    <div class="login-form-wrap">
                        <div class="login-header">
                            <h3>Login Here</h3>
                            <p>Welcome Back! Login To Your Account</p>
                        </div>
                        <div class="login-form">
                            <div class="login-body">
                                <form class="form-wrap" @submit.prevent>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <input id="text" name="fname" type="text"  placeholder="Username Or Email Address" required>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <input id="pwd" name="pwd" type="password" placeholder="Password">
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                                            <div class="checkbox style3">
                                                <input type="checkbox" id="test_1">
                                                <label for="test_1">
                                                    Remember Me
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6 col-6 text-end mb-20">
                                            <router-link to="/recover-password" class="link style1">Forgot Password?</router-link>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <button class="btn style1">
                                                    Login Now
                                                </button>
                                            </div>
                                        </div>
                                        <div class="col-md-12 text-center">
                                            <p class="mb-0">Don’t Have an Account? 
                                                <router-link class="link style1" to="/register">Create One</router-link>
                                            </p>
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
    name: 'Login'
}
</script>