import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPOST, AmbilResponse} from "../config/url_post.js";


function pushData(){
    let data = {
        nama_pemain : getValue("nama_pemain"),
        tim : {
            nama_club : getValue("nama_club"),
            liga : getValue("liga"),
            tahun_berdiri : parseInt(getValue("tahun_berdiri")),
            stadion : getValue("stadion"),
            manajer : getValue("manajer"),
            jumlah_pemain : parseInt(getValue("jumlah_pemain")),
            logo : getValue("logo")
        },
        posisi : getValue("posisi"),
        tinggi : parseFloat(getValue("tinggi")),
        berat : parseFloat(getValue("berat")),
        tanggal_lahir : getValue("tanggal_lahir"),
        negara : getValue("negara"),
        no_punggung : parseFloat(getValue("no_punggung")),
       
      
    }
    postData(urlPOST, data, AmbilResponse);

}

onClick("buttonpost", pushData);