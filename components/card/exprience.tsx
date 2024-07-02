import React from 'react'
import { Timeline, TimelineItem } from '../ui/timeline'
import Card from '../ui/card'

export default function ExperienceCard() {
  return (
    <Card title="My Expreience">
          <Timeline>
        {
          exprienceData.map((exp, i) => (
            <TimelineItem key={i} date={ exp.date} title={exp.title} subTitle={exp.subTitle} link={exp.link} tag={exp.tag}  />
          ))
            }
              <span>b</span>
      </Timeline>
    </Card>
  )
}


const exprienceData = [
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