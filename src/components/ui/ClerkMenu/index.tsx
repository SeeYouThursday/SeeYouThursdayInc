'use client'

import { UserButton } from '@clerk/nextjs'
import { IconLayoutBoard} from '@tabler/icons-react'
import { IconMonkeybar} from '@tabler/icons-react'


export default function ClerkMenu() {
  return (
      <UserButton>
        <UserButton.MenuItems>
          <UserButton.Link
            label="Dashboard"
            labelIcon={<IconLayoutBoard className="w-4 h-4" />}
            href="/dashboard"
          />
            <UserButton.Link
                label="Brian's Playground"
                labelIcon={<IconMonkeybar className="w-4 h-4" />}
                href="/devon-playground"
            />
             <UserButton.Link
                label="Devon's Playground"
                labelIcon={<IconMonkeybar className="w-4 h-4" />}
                href="/Brian-playground"
            />

        </UserButton.MenuItems>
      </UserButton>
  )
}