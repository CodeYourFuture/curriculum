#!/bin/bash
# Check if site name and module name are provided
if [ -z "$1" ] || [ -z "$2" ]; then
    echo "Usage: ./create_module.sh <site_name> <module_name>"
    exit 1
fi

# Define site name and module name
SITE_NAME=$1
MODULE_NAME=$2

# Get the script directory and repo root
SCRIPT_DIR="$(cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd)"
REPO_ROOT="$(cd "${SCRIPT_DIR}" && cd .. && pwd)"

# Define content directory paths
SITE_ROOT="$REPO_ROOT/$SITE_NAME"
CONTENT_DIR="$SITE_ROOT/content"
MODULE_DIR="$CONTENT_DIR/$MODULE_NAME"
SPRINT_DIR="$MODULE_DIR/sprints"
PRODUCT_DIR="$MODULE_DIR/product"

# Create the content directory if it doesn't exist
if [ ! -d "$CONTENT_DIR" ]; then
    mkdir -p "$CONTENT_DIR"
    echo "Created content directory at $CONTENT_DIR"
fi

# Change to the site root directory
cd "$SITE_ROOT" || exit

# Create the main module index
hugo new --kind module "$MODULE_DIR/_index.md"

# Create top-level directories and files
# Module has at top level: prep sprints/ product/ success. 
# Sprints and Product are dirs containing further dirs

TOP_LEVEL_FILES=("prep" "success")
for file in "${TOP_LEVEL_FILES[@]}"; do
    FILE_PATH="$MODULE_DIR/$file/index.md"
    hugo new --kind "module-$file" "$FILE_PATH"
done

# Create sprint directories and files
# sprint[1-4] has: prep backlog day-plan success
for i in {1..4}; do
    SPRINT_NAME="$i"
    SPRINT_PATH="$SPRINT_DIR/$SPRINT_NAME"
    hugo new --kind sprint "$SPRINT_PATH/_index.md"
    SPRINT_FILES=("prep" "backlog" "day-plan" "success")
    for file in "${SPRINT_FILES[@]}"; do
        FILE_PATH="$SPRINT_PATH/$file/index.md"
        hugo new --kind "$file" "$FILE_PATH"
    done
done

# Create product directory and files
# product has: prep backlog success
hugo new --kind product "$PRODUCT_DIR/_index.md"

PRODUCT_FILES=("prep" "backlog" "success")
for file in "${PRODUCT_FILES[@]}"; do
    FILE_PATH="$PRODUCT_DIR/$file/index.md"
    hugo new --kind "product-$file" "$FILE_PATH"
done

echo "Module $MODULE_NAME created successfully in site $SITE_NAME."
