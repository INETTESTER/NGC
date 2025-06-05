//=============================== import API =================================
import { sleep } from 'k6';
import { error_check } from '../check/check.js';
import { scenario } from 'k6/execution';


import { search_bar } from '../api/search_bar.js';
import { filter } from '../api/filter.js';
import { list_order_buyer_v2 } from '../api/list_order_buyer_v2.js';
import { list_order_seller_v3 } from '../api/list_order_seller_v3.js';
import { detail_cart_b2b_v2 } from '../api/detail_cart_b2b_v2.js';
import { get_cart_b2b_v2 } from '../api/get_cart_b2b_v2.js';
import { list_all_shop } from '../api/list_all_shop.js';
import { detail_landing_page } from '../api/detail_landing_page.js';
import { get_status_flash_sale } from '../api/get_status_flash_sale.js';
import { landingpage } from '../api/landingpage.js';
import { listnotification } from '../api/listnotification.js';
import { all } from '../api/all.js';



//============================================================================

export default function () {    //เรียกใช้ API ใน export default function
  //response = search_bar()
  //response = filter()
  //response = list_order_buyer_v2()
  //response = list_order_seller_v3()
  //response = detail_cart_b2b_v2()
  //response = get_cart_b2b_v2()
  // response = list_all_shop()
  // response = detail_landing_page()
  // response = get_status_flash_sale()
  // response = landingpage()
  //response = listnotification()
   response = all()
  error_check(response);
  sleep(1)
}











































































const cid = __ENV.cid || "1";
const id = __ENV.id || "1";
const projectname = __ENV.projectname || "1";
const user = __ENV.user || "1";
const durationx = __ENV.durationx || "1";
let response;
const scenariox = __ENV.scenariox || "1";
let options;
const vusx = Math.ceil(user / durationx);
if (scenariox == 1) {
  options = {
    http: {
      timeout: '300s'
    },
    insecureSkipTLSVerify: true,
    discardResponseBodies: true,
    scenarios: {
      contacts: {
        executor: 'per-vu-iterations',
        vus: vusx,
        iterations: durationx,
        maxDuration: '10m',
        gracefulStop: '120s',
      },
    },
  };
}
else if (scenariox == 2) {
  options = {
    http: {
      timeout: '300s'
    },
    insecureSkipTLSVerify: true,
    vus: user,
    duration: durationx + 's',
    gracefulStop: '120s',
  };
}
else if (scenariox == 3) {
  options = {
    http: {
      timeout: '300s'
    },
    insecureSkipTLSVerify: true,
    scenarios: {
      example_scenario: {
        executor: 'constant-arrival-rate',
        // rate: user,
        // timeUnit: durationx+'s',
        rate: vusx,
        timeUnit: '1s',
        preAllocatedVUs: user,
        duration: durationx + 's', // ระบุระยะเวลาที่ต้องการให้ทดสอบ
        gracefulStop: '120s',
      },
    },
  };
}
else {
  options = {
    insecureSkipTLSVerify: true,
    discardResponseBodies: true,
    scenarios: {
      contacts: {
        executor: 'per-vu-iterations',
        vus: vusx,
        iterations: durationx,
        maxDuration: '10m',
      },
    },
  };
}
export { options };