import React from 'react'
import { Text } from '@yandex/ui/Text/desktop/bundle'

import { Headline } from '../../../pages/componentsPage/components/Showcase/Showcases/Overview/Headline'

export const TextShowcase = () => {
  return (
    <>
      <Headline>Text</Headline>
      <div className="Showcase-Item">
        <Text as="div">
          Миссия Яндекса — помогать людям решать задачи и достигать своих целей в жизни.
        </Text>
      </div>
    </>
  )
}