rm -rf ../png/*
rm -rf ../../avatars/*

convert  -density 1000 -resize x250 neos_N_primary.svg ../../avatars/avatar_250.png
convert  -density 1000 -resize x500 neos_N_primary.svg ../../avatars/avatar_500.png
convert  -density 1000 -resize x1080 neos_N_primary.svg ../../avatars/avatar_1080.png

for i in *.svg; do
	convert -background none -density 1000 -resize x2160 $i ../png/`basename $i .svg`_2160.png
	convert -background none -density 1000 -resize x1080 $i ../png/`basename $i .svg`_1080.png
	convert -background none -density 1000 -resize x500 $i ../png/`basename $i .svg`_500.png
	convert -background none -density 1000 -resize x250 $i ../png/`basename $i .svg`_250.png
done
