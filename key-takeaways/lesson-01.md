- ONE time only for a repo
* Khởi tạo repo local: git init
* Liên kết repository vừa tạo với Git: 
git remote add origin <ssh_link in github> 
tạo SSH key - run in terminal: ssh-keygen -t rsa -b 4096 -C “your_email@example.com”
liên kết code local lên GitHub (config SSH key ở https://github.com/settings/ssh/new)

- Multiple times when there are changed
* Thêm code: git add .
* Thêm commit: git commit -m”init project”
* Push code: git push origin main


- đặt mặc định username & email cho all repo 
git config --global user.name “your name on git”
git config —global user.email “your email on git”



- Cài đặt Playwright 
npm init playwright@latest 
-> gõ enter cho tới hết
code test ở thư mục \tests, thử run test ở Test Explorer (chọn chromium ở Settings nếu ko thấy nút run)
goto: đi đến
expect() ToHaveTitle(\ \): kiểm tra tiêu đề

