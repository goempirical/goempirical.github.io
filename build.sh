middleman build
rsync build/** ./
rm -rf build
git add -A
git commit -m "publish updates now"
git push origin