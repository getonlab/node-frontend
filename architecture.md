Dưới đây là bản summary toàn bộ tư tưởng kiến trúc của geton.vn sau tất cả các cập nhật bạn đã nêu. Mình giữ ngắn gọn, rõ triết lý và không biến thành hệ thống phức tạp.

1. Triết lý cốt lõi của geton.vn

geton.vn = Idea → Product Lab

Mục tiêu:

biến ý tưởng của sinh viên → prototype chạy thật trên web nhanh nhất có thể.

Flow tư duy của hệ thống:

Idea
↓
phân loại ý tưởng
↓
tạo tool hoặc project phù hợp
↓
deploy
↓
share product

Geton không phải chỉ là hosting, mà là nơi biến ý tưởng thành sản phẩm thật.

2. Vai trò của các domain

Kiến trúc domain chia thành 3 nhóm.

1️⃣ Idea Hub
geton.vn
lab.sviuh.net

Chức năng:

nhập idea

AI gợi ý concept

phân loại project

chuyển sang tool hoặc tạo project

Đây là cổng vào của toàn hệ thống.

2️⃣ Tool Apps (mini-product)

Một số ý tưởng thực chất chỉ cần tool đơn giản, không cần backend phức tạp.

Ví dụ:

cv.geton.vn
portfolio.geton.vn
landing.geton.vn

Những app này:

chạy độc lập

dùng Firebase Hosting

dùng Firestore nếu cần

Ví dụ:

cv.geton.vn/[username]

User tạo CV trực tiếp.

3️⃣ Project Apps (full project)

Các project phức tạp hơn sẽ được tạo thành project riêng.

Ví dụ:

ai-comic.geton.vn
podcast-ai.geton.vn
cv-builder.geton.vn

Mỗi project:

repo GitHub
CI/CD
Cloud Run service
domain riêng
3. Ba lớp kiến trúc chính

Toàn hệ thống chỉ có 3 layer.

1 Idea Layer
2 Platform Layer
3 Runtime Layer
4. Idea Layer

Đây là:

geton.vn

Chạy trên:

Firebase Hosting

Lý do:

CDN toàn cầu

static hosting nhanh

free tier tốt

Chức năng:

nhập idea
AI phân loại
redirect sang tool
hoặc tạo project
5. Platform Layer

Đây là backend của hệ thống.

Service chính:

geton-core

Chạy trên:

Google Cloud Run

Bên trong có các module:

idea service
project service
repo service
deploy service
registry

Nhưng tất cả chung một service, không cần microservice.

6. Runtime Layer

Đây là nơi các sản phẩm chạy.

Có hai loại runtime.

1️⃣ Firebase Apps

Các tool đơn giản chạy trên:

Firebase Hosting

Cloud Firestore

Ví dụ:

cv.geton.vn
portfolio.geton.vn
2️⃣ Cloud Run Apps

Project phức tạp chạy trên:

Google Cloud Run

Mỗi project:

1 container
1 service
auto scale

Ví dụ:

ai-comic.geton.vn
podcast-ai.geton.vn
7. Flow tổng thể của hệ thống

Luồng đơn giản nhất:

User
↓
geton.vn
↓
nhập idea
↓
AI phân loại

Sau đó có hai hướng.

Hướng 1 – Tool
redirect → cv.geton.vn

User tạo sản phẩm trực tiếp.

Hướng 2 – Project

System tạo project:

create GitHub repo
create Cloud Run service
map subdomain
save registry

User:

git push
↓
CI/CD deploy
↓
project chạy
8. Kiến trúc GitHub

Geton dùng một organization:

github.com/getonlab

Template project:

getonlab/project-template

Project mới:

getonlab/ai-comic

Template có:

Dockerfile
CI/CD
basic API
basic frontend
9. Kiến trúc DNS

DNS cực đơn giản.

geton.vn
*.geton.vn

Wildcard cho project.

Ví dụ:

ai-comic.geton.vn
10. Registry của platform

Geton cần database nhỏ để quản lý project.

Ví dụ bảng:

projects

fields:

id
name
slug
repo
service
domain
owner
created_at
11. Kiến trúc database

Project có thể dùng:

PostgreSQL
Firestore
Firebase
external DB

Nếu dùng PostgreSQL:

1 instance
nhiều database
12. Chi phí vận hành

Ví dụ:

500–1000 project sinh viên

Chi phí:

Cloud Run ~ gần 0
Cloud SQL ~ $20–30
Firestore ~ free tier

Tổng:

$20–40 / tháng
13. Tư tưởng thiết kế quan trọng

Geton tuân theo các nguyên tắc:

1️⃣ Đơn giản

Không microservice phức tạp.

Chỉ cần:

1 backend
1 database
1 GitHub org
2️⃣ Serverless

Dùng:

Firebase

Cloud Run

để giảm vận hành.

3️⃣ Idea-first

Geton bắt đầu từ:

idea

chứ không phải code.

4️⃣ Tool ecosystem

Geton sẽ có nhiều tool:

cv
portfolio
comic
story
landing page
14. Tầm nhìn của geton

Nếu phát triển tốt, geton trở thành:

AI Product Lab for Students

Nơi sinh viên có thể:

nhập ý tưởng
tạo prototype
deploy
build portfolio
launch startup

✅ Summary một câu

geton.vn là một Idea Hub kết hợp Tool Ecosystem và Serverless Project Platform để biến ý tưởng của sinh viên thành sản phẩm chạy thật trên web một cách đơn giản nhất.


Hiện tại hệ thống đã chạy trang chủ (geton.vn), nhập idea, gọi các prompt analysis, design, architecture. sửa [slug], Bấm Tạo trang lab cho ý tưởng này, chuyển sang trang /p/[slug] có form để nhập Website type, Primary goals, target audience vân vân trước khi nhấn Tạo website. Sau khi nhấn Tạo website thì chuyển sang trang /web/[slug] có một số nội dung là một số section với nội dung soạn sẵn trong preset.