import sys

with open('src/components/Process.tsx', 'r') as f:
    content = f.read()

content = content.replace(
    '  const [showMoreInfo, setShowMoreInfo] = useState(false);\n    <section',
    '  const [showMoreInfo, setShowMoreInfo] = useState(false);\n\n  return (\n    <section'
)

with open('src/components/Process.tsx', 'w') as f:
    f.write(content)
