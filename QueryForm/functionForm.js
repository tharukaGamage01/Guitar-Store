const allStars = document.querySelectorAll('.star');
const label = document.querySelector('.star_number');
const rate = document.getElementById('rate')

allStars.forEach((star,i)=>{
    star.onclick = function () {
        let current_star_level = i + 1; 
        label.innerHTML=current_star_level;
        rate.value=current_star_level;
        allStars.forEach((star,j) => {
            if(current_star_level >= j+1){
               
                star.innerHTML = '&#9733';
            }else{
                star.innerHTML = '&#9734';
            
            }
        })
    }
})

