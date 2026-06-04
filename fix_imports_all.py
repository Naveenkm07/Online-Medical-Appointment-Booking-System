import os

for root, dirs, files in os.walk('X:\\abhi\\omabs-react\\src\\pages'):
    for file in files:
        if file.endswith('.jsx'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            depth = len(os.path.relpath(filepath, 'X:\\abhi\\omabs-react\\src').split(os.sep)) - 1
            if depth == 2:
                content = content.replace('../../../utils', '../../utils')
                content = content.replace('../../../data', '../../data')
                content = content.replace('../../../components', '../../components')
                content = content.replace('../../../layouts', '../../layouts')
            elif depth == 3:
                content = content.replace('../../../../utils', '../../../utils')
                content = content.replace('../../../../data', '../../../data')
                content = content.replace('../../../../components', '../../../components')
                content = content.replace('../../../../layouts', '../../../layouts')
            
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
