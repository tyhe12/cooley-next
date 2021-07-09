import MaskedInput from 'react-text-mask'
import React from 'react'

export interface Props {
  inputRef: (ref: HTMLInputElement | null) => void
}

const PhoneField: React.FC<Props> = (props: Props) => {
  const { inputRef, ...other } = props

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null)
      }}
      mask={[
        '(',
        /[1-9]/,
        /\d/,
        /\d/,
        ')',
        ' ',
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ]}
      placeholderChar={'\u2000'}
      showMask
    />
  )
}

export default PhoneField
