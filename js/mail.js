$(document).ready(function () {
    $('#sendEmail').on('click', function (event) {
      event.preventDefault()
      // Pega os valores dos inputs
      let name = $('#name').val()
      let email = $('#email').val()
      let subject = $('#subject').val()
      let comment = $('#comment').val()
  
      $.ajax({
        type: 'POST',
        url: '../php/sendmail.php',
        cache: false,
        data: {
          name: name,
          email: email,
          subject: subject,
          comment: comment,
        },
        success: function () {
          $('#formReturn').html(
            '<div class="success"><h2>Agradecemos o interesse!</h2><p>Em breve entraremos </ br> em contato.</p></div>'
          )
        },
        error: function () {
          $('#formError').text('Erro ao enviar, tente novamente!')
        },
      })
    })
  })