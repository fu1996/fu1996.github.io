# !bash
CURRENT_DATE=$(date "+%Y%m%d%H%M")

git add .
git commit -m $CURRENT_DATE

git push origin

npm run build

# scp -r ./build/* fujunkui@101.43.227.79:/www/wwwroot/blog.903360544.xyz

cd build
git add .
git commit -m $CURRENT_DATE
git push origin HEAD:main
