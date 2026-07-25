import sys
import re

with open('src/components/Process.tsx', 'r') as f:
    content = f.read()

# Replace the gradient overlay
content = re.sub(
    r"<div className=\{`absolute inset-0 transition-opacity duration-700 pointer-events-none \$\{isHovered \? 'bg-gradient-to-t from-charcoal/95 via-charcoal/60 to-charcoal/20' : 'bg-gradient-to-t from-charcoal/90 via-charcoal/60 to-charcoal/10'\}'`\} />",
    r'<div className="absolute inset-0 bg-black/50 pointer-events-none transition-opacity duration-700" />\n                <div className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${isHovered ? \'bg-gradient-to-t from-black/95 via-black/70 to-transparent\' : \'bg-gradient-to-t from-black/90 via-black/60 to-transparent\'}`} />',
    content
)

content = content.replace('text-sand drop-shadow-md mb-2', 'text-white drop-shadow-lg mb-2')
content = content.replace('text-sand text-xs md:text-sm leading-relaxed', 'text-white/95 font-medium text-xs md:text-sm leading-relaxed drop-shadow-md')

with open('src/components/Process.tsx', 'w') as f:
    f.write(content)
