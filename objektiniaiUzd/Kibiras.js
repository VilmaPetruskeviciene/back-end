class Kibiras {
    constructor(name) {
        this.name = name;
        this.akmenuKiekis = 0;
    }


    prideti1Akmeni() {
        this.akmenuKiekis += 1;
        return 'akmenys ' + this.akmenuKiekis;
    }

    pridetiDaugAkmenu(kiekis) {
        this.akmenuKiekis += kiekis;
        return 'akmenys ' + this.akmenuKiekis;
    }

    kiekPririnktaAkmenu() {
        return 'Pririnkta akmenu: ' + this.akmenuKiekis
    }

}


module.exports = Kibiras;