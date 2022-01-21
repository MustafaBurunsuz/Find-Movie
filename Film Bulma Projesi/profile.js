class Profile {
    constructor() {
        this.clientid = ''
        this.clienSecret= ''
    }


    async getProfile(username) {
        const ProfileResponse = await fetch('http://omdbapi.com/?apikey=952eb1f3&t='+username);

        const profile = await ProfileResponse.json();

        return {
            profile
        }
    }
}

class Deneme{
    constructor(){

        this.FilmContainer= document.querySelector
        ('#FilmContainer');
        this.alert =document.querySelector('#alert');
    }




    showProfile(profile){
        this.FilmContainer.innerHTML= `
        
        
        <div class="card-card body">
            <div class="row">
                 <div class="col-md-3"
                 <a href="https://placeholder.com">
                 <img src="${profile.Poster}" class="img-thumbnail"> </a>
            </div>
                <div class="col-md-9">

                <h4> Contact </h4>
                <ul class="list-group">

                <li class="list-group-item"> Title: ${profile.Title} </li>
                <li class="list-group-item"> Year: ${profile.Year} </li>
                <li class="list-group-item"> Rated: ${profile.Rated} </li>
                <li class="list-group-item"> Released: ${profile.Released} </li>
                <li class="list-group-item"> Genre: ${profile.Genre} </li>
                <li class="list-group-item"> Director: ${profile.Director} </li>
                <li class="list-group-item"> Writer: ${profile.Writer} </li>
                <li class="list-group-item"> Actors: ${profile.Actors} </li>
                <li class="list-group-item"> Plot: ${profile.Plot} </li>
                <li class="list-group-item"> Language: ${profile.Language} </li>
                <li class="list-group-item"> Country: ${profile.Country} </li>
                <li class="list-group-item"> Awards: ${profile.Awards} </li>
                <li class="list-group-item"> Poster: ${profile.Poster} </li>
                <li class="list-group-item"> Ratings:  ${profile.Ratings[0].Source}, ${profile.Ratings[0].Value} 
                </li> 
                <li class="list-group-item"> Ratings:  ${profile.Ratings[1].Source}, ${profile.Ratings[1].Value} 
                </li>
                <li class="list-group-item"> Metascore: ${profile.Metascore} </li>
                <li class="list-group-item"> imdbRate: ${profile.imdbRating} </li>
                <li class="list-group-item"> imdbVote: ${profile.imdbVotes} </li>
                <li class="list-group-item"> imdbID: ${profile.imdbID} </li>
                <li class="list-group-item"> Type: ${profile.Type} </li>
                <li class="list-group-item"> Dvd: ${profile.DVD} </li>
                <li class="list-group-item"> BoxOffice: ${profile.BoxOffice} </li>
                <li class="list-group-item"> Production: ${profile.Production} </li>
                <li class="list-group-item"> Website: ${profile.Website} </li>
                <li class="list-group-item"> Response: ${profile.Response} </li>
               
                

                </ul>
                
        
               
        
                </div>
        </div>
        </div>
        
        
        
        
        
        `;

        
    }
}