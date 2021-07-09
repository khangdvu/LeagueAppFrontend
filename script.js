const championSelector = document.getElementById('championSelector');
const championStats = document.getElementById('championStats');
const url = 'http://127.0.0.1:8000/champions/';





fetch(url)
.then(response => response.json())
.then(function(response) {
    champions = response;
    champions.forEach(champion => {
        let option = document.createElement('option');
        option.value = champion.url;
        option.innerText = champion.name;
        championSelector.appendChild(option);
    });
    
});



championSelector.addEventListener("change", function() {

    if (championSelector.innerText != "Select..."){
        console.log(championSelector.value);

        fetch(championSelector.value)
        .then(response => response.json())
        .then(function(champion){
            championStats.innerHTML = ''; 
            for (stat in champion){
                if (stat === "url"){}
                else if (stat === "sprite"){
                    let img = document.createElement("img");
                    img.src = "static/img/champion/" + champion[stat];
                    championStats.appendChild(img);
                }
                else{
                    let statDiv = document.createElement('div');
                    statDiv.className = "statDiv";
                    statDiv.innerText = stat + ": " + champion[stat];
                    championStats.appendChild(statDiv);
                }
            }
            championStats.style.visibility = "visible"; 
        });
    }
}
);