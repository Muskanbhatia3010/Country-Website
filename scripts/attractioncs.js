const imageItems = document.querySelectorAll('.image-item');

imageItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        // Select the corresponding description box
        const descriptionBox = document.querySelectorAll('.detailed-description')[index];

        // Hide all other descriptions
        document.querySelectorAll('.detailed-description').forEach(desc => {
            if (desc !== descriptionBox) {
                desc.style.display = 'none';
            }
        });
        
        // Toggle the visibility of the selected description box
        descriptionBox.style.display = descriptionBox.style.display === 'block' ? 'none' : 'block';
    });
});