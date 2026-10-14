import React, { useState } from 'react';

// ==========================================
// 1. Định nghĩa kiểu dữ liệu (Interface)
// ==========================================
interface User {
  id: number;
  name: string;
  email: string;
}

// Định nghĩa kiểu Props cho Component con (UserCard)
interface UserCardProps {
  user: User;
  onDelete: (id: number) => void;
}

// ==========================================
// 2. Component con: Hiển thị thông tin User
// ==========================================
const UserCard: React.FC<UserCardProps> = ({ user, onDelete }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      padding: '12px',
      margin: '8px 0',
      borderRadius: '6px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#f9f9f9'
    }}>
      <div>
        <h4 style={{ margin: '0 0 5px 0' }}>{user.name}</h4>
        <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>Email: {user.email}</p>
      </div>
      <button
        onClick={() => onDelete(user.id)}
        style={{
          background: '#ff4d4f',
          color: 'white',
          border: 'none',
          padding: '6px 12px',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Xóa
      </button>
    </div>
  );
};

// ==========================================
// 3. Component chính: Quản lý danh sách User
// ==========================================
export default function App() {
  // State typing: Mảng chứa các đối tượng User
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "Nguyễn Văn Huy", email: "huy@example.com" },
    { id: 2, name: "Lê Thế Mỹ", email: "my@example.com" }
  ]);

  // State typing: Kiểu string cho input
  const [nameInput, setNameInput] = useState<string>("");
  const [emailInput, setEmailInput] = useState<string>("");

  // Xử lý sự kiện Submit Form (Dùng React.FormEvent)
  const handleAddUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!nameInput.trim()) return;

    const newUser: User = {
      id: Date.now(), // Tạo ID ngẫu nhiên bằng timestamp
      name: nameInput,
      email: emailInput || "chua-co@example.com"
    };

    // Cập nhật state an toàn nhờ TypeScript kiểm tra kiểu dữ liệu
    setUsers([...users, newUser]);
    setNameInput("");
    setEmailInput("");
  };

  // Hàm xử lý xóa user
  const handleDeleteUser = (id: number) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div style={{ maxWidth: '500px', margin: '40px auto', fontFamily: 'Arial, sans-serif' }}>
      <h2>Quản lý Thành viên (React + TypeScript)</h2>

      {/* Form thêm user mới */}
      <form onSubmit={handleAddUser} style={{ background: '#f0f2f5', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            placeholder="Nhập họ tên..."
            value={nameInput}
            // Xử lý sự kiện gõ input (Dùng React.ChangeEvent)
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNameInput(e.target.value)}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="email"
            placeholder="Nhập email..."
            value={emailInput}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmailInput(e.target.value)}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <button
          type="submit"
          style={{ width: '100%', background: '#007bff', color: 'white', border: 'none', padding: '10px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}
        >
          Thêm Thành Viên
        </button>
      </form>

      {/* Hiển thị danh sách */}
      <div>
        <h3>Danh sách ({users.length}):</h3>
        {users.length === 0 ? (
          <p style={{ color: '#888' }}>Chưa có thành viên nào.</p>
        ) : (
          users.map(user => (
            <UserCard key={user.id} user={user} onDelete={handleDeleteUser} />
          ))
        )}
      </div>
    </div>
  );
}