import { InputHTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'

export interface TextInputRootProps {
  children: ReactNode
}

interface TextInputIconProps {
  children: ReactNode;
}

interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div
      className="flex item-center gap-3 w-full h-12 py-3 px-3 rounded bg-gray-800 focus-within:ring-2 ring-cyan-300"
    >
      {children}
    </div>
  )
}

TextInputRoot.displayName = 'TextInput.Root';

function TextInputIcon({ children }: TextInputIconProps) {
  return (
    <Slot className="w-6 h-6 text-gray-400">
      {children}
    </Slot>
  )
}

TextInputIcon.displayName = 'TextInput.Icon';

function TextInputInput(props: TextInputInputProps) {
  return (
      <input
        className="bg-transparent flex-1 text-gray-100 text-xs outline-none placeholde:text-gray-400 "
        {...props}
      />
  )
}

TextInputInput.displayName = 'TextInput.Input';

export const TextInput = {
  Root: TextInputRoot,
  Icon:TextInputIcon,
  Input:TextInputInput,
}
