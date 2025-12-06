function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const validationMessage = document.getElementById('validationMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Ngăn chặn form gửi đi
            event.preventDefault(); 

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Reset thông báo
            validationMessage.textContent = '';
            validationMessage.style.color = 'red';

            // Bắt đầu Validation
            if (name === '' || name.length < 3) {
                validationMessage.textContent = 'Vui lòng nhập Họ và Tên (ít nhất 3 ký tự).';
                return;
            }

            if (email === '') {
                validationMessage.textContent = 'Vui lòng nhập Email.';
                return;
            }
            
            if (!isValidEmail(email)) {
                validationMessage.textContent = 'Email không hợp lệ.';
                return;
            }

            if (message === '') {
                validationMessage.textContent = 'Vui lòng nhập Nội dung tin nhắn.';
                return;
            }

            // Nếu tất cả hợp lệ:
            validationMessage.style.color = 'green';
            validationMessage.textContent = 'Cảm ơn bạn, thông tin liên hệ đã được gửi thành công!';
            // contactForm.reset(); // Có thể uncomment để xóa form sau khi gửi
        });
    }
});
