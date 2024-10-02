document.getElementById('trade-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn việc gửi biểu mẫu

    const pair = document.getElementById('pair').value;
    const amount = document.getElementById('amount').value;
    const action = event.submitter.textContent; // Lấy hành động Mua/Bán

    const message = `Bạn đã ${action.toLowerCase()} ${amount} của cặp ${pair.replace('_', '/')}.`;
    document.getElementById('result-message').innerText = message;
});
