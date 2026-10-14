// ==========================================
// 1. Function Parameters & Return Types
// ==========================================

// Hàm thông thường
function add(a: number, b: number): number {
    return a + b;
}

// Arrow function
const multiply = (x: number, y: number): number => x * y;

console.log("--- 1. Parameters & Return Types ---");
console.log("Add (5 + 3):", add(5, 3));
console.log("Multiply (4 * 2):", multiply(4, 2));


// ==========================================
// 2. Optional & Default Parameters
// ==========================================

// Optional parameter (?) - lastName là không bắt buộc
function buildName(firstName: string, lastName?: string): string {
    if (lastName) {
        return `${firstName} ${lastName}`;
    }
    return firstName;
}

// Default parameter (= value) - discount mặc định là 10% (0.1)
function calculatePrice(price: number, discount: number = 0.1): number {
    return price - (price * discount);
}

console.log("\n--- 2. Optional & Default Parameters ---");
console.log("Full name:", buildName("Nguyễn", "Huy"));
console.log("Only first name:", buildName("Huy"));
console.log("Price with default discount (100.000đ):", calculatePrice(100000));
console.log("Price with custom discount (100.000đ, giảm 20%):", calculatePrice(100000, 0.2));


// ==========================================
// 3. Void & Never
// ==========================================

// void: Hàm chỉ thực hiện hành động, không trả về giá trị
function logMessage(message: string): void {
    console.log(`[LOG]: ${message}`);
}

// never: Hàm luôn ném lỗi và không bao giờ chạy đến cuối hàm
function throwError(errorMsg: string): never {
    throw new Error(errorMsg);
}

console.log("\n--- 3. Void & Never ---");
logMessage("Hệ thống khởi động thành công!");

// Thử nghiệm gọi hàm throwError an toàn trong try-catch
try {
    throwError("Đã xảy ra lỗi kết nối cơ sở dữ liệu!");
} catch (e: any) {
    console.log("Đã bắt được lỗi:", e.message);
}