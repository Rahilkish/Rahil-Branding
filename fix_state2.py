import sys

with open('src/components/Process.tsx', 'r') as f:
    content = f.read()

use_effect_block = """  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedItem(null);
      }
    };

    if (selectedItem) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem]);"""

content = content.replace(use_effect_block, "")

with open('src/components/Process.tsx', 'w') as f:
    f.write(content)
