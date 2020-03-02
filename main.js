var lessons = document.querySelectorAll('.lesson')
    lessons.forEach(function (i, it){
        console.log(i);
    i.addEventListener('click', function() {

            var nEl = this.nextElementSibling;
            if(this.classList.contains('active')){
                this.classList.remove('active')
            }else{
                this.classList.add('active')
            }
            if (nEl.classList.contains('active')) {
                nEl.classList.remove('active')
            } else {
                nEl.classList.add('active');
            }
        })
    });