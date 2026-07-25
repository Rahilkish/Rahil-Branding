import sys

with open('src/components/Process.tsx', 'r') as f:
    content = f.read()

content = content.replace("import { motion, AnimatePresence } from 'motion/react';", "import { motion } from 'motion/react';")
content = content.replace("import React, { useState, useEffect } from 'react';", "import React from 'react';")
content = content.replace("import { createPortal } from 'react-dom';\n", "")

content = content.replace("  const [selectedItem, setSelectedItem] = useState<typeof CAPABILITIES[0] | null>(null);\n  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);\n  const [showMoreInfo, setShowMoreInfo] = useState(false);\n\n  useEffect(() => {\n    const handleKeyDown = (e: KeyboardEvent) => {\n      if (e.key === 'Escape') {\n        setSelectedItem(null);\n      }\n    };\n\n    if (selectedItem) {\n      window.addEventListener('keydown', handleKeyDown);\n    }\n\n    return () => window.removeEventListener('keydown', handleKeyDown);\n  }, [selectedItem]);", "")

with open('src/components/Process.tsx', 'w') as f:
    f.write(content)
print("Cleaned up unused imports/state")
