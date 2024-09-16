#! /bin/sh 

if [ $# -eq 1 ]
then
    STYLE="<\/style><link rel='stylesheet' href='cyf.css'\/>"
    claat export $1

    sed -i "s/<\/style>/$STYLE/g" ./*/index.html
else
    echo "Please enter a markdown file to process"
fi
