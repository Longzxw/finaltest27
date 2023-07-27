let buttonElement = document.querySelector('#send');
buttonElement.addEventListener('click', event => {
  event.preventDefault();
  alert('Bạn đã đặt vé thành công, kiểm tra gmail để xác nhận vé bản mềm hoặc đăng ký nhận vé bản cứng.');
  location.reload();
});