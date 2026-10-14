// ==========================================
// 1. Generics (<T>)
// ==========================================

// Hàm Generics: Nhận vào một mảng chứa bất kỳ kiểu dữ liệu nào (T[]) và trả về phần tử đầu tiên
function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}

console.log("--- 1. Generics ---");
const numbers = [10, 20, 30];
const strings = ["TypeScript", "C#", "JavaScript"];

// TypeScript tự nhận diện kiểu dựa trên giá trị truyền vào
console.log("Số đầu tiên:", getFirstElement(numbers)); // Kiểu number
console.log("Chuỗi đầu tiên:", getFirstElement(strings)); // Kiểu string


// ==========================================
// 2. Utility Types (Partial, Pick, Omit)
// ==========================================

interface User1 {
    id: number;
    name: string;
    email: string;
    age: number;
}

// ------------------------------------------
// a. Partial<T>: Mọi thuộc tính thành tùy chọn (?)
// ------------------------------------------
// Dùng cho hàm cập nhật thông tin (không bắt buộc phải truyền đủ tất cả các trường)
function updateUser(id: number, updateData: Partial<User1>) {
    console.log(`Đang cập nhật user ID ${id}:`, updateData);
}

console.log("\n--- 2. Utility Types ---");
// Chỉ cập nhật name và email, không cần truyền id hay age
updateUser(1, { name: "Nguyễn Văn Huy", email: "huy@example.com" });


// ------------------------------------------
// b. Pick<T, K>: Chỉ lấy những trường cần thiết
// ------------------------------------------
// Tạo một kiểu dữ liệu mới chỉ gồm 'name' và 'email' từ User
type UserContactInfo = Pick<User1, "name" | "email">;

const contact: UserContactInfo = {
    name: "Nguyễn Văn Huy",
    email: "huy@example.com"
    // age: 22 -> Lỗi nếu điền vì không được Pick
};
console.log("User Contact (Pick):", contact);


// ------------------------------------------
// c. Omit<T, K>: Bỏ bớt những trường không muốn lấy
// ------------------------------------------
// Tạo kiểu dữ liệu cho việc tạo mới User (bỏ đi trường 'id' vì database tự sinh)
type NewUserPayload = Omit<User, "id">;

const newUser: NewUserPayload = {
    name: "Lê Thế Mỹ",
    email: "my@example.com",
    age: 22
    // id: 123 -> Lỗi nếu điền vì đã bị Omit loại bỏ
};
console.log("New User Payload (Omit):", newUser);