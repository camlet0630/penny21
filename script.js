document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const captionText = document.getElementById('caption');
    const closeBtn = document.getElementsByClassName('close')[0];
    const photos = document.querySelectorAll('.photo');
    const fixedHeader = document.querySelector('.fixed-header'); // 选择固定头部

    photos.forEach(photo => {
        photo.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = photo.getElementsByTagName('img')[0].src;
            captionText.innerHTML = photo.getAttribute('data-info');
            fixedHeader.style.visibility = 'hidden'; // 隐藏固定头部
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        fixedHeader.style.visibility = 'visible'; // 恢复显示固定头部
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
            fixedHeader.style.visibility = 'visible'; // 恢复显示固定头部
        }
    });
});
