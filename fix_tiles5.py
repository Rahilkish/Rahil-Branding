import sys

with open('src/components/Process.tsx', 'r') as f:
    content = f.read()

target = "                <div className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${isHovered ? 'bg-gradient-to-t from-charcoal/95 via-charcoal/60 to-charcoal/20' : 'bg-gradient-to-t from-charcoal/90 via-charcoal/60 to-charcoal/10'}`} />"

replacement = """                <div className="absolute inset-0 bg-black/40 pointer-events-none transition-opacity duration-700" />
                <div className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${isHovered ? 'bg-gradient-to-t from-black/95 via-black/70 to-transparent' : 'bg-gradient-to-t from-black/90 via-black/60 to-transparent'}`} />"""

content = content.replace(target, replacement)

with open('src/components/Process.tsx', 'w') as f:
    f.write(content)
