document.addEventListener('DOMContentLoaded', function() {
    var checkbox = document.getElementById('btn-active');
    var pillsTab = document.querySelectorAll('#v-pills-tab');

    checkbox.addEventListener('change', function() {
        // Nếu checkbox được chọn, thêm lớp 'highlight', ngược lại, loại bỏ lớp 'highlight'
        if (checkbox.checked) {
            pillsTab.classList.add('highlight');
        } else {
            pillsTab.classList.remove('highlight');
        }
    });
});