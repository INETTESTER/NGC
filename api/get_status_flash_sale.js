import http from 'k6/http';

export  function get_status_flash_sale() {
  const url = 'https://pentest-ngc.one.th/api/backend/api/admin_platform/get_status_flash_sale';

  const params = {
    headers: {
      'Cookie': `laravel_session=${__ENV.SESSION}`
    },
    timeout: 300000
  };

  const res = http.get(url, params);
  //console.log(`Status: ${res.body}`);
  // Uncomment to inspect response body
  // console.log(res.body);
  return res
}
