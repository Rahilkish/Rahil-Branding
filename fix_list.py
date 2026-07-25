import sys
import re

with open('src/components/Process.tsx', 'r') as f:
    content = f.read()

target_start = '        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">'
target_end = '        </div>\n      </div>\n\n      <AnimatePresence>'

# Find the exact indices
start_idx = content.find(target_start)
end_idx = content.find(target_end)

if start_idx != -1 and end_idx != -1:
    old_block = content[start_idx:end_idx]
    
    new_block = """        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 w-full relative min-h-[600px]">
          {/* List */}
          <div className="w-full md:w-1/2 flex flex-col justify-center border-t border-sand/20">
            {CAPABILITIES.map((item, index) => {
              const isActive = hoveredIndex !== null ? hoveredIndex === index : index === 0;
              return (
                <div 
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onClick={() => setSelectedItem(item)}
                  className="py-6 md:py-8 border-b border-sand/20 cursor-pointer group"
                >
                  <div className="flex items-center justify-between">
                    <h3 className={`text-xl md:text-3xl font-serif transition-colors duration-500 ${isActive ? 'text-sand' : 'text-sand/40 group-hover:text-sand/70'}`}>
                      {item.category}
                    </h3>
                    <div className={`transition-all duration-500 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                      <span className="text-xs uppercase tracking-widest text-sand/60 font-mono">
                        0{index + 1}
                      </span>
                    </div>
                  </div>
                  <div className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}>
                    <p className="text-sand/80 text-sm md:text-base mb-4 md:mb-0 max-w-sm">
                      {item.detail}
                    </p>
                    {/* Mobile Image */}
                    <div className="block md:hidden aspect-[4/3] w-full overflow-hidden rounded-sm mt-6">
                       <img src={item.image} alt={item.category} className="w-full h-full object-cover filter grayscale" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Sticky Image Container (Desktop) */}
          <div className="hidden md:block w-1/2 relative h-[600px] sticky top-24 rounded-sm overflow-hidden">
             {CAPABILITIES.map((item, index) => {
                const isActive = hoveredIndex !== null ? hoveredIndex === index : index === 0;
                return (
                  <img 
                    key={index}
                    src={item.image}
                    alt={item.category}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
                  />
                );
             })}
             <div className="absolute inset-0 bg-charcoal/10 pointer-events-none" />
          </div>
"""
    content = content[:start_idx] + new_block + content[end_idx:]
    
    with open('src/components/Process.tsx', 'w') as f:
        f.write(content)
    print("Replaced successfully")
else:
    print("Could not find blocks")
