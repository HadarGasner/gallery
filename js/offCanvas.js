function openCanvas(){
    document.querySelector('.offcanvas-btn').classList.toggle('offcanvas-btn-open');
    document.querySelector('.offcanvas-aside').classList.toggle('offcanvas-aside-open');    
}


function onSubmit(){
    console.log(66);
    var email = $('#formControlInputEmail').val();
    var subject = $('#formControlInputSubject').val()
    var bodyTxt = $('#formControlTextarea1').val()
    console.log(email, subject,bodyTxt);
    https://mail.google.com/mail/?view=cm&fs=1&to=me@example.com&su=SUBJECT&b
ody=BODY
}