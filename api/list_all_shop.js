import http from 'k6/http';

export  function list_all_shop() {
  const url = 'https://pentest-ngc.one.th/api/backend/api/list_all_shop';

  const payload = JSON.stringify({
    role_user: "ext_buyer",
    company_id: "-1",
    page: 1,
    offset: "48",
    search: ""
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
      'Cookie': `laravel_session=${__ENV.SESSION}`
    },
    timeout: 300000
  };

  const res = http.post(url, payload, params);
  //console.log(`Status: ${res.body}`);
  // Optional: console.log(res.body); // Uncomment to inspect response
  return res
}
