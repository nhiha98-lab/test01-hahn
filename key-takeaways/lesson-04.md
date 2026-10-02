- Phạm vi của biến 
NOTE: Nên khai báo biến trong phạm vi nhỏ nhất có thể (block scope) để dễ maintain, ko nên khai báo global

- Block scope
Var: ko bị giới hạn bởi code block nằm trong {}
Let & const: bị giới hạn bởi code block nếu nằm trong {}

- Function scope: 
biến đc khai báo bên trong hàm, ra ngoài hàm gọi sẽ bị undefined (let/var/const đều bị)

- Global
Khai báo ngoài code block nên gọi global đc

- ĐIỀU KHIỂN VÒNG LẶP
Dùng break hoặc continue
* Break: dừng vòng lặp khi gặp điều kiện
* Continue: bỏ qua vòng lặp hiện tại và chuyển sang vòng lặp tiếp theo

- CÂU ĐIỀU KIỆN NÂNG CAO: If…else & if…esle if

Toán tử điều kiện: cách viết ngắn gọn cho if else
VD: 
const score3 = 89;
let grade = score3 >= 90 ? "A" :
    score3 >= 80 ? "B" :
        score3 >= 70 ? "C" : "D";
console.log(grade);

- VÒNG LẶP NÂNG CAO
* For…in loop: dùng để duyệt qua các thuộc tính của 1 object. Rất hay dùng 
* forEach: method của array dể thực thi 1 function cho mỗi phần tử. Ko thể dùng break / continue


UTILS FUNCTION: 
Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

** String utils: hàm xử lý chuỗi
** Array utils: hàm xử lý mảng
Bỏ khoảng trắng:
* trim(): bỏ khoảng trắng 2 đầu 
* trimStart(): bỏ khoảng trắng đầu
* trimEnd(): bỏ khoảng trắng cuối
Convert chữ hoa chữ thường
* toUpperCase()
* toLowerCase()
Kiểm tra chuỗi có chưa chuỗi con ko:
* includes()
Cắt chuỗi theo 1 từ khoá mong muốn 
* split()
Thay thế chuỗi = 1 chuỗi con
* replace()

- UTILS FUNCTION - ARRAY
**Thêm phần tử vào mảng
Thêm vào cuối 
* push(<phần tử>)
Thêm vào đầu 
* unshift(<phần tử>)
Thêm vào giữa 
* splice(vị trí, 0, <phần tử>) //vì splice này cũng có thể dùng để xoá nên số 0 ở đây có nghĩa là xoá 0 phần tử 

**Xoá phần tử khỏi mảng
Xoá ở cuối
* pop()
Xoá phần tử đầu
* shift()
Xóa phần tử ở vị trí bất kì 
* splice(vị trí x, số lượng y): xóa x phần tử tại vị trí index y

**Tìm kiếm phần tử hợp lệ đầu tiên 
* find() // find(<biến> => <điều kiện>)

**Trả về tất cả phần tử hợp lệ
* filter(). //filter(<biến> => <điều kiện>)

**Biến đổi mảng: 
* map(): tạo mảng mới = cách áp dụng 1 hàm lên từng phần tử của mảng, trả về mảng mới có cùng độ dài 

**Sắp xếp mảng
So sánh từ cặp a, b
Nếu a - b -> ra số âm: a đứng trước b
Nếu a - b -> ra số dương: a đứng sau b
Nếu a - b =  0: giữ nguyên thứ tự
* sort((a, b) => a - b): sắp xếp tăng dần
* sort((a, b) => b - a): sắp xếp giảm dần
