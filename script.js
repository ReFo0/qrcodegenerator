function generateQR() {
    var redirectUrl = document.getElementById('redirectUrl').value;

    if (!redirectUrl || !isValidURL(redirectUrl)) {
        alert('Please enter a valid URL.');
        return;
    }

    var qrCodeContainer = document.getElementById('qrCodeContainer');
    qrCodeContainer.innerHTML = ''; 

    var qrcode = new QRCode(qrCodeContainer, {
        text: redirectUrl,
        width: 100,
        height: 100
    });

    qrCodeContainer.style.display = 'none';

    var qrCodeImage = new Image();
    qrCodeImage.src = qrCodeContainer.querySelector('canvas').toDataURL('image/png');

    var downloadLink = document.createElement('a');
    downloadLink.href = qrCodeImage.src;
    downloadLink.download = 'qrcode_' + Math.random().toString(36).substring(7);
    downloadLink.textContent = 'Download QR Code';

    document.body.appendChild(downloadLink);

    downloadLink.click();

    document.body.removeChild(downloadLink);
    document.body.removeChild(qrCodeImage);

    qrCodeContainer.style.display = 'block';
}

function isValidURL(url) {
    var pattern = /^(https?:\/\/)?[\w.-]+\.\w+(\/.*)?$/;
    return pattern.test(url);
}
