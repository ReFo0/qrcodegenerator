function generateQR() {
    var redirectUrl = document.getElementById('redirectUrl').value;

    // Kontrol: Metin girişi ve URL kontrolü
    if (!redirectUrl || !isValidURL(redirectUrl)) {
        alert('Please enter a valid URL.');
        return;
    }

    var qrCodeContainer = document.getElementById('qrCodeContainer');
    qrCodeContainer.innerHTML = ''; // Clear previous QR code

    var qrcode = new QRCode(qrCodeContainer, {
        text: redirectUrl,
        width: 100,
        height: 100
    });

    qrCodeContainer.style.display = 'none';

    // Create an image element
    var qrCodeImage = new Image();
    qrCodeImage.src = qrCodeContainer.querySelector('canvas').toDataURL('image/png');

    // Create a download link
    var downloadLink = document.createElement('a');
    downloadLink.href = qrCodeImage.src;
    downloadLink.download = 'qrcode_' + Math.random().toString(36).substring(7);
    downloadLink.textContent = 'Download QR Code';

    // Append the download link to the body
    document.body.appendChild(downloadLink);

    // Trigger a click event on the download link
    downloadLink.click();

    // Remove the download link and image from the body
    document.body.removeChild(downloadLink);
    document.body.removeChild(qrCodeImage);

    // Show the QR code container again (optional)
    qrCodeContainer.style.display = 'block';
}

// URL geçerliliğini kontrol etmek için yardımcı fonksiyon
function isValidURL(url) {
    // Basit bir URL kontrolü, istediğiniz karmaşıklıkta bir kontrol ekleyebilirsiniz
    var pattern = /^(https?:\/\/)?[\w.-]+\.\w+(\/.*)?$/;
    return pattern.test(url);
}
