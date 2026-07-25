import sys
import re

with open('src/components/Process.tsx', 'r') as f:
    content = f.read()

content = content.replace("import React from 'react';", "import React, { useState } from 'react';")

# Delete selectedItem, hoveredIndex, and useEffect
content = re.sub(r"  const \[selectedItem, setSelectedItem\] = useState<typeof CAPABILITIES\[0\] \| null>\(null\);\n", "", content)
content = re.sub(r"  const \[hoveredIndex, setHoveredIndex\] = useState<number \| null>\(null\);\n", "", content)

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
print("Restored useState and cleaned up unused states.")
