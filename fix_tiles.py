import sys

with open('src/components/Process.tsx', 'r') as f:
    content = f.read()

target = """                <div className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${isHovered ? 'bg-gradient-to-t from-charcoal/95 via-charcoal/60 to-charcoal/20' : 'bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent'}`} />
                <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end pointer-events-none">
                  <span className={`text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-sand drop-shadow-md transition-all duration-700 ${isHovered ? 'mb-2' : 'mb-0'}`}>
                    {item.category}
                  </span>
                  <div className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isHovered ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className={`text-sand text-xs md:text-sm leading-relaxed transform transition-transform duration-700 ${isHovered ? 'translate-y-0' : 'translate-y-4'}`}>
                      {item.detail}
                    </p>
                  </div>
                </div>"""

replacement = """                <div className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${isHovered ? 'bg-gradient-to-t from-charcoal/95 via-charcoal/60 to-charcoal/20' : 'bg-gradient-to-t from-charcoal/90 via-charcoal/60 to-charcoal/10'}`} />
                <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end pointer-events-none">
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-sand drop-shadow-md mb-2">
                    {item.category}
                  </span>
                  <div className="overflow-hidden max-h-24 opacity-100">
                    <p className="text-sand text-xs md:text-sm leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>"""

if target in content:
    content = content.replace(target, replacement)
    with open('src/components/Process.tsx', 'w') as f:
        f.write(content)
    print("Replaced successfully")
else:
    print("Target not found")
