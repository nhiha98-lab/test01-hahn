GIT 
- Move from Staging back to Working directory 
git restore --staged <file name> or git restore --staged .

- Move from Repository back to Working directory 
git reset HEAD~<số commit>
vd: git reset HEAD~2 (reset 2 commits mới nhất)

- Thay đổi files đã commit
git commit --amend -m
git commit --amend -m”mesage”
git commit --amend  —no-edit: đưa thêm file vào vùng repo (commit thiếu file)

- Tạo nhánh mới:
git branch <tên nhánh>
- Check xem đang có những nhánh nào:
git branch

- Chuyển nhánh chính
git checkout <tên nhánh>

- Vừa tạo nhánh mới vừa chuyển sang nhánh vừa tạo
git checkout -b <tên nhánh mới>

- Gitignore
chỉ cần cho tên file / folder/file để ignore một số files hoặc folder

JAVASCRIPT

- Convention
Snake_case: ho_nhi_ha - tạm thời ko dùng
Kebab-case: ho-nhi-ha - đặt tên file & folder
camelCase: hoNhiHa - đặt tên biến/ hàm
PascalCas: HoNhiHa - đặt tên class
UPPER_CASE: HO_NHI_HA

- CONSOLE LOG

Console.log(`Toi la ${myName}, toi den tu ${queQuan}`) -> recommend to use
Or 
Console.log(“Toi la” + myName + “,toi den tu” + queQuan)

- OBJECT: kiểu dữ liệu quan trọng để lưu trữ dữ liệu dạng key-value
Vd:
const/ let varName = {
key1: “ ”,
key2: “ “,
key3: “ “}

Name/ age/add gọi là key, thường ko nên để dấu cách
Truy xuất giá trị object:
console.log(myInfo.codingClass.name);  //accessing the property of an object
console.log(myInfo["codingClass"]["name"])

- ARRAY
truy xuất mảng:
-lấy độ dài mảng: arr.length
-lấy phần tử theo index tính từ 0, vd: [0],[1],[2]

- FUNCTION: hàm có thể reuse, thực hiện 1 nhiệm vụ tính toán cụ thể
function funcName(){
    ...
}