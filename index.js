let weaponID = 8;
window.addEventListener('load', function() {
    iniciarContador(); 
    fetchData(); 
});

function iniciarContador() {
    document.getElementById('contadorBtnUp').addEventListener('click', function() {
        weaponID = (weaponID % 16) + 1; 
        fetchData(); 
    });

    document.getElementById('contadorBtnDown').addEventListener('click', function() {
        weaponID = (weaponID === 1) ? 16 : weaponID - 1; 

        fetchData(); 

    });
}


function fetchData() {
    const displayname = document.getElementById("displayname");
    const displayname02 = document.getElementById("displayname02");
    const category = document.getElementById("category");
    const displayIcon = document.getElementById("displayIcon");
    const cost = document.getElementById("cost");
    const fireRate = document.getElementById("fireRate");
    const reloadTime = document.getElementById("reloadTime");
    const runSpeedMultiplier = document.getElementById("runSpeedMultiplier");
    const equipTimeSeconds = document.getElementById("equipTimeSeconds");
    const firstBulletAccuracy = document.getElementById("firstBulletAccuracy");
    const canBeTrashed = document.getElementById("canBeTrashed");

    const endpoint = "https://valorant-api.com/v1/weapons";
    fetch(endpoint)
        .then(res => res.json())
        .then(dados => {

            
            console.log(dados);

            displayIcon.src = dados.data[weaponID].displayIcon;

            displayname.innerText = dados.data[weaponID].displayName;

            displayname02.innerText = dados.data[weaponID].displayName;

            category.innerText = dados.data[weaponID].shopData.category;

            cost.innerText = dados.data[weaponID].shopData.cost;

            fireRate.innerText = dados.data[weaponID].weaponStats.fireRate;

            reloadTime.innerText = dados.data[weaponID].weaponStats.reloadTimeSeconds;

            runSpeedMultiplier.innerText = dados.data[weaponID].weaponStats.runSpeedMultiplier;

            equipTimeSeconds.innerText = dados.data[weaponID].weaponStats.equipTimeSeconds;

            firstBulletAccuracy.innerText = dados.data[weaponID].weaponStats.firstBulletAccuracy;

            canBeTrashed.innerText = dados.data[weaponID].shopData.canBeTrashed;



        })

}
