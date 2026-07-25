import sys

with open('src/components/Process.tsx', 'r') as f:
    content = f.read()

target_start = '        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 w-full relative min-h-[600px]">'
target_end = '        </div>\n      </div>\n\n      <AnimatePresence>'

start_idx = content.find(target_start)
end_idx = content.find(target_end)

if start_idx != -1 and end_idx != -1:
    new_block = """        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 w-full">
          {CAPABILITIES.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedItem(item)}
                className="group cursor-pointer flex flex-col"
              >
                <div className="w-full aspect-[4/3] md:aspect-square overflow-hidden rounded-sm mb-6 relative bg-sand/5">
                  <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none" />
                  <img
                    src={item.image}
                    alt={item.category}
                    className="absolute inset-0 w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <h3 className="text-xs md:text-sm font-bold uppercase tracking-[0.15em] text-sand mb-3 group-hover:text-white transition-colors duration-500">
                    {item.category}
                  </h3>
                  <div className="h-[1px] w-full bg-sand/20 mb-4 group-hover:bg-sand/40 transition-colors duration-500" />
                  <p className="text-sand/70 text-sm md:text-base leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
"""
    content = content[:start_idx] + new_block + content[end_idx:]
    
    with open('src/components/Process.tsx', 'w') as f:
        f.write(content)
    print("Replaced successfully")
else:
    print("Could not find blocks")
