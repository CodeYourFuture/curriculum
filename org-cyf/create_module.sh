#!/bin/bash

if [ -z "$1" ]; then
    echo "No module name supplied. Usage: ./create_module.sh <module_name>"
    exit 1
fi

MODULE_NAME=$1
MODULE_DIR="content/$MODULE_NAME"
SPRINT_DIR="$MODULE_DIR/sprints"
PRODUCT_DIR="$MODULE_DIR/product"

mkdir -p $MODULE_DIR
mkdir -p $SPRINT_DIR
mkdir -p $PRODUCT_DIR

echo "+++
title = '$MODULE_NAME'
description = 'The plan for $MODULE_NAME'
layout = 'module'
emoji= '📚'
menu = ['syllabus']
+++

" > $MODULE_DIR/_index.md

FILES=("prep" "success")
MENU_ORDER=1
for file in "${FILES[@]}"; do
    mkdir -p $MODULE_DIR/$file
    echo "+++
title = '$file'
description = '$file description'
layout = '$file'
emoji= '📝'
menu_level = ['module']
weight = $MENU_ORDER
backlog= 'Module-$MODULE_NAME'
backlog_filter= '$MODULE_NAME'
+++

" > $MODULE_DIR/$file/index.md
    MENU_ORDER=$((MENU_ORDER + 5))
done

for i in {1..4}; do
    SPRINT_NAME="$i"
    SPRINT_PATH="$SPRINT_DIR/$SPRINT_NAME"
    mkdir -p $SPRINT_PATH
    echo "+++
title = 'Sprint $i'
description = 'The plan for the week'
layout = 'sprint'
emoji= '⏱️'
menu_level = ['module']
weight = $((i + 1))
+++

" > $SPRINT_PATH/_index.md

    SPRINT_FILES=("prep" "backlog" "day-plan" "success")
    MENU_ORDER=1

    for file in "${SPRINT_FILES[@]}"; do
        mkdir -p $SPRINT_PATH/$file
        echo "+++
title = '$file'
layout = '$file'
emoji= '📝'
menu_level = ['sprint']
weight = $MENU_ORDER
backlog= 'Module-$MODULE_NAME'
backlog_filter= 'Week $i'
+++

" > $SPRINT_PATH/$file/index.md
        MENU_ORDER=$((MENU_ORDER + 1))
    done
done

PRODUCT_FILES=("prep" "backlog" "success")
for file in "${PRODUCT_FILES[@]}"; do
    mkdir -p $PRODUCT_DIR/$file
    echo "+++
title = 'Product $file'
description = 'Product description'
layout = '$file'
emoji= '🎁'
menu_level = ['module']
+++

" > $PRODUCT_DIR/$file/index.md
    MENU_ORDER=1
    for product_file in "${PRODUCT_FILES[@]}"; do
        mkdir -p $PRODUCT_DIR/$product_file
        echo "+++
title = '$product_file'
description = '$product_file description'
layout = '$product_file'
menu_level = ['product']
emoji= '🎁'
weight = $MENU_ORDER
+++

" > $PRODUCT_DIR/$product_file/index.md
        MENU_ORDER=$((MENU_ORDER + 1))
    done
done
