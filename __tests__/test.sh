echo -e "\n\n\nThis should be half colorful and half non colorfull:"
node test.js

echo -e "\n\n\n\This should be full non colorful:"
node test.js > test.txt
cat test.txt
rm test.txt


