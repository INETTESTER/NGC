import http from 'k6/http';

export function get_cart_b2b_v2() {
  const url = 'https://pentest-ngc.one.th/api/backend/api/get_cart_b2b_v2';

  const payload = JSON.stringify({
    form: "web",
    seller_shop_id: 3197,
    role_user: "ext_buyer",
    coupon: [],
    point: 0,
    pay_type: "general",
    product_to_calculate: [
      {
        product_id: 55626,
        product_attribute_id: "-1",
        attribute_priority_1: "",
        attribute_priority_2: "",
        quantity: "1",
        revenue_default: 148.6,
        revenue_vat: 159,
        vat_revenue: 10.4,
        an_id: "",
        price: 159,
        item_code_pr_buyer: null
      },
      {
        product_id: 93052,
        product_attribute_id: "-1",
        attribute_priority_1: "",
        attribute_priority_2: "",
        quantity: "1",
        revenue_default: 159,
        revenue_vat: 170.13,
        vat_revenue: 11.13,
        an_id: "",
        price: 170.13,
        item_code_pr_buyer: null
      }
    ],
    type_shipping: "online",
    address: [
      {
        id: 3386,
        first_name: "ภัทรวุฒิ",
        last_name: "ซ้ายขวัญ",
        detail: "บ้านเลขที่ 45 ห้องเลขที่ - ชั้นที่ - อาคาร - หมู่บ้าน - หมู่ที่ - ตรอก/ซอย เจริญสุข แยก - ถนน ราษฎร์ยินดี ",
        house_no: "45",
        room_no: "-",
        floor: "-",
        building_name: "-",
        moo_ban: "-",
        moo_no: "-",
        soi: "เจริญสุข",
        yaek: "-",
        street: "ราษฎร์ยินดี",
        sub_district: "หาดใหญ่",
        district: "หาดใหญ่",
        province: "สงขลา",
        zip_code: "90110",
        note_address: "",
        phone: "0612576210",
        phone_ext: "",
        status: "Y"
      }
    ],
    company_id: -1,
    company_position: -1,
    com_perm_id: -1,
    shipping_data: [],
    usePointOrNot: "no",
    edit_Quotation: "no"
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImY2MTc3Y2U4MjQ5NDE5YTA5MjA2OTgwMDI1ZWY5NzRkM2YyZDUwMzI5ZmVkYmVkMDQyZTEwNzc3NDRlNWY3NjY1NjAxYTk0NmUxY2U1MWE4In0.eyJhdWQiOiI3ODQiLCJqdGkiOiJmNjE3N2NlODI0OTQxOWEwOTIwNjk4MDAyNWVmOTc0ZDNmMmQ1MDMyOWZlZGJlZDA0MmUxMDc3NzQ0ZTVmNzY2NTYwMWE5NDZlMWNlNTFhOCIsImlhdCI6MTc0ODQyNjcwNSwibmJmIjoxNzQ4NDI2NzA1LCJleHAiOjE3Nzk5NjI3MDUsInN1YiI6IjY4NDgyNzMxMjgzNzU5NiIsInNjb3BlcyI6W119.ClyIb1t6qC86x8NkMAHi6t_acp1um4wQtJeKj9UG9RPEYl2OChZQgqOxzcL-n-bL-Kz3a6bfH1nPIidTFZpg2fyGKI6nD6CO9o3uaH5HmiCixyiWsyt_Dy9zaQutWdeLc2FllzJzw0LtsrZzlcfKQP_rjVNirquz5Wzh-NsDn0zC9C6IJ6iijjXbP201BsQBiWbGJBgmVu0fNlpVYpKejdJr6Xp-T5GD-WyJG9lQ06Pzwex4KUYovxMPjE2s2znHI3pvrgEbZkPPvfMmzAwrCHUnUieUTnoHz557TWK0G9GRM2ehs9oA284199jL5CLtzS21s7_CdgxM5P9cE3UPxH-IzN03kLIF5eYo3PYxNsvEm_dZ3fgBKMvtwHTglpGTquYHm3Kfg2bDXi9gXjUXLvQcuu2lNkvZidwr4jQLeO481eJVhzYTIqliZ-3qk9OfYbBVcCJ_BUlV8osCsHHOqIaL6WpLQQSH_MR-Dqso1KopU_YVuBybiO5rFTCm0AcTQhrQiFRjHCxY8DfIhOB1OGR74w__TK5_NTPtmpvnvO0-93HqzCZgpE68kHypruyPNRccywf6Tz1dsJSyzOj_YydT3AfK8DCcOMhlsp_yy8fNJ5IHF0wtgCViHpMq9m6SI72D64TboMsKifQo-tHGlnKK90-ZXBGK5rL1crTy6ws`, // ใช้ผ่าน env variable จะดีกว่าฝัง token
      'Cookie': `laravel_session=E5f1Ziv6EBOPQ9AmZjNZNzSUW8OImqiyLAi5xYNC`
    },
  };

  const res = http.post(url, payload, params);
  //console.log(`Status: ${res.body}`);
  // Optional: console.log(res.body); // Uncomment if debugging needed
  return res
}
