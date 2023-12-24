items = [{ "naziv": "Chair", "komada": 1, "cena": 233 }, 
{ "naziv": "Car", "komada": 3, "cena": 324 }, 
{ "naziv": "Computer", "komada": 2, "cena": 319 }, 
{ "naziv": "Chair", "komada": 3, "cena": 405 }, 
{ "naziv": "Pizza", "komada": 3, "cena": 121 }, 
{ "naziv": "Chips", "komada": 3, "cena": 58 }, 
{ "naziv": "Table", "komada": 2, "cena": 324 }, 
{ "naziv": "Sausages", "komada": 3, "cena": 204 }, 
{ "naziv": "Pants", "komada": 3, "cena": 335 }, 
{ "naziv": "Table", "komada": 1, "cena": 350 }]

document.addEventListener("DOMContentLoaded", function(){
    render(items)
    updateUkupnaCena();
})

function ukupnaCena(item) {
    return item.komada * item.cena;
}
function ukupnaCenaTabele(items) {
    let  uct = 0;
    items.forEach(item => {
      uct += ukupnaCena(item);
    });
    return uct;
}

function render(items){
    const tabela = document.getElementById("tabela")
    items.forEach(item => {
        const red = document.createElement("tr");
        const naziv = document.createElement("td");
        naziv.innerHTML = item.naziv
        const cena = document.createElement("td");
        cena.innerHTML = item.cena
        const kolicinaKol = document.createElement("tr");
        const dugmeM = document.createElement("button")
        dugmeM.innerHTML = "-"
        const kolicina = document.createElement("td")
        kolicina.innerHTML = item.komada
        const dugmeP = document.createElement("button")
        dugmeP.innerHTML = "+"
        const ukupna = document.createElement("td")
        red.appendChild(naziv)
        red.appendChild(cena)
        kolicinaKol.appendChild(dugmeM)
        kolicinaKol.appendChild(kolicina)
        kolicinaKol.appendChild(dugmeP)
        red.appendChild(kolicinaKol)
        dugmeM.addEventListener("click", function() {
            update(-1);
        });
    
        dugmeP.addEventListener("click", function() {
            update(1);
        });
        function update(kol) {
            if (item.komada + kol >= 0) {
                item.komada += kol;
                kolicina.innerHTML = item.komada;
                ukupna.innerHTML = ukupnaCena(item);
                updateUkupnaCena();  // Dodajte ovo kako biste ažurirali ukupnu cenu
            }
        }
        
        function updateUkupnaCena() {
            let ukupnaCenaF = items.reduce((total, item) => total + ukupnaCena(item), 0);
            const ukupnaRed = tabela.querySelector("#ukupnaRed td");
            ukupnaRed.innerHTML = "Ukupna cena: " + ukupnaCenaF;
        }
        
        ukupna.innerHTML = ukupnaCena(item)
        red.appendChild(ukupna)
        tabela.appendChild(red)
    });
}