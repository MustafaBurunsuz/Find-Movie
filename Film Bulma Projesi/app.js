const profile = new Profile();

const ui= new Deneme();

const searchFilm = document.querySelector
    ('#searchFilm');

searchFilm.addEventListener('keyup', (event) => {
    let text = event.target.value;


    if (text !== '') {
        profile.getProfile(text)
            .then(res =>
                {  
                if(res.profile.length==0){

                    

                }else{
                   ui.showProfile(res.profile);
                }
                })
                
                
                
               
            
            }
                
             
                
              
    
}

)
