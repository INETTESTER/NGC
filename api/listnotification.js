import http from 'k6/http';


export function listnotification() {
    const url = 'https://pentest-ngc.one.th/api/backend_2/notification/listnotification';

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImY2MTc3Y2U4MjQ5NDE5YTA5MjA2OTgwMDI1ZWY5NzRkM2YyZDUwMzI5ZmVkYmVkMDQyZTEwNzc3NDRlNWY3NjY1NjAxYTk0NmUxY2U1MWE4In0.eyJhdWQiOiI3ODQiLCJqdGkiOiJmNjE3N2NlODI0OTQxOWEwOTIwNjk4MDAyNWVmOTc0ZDNmMmQ1MDMyOWZlZGJlZDA0MmUxMDc3NzQ0ZTVmNzY2NTYwMWE5NDZlMWNlNTFhOCIsImlhdCI6MTc0ODQyNjcwNSwibmJmIjoxNzQ4NDI2NzA1LCJleHAiOjE3Nzk5NjI3MDUsInN1YiI6IjY4NDgyNzMxMjgzNzU5NiIsInNjb3BlcyI6W119.ClyIb1t6qC86x8NkMAHi6t_acp1um4wQtJeKj9UG9RPEYl2OChZQgqOxzcL-n-bL-Kz3a6bfH1nPIidTFZpg2fyGKI6nD6CO9o3uaH5HmiCixyiWsyt_Dy9zaQutWdeLc2FllzJzw0LtsrZzlcfKQP_rjVNirquz5Wzh-NsDn0zC9C6IJ6iijjXbP201BsQBiWbGJBgmVu0fNlpVYpKejdJr6Xp-T5GD-WyJG9lQ06Pzwex4KUYovxMPjE2s2znHI3pvrgEbZkPPvfMmzAwrCHUnUieUTnoHz557TWK0G9GRM2ehs9oA284199jL5CLtzS21s7_CdgxM5P9cE3UPxH-IzN03kLIF5eYo3PYxNsvEm_dZ3fgBKMvtwHTglpGTquYHm3Kfg2bDXi9gXjUXLvQcuu2lNkvZidwr4jQLeO481eJVhzYTIqliZ-3qk9OfYbBVcCJ_BUlV8osCsHHOqIaL6WpLQQSH_MR-Dqso1KopU_YVuBybiO5rFTCm0AcTQhrQiFRjHCxY8DfIhOB1OGR74w__TK5_NTPtmpvnvO0-93HqzCZgpE68kHypruyPNRccywf6Tz1dsJSyzOj_YydT3AfK8DCcOMhlsp_yy8fNJ5IHF0wtgCViHpMq9m6SI72D64TboMsKifQo-tHGlnKK90-ZXBGK5rL1crTy6ws',
        'Cookie': 'laravel_session=E5f1Ziv6EBOPQ9AmZjNZNzSUW8OImqiyLAi5xYNC',
    };

    const payload = JSON.stringify({
        entity: "user",
        entityID: 3310,
        state: "",
        toDatetime: "2025-05-29 13:49:35",
        type: "web",
    });

    const res = http.post(url, payload, {
        headers: headers,
        timeout: 300000,  // 300,000 ms = 300 seconds = 5 นาที
    });


    //console.log(res.body);
    return res
}
