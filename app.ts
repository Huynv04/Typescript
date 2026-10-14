// ==========================================
// PHẦN 1: KIỂU DỮ LIỆU CƠ BẢN & TUPLES
// ==========================================

// Các kiểu nguyên thủy
let username: string = "Nguyen Van A";
let age: number = 25;
let isActive: boolean = true;

// Mảng (Array)
let skills: string[] = ["JavaScript", "React", "TypeScript"];

// Tuples: Mảng có cấu trúc cố định (Phần tử 1 là string, phần tử 2 là number)
let studentInfo: [string, number] = ["SV001", 20];

console.log(`--- PHẦN 1 ---`);
console.log(`User: ${username}, Tuổi: ${age}, Kỹ năng: ${skills.join(", ")}`);
console.log(`Mã sinh viên: ${studentInfo[0]}, Điểm: ${studentInfo[1]}`);


// ==========================================
// PHẦN 2: INTERFACE (Tương tự C#)
// ==========================================

interface User {
    readonly id: number; // readonly: Không cho phép gán lại giá trị sau khi khởi tạo
    name: string;
    email: string;
    age?: number; // Dấu ? nghĩa là tùy chọn (có thể có hoặc không)
}

const employee: User = {
    id: 101,
    name: "Tran Van B",
    email: "b.tran@example.com"
    // age không bắt buộc phải khai báo
};

console.log(`\n--- PHẦN 2 ---`);
console.log(`Nhân viên: ${employee.name} (${employee.email})`);


// ==========================================
// PHẦN 3: UNION TYPES & LITERAL TYPES
// ==========================================

// 1. Union Types (|): Biến có thể là string HOẶC number
let userId: string | number;
userId = "USER-999"; // Hợp lệ
userId = 999;        // Hợp lệ

// 2. Literal Types: Biến chỉ được phép nhận đúng các chuỗi cố định này
type RequestStatus = "pending" | "success" | "error";

let currentStatus: RequestStatus = "pending"; // Hợp lệ
// currentStatus = "loading"; // ❌ Lỗi ngay lập tức vì không nằm trong danh sách cho phép!

console.log(`\n--- PHẦN 3 ---`);
console.log(`ID người dùng: ${userId}`);
console.log(`Trạng thái yêu cầu: ${currentStatus}`);