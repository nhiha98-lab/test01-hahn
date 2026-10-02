Git Basic

**Trường hợp muốn đặt tên cho 1 specific repo
git config user.name “your name”

**Check git status (commit or not): git status

Check commit history: git log

**Git commit convention: https://www.conventionalcommits.org/en/v1.0.0/
* Chore: sửa nhỏ lẻ ko impact lớn
* Feat: thêm feature mới
* Fix: sửa lỗi test đã tồn tại 
Eg: “chore: add UI improvement”


**Move from Staging back to Working directory 
git restore --staged <file name> or git restore --staged .

**Move from Repository back to Working directory 
git reset HEAD~<số commit>
vd: git reset HEAD~2 (reset 2 commits mới nhất)

**Thay đổi files đã commit
git commit --amend -m
git commit --amend -m”mesage”
git commit --amend  —no-edit: đưa thêm file vào vùng repo (commit thiếu file)


Javascript Basic 

**CONSOLE LOG
Console.log(`Toi la ${myName}, toi den tu ${queQuan}`) -> recommend to use
Or 
Console.log(“Toi la” + myName + “,toi den tu” + queQuan)

**COMMENT
* Thêm // vào đoạn code muốn comment. có thể thêm đầu dòng / giữa dòng
* Comment nhiều dòng /* this code is commented 
break line */

**BIẾN & HẰNG
Var: ko an toàn = let. KHÔNG DÙNG
Let: recommend, luôn luôn dùng let ko dùng var. Khác const ở chỗ có thể gán lại biến (biến thiên - có thể thay đổi)
Const: chỉ đc khai báo 1 làn ko đc thay đổi (hằng số: ko đc thay đổi luôn luôn là 1 giá trị) -> an toàn, dễ khai báo

**DATA TYPES

- Nguyên thủy (primitive types)
Boolean
Number
String
Undefined
Null
Symbol
Big int

- Tham chiếu (reference type)
Object

Vd:
myInfo = {
Name: “”,
Age: “ “,
Add: “ “}

Truy xuất gtri object:
-dùng dấu chấm nếu key KO có special chars/ space
-dùng dấu [] nếu key có special chars/ space

- Toán tử
**So sánh == : so sánh gtri sau khi chuyển đổi kiểu 
5 == "5" //true (string -> number)
5 == "6" //false (string -> number)
true == 1 //true (true -> 1)
false == 0 //true (false -> 0)

**So sánh === : so sánh gtri & kiểu dữ liệu (ko chuyển đổi - NÊN dùng)
5 === "5" //false (# kiểu)
true === 1 //false (# kiểu)
false === 0 //false (# kiểu)
5 === 5 //true (cùng kiểu)

**So sánh != & !==
5 != "5" //false (string -> number)
true != 1 //true (true -> 1)
false != 0 //true (false -> 0)

5 !== "5" //true (# kiểu)
true !== 1 //true (# kiểu)
false !== 0 //true (# kiểu)
5 !== 5 //false (cùng kiểu

**So sánh > < = 
5 > 10 //F
5 < 10 //T
5 >= 10 //F
5 <= 10 //T


**Toán tử Logic
&& : AND - cả 2 vế đều đúng
|| : OR - 1/2 vế đúng

**Toán tử 1 ngôi
-tăng trc, trả về sau: ++x, --x
-trả về trc, tăng sau: x++, x--

**Toán tử toán học: +, -, *, /

- Câu điều kiện 
if (<đk>){
    ...
}
kết hợp đk:
if (x > 6 && x < 11){
    cons...
}
hoặc 
if(x > 6){
    if (x < 11){
        cons...
    }
}

- Loops
i++ -> i=i+1
for (<khởi tạo>; <kiểm tra>; <cập nhật>)
for (let i = 0 ; i < 5, i++)
Vd: tính tổng từ 1 -> 10 
for (let i = 0 ; i < 5, i++){
sum += i
}