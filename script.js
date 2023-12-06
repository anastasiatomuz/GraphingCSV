async function getData(){
    await fetch("ZoneAnnualMeans.csv")
        .then(response => response.text())
        .then(data => {
            console.log(data)
        })
        .catch(err => console.log(err));
}
getData()