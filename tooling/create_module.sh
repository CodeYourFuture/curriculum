#!/bin/bash
# You need to name the module
if [ -z "$1" ]; then
    echo "No module name supplied. Usage: ./create_module.sh <module_name>"
    exit 1
fi

MODULE_NAME=$1
MODULE_DIR="content/$MODULE_NAME"
SPRINT_DIR="$MODULE_DIR/sprints"
PRODUCT_DIR="$MODULE_DIR/product"

# Main module index
hugo new --kind module "$MODULE_DIR/_index.md"

# Module has at top level: prep/ sprints/ product/ success/. 
# Sprints and Product are dirs containing further dirs

FILES=("prep" "success")
for file in "${FILES[@]}"; do
    FILE_PATH="$MODULE_DIR/$file/index.md"
    hugo new --kind "module-$file" "$FILE_PATH"
done

# Make sprint folders. Sprints have prep backlog day-plan success

for i in {1..4}; do
    SPRINT_NAME="$i"
    SPRINT_PATH="$SPRINT_DIR/$SPRINT_NAME"

    SPRINT_FILES=("prep" "backlog" "day-plan" "success")
    for file in "${SPRINT_FILES[@]}"; do
        FILE_PATH="$SPRINT_PATH/$file/index.md"
        hugo new --kind "$file" "$FILE_PATH"
    done
done

# Make product dir. Product has prep backlog success
hugo new --kind product "$PRODUCT_DIR/_index.md"

PRODUCT_FILES=("prep" "backlog" "success")
for file in "${PRODUCT_FILES[@]}"; do
    FILE_PATH="$PRODUCT_DIR/$file/index.md"
    hugo new --kind "product-$file" "$FILE_PATH"
done
