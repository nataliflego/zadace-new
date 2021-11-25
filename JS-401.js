// JS-401

let lista = [
    {
        ime: "Vedran",
        prezime: "Vedrić",
        upisan: true
    },
    {
        ime: "Morena",
        prezime: "Morić",
        upisan: true
    },
    {
        ime: "Sara",
        prezime: "Sarić",
        upisan: true
    },
    {
        ime: "Monika",
        prezime: "Monik",
        upisan: true
    },
    {
        ime: "Lea",
        prezime: "Leić",
        upisan: false
    },
    {
        ime: "Izabela",
        prezime: "Krelić",
        upisan: true
    },
    {
        ime: "Robert",
        prezime: "Rikić",
        upisan: true
    },
    {
        ime: "Iva",
        prezime: "Korić",
        upisan: false
    },
    {
        ime: "Brane",
        prezime: "Brale",
        upisan: false
    },
    {
        ime: "Leo",
        prezime: "Leko",
        upisan: false
    }
];

function provjeri(lista, pojam) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].ime == pojam || lista[i].prezime == pojam && lista[i].upisan) return true;
        else return false;
    }
}

console.log(provjeri(lista, "Morić"));


