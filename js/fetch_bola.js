import { get } from "https://bukulapak.github.io/api/process.js";
import { isiTableBola} from "./controller/get_bola.js";
import { urlAPI } from "./config/url.js";
get(urlAPI, isiTableBola);