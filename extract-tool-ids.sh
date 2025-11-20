#!/bin/bash
# Extract all tool IDs from server/routes.ts switch cases

echo "=== PDF MERGE ===" 
sed -n '/app.post.*\/api\/pdf\/merge/,/app.post/p' server/routes.ts | grep -E "case '|case \"" | sed "s/.*case ['\"]//;s/['\"]:$//"

echo ""
echo "=== PDF SPLIT ==="
sed -n '/app.post.*\/api\/pdf\/split/,/app.post/p' server/routes.ts | grep -E "case '|case \"" | sed "s/.*case ['\"]//;s/['\"]:$//"

echo ""
echo "=== IMAGE COMPRESS ==="
sed -n '/app.post.*\/api\/image\/compress/,/app.post/p' server/routes.ts | grep -E "case '|case \"" | sed "s/.*case ['\"]//;s/['\"]:$//"

echo ""
echo "=== QR GENERATE ==="
sed -n '/app.post.*\/api\/qr\/generate[^-]/,/app.post/p' server/routes.ts | grep -E "case '|case \"" | sed "s/.*case ['\"]//;s/['\"]:$//"
