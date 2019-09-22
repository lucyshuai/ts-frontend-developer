
function blockSpecialChar(e) {
    const k = e.keyCode;
    return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || (k > 48 && k <= 57));
}

function inputAddress() {
    const address = document.getElementById('input-address');
    if (address.value) {
        document.getElementById('address-error').style.display = 'none';
    }
}

function inputAmount() {
    const amount = document.getElementById('input-amount');
    if (amount.value) {
        document.getElementById('amount-error').style.display = 'none';
    }
}

function inputOTP() {
    const otp = document.getElementById('input-otp');
    if (otp.value) {
        document.getElementById('otp-error').style.display = 'none';
    }
}
function sendBTC() {
    const validAddress = document.getElementById('input-address').value.length === 34;
    if (!validAddress) {
        document.getElementById('address-error').style.display = 'block';
        return false;
    }
    const validAmount = parseFloat(document.getElementById('input-amount').value) > 0;
    if (!validAmount) {
        document.getElementById('amount-error').style.display = 'block';
        return false;
    }
    const validOtp = document.getElementById('input-otp').value.length === 6;
    if (!validOtp) {
        document.getElementById('otp-error').style.display = 'block';
        return false;
    }
    alert('Success!');
    return true;
}