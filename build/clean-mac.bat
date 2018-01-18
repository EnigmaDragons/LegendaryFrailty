cd LegendaryFrailty\Game.app\Contents\Resources\app.nw
rm *.psd
rm *.png
rm *fonts/Aclonica-LICENSE.txt
rmdir build /s /q
rmdir temp /s /q
rmdir utils /s /q
rmdir characters /s /q
rmdir screenshots /s /q
rmdir img/enemies /s /q
rmdir img/parallaxes /s /q
rmdir img/portraits /s /q
rm .gitignore
rm README.md
mkdir save
cd..
cd..
cd..
cd..
rename Game.app GnosisDisperitus.app
cd..
copy /b/v/y LegendaryFrailty\GnosisDisperitus.app\Contents\Resources\app.nw\icon\icon.icns LegendaryFrailty\GnosisDisperitus.app\Contents\Resources\nw.icns
