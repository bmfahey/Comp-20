#!/bin/bash
i="0"

while [ $i -lt 4 ]
do
    curl --data "login="+i+"&lat=2&lng=3" https://quiet-depths-13570.herokuapp.com/sendLocation
 
done
