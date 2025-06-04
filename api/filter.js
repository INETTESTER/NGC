import http from 'k6/http';

export  function filter() {
  const url = 'https://pentest-ngc.one.th/api/backend_2/search/product/filter';

  const payload = JSON.stringify({
    page: 1,
    limit: 48,
    company_id: -1,
    category: '',
    seller_shop_id: -1,
    orderBy: '',
    status_product: 'discount',
    role_user: 'ext_buyer',
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
      'Cookie': 'laravel_session=E5f1Ziv6EBOPQ9AmZjNZNzSUW8OImqiyLAi5xYNC',
    },
    timeout: 300000
  };

  const res = http.post(url, payload, params);
  //console.log(res.body);
  return res
}
