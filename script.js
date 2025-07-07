let timer;
let timeLeft = 45;
let resendCount = 0;

function generateOTP() {
    document.getElementById('otpSection').style.display = 'block';
    timeLeft = 45;
    document.getElementById('resendOtpBtn').disabled = true;
    document.getElementById('resendOtpBtn').className = "";
    document.getElementById('timerDisplay').innerText = timeLeft;
    clearInterval(timer);
    timer = setInterval(updateTimer, 1000);
    alert("OTP Sent! (Dummy: 123456)");
}

function updateTimer() {
    timeLeft--;
    document.getElementById('timerDisplay').innerText = timeLeft;
    if (timeLeft <= 0) {
        clearInterval(timer);
        document.getElementById('resendOtpBtn').disabled = false;
        document.getElementById('resendOtpBtn').className = "green";
    }
}

function resendOTP() {
    if (resendCount >= 3) {
        alert("Maximum resend attempts reached.");
        document.getElementById('resendOtpBtn').disabled = true;
        return;
    }
    resendCount++;
    timeLeft = 45;
    document.getElementById('resendOtpBtn').className = "red";
    document.getElementById('resendOtpBtn').disabled = true;
    document.getElementById('timerDisplay').innerText = timeLeft;
    clearInterval(timer);
    timer = setInterval(updateTimer, 1000);
    alert("Resent OTP! (Dummy: 123456)");
}
