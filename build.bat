@REM Automatically build the project and push it to gh-pages
call npm run build
echo wahyukusumo.com > dist/CNAME
git push origin --delete gh-pages
git add dist -f
git commit -m "update dist"
git subtree push --prefix dist origin gh-pages
pause