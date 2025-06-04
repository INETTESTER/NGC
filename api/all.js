import http from 'k6/http';

export function all() {
    const url = 'https://pentest-ngc.one.th/api/backend/api/category/get_category/all';

    const headers = {
        'Cookie': 'laravel_session=E5f1Ziv6EBOPQ9AmZjNZNzSUW8OImqiyLAi5xYNC',
    };

    const res = http.get(url, {
        headers: headers,
        timeout: 300000, // 300,000 ms = 5 นาที
    });



    //console.log(res.body);
    return res
}
