import os

for root, dirs, files in os.walk('X:\\abhi\\omabs-react\\src\\pages'):
    for file in files:
        if file.endswith('.jsx'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # For files directly in a category folder e.g. src/pages/patient/File.jsx
            # Depth from src is 2. So they need ../../context
            # For files in src/pages/public/LandingPage/File.jsx
            # Depth from src is 3. So they need ../../../context
            
            depth = len(os.path.relpath(filepath, 'X:\\abhi\\omabs-react\\src').split(os.sep)) - 1
            if depth == 2:
                content = content.replace('../../../context', '../../context')
            elif depth == 3:
                content = content.replace('../../../../context', '../../../context')
            
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
