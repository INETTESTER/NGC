import http from 'k6/http';
export function search_bar() {
    const url = 'https://pentest-ngc.one.th/api/backend_2/search/product/v2/search_bar';

    const payload = JSON.stringify({
        role_user: 'ext_buyer',
        company_id: '-1',
        seller_shop_id: '-1',
        keyword: 'ngs',
        order_by_price: '',
        category: '',
        status_product: '',
        limit: 48,
        page: 1,
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
