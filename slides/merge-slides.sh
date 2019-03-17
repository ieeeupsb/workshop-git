#!/bin/bash
shopt -s nullglob

array=(*.md)
a_size=${#array[@]}

apost=\'

for ((i = 0; i < a_size; ++i)); do
  if [[ i -eq a_size-1 ]]; then
    sed 's/src="..\//src="/g; s/src='$apost'..\//src='$apost'/g' ${array[$i]} >> main
    break
  fi
  sed 's/src="..\//src="/g; s/src='$apost'..\//src='$apost'/g' ${array[$i]} >> main
  echo -e "\n---\n" >> main
done

mv main ../main.md
