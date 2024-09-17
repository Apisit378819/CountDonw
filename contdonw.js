(() => { // เริ่มต้นฟังก์ชันที่ไม่มีชื่อ (Anonymous Function) และเรียกใช้งานทันที
    const SECOND = 1000; // กำหนดค่าคงที่สำหรับหนึ่งวินาทีเท่ากับ 1000 มิลลิวินาที
    const MINUTE = SECOND * 60; // กำหนดค่าคงที่สำหรับหนึ่งนาทีเท่ากับ 60 วินาที
    const HOUR = MINUTE * 60; // กำหนดค่าคงที่สำหรับหนึ่งชั่วโมงเท่ากับ 60 นาที
    const DAY = HOUR * 24; // กำหนดค่าคงที่สำหรับหนึ่งวันเท่ากับ 24 ชั่วโมง

    // ฟังก์ชัน setElementInnerText ใช้สำหรับตั้งค่า innerText ของ element ที่ระบุด้วย id
    function setElementInnerText(id, text) {
        const element = document.getElementById(id); // หาค่า element จาก id ที่กำหนด
        element.innerText = text; // ตั้งค่า innerText ของ element เป็นข้อความที่กำหนด
    }

    // ฟังก์ชัน CountDown ใช้สำหรับคำนวณและแสดงเวลานับถอยหลัง
    function CountDown() {
        const now = new Date().getTime(); // ได้เวลาปัจจุบันในรูปแบบ Unix Time (มิลลิวินาทีตั้งแต่ 1 มกราคม 2025)
        const newYear = new Date('January 01, 2025 00:00:00').getTime(); // ได้เวลาเป้าหมาย (วันปีใหม่) ในรูปแบบ Unix Time
        const unixTimeLeft = newYear - now; // คำนวณเวลาที่เหลือจนถึงวันปีใหม่

        // แสดงจำนวนวันที่เหลือ
        const daysElem = document.getElementById('days'); // หาค่า element ที่มี id 'days'
        daysElem.innerText = Math.floor(unixTimeLeft / DAY); // ตั้งค่า innerText ของ element เป็นจำนวนวันที่เหลือ

        // แสดงจำนวนชั่วโมงที่เหลือ
        const hoursElem = document.getElementById('hour'); // หาค่า element ที่มี id 'hour'
        hoursElem.innerText = Math.floor(unixTimeLeft % DAY / HOUR); // ตั้งค่า innerText ของ element เป็นจำนวนชั่วโมงที่เหลือ

        // แสดงจำนวนนาทีที่เหลือ
        const minutesElem = document.getElementById('minute'); // หาค่า element ที่มี id 'minute'
        minutesElem.innerText = Math.floor(unixTimeLeft % HOUR / MINUTE); // ตั้งค่า innerText ของ element เป็นจำนวนนาทีที่เหลือ

        // แสดงจำนวนวินาทีที่เหลือ
        const secondsElem = document.getElementById('second'); // หาค่า element ที่มี id 'second'
        secondsElem.innerText = Math.floor(unixTimeLeft % MINUTE / SECOND); // ตั้งค่า innerText ของ element เป็นจำนวนวินาทีที่เหลือ
    }

    // ฟังก์ชัน run ใช้สำหรับเรียกฟังก์ชัน CountDown
    function run() {
        CountDown(); // เรียกฟังก์ชัน CountDown
    }

    run(); // เรียกใช้ฟังก์ชัน run ครั้งแรกเพื่อแสดงเวลานับถอยหลังทันที

    // ตั้งค่าให้ฟังก์ชัน run ถูกเรียกทุกๆ 1 วินาที (1000 มิลลิวินาที)
    setInterval(run, 1000); // เรียกฟังก์ชัน run ทุกๆ 1 วินาที
})();
