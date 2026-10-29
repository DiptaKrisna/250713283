function fn_ValForm() {
            var sMsg = "";
            if (document.getElementById("nama").value == "") {
                sMsg += "\n* Anda belum mengisikan nama";
            }
            if (document.getElementById("email").value == "") {
                sMsg += "\n* Anda belum mengisikan email";
            }
            if (document.getElementById("umur").value == "") {
                sMsg += "\n* Anda belum mengisikan umur";
            }
            if (document.getElementById("kategori").value == "") {
                sMsg += "\n* Anda belum mengisikan kategori";
            }

            if (sMsg != "") {
                alert("Peringatan:\n" + sMsg);
                return false;
            } else {
                return true;
            }
        }