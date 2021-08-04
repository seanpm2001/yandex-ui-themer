import React, { FC } from 'react'

import { IconButtonBase, cnIconButtonBase, IconButtonBaseProps } from '../IconButtonBase'
import { SunIcon } from '../../../icons'

export const SunIconButton: FC<IconButtonBaseProps> = ({ dark, ...props }) => {
  return (
    <IconButtonBase dark={dark} {...props}>
      <SunIcon type={dark ? 'black' : 'white'} className={cnIconButtonBase('Icon')} />
    </IconButtonBase>
  )
}