import http from 'k6/http';

export function list_order_buyer_v2() {
  const url = 'https://pentest-ngc.one.th/api/backend/api/list_order_buyer_v2';

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjdlOGJmNWE1N2U1YTFhMWI1MmE2ZWViZWM3NTliODMxNWYyM2I5NjlmNTc4Nzg4ODAwYTExNzNmODUyMDg0NTIxNTAwYWY0NjcxODdiODEyIn0.eyJhdWQiOiI3ODQiLCJqdGkiOiI3ZThiZjVhNTdlNWExYTFiNTJhNmVlYmVjNzU5YjgzMTVmMjNiOTY5ZjU3ODc4ODgwMGExMTczZjg1MjA4NDUyMTUwMGFmNDY3MTg3YjgxMiIsImlhdCI6MTc1MTg2Mjg1OCwibmJmIjoxNzUxODYyODU4LCJleHAiOjE3ODMzOTg4NTcsInN1YiI6IjY4NDgyNzMxMjgzNzU5NiIsInNjb3BlcyI6W119.g9hi3tPE4JqVQd_uPAunDdYAn4UKodjeOiAuWL9Ia9GkYMjx2-zV1Dzxs_nGEk2QghVe_aY1OcyMJV0_kynmYTEzxJfuRlGx7jd7MgXpoXmQdgodL8JjsFoSUr6UMtDR8cVWjYIsfNUEEa_b19tjsZMkGFewTto8YSyr6nCa8Vf0cFWMmHyDpHc95x3z60XEOv1XSOV-PP-Qw5v1alRO__JmrSVHPnk1rybgezUaU7yv87XYVwZIHxT3Z-fJT0yunPJpYO-9x7drqj_O7d7EAP19k7PrZ6nd512YIO5QJfFbJqWcq4kD2vw5ueppXkHoVHym4OAGWBXaRN1uCnKH2mVlwMELQikWumStcuCcVVzXoLLp-1RyP_1jisouuzeL4ZtqNJm1HaB_mO2oJ7Nqgn1FCx8qFJITB-I42ovVJDEPqL2jhAmGHVMyDyXapKfk80ncpN_G8k1wTQdGnPEhuuHvECYgW208g_XP4GSH6u_fAaCiPrOfHmLs_9q1DTV3suC_tU_RA6BWkGrcS66AmwL8Uf2WEvqucndQTlRHq-G6a2wc0_JVdye0a3735_wrjURDyGW5jRZV-9ZdsPZ1IsrNiBH73aVZubwBlH_wYTDQF1C4v3yXNDpuI0BfSqWd3RwE47YEpqiYQYqFXYBpZaS6uI26VBhC1_Ka1zpLkOQ',
    'Cookie': 'laravel_session=E5f1Ziv6EBOPQ9AmZjNZNzSUW8OImqiyLAi5xYNC'
  };

  const payload = JSON.stringify({
    role_user: 'ext_buyer',
    search_keyword: '',
    order_status: '',
    create_date: ''
  });

  const res = http.post(url, payload, { headers });
  //console.log(res.body); // log response body
  return res; // return response
}
