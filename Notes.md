## Danh sách các template mode:
1. landing
2. lab
3. business-site
4. commerce
5. service
6. dashboard
7. admin
8. education
9. portfolio
10. marketplace
11. ai-app
12. developer-tool
13. digital-service
14. research
15. showcase

## Firebase hosting setup
npm install -g firebase-tools
firebase login
firebase init hosting
Chọn Project: Chọn Project ID
Public Directory: Thư mục chứa file tĩnh, để mặc định là public.
Configure as a single-page app: Chọn No (vì dùng Cloud Run điều hướng rồi).
Quan trọng: Nếu nó hỏi có ghi đè (overwrite) file firebase.json không, hãy chọn No để giữ lại file bạn đã soạn.

firebase deploy --only hosting

