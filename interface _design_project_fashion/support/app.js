document.addEventListener('DOMContentLoaded', function() {
    var checkbox = document.getElementById('btn-active');
    var pillsTab = document.getElementById('v-pills-tab');

    checkbox.addEventListener('change', function() {
        // Nếu checkbox được chọn, thêm lớp 'highlight', ngược lại, loại bỏ lớp 'highlight'
        if (checkbox.checked) {
            pillsTab.classList.add('show-tap');
        } else {
            pillsTab.classList.remove('show-tap');
        }
    });
});