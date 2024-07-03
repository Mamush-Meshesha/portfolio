import React from 'react'
import Card from '../ui/card'
import { stackData } from '@/data'
import Tooltip from '../ui/tooltip';

export default function StackCard() {
  return (
    <Card title="My Tech Stack">
      <div className="flex flex-col gap-6 mt-2">
        {stackData.map((tech, i) => (
          <div
            key={i}
            className="grid grid-cols-2 items-center gap-[20px] "
            style={{ gridTemplateColumns: "50px ifr" }}
          >
            {/* stack group name */}
            <div className="h-auto flex-none break-words whitespace-pre ">
              <p className="text-secondary-foreground ">{tech.title}</p>
            </div>
            {/* tooltip */}
            <div className="flex gap-4">
              {tech.stack?.map((stack) => (
                <Tooltip
                  key={stack.id}
                  title={stack.title}
                  image ={stack.image}
                  bgColor={stack.bgColor}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
