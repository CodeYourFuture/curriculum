import os
import re

def update_front_matter(file_path):
    with open(file_path, 'r') as file:
        content = file.read()

    front_matter_pattern = r'\+\+\+(.*?)\+\+\+'
    front_matter = re.search(front_matter_pattern, content, re.DOTALL).group(1)

    objectives_pattern = r'\[objectives\]\n((?:\s*\d+=\'[^\']*\'\n)*)'
    objectives = re.findall(objectives_pattern, front_matter)

    new_objectives = ',\n  '.join([objective.split('=')[1] for objective in objectives[0].split('\n') if objective])

    new_front_matter = front_matter.replace(objectives[0], f'objectives=[\n  {new_objectives}\n]\n')

    new_content = content.replace(front_matter, new_front_matter)

    with open(file_path, 'w') as file:
        file.write(new_content)

def traverse_directory(directory_path):
    for root, dirs, files in os.walk(directory_path):
        for file in files:
            if file == 'index.md':
                update_front_matter(os.path.join(root, file))

traverse_directory('content')
