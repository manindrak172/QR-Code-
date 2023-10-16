document.getElementById("generate-button").addEventListener("click", function () {
    var text = document.getElementById("text-input").value;
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: text,
        width: 128,
        height: 128,
    });
});
document.getElementById("download-button").addEventListener("click", function () {
    downloadQRCode();
});
function downloadQRCode() {
    // Get the QR code as a data URL
    var qrCodeImage = document.getElementById("qrcode").querySelector("img");
    var dataURL = qrCodeImage.src;
    var downloadLink = document.createElement("a");
    downloadLink.href = dataURL;
    downloadLink.download = "qrcode.png";
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}
