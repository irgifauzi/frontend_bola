import { get } from "https://bukulapak.github.io/api/process.js";
import { isiTableBola } from "./controller/get_detail.js";
import { urlFetch } from "./config/url_detail.js";
get(urlFetch, isiTableBola);