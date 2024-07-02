import React from 'react'
import { Timeline, TimelineItem } from '../ui/timeline'
import Card from '../ui/card'

export default function EducationCard() {
  return (
    <Card title="My Educations">
      <Timeline>
        {educationData.map((edu, i) => (
          <TimelineItem
            key={i}
            date={edu.date}
            title={edu.title}
            subTitle={edu.subTitle}
            link={edu.link}
            tag={edu.tag}
          />
        ))}
        <span>b</span>
      </Timeline>
    </Card>
  );
}


const educationData = [
  {
    date: 'jan,2023 - Now ',
    title: 'Full stack',
    subTitle: 'Nerd ',
    link: 'https://www.udemy.com/user/mohamed-hajji-25',
    tag: 'Home'
  },
  {
    date: 'jan,2023 - Now ',
    title: 'Full stack',
    subTitle: 'Nerd ',
    link: 'https://www.toptal.com',
    tag: 'Home'
  }
]