<template>
    <div class="account-wrap ptb-100">
        <div class="container">
            <div class="section-title style1 text-center mb-40">
                <span>Loan Form</span>
                <h2>Apply For Loan</h2>
            </div>
            <form @submit.prevent class="account-form">
                <div class="row">
                    <div class="col-md-6">
                            <div class="form-group">
                                <label for="fname">Full name</label>
                                <input type="text" id="fname" name="fname">
                            </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="phone">Mobile Number</label>
                            <input type="number" id="phone" name="phone">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="email">Email Address</label>
                            <input type="email" id="email" name="email">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="dob">Date Of Birth</label>
                            <input type="date" id="dob" name="dob">
                        </div>
                    </div>
                    <div class="col-md-6">
                            <div class="form-group">
                                <label for="account_type">Gender</label>
                                <select name="account_type" id="account_type">
                                    <option value="0">Gender</option>
                                    <option value="1">Male </option>
                                    <option value="2">Female </option>
                                </select>
                            </div>
                        </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="pname">Father's anme</label>
                            <input type="text" id="pname" name="pname">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="mname">Mother's anme</label>
                            <input type="text" id="mname" name="mname">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="marry_type">Marital Status</label>
                            <select name="marry_type" id="marry_type">
                                <option value="0">Married</option>
                                <option value="1">Married</option>
                                <option value="12">Unmarried</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="sname">Spouse's anme</label>
                            <input type="text" id="sname" name="sname">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="nation">Nationality</label>
                            <input type="text" id="nation" name="nation">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="ocupation">Ocupation</label>
                            <input type="text" id="ocupation" name="ocupation">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="mon">Monthly Income</label>
                            <input type="text" id="mon" name="mon">
                        </div>
                    </div>
                    <div class="col-md-612">
                        <div class="form-group">
                            <label for="soi">Source Of Income</label>
                            <select name="soi" id="soi">
                                <option value="0">Business</option>
                                <option value="1">Job</option>
                                <option value="12">Others</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <h4>Address</h4>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <label for="address">Address 1</label>
                            <textarea name="address" id="address" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <label for="address_2">Address 2</label>
                            <textarea name="address_2" id="address_2" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="city">City</label>
                            <input type="text" name="city" id="city">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="state">State</label>
                            <input type="text" name="state" id="state">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="zip">ZIP Code</label>
                            <input type="text" name="zip" id="zip">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="country">Country</label>
                            <input type="text" name="country" id="country">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <button class="btn style1 w-100 d-block"> Open Account</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Apply'
}
</script>