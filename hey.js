function printPage() {
    // Your print logic here
    window.print();
  }
  function previewFile(previewId) {
    var preview = document.getElementById(previewId);
      var fileInput = document.getElementById(previewId === 'preview1' ? 'fileInput1' : 'fileInput2');
      var file = fileInput.files[0];
    
    // Clear previous preview
    preview.innerHTML = '';

    var file = fileInput.files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
      var img = document.createElement('img');
      img.src = reader.result;
      img.style.maxWidth = '100%';
      img.style.maxHeight = '100%';
      preview.appendChild(img);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.innerHTML = 'No file selected';
    }
  }