var targetNode;

function init() {
    targetNode = document.getElementById("hasil").firstChild;
    hitungKurs("idr", false);
}

function hitungKurs(id, catatRiwayat) {
    if (catatRiwayat === undefined) {
        catatRiwayat = true;
    }

    var inputEl = document.getElementById(id);
    var rupiah = parseFloat(inputEl.value);
    var hasilUsd = rupiah / 18246;
    targetNode.data = hasilUsd.toFixed(2);

    if (catatRiwayat) {
        var itemRiwayat = document.createElement("li");
        var teksRiwayat = document.createTextNode(
            "Rp" + rupiah + " = US$" + hasilUsd.toFixed(2)
        );
        itemRiwayat.appendChild(teksRiwayat);
        document.getElementById("riwayat").appendChild(itemRiwayat);
    }
}
