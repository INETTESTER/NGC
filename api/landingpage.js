import http from 'k6/http';


export function landingpage() {
    const url = 'https://pentest-ngc.one.th/api/backend_2/product_card/landingpage';

    const headers = {
        'Content-Type': 'application/json',
        'Cookie': 'laravel_session=E5f1Ziv6EBOPQ9AmZjNZNzSUW8OImqiyLAi5xYNC',
    };

    const payload = JSON.stringify({
        company_id: -1,
        status_product: 'discount',
        role_user: 'ext_buyer',
    });

    const res = http.post(url, payload, {
        headers: headers
    });


    //console.log(res.body);
    return res
}
