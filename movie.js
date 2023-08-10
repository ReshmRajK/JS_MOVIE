
    search=()=>{
        searchMovie=s1.value;
        fetch(`http://www.omdbapi.com/?apikey=f18570ab&t=${searchMovie}`).then(sData=>sData.json()).
        then(sData=>dispalyData(sData));
    }
    dispalyData=(sData)=>{
        result.innerHTML=`
            <div class="container w-50 text-center bg-white p-5">
                <div class="">
                    <h2>Movie Name: ${sData.Title}</h2>
                    <h4>Year: ${sData.Year} </h4>
                    <h4 class="mt-2">Released Date: ${sData.Released}</h4>
                    <h5 class="mt-2">Director: ${sData.Director}</h5>
                    <h5 class="mt-2">Actors:${sData.Actors}</h5>
                    <p class="text-center mt-3 bg-warning fs-5">${sData.Plot}</p>
                    <h5 class="mt-2">Rating:${sData.Ratings[0].Value}</h5>
                 
                </div>
            </div>`
    }
   
