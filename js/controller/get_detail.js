import { addInner } from "https://bukulapak.github.io/element/process.js";
import { bolaTabel } from "../../temp/table_bola.js";
export function isiTableBola(results) {
    if (Array.isArray(result)) {
        result.forEach(isiRow);
    } else {
        isiRow(result);
    }
}

function isiRow(value) {
    let content = 
    bolaTabel.replace('<p id="namaPemain" class="text-gray-700">[Nama Pemain]</p>', '<p id="namaPemain" class="text-gray-700">' + value.nama_pemain +'</p>')
            .replace('<p id="namaClub" class="text-gray-700">[Nama Club]</p>', ' <p id="namaClub" class="text-gray-700">'+ value.nama_club +'</p>')
            .replace('<p id="liga" class="text-gray-700">[Liga]</p>', ' <p id="liga" class="text-gray-700">'+ value.liga +'</p>')
            .replace('<p id="tahunBerdiri" class="text-gray-700">[Tahun Berdiri]</p>', '<p id="tahunBerdiri" class="text-gray-700">'+ value.tim.tahun_berdiri +'</p>')
            .replace('<p id="stadion" class="text-gray-700">[Stadion]</p>', '<p id="stadion" class="text-gray-700">'+ value.tim.stadion +'</p>')
            .replace('  <p id="manajer" class="text-gray-700">[Manajer]</p>', ' <p id="manajer" class="text-gray-700">'+ value.tim.manajer +'</p>')
            .replace(' <img id="logo" src="[Logo URL]" alt="Club Logo" class="w-32 h-32">',' <img id="logo" src="'+ value.logo +'" alt="Club Logo" class="w-32 h-32">')
           
            
        setInner("DetailBola", content);

}




