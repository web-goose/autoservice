function PostSend(name, phone) {
  var n = $('#' + name).val();
  var p = $('#' + phone).val();
  if (n != '' && p != '') {
    $.ajax({
      type: 'POST',
      url: 'hundler.php',
      data: 'mail_f=1&name=' + name + '&phone=' + phone,
      success: function(data) {
        document.location.href = '/thanks.html';
      }
    });

  }
}
