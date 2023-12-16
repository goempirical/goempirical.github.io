rm -rf _next/
rm -rf assets/
rm index.html
cd source && npm install && npm run export && cd ..
cp -R source/out/** ./
rm -rf source/out
git add -A
git commit -m 'Static export publish'
git push origin
