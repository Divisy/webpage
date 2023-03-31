<template>
    <div class="Login-wrap ptb-100">
        <div class="container">
            <div class="row gx-5">
                <div class="col-lg-6">
                    <div class="login-form-wrap">
                        <div class="login-header">
                            <h3>Register New Account</h3>
                            <p>Welcome!! Create A New Account</p>
                        </div>
                        <div class="login-form">
                            <div class="login-body">
                                <form class="form-wrap" @submit.prevent>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <input id="text" name="fname" type="text" placeholder="Full Name" required>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <input id="email" name="email" type="email" placeholder="Email"  required>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <input id="pwd" name="pwd"  type="password" placeholder="Password" required>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <input id="pwd_2" name="pwd_2"  placeholder="Confirm Password"  type="password" required>
                                            </div>
                                        </div>
                                        <div class="col-sm-12 col-12 mb-20">
                                            <div class="checkbox style3">
                                                <input type="checkbox" id="test_1">
                                                <label for="test_1">
                                                    I Agree with the <router-link class="link style1" to="/terms-of-service">Terms &amp; conditions</router-link>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <button class="btn style1">
                                                    Register Now 
                                                </button>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <p class="mb-0">Have an Account? 
                                                <router-link class="link style1" to="/login">Sign In</router-link>
                                            </p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="login-form-wrap">
                        <div class="login-header">
                            <h3>Login Here</h3>
                            <p>Welcome Back!! Login To Your Account</p>
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
                                                <input type="checkbox" id="test_2">
                                                <label for="test_2">Remember Me</label>
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
    name: 'MyAccount'
}
</script>