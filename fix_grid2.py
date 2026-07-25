import sys

with open('src/components/Process.tsx', 'r') as f:
    content = f.read()

start_str = '        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 w-full">'
end_str = '</AnimatePresence>'

start_idx = content.find(start_str)
end_idx = content.find(end_str)

if start_idx != -1 and end_idx != -1:
    end_idx += len(end_str)
    
    new_block = """        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
          {CAPABILITIES.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group flex flex-col bg-sand text-charcoal rounded-[2rem] p-4 md:p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sand/10"
              >
                <div className="w-full aspect-[4/3] overflow-hidden rounded-2xl mb-6 relative">
                  <img
                    src={item.image}
                    alt={item.category}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col flex-grow px-2 pb-2">
                  <div className="flex items-center gap-3 mb-3">
                     <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-charcoal text-sand font-bold text-sm">
                       {index + 1}
                     </span>
                     <h3 className="text-lg font-bold uppercase tracking-tight">
                       {item.category}
                     </h3>
                  </div>
                  <p className="text-charcoal/80 text-sm md:text-base leading-relaxed font-medium pl-11">
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>"""
    
    content = content[:start_idx] + new_block + content[end_idx:]
    with open('src/components/Process.tsx', 'w') as f:
        f.write(content)
    print("Replaced successfully")
else:
    print("Could not find blocks")
