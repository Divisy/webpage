<template>
    <div class="service-charge-wrap bg-stratos ptb-100">
        <div class="container">
            <form @submit.prevent class="charge-form">
                <div class="row justify-content-center">
                    <div class="col-lg-4 col-md-6">
                        <div class="form-group">
                            <label for="send_money">Your Send Money</label>
                            <input type="number" id="send_money" name="send_money" placeholder="$1000">
                            <select>
                                <option value="1">USD</option>
                                <option value="2">EURO</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="form-group">
                            <label for="recieved_money">Recipient Gets</label>
                            <input type="number" id="recieved_money" name="recieved_money" placeholder="$1000">
                            <select>
                                <option value="1">USD</option>
                                <option value="2">EURO</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12">
                        <div class="form-group form-btn">
                            <button type="submit" class="btn style1 w-100 d-block">Get Estimation</button>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <p><span>82.50</span> Exchange Rate <span>$5.50</span> Transition Fees</p>
                        <p>By clicking continue, I am agree with 
                            <router-link to="/terms-of-service" class="link style1">Terms & Policy</router-link>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Chargecalculator'
}
</script>